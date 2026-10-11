let downloadData = null;

document.addEventListener("DOMContentLoaded", () => {
    if (typeof applyLang === "function") applyLang();
    downloadData = window.__DOWNLOAD_DATA__ || null;
    renderDownloadList(downloadData);
});

function renderDownloadList(data) {
    const listEl = document.getElementById("downloadList");
    if (!listEl) return;

    if (!data || !Array.isArray(data.items) || data.items.length === 0) {
        listEl.innerHTML = `<p class="empty-text">${t("noData")}</p>`;
        return;
    }

    const lang = localStorage.getItem("fuey-lang") || "zh";

    listEl.innerHTML = data.items.map((item, index) => {
        const name = typeof item.name === "object"
            ? (item.name[lang] || item.name.zh || item.name.en || "")
            : item.name;

        const date = typeof item.date === "object"
            ? (item.date[lang] || item.date.zh || item.date.en || "")
            : item.date;

        const systemsHtml = item.systems
            .map(sys => `<span class="system-tag">${sys}</span>`)
            .join("");

        return `
            <div class="download-item" style="animation-delay: ${index * 0.1}s">
                <div class="download-item-header">
                    <h3 class="download-item-title">${name}</h3>
                    <span class="download-item-date">${t("date")}: ${date}</span>
                </div>
                <div class="download-item-row">
                    <span class="download-item-label">${t("systems")}:</span>
                    <div class="system-tags">${systemsHtml}</div>
                </div>
                <div class="download-item-row">
                    <span class="download-item-label">${t("link")}:</span>
                    <a href="${item.url}" target="_blank" rel="noopener" class="download-link">${item.url}</a>
                </div>
                <div class="download-item-row">
                    <span class="download-item-label">${t("code")}:</span>
                    <span class="download-code">${item.code}</span>
                    <button class="copy-code-btn" data-code="${item.code}">${t("copyCode")}</button>
                </div>
                <div class="download-item-actions">
                    <a href="${item.url}" target="_blank" rel="noopener" class="download-btn">${t("openLink")}</a>
                </div>
            </div>
        `;
    }).join("");

    listEl.querySelectorAll(".copy-code-btn").forEach(btn => {
        btn.addEventListener("click", handleCopyCode);
    });
}

function handleCopyCode(e) {
    const btn = e.currentTarget;
    const code = btn.getAttribute("data-code");
    if (!code) return;

    const doFeedback = () => {
        const original = btn.getAttribute("data-original-text") || btn.textContent;
        btn.setAttribute("data-original-text", original);
        btn.textContent = t("copied");
        btn.classList.add("copied");
        clearTimeout(btn._copyTimer);
        btn._copyTimer = setTimeout(() => {
            btn.textContent = original;
            btn.classList.remove("copied");
        }, 1500);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code).then(doFeedback).catch(() => {
            fallbackCopy(code);
            doFeedback();
        });
    } else {
        fallbackCopy(code);
        doFeedback();
    }
}

function fallbackCopy(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.top = "-1000px";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (err) {}
    document.body.removeChild(ta);
}