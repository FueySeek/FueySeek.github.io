const segmentedSyncers = [];
function syncAllSegmented() {
    segmentedSyncers.forEach(fn => fn());
}
window.__syncAllSegmented = syncAllSegmented;

const taskLock = {
    current: null,
    acquire(name) {
        if (this.current && this.current !== name) return false;
        this.current = name;
        return true;
    },
    release(name) {
        if (this.current === name) this.current = null;
    }
};
window.__fueyTaskLock = taskLock;

let scrollLockCount = 0;
let scrollLocked = false;
function onWheelBlock(e) {
    if (!scrollLocked) return;
    const t = e.target;
    if (t && t.closest && (t.closest(".settings-body") || t.closest(".lang-dropdown-panel"))) return;
    e.preventDefault();
}
function onTouchBlock(e) {
    if (!scrollLocked) return;
    if (e.touches && e.touches.length > 1) { e.preventDefault(); return; }
    const t = e.target;
    if (t && t.closest && (t.closest(".settings-body") || t.closest(".lang-dropdown-panel"))) return;
    e.preventDefault();
}
function lockBodyScroll() {
    scrollLockCount++;
    if (scrollLocked) return;
    scrollLocked = true;
    document.documentElement.classList.add("locked");
    document.body.classList.add("locked");
    document.addEventListener("wheel", onWheelBlock, { passive: false });
    document.addEventListener("touchmove", onTouchBlock, { passive: false });
}
function unlockBodyScroll() {
    scrollLockCount = Math.max(0, scrollLockCount - 1);
    if (scrollLockCount > 0) return;
    scrollLocked = false;
    document.documentElement.classList.remove("locked");
    document.body.classList.remove("locked");
    document.removeEventListener("wheel", onWheelBlock, { passive: false });
    document.removeEventListener("touchmove", onTouchBlock, { passive: false });
}

function clearAllFueyStorage() {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.indexOf("fuey-") === 0) keys.push(key);
    }
    keys.forEach(k => localStorage.removeItem(k));
    try { sessionStorage.clear(); } catch (e) {}
}

function getDataSource() {
    return localStorage.getItem("fuey-data-source") || "github";
}
function setDataSource(src, silent) {
    if (src !== "github" && src !== "local") src = "github";
    localStorage.setItem("fuey-data-source", src);
    document.querySelectorAll(".data-source-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-source") === src);
    });
    updateDataSourceWarning();
    syncAllSegmented();
    notifyFrames({ dataSource: src });
    if (!silent) {
        document.dispatchEvent(new Event("fuey-datasource-changed"));
    }
}
function updateDataSourceWarning() {
    const el = document.getElementById("dataSourceWarning");
    if (!el) return;
    const src = getDataSource();
    const warnGithub = (typeof t === "function" && t("dataSourceWarnGithub")) ? t("dataSourceWarnGithub") : "If you are using an offline version, please ensure you have network access!";
    const warnLocal = (typeof t === "function" && t("dataSourceWarnLocal")) ? t("dataSourceWarnLocal") : "This list needs to be online, otherwise some content cannot be synchronized";
    el.textContent = src === "github" ? warnGithub : warnLocal;
    el.classList.add("show");
}
window.__fueyUpdateDataSourceWarning = updateDataSourceWarning;
function initDataSource() {
    const githubBtn = document.getElementById("dataSourceGithub");
    const localBtn = document.getElementById("dataSourceLocal");
    if (!githubBtn || !localBtn) return;
    const src = getDataSource();
    githubBtn.classList.toggle("active", src === "github");
    localBtn.classList.toggle("active", src === "local");
    githubBtn.addEventListener("click", () => setDataSource("github"));
    localBtn.addEventListener("click", () => setDataSource("local"));
    updateDataSourceWarning();
}
window.__fueyGetDataSource = getDataSource;

function notifyFrames(payload) {
    document.querySelectorAll("iframe").forEach(f => {
        try {
            if (f.contentWindow) f.contentWindow.postMessage(Object.assign({ type: "fuey-sync" }, payload), "*");
        } catch (e) {}
    });
}
window.__fueyNotifyFrames = notifyFrames;

function initTheme() {
    const savedTheme = localStorage.getItem("fuey-theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    document.documentElement.style.colorScheme = savedTheme;
    const lightBtn = document.getElementById("themeLight");
    const darkBtn = document.getElementById("themeDark");
    if (lightBtn) lightBtn.classList.toggle("active", savedTheme === "light");
    if (darkBtn) darkBtn.classList.toggle("active", savedTheme === "dark");
}
function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("fuey-theme", theme);
    const lightBtn = document.getElementById("themeLight");
    const darkBtn = document.getElementById("themeDark");
    if (lightBtn) lightBtn.classList.toggle("active", theme === "light");
    if (darkBtn) darkBtn.classList.toggle("active", theme === "dark");
    syncAllSegmented();
    notifyFrames({ theme: theme });
    document.dispatchEvent(new Event("fuey-settings-changed"));
}

