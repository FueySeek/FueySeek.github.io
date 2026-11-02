const TRANSLATIONS = {
    en: {
        home: "Home", download: "Download", about: "About Us", settings: "Settings",
        settingsTitle: "Settings",
        theme: "Theme", themeLight: "Light Theme", themeDark: "Dark Theme",
        dataSource: "Data Source", dataSourceGithub: "GitHub", dataSourceLocal: "Local",
        dataSourceWarnGithub: "If you are using an offline version, please ensure you have network access!",
        dataSourceWarnLocal: "This list needs to be online, otherwise some content cannot be synchronized",
        language: "Language", otherLang: "Other",
        langHint: "* Translation may not be 100% accurate, please choose as needed",
        handed: "Left-handed Mode", handedToggle: "Enable left-handed layout",
        handedDesc: "Mirrors the settings panel, homepage hero and bottom controls to the left side, for left-handed use.",
        exportSettings: "Export Settings", importSettings: "Import Settings", resetSettings: "Reset Settings",
        exportSuccess: "Exported", importFailed: "Import failed", importSuccess: "Imported",
        resetConfirm: "Are you sure you want to reset all settings?", no: "No", yes: "Yes",
        disabled: "This operation has been disabled",
        downloadTitle: "Download", downloadDesc: "Download Content Here",
        searchPlaceholder: "Search our projects", searchBtn: "Search", loading: "Loading...",
        noData: "No data", date: "Date", systems: "Systems", link: "Link", code: "Code",
        copyCode: "Copy", openLink: "Open", copied: "Copied",
        aboutTitle: "About Us", aboutDesc: "About Us Content Here", noAboutData: "No data",
        weAreMaking: "We Are Making Some ", interesting: "Interesting ", projects: "Projects",
        others: "Others", developers: "Developers", maintainer: "Maintainer",
        dataSourceFallback: "Data source fallback to local"
    },
    zh: {
        home: "首页", download: "下载", about: "关于我们", settings: "设置",
        settingsTitle: "设置",
        theme: "主题", themeLight: "浅色主题", themeDark: "深色主题",
        dataSource: "数据源", dataSourceGithub: "GitHub", dataSourceLocal: "本地",
        dataSourceWarnGithub: "如果您使用的是离线版本，请确保您有网络连接！",
        dataSourceWarnLocal: "此列表需要联网，否则部分内容无法同步",
        language: "语言", otherLang: "其它",
        langHint: "* 翻译可能不是100%准确，请按需选择",
        handed: "左撇子模式", handedToggle: "启用左撇子布局",
        handedDesc: "将设置面板、首页主视觉和底部控件镜像到左侧，方便左撇子使用。",
        exportSettings: "导出设置", importSettings: "导入设置", resetSettings: "重置设置",
        exportSuccess: "已导出", importFailed: "导入失败", importSuccess: "已导入",
        resetConfirm: "确定要重置所有设置吗？", no: "否", yes: "是",
        disabled: "此操作已被禁用",
        downloadTitle: "下载", downloadDesc: "在此下载内容",
        searchPlaceholder: "搜索我们的项目", searchBtn: "搜索", loading: "加载中...",
        noData: "暂无数据", date: "日期", systems: "系统", link: "链接", code: "提取码",
        copyCode: "复制", openLink: "打开", copied: "已复制",
        aboutTitle: "关于我们", aboutDesc: "关于我们内容在此", noAboutData: "暂无数据",
        weAreMaking: "我们正在制作一些 ", interesting: "有趣的 ", projects: "项目",
        others: "其它", developers: "开发者名单", maintainer: "维护者",
        dataSourceFallback: "数据源已回退到本地"
    },
    ja: {
        home: "ホーム", download: "ダウンロード", about: "私たちについて", settings: "設定",
        settingsTitle: "設定",
        theme: "テーマ", themeLight: "ライトテーマ", themeDark: "ダークテーマ",
        dataSource: "データソース", dataSourceGithub: "GitHub", dataSourceLocal: "ローカル",
        dataSourceWarnGithub: "オフラインバージョンを使用している場合は、ネットワークに接続していることを確認してください！",
        dataSourceWarnLocal: "このリストはオンラインである必要があります。そうしないと、一部のコンテンツが同期されません",
        language: "言語", otherLang: "その他",
        langHint: "* 翻訳は100%正確ではない可能性があります。必要に応じて選択してください",
        handed: "左利きモード", handedToggle: "左利きレイアウトを有効にする",
        handedDesc: "設定パネル、ホームページのヒーロー、下部のコントロールを左側にミラーリングします。左利き用です。",
        exportSettings: "設定をエクスポート", importSettings: "設定をインポート", resetSettings: "設定をリセット",
        exportSuccess: "エクスポートしました", importFailed: "インポートに失敗しました", importSuccess: "インポートしました",
        resetConfirm: "すべての設定をリセットしてもよろしいですか？", no: "いいえ", yes: "はい",
        disabled: "この操作は無効になっています",
        downloadTitle: "ダウンロード", downloadDesc: "ここでコンテンツをダウンロード",
        searchPlaceholder: "プロジェクトを検索", searchBtn: "検索", loading: "読み込み中...",
        noData: "データがありません", date: "日付", systems: "システム", link: "リンク", code: "コード",
        copyCode: "コピー", openLink: "開く", copied: "コピーしました",
        aboutTitle: "私たちについて", aboutDesc: "ここに私たちについての内容", noAboutData: "データがありません",
        weAreMaking: "私たちはいくつかの", interesting: "面白い", projects: "プロジェクトを作っています",
        others: "その他", developers: "開発者", maintainer: "メンテナー",
        dataSourceFallback: "データソースをローカルにフォールバックしました"
    },
    ko: {
        home: "홈", download: "다운로드", about: "소개", settings: "설정",
        settingsTitle: "설정",
        theme: "테마", themeLight: "라이트 테마", themeDark: "다크 테마",
        dataSource: "데이터 소스", dataSourceGithub: "GitHub", dataSourceLocal: "로컬",
        dataSourceWarnGithub: "오프라인 버전을 사용하는 경우 네트워크에 연결되어 있는지 확인하세요!",
        dataSourceWarnLocal: "이 목록은 온라인 상태여야 하며, 그렇지 않으면 일부 콘텐츠가 동기화되지 않습니다",
        language: "언어", otherLang: "기타",
        langHint: "* 번역이 100% 정확하지 않을 수 있으므로 필요에 따라 선택하세요",
        handed: "왼손잡이 모드", handedToggle: "왼손잡이 레이아웃 활성화",
        handedDesc: "설정 패널, 홈페이지 히어로 및 하단 컨트롤을 왼쪽으로 미러링하여 왼손잡이용으로 사용합니다.",
        exportSettings: "설정 내보내기", importSettings: "설정 가져오기", resetSettings: "설정 초기화",
        exportSuccess: "내보냈습니다", importFailed: "가져오기 실패", importSuccess: "가져왔습니다",
        resetConfirm: "모든 설정을 초기화하시겠습니까?", no: "아니오", yes: "예",
        disabled: "이 작업은 비활성화되었습니다",
        downloadTitle: "다운로드", downloadDesc: "여기에서 콘텐츠 다운로드",
        searchPlaceholder: "프로젝트 검색", searchBtn: "검색", loading: "로딩 중...",
        noData: "데이터가 없습니다", date: "날짜", systems: "시스템", link: "링크", code: "코드",
        copyCode: "복사", openLink: "열기", copied: "복사됨",
        aboutTitle: "소개", aboutDesc: "여기에 소개 내용", noAboutData: "데이터가 없습니다",
        weAreMaking: "우리는 몇 가지", interesting: "흥미로운", projects: "프로젝트를 만들고 있습니다",
        others: "기타", developers: "개발자", maintainer: "유지관리자",
        dataSourceFallback: "데이터 소스가 로컬로 대체되었습니다"
    },
    fr: {
        home: "Accueil", download: "Télécharger", about: "À propos", settings: "Paramètres",
        settingsTitle: "Paramètres",
        theme: "Thème", themeLight: "Thème clair", themeDark: "Thème sombre",
        dataSource: "Source de données", dataSourceGithub: "GitHub", dataSourceLocal: "Local",
        dataSourceWarnGithub: "Si vous utilisez une version hors ligne, assurez-vous d'avoir un accès réseau !",
        dataSourceWarnLocal: "Cette liste doit être en ligne, sinon certains contenus ne pourront pas être synchronisés",
        language: "Langue", otherLang: "Autres",
        langHint: "* La traduction peut ne pas être 100% exacte, veuillez choisir selon vos besoins",
        handed: "Mode gaucher", handedToggle: "Activer la disposition pour gauchers",
        handedDesc: "Miroir le panneau de paramètres, le héros de la page d'accueil et les contrôles inférieurs du côté gauche, pour une utilisation par les gauchers.",
        exportSettings: "Exporter les paramètres", importSettings: "Importer les paramètres", resetSettings: "Réinitialiser les paramètres",
        exportSuccess: "Exporté", importFailed: "Échec de l'importation", importSuccess: "Importé",
        resetConfirm: "Êtes-vous sûr de vouloir réinitialiser tous les paramètres ?", no: "Non", yes: "Oui",
        disabled: "Cette opération a été désactivée",
        downloadTitle: "Télécharger", downloadDesc: "Télécharger le contenu ici",
        searchPlaceholder: "Rechercher nos projets", searchBtn: "Rechercher", loading: "Chargement...",
        noData: "Aucune donnée", date: "Date", systems: "Systèmes", link: "Lien", code: "Code",
        copyCode: "Copier", openLink: "Ouvrir", copied: "Copié",
        aboutTitle: "À propos", aboutDesc: "Contenu à propos ici", noAboutData: "Aucune donnée",
        weAreMaking: "Nous faisons des ", interesting: "intéressants ", projects: "projets",
        others: "Autres", developers: "Développeurs", maintainer: "Mainteneur",
        dataSourceFallback: "Repli de la source de données vers le local"
    },
    de: {
        home: "Startseite", download: "Herunterladen", about: "Über uns", settings: "Einstellungen",
        settingsTitle: "Einstellungen",
        theme: "Thema", themeLight: "Helles Thema", themeDark: "Dunkles Thema",
        dataSource: "Datenquelle", dataSourceGithub: "GitHub", dataSourceLocal: "Lokal",
        dataSourceWarnGithub: "Wenn Sie eine Offline-Version verwenden, stellen Sie bitte sicher, dass Sie Netzwerkzugriff haben!",
        dataSourceWarnLocal: "Diese Liste muss online sein, sonst können einige Inhalte nicht synchronisiert werden",
        language: "Sprache", otherLang: "Andere",
        langHint: "* Die Übersetzung ist möglicherweise nicht 100% genau, bitte nach Bedarf auswählen",
        handed: "Linkshänder-Modus", handedToggle: "Linkshänder-Layout aktivieren",
        handedDesc: "Spiegelt das Einstellungsfeld, den Homepage-Hero und die unteren Steuerelemente auf die linke Seite für Linkshänder.",
        exportSettings: "Einstellungen exportieren", importSettings: "Einstellungen importieren", resetSettings: "Einstellungen zurücksetzen",
        exportSuccess: "Exportiert", importFailed: "Import fehlgeschlagen", importSuccess: "Importiert",
        resetConfirm: "Möchten Sie wirklich alle Einstellungen zurücksetzen?", no: "Nein", yes: "Ja",
        disabled: "Dieser Vorgang wurde deaktiviert",
        downloadTitle: "Herunterladen", downloadDesc: "Inhalte hier herunterladen",
        searchPlaceholder: "Unsere Projekte durchsuchen", searchBtn: "Suchen", loading: "Wird geladen...",
        noData: "Keine Daten", date: "Datum", systems: "Systeme", link: "Link", code: "Code",
        copyCode: "Kopieren", openLink: "Öffnen", copied: "Kopiert",
        aboutTitle: "Über uns", aboutDesc: "Über uns Inhalt hier", noAboutData: "Keine Daten",
        weAreMaking: "Wir machen einige ", interesting: "interessante ", projects: "Projekte",
        others: "Andere", developers: "Entwickler", maintainer: "Betreuer",
        dataSourceFallback: "Datenquelle auf lokal zurückgefallen"
    },
    es: {
        home: "Inicio", download: "Descargar", about: "Sobre nosotros", settings: "Ajustes",
        settingsTitle: "Ajustes",
        theme: "Tema", themeLight: "Tema claro", themeDark: "Tema oscuro",
        dataSource: "Fuente de datos", dataSourceGithub: "GitHub", dataSourceLocal: "Local",
        dataSourceWarnGithub: "Si está utilizando una versión sin conexión, ¡asegúrese de tener acceso a la red!",
        dataSourceWarnLocal: "Esta lista debe estar en línea, de lo contrario algunos contenidos no se podrán sincronizar",
        language: "Idioma", otherLang: "Otros",
        langHint: "* La traducción puede no ser 100% precisa, elija según sea necesario",
        handed: "Modo zurdo", handedToggle: "Activar diseño para zurdos",
        handedDesc: "Refleja el panel de ajustes, el héroe de la página de inicio y los controles inferiores hacia el lado izquierdo, para uso de zurdos.",
        exportSettings: "Exportar ajustes", importSettings: "Importar ajustes", resetSettings: "Restablecer ajustes",
        exportSuccess: "Exportado", importFailed: "Error al importar", importSuccess: "Importado",
        resetConfirm: "¿Está seguro de que desea restablecer toda la configuración?", no: "No", yes: "Sí",
        disabled: "Esta operación ha sido deshabilitada",
        downloadTitle: "Descargar", downloadDesc: "Descargar contenido aquí",
        searchPlaceholder: "Buscar nuestros proyectos", searchBtn: "Buscar", loading: "Cargando...",
        noData: "Sin datos", date: "Fecha", systems: "Sistemas", link: "Enlace", code: "Código",
        copyCode: "Copiar", openLink: "Abrir", copied: "Copiado",
        aboutTitle: "Sobre nosotros", aboutDesc: "Contenido sobre nosotros aquí", noAboutData: "Sin datos",
        weAreMaking: "Estamos haciendo algunos ", interesting: "interesantes ", projects: "proyectos",
        others: "Otros", developers: "Desarrolladores", maintainer: "Mantenedor",
        dataSourceFallback: "Fuente de datos revertida a local"
    }
};

