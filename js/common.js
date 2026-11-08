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
    if (t && t.closest && (t.closest(".settings-body.scrollable") || t.closest(".lang-dropdown-scroll"))) return;
    e.preventDefault();
}
function onTouchBlock(e) {
    if (!scrollLocked) return;
    if (e.touches && e.touches.length > 1) { e.preventDefault(); return; }
    const t = e.target;
    if (t && t.closest && (t.closest(".settings-body.scrollable") || t.closest(".lang-dropdown-scroll"))) return;
    e.preventDefault();
}
function lockBodyScroll() {
    scrollLockCount++;
    if (scrollLocked) return;
    scrollLocked = true;
    document.documentElement.classList.add("locked");
    document.body.classList.add("locked");
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.addEventListener("wheel", onWheelBlock, { passive: false });
    document.addEventListener("touchmove", onTouchBlock, { passive: false });
}
function unlockBodyScroll() {
    scrollLockCount = Math.max(0, scrollLockCount - 1);
    if (scrollLockCount > 0) return;
    scrollLocked = false;
    document.documentElement.classList.remove("locked");
    document.body.classList.remove("locked");
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    document.removeEventListener("wheel", onWheelBlock, { passive: false });
    document.removeEventListener("touchmove", onTouchBlock, { passive: false });
}

function updateSettingsBodyScroll() {
    const body = document.querySelector(".settings-body");
    if (!body) return;
    body.classList.remove("scrollable");
    void body.offsetHeight;
    if (body.scrollHeight > body.clientHeight + 1) {
        body.classList.add("scrollable");
    }
}
window.__fueyUpdateSettingsBodyScroll = updateSettingsBodyScroll;

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