function initHanded() {
    const savedHanded = localStorage.getItem("fuey-handed") || "right";
    document.documentElement.setAttribute("data-handed", savedHanded);
    const toggle = document.getElementById("handedToggle");
    if (!toggle) return;
    const knob = toggle.querySelector(".toggle-knob");
    const maxOffset = 20;
    let dragging = false;
    let startX = 0;
    let startOffset = 0;
    let currentOffset = 0;
    let moved = false;
    let suppressClick = false;
    toggle.setAttribute("aria-checked", savedHanded === "left" ? "true" : "false");
    function onMove(clientX) {
        if (!dragging) return;
        const dx = clientX - startX;
        if (!moved && Math.abs(dx) < 3) return;
        if (!moved) { lockBodyScroll(); moved = true; }
        let next = startOffset + dx;
        next = Math.max(0, Math.min(maxOffset, next));
        currentOffset = next;
        knob.style.transform = `translateX(${next}px)`;
        const progress = next / maxOffset;
        const r = Math.round(120 - (120 - 52) * progress);
        const g = Math.round(120 + (199 - 120) * progress);
        const b = Math.round(128 - (128 - 89) * progress);
        toggle.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
    function onUp() {
        if (!dragging) return;
        dragging = false;
        toggle.classList.remove("dragging");
        if (moved) unlockBodyScroll();
        taskLock.release("handed");
        const checked = currentOffset >= maxOffset / 2;
        const wasChecked = toggle.getAttribute("aria-checked") === "true";
        knob.style.transform = "";
        toggle.style.backgroundColor = "";
        if (moved && checked !== wasChecked) {
            toggle.setAttribute("aria-checked", checked ? "true" : "false");
            applyHanded(checked ? "left" : "right");
        } else {
            toggle.setAttribute("aria-checked", wasChecked ? "true" : "false");
        }
        if (moved) {
            suppressClick = true;
            setTimeout(() => { suppressClick = false; }, 50);
        }
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", onUp);
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", onUp);
    }
    function handleMouseMove(e) {
        onMove(e.clientX);
        if (moved) e.preventDefault();
    }
    function handleTouchMove(e) {
        if (e.touches.length !== 1) { onUp(); return; }
        onMove(e.touches[0].clientX);
    }
    toggle.addEventListener("click", (e) => {
        if (suppressClick) { e.preventDefault(); return; }
        const current = toggle.getAttribute("aria-checked") === "true";
        toggle.setAttribute("aria-checked", current ? "false" : "true");
        applyHanded(current ? "right" : "left");
    });
    toggle.addEventListener("mousedown", (e) => {
        if (e.button !== 0) return;
        if (!taskLock.acquire("handed")) return;
        dragging = true;
        moved = false;
        startX = e.clientX;
        startOffset = toggle.getAttribute("aria-checked") === "true" ? maxOffset : 0;
        currentOffset = startOffset;
        toggle.classList.add("dragging");
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", onUp);
    });
    toggle.addEventListener("touchstart", (e) => {
        if (e.touches.length !== 1) return;
        if (!taskLock.acquire("handed")) return;
        dragging = true;
        moved = false;
        startX = e.touches[0].clientX;
        startOffset = toggle.getAttribute("aria-checked") === "true" ? maxOffset : 0;
        currentOffset = startOffset;
        toggle.classList.add("dragging");
        document.addEventListener("touchmove", handleTouchMove, { passive: false });
        document.addEventListener("touchend", onUp);
    }, { passive: true });
}

function applyHanded(handed) {
    const settingsPanel = document.getElementById("settingsPanel");
    const backdrop = document.querySelector(".settings-backdrop");
    const isPanelOpen = settingsPanel && settingsPanel.classList.contains("open");
    function commitHanded() {
        document.documentElement.setAttribute("data-handed", handed);
        localStorage.setItem("fuey-handed", handed);
        syncAllSegmented();
        notifyFrames({ handed: handed });
        if (typeof window.__refreshNavIndicator === "function") window.__refreshNavIndicator(true);
    }
    if (!isPanelOpen) { commitHanded(); return; }
    if (settingsPanel) settingsPanel.classList.remove("open");
    if (backdrop) backdrop.classList.remove("open");
    setTimeout(() => {
        commitHanded();
        setTimeout(() => {
            if (settingsPanel) {
                settingsPanel.classList.add("open");
                if (backdrop) backdrop.classList.add("open");
                syncAllSegmented();
                requestAnimationFrame(syncAllSegmented);
                setTimeout(syncAllSegmented, 250);
            }
        }, 500);
    }, 520);
}

function initSegmented() {
    document.querySelectorAll(".theme-options, .lang-options, .data-source-options").forEach(group => {
        const items = Array.from(group.querySelectorAll(".theme-btn, .lang-btn, .data-source-btn"));
        if (items.length < 2) return;
        const indicator = document.createElement("div");
        indicator.className = "segmented-indicator";
        group.insertBefore(indicator, group.firstChild);
        let dragging = false;
        let hasMoved = false;
        let pendingItem = null;
        let suppressClick = false;
        let dragStartX = 0;
        let dragStartLeft = 0;
        let dragStartWidth = 0;
        const dragThreshold = 3;

        function getActiveItem() {
            return group.querySelector(".theme-btn.active, .lang-btn.active, .data-source-btn.active") || items[0];
        }
        function syncActiveClass(item) {
            items.forEach(i => i.classList.remove("active"));
            item.classList.add("active");
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
        function readIndicatorWidth() {
            return indicator.offsetWidth || 0;
        }
        function positionIndicator(target, instant) {
            if (!target) return;
            const groupRect = group.getBoundingClientRect();
            const targetRect = target.getBoundingClientRect();
            const maxW = group.clientWidth;
            const w = Math.min(targetRect.width, maxW);
            let left = targetRect.left - groupRect.left;
            if (left < 0) left = 0;
            if (left + w > maxW) left = maxW - w;
            if (instant) {
                indicator.classList.add("no-anim");
                indicator.style.transform = `translateX(${left}px)`;
                indicator.style.width = `${w}px`;
                void indicator.offsetWidth;
                indicator.classList.remove("no-anim");
            } else {
                indicator.classList.remove("no-anim", "dragging");
                indicator.style.transform = `translateX(${left}px)`;
                indicator.style.width = `${w}px`;
            }
        }
        function applyChoice(target) {
            if (target.id === "themeLight") applyTheme("light");
            else if (target.id === "themeDark") applyTheme("dark");
            else if (target.id === "dataSourceGithub") setDataSource("github");
            else if (target.id === "dataSourceLocal") setDataSource("local");
            else if (target.id === "langZh") applyLangChoice("zh");
            else if (target.id === "langEn") applyLangChoice("en");
        }
        function syncInstant() { positionIndicator(getActiveItem(), true); }
        function syncAnimated() { positionIndicator(getActiveItem(), false); }
        segmentedSyncers.push(syncAnimated);
        requestAnimationFrame(syncInstant);

        function onMove(clientX) {
            if (!dragging) return;
            const dx = clientX - dragStartX;
            if (!hasMoved && Math.abs(dx) < dragThreshold) return;
            if (!hasMoved) { hasMoved = true; lockBodyScroll(); }
            const maxLeft = Math.max(0, group.clientWidth - dragStartWidth);
            let newLeft = dragStartLeft + dx;
            newLeft = Math.max(0, Math.min(newLeft, maxLeft));
            indicator.style.transform = `translateX(${newLeft}px)`;
            const groupRect = group.getBoundingClientRect();
            const centerX = groupRect.left + newLeft + dragStartWidth / 2;
            let closest = null;
            let minDist = Infinity;
            items.forEach(item => {
                const r = item.getBoundingClientRect();
                const center = (r.left + r.right) / 2;
                const d = Math.abs(centerX - center);
                if (d < minDist) { minDist = d; closest = item; }
            });
            pendingItem = closest;
            items.forEach(item => item.classList.toggle("active", item === closest));
        }
        function onUp() {
            if (!dragging) return;
            dragging = false;
            group.classList.remove("dragging");
            indicator.classList.remove("dragging");
            const moved = hasMoved;
            hasMoved = false;
            if (moved) {
                unlockBodyScroll();
                suppressClick = true;
                setTimeout(() => { suppressClick = false; }, 60);
                if (pendingItem) {
                    if (pendingItem.id === "langOther") {
                        syncActiveClass(pendingItem);
                        positionIndicator(pendingItem, false);
                        openLangDropdown();
                    } else {
                        syncActiveClass(pendingItem);
                        positionIndicator(pendingItem, false);
                        applyChoice(pendingItem);
                    }
                } else {
                    positionIndicator(getActiveItem(), false);
                }
            } else {
                positionIndicator(getActiveItem(), false);
            }
            pendingItem = null;
            taskLock.release("segmented");
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", onUp);
            document.removeEventListener("touchmove", handleTouchMove);
            document.removeEventListener("touchend", onUp);
        }
        function handleMouseMove(e) {
            onMove(e.clientX);
            if (hasMoved) e.preventDefault();
        }
        function handleTouchMove(e) {
            if (e.touches.length !== 1) { onUp(); return; }
            onMove(e.touches[0].clientX);
            if (hasMoved) e.preventDefault();
        }

        group.addEventListener("mousedown", (e) => {
            if (e.button !== 0) return;
            if (!taskLock.acquire("segmented")) return;
            dragging = true;
            hasMoved = false;
            dragStartX = e.clientX;
            dragStartLeft = readIndicatorLeft();
            dragStartWidth = readIndicatorWidth();
            group.classList.add("dragging");
            indicator.classList.add("dragging");
            indicator.style.transform = `translateX(${dragStartLeft}px)`;
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", onUp);
        });
        group.addEventListener("touchstart", (e) => {
            if (e.touches.length !== 1) return;
            if (!taskLock.acquire("segmented")) return;
            dragging = true;
            hasMoved = false;
            dragStartX = e.touches[0].clientX;
            dragStartLeft = readIndicatorLeft();
            dragStartWidth = readIndicatorWidth();
            group.classList.add("dragging");
            indicator.classList.add("dragging");
            indicator.style.transform = `translateX(${dragStartLeft}px)`;
            document.addEventListener("touchmove", handleTouchMove, { passive: false });
            document.addEventListener("touchend", onUp);
        }, { passive: true });

        items.forEach(item => {
            item.addEventListener("click", (e) => {
                if (suppressClick) { e.preventDefault(); return; }
                if (item.id === "langOther") {
                    syncActiveClass(item);
                    positionIndicator(item, false);
                    openLangDropdown();
                    return;
                }
                closeLangDropdown();
                syncActiveClass(item);
                positionIndicator(item, false);
                applyChoice(item);
            });
        });
        window.addEventListener("resize", syncInstant);
    });
}

function applyLangChoice(lang) {
    if (typeof setLang === "function") setLang(lang);
}

let lastOpenLangTime = 0;
function openLangDropdown() {
    const dropdown = document.getElementById("langDropdown");
    const otherBtn = document.getElementById("langOther");
    if (!dropdown) return;
    lastOpenLangTime = Date.now();
    if (dropdown.classList.contains("open")) return;
    dropdown.classList.add("open");
    if (otherBtn) {
        const group = otherBtn.parentElement;
        if (group) {
            group.querySelectorAll(".lang-btn").forEach(i => i.classList.remove("active"));
            otherBtn.classList.add("active");
        }
    }
    lockBodyScroll();
    syncAllSegmented();
}
function closeLangDropdown() {
    const dropdown = document.getElementById("langDropdown");
    if (!dropdown) return;
    if (!dropdown.classList.contains("open")) return;
    dropdown.classList.remove("open");
    unlockBodyScroll();
    if (typeof syncLangButtons === "function") syncLangButtons();
    if (typeof window.__syncLangDropdown === "function") window.__syncLangDropdown();
    syncAllSegmented();
}
window.__openLangDropdown = openLangDropdown;
window.__closeLangDropdown = closeLangDropdown;

function initLangDropdown() {
    const dropdown = document.getElementById("langDropdown");
    const toggle = document.getElementById("langDropdownToggle");
    const panel = document.getElementById("langDropdownPanel");
    const label = document.getElementById("langDropdownLabel");
    if (!dropdown || !toggle || !panel) return;
    if (dropdown.dataset.built === "1") return;
    dropdown.dataset.built = "1";
    function syncActive() {
        const lang = localStorage.getItem("fuey-lang") || "en";
        panel.querySelectorAll(".lang-dropdown-item").forEach(item => {
            item.classList.toggle("active", item.dataset.code === lang);
        });
        if (label) {
            if (typeof OTHER_LANG_NAMES !== "undefined" && OTHER_LANG_NAMES[lang]) label.textContent = OTHER_LANG_NAMES[lang];
            else label.textContent = (typeof t === "function") ? t("otherLang") : "Other";
        }
    }
    window.__syncLangDropdown = syncActive;
    syncActive();
    toggle.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (dropdown.classList.contains("open")) {
            lastOpenLangTime = 0;
            closeLangDropdown();
        } else {
            openLangDropdown();
        }
    });
    panel.querySelectorAll(".lang-dropdown-item").forEach(item => {
        item.addEventListener("click", (e) => {
            e.stopPropagation();
            const code = item.dataset.code;
            if (code && typeof setLang === "function") setLang(code);
            syncActive();
            lastOpenLangTime = 0;
            closeLangDropdown();
        });
    });
    document.addEventListener("click", (ev) => {
        if (!dropdown.classList.contains("open")) return;
        if (Date.now() - lastOpenLangTime < 500) return;
        if (dropdown.contains(ev.target)) return;
        const otherBtn = document.getElementById("langOther");
        if (ev.target === otherBtn) return;
        lastOpenLangTime = 0;
        closeLangDropdown();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            lastOpenLangTime = 0;
            closeLangDropdown();
        }
    });
    document.addEventListener("fuey-settings-changed", syncActive);
}

