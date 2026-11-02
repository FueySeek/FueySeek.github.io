let downloadData = null;
let downloadFiltered = null;
let currentDataSrc = null;
let loadToken = 0;

function getCurrentLang() {
    return localStorage.getItem("fuey-lang") || "en";
}

function getDataSourceSafe() {
    if (typeof getDataSource === "function") return getDataSource();
    return localStorage.getItem("fuey-data-source") || "github";
}

function withCacheBust(url) {
    const sep = url.indexOf("?") === -1 ? "?" : "&";
    return url + sep + "_=" + Date.now();
}

function loadScript(url, expectKey) {
    return new Promise((resolve, reject) => {
        window[expectKey] = null;
        const s = document.createElement("script");
        s.src = url;
        s.onload = () => {
            if (s.parentNode) s.parentNode.removeChild(s);
            if (window[expectKey]) resolve(window[expectKey]);
            else reject(new Error("No data set by " + url));
        };
        s.onerror = () => {
            if (s.parentNode) s.parentNode.removeChild(s);
            reject(new Error("Load error: " + url));
        };
        document.head.appendChild(s);
    });
}

function getGithubUrls(filename) {
    return [
        "https://fueyseek.github.io/data/" + filename,
        "https://raw.githubusercontent.com/FueySeek/FueySeek.github.io/main/data/" + filename,
        "https://cdn.jsdelivr.net/gh/FueySeek/FueySeek.github.io@main/data/" + filename
    ];
}

function applyCurrentSearch() {
    const input = document.getElementById("searchInput");
    const btn = document.getElementById("searchBtn");
    if (input && input.value.trim() && btn) {
        btn.click();
        return;
    }
    renderDownloadList(downloadFiltered);
}

async function tryLoadGithub(filename, expectKey, token) {
    const urls = getGithubUrls(filename);
    for (let i = 0; i < urls.length; i++) {
        try {
            const data = await loadScript(withCacheBust(urls[i]), expectKey);
            if (token !== loadToken) return null;
            return data;
        } catch (e) {}
    }
    return null;
}

async function loadDownloadData(src) {
    currentDataSrc = src;
    const myToken = ++loadToken;
    window.__DOWNLOAD_DATA__ = null;
    downloadData = null;
    downloadFiltered = null;
    renderDownloadList(null);

    const localPath = "data/download-list.js";

    if (src === "local") {
        try {
            const data = await loadScript(withCacheBust(localPath), "__DOWNLOAD_DATA__");
            if (myToken !== loadToken) return;
            downloadData = data;
            downloadFiltered = downloadData;
            applyCurrentSearch();
        } catch (e) {
            if (myToken !== loadToken) return;
            renderDownloadList(null);
        }
        return;
    }

    const githubData = await tryLoadGithub("download-list.js", "__DOWNLOAD_DATA__", myToken);
    if (myToken !== loadToken) return;

    if (githubData) {
        downloadData = githubData;
        downloadFiltered = downloadData;
        applyCurrentSearch();
        return;
    }

    if (typeof window.__showIOToast === "function" && typeof t === "function") {
        window.__showIOToast(t("dataSourceFallback"), "warn");
    }
    try {
        const data = await loadScript(withCacheBust(localPath), "__DOWNLOAD_DATA__");
        if (myToken !== loadToken) return;
        downloadData = data;
        downloadFiltered = downloadData;
        applyCurrentSearch();
    } catch (e) {
        if (myToken !== loadToken) return;
        renderDownloadList(null);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (typeof applyLang === "function") applyLang();
    loadDownloadData(getDataSourceSafe());
    bindSearch();
    document.addEventListener("fuey-settings-changed", () => {
        if (downloadFiltered) renderDownloadList(downloadFiltered);
    });
    document.addEventListener("fuey-datasource-changed", () => {
        const src = getDataSourceSafe();
        if (src !== currentDataSrc) loadDownloadData(src);
    });
});

