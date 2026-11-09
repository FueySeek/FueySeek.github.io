const OTHERS_TEXT = {
    zh: "其它",
    "zh-Hant": "其它",
    lzh: "他",
    en: "Others",
    ja: "その他",
    ko: "기타",
    fr: "Autres",
    de: "Andere",
    es: "Otros",
    ru: "Другое",
    ar: "أخرى"
};

const LOADING_TEXT = {
    zh: "正在加载更新日志...",
    "zh-Hant": "正在載入更新日誌...",
    lzh: "載日誌中...",
    en: "Loading update log...",
    ja: "更新ログを読み込み中...",
    ko: "업데이트 로그 로드 중...",
    fr: "Chargement du journal...",
    de: "Update-Protokoll wird geladen...",
    es: "Cargando registro...",
    ru: "Загрузка журнала обновлений...",
    ar: "جارٍ تحميل سجل التحديثات..."
};

const GITHUB_OWNER_REPO = "FueySeek/FueySeek.github.io";

let gameFrame = null;
let notesFrame = null;
let logsLoadToken = 0;

function formatDate(isoDate, lang) {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate || "");
    if (!m) return isoDate || "";
    const [, y, mo, d] = m;
    const isChinese = lang === "zh" || lang === "zh-Hant" || lang === "lzh";
    return isChinese ? `${y}/${mo}/${d}` : `${d}/${mo}/${y}`;
}

function pickLogPack(data, lang) {
    if (!data) return null;
    const isZhGroup = lang === "zh" || lang === "zh-Hant" || lang === "lzh";
    if (isZhGroup) {
        return data[lang] || data.zh || data.en || null;
    }
    return data[lang] || data.en || null;
}

function renderEmbed() {
    const titleEl = document.getElementById("embedTitle");
    const descEl = document.getElementById("embedDesc");
    const listEl = document.getElementById("changelogList");
    const othersTitle = document.querySelector(".embed-sub-title");
    const lang = localStorage.getItem("fuey-lang") || "en";
    if (othersTitle) othersTitle.textContent = OTHERS_TEXT[lang] || OTHERS_TEXT.en;
    const data = window.__EMBED_UPDATE_LOGS__;
    if (!data) {
        if (titleEl) titleEl.textContent = "";
        if (descEl) descEl.textContent = LOADING_TEXT[lang] || LOADING_TEXT.en;
        if (listEl) listEl.innerHTML = "";
        return;
    }
    const pack = pickLogPack(data, lang);
    if (!pack) return;
    if (titleEl) titleEl.textContent = pack.embedTitle;
    if (descEl) descEl.textContent = pack.embedDesc;
    
    if (listEl) {
        listEl.innerHTML = pack.logs.map((log, index) => {
            const sections = log.sections.map(sec => {
                const sectionTitle = pack[sec.key] || sec.key;
                const items = sec.items.map(text => `<li>${text}</li>`).join("");
                return `<div class="changelog-section">${sectionTitle}</div><ul class="changelog-desc">${items}</ul>`;
            }).join("");
            return `<li class="changelog-item"><div class="changelog-header"><span class="changelog-version">${log.version}</span><span class="changelog-date">${formatDate(log.date, lang)}</span></div><div class="changelog-title">${log.title}</div>${sections}</li>`;
        }).join("");
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.05 });
        
        listEl.querySelectorAll('.changelog-item').forEach(el => observer.observe(el));
    }
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
        "https://raw.githubusercontent.com/" + GITHUB_OWNER_REPO + "/main/data/" + filename,
        "https://cdn.jsdelivr.net/gh/" + GITHUB_OWNER_REPO + "@main/data/" + filename
    ];
}

