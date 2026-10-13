let downloadData = null;
let downloadFiltered = null;

function getCurrentLang() {
    return localStorage.getItem("fuey-lang") || "en";
}

document.addEventListener("DOMContentLoaded", () => {
    if (typeof applyLang === "function") applyLang();
    downloadData = window.__DOWNLOAD_DATA__ || null;
    downloadFiltered = downloadData;
    renderDownloadList(downloadFiltered);
    bindSearch();
});

function bindSearch() {
    const input = document.getElementById("searchInput");
    const btn = document.getElementById("searchBtn");
    if (!input || !btn) return;

    function doSearch() {
        const keyword = (input.value || "").trim().toLowerCase();
        if (!downloadData || !Array.isArray(downloadData.items)) {
            renderDownloadList(downloadData);
            return;
        }
        if (!keyword) {
            downloadFiltered = downloadData;
            renderDownloadList(downloadFiltered);
            return;
        }
        const filteredItems = downloadData.items.filter(item => {
            let nameText = "";
            if (item.name && typeof item.name === "object") {
                nameText = (item.name.zh || "") + " " + (item.name.en || "");
            } else if (typeof item.name === "string") {
                nameText = item.name;
            }
            let dateText = "";
            if (item.date && typeof item.date === "object") {
                dateText = (item.date.zh || "") + " " + (item.date.en || "");
            } else if (typeof item.date === "string") {
                dateText = item.date;
            }
            const systems = Array.isArray(item.systems) ? item.systems.join(" ") : "";
            const code = item.code || "";
            const haystack = (nameText + " " + dateText + " " + systems + " " + code).toLowerCase();
            return haystack.includes(keyword);
        });
        downloadFiltered = { items: filteredItems };
        renderDownloadList(downloadFiltered);
    }

    btn.addEventListener("click", doSearch);
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            doSearch();
        }
    });
}

function renderDownloadList(data) {
    const listEl = document.getElementById("downloadList");
    if (!listEl) return;
    if (!data || !Array.isArray(data.items) || data.items.length === 0) {
        listEl.innerHTML = `<p class="empty-text">${t("noData")}</p>`;
        return;
    }
    const lang = getCurrentLang();
    listEl.innerHTML = data.items.map((item, index) => {
        const name = typeof item.name === "object"
            ? (item.name[lang] || item.name.en || item.name.zh || "")
            : (item.name || "");
        const date = typeof item.date === "object"
            ? (item.date[lang] || item.date.en || item.date.zh || "")
            : (item.date || "");
        const systemsHtml = Array.isArray(item.systems)
            ? item.systems.map(sys => `<span class="system-tag">${sys}</span>`).join("")
            : "";
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
        btn.addEventListener("click", () => {
            const code = btn.getAttribute("data-code");
            navigator.clipboard.writeText(code).then(() => {
                const original = btn.textContent;
                btn.textContent = t("copied");
                btn.classList.add("copied");
                setTimeout(() => {
                    btn.textContent = original;
                    btn.classList.remove("copied");
                }, 1500);
            });
        });
    });
}