function getCustomization() {
    const raw = localStorage.getItem("fuey-custom");
    if (!raw) return null;
    try { return JSON.parse(raw); } catch (e) { return null; }
}
function isCustomizationEnabled() {
    return localStorage.getItem("fuey-apply-customization") === "true";
}
function isCustomProtocolsEnabled() {
    return localStorage.getItem("fuey-enable-custom-protocols") === "true";
}
function saveCustomization(custom) {
    if (!custom || typeof custom !== "object") return;
    try { localStorage.setItem("fuey-custom", JSON.stringify(custom)); } catch (e) {}
}
function applyCustomization(custom) {
    if (!custom || typeof custom !== "object") return;
    if (custom.vars && typeof custom.vars === "object") {
        Object.keys(custom.vars).forEach(k => {
            try { document.documentElement.style.setProperty(k, String(custom.vars[k])); } catch (e) {}
        });
    }
    if (typeof custom.css === "string" && custom.css) {
        let s = document.getElementById("fuey-custom-style");
        if (!s) {
            s = document.createElement("style");
            s.id = "fuey-custom-style";
            document.head.appendChild(s);
        }
        s.textContent = custom.css;
    }
    if (typeof custom.js === "string" && custom.js && isCustomProtocolsEnabled()) {
        try { new Function("window", "document", custom.js)(window, document); } catch (e) {}
    }
}
function initCustomization() {
    if (!isCustomizationEnabled()) return;
    applyCustomization(getCustomization());
}
window.__fueyApplyCustomization = function (custom) {
    saveCustomization(custom);
    applyCustomization(custom);
};
window.__fueyGetCustomization = getCustomization;
window.__fueySetCustomizationEnabled = function (enabled) {
    localStorage.setItem("fuey-apply-customization", enabled ? "true" : "false");
    if (enabled) initCustomization();
    updateSecurityIndicator();
};
window.__fueySetCustomProtocolsEnabled = function (enabled) {
    localStorage.setItem("fuey-enable-custom-protocols", enabled ? "true" : "false");
    updateSecurityIndicator();
};
window.__fueyGetPermanent = function (key) {
    return localStorage.getItem("fuey-perm-" + key);
};

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
                updateSettingsBodyScroll();
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
            else if (target.id === "langZh") { closeLangDropdown(); applyLangChoice("zh"); }
            else if (target.id === "langEn") { closeLangDropdown(); applyLangChoice("en"); }
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
                        const dropdown = document.getElementById("langDropdown");
                        if (dropdown && dropdown.classList.contains("open")) {
                            lastOpenLangTime = 0;
                            closeLangDropdown();
                        } else {
                            syncActiveClass(pendingItem);
                            positionIndicator(pendingItem, false);
                            openLangDropdown();
                        }
                    } else {
                        closeLangDropdown();
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
                    const dropdown = document.getElementById("langDropdown");
                    if (dropdown && dropdown.classList.contains("open")) {
                        lastOpenLangTime = 0;
                        closeLangDropdown();
                    } else {
                        syncActiveClass(item);
                        positionIndicator(item, false);
                        openLangDropdown();
                    }
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
    const toggle = document.getElementById("langDropdownToggle");
    const panel = document.getElementById("langDropdownPanel");
    if (!dropdown || !toggle || !panel) return;
    lastOpenLangTime = Date.now();
    if (dropdown.classList.contains("open")) return;
    
    dropdown.classList.add("open");
    panel.classList.add("show");

    const otherBtn = document.getElementById("langOther");
    if (otherBtn) {
        const group = otherBtn.parentElement;
        if (group) {
            group.querySelectorAll(".lang-btn").forEach(i => i.classList.remove("active"));
            otherBtn.classList.add("active");
        }
    }

    const rect = toggle.getBoundingClientRect();
    const isRTL = document.documentElement.getAttribute("dir") === "rtl";
    
    panel.style.width = rect.width + "px";
    panel.style.top = (rect.bottom + 6) + "px";
    
    if (isRTL) {
        panel.style.left = "auto";
        panel.style.right = (document.documentElement.clientWidth - rect.right) + "px";
    } else {
        panel.style.right = "auto";
        panel.style.left = rect.left + "px";
    }
    
    const availableHeight = window.innerHeight - rect.bottom - 20;
    panel.style.maxHeight = Math.max(120, Math.min(320, availableHeight)) + "px";

    lockBodyScroll();
    requestAnimationFrame(() => {
        syncAllSegmented();
        updateSettingsBodyScroll();
    });
}
function closeLangDropdown() {
    const dropdown = document.getElementById("langDropdown");
    const panel = document.getElementById("langDropdownPanel");
    if (!dropdown || !panel) return;
    if (!dropdown.classList.contains("open")) return;
    dropdown.classList.remove("open");
    panel.classList.remove("show");
    unlockBodyScroll();
    if (typeof syncLangButtons === "function") syncLangButtons();
    if (typeof window.__syncLangDropdown === "function") window.__syncLangDropdown();
    requestAnimationFrame(() => {
        syncAllSegmented();
        updateSettingsBodyScroll();
    });
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

    if (panel.parentNode !== document.body) {
        document.body.appendChild(panel);
    }

    let scrollEl = panel.querySelector(".lang-dropdown-scroll");
    if (!scrollEl) {
        scrollEl = document.createElement("div");
        scrollEl.className = "lang-dropdown-scroll";
        while (panel.firstChild) {
            scrollEl.appendChild(panel.firstChild);
        }
        panel.appendChild(scrollEl);
    }

    function syncActive() {
        const lang = localStorage.getItem("fuey-lang") || "en";
        scrollEl.querySelectorAll(".lang-dropdown-item").forEach(item => {
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
    
    scrollEl.querySelectorAll(".lang-dropdown-item").forEach(item => {
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
        if (dropdown.contains(ev.target) || panel.contains(ev.target)) return;
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
    
    const settingsBody = document.querySelector(".settings-body");
    if (settingsBody) {
        settingsBody.addEventListener("scroll", () => {
            if (dropdown.classList.contains("open")) closeLangDropdown();
        });
    }
    window.addEventListener("resize", () => {
        if (dropdown.classList.contains("open")) closeLangDropdown();
    });

    document.addEventListener("fuey-settings-changed", syncActive);
}

function initSecurityIndicator() {
    const settingsBody = document.querySelector(".settings-body");
    if (!settingsBody) return;
    if (document.getElementById("securityIndicator")) return;
    const groups = settingsBody.querySelectorAll(".setting-group");
    let langGroup = null;
    groups.forEach(g => {
        if (!langGroup && g.querySelector(".lang-options")) langGroup = g;
    });
    if (!langGroup) return;
    const wrap = document.createElement("div");
    wrap.className = "security-indicator-group";
    wrap.id = "securityIndicator";
    wrap.innerHTML = `
        <div class="security-indicator-row">
            <span class="security-label" id="securityLabel" data-lang-key="secureEnv">Secure Environment</span>
            <span class="security-dot" id="securityDot"></span>
        </div>
    `;
    langGroup.parentNode.insertBefore(wrap, langGroup.nextSibling);
    updateSecurityIndicator();
    document.addEventListener("fuey-settings-changed", updateSecurityIndicator);
    requestAnimationFrame(updateSettingsBodyScroll);
}
function updateSecurityIndicator() {
    const dot = document.getElementById("securityDot");
    if (!dot) return;
    const unsafe = isCustomizationEnabled() || isCustomProtocolsEnabled();
    dot.classList.toggle("unsafe", unsafe);
}
window.__fueyUpdateSecurityIndicator = updateSecurityIndicator;

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

const VALID_LANGS = ["en", "zh", "zh-Hant", "lzh", "ja", "ko", "fr", "de", "es", "ru", "ar"];

function exportSettings() {
    const settings = {
        __meta__: {
            protocol: "Fuey EULA",
            version: (typeof window.__FUEY_VERSION__ === "string") ? window.__FUEY_VERSION__ : ""
        },
        theme: localStorage.getItem("fuey-theme") || "light",
        lang: localStorage.getItem("fuey-lang") || "en",
        handed: localStorage.getItem("fuey-handed") || "right",
        dataSource: getDataSource(),
        "apply-customization": isCustomizationEnabled(),
        "enable-custom-protocols": isCustomProtocolsEnabled(),
        custom: getCustomization()
    };
    const disclaimer = [
        "",
        "// ============================================================",
        "// Fuey Settings - Customization Disclaimer",
        "// ------------------------------------------------------------",
        "// apply-customization and enable-custom-protocols are advanced",
        "// options that allow injecting custom CSS variables, CSS rules",
        "// and JavaScript into the Fuey interface.",
        "//",
        "// When apply-customization is true, the content inside",
        "// \"custom\" will be applied globally to every page of the",
        "// Fuey site and will be persisted in local storage until",
        "// \"Reset Settings\" is used. When enable-custom-protocols",
        "// is true, the custom JavaScript will also be executed.",
        "//",
        "// The Fuey Team is not responsible or liable for any visual",
        "// issues, broken layouts, security risks, data loss, device",
        "// malfunction or any other damage that may result from",
        "// editing, importing or applying custom content through",
        "// these options. You, the user, assume full responsibility",
        "// for every customization you apply. Use at your own risk.",
        "// ============================================================",
        ""
    ].join("\n");
    const content = `window.__FUEY_SETTINGS__ = ${JSON.stringify(settings, null, 2)};\n` + disclaimer;
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

function validateImportFormat(settings) {
    if (!settings || typeof settings !== "object" || Array.isArray(settings)) return false;
    const meta = settings.__meta__;
    if (!meta || typeof meta !== "object" || Array.isArray(meta)) return false;
    if (typeof meta.protocol !== "string" || !meta.protocol) return false;
    if (settings.theme !== "light" && settings.theme !== "dark") return false;
    if (VALID_LANGS.indexOf(settings.lang) === -1) return false;
    if (settings.handed !== "left" && settings.handed !== "right") return false;
    if (settings.dataSource !== "github" && settings.dataSource !== "local") return false;
    if (typeof settings["apply-customization"] !== "boolean") return false;
    if (typeof settings["enable-custom-protocols"] !== "boolean") return false;
    if (settings.custom !== undefined && settings.custom !== null) {
        if (typeof settings.custom !== "object" || Array.isArray(settings.custom)) return false;
    }
    if (settings.__permanent__ !== undefined && settings.__permanent__ !== null) {
        if (typeof settings.__permanent__ !== "object" || Array.isArray(settings.__permanent__)) return false;
    }
    return true;
}

function needsImportWarning(settings) {
    if (!settings) return false;
    if (settings["apply-customization"] === true) return true;
    if (settings["enable-custom-protocols"] === true) return true;
    const c = settings.custom;
    if (c && typeof c === "object") {
        if (c.vars && typeof c.vars === "object" && Object.keys(c.vars).length > 0) return true;
        if (typeof c.css === "string" && c.css.trim()) return true;
        if (typeof c.js === "string" && c.js.trim()) return true;
    }
    return false;
}

function applySettings(settings) {
    if (settings.theme === "light" || settings.theme === "dark") localStorage.setItem("fuey-theme", settings.theme);
    if (VALID_LANGS.indexOf(settings.lang) !== -1) localStorage.setItem("fuey-lang", settings.lang);
    if (settings.handed === "left" || settings.handed === "right") localStorage.setItem("fuey-handed", settings.handed);
    if (settings.dataSource === "github" || settings.dataSource === "local") localStorage.setItem("fuey-data-source", settings.dataSource);
    localStorage.setItem("fuey-apply-customization", settings["apply-customization"] ? "true" : "false");
    localStorage.setItem("fuey-enable-custom-protocols", settings["enable-custom-protocols"] ? "true" : "false");
    if (settings.custom && typeof settings.custom === "object") {
        saveCustomization(settings.custom);
        const c = settings.custom;
        const hasContent =
            (c.vars && typeof c.vars === "object" && Object.keys(c.vars).length > 0) ||
            (typeof c.css === "string" && c.css.trim()) ||
            (typeof c.js === "string" && c.js.trim());
        if (hasContent) {
            localStorage.setItem("fuey-apply-customization", "true");
        }
    } else {
        localStorage.removeItem("fuey-custom");
    }
    if (settings.__permanent__ && typeof settings.__permanent__ === "object") {
        Object.keys(settings.__permanent__).forEach(k => {
            const val = settings.__permanent__[k];
            if (val === null || val === undefined) {
                localStorage.removeItem("fuey-perm-" + k);
            } else {
                try {
                    localStorage.setItem("fuey-perm-" + k, typeof val === "string" ? val : JSON.stringify(val));
                } catch (e) {}
            }
        });
    }
    showIOToast(typeof t === "function" ? t("importSuccess") : "Imported", "ok");
    setTimeout(() => {
        window.location.replace(window.location.href.split("#")[0]);
    }, 600);
}

function showImportConfirm(onConfirm) {
    const existing = document.querySelector(".confirm-overlay");
    if (existing) existing.remove();
    const overlay = document.createElement("div");
    overlay.className = "confirm-overlay";
    overlay.innerHTML = `
        <div class="confirm-dialog">
            <p class="confirm-text">${t("importWarnDesc")}</p>
            <div class="confirm-actions">
                <button class="confirm-btn no">${t("importWarnCancel")}</button>
                <button class="confirm-btn yes">${t("importWarnContinue")}</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
    overlay.querySelector(".confirm-btn.no").addEventListener("click", () => {
        overlay.classList.remove("show");
        setTimeout(() => overlay.remove(), 300);
    });
    overlay.querySelector(".confirm-btn.yes").addEventListener("click", () => {
        overlay.classList.remove("show");
        setTimeout(() => { overlay.remove(); onConfirm(); }, 300);
    });
    requestAnimationFrame(() => overlay.classList.add("show"));
}

function importSettingsFile(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) {
        e.target.value = "";
        return;
    }
    const reader = new FileReader();
    reader.onload = () => {
        try {
            const code = String(reader.result || "");
            const fn = new Function("window", code + "\nreturn window.__FUEY_SETTINGS__ || null;");
            const settings = fn(window);
            if (!settings || !validateImportFormat(settings)) {
                showIOToast(typeof t === "function" ? t("importFailedFormat") : "Invalid settings file format", "err");
                e.target.value = "";
                return;
            }
            if (needsImportWarning(settings)) {
                showImportConfirm(() => applySettings(settings));
            } else {
                applySettings(settings);
            }
            e.target.value = "";
        } catch (err) {
            showIOToast(typeof t === "function" ? t("importFailedFormat") : "Invalid settings file format", "err");
            e.target.value = "";
        }
    };
    reader.onerror = () => {
        showIOToast(typeof t === "function" ? t("importFailedFormat") : "Invalid settings file format", "err");
        e.target.value = "";
    };
    reader.readAsText(file);
}

function showIOToast(text, typeOrBool) {
    let type = "ok";
    if (typeOrBool === false || typeOrBool === "err") type = "err";
    else if (typeOrBool === "warn") type = "warn";
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

function parseVersionNum(str) {
    const s = String(str == null ? "" : str).trim();
    const m = /^v?(\d+(?:\.\d+)*)/i.exec(s);
    if (!m) return null;
    return m[1].split(".").map(n => parseInt(n, 10) || 0);
}
function compareVersion(a, b) {
    const A = parseVersionNum(a);
    const B = parseVersionNum(b);
    if (!A || !B) return 0;
    const len = Math.max(A.length, B.length);
    for (let i = 0; i < len; i++) {
        const an = A[i] || 0;
        const bn = B[i] || 0;
        if (an !== bn) return an > bn ? 1 : -1;
    }
    return 0;
}
function formatVersionMsg(key, ver) {
    const raw = (typeof t === "function") ? t(key) : key;
    return String(raw).replace(/\{v\}/g, ver);
}
async function fetchCloudVersion(url) {
    const full = url + (url.indexOf("?") === -1 ? "?" : "&") + "_=" + Date.now();
    const res = await fetch(full, { cache: "no-store" });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const text = await res.text();
    const scope = { __FUEY_VERSION__: null, __FUEY_VERSION_TAG__: null };
    const fn = new Function("window", text + "\nreturn { v: window.__FUEY_VERSION__, tag: window.__FUEY_VERSION_TAG__ };");
    const result = fn(scope);
    if (!result || typeof result.v !== "string" || !result.v) throw new Error("no version");
    return { version: result.v, tag: typeof result.tag === "string" ? result.tag : "" };
}
let versionCheckRunning = false;
async function checkVersion() {
    if (versionCheckRunning) return;
    versionCheckRunning = true;
    const btn = document.getElementById("checkVersion");
    if (btn) btn.disabled = true;
    const localVer = (typeof window.__FUEY_VERSION__ === "string") ? window.__FUEY_VERSION__ : "";
    const localTag = (typeof window.__FUEY_VERSION_TAG__ === "string") ? window.__FUEY_VERSION_TAG__ : "";
    const displayLocal = localTag ? localVer + " " + localTag : localVer;
    const urls = [
        "https://fueyseek.github.io/data/version.js",
        "https://raw.githubusercontent.com/FueySeek/FueySeek.github.io/main/data/version.js",
        "https://cdn.jsdelivr.net/gh/FueySeek/FueySeek.github.io@main/data/version.js"
    ];
    let cloud = null;
    for (let i = 0; i < urls.length; i++) {
        try {
            cloud = await fetchCloudVersion(urls[i]);
            break;
        } catch (e) {}
    }
    versionCheckRunning = false;
    if (btn) btn.disabled = false;
    if (!cloud) {
        showIOToast(typeof t === "function" ? t("versionFetchFailed") : "Unable to reach the cloud to check the version", "err");
        return;
    }
    const cmp = compareVersion(cloud.version, localVer);
    if (cmp > 0) {
        showIOToast(formatVersionMsg("versionLow", displayLocal), "warn");
    } else if (cmp === 0) {
        if (localTag) {
            showIOToast(formatVersionMsg("versionBeta", displayLocal), "ok");
        } else {
            showIOToast(formatVersionMsg("versionLatest", displayLocal), "ok");
        }
    } else {
        if (localTag) {
            showIOToast(formatVersionMsg("versionBeta", displayLocal), "ok");
        } else {
            showIOToast(formatVersionMsg("versionNewer", displayLocal), "ok");
        }
    }
}
window.__fueyCheckVersion = checkVersion;
function initVersionCheck() {
    const btn = document.getElementById("checkVersion");
    if (!btn) return;
    if (btn.dataset.built === "1") return;
    btn.dataset.built = "1";
    btn.addEventListener("click", checkVersion);
}

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
        requestAnimationFrame(() => {
            syncAllSegmented();
            updateSettingsBodyScroll();
        });
        setTimeout(() => {
            syncAllSegmented();
            updateSettingsBodyScroll();
        }, 250);
        setTimeout(updateSettingsBodyScroll, 600);
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
    window.addEventListener("resize", () => {
        if (settingsPanel.classList.contains("open")) {
            updateSettingsBodyScroll();
        }
    });
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
            if (e.target.closest("button, a, input, .toggle-switch, .theme-options, .lang-options, .data-source-options, .lang-dropdown, .settings-io-row, .settings-body.scrollable")) return;
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
            if (e.target.closest("button, a, input, .toggle-switch, .theme-options, .lang-options, .data-source-options, .lang-dropdown, .settings-io-row, .settings-body.scrollable")) return;
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
        indicator.classList.remove("no-anim", "snap");
        if (instant) {
            indicator.classList.remove("animate");
            indicator.style.transform = `translateX(${left}px)`;
            indicator.style.width = `${w}px`;
            void indicator.offsetWidth;
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
            indicator.classList.add("no-anim");
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
        if (hasMoved && e.cancelable) e.preventDefault();
        if (dragState.raf) return;
        dragState.raf = requestAnimationFrame(() => {
            dragState.raf = 0;
            updateDragPosition(dragState.lastClientX);
        });
    }

    function endDrag() {
        if (!dragging) return;
        dragging = false;
        navLinks.classList.remove("dragging");
        indicator.classList.remove("no-anim");
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
                    requestAnimationFrame(() => {
                        syncAllSegmented();
                        updateSettingsBodyScroll();
                    });
                    setTimeout(() => {
                        syncAllSegmented();
                        updateSettingsBodyScroll();
                    }, 250);
                    setTimeout(updateSettingsBodyScroll, 600);
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

    function startDrag(clientX, clientY) {
        if (!taskLock.acquire("nav")) return false;
        dragging = true;
        hasMoved = false;
        dragStartX = clientX;
        dragStartLeft = readIndicatorLeft();
        dragStartWidth = readIndicatorWidth();
        dragState.lastClientX = clientX;
        indicator.classList.remove("animate", "snap");
        indicator.classList.add("no-anim");
        indicator.style.transform = `translateX(${dragStartLeft}px)`;
        navLinks.classList.add("dragging");
        document.body.style.userSelect = "none";
        return true;
    }

    navLinks.addEventListener("mousedown", (e) => {
        if (e.button !== 0) return;
        if (!startDrag(e.clientX, e.clientY)) return;
        document.addEventListener("mousemove", onDragMove);
        document.addEventListener("mouseup", endDrag);
    });
    navLinks.addEventListener("touchstart", (e) => {
        if (e.touches.length !== 1) return;
        if (!startDrag(e.touches[0].clientX, e.touches[0].clientY)) return;
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
    list.dataset.loaded = "1";
    
    const cacheKey = "fuey-contributors-v2";
    let cachedData = null;
    const fallbackAvatar = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Ccircle cx='24' cy='24' r='24' fill='%23e0e0e0'/%3E%3Cpath d='M24 12c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 18c-5.3 0-16 2.7-16 8v2h32v-2c0-5.3-10.7-8-16-8z' fill='%239e9e9e'/%3E%3C/svg%3E";

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
                <img src="${user.avatar_url}" alt="${user.login}" class="developer-avatar" referrerpolicy="no-referrer">
                <span class="developer-name">${user.login}</span>
            </a>`;
        }).join("");
        
        list.querySelectorAll('.developer-avatar').forEach(img => {
            img.addEventListener('error', function() {
                this.src = fallbackAvatar;
            });
        });
    }
    
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
        try { 
            const parsed = JSON.parse(cached); 
            if (Array.isArray(parsed) && parsed.length > 0) {
                cachedData = parsed; 
                render(cachedData); 
            }
        } catch (e) {}
    }
    
    if (!cachedData) {
        fetch("https://api.github.com/repos/FueySeek/FueySeek.github.io/contributors")
            .then(res => {
                if (!res.ok) throw new Error("API Error");
                return res.json();
            })
            .then(data => {
                if (Array.isArray(data) && data.length > 0) {
                    sessionStorage.setItem(cacheKey, JSON.stringify(data));
                    render(data);
                } else {
                    render(null);
                }
            })
            .catch(() => {
                render(null);
            });
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
    initCustomization();
    initHanded();
    initNavSlider();
    initSettingsPanel();
    initNavHome();
    initFooterYear();
    initPageExitOverlay();
    initSegmented();
    initDevelopers();
    initLangDropdown();
    initSecurityIndicator();
    initSettingsIO();
    initVersionCheck();
    initDataSource();
    if (typeof applyLang === "function") applyLang();
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            if (window.__refreshNavIndicator) window.__refreshNavIndicator(true);
            syncAllSegmented();
        });
    }
});