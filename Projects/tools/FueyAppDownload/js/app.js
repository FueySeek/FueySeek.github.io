function renderPlatformCards() {
    const list = document.getElementById("platformList");
    if (!list) return;
    const keys = Object.keys(state.cloudVersions).filter(k => state.cloudVersions[k]);
    keys.sort((a, b) => {
        const oa = PLATFORM_META[a] ? PLATFORM_META[a].order : 99;
        const ob = PLATFORM_META[b] ? PLATFORM_META[b].order : 99;
        return oa - ob;
    });
    if (!keys.length) {
        if (state.versionLoadFailed) {
            list.innerHTML = '<div class="market-msg" style="padding:30px 0;">' + escapeHtml(t("versionFailed")) + '</div>';
        } else {
            list.innerHTML = '<div class="market-msg" style="padding:30px 0;">' + escapeHtml(t("checkingVersion")) + '</div>';
        }
        return;
    }
    list.innerHTML = keys.map(key => {
        const meta = PLATFORM_META[key] || { name: key, icon: FILE_ICONS.file, kind: "file" };
        const ver = state.cloudVersions[key];
        const isDetected = state.detectedPlatform === key;
        const iconKind = meta.kind || "file";
        return '<div class="platform-card' + (isDetected ? ' detected' : '') + '" data-platform="' + escapeHtml(key) + '">' +
            '<span class="platform-badge">' + escapeHtml(t("detected")) + '</span>' +
            '<div class="platform-header">' +
                '<span class="platform-icon platform-icon-' + iconKind + '">' + meta.icon + '</span>' +
                '<div class="platform-name">' + escapeHtml(meta.name || key) + '</div>' +
            '</div>' +
            '<div class="platform-version">' + escapeHtml(t("latestVersion", { v: "" })) + '<span class="ver-num">' + escapeHtml(ver) + '</span></div>' +
            '<button class="platform-dl-btn" data-platform="' + escapeHtml(key) + '">' + escapeHtml(t("downloadBtn")) + '</button>' +
        '</div>';
    }).join("");
    list.querySelectorAll(".platform-dl-btn").forEach(btn => {
        btn.addEventListener("click", () => startFueyDownload(btn.dataset.platform));
    });
}

function moveMainTabIndicator() {
    const indicator = document.getElementById("mainTabIndicator");
    const group = document.getElementById("mainTabs");
    if (!indicator || !group) return;
    const active = group.querySelector(".main-tab.active");
    if (!active) { indicator.style.transform = "translateX(0)"; indicator.style.width = "0px"; return; }
    const gr = group.getBoundingClientRect();
    const tr = active.getBoundingClientRect();
    const maxW = Math.max(0, group.clientWidth - 8);
    const w = Math.max(0, Math.min(tr.width, maxW));
    let left = tr.left - gr.left - 4;
    if (left < 0) left = 0;
    if (left + w > maxW) left = Math.max(0, maxW - w);
    indicator.style.transform = "translateX(" + left + "px)";
    indicator.style.width = w + "px";
}

function moveDetailTabIndicator(instant) {
    const group = document.getElementById("detailTabs");
    const indicator = document.getElementById("detailTabIndicator");
    if (!group || !indicator) return;
    const active = group.querySelector(".detail-tab.active");
    if (!active) { indicator.style.transform = "translateX(0)"; indicator.style.width = "0px"; return; }
    const gr = group.getBoundingClientRect();
    const tr = active.getBoundingClientRect();
    const maxW = Math.max(0, group.clientWidth - 8);
    const w = Math.max(0, Math.min(tr.width, maxW));
    let left = tr.left - gr.left - 4;
    if (left < 0) left = 0;
    if (left + w > maxW) left = Math.max(0, maxW - w);
    if (instant) {
        indicator.style.transition = "none";
        indicator.style.transform = "translateX(" + left + "px)";
        indicator.style.width = w + "px";
        void indicator.offsetWidth;
        indicator.style.transition = "";
    } else {
        indicator.style.transform = "translateX(" + left + "px)";
        indicator.style.width = w + "px";
    }
}

