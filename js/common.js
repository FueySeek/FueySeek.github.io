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
    initHomeEmbed();
    if (typeof applyLang === "function") applyLang();
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            if (window.__refreshNavIndicator) window.__refreshNavIndicator();
            syncAllSegmented();
        });
    }
});
const segmentedSyncers = [];
function syncAllSegmented() {
    segmentedSyncers.forEach(fn => fn());
}
function clearAllFueyStorage() {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.indexOf("fuey-") === 0) keys.push(key);
    }
    keys.forEach(k => localStorage.removeItem(k));
    try {
        sessionStorage.clear();
    } catch (e) {}
}
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
function lockBodyScroll() {
    document.documentElement.classList.add("locked");
    document.body.classList.add("locked");
    const iframe = document.querySelector("#homeEmbed iframe");
    if (iframe) iframe.style.pointerEvents = "none";
}
function unlockBodyScroll() {
    document.documentElement.classList.remove("locked");
    document.body.classList.remove("locked");
    const iframe = document.querySelector("#homeEmbed iframe");
    if (iframe) iframe.style.pointerEvents = "auto";
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
    function onDown(clientX) {
        if (!taskLock.acquire("handed")) return false;
        dragging = true;
        moved = false;
        startX = clientX;
        startOffset = toggle.getAttribute("aria-checked") === "true" ? maxOffset : 0;
        currentOffset = startOffset;
        toggle.classList.add("dragging");
        return true;
    }
    function onMove(clientX) {
        if (!dragging) return;
        const dx = clientX - startX;
        if (!moved && Math.abs(dx) < 3) return;
        moved = true;
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
    }
    toggle.addEventListener("click", (e) => {
        if (suppressClick) {
            e.preventDefault();
            return;
        }
        const current = toggle.getAttribute("aria-checked") === "true";
        toggle.setAttribute("aria-checked", current ? "false" : "true");
        applyHanded(current ? "right" : "left");
    });
    toggle.addEventListener("mousedown", (e) => {
        if (e.button !== 0) return;
        if (onDown(e.clientX)) e.preventDefault();
    });
    document.addEventListener("mousemove", (e) => {
        if (!dragging) return;
        e.preventDefault();
        onMove(e.clientX);
    });
    document.addEventListener("mouseup", onUp);
    toggle.addEventListener("touchstart", (e) => {
        const touch = e.touches[0];
        onDown(touch.clientX);
    }, { passive: true });
    document.addEventListener("touchmove", (e) => {
        if (!dragging) return;
        onMove(e.touches[0].clientX);
    }, { passive: true });
    document.addEventListener("touchend", onUp);
}
function applyHanded(handed) {
    const settingsPanel = document.getElementById("settingsPanel");
    const backdrop = document.querySelector(".settings-backdrop");
    const isPanelOpen = settingsPanel && settingsPanel.classList.contains("open");
    function commitHanded() {
        document.documentElement.setAttribute("data-handed", handed);
        localStorage.setItem("fuey-handed", handed);
        syncAllSegmented();
        if (typeof window.__refreshNavIndicator === "function") {
            window.__refreshNavIndicator();
        }
    }
    if (!isPanelOpen) {
        commitHanded();
        return;
    }
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
function initHomeEmbed() {
    const container = document.getElementById("homeEmbed");
    const scrollBtn = document.getElementById("scrollDownBtn");
    if (!container) return;
    const wrapper = document.createElement("div");
    wrapper.style.cssText = "position:relative;width:100%;display:block;";
    const iframe = document.createElement("iframe");
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute("frameborder", "0");
    iframe.style.cssText = "width:100%;height:200px;border:none;background:transparent;display:block;overflow:hidden;min-height:0;";
    let ready = false;
    function syncTheme() {
        if (!ready || !iframe.contentWindow) return;
        try {
            iframe.contentWindow.postMessage({
                type: "fuey-embed-sync",
                theme: document.documentElement.getAttribute("data-theme") || "light",
                lang: localStorage.getItem("fuey-lang") || "en",
                handed: localStorage.getItem("fuey-handed") || "right"
            }, "*");
        } catch (e) {}
    }
    function show() {
        if (ready) return;
        ready = true;
        container.classList.add("visible");
        if (scrollBtn) scrollBtn.classList.add("visible");
        syncTheme();
    }
    function hide() {
        if (ready) return;
        ready = true;
        container.classList.remove("visible");
        if (scrollBtn) scrollBtn.classList.remove("visible");
    }
    function setHeight(h) {
        if (h && h >= 10) {
            iframe.style.height = h + "px";
            wrapper.style.height = h + "px";
        }
    }
    function measure() {
        try {
            const doc = iframe.contentDocument || iframe.contentWindow.document;
            if (!doc || !doc.body) return;
            setHeight(Math.max(
                doc.body.scrollHeight,
                doc.body.offsetHeight,
                doc.documentElement.scrollHeight,
                doc.documentElement.offsetHeight
            ));
        } catch (e) {}
    }
    window.addEventListener("message", (e) => {
        if (!e.data) return;
        if (e.data.type === "fuey-embed-ready") {
            show();
            measure();
        } else if (e.data.type === "fuey-embed-resize") {
            if (typeof e.data.height === "number" && e.data.height > 0) {
                setHeight(e.data.height);
            } else {
                measure();
            }
        } else if (e.data.type === "fuey-security-toast") {
            if (window.parent && window.parent !== window) {
                window.parent.postMessage({ type: "fuey-security-toast" }, "*");
            } else if (typeof window.__fueyShowSecurityToast === "function") {
                window.__fueyShowSecurityToast();
            }
        }
    });
    iframe.addEventListener("load", () => {
        let hasContent = false;
        try {
            const doc = iframe.contentDocument || iframe.contentWindow.document;
            if (doc && doc.body && doc.body.innerHTML.trim().length > 0) hasContent = true;
        } catch (e) {
            hasContent = true;
        }
        if (hasContent) {
            show();
            measure();
        } else {
            hide();
        }
    });
    iframe.addEventListener("error", hide);
    if (scrollBtn) {
        scrollBtn.addEventListener("click", () => {
            const nav = document.querySelector(".main-nav");
            const navHeight = nav ? nav.getBoundingClientRect().height : 0;
            const targetTop = container.offsetTop + window.pageYOffset - navHeight - 16;
            window.scrollTo({ top: targetTop, behavior: "smooth" });
        });
    }
    function updateScrollBtn() {
        if (!scrollBtn) return;
        const visible = ready && (window.pageYOffset || document.documentElement.scrollTop) <= 80;
        scrollBtn.classList.toggle("visible", visible);
    }
    window.addEventListener("scroll", updateScrollBtn, { passive: true });
    window.addEventListener("resize", () => {
        if (ready) measure();
    });
    window.__syncHomeEmbedTheme = syncTheme;
    iframe.src = "embed.html?_=" + Date.now();
    wrapper.appendChild(iframe);
    container.appendChild(wrapper);
    setTimeout(() => {
        if (!ready) {
            show();
            measure();
        }
    }, 1500);
}
function initSegmented() {
    document.querySelectorAll(".theme-options, .lang-options").forEach(group => {
        const items = Array.from(group.querySelectorAll(".theme-btn, .lang-btn"));
        if (items.length < 2) return;
        const indicator = document.createElement("div");
        indicator.className = "segmented-indicator";
        group.insertBefore(indicator, group.firstChild);
        let dragging = false;
        let dragStartX = 0;
        let indicatorStartLeft = 0;
        let pendingItem = null;
        let hasMoved = false;
        let suppressClick = false;
        const dragThreshold = 3;
        function getActiveItem() {
            return group.querySelector(".theme-btn.active, .lang-btn.active") || items[0];
        }
        function syncActiveClass(item) {
            items.forEach(i => i.classList.remove("active"));
            item.classList.add("active");
        }
        function positionIndicator(target, animate) {
            const groupRect = group.getBoundingClientRect();
            const targetRect = target.getBoundingClientRect();
            const left = targetRect.left - groupRect.left;
            const width = targetRect.width;
            if (animate === false) {
                indicator.classList.remove("animate");
                indicator.style.transform = `translateX(${left}px)`;
                indicator.style.width = `${width}px`;
                void indicator.offsetWidth;
                indicator.classList.add("animate");
            } else {
                indicator.classList.add("animate");
                indicator.style.transform = `translateX(${left}px)`;
                indicator.style.width = `${width}px`;
            }
        }
        function applyChoice(target) {
            if (target.id === "themeLight") applyTheme("light");
            else if (target.id === "themeDark") applyTheme("dark");
            else if (target.id === "langZh") applyLangChoice("zh");
            else if (target.id === "langEn") applyLangChoice("en");
        }
        function selectItem(target, animate) {
            syncActiveClass(target);
            applyChoice(target);
            positionIndicator(target, animate !== false);
        }
        function sync() {
            const current = getActiveItem();
            requestAnimationFrame(() => positionIndicator(current, false));
        }
        segmentedSyncers.push(sync);
        requestAnimationFrame(sync);
        function hitGroup(clientX) {
            const r = group.getBoundingClientRect();
            return clientX >= r.left && clientX <= r.right;
        }
        function onDown(clientX) {
            if (!hitGroup(clientX)) return false;
            if (!taskLock.acquire("segmented")) return false;
            const groupRect = group.getBoundingClientRect();
            const indicatorRect = indicator.getBoundingClientRect();
            dragging = true;
            hasMoved = false;
            dragStartX = clientX;
            indicatorStartLeft = indicatorRect.left - groupRect.left;
            pendingItem = null;
            group.classList.add("dragging");
            indicator.classList.remove("animate");
            lockBodyScroll();
            return true;
        }
        function onMove(clientX) {
            if (!dragging) return;
            if (!hasMoved && Math.abs(clientX - dragStartX) < dragThreshold) return;
            hasMoved = true;
            const groupRect = group.getBoundingClientRect();
            const maxLeft = groupRect.width - indicator.offsetWidth;
            let newLeft = indicatorStartLeft + (clientX - dragStartX);
            newLeft = Math.max(0, Math.min(newLeft, maxLeft));
            indicator.style.transform = `translateX(${newLeft}px)`;
            const currentCenter = newLeft + indicator.offsetWidth / 2;
            let closest = null;
            let minDist = Infinity;
            items.forEach(item => {
                const r = item.getBoundingClientRect();
                const center = r.left - groupRect.left + r.width / 2;
                const d = Math.abs(currentCenter - center);
                if (d < minDist) { minDist = d; closest = item; }
            });
            pendingItem = closest;
            items.forEach(item => {
                item.classList.toggle("active", item === closest);
            });
        }
        function onUp() {
            if (!dragging) return;
            dragging = false;
            group.classList.remove("dragging");
            indicator.classList.add("animate");
            unlockBodyScroll();
            taskLock.release("segmented");
            if (!hasMoved) {
                syncActiveClass(getActiveItem());
                positionIndicator(getActiveItem(), true);
                pendingItem = null;
                return;
            }
            if (pendingItem) {
                selectItem(pendingItem, true);
            } else {
                syncActiveClass(getActiveItem());
                positionIndicator(getActiveItem(), true);
            }
            pendingItem = null;
            suppressClick = true;
            setTimeout(() => { suppressClick = false; }, 50);
        }
        group.addEventListener("mousedown", (e) => {
            if (e.button !== 0) return;
            if (onDown(e.clientX)) e.preventDefault();
        });
        document.addEventListener("mousemove", (e) => {
            if (!dragging) return;
            e.preventDefault();
            onMove(e.clientX);
        });
        document.addEventListener("mouseup", onUp);
        group.addEventListener("touchstart", (e) => {
            const touch = e.touches[0];
            onDown(touch.clientX);
        }, { passive: true });
        document.addEventListener("touchmove", (e) => {
            if (!dragging) return;
            onMove(e.touches[0].clientX);
        }, { passive: true });
        document.addEventListener("touchend", onUp);
        items.forEach(item => {
            item.addEventListener("click", (e) => {
                if (suppressClick) {
                    e.preventDefault();
                    return;
                }
                selectItem(item, true);
            });
        });
        window.addEventListener("resize", sync);
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(sync);
        }
    });
}
function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("fuey-theme", theme);
    const lightBtn = document.getElementById("themeLight");
    const darkBtn = document.getElementById("themeDark");
    if (lightBtn) lightBtn.classList.toggle("active", theme === "light");
    if (darkBtn) darkBtn.classList.toggle("active", theme === "dark");
    if (typeof window.__syncHomeEmbedTheme === "function") {
        window.__syncHomeEmbedTheme();
    }
}
function applyLangChoice(lang) {
    if (typeof setLang === "function") setLang(lang);
    const langZh = document.getElementById("langZh");
    const langEn = document.getElementById("langEn");
    if (langZh) langZh.classList.toggle("active", lang === "zh");
    if (langEn) langEn.classList.toggle("active", lang === "en");
    if (typeof window.__syncHomeEmbedTheme === "function") {
        window.__syncHomeEmbedTheme();
    }
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
function initTheme() {
    const savedTheme = localStorage.getItem("fuey-theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    document.documentElement.style.colorScheme = savedTheme;
    const lightBtn = document.getElementById("themeLight");
    const darkBtn = document.getElementById("themeDark");
    if (lightBtn) lightBtn.classList.toggle("active", savedTheme === "light");
    if (darkBtn) darkBtn.classList.toggle("active", savedTheme === "dark");
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
    function notifyNavToSettings() {
        if (window.__setNavUiItem) window.__setNavUiItem("settings");
    }
    function notifyNavToPage() {
        if (window.__setNavUiItem) window.__setNavUiItem("page");
    }
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
        settingsPanel.classList.contains("open") ? closePanel() : openPanel();
    });
    if (closeBtn) closeBtn.addEventListener("click", closePanel);
    backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) closePanel();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closePanel();
    });
    const resetBtn = document.getElementById("resetSettings");
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            showResetConfirm();
        });
    }
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
        function onDown(clientX, clientY) {
            if (!settingsPanel.classList.contains("open")) return false;
            if (!taskLock.acquire("settings")) return false;
            isLeftHanded = document.documentElement.getAttribute("data-handed") === "left";
            dragging = true;
            dragStartX = clientX;
            dragStartY = clientY;
            currentOffset = 0;
            baseOffset = 0;
            settingsPanel.style.transition = "none";
            lockBodyScroll();
            return true;
        }
        function onMove(clientX, clientY) {
            if (!dragging) return;
            const dx = clientX - dragStartX;
            const dy = clientY - dragStartY;
            if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 10) {
                return;
            }
            let offset;
            if (isLeftHanded) {
                offset = Math.min(0, dx);
            } else {
                offset = Math.max(0, dx);
            }
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
            if (Math.abs(currentOffset) >= threshold) {
                closePanel();
            } else {
                settingsPanel.style.transform = "";
                settingsPanel.style.opacity = "";
            }
            currentOffset = 0;
            baseOffset = 0;
        }
        settingsPanel.addEventListener("mousedown", (e) => {
            if (e.button !== 0) return;
            if (e.target.closest("button, a, input, .toggle-switch, .theme-options, .lang-options")) return;
            if (onDown(e.clientX, e.clientY)) e.preventDefault();
        });
        document.addEventListener("mousemove", (e) => {
            if (!dragging) return;
            e.preventDefault();
            onMove(e.clientX, e.clientY);
        });
        document.addEventListener("mouseup", onUp);
        settingsPanel.addEventListener("touchstart", (e) => {
            if (e.target.closest("button, a, input, .toggle-switch, .theme-options, .lang-options")) return;
            const touch = e.touches[0];
            onDown(touch.clientX, touch.clientY);
        }, { passive: true });
        document.addEventListener("touchmove", (e) => {
            if (!dragging) return;
            onMove(e.touches[0].clientX, e.touches[0].clientY);
        }, { passive: true });
        document.addEventListener("touchend", onUp);
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
        const url = window.location.href.split("#")[0];
        window.location.replace(url);
    });
    requestAnimationFrame(() => {
        overlay.classList.add("show");
    });
}
function initNavHome() {
    const homeBtn = document.getElementById("navHome");
    if (homeBtn) {
        homeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/")) {
                window.scrollTo({ top: 0, behavior: "smooth" });
                return;
            }
            navigateTo("index.html");
        });
    }
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
    const settingsItem = items.find(i => i.id === "navSettings") || null;
    let pageItem = navLinks.querySelector(".nav-item.active") || items[0];
    let uiItem = pageItem;
    let dragging = false;
    let dragStartX = 0;
    let indicatorStartLeft = 0;
    let pendingItem = null;
    let hasMoved = false;
    let suppressClick = false;
    const dragThreshold = 4;
    function applyActiveClass(item) {
        items.forEach(i => i.classList.remove("active"));
        if (item) item.classList.add("active");
    }
    function setUiItem(item) {
        uiItem = item;
        applyActiveClass(item);
    }
    function getContainerWidth() {
        return navLinks.clientWidth;
    }
    function clampLeft(left, width) {
        const maxLeft = Math.max(0, getContainerWidth() - width);
        return Math.max(0, Math.min(left, maxLeft));
    }
    function positionIndicator(target, animate) {
        const navRect = navLinks.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const left = clampLeft(targetRect.left - navRect.left, targetRect.width);
        indicator.classList.remove("snap");
        if (animate === false) {
            indicator.classList.remove("animate");
            indicator.style.transform = `translateX(${left}px)`;
            indicator.style.width = `${targetRect.width}px`;
            void indicator.offsetWidth;
            indicator.classList.add("animate");
        } else {
            indicator.classList.add("animate");
            indicator.style.transform = `translateX(${left}px)`;
            indicator.style.width = `${targetRect.width}px`;
        }
    }
    function snapIndicator(target) {
        const navRect = navLinks.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const left = clampLeft(targetRect.left - navRect.left, targetRect.width);
        indicator.classList.remove("animate");
        void indicator.offsetWidth;
        indicator.classList.add("snap");
        indicator.style.transform = `translateX(${left}px)`;
        indicator.style.width = `${targetRect.width}px`;
        setTimeout(() => {
            indicator.classList.remove("snap");
            indicator.classList.add("animate");
            positionIndicator(target, true);
        }, 520);
    }
    function refreshIndicator() {
        if (!uiItem || !uiItem.isConnected) {
            uiItem = navLinks.querySelector(".nav-item.active") || items[0];
        }
        applyActiveClass(uiItem);
        requestAnimationFrame(() => positionIndicator(uiItem, false));
    }
    window.__refreshNavIndicator = refreshIndicator;
    window.__setNavUiItem = function (target) {
        if (target === "settings" && settingsItem) {
            setUiItem(settingsItem);
            positionIndicator(settingsItem, true);
        } else if (target === "page") {
            setUiItem(pageItem);
            positionIndicator(pageItem, true);
        }
    };
    requestAnimationFrame(() => positionIndicator(uiItem, false));
    window.addEventListener("resize", refreshIndicator);
    window.addEventListener("load", refreshIndicator);
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(refreshIndicator);
    }
    function hitIndicator(clientX) {
        const r = indicator.getBoundingClientRect();
        return clientX >= r.left && clientX <= r.right;
    }
    function onDown(clientX) {
        if (!hitIndicator(clientX)) return false;
        if (!taskLock.acquire("nav")) return false;
        const navRect = navLinks.getBoundingClientRect();
        const indicatorRect = indicator.getBoundingClientRect();
        dragging = true;
        hasMoved = false;
        dragStartX = clientX;
        indicatorStartLeft = indicatorRect.left - navRect.left;
        pendingItem = null;
        navLinks.classList.add("dragging");
        indicator.classList.remove("animate", "snap");
        document.body.style.userSelect = "none";
        lockBodyScroll();
        return true;
    }
    function onMove(clientX) {
        if (!dragging) return;
        if (!hasMoved && Math.abs(clientX - dragStartX) < dragThreshold) return;
        hasMoved = true;
        const maxLeft = getContainerWidth() - indicator.offsetWidth;
        let newLeft = indicatorStartLeft + (clientX - dragStartX);
        newLeft = Math.max(0, Math.min(newLeft, maxLeft));
        indicator.style.transform = `translateX(${newLeft}px)`;
        const navRect = navLinks.getBoundingClientRect();
        const currentCenter = newLeft + indicator.offsetWidth / 2;
        let closest = null;
        let minDist = Infinity;
        items.forEach(item => {
            const r = item.getBoundingClientRect();
            const center = r.left - navRect.left + r.width / 2;
            const d = Math.abs(currentCenter - center);
            if (d < minDist) { minDist = d; closest = item; }
        });
        pendingItem = closest;
        applyActiveClass(closest);
    }
    function onUp() {
        if (!dragging) return;
        dragging = false;
        navLinks.classList.remove("dragging");
        document.body.style.userSelect = "";
        unlockBodyScroll();
        taskLock.release("nav");
        suppressClick = true;
        setTimeout(() => { suppressClick = false; }, 50);
        const target = hasMoved ? (pendingItem || uiItem) : uiItem;
        if (!hasMoved || target === uiItem) {
            applyActiveClass(uiItem);
            positionIndicator(uiItem, true);
            pendingItem = null;
            return;
        }
        if (target.id === "navSettings") {
            setUiItem(target);
            snapIndicator(target);
            onSettingsCloseCallback = () => {
                setUiItem(pageItem);
                positionIndicator(pageItem, true);
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
        } else {
            pageItem = target;
            setUiItem(target);
            snapIndicator(target);
            const href = target.getAttribute("href");
            if (href && !href.endsWith("#")) {
                setTimeout(() => navigateTo(href), 380);
            }
        }
        pendingItem = null;
    }
    function onTouchStart(e) {
        const touch = e.touches[0];
        onDown(touch.clientX);
    }
    function onTouchMove(e) {
        if (!dragging) return;
        onMove(e.touches[0].clientX);
    }
    navLinks.addEventListener("mousedown", (e) => {
        if (e.button !== 0) return;
        if (onDown(e.clientX)) e.preventDefault();
    });
    document.addEventListener("mousemove", (e) => {
        if (!dragging) return;
        e.preventDefault();
        onMove(e.clientX);
    });
    document.addEventListener("mouseup", onUp);
    navLinks.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("touchmove", onTouchMove, { passive: true });
    document.addEventListener("touchend", onUp);
    items.forEach(item => {
        item.addEventListener("click", (e) => {
            if (suppressClick) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            if (item.id === "navSettings") return;
            if (item === pageItem && item === uiItem) {
                applyActiveClass(pageItem);
                positionIndicator(pageItem, true);
                return;
            }
            pageItem = item;
            setUiItem(item);
            snapIndicator(item);
            const href = item.getAttribute("href");
            if (href && !href.endsWith("#") && !window.location.pathname.endsWith(href)) {
                setTimeout(() => navigateTo(href), 380);
            }
        });
    });
}
function initFooterYear() {
    const yearEl = document.getElementById("footerYear");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
}