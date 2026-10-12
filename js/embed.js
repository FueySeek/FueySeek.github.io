document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("homeEmbed");
    const scrollBtn = document.getElementById("scrollDownBtn");
    if (!container) return;

    const iframe = document.createElement("iframe");
    iframe.src = "embed.html";
    iframe.loading = "lazy";
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute("frameborder", "0");
    iframe.style.width = "100%";
    iframe.style.border = "none";
    iframe.style.background = "transparent";

    let resolved = false;
    let homeEmbedReady = false;

    function failEmbed() {
        if (resolved) return;
        resolved = true;
        container.classList.remove("visible");
        if (scrollBtn) scrollBtn.classList.remove("visible");
        try {
            if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
        } catch (e) {}
    }

    function resizeIframe() {
        try {
            const doc = iframe.contentDocument || iframe.contentWindow.document;
            if (doc && doc.body) {
                const h = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight, 200);
                iframe.style.height = h + "px";
            }
        } catch (e) {
            iframe.style.height = "400px";
        }
    }

    function syncEmbedTheme() {
        if (!homeEmbedReady) return;
        const theme = document.documentElement.getAttribute("data-theme") || "light";
        const lang = localStorage.getItem("fuey-lang") || "en";
        try {
            if (iframe.contentWindow) {
                iframe.contentWindow.postMessage({ type: "fuey-embed-sync", theme: theme, lang: lang }, "*");
            }
        } catch (e) {}
    }

    iframe.addEventListener("load", () => {
        if (resolved) return;
        let hasContent = false;
        try {
            const doc = iframe.contentDocument || iframe.contentWindow.document;
            if (doc && doc.body && doc.body.innerHTML.trim().length > 0) {
                hasContent = true;
            }
        } catch (e) {
            hasContent = true;
        }
        if (!hasContent) {
            failEmbed();
            return;
        }
        resolved = true;
        homeEmbedReady = true;
        container.classList.add("visible");
        if (scrollBtn) scrollBtn.classList.add("visible");
        resizeIframe();
        syncEmbedTheme();
        setTimeout(syncEmbedTheme, 100);
        setTimeout(syncEmbedTheme, 500);
    });

    iframe.addEventListener("error", failEmbed);

    setTimeout(() => {
        if (!resolved) failEmbed();
    }, 4000);

    if (scrollBtn) {
        scrollBtn.addEventListener("click", () => {
            const targetTop = container.offsetTop + window.pageYOffset - 100;
            window.scrollTo({ top: targetTop, behavior: "smooth" });
        });
    }

    function updateScrollBtn() {
        if (!scrollBtn || !homeEmbedReady) return;
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollY > 80) {
            scrollBtn.classList.remove("visible");
        } else {
            scrollBtn.classList.add("visible");
        }
    }

    window.addEventListener("scroll", updateScrollBtn, { passive: true });

    window.addEventListener("resize", () => {
        if (homeEmbedReady) resizeIframe();
    });

    window.__syncHomeEmbedTheme = syncEmbedTheme;

    container.appendChild(iframe);
});