const OTHER_LANG_NAMES = { ja: "日本語", ko: "한국어", fr: "Français", de: "Deutsch", es: "Español" };
const BASE_LANGS = ["en", "zh"];

function getLang() {
    return localStorage.getItem("fuey-lang") || "en";
}

function t(key) {
    const lang = getLang();
    const pack = TRANSLATIONS[lang] || TRANSLATIONS.en;
    if (pack[key] !== undefined) return pack[key];
    return TRANSLATIONS.en[key] !== undefined ? TRANSLATIONS.en[key] : key;
}

function getOtherLangButtonText(lang) {
    if (OTHER_LANG_NAMES[lang]) return OTHER_LANG_NAMES[lang];
    const pack = TRANSLATIONS[lang] || TRANSLATIONS.en;
    return pack.otherLang;
}

function syncLangButtons() {
    const lang = getLang();
    const isOther = BASE_LANGS.indexOf(lang) === -1;
    const group = document.querySelector(".lang-options");
    if (group) {
        group.querySelectorAll(".lang-btn").forEach(btn => {
            let shouldActive = false;
            if (btn.id === "langEn") shouldActive = (lang === "en");
            else if (btn.id === "langZh") shouldActive = (lang === "zh");
            else if (btn.id === "langOther") shouldActive = isOther;
            btn.classList.toggle("active", shouldActive);
        });
    }
    const langOtherBtn = document.getElementById("langOther");
    if (langOtherBtn) {
        langOtherBtn.textContent = getOtherLangButtonText(lang);
    }
}

