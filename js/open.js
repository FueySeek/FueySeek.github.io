let aboutData = null;
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

async function loadAboutData(src) {
    currentDataSrc = src;
    const myToken = ++loadToken;
    window.__OPEN_DATA__ = null;
    aboutData = null;
    renderAboutList(null);

    const localPath = "data/open-list.js";

    if (src === "local") {
        try {
            const data = await loadScript(withCacheBust(localPath), "__OPEN_DATA__");
            if (myToken !== loadToken) return;
            aboutData = data;
            renderAboutList(aboutData);
        } catch (e) {
            if (myToken !== loadToken) return;
            renderAboutList(null);
        }
        return;
    }

    const githubData = await tryLoadGithub("open-list.js", "__OPEN_DATA__", myToken);
    if (myToken !== loadToken) return;

    if (githubData) {
        aboutData = githubData;
        renderAboutList(aboutData);
        return;
    }

    if (typeof window.__showIOToast === "function" && typeof t === "function") {
        window.__showIOToast(t("dataSourceFallback"), "warn");
    }
    try {
        const data = await loadScript(withCacheBust(localPath), "__OPEN_DATA__");
        if (myToken !== loadToken) return;
        aboutData = data;
        renderAboutList(aboutData);
    } catch (e) {
        if (myToken !== loadToken) return;
        renderAboutList(null);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (typeof applyLang === "function") applyLang();
    loadAboutData(getDataSourceSafe());
    document.addEventListener("fuey-settings-changed", () => {
        if (aboutData) renderAboutList(aboutData);
    });
    document.addEventListener("fuey-datasource-changed", () => {
        const src = getDataSourceSafe();
        if (src !== currentDataSrc) loadAboutData(src);
    });
});

function renderAboutList(data) {
    const listEl = document.getElementById("aboutList");
    if (!listEl) return;
    if (!data || !Array.isArray(data.items) || data.items.length === 0) {
        listEl.innerHTML = `<p class="empty-text">${t("noAboutData")}</p>`;
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
            <a href="${url}" target="_blank" rel="noopener" class="about-item" style="animation-delay: ${index * 0.1}s">
                <span class="about-item-name">${name}</span>
                <span class="about-item-arrow">→</span>
            </a>
        `;
    }).join("");
}

window.__refreshAboutData = function () {
    loadAboutData(getDataSourceSafe());
};

window.__fueyReloadData = window.__refreshAboutData;