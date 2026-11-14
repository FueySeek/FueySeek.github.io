function applyTheme(theme) {
    localStorage.setItem("fuey-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    const l = document.getElementById("themeLight");
    const d = document.getElementById("themeDark");
    if (l) l.classList.toggle("active", theme === "light");
    if (d) d.classList.toggle("active", theme === "dark");
    requestAnimationFrame(updateIndicators);
    setTimeout(updateIndicators, 100);
    setTimeout(updateIndicators, 450);
}

function updateIndicators() {
    const tb = document.getElementById("themeBox");
    if (tb && tb.updateIndicator) tb.updateIndicator();
    const lb = document.getElementById("langBox");
    if (lb && lb.updateIndicator) lb.updateIndicator();
    moveMainTabIndicator();
}

function updateIndicatorsInstant() {
    const tb = document.getElementById("themeBox");
    if (tb && tb.updateIndicatorInstant) tb.updateIndicatorInstant();
    const lb = document.getElementById("langBox");
    if (lb && lb.updateIndicatorInstant) lb.updateIndicatorInstant();
    moveMainTabIndicator();
}

function openLangDropdown() {
    const dropdown = document.getElementById("langDropdown");
    if (dropdown.classList.contains("open")) return;
    state.uiLangBeforeOpen = state.uiLang;
    state.otherPending = true;
    dropdown.classList.add("open");
    renderUI();
}

function closeLangDropdown(revert) {
    const dropdown = document.getElementById("langDropdown");
    if (!dropdown.classList.contains("open")) return;
    dropdown.classList.remove("open");
    if (revert && state.otherPending) state.uiLang = state.uiLangBeforeOpen;
    state.otherPending = false;
    renderUI();
}

function selectLang(code) {
    state.uiLang = code;
    localStorage.setItem("fuey-lang", code);
    state.otherPending = false;
    document.getElementById("langDropdown").classList.remove("open");
    renderUI();
}

function renderResetCountdown() {
    const resetEl = document.getElementById("ghResetValue");
    if (!resetEl) return;
    if (!state.ghResetAt) { resetEl.textContent = "—"; return; }
    const diff = Math.max(0, Math.floor((state.ghResetAt * 1000 - Date.now()) / 1000));
    let str;
    if (diff >= 3600) str = Math.floor(diff / 3600) + "h " + Math.floor((diff % 3600) / 60) + "m " + (diff % 60) + "s";
    else if (diff >= 60) str = Math.floor(diff / 60) + "m " + (diff % 60) + "s";
    else str = diff + "s";
    resetEl.textContent = str;
    resetEl.className = "gh-api-val";
}

function refreshGithubStatus() {
    const coreEl = document.getElementById("ghCoreValue");
    const searchEl = document.getElementById("ghSearchValue");
    const tokenEl = document.getElementById("ghTokenStateValue");
    const btn = document.getElementById("ghRefreshBtn");
    if (!coreEl || !searchEl || !tokenEl) return;
    coreEl.textContent = t("ghApiLoading");
    coreEl.className = "gh-api-val";
    searchEl.textContent = t("ghApiLoading");
    searchEl.className = "gh-api-val";
    const hasToken = !!getGithubToken();
    tokenEl.textContent = hasToken ? t("ghTokenStateYes") : t("ghTokenStateNo");
    tokenEl.className = "gh-api-val " + (hasToken ? "ok" : "warn");
    if (btn) btn.disabled = true;
    githubFetch("https://api.github.com/rate_limit")
        .then(data => {
            const core = data.resources && data.resources.core;
            const search = data.resources && data.resources.search;
            if (core) {
                coreEl.textContent = core.remaining + " / " + core.limit;
                coreEl.className = "gh-api-val " + (core.remaining > 10 ? "ok" : (core.remaining > 0 ? "warn" : "err"));
                if (core.reset) state.ghResetAt = core.reset;
            } else {
                coreEl.textContent = "—";
                coreEl.className = "gh-api-val";
            }
            if (search) {
                searchEl.textContent = search.remaining + " / " + search.limit;
                searchEl.className = "gh-api-val " + (search.remaining > 2 ? "ok" : (search.remaining > 0 ? "warn" : "err"));
            } else {
                searchEl.textContent = "—";
                searchEl.className = "gh-api-val";
            }
            renderResetCountdown();
        })
        .catch(() => {
            coreEl.textContent = t("ghApiFailed");
            coreEl.className = "gh-api-val err";
            searchEl.textContent = t("ghApiFailed");
            searchEl.className = "gh-api-val err";
            const resetEl = document.getElementById("ghResetValue");
            if (resetEl) { resetEl.textContent = "—"; resetEl.className = "gh-api-val"; }
        })
        .finally(() => { if (btn) btn.disabled = false; });
}

function startGithubStatusAuto() {
    stopGithubStatusAuto();
    refreshGithubStatus();
    state.ghStatusRefreshTimer = setInterval(() => { refreshGithubStatus(); }, 60000);
    state.ghCountdownTimer = setInterval(() => { renderResetCountdown(); }, 1000);
}

function stopGithubStatusAuto() {
    if (state.ghStatusRefreshTimer) { clearInterval(state.ghStatusRefreshTimer); state.ghStatusRefreshTimer = null; }
    if (state.ghCountdownTimer) { clearInterval(state.ghCountdownTimer); state.ghCountdownTimer = null; }
}

async function doClearCache() {
    const btn = document.getElementById("clearCacheBtn");
    if (btn) {
        btn.disabled = true;
        btn.textContent = t("clearCacheBusy");
    }
    try {
        if (window.caches && typeof caches.keys === "function") {
            const keys = await caches.keys();
            await Promise.all(keys.map(k => caches.delete(k)));
        }
    } catch (e) {}
    try { localStorage.clear(); } catch (e) {}
    try { sessionStorage.clear(); } catch (e) {}
    if (btn) btn.textContent = t("clearCacheDone");
    setTimeout(() => { try { location.reload(); } catch (e) {} }, 700);
}

function handleClearCacheClick() {
    const btn = document.getElementById("clearCacheBtn");
    if (!btn) return;
    if (!state.clearCacheArmed) {
        state.clearCacheArmed = true;
        btn.classList.add("confirm");
        btn.textContent = t("clearCacheConfirm");
        clearTimeout(state.clearCacheTimer);
        state.clearCacheTimer = setTimeout(() => {
            state.clearCacheArmed = false;
            btn.classList.remove("confirm");
            btn.textContent = t("clearCache");
        }, 3500);
        return;
    }
    clearTimeout(state.clearCacheTimer);
    state.clearCacheArmed = false;
    btn.classList.remove("confirm");
    doClearCache();
}

async function collectSiteAssets() {
    const found = new Set();
    found.add(SITE_URL);
    let html = "";
    try {
        const res = await fetchTimeout(SITE_URL, { cache: "no-store" }, 8000);
        if (res && res.ok) html = await res.text();
    } catch (e) {}
    if (html) {
        const attrRe = /(?:src|href)\s*=\s*["']([^"']+)["']/gi;
        let m;
        while ((m = attrRe.exec(html)) !== null) {
            const u = resolveUrl(m[1], SITE_URL);
            if (u && isCacheableAsset(u)) found.add(u);
        }
        const cssRe = /url\(\s*["']?([^"')]+)["']?\s*\)/gi;
        while ((m = cssRe.exec(html)) !== null) {
            const u = resolveUrl(m[1], SITE_URL);
            if (u) found.add(u);
        }
    }
    SITE_EXTRA_ASSETS.forEach(p => {
        const u = resolveUrl(p, SITE_URL);
        if (u) found.add(u);
    });
    const cssUrls = Array.from(found).filter(u => /\.css(?:[?#]|$)/i.test(u));
    for (let i = 0; i < cssUrls.length; i++) {
        try {
            const res = await fetchTimeout(cssUrls[i], { cache: "no-store" }, 6000);
            if (!res || !res.ok) continue;
            const text = await res.text();
            const re = /url\(\s*["']?([^"')]+)["']?\s*\)/gi;
            let m;
            while ((m = re.exec(text)) !== null) {
                const u = resolveUrl(m[1], cssUrls[i]);
                if (u) found.add(u);
            }
        } catch (e) {}
    }
    return Array.from(found).slice(0, SITE_MAX_ASSETS);
}

function showCacheOverlay() {
    const ov = document.getElementById("cacheOverlay");
    if (!ov) return;
    ov.classList.add("show");
    setCacheProgress(0);
    setCacheTitle("");
    setCacheCount("");
}
function setCacheTitle(text) {
    const el = document.getElementById("cacheTitle");
    if (el) el.textContent = text;
}
function setCacheCount(text) {
    const el = document.getElementById("cacheCount");
    if (el) el.textContent = text;
}
function setCacheProgress(pct) {
    const fill = document.getElementById("cacheProgressFill");
    if (fill) fill.style.width = Math.max(0, Math.min(100, pct)) + "%";
}

async function startSiteVisit() {
    if (state.siteCacheBusy) return;
    state.siteCacheBusy = true;
    const btn = document.getElementById("siteVisitBtn");
    if (btn) btn.disabled = true;
    showCacheOverlay();
    setCacheTitle(t("cachePreparing"));
    try {
        const assets = await collectSiteAssets();
        if (window.caches && typeof caches.open === "function") {
            let cache = null;
            try { cache = await caches.open(SITE_CACHE_NAME); } catch (e) { cache = null; }
            if (cache) {
                setCacheTitle(t("cacheTitle"));
                const total = assets.length;
                let done = 0;
                setCacheCount(t("cacheProgress", { done, total }));
                for (let i = 0; i < assets.length; i++) {
                    const u = assets[i];
                    try {
                        const res = await fetchTimeout(u, { mode: "no-cors", cache: "no-store" }, 5000);
                        if (res) {
                            try { await cache.put(u, res.clone()); } catch (e) {}
                        }
                    } catch (e) {}
                    done++;
                    setCacheCount(t("cacheProgress", { done, total }));
                    setCacheProgress(total > 0 ? done / total * 100 : 100);
                }
            }
        }
        setCacheTitle(t("cacheDone"));
        setCacheProgress(100);
    } catch (e) {
        setCacheTitle(t("cacheFail"));
    }
    setTimeout(() => { window.location.href = SITE_URL; }, 600);
}