function applyMainTabChange(tabName) {
    if (tabName === state.currentMainTab) return;
    state.currentMainTab = tabName;
    document.querySelectorAll(".main-tab").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.tab === tabName);
    });
    moveMainTabIndicator();
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
    let targetPanel;
    if (tabName === "app") targetPanel = document.getElementById("tabApp");
    else if (tabName === "market") targetPanel = document.getElementById("tabMarket");
    else targetPanel = document.getElementById("tabCustom");
    if (targetPanel) { void targetPanel.offsetWidth; targetPanel.classList.add("active"); }
    if (tabName === "market") {
        if (state.marketState === "idle" || state.marketState === "error" || state.marketState === "empty") {
            marketLoadTrending(1);
        }
    }
    if (tabName === "custom") renderCustom();
}

function initMainTabsDrag() {
    const group = document.getElementById("mainTabs");
    const indicator = document.getElementById("mainTabIndicator");
    if (!group || !indicator) return;
    const items = Array.from(group.querySelectorAll(".main-tab"));
    if (!items.length) return;
    let dragging = false, hasMoved = false, pendingItem = null, prevActive = null;
    let startX = 0, startY = 0, startLeft = 0, startWidth = 0, suppressClick = false;

    function getActive() { return group.querySelector(".main-tab.active"); }

    function positionIndicator(target, instant) {
        if (!target) return;
        const gr = group.getBoundingClientRect();
        const tr = target.getBoundingClientRect();
        const maxW = Math.max(0, group.clientWidth - 8);
        const w = Math.max(0, Math.min(tr.width, maxW));
        let left = tr.left - gr.left - 4;
        if (left < 0) left = 0;
        if (left + w > maxW) left = Math.max(0, maxW - w);
        if (instant) {
            indicator.style.transition = "none";
            indicator.style.transform = "translateX(" + left + "px)";
            indicator.style.width = w + "px";
            void indicator.offsetWidth;
            indicator.style.transition = "";
        } else {
            indicator.style.transform = "translateX(" + left + "px)";
            indicator.style.width = w + "px";
        }
    }

    function syncActive(target) {
        items.forEach(i => i.classList.remove("active"));
        if (target) target.classList.add("active");
    }

    function readIndicatorLeft() {
        const inline = indicator.style.transform;
        const m = /translateX\((-?\d+(?:\.\d+)?)px\)/.exec(inline || "");
        if (m) return parseFloat(m[1]);
        try {
            const mtx = new DOMMatrixReadOnly(window.getComputedStyle(indicator).transform);
            return mtx.m41 || 0;
        } catch (e) { return 0; }
    }

    function updateDrag(clientX) {
        const dx = clientX - startX;
        const maxLeft = Math.max(0, group.clientWidth - 8 - startWidth);
        let newLeft = Math.max(0, Math.min(startLeft + dx, maxLeft));
        indicator.style.transform = "translateX(" + newLeft + "px)";
        const centerX = newLeft + startWidth / 2;
        let closest = null, minDist = Infinity;
        items.forEach(item => {
            const c = item.offsetLeft + item.offsetWidth / 2;
            const d = Math.abs(centerX - c);
            if (d < minDist) { minDist = d; closest = item; }
        });
        pendingItem = closest;
        items.forEach(i => i.classList.toggle("active", i === closest));
    }

    function cleanup() {
        dragging = false; hasMoved = false;
        document.removeEventListener("pointermove", handleMove);
        document.removeEventListener("pointerup", onUp);
        document.removeEventListener("pointercancel", onUp);
        group.classList.remove("dragging");
        indicator.style.transition = "";
    }

    function finalize() {
        const moved = hasMoved;
        const target = pendingItem;
        cleanup();
        if (moved) {
            suppressClick = true;
            setTimeout(() => { suppressClick = false; }, 80);
            const tabName = target && target.dataset.tab;
            if (tabName && tabName !== state.currentMainTab) applyMainTabChange(tabName);
            else if (prevActive) { syncActive(prevActive); positionIndicator(prevActive, false); }
        } else if (prevActive) positionIndicator(prevActive, false);
        pendingItem = null;
    }

    function onUp() { if (dragging) finalize(); }

    function handleMove(e) {
        if (!dragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        if (!hasMoved) {
            if (Math.abs(dx) < 4) return;
            if (Math.abs(dy) > Math.abs(dx) * 1.2) { cleanup(); pendingItem = null; return; }
            hasMoved = true;
            group.classList.add("dragging");
            indicator.style.transition = "none";
        }
        updateDrag(e.clientX);
        if (e.cancelable) e.preventDefault();
    }

    group.addEventListener("pointerdown", e => {
        if (e.button !== 0 || dragging || !e.isPrimary) return;
        if (e.target.closest(".main-tab") === null && e.target !== indicator) return;
        prevActive = getActive();
        dragging = true;
        hasMoved = false;
        pendingItem = null;
        startX = e.clientX;
        startY = e.clientY;
        startLeft = readIndicatorLeft();
        startWidth = indicator.offsetWidth;
        document.addEventListener("pointermove", handleMove, { passive: false });
        document.addEventListener("pointerup", onUp);
        document.addEventListener("pointercancel", onUp);
    });

    items.forEach(item => {
        item.addEventListener("click", e => {
            if (suppressClick) { e.preventDefault(); e.stopPropagation(); return; }
            applyMainTabChange(item.dataset.tab);
        });
    });
}

function setupDetailTabsDrag() {
    const group = document.getElementById("detailTabs");
    const indicator = document.getElementById("detailTabIndicator");
    if (!group || !indicator) return;
    const items = Array.from(group.querySelectorAll(".detail-tab"));
    if (!items.length) return;
    let dragging = false, hasMoved = false, pendingItem = null, prevActive = null;
    let startX = 0, startY = 0, startLeft = 0, startWidth = 0, suppressClick = false;

    function getActive() { return group.querySelector(".detail-tab.active"); }

    function positionIndicator(target, instant) {
        if (!target) return;
        const gr = group.getBoundingClientRect();
        const tr = target.getBoundingClientRect();
        const maxW = Math.max(0, group.clientWidth - 8);
        const w = Math.max(0, Math.min(tr.width, maxW));
        let left = tr.left - gr.left - 4;
        if (left < 0) left = 0;
        if (left + w > maxW) left = Math.max(0, maxW - w);
        if (instant) {
            indicator.style.transition = "none";
            indicator.style.transform = "translateX(" + left + "px)";
            indicator.style.width = w + "px";
            void indicator.offsetWidth;
            indicator.style.transition = "";
        } else {
            indicator.style.transform = "translateX(" + left + "px)";
            indicator.style.width = w + "px";
        }
    }

    function syncActive(target) {
        items.forEach(i => i.classList.remove("active"));
        if (target) target.classList.add("active");
    }

    function readIndicatorLeft() {
        const inline = indicator.style.transform;
        const m = /translateX\((-?\d+(?:\.\d+)?)px\)/.exec(inline || "");
        if (m) return parseFloat(m[1]);
        try {
            const mtx = new DOMMatrixReadOnly(window.getComputedStyle(indicator).transform);
            return mtx.m41 || 0;
        } catch (e) { return 0; }
    }

    function updateDrag(clientX) {
        const dx = clientX - startX;
        const maxLeft = Math.max(0, group.clientWidth - 8 - startWidth);
        let newLeft = Math.max(0, Math.min(startLeft + dx, maxLeft));
        indicator.style.transform = "translateX(" + newLeft + "px)";
        const centerX = newLeft + startWidth / 2;
        let closest = null, minDist = Infinity;
        items.forEach(item => {
            const c = item.offsetLeft + item.offsetWidth / 2;
            const d = Math.abs(centerX - c);
            if (d < minDist) { minDist = d; closest = item; }
        });
        pendingItem = closest;
        items.forEach(i => i.classList.toggle("active", i === closest));
    }

    function cleanup() {
        dragging = false; hasMoved = false;
        document.removeEventListener("pointermove", handleMove);
        document.removeEventListener("pointerup", onUp);
        document.removeEventListener("pointercancel", onUp);
        group.classList.remove("dragging");
        indicator.style.transition = "";
    }

    function finalize() {
        const moved = hasMoved;
        const target = pendingItem;
        cleanup();
        if (moved) {
            suppressClick = true;
            setTimeout(() => { suppressClick = false; }, 80);
            const tabKey = target && target.dataset.dt;
            if (tabKey && tabKey !== state.detailTab) loadDetailTab(tabKey);
            else if (prevActive) { syncActive(prevActive); positionIndicator(prevActive, false); }
        } else if (prevActive) positionIndicator(prevActive, false);
        pendingItem = null;
    }

    function onUp() { if (dragging) finalize(); }

    function handleMove(e) {
        if (!dragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        if (!hasMoved) {
            if (Math.abs(dx) < 4) return;
            if (Math.abs(dy) > Math.abs(dx) * 1.2) { cleanup(); pendingItem = null; return; }
            hasMoved = true;
            group.classList.add("dragging");
            indicator.style.transition = "none";
        }
        updateDrag(e.clientX);
        if (e.cancelable) e.preventDefault();
    }

    group.addEventListener("pointerdown", e => {
        if (e.button !== 0 || dragging || !e.isPrimary) return;
        if (e.target.closest(".detail-tab") === null && e.target !== indicator) return;
        prevActive = getActive();
        dragging = true;
        hasMoved = false;
        pendingItem = null;
        startX = e.clientX;
        startY = e.clientY;
        startLeft = readIndicatorLeft();
        startWidth = indicator.offsetWidth;
        document.addEventListener("pointermove", handleMove, { passive: false });
        document.addEventListener("pointerup", onUp);
        document.addEventListener("pointercancel", onUp);
    });

    items.forEach(item => {
        item.addEventListener("click", e => {
            if (suppressClick) { e.preventDefault(); e.stopPropagation(); return; }
            const tabKey = item.dataset.dt;
            if (tabKey && tabKey !== state.detailTab) loadDetailTab(tabKey);
        });
    });

    requestAnimationFrame(() => positionIndicator(getActive(), true));
}

function initSegmented(groupId, indicatorId, onChange) {
    const group = document.getElementById(groupId);
    const indicator = document.getElementById(indicatorId);
    if (!group || !indicator) return;
    const items = Array.from(group.querySelectorAll(".seg-btn"));
    if (!items.length) return;
    let dragging = false, hasMoved = false, pendingItem = null, prevActive = null;
    let startX = 0, startY = 0, startLeft = 0, startWidth = 0, pointerId = null, suppressClick = false;

    function getActive() { return group.querySelector(".seg-btn.active"); }

    function positionIndicator(target, instant) {
        const applyStyle = (l, w) => {
            if (instant) {
                indicator.classList.add("no-anim");
                indicator.style.transform = "translateX(" + l + "px)";
                indicator.style.width = w + "px";
                void indicator.offsetWidth;
                indicator.classList.remove("no-anim");
            } else {
                indicator.style.transform = "translateX(" + l + "px)";
                indicator.style.width = w + "px";
            }
        };
        if (!target) { applyStyle(0, 0); return; }
        const gr = group.getBoundingClientRect();
        const tr = target.getBoundingClientRect();
        const maxW = Math.max(0, group.clientWidth - 6);
        const w = Math.max(0, Math.min(tr.width, maxW));
        let left = tr.left - gr.left - 3;
        if (left < 0) left = 0;
        if (left + w > maxW) left = Math.max(0, maxW - w);
        applyStyle(left, w);
    }

    function syncActive(target) {
        items.forEach(i => i.classList.remove("active"));
        if (target) target.classList.add("active");
    }

    function readIndicatorLeft() {
        const inline = indicator.style.transform;
        const m = /translateX\((-?\d+(?:\.\d+)?)px\)/.exec(inline || "");
        if (m) return parseFloat(m[1]);
        try {
            const mtx = new DOMMatrixReadOnly(window.getComputedStyle(indicator).transform);
            return mtx.m41 || 0;
        } catch (e) { return 0; }
    }

    function updateDrag(clientX) {
        const dx = clientX - startX;
        const maxLeft = Math.max(0, group.clientWidth - 6 - startWidth);
        let newLeft = Math.max(0, Math.min(startLeft + dx, maxLeft));
        indicator.style.transform = "translateX(" + newLeft + "px)";
        const centerX = newLeft + startWidth / 2;
        let closest = null, minDist = Infinity;
        items.forEach(item => {
            const c = item.offsetLeft + item.offsetWidth / 2;
            const d = Math.abs(centerX - c);
            if (d < minDist) { minDist = d; closest = item; }
        });
        pendingItem = closest;
        items.forEach(i => i.classList.toggle("active", i === closest));
    }

    function cleanup() {
        dragging = false; hasMoved = false; pointerId = null;
        document.removeEventListener("pointermove", handleMove);
        document.removeEventListener("pointerup", onUp);
        document.removeEventListener("pointercancel", onCancel);
        group.classList.remove("dragging");
    }

    function finalize() {
        const moved = hasMoved;
        const target = pendingItem;
        cleanup();
        if (moved) {
            suppressClick = true;
            setTimeout(() => { suppressClick = false; }, 80);
            if (target) { syncActive(target); positionIndicator(target, false); onChange(target); }
            else positionIndicator(getActive(), false);
        } else positionIndicator(getActive(), false);
        pendingItem = null;
    }

    function onUp() { if (dragging) finalize(); }
    function onCancel() {
        if (!dragging) return;
        syncActive(prevActive);
        positionIndicator(prevActive, false);
        cleanup();
        pendingItem = null;
    }
    function handleMove(e) {
        if (!dragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        if (!hasMoved) {
            if (Math.abs(dx) < 3) return;
            if (Math.abs(dy) > Math.abs(dx) * 1.2) { onCancel(); return; }
            hasMoved = true;
            group.classList.add("dragging");
            try { group.setPointerCapture(pointerId); } catch (err) {}
        }
        updateDrag(e.clientX);
        if (e.cancelable) e.preventDefault();
    }

    group.addEventListener("pointerdown", e => {
        if (e.button !== 0 || dragging || !e.isPrimary) return;
        prevActive = getActive();
        dragging = true;
        hasMoved = false;
        pendingItem = null;
        startX = e.clientX;
        startY = e.clientY;
        startLeft = readIndicatorLeft();
        startWidth = indicator.offsetWidth;
        pointerId = e.pointerId;
        document.addEventListener("pointermove", handleMove, { passive: false });
        document.addEventListener("pointerup", onUp);
        document.addEventListener("pointercancel", onCancel);
    });

    items.forEach(item => {
        item.addEventListener("click", e => {
            if (suppressClick) { e.preventDefault(); return; }
            syncActive(item);
            positionIndicator(item, false);
            onChange(item);
        });
    });

    window.addEventListener("resize", () => positionIndicator(getActive(), true));
    setTimeout(() => positionIndicator(getActive(), true), 0);
    if (window.ResizeObserver) {
        try {
            const ro = new ResizeObserver(() => positionIndicator(getActive(), true));
            ro.observe(group);
            group._ro = ro;
        } catch (e) {}
    }
    group.updateIndicator = () => positionIndicator(getActive(), false);
    group.updateIndicatorInstant = () => positionIndicator(getActive(), true);
}

function updateCustomFileIcon() {
    const input = document.getElementById("customFilenameInput");
    const icon = document.getElementById("customFileIcon");
    if (!input || !icon) return;
    const kind = getFileKind(input.value);
    icon.className = "file-icon file-icon-" + kind;
    icon.innerHTML = FILE_ICONS[kind] || FILE_ICONS.file;
}

function updateCustomValidation() {
    const input = document.getElementById("customFilenameInput");
    const errEl = document.getElementById("customError");
    const startBtn = document.getElementById("customStartBtn");
    if (!input || !errEl || !startBtn) return;
    const name = input.value;
    const res = validateCustomFilename(name);
    input.classList.remove("error");
    errEl.classList.remove("show");
    errEl.textContent = "";
    if (!res.ok) {
        input.classList.add("error");
        errEl.classList.add("show");
        errEl.textContent = t(res.key);
        startBtn.disabled = true;
        state.customLastError = res.key;
    } else {
        startBtn.disabled = false;
        state.customLastError = "";
    }
    updateCustomFileIcon();
}

function parseCustomUrl() {
    const input = document.getElementById("customUrlInput");
    if (!input) return;
    const raw = (input.value || "").trim();
    input.classList.remove("error");
    if (!raw) {
        input.classList.add("error");
        setTimeout(() => input.classList.remove("error"), 800);
        return;
    }
    let u;
    try {
        u = new URL(raw);
        if (!/^https?:$/.test(u.protocol)) throw new Error("protocol");
    } catch (e) {
        input.classList.add("error");
        setTimeout(() => input.classList.remove("error"), 800);
        return;
    }
    let filename = "";
    try {
        filename = decodeURIComponent(u.pathname.split("/").filter(Boolean).pop() || "");
    } catch (e) {
        filename = "";
    }
    filename = filename.replace(/[<>:"/\\|?*\x00-\x1F]/g, "_").trim();
    if (!filename) filename = "download.bin";
    state.customParsedUrl = u.href;
    document.getElementById("customEmptyHint").style.display = "none";
    document.getElementById("customResult").style.display = "";
    document.getElementById("customSourceValue").textContent = u.href;
    const fnInput = document.getElementById("customFilenameInput");
    fnInput.value = filename;
    updateCustomValidation();
}

function startCustomDownload() {
    if (state.downloadBusy) return;
    if (!state.customParsedUrl) return;
    const fnInput = document.getElementById("customFilenameInput");
    if (!fnInput) return;
    const name = fnInput.value;
    const res = validateCustomFilename(name);
    if (!res.ok) { updateCustomValidation(); return; }
    startMarketDownload(state.customParsedUrl, name, 0);
}

function renderCustom() {
    document.getElementById("tabBtnCustom").textContent = t("tabCustom");
    const urlInput = document.getElementById("customUrlInput");
    if (urlInput) urlInput.placeholder = t("customUrlPlaceholder");
    document.getElementById("customParseBtn").textContent = t("customParseBtn");
    document.getElementById("customEmptyHint").textContent = t("customEmptyHint");
    document.getElementById("customSourceLabel").textContent = t("customSourceLabel");
    document.getElementById("customFilenameLabel").textContent = t("customFilenameLabel");
    document.getElementById("customStartBtn").textContent = t("customStartBtn");
    updateCustomValidation();
    const startBtn = document.getElementById("customStartBtn");
    if (startBtn) startBtn.disabled = state.downloadBusy || !!state.customLastError;
}

function renderUI() {
    const lang = localStorage.getItem("fuey-lang") || "en";
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    document.getElementById("tabBtnApp").textContent = t("tabApp");
    document.getElementById("tabBtnMarket").textContent = t("tabMarket");

    const vt = document.getElementById("versionTag");
    vt.classList.remove("failed");
    if (state.versionLoadFailed) {
        vt.textContent = t("versionFailed");
        vt.classList.add("failed");
    } else if (!Object.keys(state.cloudVersions).some(k => state.cloudVersions[k])) {
        vt.textContent = t("checkingVersion");
    } else {
        const parts = [];
        ["windows", "macos", "linux", "android", "ios"].forEach(k => {
            if (state.cloudVersions[k]) {
                const name = PLATFORM_META[k] ? PLATFORM_META[k].name : k;
                parts.push(name + " " + state.cloudVersions[k]);
            }
        });
        vt.textContent = parts.join(" 丨 ");
    }

    renderPlatformCards();
    updateDownloadBtns();

    const hint = document.getElementById("detectedHint");
    if (state.detectedPlatform) {
        const name = PLATFORM_META[state.detectedPlatform] ? PLATFORM_META[state.detectedPlatform].name : state.detectedPlatform;
        hint.textContent = t("detected") + " · " + name;
    } else {
        hint.textContent = "";
    }

    document.getElementById("settingsTitle").textContent = t("settingsTitle");
    document.getElementById("themeLabel").textContent = t("theme");
    document.getElementById("langLabel").textContent = t("language");
    document.getElementById("themeLight").textContent = t("themeLight");
    document.getElementById("themeDark").textContent = t("themeDark");
    document.getElementById("ghTokenInputLabel").textContent = t("ghTokenInputLabel");
    document.getElementById("ghTokenSave").textContent = t("ghTokenSaveBtn");
    document.getElementById("ghTokenClear").textContent = t("ghTokenClearBtn");
    document.getElementById("ghTokenHint").textContent = t("ghTokenHint");
    document.getElementById("ghApiLabel").textContent = t("ghApiLabel");
    document.getElementById("ghCoreLabel").textContent = t("ghCoreLabel");
    document.getElementById("ghSearchLabel").textContent = t("ghSearchLabel");
    document.getElementById("ghResetLabel").textContent = t("ghResetLabel");
    document.getElementById("ghTokenStateLabel").textContent = t("ghTokenStateLabel");
    document.getElementById("ghRefreshBtn").textContent = t("ghRefreshBtn");

    const ghInput = document.getElementById("ghTokenInput");
    if (ghInput) {
        const tk = getGithubToken();
        ghInput.value = tk || "";
    }

    const langEnBtn = document.getElementById("langEn");
    const langZhBtn = document.getElementById("langZh");
    const langOtherBtn = document.getElementById("langOther");
    const specificOther = OTHER_LANGS.find(l => l.code === state.uiLang);
    const isOtherActive = state.otherPending || !!specificOther;
    langEnBtn.classList.toggle("active", !state.otherPending && state.uiLang === "en");
    langZhBtn.classList.toggle("active", !state.otherPending && state.uiLang === "zh");
    langOtherBtn.classList.toggle("active", isOtherActive);
    langOtherBtn.textContent = specificOther ? specificOther.name : t("otherLang");
    const curLangObj = OTHER_LANGS.find(l => l.code === lang);
    document.getElementById("langDropdownLabel").textContent = curLangObj ? curLangObj.name : t("otherLang");
    document.querySelectorAll(".lang-dropdown-item").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.code === lang);
    });

    const visitBtn = document.getElementById("siteVisitBtn");
    if (visitBtn) visitBtn.innerHTML = ICONS.globe + "<span>" + escapeHtml(t("visitSite")) + "</span>";
    const ccLabel = document.getElementById("clearCacheLabel");
    if (ccLabel) ccLabel.textContent = t("clearCache");
    const ccHint = document.getElementById("clearCacheHint");
    if (ccHint) ccHint.textContent = t("clearCacheHint");
    const ccBtn = document.getElementById("clearCacheBtn");
    if (ccBtn && !state.clearCacheArmed) ccBtn.textContent = t("clearCache");

    renderMarket();
    renderCustom();

    requestAnimationFrame(() => {
        updateIndicators();
        requestAnimationFrame(updateIndicators);
    });
}

function loadVersions() {
    fetchAllVersions()
        .then(vers => {
            Object.keys(state.cloudVersions).forEach(k => { state.cloudVersions[k] = vers[k] || ""; });
            Object.keys(vers).forEach(k => {
                if (!(k in state.cloudVersions) && vers[k]) state.cloudVersions[k] = vers[k];
            });
            state.versionLoadFailed = false;
            renderUI();
        })
        .catch(err => {
            console.error("[FueyApp] version fetch failed:", err);
            state.versionLoadFailed = true;
            renderUI();
        });
}

function initFooterYear() {
    const el = document.getElementById("footerYear");
    if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
    initFooterYear();

    const savedTheme = localStorage.getItem("fuey-theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    document.getElementById("themeLight").classList.toggle("active", savedTheme === "light");
    document.getElementById("themeDark").classList.toggle("active", savedTheme === "dark");

    initSegmented("themeBox", "themeIndicator", item => {
        const tt = item.dataset.theme;
        if (tt) applyTheme(tt);
    });

    initSegmented("langBox", "langIndicator", item => {
        const tl = item.dataset.lang;
        if (tl === "en" || tl === "zh") selectLang(tl);
        else if (tl === "other") {
            const dropdown = document.getElementById("langDropdown");
            if (dropdown.classList.contains("open")) closeLangDropdown(true);
            else openLangDropdown();
        }
    });

    const scrollBox = document.getElementById("langDropdownScroll");
    OTHER_LANGS.forEach(l => {
        const btn = document.createElement("button");
        btn.className = "lang-dropdown-item";
        btn.dataset.code = l.code;
        btn.textContent = l.name;
        btn.addEventListener("click", function () { selectLang(this.dataset.code); });
        scrollBox.appendChild(btn);
    });

    const langDropdown = document.getElementById("langDropdown");
    document.getElementById("langDropdownToggle").addEventListener("click", function (e) {
        e.stopPropagation();
        if (langDropdown.classList.contains("open")) closeLangDropdown(true);
        else openLangDropdown();
    });

    document.addEventListener("pointerdown", e => {
        if (!langDropdown.classList.contains("open")) return;
        if (langDropdown.contains(e.target)) return;
        if (e.target.closest && e.target.closest("#langBox")) return;
        closeLangDropdown(true);
    });

    const openSettingsBtn = document.getElementById("openSettings");
    const settingsPanel = document.getElementById("settingsPanel");
    openSettingsBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        settingsPanel.classList.add("open");
        updateIndicatorsInstant();
        requestAnimationFrame(() => {
            updateIndicatorsInstant();
            requestAnimationFrame(updateIndicatorsInstant);
        });
        [50, 120, 250, 400, 600, 800].forEach(ms => setTimeout(updateIndicatorsInstant, ms));
        startGithubStatusAuto();
    });
    document.getElementById("closeSettings").addEventListener("click", () => {
        settingsPanel.classList.remove("open");
        closeLangDropdown(true);
        stopGithubStatusAuto();
    });

    document.addEventListener("pointerdown", e => {
        if (!settingsPanel.classList.contains("open")) return;
        if (settingsPanel.contains(e.target)) return;
        if (openSettingsBtn.contains(e.target)) return;
        settingsPanel.classList.remove("open");
        closeLangDropdown(true);
        stopGithubStatusAuto();
    });

    document.getElementById("ghTokenSave").addEventListener("click", () => {
        const input = document.getElementById("ghTokenInput");
        if (!input) return;
        const val = input.value.trim();
        setGithubToken(val);
        refreshGithubStatus();
        if (val) input.blur();
    });

    document.getElementById("ghTokenClear").addEventListener("click", () => {
        const input = document.getElementById("ghTokenInput");
        setGithubToken("");
        if (input) input.value = "";
        refreshGithubStatus();
    });

    document.getElementById("ghRefreshBtn").addEventListener("click", refreshGithubStatus);

    const clearCacheBtn = document.getElementById("clearCacheBtn");
    if (clearCacheBtn) clearCacheBtn.addEventListener("click", handleClearCacheClick);

    const siteVisitBtn = document.getElementById("siteVisitBtn");
    if (siteVisitBtn) siteVisitBtn.addEventListener("click", startSiteVisit);

    initMainTabsDrag();

    const qTrending = document.getElementById("mQBtTrending");
    const qFuey = document.getElementById("mQBtFueySeek");
    if (qTrending) {
        qTrending.addEventListener("click", () => {
            if (state.marketMode === "trending" && state.marketState === "results") return;
            marketLoadTrending(1);
        });
    }
    if (qFuey) {
        qFuey.addEventListener("click", () => {
            if (state.marketMode === "fueyseek" && state.marketState === "results") return;
            marketLoadFueySeek();
        });
    }

    state.detectedPlatform = getPlatform();

    const marketInput = document.getElementById("marketInput");
    const marketSearchBtn = document.getElementById("marketSearchBtn");
    marketSearchBtn.addEventListener("click", () => marketSearch(marketInput.value));
    marketInput.addEventListener("keydown", e => {
        if (e.key === "Enter") { e.preventDefault(); marketSearch(marketInput.value); }
    });

    const customUrlInput = document.getElementById("customUrlInput");
    const customParseBtn = document.getElementById("customParseBtn");
    const customFilenameInput = document.getElementById("customFilenameInput");
    const customStartBtn = document.getElementById("customStartBtn");

    if (customParseBtn) customParseBtn.addEventListener("click", parseCustomUrl);
    if (customUrlInput) {
        customUrlInput.addEventListener("keydown", e => {
            if (e.key === "Enter") { e.preventDefault(); parseCustomUrl(); }
        });
        customUrlInput.addEventListener("input", () => { customUrlInput.classList.remove("error"); });
    }
    if (customFilenameInput) {
        customFilenameInput.addEventListener("input", updateCustomValidation);
        customFilenameInput.addEventListener("keydown", e => {
            if (e.key === "Enter") { e.preventDefault(); startCustomDownload(); }
        });
    }
    if (customStartBtn) customStartBtn.addEventListener("click", startCustomDownload);

    renderUI();
    loadVersions();

    window.addEventListener("storage", e => {
        if (e.key === "fuey-theme") {
            const theme = e.newValue || "light";
            document.documentElement.setAttribute("data-theme", theme);
            document.getElementById("themeLight").classList.toggle("active", theme === "light");
            document.getElementById("themeDark").classList.toggle("active", theme === "dark");
            requestAnimationFrame(updateIndicators);
            setTimeout(updateIndicators, 100);
            setTimeout(updateIndicators, 450);
        } else if (e.key === "fuey-lang") {
            state.uiLang = e.newValue || "en";
            state.otherPending = false;
            renderUI();
        } else if (e.key === "fuey-github-token") {
            const input = document.getElementById("ghTokenInput");
            if (input) input.value = getGithubToken();
            refreshGithubStatus();
        }
    });

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            requestAnimationFrame(updateIndicatorsInstant);
            setTimeout(updateIndicatorsInstant, 100);
            setTimeout(updateIndicatorsInstant, 300);
        });
    }

    window.addEventListener("load", () => {
        requestAnimationFrame(updateIndicatorsInstant);
        setTimeout(updateIndicatorsInstant, 100);
    });

    window.addEventListener("resize", () => {
        requestAnimationFrame(updateIndicatorsInstant);
    });
});