async function loadLogs(src) {
    const myToken = ++logsLoadToken;
    window.__EMBED_UPDATE_LOGS__ = null;
    renderEmbed();

    const localPath = "data/update-logs.js";

    if (src === "local") {
        try {
            await loadScript(withCacheBust(localPath), "__EMBED_UPDATE_LOGS__");
            if (myToken !== logsLoadToken) return;
            renderEmbed();
        } catch (e) {
            if (myToken !== logsLoadToken) return;
            renderEmbed();
        }
        return;
    }

    const urls = getGithubUrls("update-logs.js");
    let ok = false;
    for (let i = 0; i < urls.length; i++) {
        try {
            await loadScript(withCacheBust(urls[i]), "__EMBED_UPDATE_LOGS__");
            if (myToken !== logsLoadToken) return;
            ok = true;
            break;
        } catch (e) {}
    }

    if (myToken !== logsLoadToken) return;

    if (ok) {
        renderEmbed();
        return;
    }

    renderEmbed();
    if (typeof window.__showIOToast === "function" && typeof t === "function") {
        window.__showIOToast(t("dataSourceFallback"), "warn");
    }
    try {
        await loadScript(withCacheBust(localPath), "__EMBED_UPDATE_LOGS__");
        if (myToken !== logsLoadToken) return;
        renderEmbed();
    } catch (e) {
        if (myToken !== logsLoadToken) return;
        renderEmbed();
    }
}

function syncFrames() {
    const payload = {
        type: "fuey-sync",
        lang: localStorage.getItem("fuey-lang") || "en",
        theme: document.documentElement.getAttribute("data-theme") || "light",
        handed: localStorage.getItem("fuey-handed") || "right",
        dataSource: localStorage.getItem("fuey-data-source") || "github"
    };
    [gameFrame, notesFrame].forEach(f => {
        try {
            if (f && f.contentWindow) f.contentWindow.postMessage(payload, "*");
        } catch (e) {}
    });
}

function resizeFrame(frame, h) {
    if (!frame) return;
    if (typeof h === "number" && h > 0) frame.style.height = h + "px";
}

function initFrames() {
    gameFrame = document.getElementById("gameEmbed");
    notesFrame = document.getElementById("notesEmbed");
    window.addEventListener("message", (e) => {
        if (!e.data) return;
        if (e.data.type === "fuey-embed-resize") {
            if (e.source === (gameFrame && gameFrame.contentWindow)) resizeFrame(gameFrame, e.data.height);
            else if (e.source === (notesFrame && notesFrame.contentWindow)) resizeFrame(notesFrame, e.data.height);
        } else if (e.data.type === "fuey-embed-ready") {
            syncFrames();
        } else if (e.data.type === "fuey-security-toast") {
            if (typeof window.__fueyShowSecurityToast === "function") window.__fueyShowSecurityToast();
        }
    });
    [gameFrame, notesFrame].forEach(f => {
        if (!f) return;
        f.addEventListener("load", () => {
            syncFrames();
            setTimeout(syncFrames, 100);
            setTimeout(syncFrames, 500);
            setTimeout(syncFrames, 1500);
        });
    });
}

function initScrollDownBtn() {
    const scrollBtn = document.getElementById("scrollDownBtn");
    if (!scrollBtn) return;
    function updateScrollBtn() {
        const y = window.pageYOffset || document.documentElement.scrollTop || 0;
        scrollBtn.classList.toggle("visible", y <= 80);
    }
    updateScrollBtn();
    scrollBtn.addEventListener("click", () => {
        const hero = document.querySelector(".home-container");
        const nav = document.querySelector(".main-nav");
        if (!hero) return;
        const navHeight = nav ? nav.getBoundingClientRect().height : 0;
        const pageY = window.pageYOffset || document.documentElement.scrollTop || 0;
        const heroBottom = hero.getBoundingClientRect().bottom + pageY;
        const target = heroBottom - navHeight - 8;
        window.scrollTo({ top: target, behavior: "smooth" });
    });
    window.addEventListener("scroll", updateScrollBtn, { passive: true });
    window.addEventListener("resize", updateScrollBtn);
    window.addEventListener("load", updateScrollBtn);
}

document.addEventListener("DOMContentLoaded", () => {
    if (typeof applyLang === "function") applyLang();
    initFrames();
    initScrollDownBtn();
    const src = localStorage.getItem("fuey-data-source") || "github";
    loadLogs(src);
    document.addEventListener("fuey-settings-changed", () => {
        renderEmbed();
        syncFrames();
    });
    document.addEventListener("fuey-datasource-changed", () => {
        const src = localStorage.getItem("fuey-data-source") || "github";
        loadLogs(src);
        syncFrames();
    });
    window.addEventListener("message", (e) => {
        if (!e.data) return;
        if (e.data.type === "fuey-embed-fallback") {
            if (typeof setDataSource === "function") setDataSource("local", true);
        }
    });
});