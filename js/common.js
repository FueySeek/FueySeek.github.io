document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initSettingsPanel();
    initNavHome();
    initNavSlider();
    initFooterYear();
    initPageExitOverlay();
    initSecurity();
    if (typeof applyLang === "function") applyLang();
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            if (window.__refreshNavIndicator) window.__refreshNavIndicator();
        });
    }
});

let toastTimer = null;
let toastEl = null;

function showSecurityToast() {
    if (!toastEl) {
        toastEl = document.createElement("div");
        toastEl.className = "security-toast";
        toastEl.innerHTML = `<span class="security-toast-icon">⊘</span><span class="security-toast-text"></span>`;
        document.body.appendChild(toastEl);
    }
    const textEl = toastEl.querySelector(".security-toast-text");
    textEl.textContent = (typeof t === "function" && t("disabled")) ? t("disabled") : "此操作已被禁用";

    toastEl.classList.remove("show");
    void toastEl.offsetWidth;
    toastEl.classList.add("show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 1800);
}

function initSecurity() {
    const isEditable = (target) => {
        const tag = target && target.tagName;
        return tag === "INPUT" || tag === "TEXTAREA";
    };

    const block = (e) => {
        e.preventDefault();
        showSecurityToast();
        return false;
    };

    document.addEventListener("contextmenu", block);

    document.addEventListener("selectstart", (e) => {
        if (isEditable(e.target)) return true;
        return block(e);
    });

    document.addEventListener("dragstart", (e) => {
        if (e.target.tagName === "IMG") return block(e);
    });

    document.addEventListener("copy", (e) => {
        if (isEditable(document.activeElement)) return true;
        return block(e);
    });

    document.addEventListener("cut", (e) => {
        if (isEditable(document.activeElement)) return true;
        return block(e);
    });

    document.addEventListener("keydown", (e) => {
        const key = (e.key || "").toLowerCase();
        const code = e.keyCode || e.which;

        if (key === "f11" || code === 122) return true;
        if (key === "f5" || code === 116) return true;
        if (e.ctrlKey && key === "r") return true;
        if (e.metaKey && key === "r") return true;
        if (e.ctrlKey && ["+", "-", "=", "0"].includes(key)) return true;
        if (e.metaKey && ["+", "-", "=", "0"].includes(key)) return true;
        if (e.ctrlKey && key === "f") return true;
        if (e.metaKey && key === "f") return true;

        if (key === "f12" || code === 123) return block(e);
        if (e.ctrlKey && e.shiftKey && ["i", "j", "c", "k", "e"].includes(key)) return block(e);
        if (e.metaKey && e.altKey && ["i", "j", "c", "u"].includes(key)) return block(e);
        if (e.ctrlKey && ["u", "s", "p"].includes(key)) return block(e);
    });
}

function initPageExitOverlay() {
    if (!document.querySelector(".page-exit-overlay")) {
        const overlay = document.createElement("div");
        overlay.className = "page-exit-overlay";
        document.body.appendChild(overlay);
    }
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

    if (lightBtn && darkBtn) {
        lightBtn.classList.toggle("active", savedTheme === "light");
        darkBtn.classList.toggle("active", savedTheme === "dark");

        lightBtn.addEventListener("click", () => {
            document.documentElement.setAttribute("data-theme", "light");
            document.documentElement.style.colorScheme = "light";
            localStorage.setItem("fuey-theme", "light");
            lightBtn.classList.add("active");
            darkBtn.classList.remove("active");
        });

        darkBtn.addEventListener("click", () => {
            document.documentElement.setAttribute("data-theme", "dark");
            document.documentElement.style.colorScheme = "dark";
            localStorage.setItem("fuey-theme", "dark");
            darkBtn.classList.add("active");
            lightBtn.classList.remove("active");
        });
    }
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

    function openPanel() {
        settingsPanel.classList.add("open");
        backdrop.classList.add("open");
    }

    function closePanel() {
        settingsPanel.classList.remove("open");
        backdrop.classList.remove("open");
        if (typeof onSettingsCloseCallback === "function") {
            setTimeout(() => {
                onSettingsCloseCallback();
                onSettingsCloseCallback = null;
            }, 60);
        }
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

    const langZh = document.getElementById("langZh");
    const langEn = document.getElementById("langEn");

    if (langZh && langEn) {
        langZh.classList.toggle("active", currentLang === "zh");
        langEn.classList.toggle("active", currentLang === "en");

        langZh.addEventListener("click", () => {
            setLang("zh");
            langZh.classList.add("active");
            langEn.classList.remove("active");
        });

        langEn.addEventListener("click", () => {
            setLang("en");
            langEn.classList.add("active");
            langZh.classList.remove("active");
        });
    }
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

    const indicator = document.createElement("div");
    indicator.className = "nav-indicator animate";
    navLinks.insertBefore(indicator, navLinks.firstChild);

    let activeItem = navLinks.querySelector(".nav-item.active") || items[0];
    let dragging = false;
    let dragStartX = 0;
    let indicatorStartLeft = 0;
    let pendingItem = null;
    let hasMoved = false;
    let suppressClick = false;
    const dragThreshold = 4;
    let highlightedItem = activeItem;

    function setHighlight(item) {
        if (highlightedItem === item) return;
        if (highlightedItem) highlightedItem.classList.remove("active");
        if (item) item.classList.add("active");
        highlightedItem = item;
    }

    function getLeft(target) {
        return target.getBoundingClientRect().left - navLinks.getBoundingClientRect().left;
    }

    function positionIndicator(target, animate) {
        const left = getLeft(target);
        const width = target.getBoundingClientRect().width;

        indicator.classList.remove("snap");

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

    function snapIndicator(target) {
        const left = getLeft(target);
        const width = target.getBoundingClientRect().width;

        indicator.classList.remove("animate");
        void indicator.offsetWidth;
        indicator.classList.add("snap");
        indicator.style.transform = `translateX(${left}px)`;
        indicator.style.width = `${width}px`;

        setTimeout(() => {
            indicator.classList.remove("snap");
            indicator.classList.add("animate");
        }, 520);
    }

    function updateActive(newItem) {
        items.forEach(i => i.classList.remove("active"));
        newItem.classList.add("active");
        activeItem = newItem;
        highlightedItem = newItem;
    }

    function restoreActive() {
        items.forEach(i => i.classList.remove("active"));
        activeItem.classList.add("active");
        highlightedItem = activeItem;
        positionIndicator(activeItem, true);
    }

    function refreshIndicator() {
        requestAnimationFrame(() => positionIndicator(activeItem, false));
    }

    window.__refreshNavIndicator = refreshIndicator;

    requestAnimationFrame(() => positionIndicator(activeItem, false));
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
        return true;
    }

    function onMove(clientX) {
        if (!dragging) return;
        if (!hasMoved && Math.abs(clientX - dragStartX) < dragThreshold) return;
        hasMoved = true;

        const navRect = navLinks.getBoundingClientRect();
        const maxLeft = navRect.width - indicator.offsetWidth;
        let newLeft = indicatorStartLeft + (clientX - dragStartX);
        newLeft = Math.max(0, Math.min(newLeft, maxLeft));

        indicator.style.transform = `translateX(${newLeft}px)`;

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
        setHighlight(closest);
    }

    function onUp() {
        if (!dragging) return;
        dragging = false;
        navLinks.classList.remove("dragging");
        document.body.style.userSelect = "";
        suppressClick = true;
        setTimeout(() => { suppressClick = false; }, 50);

        const target = hasMoved ? (pendingItem || activeItem) : activeItem;

        if (!hasMoved || target === activeItem) {
            setHighlight(activeItem);
            positionIndicator(activeItem);
            pendingItem = null;
            return;
        }

        snapIndicator(target);

        if (target.id === "navSettings") {
            setHighlight(target);
            onSettingsCloseCallback = restoreActive;
            const settingsPanel = document.getElementById("settingsPanel");
            const backdrop = document.querySelector(".settings-backdrop");
            if (settingsPanel && !settingsPanel.classList.contains("open")) {
                settingsPanel.classList.add("open");
                if (backdrop) backdrop.classList.add("open");
            }
        } else {
            updateActive(target);
            const href = target.getAttribute("href");
            if (href && !href.endsWith("#")) {
                setTimeout(() => navigateTo(href), 380);
            }
        }
        pendingItem = null;
    }

    function onTouchStart(e) {
        const touch = e.touches[0];
        if (onDown(touch.clientX)) e.preventDefault();
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

    navLinks.addEventListener("touchstart", onTouchStart, { passive: false });
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
            if (item === activeItem) {
                setHighlight(activeItem);
                positionIndicator(activeItem);
                return;
            }

            updateActive(item);
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