(function () {
    "use strict";

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
        textEl.textContent = (typeof t === "function") ? t("disabled") : "此操作已被禁用";

        toastEl.classList.remove("show");
        void toastEl.offsetWidth;
        toastEl.classList.add("show");

        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toastEl.classList.remove("show"), 1800);
    }

    function isEditable(target) {
        const tag = target && target.tagName;
        return tag === "INPUT" || tag === "TEXTAREA";
    }

    function initSecurity() {
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

    function initThemeSync() {
        window.addEventListener("message", (e) => {
            if (!e.data || e.data.type !== "fuey-embed-sync") return;
            if (e.data.theme) {
                document.documentElement.setAttribute("data-theme", e.data.theme);
                document.documentElement.style.colorScheme = e.data.theme;
            }
            if (e.data.lang && typeof window.__applyFueyLang === "function") {
                window.__applyFueyLang(e.data.lang);
            }
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => {
            initSecurity();
            initThemeSync();
        });
    } else {
        initSecurity();
        initThemeSync();
    }
})();