function initSettingsIO() {
    const exportBtn = document.getElementById("exportSettings");
    const importBtn = document.getElementById("importSettings");
    const fileInput = document.getElementById("importFile");
    if (exportBtn) exportBtn.addEventListener("click", exportSettings);
    if (importBtn && fileInput) {
        importBtn.addEventListener("click", () => fileInput.click());
        fileInput.addEventListener("change", importSettingsFile);
    }
}
function exportSettings() {
    const settings = {
        theme: localStorage.getItem("fuey-theme") || "light",
        lang: localStorage.getItem("fuey-lang") || "en",
        handed: localStorage.getItem("fuey-handed") || "right",
        dataSource: getDataSource()
    };
    const content = `window.__FUEY_SETTINGS__ = ${JSON.stringify(settings, null, 2)};\n`;
    const blob = new Blob([content], { type: "application/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "FueySettings.js";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    showIOToast(typeof t === "function" ? t("exportSuccess") : "Exported", "ok");
}
function importSettingsFile(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
        try {
            const code = String(reader.result || "");
            const fn = new Function("window", code + "\nreturn window.__FUEY_SETTINGS__ || null;");
            const settings = fn(window);
            if (!settings || typeof settings !== "object") {
                showIOToast(typeof t === "function" ? t("importFailed") : "Import failed", "err");
                e.target.value = "";
                return;
            }
            if (settings.theme === "light" || settings.theme === "dark") localStorage.setItem("fuey-theme", settings.theme);
            if (settings.lang) localStorage.setItem("fuey-lang", settings.lang);
            if (settings.handed === "left" || settings.handed === "right") localStorage.setItem("fuey-handed", settings.handed);
            if (settings.dataSource === "github" || settings.dataSource === "local") localStorage.setItem("fuey-data-source", settings.dataSource);
            showIOToast(typeof t === "function" ? t("importSuccess") : "Imported", "ok");
            setTimeout(() => {
                window.location.replace(window.location.href.split("#")[0]);
            }, 600);
        } catch (err) {
            showIOToast(typeof t === "function" ? t("importFailed") : "Import failed", "err");
            e.target.value = "";
        }
    };
    reader.readAsText(file);
}
function showIOToast(text, typeOrBool) {
    let type = "ok";
    if (typeOrBool === false) type = "err";
    else if (typeOrBool === "warn") type = "warn";
    else if (typeOrBool === "err") type = "err";
    else if (typeOrBool === "ok" || typeOrBool === true) type = "ok";
    const icons = { ok: "✓", err: "⊘", warn: "⚠" };
    let el = document.getElementById("ioToast");
    if (!el) {
        el = document.createElement("div");
        el.id = "ioToast";
        el.className = "io-toast";
        el.innerHTML = `<span class="io-toast-icon"></span><span class="io-toast-text"></span>`;
        document.body.appendChild(el);
    }
    const iconEl = el.querySelector(".io-toast-icon");
    const textEl = el.querySelector(".io-toast-text");
    if (iconEl) iconEl.textContent = icons[type] || "✓";
    if (textEl) textEl.textContent = text;
    el.classList.remove("show", "ok", "err", "warn");
    void el.offsetWidth;
    el.classList.add("show");
    el.classList.add(type);
    clearTimeout(el.__timer);
    el.__timer = setTimeout(() => el.classList.remove("show"), 2200);
}
window.__showIOToast = showIOToast;

let onSettingsCloseCallback = null;

function initSettingsPanel() {
    const settingsBtn = document.getElementById("navSettings");
    const settingsPanel = document.getElementById("settingsPanel");
    const closeBtn = document.getElementById("closeSettings");
    if (!settingsBtn || !settingsPanel) return;
    let backdrop = document.querySelector(".settings-backdrop");
    if (!backdrop) {
        backdrop = document.createElement("div");
        backdrop.className = "settings-backdrop";
        document.body.appendChild(backdrop);
    }
    function notifyNavToSettings() { if (window.__setNavUiItem) window.__setNavUiItem("settings"); }
    function notifyNavToPage() { if (window.__setNavUiItem) window.__setNavUiItem("page"); }
    function openPanel() {
        settingsPanel.classList.add("open");
        backdrop.classList.add("open");
        notifyNavToSettings();
        lockBodyScroll();
        syncAllSegmented();
        requestAnimationFrame(syncAllSegmented);
        setTimeout(syncAllSegmented, 250);
        initPanelDrag();
    }
    function closePanel() {
        settingsPanel.classList.remove("open");
        backdrop.classList.remove("open");
        lastOpenLangTime = 0;
        closeLangDropdown();
        unlockBodyScroll();
        settingsPanel.style.transform = "";
        settingsPanel.style.opacity = "";
        setTimeout(() => {
            if (typeof onSettingsCloseCallback === "function") {
                const cb = onSettingsCloseCallback;
                onSettingsCloseCallback = null;
                cb();
            } else {
                notifyNavToPage();
            }
        }, 80);
    }
    settingsBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (settingsPanel.classList.contains("open")) closePanel();
        else openPanel();
    });
    if (closeBtn) closeBtn.addEventListener("click", closePanel);
    backdrop.addEventListener("click", (e) => { if (e.target === backdrop) closePanel(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closePanel(); });
    const resetBtn = document.getElementById("resetSettings");
    if (resetBtn) resetBtn.addEventListener("click", () => showResetConfirm());
    let panelDragInited = false;
    let dragging = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let currentOffset = 0;
    let baseOffset = 0;
    let isLeftHanded = false;
    let panelWidth = 320;
    function initPanelDrag() {
        if (panelDragInited) return;
        panelDragInited = true;
        panelWidth = settingsPanel.offsetWidth || 320;
        function onMove(clientX, clientY) {
            if (!dragging) return;
            const dx = clientX - dragStartX;
            const dy = clientY - dragStartY;
            if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 10) return;
            let offset = isLeftHanded ? Math.min(0, dx) : Math.max(0, dx);
            currentOffset = offset;
            settingsPanel.style.transform = `translateX(${baseOffset + offset}px)`;
            settingsPanel.style.opacity = String(1 - Math.min(Math.abs(offset) / panelWidth, 1) * 0.5);
        }
        function onUp() {
            if (!dragging) return;
            dragging = false;
            settingsPanel.style.transition = "";
            unlockBodyScroll();
            taskLock.release("settings");
            const threshold = panelWidth / 3;
            if (Math.abs(currentOffset) >= threshold) closePanel();
            else {
                settingsPanel.style.transform = "";
                settingsPanel.style.opacity = "";
            }
            currentOffset = 0;
            baseOffset = 0;
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", onUp);
            document.removeEventListener("touchmove", handleTouchMove);
            document.removeEventListener("touchend", onUp);
        }
        function handleMouseMove(e) {
            onMove(e.clientX, e.clientY);
            e.preventDefault();
        }
        function handleTouchMove(e) {
            if (e.touches.length !== 1) { onUp(); return; }
            onMove(e.touches[0].clientX, e.touches[0].clientY);
        }
        settingsPanel.addEventListener("mousedown", (e) => {
            if (e.button !== 0) return;
            if (e.target.closest("button, a, input, .toggle-switch, .theme-options, .lang-options, .data-source-options, .lang-dropdown, .settings-io-row")) return;
            if (!settingsPanel.classList.contains("open")) return;
            if (!taskLock.acquire("settings")) return;
            isLeftHanded = document.documentElement.getAttribute("data-handed") === "left";
            dragging = true;
            dragStartX = e.clientX;
            dragStartY = e.clientY;
            currentOffset = 0;
            baseOffset = 0;
            settingsPanel.style.transition = "none";
            lockBodyScroll();
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", onUp);
        });
        settingsPanel.addEventListener("touchstart", (e) => {
            if (e.touches.length !== 1) return;
            if (e.target.closest("button, a, input, .toggle-switch, .theme-options, .lang-options, .data-source-options, .lang-dropdown, .settings-io-row")) return;
            if (!settingsPanel.classList.contains("open")) return;
            if (!taskLock.acquire("settings")) return;
            isLeftHanded = document.documentElement.getAttribute("data-handed") === "left";
            dragging = true;
            dragStartX = e.touches[0].clientX;
            dragStartY = e.touches[0].clientY;
            currentOffset = 0;
            baseOffset = 0;
            settingsPanel.style.transition = "none";
            lockBodyScroll();
            document.addEventListener("touchmove", handleTouchMove, { passive: false });
            document.addEventListener("touchend", onUp);
        }, { passive: true });
    }
}

