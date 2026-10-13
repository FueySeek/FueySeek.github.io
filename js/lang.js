const langData = {
    zh: {
        home: "首页",
        download: "下载",
        about: "关于我们",
        settings: "设置",
        settingsTitle: "设置",
        theme: "主题",
        themeLight: "浅色主题",
        themeDark: "深色主题",
        language: "语言",
        handed: "惯用手",
        handedRight: "右手",
        handedLeft: "左手",
        handedToggle: "启用左手布局",
        handedDesc: "将设置面板、首页主视觉和底部控件镜像到左侧，方便左手操作。",
        weAreMaking: "我们正在制作一些",
        interesting: "有意思的",
        projects: "项目",
        downloadTitle: "下载",
        downloadDesc: "这里是下载内容",
        aboutTitle: "关于我们",
        aboutDesc: "这里是关于我们的内容",
        loading: "加载中...",
        loadError: "加载失败，请稍后重试",
        link: "网盘链接",
        code: "网盘密钥",
        systems: "可用系统",
        date: "开发时间",
        openLink: "打开链接",
        copyCode: "复制密钥",
        copied: "已复制",
        noData: "暂无下载内容",
        noAboutData: "暂无更多内容",
        visit: "前往",
        disabled: "此操作已被禁用",
        resetSettings: "重置设置",
        resetConfirm: "此操作不可逆，是否继续？",
        yes: "是",
        no: "否",
        searchPlaceholder: "查找我们的项目",
        searchBtn: "搜索"
    },
    en: {
        home: "Home",
        download: "Download",
        about: "About Us",
        settings: "Settings",
        settingsTitle: "Settings",
        theme: "Theme",
        themeLight: "Light Theme",
        themeDark: "Dark Theme",
        language: "Language",
        handed: "Handedness",
        handedRight: "Right-handed",
        handedLeft: "Left-handed",
        handedToggle: "Enable left-handed layout",
        handedDesc: "Mirrors the settings panel, homepage hero and bottom controls to the left side, for left-handed use.",
        weAreMaking: "We Are Making Some ",
        interesting: "Interesting ",
        projects: "Projects",
        downloadTitle: "Download",
        downloadDesc: "Download Content Here",
        aboutTitle: "About Us",
        aboutDesc: "About Us Content Here",
        loading: "Loading...",
        loadError: "Failed To Load, Please Try Again",
        link: "Link",
        code: "Access Code",
        systems: "Systems",
        date: "Release Date",
        openLink: "Open Link",
        copyCode: "Copy Code",
        copied: "Copied",
        noData: "No Downloads Available",
        noAboutData: "No More Content",
        visit: "Visit",
        disabled: "This Operation Has Been Disabled",
        resetSettings: "Reset Settings",
        resetConfirm: "This Action Is Irreversible, Continue?",
        yes: "Yes",
        no: "No",
        searchPlaceholder: "Search our projects",
        searchBtn: "Search"
    }
};

let currentLang = localStorage.getItem("fuey-lang") || "en";

if (!langData[currentLang]) {
    currentLang = "en";
    localStorage.setItem("fuey-lang", "en");
}

function setLang(lang) {
    if (!langData[lang]) lang = "en";
    currentLang = lang;
    localStorage.setItem("fuey-lang", lang);
    applyLang();
    if (typeof renderDownloadList === "function" && typeof downloadData !== "undefined") {
        const data = (typeof downloadFiltered !== "undefined" && downloadFiltered) ? downloadFiltered : downloadData;
        renderDownloadList(data);
    }
    if (typeof renderAboutList === "function" && typeof aboutData !== "undefined") {
        renderAboutList(aboutData);
    }
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            if (window.__refreshNavIndicator) {
                window.__refreshNavIndicator();
            }
        });
    });
}

function t(key) {
    return langData[currentLang][key] || key;
}

function applyLang() {
    if (!langData[currentLang]) currentLang = "en";
    document.querySelectorAll("[data-lang-key]").forEach(el => {
        const key = el.getAttribute("data-lang-key");
        if (!langData[currentLang][key]) return;
        if (el.querySelector(".nav-icon-settings")) {
            const firstText = Array.from(el.childNodes).find(n => n.nodeType === 3);
            if (firstText) {
                firstText.nodeValue = langData[currentLang][key];
            } else {
                el.insertBefore(document.createTextNode(langData[currentLang][key]), el.firstChild);
            }
        } else if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
            el.setAttribute("placeholder", langData[currentLang][key]);
        } else {
            el.textContent = langData[currentLang][key];
        }
    });
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLang);
    });
}