async function githubFetch(url) {
    const headers = { "Accept": "application/vnd.github+json" };
    const token = getGithubToken();
    if (token) headers["Authorization"] = "Bearer " + token;
    let res;
    try {
        res = await fetch(url, { cache: "no-store", headers });
    } catch (e) {
        console.error("[FueyApp] githubFetch network error:", url, e);
        throw new Error("NETWORK");
    }
    if (res.status === 401) throw new Error("UNAUTHORIZED");
    if (res.status === 403) {
        const data = await res.json().catch(() => ({}));
        if (data.message && data.message.toLowerCase().includes("rate limit")) throw new Error("RATE_LIMIT");
        throw new Error("HTTP 403");
    }
    if (res.status === 404) throw new Error("NOT_FOUND");
    if (!res.ok) throw new Error("HTTP " + res.status);
    return await res.json();
}

function getMaxMarketPage() {
    if (!state.marketTotal) return 1;
    const byTotal = Math.ceil(state.marketTotal / MARKET_PAGE_SIZE);
    return Math.max(1, Math.min(byTotal, MARKET_MAX_PAGES));
}

function translateMarketError(err) {
    const msg = String((err && err.message) || "");
    if (msg === "RATE_LIMIT") return { key: "marketRateLimit", detail: "GitHub API: rate limit exceeded" };
    if (msg === "UNAUTHORIZED") return { key: "marketUnauthorized", detail: "GitHub API: 401 Unauthorized" };
    if (msg === "NOT_FOUND") return { key: "marketRepoNotFound", detail: "GitHub API: 404 Not Found" };
    if (msg === "TIMEOUT") return { key: "marketErrorTimeout", detail: "Request timeout" };
    if (msg === "NETWORK") return { key: "marketErrorNetwork", detail: "Network error" };
    return { key: "marketError", detail: msg || "Unknown error" };
}

async function marketLoadSearchInternal(searchQ, page, mode) {
    const token = ++state.marketRequestToken;
    state.marketState = "loading";
    state.marketResults = [];
    state.marketDetail = null;
    state.detailBuilt = false;
    state.marketErrorKey = "";
    state.marketErrorDetail = "";
    state.marketMode = mode;
    state.marketPage = page;
    renderMarket();
    try {
        const url = "https://api.github.com/search/repositories?q=" + encodeURIComponent(searchQ) +
            "&sort=stars&order=desc&per_page=" + MARKET_PAGE_SIZE + "&page=" + page;
        console.log("[FueyApp] market fetch:", url);
        const data = await githubFetch(url);
        if (token !== state.marketRequestToken) return;
        state.marketResults = Array.isArray(data.items) ? data.items : [];
        state.marketTotal = Number(data.total_count) || 0;
        state.marketState = state.marketResults.length ? "results" : "empty";
        console.log("[FueyApp] market loaded:", state.marketResults.length, "items");
    } catch (err) {
        console.error("[FueyApp] market load failed:", err);
        if (token !== state.marketRequestToken) return;
        const tr = translateMarketError(err);
        state.marketState = "error";
        state.marketErrorKey = tr.key;
        state.marketErrorDetail = tr.detail;
    }
    renderMarket();
}

function marketLoad(query, page) {
    const q = String(query || "").trim();
    const p = page || 1;
    const repoMatch = /^([\w.-]+)\/([\w.-]+)$/.exec(q);
    if (repoMatch) { marketOpenRepo(repoMatch[1], repoMatch[2]); return; }
    if (!q) {
        state.marketQuery = "";
        marketLoadSearchInternal(MARKET_TRENDING_QUERY, p, "trending");
    } else {
        state.marketQuery = q;
        marketLoadSearchInternal(q, p, "search");
    }
}

async function marketLoadTrending(page) {
    state.marketQuery = "";
    await marketLoadSearchInternal(MARKET_TRENDING_QUERY, page || 1, "trending");
}

