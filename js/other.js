let otherData = null;
let otherFiltered = null;
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

async function loadOtherData(src) {
    currentDataSrc = src;
    const myToken = ++loadToken;
    window.__OTHER_DATA__ = null;
    otherData = null;
    otherFiltered = null;
    renderOtherList(null);

    const localPath = "data/other-list.js";

    if (src === "local") {
        try {
            const data = await loadScript(withCacheBust(localPath), "__OTHER_DATA__");
            if (myToken !== loadToken) return;
            otherData = data;
            otherFiltered = data;
            applyCurrentSearch();
        } catch (e) {
            if (myToken !== loadToken) return;
            renderOtherList(null);
        }
        return;
    }

    const githubData = await tryLoadGithub("other-list.js", "__OTHER_DATA__", myToken);
    if (myToken !== loadToken) return;

    if (githubData) {
        otherData = githubData;
        otherFiltered = githubData;
        applyCurrentSearch();
        return;
    }

    if (typeof window.__showIOToast === "function" && typeof t === "function") {
        window.__showIOToast(t("dataSourceFallback"), "warn");
    }
    try {
        const data = await loadScript(withCacheBust(localPath), "__OTHER_DATA__");
        if (myToken !== loadToken) return;
        otherData = data;
        otherFiltered = data;
        applyCurrentSearch();
    } catch (e) {
        if (myToken !== loadToken) return;
        renderOtherList(null);
    }
}

function applyCurrentSearch() {
    const input = document.getElementById("searchInput");
    const btn = document.getElementById("searchBtn");
    if (input && input.value.trim() && btn) {
        btn.click();
        return;
    }
    otherFiltered = otherData;
    renderOtherList(otherFiltered);
}

document.addEventListener("DOMContentLoaded", () => {
    if (typeof applyLang === "function") applyLang();
    loadOtherData(getDataSourceSafe());
    bindSearch();
    document.addEventListener("fuey-settings-changed", () => {
        if (otherFiltered) renderOtherList(otherFiltered);
    });
    document.addEventListener("fuey-datasource-changed", () => {
        const src = getDataSourceSafe();
        if (src !== currentDataSrc) loadOtherData(src);
    });
});

function bindSearch() {
    const input = document.getElementById("searchInput");
    const btn = document.getElementById("searchBtn");
    if (!input || !btn) return;

    function doSearch() {
        const keyword = (input.value || "").trim().toLowerCase();
        if (!otherData || !Array.isArray(otherData.items)) {
            renderOtherList(otherData);
            return;
        }
        if (!keyword) {
            otherFiltered = otherData;
            renderOtherList(otherFiltered);
            return;
        }
        const filteredItems = otherData.items.filter(item => {
            let nameText = "";
            if (item.name && typeof item.name === "object") {
                nameText = (item.name.zh || "") + " " + (item.name.en || "");
            } else if (typeof item.name === "string") {
                nameText = item.name;
            }
            const url = item.url || "";
            const haystack = (nameText + " " + url).toLowerCase();
            return haystack.includes(keyword);
        });
        otherFiltered = { items: filteredItems };
        renderOtherList(otherFiltered);
    }

    btn.addEventListener("click", doSearch);
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            doSearch();
        }
    });
}

function renderOtherList(data) {
    const listEl = document.getElementById("otherList");
    if (!listEl) return;
    if (!data || !Array.isArray(data.items) || data.items.length === 0) {
        listEl.innerHTML = `<p class="empty-text">${t("noOtherData")}</p>`;
        return;
    }
    const lang = getCurrentLang();
    listEl.innerHTML = data.items.map((item, index) => {
        let name = "";
        if (item.name && typeof item.name === "object") {
            name = item.name[lang] || item.name.en || item.name.zh || "";
        } else if (typeof item.name === "string") {
            name = item.name;
        }
        const url = item.url || "#";
        return `
            <div class="about-item" style="animation-delay: ${index * 0.1}s">
                <span class="about-item-name">${name}</span>
                <a href="${url}" target="_blank" rel="noopener" class="other-item-open-btn">${t("openLink")}</a>
            </div>
        `;
    }).join("");
}

window.__refreshOtherData = function () {
    loadOtherData(getDataSourceSafe());
};

window.__fueyReloadData = window.__refreshOtherData;