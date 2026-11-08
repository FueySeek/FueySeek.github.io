const TRANSLATIONS = {
    en: {
        home: "Home", download: "Download", about: "About Us", settings: "Settings",
        otherProjects: "Other Projects",
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
        versionCheckBtn: "Check Version",
        versionLow: "Current version {v}, your version is too old!",
        versionLatest: "Current version {v}, already up to date!",
        versionBeta: "You are already on the beta version ({v})",
        versionNewer: "Current version {v}, newer than the cloud",
        versionFetchFailed: "Unable to reach the cloud to check the version",
        exportSuccess: "Exported", importFailed: "Import failed", importSuccess: "Imported",
        importFailedFormat: "Invalid settings file format",
        resetConfirm: "Are you sure you want to reset all settings?", no: "No", yes: "Yes",
        disabled: "This operation has been disabled",
        secureEnv: "Secure Environment",
        downloadTitle: "Download", downloadDesc: "Download Content Here",
        searchPlaceholder: "Search our projects", searchBtn: "Search", loading: "Loading...",
        noData: "No data", date: "Date", systems: "Systems", link: "Link", code: "Code",
        copyCode: "Copy", openLink: "Open", copied: "Copied",
        aboutTitle: "About Us", aboutDesc: "About Us Content Here", noAboutData: "No data",
        otherTitle: "Other Projects", otherDesc: "Other Projects Content Here", noOtherData: "No data",
        weAreMaking: "We Are Making Some ", interesting: "Interesting ", projects: "Projects",
        others: "Others", developers: "Developers", maintainer: "Maintainer",
        dataSourceFallback: "Data source fallback to local",
        importWarnDesc: "This settings file contains customizations that may affect the site's behavior and security. Continue importing?",
        importWarnCancel: "Cancel", importWarnContinue: "Continue"
    },
    zh: {
        home: "首页", download: "下载", about: "关于我们", settings: "设置",
        otherProjects: "其它项目",
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
        versionCheckBtn: "检测版本",
        versionLow: "当前版本 {v}，你这个版本太低了！",
        versionLatest: "当前版本 {v}，已经是最新版本！",
        versionBeta: "你当前已经是测试版（{v}）",
        versionNewer: "当前版本 {v}，比云端更新",
        versionFetchFailed: "无法连接云端检测版本",
        exportSuccess: "已导出", importFailed: "导入失败", importSuccess: "已导入",
        importFailedFormat: "设置文件格式不正确",
        resetConfirm: "确定要重置所有设置吗？", no: "否", yes: "是",
        disabled: "此操作已被禁用",
        secureEnv: "安全环境",
        downloadTitle: "下载", downloadDesc: "在此下载内容",
        searchPlaceholder: "搜索我们的项目", searchBtn: "搜索", loading: "加载中...",
        noData: "暂无数据", date: "日期", systems: "系统", link: "链接", code: "提取码",
        copyCode: "复制", openLink: "打开", copied: "已复制",
        aboutTitle: "关于我们", aboutDesc: "关于我们内容在此", noAboutData: "暂无数据",
        otherTitle: "其它项目", otherDesc: "其它项目内容在此", noOtherData: "暂无数据",
        weAreMaking: "我们正在制作一些 ", interesting: "有趣的 ", projects: "项目",
        others: "其它", developers: "开发者名单", maintainer: "维护者",
        dataSourceFallback: "数据源已回退到本地",
        importWarnDesc: "此设置文件包含自定义内容，可能影响网站行为与安全性，是否继续导入？",
        importWarnCancel: "取消", importWarnContinue: "继续"
    },
    "zh-Hant": {
        home: "首頁", download: "下載", about: "關於我們", settings: "設定",
        otherProjects: "其它項目",
        settingsTitle: "設定",
        theme: "主題", themeLight: "淺色主題", themeDark: "深色主題",
        dataSource: "資料來源", dataSourceGithub: "GitHub", dataSourceLocal: "本地",
        dataSourceWarnGithub: "如果您使用的是離線版本，請確保您有網路連線！",
        dataSourceWarnLocal: "此列表需要連線，否則部分內容無法同步",
        language: "語言", otherLang: "其它",
        langHint: "* 翻譯可能不是100%準確，請按需選擇",
        handed: "左手模式", handedToggle: "啟用左手佈局",
        handedDesc: "將設定面板、首頁主視覺和底部控制項鏡像到左側，方便左手使用。",
        exportSettings: "匯出設定", importSettings: "匯入設定", resetSettings: "重設設定",
        versionCheckBtn: "檢測版本",
        versionLow: "當前版本 {v}，你這個版本太低了！",
        versionLatest: "當前版本 {v}，已經是最新版本！",
        versionBeta: "你當前已經是測試版（{v}）",
        versionNewer: "當前版本 {v}，比雲端更新",
        versionFetchFailed: "無法連線雲端檢測版本",
        exportSuccess: "已匯出", importFailed: "匯入失敗", importSuccess: "已匯入",
        importFailedFormat: "設定檔格式不正確",
        resetConfirm: "確定要重設所有設定嗎？", no: "否", yes: "是",
        disabled: "此操作已被禁用",
        secureEnv: "安全環境",
        downloadTitle: "下載", downloadDesc: "在此下載內容",
        searchPlaceholder: "搜尋我們的專案", searchBtn: "搜尋", loading: "載入中...",
        noData: "暫無資料", date: "日期", systems: "系統", link: "連結", code: "提取碼",
        copyCode: "複製", openLink: "開啟", copied: "已複製",
        aboutTitle: "關於我們", aboutDesc: "關於我們內容在此", noAboutData: "暫無資料",
        otherTitle: "其它項目", otherDesc: "其它項目內容在此", noOtherData: "暫無資料",
        weAreMaking: "我們正在製作一些 ", interesting: "有趣的 ", projects: "專案",
        others: "其它", developers: "開發者名單", maintainer: "維護者",
        dataSourceFallback: "資料來源已回退到本地",
        importWarnDesc: "此設定檔包含自訂內容，可能影響網站行為與安全性，是否繼續匯入？",
        importWarnCancel: "取消", importWarnContinue: "繼續"
    },
    lzh: {
        home: "首", download: "下載", about: "吾輩", settings: "設",
        otherProjects: "他項",
        settingsTitle: "設",
        theme: "色", themeLight: "淺色", themeDark: "深色",
        dataSource: "源", dataSourceGithub: "GitHub", dataSourceLocal: "本地",
        dataSourceWarnGithub: "若用離線之本，請確有網路",
        dataSourceWarnLocal: "此表須連線，否則有未能同者",
        language: "語", otherLang: "他",
        langHint: "* 譯或未盡善，請自擇之",
        handed: "左撇", handedToggle: "啟左撇之局",
        handedDesc: "將設定、首頁、底控移於左，以利左撇。",
        exportSettings: "出設", importSettings: "入設", resetSettings: "復設",
        versionCheckBtn: "查版",
        versionLow: "今版 {v}，過舊矣！",
        versionLatest: "今版 {v}，已為最新！",
        versionBeta: "今版 {v}，試行版也",
        versionNewer: "今版 {v}，勝於雲端",
        versionFetchFailed: "未能連雲查版",
        exportSuccess: "已出", importFailed: "入敗", importSuccess: "已入",
        importFailedFormat: "格式有誤",
        resetConfirm: "欲復諸設定乎？", no: "否", yes: "然",
        disabled: "此舉禁矣",
        secureEnv: "安境",
        downloadTitle: "下載", downloadDesc: "於此下之",
        searchPlaceholder: "索吾之項", searchBtn: "索", loading: "載中...",
        noData: "無文", date: "日", systems: "統", link: "鏈", code: "密",
        copyCode: "錄", openLink: "啟", copied: "已錄",
        aboutTitle: "吾輩", aboutDesc: "吾輩之事在此", noAboutData: "無文",
        otherTitle: "他項", otherDesc: "他項在此", noOtherData: "無文",
        weAreMaking: "吾等方作 ", interesting: "有趣 ", projects: "之項",
        others: "他", developers: "作者", maintainer: "維護",
        dataSourceFallback: "源降為本地",
        importWarnDesc: "此檔含自定之文，或害於安危，欲仍入之乎？",
        importWarnCancel: "止", importWarnContinue: "續"
    },
    ja: {
        home: "ホーム", download: "ダウンロード", about: "私たちについて", settings: "設定",
        otherProjects: "その他のプロジェクト",
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
        versionCheckBtn: "バージョン確認",
        versionLow: "現在のバージョン {v}、バージョンが古すぎます！",
        versionLatest: "現在のバージョン {v}、最新です！",
        versionBeta: "すでにベータ版です（{v}）",
        versionNewer: "現在のバージョン {v}、クラウドより新しいです",
        versionFetchFailed: "クラウドに接続してバージョンを確認できません",
        exportSuccess: "エクスポートしました", importFailed: "インポートに失敗しました", importSuccess: "インポートしました",
        importFailedFormat: "設定ファイルの形式が正しくありません",
        resetConfirm: "すべての設定をリセットしてもよろしいですか？", no: "いいえ", yes: "はい",
        disabled: "この操作は無効になっています",
        secureEnv: "安全な環境",
        downloadTitle: "ダウンロード", downloadDesc: "ここでコンテンツをダウンロード",
        searchPlaceholder: "プロジェクトを検索", searchBtn: "検索", loading: "読み込み中...",
        noData: "データがありません", date: "日付", systems: "システム", link: "リンク", code: "コード",
        copyCode: "コピー", openLink: "開く", copied: "コピーしました",
        aboutTitle: "私たちについて", aboutDesc: "ここに私たちについての内容", noAboutData: "データがありません",
        otherTitle: "その他のプロジェクト", otherDesc: "ここにその他のプロジェクトの内容", noOtherData: "データがありません",
        weAreMaking: "私たちはいくつかの", interesting: "面白い", projects: "プロジェクトを作っています",
        others: "その他", developers: "開発者", maintainer: "メンテナー",
        dataSourceFallback: "データソースをローカルにフォールバックしました",
        importWarnDesc: "この設定ファイルにはカスタマイズが含まれており、サイトの動作やセキュリティに影響を与える可能性があります。インポートを続行しますか？",
        importWarnCancel: "キャンセル", importWarnContinue: "続行"
    },
    ko: {
        home: "홈", download: "다운로드", about: "소개", settings: "설정",
        otherProjects: "기타 프로젝트",
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
        versionCheckBtn: "버전 확인",
        versionLow: "현재 버전 {v}, 버전이 너무 오래되었습니다!",
        versionLatest: "현재 버전 {v}, 최신 버전입니다!",
        versionBeta: "이미 베타 버전입니다({v})",
        versionNewer: "현재 버전 {v}, 클라우드보다 새 버전입니다",
        versionFetchFailed: "클라우드에 연결하여 버전을 확인할 수 없습니다",
        exportSuccess: "내보냈습니다", importFailed: "가져오기 실패", importSuccess: "가져왔습니다",
        importFailedFormat: "설정 파일 형식이 올바르지 않습니다",
        resetConfirm: "모든 설정을 초기화하시겠습니까?", no: "아니오", yes: "예",
        disabled: "이 작업은 비활성화되었습니다",
        secureEnv: "안전한 환경",
        downloadTitle: "다운로드", downloadDesc: "여기에서 콘텐츠 다운로드",
        searchPlaceholder: "프로젝트 검색", searchBtn: "검색", loading: "로딩 중...",
        noData: "데이터가 없습니다", date: "날짜", systems: "시스템", link: "링크", code: "코드",
        copyCode: "복사", openLink: "열기", copied: "복사됨",
        aboutTitle: "소개", aboutDesc: "여기에 소개 내용", noAboutData: "데이터가 없습니다",
        otherTitle: "기타 프로젝트", otherDesc: "여기에 기타 프로젝트 내용", noOtherData: "데이터가 없습니다",
        weAreMaking: "우리는 몇 가지", interesting: "흥미로운", projects: "프로젝트를 만들고 있습니다",
        others: "기타", developers: "개발자", maintainer: "유지관리자",
        dataSourceFallback: "데이터 소스가 로컬로 대체되었습니다",
        importWarnDesc: "이 설정 파일에는 사이트 동작과 보안에 영향을 줄 수 있는 사용자 정의가 포함되어 있습니다. 계속 가져오시겠습니까?",
        importWarnCancel: "취소", importWarnContinue: "계속"
    },
    fr: {
        home: "Accueil", download: "Télécharger", about: "À propos", settings: "Paramètres",
        otherProjects: "Autres projets",
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
        versionCheckBtn: "Vérifier la version",
        versionLow: "Version actuelle {v}, votre version est trop ancienne !",
        versionLatest: "Version actuelle {v}, déjà à jour !",
        versionBeta: "Vous êtes déjà en version bêta ({v})",
        versionNewer: "Version actuelle {v}, plus récente que le cloud",
        versionFetchFailed: "Impossible de joindre le cloud pour vérifier la version",
        exportSuccess: "Exporté", importFailed: "Échec de l'importation", importSuccess: "Importé",
        importFailedFormat: "Format de fichier de paramètres invalide",
        resetConfirm: "Êtes-vous sûr de vouloir réinitialiser tous les paramètres ?", no: "Non", yes: "Oui",
        disabled: "Cette opération a été désactivée",
        secureEnv: "Environnement sécurisé",
        downloadTitle: "Télécharger", downloadDesc: "Télécharger le contenu ici",
        searchPlaceholder: "Rechercher nos projets", searchBtn: "Rechercher", loading: "Chargement...",
        noData: "Aucune donnée", date: "Date", systems: "Systèmes", link: "Lien", code: "Code",
        copyCode: "Copier", openLink: "Ouvrir", copied: "Copié",
        aboutTitle: "À propos", aboutDesc: "Contenu à propos ici", noAboutData: "Aucune donnée",
        otherTitle: "Autres projets", otherDesc: "Contenu des autres projets ici", noOtherData: "Aucune donnée",
        weAreMaking: "Nous faisons des ", interesting: "intéressants ", projects: "projets",
        others: "Autres", developers: "Développeurs", maintainer: "Mainteneur",
        dataSourceFallback: "Repli de la source de données vers le local",
        importWarnDesc: "Ce fichier de paramètres contient des personnalisations pouvant affecter le comportement et la sécurité du site. Continuer l'importation ?",
        importWarnCancel: "Annuler", importWarnContinue: "Continuer"
    },
    de: {
        home: "Startseite", download: "Herunterladen", about: "Über uns", settings: "Einstellungen",
        otherProjects: "Andere Projekte",
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
        versionCheckBtn: "Version prüfen",
        versionLow: "Aktuelle Version {v}, Ihre Version ist zu alt!",
        versionLatest: "Aktuelle Version {v}, bereits aktuell!",
        versionBeta: "Sie sind bereits auf der Beta-Version ({v})",
        versionNewer: "Aktuelle Version {v}, neuer als die Cloud",
        versionFetchFailed: "Die Cloud ist nicht erreichbar, um die Version zu prüfen",
        exportSuccess: "Exportiert", importFailed: "Import fehlgeschlagen", importSuccess: "Importiert",
        importFailedFormat: "Ungültiges Format der Einstellungsdatei",
        resetConfirm: "Möchten Sie wirklich alle Einstellungen zurücksetzen?", no: "Nein", yes: "Ja",
        disabled: "Dieser Vorgang wurde deaktiviert",
        secureEnv: "Sichere Umgebung",
        downloadTitle: "Herunterladen", downloadDesc: "Inhalte hier herunterladen",
        searchPlaceholder: "Unsere Projekte durchsuchen", searchBtn: "Suchen", loading: "Wird geladen...",
        noData: "Keine Daten", date: "Datum", systems: "Systeme", link: "Link", code: "Code",
        copyCode: "Kopieren", openLink: "Öffnen", copied: "Kopiert",
        aboutTitle: "Über uns", aboutDesc: "Über uns Inhalt hier", noAboutData: "Keine Daten",
        otherTitle: "Andere Projekte", otherDesc: "Andere Projekte Inhalt hier", noOtherData: "Keine Daten",
        weAreMaking: "Wir machen einige ", interesting: "interessante ", projects: "Projekte",
        others: "Andere", developers: "Entwickler", maintainer: "Betreuer",
        dataSourceFallback: "Datenquelle auf lokal zurückgefallen",
        importWarnDesc: "Diese Einstellungsdatei enthält Anpassungen, die das Verhalten und die Sicherheit der Website beeinflussen können. Import fortsetzen?",
        importWarnCancel: "Abbrechen", importWarnContinue: "Fortsetzen"
    },
    es: {
        home: "Inicio", download: "Descargar", about: "Sobre nosotros", settings: "Ajustes",
        otherProjects: "Otros proyectos",
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
        versionCheckBtn: "Comprobar versión",
        versionLow: "Versión actual {v}, ¡tu versión es demasiado antigua!",
        versionLatest: "Versión actual {v}, ¡ya está actualizada!",
        versionBeta: "Ya estás en la versión beta ({v})",
        versionNewer: "Versión actual {v}, más reciente que la nube",
        versionFetchFailed: "No se puede contactar con la nube para comprobar la versión",
        exportSuccess: "Exportado", importFailed: "Error al importar", importSuccess: "Importado",
        importFailedFormat: "Formato de archivo de ajustes no válido",
        resetConfirm: "¿Está seguro de que desea restablecer toda la configuración?", no: "No", yes: "Sí",
        disabled: "Esta operación ha sido deshabilitada",
        secureEnv: "Entorno seguro",
        downloadTitle: "Descargar", downloadDesc: "Descargar contenido aquí",
        searchPlaceholder: "Buscar nuestros proyectos", searchBtn: "Buscar", loading: "Cargando...",
        noData: "Sin datos", date: "Fecha", systems: "Sistemas", link: "Enlace", code: "Código",
        copyCode: "Copiar", openLink: "Abrir", copied: "Copiado",
        aboutTitle: "Sobre nosotros", aboutDesc: "Contenido sobre nosotros aquí", noAboutData: "Sin datos",
        otherTitle: "Otros proyectos", otherDesc: "Contenido de otros proyectos aquí", noOtherData: "Sin datos",
        weAreMaking: "Estamos haciendo algunos ", interesting: "interesantes ", projects: "proyectos",
        others: "Otros", developers: "Desarrolladores", maintainer: "Mantenedor",
        dataSourceFallback: "Fuente de datos revertida a local",
        importWarnDesc: "Este archivo de ajustes contiene personalizaciones que pueden afectar el comportamiento y la seguridad del sitio. ¿Continuar importando?",
        importWarnCancel: "Cancelar", importWarnContinue: "Continuar"
    },
    ru: {
        home: "Главная", download: "Скачать", about: "О нас", settings: "Настройки",
        otherProjects: "Другие проекты",
        settingsTitle: "Настройки",
        theme: "Тема", themeLight: "Светлая тема", themeDark: "Тёмная тема",
        dataSource: "Источник данных", dataSourceGithub: "GitHub", dataSourceLocal: "Локальный",
        dataSourceWarnGithub: "Если вы используете офлайн-версию, убедитесь, что у вас есть доступ к сети!",
        dataSourceWarnLocal: "Этот список требует подключения к сети, иначе часть содержимого не синхронизируется",
        language: "Язык", otherLang: "Другое",
        langHint: "* Перевод может быть не на 100% точным, выбирайте по необходимости",
        handed: "Режим для левшей", handedToggle: "Включить раскладку для левшей",
        handedDesc: "Зеркально отражает панель настроек, главный экран и нижние элементы управления на левую сторону.",
        exportSettings: "Экспорт настроек", importSettings: "Импорт настроек", resetSettings: "Сброс настроек",
        versionCheckBtn: "Проверить версию",
        versionLow: "Текущая версия {v}, ваша версия слишком старая!",
        versionLatest: "Текущая версия {v}, уже последняя!",
        versionBeta: "Вы уже на бета-версии ({v})",
        versionNewer: "Текущая версия {v}, новее, чем в облаке",
        versionFetchFailed: "Не удалось подключиться к облаку для проверки версии",
        exportSuccess: "Экспортировано", importFailed: "Ошибка импорта", importSuccess: "Импортировано",
        importFailedFormat: "Неверный формат файла настроек",
        resetConfirm: "Вы уверены, что хотите сбросить все настройки?", no: "Нет", yes: "Да",
        disabled: "Это действие отключено",
        secureEnv: "Безопасная среда",
        downloadTitle: "Скачать", downloadDesc: "Скачивайте контент здесь",
        searchPlaceholder: "Поиск проектов", searchBtn: "Поиск", loading: "Загрузка...",
        noData: "Нет данных", date: "Дата", systems: "Системы", link: "Ссылка", code: "Код",
        copyCode: "Копировать", openLink: "Открыть", copied: "Скопировано",
        aboutTitle: "О нас", aboutDesc: "Содержимое о нас", noAboutData: "Нет данных",
        otherTitle: "Другие проекты", otherDesc: "Содержимое других проектов", noOtherData: "Нет данных",
        weAreMaking: "Мы делаем ", interesting: "интересные ", projects: "проекты",
        others: "Другое", developers: "Разработчики", maintainer: "Сопровождающий",
        dataSourceFallback: "Источник данных переключён на локальный",
        importWarnDesc: "Этот файл настроек содержит кастомизации, которые могут повлиять на поведение и безопасность сайта. Продолжить импорт?",
        importWarnCancel: "Отмена", importWarnContinue: "Продолжить"
    },
    ar: {
        home: "الرئيسية", download: "تنزيل", about: "من نحن", settings: "الإعدادات",
        otherProjects: "مشاريع أخرى",
        settingsTitle: "الإعدادات",
        theme: "السمة", themeLight: "السمة الفاتحة", themeDark: "السمة الداكنة",
        dataSource: "مصدر البيانات", dataSourceGithub: "GitHub", dataSourceLocal: "محلي",
        dataSourceWarnGithub: "إذا كنت تستخدم إصدارًا غير متصل بالإنترنت، فتأكد من أن لديك اتصالاً بالشبكة!",
        dataSourceWarnLocal: "هذه القائمة تحتاج إلى الإنترنت، وإلا لا يمكن مزامنة بعض المحتويات",
        language: "اللغة", otherLang: "أخرى",
        langHint: "* قد لا تكون الترجمة دقيقة 100%، يرجى الاختيار حسب الحاجة",
        handed: "وضع اليد اليسرى", handedToggle: "تمكين التخطيط لليد اليسرى",
        handedDesc: "يعكس لوحة الإعدادات والواجهة الرئيسية وعناصر التحكم السفلية إلى الجانب الأيسر، للاستخدام بيد واحدة اليسرى.",
        exportSettings: "تصدير الإعدادات", importSettings: "استيراد الإعدادات", resetSettings: "إعادة تعيين الإعدادات",
        versionCheckBtn: "التحقق من الإصدار",
        versionLow: "الإصدار الحالي {v}، إصدارك قديم جدًا!",
        versionLatest: "الإصدار الحالي {v}، محدّث بالفعل!",
        versionBeta: "أنت بالفعل على الإصدار التجريبي ({v})",
        versionNewer: "الإصدار الحالي {v}، أحدث من السحابة",
        versionFetchFailed: "تعذّر الوصول إلى السحابة للتحقق من الإصدار",
        exportSuccess: "تم التصدير", importFailed: "فشل الاستيراد", importSuccess: "تم الاستيراد",
        importFailedFormat: "تنسيق ملف الإعدادات غير صالح",
        resetConfirm: "هل أنت متأكد من إعادة تعيين جميع الإعدادات؟", no: "لا", yes: "نعم",
        disabled: "هذه العملية معطّلة",
        secureEnv: "بيئة آمنة",
        downloadTitle: "تنزيل", downloadDesc: "نزّل المحتوى هنا",
        searchPlaceholder: "ابحث في مشاريعنا", searchBtn: "بحث", loading: "جارٍ التحميل...",
        noData: "لا توجد بيانات", date: "التاريخ", systems: "الأنظمة", link: "الرابط", code: "الرمز",
        copyCode: "نسخ", openLink: "فتح", copied: "تم النسخ",
        aboutTitle: "من نحن", aboutDesc: "محتوى من نحن هنا", noAboutData: "لا توجد بيانات",
        otherTitle: "مشاريع أخرى", otherDesc: "محتوى المشاريع الأخرى هنا", noOtherData: "لا توجد بيانات",
        weAreMaking: "نحن نصنع بعض ", interesting: "المثير ", projects: "المشاريع",
        others: "أخرى", developers: "المطورون", maintainer: "المشرف",
        dataSourceFallback: "تم الرجوع إلى مصدر البيانات المحلي",
        importWarnDesc: "يحتوي ملف الإعدادات هذا على تخصيصات قد تؤثر على سلوك الموقع وأمانه. هل تريد متابعة الاستيراد؟",
        importWarnCancel: "إلغاء", importWarnContinue: "متابعة"
    }
};

const OTHER_LANG_NAMES = {
    ja: "日本語",
    ko: "한국어",
    fr: "Français",
    de: "Deutsch",
    es: "Español",
    "zh-Hant": "繁體中文",
    lzh: "文言",
    ru: "Русский",
    ar: "العربية"
};
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