async function marketLoadFueySeek() {
    const token = ++state.marketRequestToken;
    state.marketState = "loading";
    state.marketMode = "fueyseek";
    state.marketQuery = "";
    state.marketResults = [];
    state.marketTotal = 0;
    state.marketPage = 1;
    state.marketErrorKey = "";
    state.marketErrorDetail = "";
    state.marketDetail = null;
    state.detailBuilt = false;
    renderMarket();
    try {
        const data = await githubFetch("https://api.github.com/users/" + FUEYSEEK_USER + "/repos?sort=updated&per_page=100&type=owner");
        if (token !== state.marketRequestToken) return;
        state.marketResults = Array.isArray(data) ? data : [];
        state.marketState = state.marketResults.length ? "results" : "empty";
    } catch (err) {
        if (token !== state.marketRequestToken) return;
        const tr = translateMarketError(err);
        state.marketState = "error";
        state.marketErrorKey = tr.key;
        state.marketErrorDetail = tr.detail;
    }
    renderMarket();
}

function marketSearch(query) {
    const q = String(query || "").trim();
    if (!q) { marketLoadTrending(1); return; }
    marketLoad(q, 1);
}

function marketGoPage(page) {
    const maxPage = getMaxMarketPage();
    if (page < 1 || page > maxPage) return;
    const q = state.marketMode === "search" ? state.marketQuery : "";
    marketLoad(q, page);
}

async function marketOpenRepo(owner, repo) {
    const token = ++state.marketRequestToken;
    state.marketState = "loading";
    state.marketDetail = { owner: owner, repo: repo, info: null, releases: [] };
    state.marketErrorKey = "";
    state.marketErrorDetail = "";
    state.detailTab = "readme";
    state.detailData = { readme: null, contributors: null, wiki: null };
    state.repoFilesState = { path: "", items: null, loading: false, error: "" };
    state.detailBuilt = false;
    renderMarket();
    try {
        const info = await githubFetch("https://api.github.com/repos/" + owner + "/" + repo);
        if (token !== state.marketRequestToken) return;
        const releases = await githubFetch("https://api.github.com/repos/" + owner + "/" + repo + "/releases?per_page=8");
        if (token !== state.marketRequestToken) return;
        state.marketDetail = { owner: owner, repo: repo, info: info, releases: Array.isArray(releases) ? releases : [] };
        state.marketState = "detail";
        renderMarket();
        loadDetailTab("readme");
    } catch (err) {
        if (token !== state.marketRequestToken) return;
        const tr = translateMarketError(err);
        state.marketState = "error";
        state.marketErrorKey = tr.key;
        state.marketErrorDetail = tr.detail;
        renderMarket();
    }
}

function marketBack() {
    state.marketRequestToken++;
    state.marketDetail = null;
    state.detailBuilt = false;
    state.marketState = state.marketResults.length ? "results" : "idle";
    renderMarket();
}