function showResetConfirm() {
    const existing = document.querySelector(".confirm-overlay");
    if (existing) existing.remove();
    const overlay = document.createElement("div");
    overlay.className = "confirm-overlay";
    overlay.innerHTML = `
        <div class="confirm-dialog">
            <p class="confirm-text">${t("resetConfirm")}</p>
            <div class="confirm-actions">
                <button class="confirm-btn no">${t("no")}</button>
                <button class="confirm-btn yes">${t("yes")}</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
    overlay.querySelector(".confirm-btn.no").addEventListener("click", () => {
        overlay.classList.remove("show");
        setTimeout(() => overlay.remove(), 300);
    });
    overlay.querySelector(".confirm-btn.yes").addEventListener("click", () => {
        clearAllFueyStorage();
        window.location.replace(window.location.href.split("#")[0]);
    });
    requestAnimationFrame(() => overlay.classList.add("show"));
}

function initPageExitOverlay() {
    const overlay = document.createElement("div");
    overlay.className = "page-exit-overlay";
    document.body.appendChild(overlay);
}
function navigateTo(url) {
    const overlay = document.querySelector(".page-exit-overlay");
    if (overlay) overlay.classList.add("active");
    setTimeout(() => { window.location.href = url; }, 500);
}

function initNavHome() {
    const homeBtn = document.getElementById("navHome");
    if (!homeBtn) return;
    homeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/")) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }
        navigateTo("index.html");
    });
}

function initNavSlider() {
    const navLinks = document.querySelector(".nav-links");
    if (!navLinks) return;
    const items = Array.from(navLinks.querySelectorAll(".nav-item"));
    if (items.length === 0) return;
    let indicator = navLinks.querySelector(".nav-indicator");
    if (!indicator) {
        indicator = document.createElement("div");
        indicator.className = "nav-indicator animate";
        navLinks.insertBefore(indicator, navLinks.firstChild);
    }
    items.forEach(item => {
        item.setAttribute("draggable", "false");
        item.addEventListener("dragstart", (e) => e.preventDefault());
    });
    const settingsItem = items.find(i => i.id === "navSettings") || null;
    let pageItem = navLinks.querySelector(".nav-item.active") || items[0];
    let uiItem = pageItem;
    let dragging = false;
    let dragStartX = 0;
    let dragStartLeft = 0;
    let dragStartWidth = 0;
    let hasMoved = false;
    let suppressClick = false;
    const dragThreshold = 3;
    const dragState = { raf: 0, lastClientX: 0 };

    function applyActiveClass(item) {
        items.forEach(i => i.classList.remove("active"));
        if (item) item.classList.add("active");
    }
    function setUiItem(item) {
        uiItem = item;
        applyActiveClass(item);
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
    function readIndicatorWidth() {
        return indicator.offsetWidth || 0;
    }
    function positionIndicator(target, instant) {
        if (!target) return;
        const navRect = navLinks.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const maxW = navLinks.clientWidth;
        const w = Math.min(targetRect.width, maxW);
        let left = targetRect.left - navRect.left;
        if (left < 0) left = 0;
        if (left + w > maxW) left = maxW - w;
        if (instant) {
            indicator.classList.add("no-anim");
            indicator.style.transform = `translateX(${left}px)`;
            indicator.style.width = `${w}px`;
            void indicator.offsetWidth;
            indicator.classList.remove("no-anim");
            indicator.classList.add("animate");
        } else {
            indicator.classList.add("animate");
            indicator.style.transform = `translateX(${left}px)`;
            indicator.style.width = `${w}px`;
        }
    }
    function refreshIndicator(smooth) {
        const settingsPanel = document.getElementById("settingsPanel");
        const isSettingsOpen = settingsPanel && settingsPanel.classList.contains("open");
        if (!isSettingsOpen && uiItem && uiItem.id === "navSettings") {
            uiItem = pageItem;
        }
        if (!uiItem || !uiItem.isConnected) {
            uiItem = navLinks.querySelector(".nav-item.active") || items[0];
        }
        applyActiveClass(uiItem);
        positionIndicator(uiItem, smooth !== true);
    }
    window.__refreshNavIndicator = refreshIndicator;
    window.__setNavUiItem = function (target) {
        if (target === "settings" && settingsItem) {
            setUiItem(settingsItem);
            positionIndicator(settingsItem, false);
        } else if (target === "page") {
            setUiItem(pageItem);
            positionIndicator(pageItem, false);
        }
    };
    requestAnimationFrame(() => positionIndicator(uiItem, true));
    window.addEventListener("resize", () => refreshIndicator(true));
    window.addEventListener("load", () => refreshIndicator(true));
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => refreshIndicator(true));

    function updateDragPosition(clientX) {
        const dx = clientX - dragStartX;
        if (!hasMoved && Math.abs(dx) < dragThreshold) return;
        if (!hasMoved) {
            hasMoved = true;
            lockBodyScroll();
        }
        const maxLeft = Math.max(0, navLinks.clientWidth - dragStartWidth);
        let newLeft = dragStartLeft + dx;
        newLeft = Math.max(0, Math.min(newLeft, maxLeft));
        indicator.style.transform = `translateX(${newLeft}px)`;
        const navRect = navLinks.getBoundingClientRect();
        const centerX = navRect.left + newLeft + dragStartWidth / 2;
        let closest = null;
        let minDist = Infinity;
        items.forEach(item => {
            const r = item.getBoundingClientRect();
            const center = (r.left + r.right) / 2;
            const d = Math.abs(centerX - center);
            if (d < minDist) { minDist = d; closest = item; }
        });
        if (closest && closest !== uiItem) {
            uiItem = closest;
            applyActiveClass(closest);
        }
    }

    function onDragMove(e) {
        if (!dragging) return;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        dragState.lastClientX = clientX;
        if (dragState.raf) return;
        dragState.raf = requestAnimationFrame(() => {
            dragState.raf = 0;
            updateDragPosition(dragState.lastClientX);
        });
        if (hasMoved && e.cancelable) e.preventDefault();
    }

    function endDrag() {
        if (!dragging) return;
        dragging = false;
        navLinks.classList.remove("dragging");
        document.body.style.userSelect = "";
        if (dragState.raf) {
            cancelAnimationFrame(dragState.raf);
            dragState.raf = 0;
            updateDragPosition(dragState.lastClientX);
        }
        const moved = hasMoved;
        hasMoved = false;
        if (moved) {
            unlockBodyScroll();
            suppressClick = true;
            setTimeout(() => { suppressClick = false; }, 80);
            const target = uiItem;
            if (target && target.id === "navSettings") {
                positionIndicator(target, false);
                onSettingsCloseCallback = () => {
                    setUiItem(pageItem);
                    positionIndicator(pageItem, false);
                };
                const settingsPanel = document.getElementById("settingsPanel");
                const backdrop = document.querySelector(".settings-backdrop");
                if (settingsPanel && !settingsPanel.classList.contains("open")) {
                    settingsPanel.classList.add("open");
                    if (backdrop) backdrop.classList.add("open");
                    lockBodyScroll();
                    syncAllSegmented();
                    requestAnimationFrame(syncAllSegmented);
                    setTimeout(syncAllSegmented, 250);
                }
            } else if (target) {
                pageItem = target;
                setUiItem(target);
                positionIndicator(target, false);
                const href = target.getAttribute("href");
                if (href && !href.endsWith("#") && !window.location.pathname.endsWith(href)) {
                    setTimeout(() => navigateTo(href), 420);
                }
            }
        } else {
            positionIndicator(uiItem, false);
        }
        taskLock.release("nav");
        document.removeEventListener("mousemove", onDragMove);
        document.removeEventListener("mouseup", endDrag);
        document.removeEventListener("touchmove", onDragMove, { passive: false });
        document.removeEventListener("touchend", endDrag);
    }

    function startDrag(clientX, clientY, e) {
        if (!taskLock.acquire("nav")) return false;
        const r = indicator.getBoundingClientRect();
        if (clientX < r.left - 10 || clientX > r.right + 10 || clientY < r.top - 8 || clientY > r.bottom + 8) {
            taskLock.release("nav");
            return false;
        }
        dragging = true;
        hasMoved = false;
        dragStartX = clientX;
        dragStartLeft = readIndicatorLeft();
        dragStartWidth = readIndicatorWidth();
        dragState.lastClientX = clientX;
        indicator.classList.remove("animate", "snap", "no-anim");
        indicator.style.transform = `translateX(${dragStartLeft}px)`;
        navLinks.classList.add("dragging");
        document.body.style.userSelect = "none";
        if (e && e.cancelable) e.preventDefault();
        return true;
    }

    navLinks.addEventListener("mousedown", (e) => {
        if (e.button !== 0) return;
        if (!startDrag(e.clientX, e.clientY, e)) return;
        document.addEventListener("mousemove", onDragMove);
        document.addEventListener("mouseup", endDrag);
    });
    navLinks.addEventListener("touchstart", (e) => {
        if (e.touches.length !== 1) return;
        if (!startDrag(e.touches[0].clientX, e.touches[0].clientY, e)) return;
        document.addEventListener("touchmove", onDragMove, { passive: false });
        document.addEventListener("touchend", endDrag);
    }, { passive: true });

    items.forEach(item => {
        item.addEventListener("click", (e) => {
            if (suppressClick) { e.preventDefault(); e.stopPropagation(); return; }
            if (item.id === "navSettings") return;
            if (item === pageItem && item === uiItem) {
                applyActiveClass(pageItem);
                positionIndicator(pageItem, false);
                return;
            }
            pageItem = item;
            setUiItem(item);
            positionIndicator(item, false);
            const href = item.getAttribute("href");
            if (href && !href.endsWith("#") && !window.location.pathname.endsWith(href)) {
                setTimeout(() => navigateTo(href), 420);
            }
        });
    });
}

function initDevelopers() {
    const list = document.getElementById("developerList");
    if (!list) return;
    if (list.dataset.loaded === "1") return;
    list.dataset.loaded = "1";
    const cacheKey = "fuey-contributors";
    let cachedData = null;
    function render(data) {
        if (data !== undefined) cachedData = data;
        let useData = cachedData;
        if (!Array.isArray(useData) || useData.length === 0) {
            useData = [{ login: "FueySeek", html_url: "https://github.com/FueySeek", avatar_url: "https://github.com/FueySeek.png" }];
        }
        const maintainerText = typeof t === "function" ? t("maintainer") : "Maintainer";
        list.innerHTML = useData.map((user, index) => {
            const isMaintainer = index === 0 || user.login.toLowerCase() === "fueyseek";
            return `
            <a href="${user.html_url}" target="_blank" rel="noopener" class="developer-item">
                ${isMaintainer ? `<span class="maintainer-badge">${maintainerText}</span>` : ""}
                <img src="${user.avatar_url}" alt="${user.login}" class="developer-avatar">
                <span class="developer-name">${user.login}</span>
            </a>`;
        }).join("");
    }
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
        try { cachedData = JSON.parse(cached); render(cachedData); } catch (e) {}
    } else {
        fetch("https://api.github.com/repos/FueySeek/FueySeek.github.io/contributors")
            .then(res => res.ok ? res.json() : Promise.reject())
            .then(data => {
                sessionStorage.setItem(cacheKey, JSON.stringify(data));
                render(data);
            })
            .catch(() => render(null));
    }
    document.addEventListener("fuey-settings-changed", () => render());
}

function initFooterYear() {
    const yearEl = document.getElementById("footerYear");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
    if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
    }
    initTheme();
    initHanded();
    initNavSlider();
    initSettingsPanel();
    initNavHome();
    initFooterYear();
    initPageExitOverlay();
    initSegmented();
    initDevelopers();
    initLangDropdown();
    initSettingsIO();
    initDataSource();
    if (typeof applyLang === "function") applyLang();
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            if (window.__refreshNavIndicator) window.__refreshNavIndicator(true);
            syncAllSegmented();
        });
    }
});