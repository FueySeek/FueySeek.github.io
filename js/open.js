let aboutData = null;

function bustListCache() {
    try {
        const scripts = document.querySelectorAll('script[src*="open-list.js"]');
        scripts.forEach(s => {
            const src = s.getAttribute("src");
            if (src && !src.includes("t=")) {
                const sep = src.includes("?") ? "&" : "?";
                s.setAttribute("src", src + sep + "t=" + Date.now());
            }
        });
    } catch (e) {}
}

document.addEventListener("DOMContentLoaded", () => {
    bustListCache();
    if (typeof applyLang === "function") applyLang();
    aboutData = window.__OPEN_DATA__ || null;
    renderAboutList(aboutData);
});

function renderAboutList(data) {
    const listEl = document.getElementById("aboutList");
    if (!listEl) return;

    if (!data || !Array.isArray(data.items) || data.items.length === 0) {
        listEl.innerHTML = `<p class="empty-text">${t("noAboutData")}</p>`;
        return;
    }

    const lang = localStorage.getItem("fuey-lang") || "zh";

    listEl.innerHTML = data.items.map((item, index) => {
        let name = "";
        if (item.name && typeof item.name === "object") {
            name = item.name[lang] || item.name.zh || item.name.en || "";
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