function fixRelativePaths(html, owner, repo) {
    if (!owner || !repo) return html;
    const rawBase = "https://raw.githubusercontent.com/" + owner + "/" + repo + "/HEAD/";
    const blobBase = "https://github.com/" + owner + "/" + repo + "/blob/HEAD/";
    return html.replace(/(src|href)=(["'])(?!https?:|\/\/|#|data:|mailto:|javascript:|blob:)([^"']+)\2/gi, function (m, attr, quote, path) {
        let clean = path.replace(/^\.\//, "").replace(/^\/+/, "");
        if (!clean) return m;
        const target = attr.toLowerCase() === "href" ? blobBase : rawBase;
        return attr + "=" + quote + target + clean + quote;
    });
}

function renderMarkdown(md, owner, repo) {
    if (!md) return "";
    let html = "";
    if (typeof marked !== "undefined" && marked && typeof marked.parse === "function") {
        try {
            marked.setOptions({ gfm: true, breaks: true, headerIds: false, mangle: false });
            html = marked.parse(md);
        } catch (e) { html = ""; }
    }
    if (!html) {
        html = escapeHtml(md)
            .replace(/```([\s\S]*?)```/g, (m, code) => "<pre><code>" + code.replace(/\n$/, "") + "</code></pre>")
            .replace(/`([^`\n]+)`/g, "<code>$1</code>")
            .replace(/^###### (.+)$/gm, "<h6>$1</h6>")
            .replace(/^##### (.+)$/gm, "<h5>$1</h5>")
            .replace(/^#### (.+)$/gm, "<h4>$1</h4>")
            .replace(/^### (.+)$/gm, "<h3>$1</h3>")
            .replace(/^## (.+)$/gm, "<h2>$1</h2>")
            .replace(/^# (.+)$/gm, "<h1>$1</h1>")
            .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">')
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
            .replace(/\*\*([^*\n]+)\*\*/g, "<strong>$1</strong>")
            .replace(/\*([^*\n]+)\*/g, "<em>$1</em>")
            .replace(/((?:^- .+(?:\n|$))+)/gm, block => "<ul>" + block.replace(/^- (.+)$/gm, "<li>$1</li>") + "</ul>")
            .replace(/((?:^\d+\. .+(?:\n|$))+)/gm, block => "<ol>" + block.replace(/^\d+\. (.+)$/gm, "<li>$1</li>") + "</ol>")
            .replace(/^&gt; (.+)$/gm, "<blockquote>$1</blockquote>")
            .replace(/^---+$/gm, "<hr>")
            .replace(/\n\n/g, "</p><p>")
            .replace(/\n/g, "<br>")
            .replace(/<p>\s*<\/p>/g, "");
        html = "<p>" + html + "</p>";
    }
    if (owner && repo) html = fixRelativePaths(html, owner, repo);
    return html;
}

async function fetchReadme(owner, repo) {
    const data = await githubFetch("https://api.github.com/repos/" + owner + "/" + repo + "/readme");
    return base64ToUtf8(data.content || "");
}

async function fetchContributors(owner, repo) {
    const data = await githubFetch("https://api.github.com/repos/" + owner + "/" + repo + "/contributors?per_page=30");
    return Array.isArray(data) ? data : [];
}

async function fetchWiki(owner, repo) {
    const candidates = ["Home", "_Sidebar"];
    for (let i = 0; i < candidates.length; i++) {
        const url = "https://raw.githubusercontent.com/wiki/" + owner + "/" + repo + "/" + candidates[i] + ".md?t=" + Date.now();
        try {
            const res = await fetch(url, { cache: "no-store" });
            if (res.ok) {
                const text = await res.text();
                if (text && text.trim()) return text;
            }
        } catch (e) {}
    }
    return null;
}

function parentPath(p) {
    const parts = String(p || "").split("/").filter(Boolean);
    parts.pop();
    return parts.join("/");
}

async function openRepoPath(path) {
    if (!state.marketDetail) return;
    state.detailTab = "files";
    const token = ++state.detailLoadToken;
    state.repoFilesState = { path: path || "", items: null, loading: true, error: "" };
    const detailTabs = document.getElementById("detailTabs");
    if (detailTabs) {
        detailTabs.querySelectorAll(".detail-tab").forEach(t => {
            t.classList.toggle("active", t.dataset.dt === "files");
        });
        if (typeof moveDetailTabIndicator === "function") moveDetailTabIndicator();
    }
    const content = document.getElementById("detailContent");
    if (content) content.innerHTML = renderDetailContent();
    try {
        const apiPath = String(path || "").split("/").filter(Boolean).map(encodeURIComponent).join("/");
        const url = "https://api.github.com/repos/" + state.marketDetail.owner + "/" + state.marketDetail.repo + "/contents" + (apiPath ? "/" + apiPath : "");
        const data = await githubFetch(url);
        if (token !== state.detailLoadToken) return;
        state.repoFilesState.items = Array.isArray(data) ? data : [];
        state.repoFilesState.loading = false;
    } catch (err) {
        if (token !== state.detailLoadToken) return;
        state.repoFilesState.loading = false;
        state.repoFilesState.error = "filesFailed";
    }
    const content2 = document.getElementById("detailContent");
    if (content2) content2.innerHTML = renderDetailContent();
}

function renderRepoFiles() {
    const st = state.repoFilesState;
    if (!st || st.loading) return '<div class="market-msg">' + escapeHtml(t("filesLoading")) + "</div>";
    if (st.error) return '<div class="market-msg error">' + escapeHtml(t(st.error)) + "</div>";
    if (!st.items || !st.items.length) return '<div class="market-msg">' + escapeHtml(t("filesEmpty")) + "</div>";
    const sorted = st.items.slice().sort((a, b) => {
        const da = a.type === "dir" ? 0 : 1;
        const db = b.type === "dir" ? 0 : 1;
        if (da !== db) return da - db;
        return String(a.name || "").localeCompare(String(b.name || ""));
    });
    let html = '<div class="repo-path-bar">';
    if (st.path) {
        html += '<button class="repo-up-btn" data-path="' + escapeHtml(parentPath(st.path)) + '">← ' + escapeHtml(t("filesBack")) + "</button>";
    }
    html += '<span class="repo-path-text">/' + escapeHtml(st.path || "") + "</span></div>";
    html += '<div class="repo-file-list">';
    sorted.forEach(it => {
        const isDir = it.type === "dir";
        const kind = isDir ? "folder" : getFileKind(it.name);
        const icon = isDir ? FILE_ICONS.folder : (FILE_ICONS[kind] || FILE_ICONS.file);
        const size = (!isDir && it.size) ? formatBytes(it.size) : "";
        const dlUrl = it.download_url || "";
        html += '<div class="repo-file-item" data-type="' + (isDir ? "dir" : "file") + '" data-path="' + escapeHtml(it.path || "") + '" data-name="' + escapeHtml(it.name || "") + '" data-url="' + escapeHtml(dlUrl) + '">' +
            '<span class="file-icon file-icon-' + kind + '">' + icon + "</span>" +
            '<span class="repo-file-name">' + escapeHtml(it.name || "") + "</span>" +
            (size ? '<span class="asset-size">' + size + "</span>" : "") +
            (isDir ? "" : '<button class="asset-dl-btn repo-file-dl" data-url="' + escapeHtml(dlUrl) + '" data-filename="' + escapeHtml(it.name || "") + '" data-size="' + (it.size || 0) + '">' + escapeHtml(t("downloadBtn")) + "</button>") +
        "</div>";
    });
    html += "</div>";
    return html;
}

async function loadDetailTab(tabKey) {
    if (!state.marketDetail) return;
    state.detailTab = tabKey;
    const token = ++state.detailLoadToken;
    const detailTabs = document.getElementById("detailTabs");
    if (detailTabs) {
        detailTabs.querySelectorAll(".detail-tab").forEach(t => {
            t.classList.toggle("active", t.dataset.dt === tabKey);
        });
        if (typeof moveDetailTabIndicator === "function") moveDetailTabIndicator();
    }
    if (tabKey === "files") {
        if (!state.repoFilesState || state.repoFilesState.items === null) {
            openRepoPath(state.repoFilesState && state.repoFilesState.path ? state.repoFilesState.path : "");
            return;
        }
        const content = document.getElementById("detailContent");
        if (content) content.innerHTML = renderDetailContent();
        return;
    }
    const needFetch =
        (tabKey === "readme" && state.detailData.readme === null) ||
        (tabKey === "contributors" && state.detailData.contributors === null) ||
        (tabKey === "wiki" && state.detailData.wiki === null);
    if (needFetch) {
        if (tabKey === "readme") state.detailData.readme = "loading";
        if (tabKey === "contributors") state.detailData.contributors = "loading";
        if (tabKey === "wiki") state.detailData.wiki = "loading";
        const c0 = document.getElementById("detailContent");
        if (c0) c0.innerHTML = renderDetailContent();
        try {
            if (tabKey === "readme") {
                const c = await fetchReadme(state.marketDetail.owner, state.marketDetail.repo);
                if (token !== state.detailLoadToken) return;
                state.detailData.readme = { ok: true, content: c };
            } else if (tabKey === "contributors") {
                const list = await fetchContributors(state.marketDetail.owner, state.marketDetail.repo);
                if (token !== state.detailLoadToken) return;
                state.detailData.contributors = { ok: true, list: list };
            } else if (tabKey === "wiki") {
                const text = await fetchWiki(state.marketDetail.owner, state.marketDetail.repo);
                if (token !== state.detailLoadToken) return;
                state.detailData.wiki = text ? { ok: true, content: text } : { ok: false, empty: true };
            }
        } catch (err) {
            if (token !== state.detailLoadToken) return;
            if (tabKey === "readme") state.detailData.readme = { ok: false, error: err.message || "fail" };
            if (tabKey === "contributors") state.detailData.contributors = { ok: false, error: err.message || "fail" };
            if (tabKey === "wiki") state.detailData.wiki = { ok: false, error: err.message || "fail" };
        }
        if (token !== state.detailLoadToken) return;
        const c1 = document.getElementById("detailContent");
        if (c1) c1.innerHTML = renderDetailContent();
    } else {
        const content = document.getElementById("detailContent");
        if (content) content.innerHTML = renderDetailContent();
    }
}

function renderDetailContent() {
    if (!state.marketDetail) return "";
    const owner = state.marketDetail.owner;
    const repo = state.marketDetail.repo;
    if (state.detailTab === "files") return renderRepoFiles();
    if (state.detailTab === "changelog") {
        const releases = state.marketDetail.releases || [];
        if (!releases.length) return '<div class="market-msg">' + escapeHtml(t("marketNoReleases")) + "</div>";
        const parts = [];
        releases.forEach(rel => {
            const tag = escapeHtml(rel.tag_name || rel.name || "");
            const name = escapeHtml(rel.name || "");
            const date = formatDateShort(rel.published_at || "");
            const body = rel.body ? renderMarkdown(rel.body, owner, repo) : "";
            const assets = Array.isArray(rel.assets) ? rel.assets : [];
            const assetHtml = [];
            if (!assets.length) {
                assetHtml.push('<div class="asset-item" style="justify-content:center;opacity:0.6;">' + escapeHtml(t("marketNoAssets")) + "</div>");
            } else {
                assets.forEach(a => {
                    const an = escapeHtml(a.name || "");
                    const size = a.size ? formatBytes(a.size) : "";
                    const url = escapeHtml(a.browser_download_url || "");
                    const kind = getFileKind(a.name || "");
                    const icon = FILE_ICONS[kind] || FILE_ICONS.file;
                    assetHtml.push(
                        '<div class="asset-item">' +
                            '<span class="file-icon file-icon-' + kind + '">' + icon + "</span>" +
                            '<span class="asset-name" title="' + an + '">' + an + "</span>" +
                            (size ? '<span class="asset-size">' + size + "</span>" : "") +
                            '<button class="asset-dl-btn" data-url="' + url + '" data-filename="' + an + '" data-size="' + (a.size || 0) + '">' + escapeHtml(t("downloadBtn")) + "</button>" +
                        "</div>"
                    );
                });
            }
            let block = '<div class="release-block">';
            block += '<div class="release-tag"><span>' + tag + "</span>" + (date ? '<span class="release-date">' + date + "</span>" : "") + "</div>";
            if (name && name !== (rel.tag_name || "")) block += '<div class="release-name">' + name + "</div>";
            if (body) block += '<div class="release-body md-content">' + body + "</div>";
            block += '<div class="asset-list">' + assetHtml.join("") + "</div>";
            block += "</div>";
            parts.push(block);
        });
        return parts.join("");
    }
    if (state.detailTab === "readme") {
        if (state.detailData.readme === "loading" || state.detailData.readme === null) return '<div class="market-msg">' + escapeHtml(t("readmeLoading")) + "</div>";
        if (!state.detailData.readme.ok) return '<div class="market-msg error">' + escapeHtml(t("readmeFailed")) + "</div>";
        if (!state.detailData.readme.content || !state.detailData.readme.content.trim()) return '<div class="market-msg">' + escapeHtml(t("readmeEmpty")) + "</div>";
        return '<div class="md-content">' + renderMarkdown(state.detailData.readme.content, owner, repo) + "</div>";
    }
    if (state.detailTab === "contributors") {
        if (state.detailData.contributors === "loading" || state.detailData.contributors === null) return '<div class="market-msg">' + escapeHtml(t("contributorsLoading")) + "</div>";
        if (!state.detailData.contributors.ok) return '<div class="market-msg error">' + escapeHtml(t("contributorsFailed")) + "</div>";
        if (!state.detailData.contributors.list.length) return '<div class="market-msg">' + escapeHtml(t("contributorsEmpty")) + "</div>";
        const items = state.detailData.contributors.list.map(u => {
            const login = escapeHtml(u.login || "");
            const avatar = escapeHtml(u.avatar_url || "");
            const profile = escapeHtml(u.html_url || "#");
            const count = Number(u.contributions) || 0;
            return '<a class="contributor-item" href="' + profile + '" target="_blank" rel="noopener">' +
                '<img class="contributor-avatar" src="' + avatar + '" alt="' + login + '" referrerpolicy="no-referrer">' +
                '<span class="contributor-name">' + login + "</span>" +
                '<span class="contributor-count">' + count + " " + escapeHtml(t("contributorCommits")) + "</span>" +
            "</a>";
        });
        return '<div class="contributor-list">' + items.join("") + "</div>";
    }
    if (state.detailTab === "wiki") {
        if (state.detailData.wiki === "loading" || state.detailData.wiki === null) return '<div class="market-msg">' + escapeHtml(t("wikiLoading")) + "</div>";
        if (!state.detailData.wiki.ok) {
            if (state.detailData.wiki.empty) return '<div class="market-msg">' + escapeHtml(t("wikiEmpty")) + "</div>";
            return '<div class="market-msg error">' + escapeHtml(t("wikiFailed")) + "</div>";
        }
        return '<div class="md-content">' + renderMarkdown(state.detailData.wiki.content, owner, repo) + "</div>";
    }
    return "";
}

function renderMarketError() {
    let html = '<div class="market-msg error">';
    html += '<div>' + escapeHtml(t(state.marketErrorKey || "marketError")) + '</div>';
    if (state.marketErrorDetail) {
        html += '<div class="market-err-code">' + escapeHtml(state.marketErrorDetail) + '</div>';
    }
    html += '</div>';
    html += '<div class="market-retry-wrap">';
    html += '<button class="market-retry-btn" id="marketRetryBtn">' + escapeHtml(t("marketRetry")) + "</button>";
    const needsToken = state.marketErrorKey === "marketRateLimit" || state.marketErrorKey === "marketUnauthorized";
    if (needsToken) {
        html += '<div class="market-hint-link"><a id="marketOpenSettingsLink">' + escapeHtml(t("marketOpenSettings")) + "</a></div>";
    }
    html += "</div>";
    return html;
}

function animateMarketItems() {
    const body = document.getElementById("marketBody");
    if (!body) return;
    const list = body.querySelector(".market-list");
    if (!list) return;
    const items = list.querySelectorAll(".market-item");
    if (!items.length) return;
    items.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(16px)";
        el.style.transition = "none";
    });
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            items.forEach((el, i) => {
                el.style.transition = "opacity 0.5s cubic-bezier(0.4,0,0.2,1), transform 0.5s cubic-bezier(0.4,0,0.2,1)";
                el.style.transitionDelay = (i * 60) + "ms";
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            });
        });
    });
}

function bindDetailContentEvents() {
    const content = document.getElementById("detailContent");
    if (!content) return;
    if (content._delegated) return;
    content._delegated = true;
    content.addEventListener("click", e => {
        const tgt = e.target;
        if (!tgt || !tgt.closest) return;
        const assetBtn = tgt.closest(".asset-dl-btn, .repo-file-dl");
        if (assetBtn) {
            e.stopPropagation();
            const url = assetBtn.getAttribute("data-url");
            const filename = assetBtn.getAttribute("data-filename");
            const size = parseInt(assetBtn.getAttribute("data-size") || "0", 10) || 0;
            if (url && filename) startMarketDownload(url, filename, size);
            return;
        }
        const upBtn = tgt.closest(".repo-up-btn");
        if (upBtn) {
            e.stopPropagation();
            openRepoPath(upBtn.getAttribute("data-path") || "");
            return;
        }
        const dirItem = tgt.closest(".repo-file-item[data-type='dir']");
        if (dirItem) {
            openRepoPath(dirItem.getAttribute("data-path") || "");
            return;
        }
    });
}

function renderMarket() {
    const body = document.getElementById("marketBody");
    const searchBtn = document.getElementById("marketSearchBtn");
    const input = document.getElementById("marketInput");
    if (!body || !searchBtn || !input) return;
    searchBtn.textContent = t("marketSearchBtn");
    input.placeholder = t("marketPlaceholder");

    const qTrending = document.getElementById("mQBtTrending");
    const qFuey = document.getElementById("mQBtFueySeek");
    if (qTrending) {
        qTrending.textContent = t("marketTrendingBtn");
        qTrending.classList.toggle("active", state.marketMode === "trending");
    }
    if (qFuey) {
        qFuey.textContent = t("marketFueySeekBtn");
        qFuey.classList.toggle("active", state.marketMode === "fueyseek");
    }

    if (state.marketState === "idle") {
        body.innerHTML = '<div class="market-msg">' + escapeHtml(t("marketIdle")) + "</div>";
        searchBtn.disabled = false;
        return;
    }
    if (state.marketState === "loading") {
        body.innerHTML = '<div class="market-msg">' + escapeHtml(t("marketLoading")) + "</div>";
        searchBtn.disabled = true;
        return;
    }
    if (state.marketState === "error") {
        body.innerHTML = renderMarketError();
        const retryBtn = document.getElementById("marketRetryBtn");
        if (retryBtn) {
            retryBtn.addEventListener("click", () => {
                if (state.marketMode === "fueyseek") marketLoadFueySeek();
                else if (state.marketMode === "search" && state.marketQuery) marketLoad(state.marketQuery, 1);
                else marketLoadTrending(1);
            });
        }
        const openSet = document.getElementById("marketOpenSettingsLink");
        if (openSet) {
            openSet.addEventListener("click", () => {
                const panel = document.getElementById("settingsPanel");
                if (panel) panel.classList.add("open");
                startGithubStatusAuto();
            });
        }
        searchBtn.disabled = false;
        return;
    }
    if (state.marketState === "empty") {
        body.innerHTML = '<div class="market-msg">' + escapeHtml(t("marketNoResults")) + "</div>";
        searchBtn.disabled = false;
        return;
    }

    if (state.marketState === "results") {
        searchBtn.disabled = false;
        const isFueySeek = state.marketMode === "fueyseek";
        const isSearch = state.marketMode === "search";
        const maxPage = isFueySeek ? 1 : getMaxMarketPage();
        const hasPrev = !isFueySeek && state.marketPage > 1;
        const hasNext = !isFueySeek && state.marketPage < maxPage;
        const headerText = isFueySeek ? t("marketFueySeekHint") : (isSearch ? t("marketSearchHint") : t("marketTrendingHint"));
        const countText = isFueySeek
            ? state.marketResults.length + " " + t("reposLabel")
            : t("pageInfo", { current: state.marketPage, total: maxPage });
        const parts = [];
        parts.push('<div class="market-header-line"><span>' + escapeHtml(headerText) + '</span><span>' + escapeHtml(countText) + '</span></div>');
        state.marketResults.forEach(item => {
            const full = escapeHtml(item.full_name || "");
            const name = escapeHtml(item.name || "");
            const desc = escapeHtml(item.description || "");
            const stars = Number(item.stargazers_count) || 0;
            const updated = formatDateShort(item.updated_at || item.pushed_at || "");
            const owner = (item.owner && item.owner.login) ? item.owner.login : "";
            const repo = item.name || "";
            parts.push(
                '<div class="market-item" data-owner="' + escapeHtml(owner) + '" data-repo="' + escapeHtml(repo) + '">' +
                    '<div class="market-item-name">' + name + '</div>' +
                    (desc ? '<div class="market-item-desc">' + desc + '</div>' : "") +
                    '<div class="market-item-meta">' +
                        '<span>' + full + '</span>' +
                        '<span>★ ' + stars + " " + escapeHtml(t("starsLabel")) + '</span>' +
                        (updated ? '<span>' + escapeHtml(t("updatedLabel")) + " " + updated + '</span>' : "") +
                    '</div>' +
                '</div>'
            );
        });
        if (!isFueySeek && maxPage > 1) {
            parts.push(
                '<div class="market-pagination">' +
                    '<button class="page-btn prev" data-page="' + (state.marketPage - 1) + '"' + (hasPrev ? "" : " disabled") + '>' + escapeHtml(t("prevPage")) + '</button>' +
                    '<span class="page-info">' + escapeHtml(t("pageInfo", { current: state.marketPage, total: maxPage })) + '</span>' +
                    '<button class="page-btn next" data-page="' + (state.marketPage + 1) + '"' + (hasNext ? "" : " disabled") + '>' + escapeHtml(t("nextPage")) + '</button>' +
                '</div>'
            );
        }
        body.innerHTML = '<div class="market-list">' + parts.join("") + "</div>";
        body.querySelectorAll(".market-item").forEach(el => {
            el.addEventListener("click", () => {
                const owner = el.getAttribute("data-owner");
                const repo = el.getAttribute("data-repo");
                if (owner && repo) marketOpenRepo(owner, repo);
            });
        });
        body.querySelectorAll(".page-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                if (btn.disabled) return;
                const page = parseInt(btn.dataset.page, 10);
                if (!isNaN(page)) marketGoPage(page);
            });
        });
        animateMarketItems();
        return;
    }

    if (state.marketState === "detail" && state.marketDetail) {
        searchBtn.disabled = false;
        if (!state.detailBuilt) {
            const info = state.marketDetail.info || {};
            const detailTitle = escapeHtml(info.full_name || state.marketDetail.owner + "/" + state.marketDetail.repo);
            const detailDesc = escapeHtml(info.description || "");
            const tabs = [
                { key: "readme", label: t("detailReadme") },
                { key: "changelog", label: t("detailChangelog") },
                { key: "files", label: t("detailFiles") },
                { key: "contributors", label: t("detailContributors") },
                { key: "wiki", label: t("detailWiki") }
            ];
            const tabHtml = tabs.map(tb =>
                '<button class="detail-tab' + (state.detailTab === tb.key ? " active" : "") + '" data-dt="' + tb.key + '">' + escapeHtml(tb.label) + "</button>"
            ).join("");
            const parts = [];
            parts.push('<div class="market-back-row"><button class="market-back-btn" id="marketBackBtn">← ' + escapeHtml(t("backBtn")) + "</button></div>");
            parts.push('<div class="market-detail-title">' + detailTitle + "</div>");
            if (detailDesc) parts.push('<div class="market-detail-desc">' + detailDesc + "</div>");
            parts.push('<div class="detail-tabs" id="detailTabs"><div class="detail-tab-indicator" id="detailTabIndicator"></div>' + tabHtml + "</div>");
            parts.push('<div class="detail-content" id="detailContent"></div>');
            body.innerHTML = parts.join("");
            state.detailBuilt = true;
            const backBtn = document.getElementById("marketBackBtn");
            if (backBtn) backBtn.addEventListener("click", marketBack);
            bindDetailContentEvents();
            setupDetailTabsDrag();
            requestAnimationFrame(() => {
                if (typeof moveDetailTabIndicator === "function") moveDetailTabIndicator(true);
            });
        } else {
            const content = document.getElementById("detailContent");
            if (content) content.innerHTML = renderDetailContent();
        }
        return;
    }
}