function applyLang() {
    const lang = getLang();
    document.documentElement.setAttribute("data-lang", lang);
    document.querySelectorAll("[data-lang-key]").forEach(el => {
        if (el.id === "langOther") return;
        const key = el.getAttribute("data-lang-key");
        const text = t(key);
        if (text === undefined) return;
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
            el.placeholder = text;
            return;
        }
        let updated = false;
        for (const node of el.childNodes) {
            if (node.nodeType === 3 && node.textContent.trim()) {
                node.textContent = text;
                updated = true;
                break;
            }
        }
        if (!updated && el.children.length === 0) {
            el.textContent = text;
        }
    });
    syncLangButtons();
    if (typeof window.__syncLangDropdown === "function") window.__syncLangDropdown();
    requestAnimationFrame(() => {
        if (typeof window.__syncAllSegmented === "function") window.__syncAllSegmented();
        if (typeof window.__refreshNavIndicator === "function") window.__refreshNavIndicator(true);
    });
}

function setLang(lang) {
    if (!TRANSLATIONS[lang]) lang = "en";
    localStorage.setItem("fuey-lang", lang);
    applyLang();
    if (typeof notifyFrames === "function") notifyFrames({ lang: lang });
    if (typeof window.__fueyUpdateDataSourceWarning === "function") window.__fueyUpdateDataSourceWarning();
    document.dispatchEvent(new Event("fuey-settings-changed"));
}