function bindSearch() {
    const input = document.getElementById("searchInput");
    const btn = document.getElementById("searchBtn");
    if (!input || !btn) return;

    function doSearch() {
        const keyword = (input.value || "").trim().toLowerCase();
        if (!downloadData || !Array.isArray(downloadData.items)) {
            renderDownloadList(downloadData);
            return;
        }
        if (!keyword) {
            downloadFiltered = downloadData;
            renderDownloadList(downloadFiltered);
            return;
        }
        const filteredItems = downloadData.items.filter(item => {
            let nameText = "";
            if (item.name && typeof item.name === "object") {
                nameText = (item.name.zh || "") + " " + (item.name.en || "");
            } else if (typeof item.name === "string") {
                nameText = item.name;
            }
            let dateText = "";
            if (item.date && typeof item.date === "object") {
                dateText = (item.date.zh || "") + " " + (item.date.en || "");
            } else if (typeof item.date === "string") {
                dateText = item.date;
            }
            const systems = Array.isArray(item.systems) ? item.systems.join(" ") : "";
            const code = item.code || "";
            const url = item.url || "";
            const haystack = (nameText + " " + dateText + " " + systems + " " + code + " " + url).toLowerCase();
            return haystack.includes(keyword);
        });
        downloadFiltered = { items: filteredItems };
        renderDownloadList(downloadFiltered);
    }

    btn.addEventListener("click", doSearch);
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            doSearch();
        }
    });
}

function renderDownloadList(data) {
    const listEl = document.getElementById("downloadList");
    if (!listEl) return;
    if (!data || !Array.isArray(data.items) || data.items.length === 0) {
        listEl.innerHTML = `<p class="empty-text">${t("noData")}</p>`;
        return;
    }
    const lang = getCurrentLang();
    listEl.innerHTML = data.items.map((item, index) => {
        const name = typeof item.name === "object"
            ? (item.name[lang] || item.name.en || item.name.zh || "")
            : (item.name || "");
        const date = typeof item.date === "object"
            ? (item.date[lang] || item.date.en || item.date.zh || "")
            : (item.date || "");
        const systemsHtml = Array.isArray(item.systems)
            ? item.systems.map(sys => `<span class="system-tag">${sys}</span>`).join("")
            : "";
        return `
            <div class="download-item" style="animation-delay: ${index * 0.1}s">
                <div class="download-item-header">
                    <h3 class="download-item-title">${name}</h3>
                    <span class="download-item-date">${t("date")}: ${date}</span>
                </div>
                <div class="download-item-row">
                    <span class="download-item-label">${t("systems")}:</span>
                    <div class="system-tags">${systemsHtml}</div>
                </div>
                <div class="download-item-row">
                    <span class="download-item-label">${t("link")}:</span>
                    <a href="${item.url}" target="_blank" rel="noopener" class="download-link">${item.url}</a>
                </div>
                <div class="download-item-row">
                    <span class="download-item-label">${t("code")}:</span>
                    <span class="download-code">${item.code}</span>
                    <button class="copy-code-btn" data-code="${item.code}">${t("copyCode")}</button>
                </div>
                <div class="download-item-actions">
                    <a href="${item.url}" target="_blank" rel="noopener" class="download-btn">${t("openLink")}</a>
                </div>
            </div>
        `;
    }).join("");
    listEl.querySelectorAll(".copy-code-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const code = btn.getAttribute("data-code");
            navigator.clipboard.writeText(code).then(() => {
                const original = btn.textContent;
                btn.textContent = t("copied");
                btn.classList.add("copied");
                setTimeout(() => {
                    btn.textContent = original;
                    btn.classList.remove("copied");
                }, 1500);
            });
        });
    });
}

window.__refreshDownloadData = function () {
    loadDownloadData(getDataSourceSafe());
};

window.__fueyReloadData = window.__refreshDownloadData;