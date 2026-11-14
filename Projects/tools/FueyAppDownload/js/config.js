const FILE_ICONS = {
    windows: '<svg viewBox="0 0 24 24" fill="#0078D4"><path d="M3 5.5L10.5 4.2V11.4H3V5.5ZM11.5 4V11.4H21V3L11.5 4ZM3 12.6V18.5L10.5 19.8V12.6H3ZM11.5 12.6V19.8L21 21V12.6H11.5Z"/></svg>',
    android: '<svg viewBox="0 0 24 24" fill="#3DDC84"><path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-1.4-.6-2.98-.94-4.65-.94-1.68 0-3.26.34-4.65.94L5.29 5.67c-.19-.29-.58-.36-.85-.22-.3.15-.42.54-.26.85L6.02 9.48C2.99 11.14 1 14.26 1 17.93h22c0-3.67-1.99-6.79-5.02-8.45H17.6zM7 15.25c-.69 0-1.25-.56-1.25-1.25S6.31 12.75 7 12.75s1.25.56 1.25 1.25S7.69 15.25 7 15.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/></svg>',
    apple: '<svg viewBox="0 0 24 24" fill="#FFFFFF"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>',
    linux: '<svg viewBox="0 0 24 24"><ellipse cx="12" cy="14" rx="6.2" ry="7.6" fill="#1c1c1e"/><ellipse cx="12" cy="15.4" rx="4" ry="5.4" fill="#ffffff"/><ellipse cx="12" cy="10.1" rx="4.3" ry="3.5" fill="#1c1c1e"/><circle cx="10.6" cy="9.6" r="1" fill="#ffffff"/><circle cx="13.4" cy="9.6" r="1" fill="#ffffff"/><circle cx="10.6" cy="9.6" r="0.5" fill="#1c1c1e"/><circle cx="13.4" cy="9.6" r="0.5" fill="#1c1c1e"/><path d="M10.5 10.9 L13.5 10.9 L12 12.4 Z" fill="#f5a623"/><ellipse cx="8.4" cy="20.3" rx="2.1" ry="1.1" fill="#f5a623"/><ellipse cx="15.6" cy="20.3" rx="2.1" ry="1.1" fill="#f5a623"/></svg>',
    archive: '<svg viewBox="0 0 24 24" fill="none" stroke="#ff9f0a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M12 4v2M12 8v2M12 12v2"/><rect x="10.4" y="16" width="3.2" height="3.6" rx="0.7" fill="#ff9f0a" stroke="none"/></svg>',
    file: '<svg viewBox="0 0 24 24" fill="none" stroke="#8e8e93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><polyline points="14 3 14 8 19 8"/></svg>',
    folder: '<svg viewBox="0 0 24 24" fill="none" stroke="#0a84ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>'
};

const ICONS = Object.assign({}, FILE_ICONS, {
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18"/></svg>'
});

const PLATFORM_META = {
    windows: { name: "Windows", icon: FILE_ICONS.windows, kind: "windows", file: "Windows_Installer.exe", order: 1 },
    macos: { name: "macOS", icon: FILE_ICONS.apple, kind: "apple", file: "macOS_Installer.dmg", order: 2 },
    linux: { name: "Linux", icon: FILE_ICONS.linux, kind: "linux", file: "Linux_AppImage.AppImage", order: 3 },
    android: { name: "Android", icon: FILE_ICONS.android, kind: "android", file: "FueyApp_for_Android.apk", order: 4 },
    ios: { name: "iOS", icon: FILE_ICONS.apple, kind: "apple", file: "FueyApp_for_iOS.ipa", order: 5 }
};

const RESERVED_NAMES = ["CON","PRN","AUX","NUL","COM1","COM2","COM3","COM4","COM5","COM6","COM7","COM8","COM9","LPT1","LPT2","LPT3","LPT4","LPT5","LPT6","LPT7","LPT8","LPT9"];

const T = {
    settingsTitle: { en: "Settings", zh: "设置", "zh-Hant": "設定", lzh: "設", ja: "設定", ko: "설정", fr: "Paramètres", de: "Einstellungen", es: "Ajustes", ru: "Настройки", ar: "الإعدادات" },
    theme: { en: "Theme", zh: "主题", "zh-Hant": "主題", lzh: "色", ja: "テーマ", ko: "테마", fr: "Thème", de: "Thema", es: "Tema", ru: "Тема", ar: "السمة" },
    themeLight: { en: "Light", zh: "浅色", "zh-Hant": "淺色", lzh: "淺色", ja: "ライト", ko: "라이트", fr: "Clair", de: "Hell", es: "Claro", ru: "Светлая", ar: "فاتح" },
    themeDark: { en: "Dark", zh: "深色", "zh-Hant": "深色", lzh: "深色", ja: "ダーク", ko: "다크", fr: "Sombre", de: "Dunkel", es: "Oscuro", ru: "Тёмная", ar: "داكن" },
    language: { en: "Language", zh: "语言", "zh-Hant": "語言", lzh: "語", ja: "言語", ko: "언어", fr: "Langue", de: "Sprache", es: "Idioma", ru: "Язык", ar: "اللغة" },
    otherLang: { en: "Other", zh: "其它", "zh-Hant": "其它", lzh: "他", ja: "その他", ko: "기타", fr: "Autres", de: "Andere", es: "Otros", ru: "Другое", ar: "أخرى" },
    tabApp: { en: "Our App", zh: "我们的应用", "zh-Hant": "我們的應用", lzh: "吾等之應用", ja: "私たちのアプリ", ko: "우리 앱", fr: "Notre app", de: "Unsere App", es: "Nuestra app", ru: "Наше приложение", ar: "تطبيقنا" },
    tabMarket: { en: "GitHub Market", zh: "GitHub 市场", "zh-Hant": "GitHub 市場", lzh: "GitHub 市", ja: "GitHub マーケット", ko: "GitHub 마켓", fr: "Marché GitHub", de: "GitHub-Markt", es: "Mercado GitHub", ru: "Маркет GitHub", ar: "سوق GitHub" },
    tabCustom: { en: "Custom Download", zh: "自定义下载", "zh-Hant": "自訂下載", lzh: "自定下載", ja: "カスタムダウンロード", ko: "사용자 지정 다운로드", fr: "Téléchargement personnalisé", de: "Benutzerdefinierter Download", es: "Descarga personalizada", ru: "Своя загрузка", ar: "تنزيل مخصص" },
    checkingVersion: { en: "Checking latest version...", zh: "正在检查最新版本...", "zh-Hant": "正在檢查最新版本...", lzh: "察最新版中...", ja: "最新バージョンを確認中...", ko: "최신 버전 확인 중...", fr: "Vérification de la dernière version...", de: "Neueste Version wird geprüft...", es: "Comprobando la última versión...", ru: "Проверка последней версии...", ar: "جاري التحقق من أحدث إصدار..." },
    versionFailed: { en: "Failed to fetch version", zh: "版本获取失败", "zh-Hant": "版本取得失敗", lzh: "取版敗", ja: "バージョンの取得に失敗しました", ko: "버전을 가져오지 못했습니다", fr: "Impossible de récupérer la version", de: "Version konnte nicht abgerufen werden", es: "No se pudo obtener la versión", ru: "Не удалось получить версию", ar: "فشل الحصول على الإصدار" },
    latestVersion: { en: "Latest version: {v}", zh: "最新版本：{v}", "zh-Hant": "最新版本：{v}", lzh: "新本：{v}", ja: "最新バージョン：{v}", ko: "최신 버전: {v}", fr: "Dernière version : {v}", de: "Neueste Version: {v}", es: "Última versión: {v}", ru: "Последняя версия: {v}", ar: "أحدث إصدار: {v}" },
    downloadBtn: { en: "Download", zh: "下载", "zh-Hant": "下載", lzh: "下載", ja: "ダウンロード", ko: "다운로드", fr: "Télécharger", de: "Herunterladen", es: "Descargar", ru: "Скачать", ar: "تنزيل" },
    unavailableBtn: { en: "Unavailable", zh: "暂不可用", "zh-Hant": "暫不可用", lzh: "未可用", ja: "利用不可", ko: "사용 불가", fr: "Indisponible", de: "Nicht verfügbar", es: "No disponible", ru: "Недоступно", ar: "غير متاح" },
    detected: { en: "Detected on your device", zh: "检测到你当前的设备", "zh-Hant": "偵測到你目前的裝置", lzh: "察汝今所用之器", ja: "お使いのデバイスを検出しました", ko: "현재 기기를 감지했습니다", fr: "Appareil détecté", de: "Gerät erkannt", es: "Dispositivo detectado", ru: "Обнаружено ваше устройство", ar: "تم اكتشاف جهازك" },
    preparing: { en: "Preparing download", zh: "正在准备下载中", "zh-Hant": "正在準備下載中", lzh: "備下載中", ja: "ダウンロード準備中", ko: "다운로드 준비 중", fr: "Préparation du téléchargement", de: "Download wird vorbereitet", es: "Preparando descarga", ru: "Подготовка к загрузке", ar: "جاري التحضير للتنزيل" },
    downloading: { en: "Downloading", zh: "正在下载中", "zh-Hant": "正在下載中", lzh: "下載中", ja: "ダウンロード中", ko: "다운로드 중", fr: "Téléchargement", de: "Wird heruntergeladen", es: "Descargando", ru: "Загрузка", ar: "جاري التنزيل" },
    downloadFmt: { en: "{speed}/s 丨 Downloaded {recv} 丨 Total {total} 丨 Time remaining {eta}", zh: "{speed}/s 丨 已下载 {recv} 丨 共 {total} 丨 剩余时间 {eta}", "zh-Hant": "{speed}/s 丨 已下載 {recv} 丨 共 {total} 丨 剩餘時間 {eta}", lzh: "{speed}/s 丨 已載 {recv} 丨 共 {total} 丨 餘時 {eta}", ja: "{speed}/s 丨 ダウンロード済み {recv} 丨 合計 {total} 丨 残り時間 {eta}", ko: "{speed}/s 丨 다운로드됨 {recv} 丨 전체 {total} 丨 남은 시간 {eta}", fr: "{speed}/s 丨 Téléchargé {recv} 丨 Total {total} 丨 Temps restant {eta}", de: "{speed}/s 丨 Heruntergeladen {recv} 丨 Gesamt {total} 丨 Restzeit {eta}", es: "{speed}/s 丨 Descargado {recv} 丨 Total {total} 丨 Tiempo restante {eta}", ru: "{speed}/s 丨 Загружено {recv} 丨 Всего {total} 丨 Осталось времени {eta}", ar: "{speed}/s 丨 تم تنزيل {recv} 丨 الإجمالي {total} 丨 الوقت المتبقي {eta}" },
    downloadDone: { en: "Download complete", zh: "下载完成", "zh-Hant": "下載完成", lzh: "下載畢", ja: "ダウンロード完了", ko: "다운로드 완료", fr: "Téléchargement terminé", de: "Download abgeschlossen", es: "Descarga completada", ru: "Загрузка завершена", ar: "اكتمل التنزيل" },
    downloadFailed: { en: "Download failed, please try again", zh: "下载失败，请重试", "zh-Hant": "下載失敗，請重試", lzh: "下載敗，請復試", ja: "ダウンロード失敗、再試行してください", ko: "다운로드 실패, 다시 시도하세요", fr: "Échec du téléchargement, veuillez réessayer", de: "Download fehlgeschlagen, bitte erneut versuchen", es: "Error en la descarga, inténtalo de nuevo", ru: "Ошибка загрузки, попробуйте снова", ar: "فشل التنزيل، يرجى المحاولة مرة أخرى" },
    installTitle: { en: "Your file has been downloaded. You can now work with it.", zh: "你的文件已下载完成，你可以对它进行操作", "zh-Hant": "你的檔案已完成下載，你可以對它進行操作", lzh: "汝之檔已下載畢，可自為之", ja: "ファイルのダウンロードが完了しました。操作できます。", ko: "파일 다운로드가 완료되었으며, 작업을 진행할 수 있습니다.", fr: "Votre fichier a été téléchargé. Vous pouvez le manipuler.", de: "Ihre Datei wurde heruntergeladen. Sie können damit arbeiten.", es: "Tu archivo se ha descargado. Puedes trabajar con él.", ru: "Ваш файл загружен. Вы можете с ним работать.", ar: "تم تنزيل ملفك. يمكنك التعامل معه." },
    installPathLabel: { en: "Current file name :", zh: "当前的文件名为 :", "zh-Hant": "當前檔案名為 :", lzh: "今檔名為 :", ja: "現在のファイル名 :", ko: "현재 파일 이름 :", fr: "Nom actuel du fichier :", de: "Aktueller Dateiname :", es: "Nombre actual del archivo :", ru: "Текущее имя файла :", ar: "اسم الملف الحالي :" },
    installHint: { en: "If the browser did not save the file automatically, click 'Download again'.", zh: "如果浏览器没有自动保存文件，请点击'重新下载'", "zh-Hant": "如果瀏覽器沒有自動儲存檔案，請點擊'重新下載'", lzh: "如瀏覽器未自儲檔，請點'復下載'", ja: "ブラウザがファイルを自動保存していない場合は、「再ダウンロード」をクリックしてください。", ko: "브라우저가 파일을 자동으로 저장하지 않은 경우 '다시 다운로드'를 클릭하세요.", fr: "Si le navigateur n'a pas enregistré le fichier automatiquement, cliquez sur « Télécharger à nouveau ».", de: "Wenn der Browser die Datei nicht automatisch gespeichert hat, klicken Sie auf „Erneut herunterladen“.", es: "Si el navegador no guardó el archivo automáticamente, haz clic en «Descargar de nuevo».", ru: "Если браузер не сохранил файл автоматически, нажмите «Скачать снова».", ar: "إذا لم يحفظ المتصفح الملف تلقائيًا، فانقر على 'تنزيل مرة أخرى'." },
    redownloadText: { en: "Download again", zh: "重新下载", "zh-Hant": "重新下載", lzh: "復下載", ja: "再ダウンロード", ko: "다시 다운로드", fr: "Télécharger à nouveau", de: "Erneut herunterladen", es: "Descargar de nuevo", ru: "Скачать снова", ar: "تنزيل مرة أخرى" },
    doneBackBtn: { en: "Back", zh: "返回", "zh-Hant": "返回", lzh: "還", ja: "戻る", ko: "뒤로", fr: "Retour", de: "Zurück", es: "Volver", ru: "Назад", ar: "رجوع" },
    customUrlPlaceholder: { en: "Paste download link", zh: "粘贴下载链接", "zh-Hant": "貼上下載連結", lzh: "貼下載之鏈", ja: "ダウンロードリンクを貼り付け", ko: "다운로드 링크 붙여넣기", fr: "Collez le lien de téléchargement", de: "Download-Link einfügen", es: "Pega el enlace de descarga", ru: "Вставьте ссылку для скачивания", ar: "الصق رابط التنزيل" },
    customParseBtn: { en: "Parse", zh: "解析", "zh-Hant": "解析", lzh: "析", ja: "解析", ko: "분석", fr: "Analyser", de: "Analysieren", es: "Analizar", ru: "Разобрать", ar: "تحليل" },
    customEmptyHint: { en: "Paste any direct download link and press Parse to preview file name", zh: "粘贴任意直接下载链接，点击解析即可预览文件名", "zh-Hant": "貼上任意直接下載連結，點擊解析即可預覽檔案名稱", lzh: "貼直下之鏈，點析以觀檔名", ja: "直接ダウンロードリンクを貼り付け、「解析」でファイル名を確認", ko: "직접 다운로드 링크를 붙여넣고 분석을 눌러 파일 이름을 미리 봅니다", fr: "Collez un lien direct et cliquez sur Analyser pour prévisualiser", de: "Fügen Sie einen Link ein und klicken Sie auf Analysieren", es: "Pega un enlace directo y pulsa Analizar", ru: "Вставьте прямую ссылку и нажмите «Разобрать»", ar: "الصق رابط تنزيل مباشر واضغط على تحليل" },
    customSourceLabel: { en: "Source URL", zh: "来源链接", "zh-Hant": "來源連結", lzh: "源鏈", ja: "ソースURL", ko: "원본 URL", fr: "URL source", de: "Quell-URL", es: "URL de origen", ru: "Исходный URL", ar: "رابط المصدر" },
    customFilenameLabel: { en: "File name", zh: "文件名称", "zh-Hant": "檔案名稱", lzh: "檔名", ja: "ファイル名", ko: "파일 이름", fr: "Nom du fichier", de: "Dateiname", es: "Nombre del archivo", ru: "Имя файла", ar: "اسم الملف" },
    customStartBtn: { en: "Start download", zh: "开始下载", "zh-Hant": "開始下載", lzh: "始下載", ja: "ダウンロード開始", ko: "다운로드 시작", fr: "Démarrer le téléchargement", de: "Download starten", es: "Iniciar descarga", ru: "Начать загрузку", ar: "بدء التنزيل" },
    filenameErrorEmpty: { en: "File name cannot be empty", zh: "文件名不能为空", "zh-Hant": "檔案名稱不能為空", lzh: "檔名不可空", ja: "ファイル名を空にできません", ko: "파일 이름은 비워둘 수 없습니다", fr: "Le nom ne peut pas être vide", de: "Dateiname darf nicht leer sein", es: "El nombre no puede estar vacío", ru: "Имя файла не может быть пустым", ar: "لا يمكن أن يكون اسم الملف فارغًا" },
    filenameErrorInvalid: { en: "Invalid characters", zh: "包含非法字符", "zh-Hant": "包含非法字元", lzh: "有非法之符", ja: "無効な文字", ko: "잘못된 문자", fr: "Caractères non valides", de: "Ungültige Zeichen", es: "Caracteres no válidos", ru: "Недопустимые символы", ar: "أحرف غير صالحة" },
    filenameErrorLeadingDot: { en: "Cannot start with a dot", zh: "不能以点开头", "zh-Hant": "不能以點開頭", lzh: "不可以點為首", ja: "ドットで始められません", ko: "점으로 시작할 수 없습니다", fr: "Ne peut pas commencer par un point", de: "Darf nicht mit einem Punkt beginnen", es: "No puede comenzar con un punto", ru: "Не может начинаться с точки", ar: "لا يمكن أن يبدأ بنقطة" },
    filenameErrorTrailingDot: { en: "Cannot end with a dot", zh: "不能以点结尾", "zh-Hant": "不能以點結尾", lzh: "不可以點為末", ja: "ドットで終われません", ko: "점으로 끝날 수 없습니다", fr: "Ne peut pas finir par un point", de: "Darf nicht mit einem Punkt enden", es: "No puede terminar con un punto", ru: "Не может заканчиваться точкой", ar: "لا يمكن أن ينتهي بنقطة" },
    filenameErrorTrailingSpace: { en: "Cannot end with a space", zh: "不能以空格结尾", "zh-Hant": "不能以空格結尾", lzh: "不可以空為末", ja: "スペースで終われません", ko: "공백으로 끝날 수 없습니다", fr: "Ne peut pas finir par un espace", de: "Darf nicht mit Leerzeichen enden", es: "No puede terminar con espacio", ru: "Не может заканчиваться пробелом", ar: "لا يمكن أن ينتهي بمسافة" },
    filenameErrorReserved: { en: "Reserved system name", zh: "系统保留名", "zh-Hant": "系統保留名", lzh: "統所留", ja: "システム予約名", ko: "시스템 예약 이름", fr: "Nom réservé du système", de: "Reservierter Systemname", es: "Nombre reservado del sistema", ru: "Зарезервированное имя", ar: "اسم محجوز للنظام" },
    filenameErrorTooLong: { en: "File name is too long", zh: "文件名过长", "zh-Hant": "檔案名稱過長", lzh: "檔名過長", ja: "ファイル名が長すぎます", ko: "파일 이름이 너무 깁니다", fr: "Nom trop long", de: "Dateiname zu lang", es: "Nombre demasiado largo", ru: "Имя слишком длинное", ar: "اسم الملف طويل جدًا" },
    marketPlaceholder: { en: "Enter owner/repo or search keyword", zh: "输入 owner/repo 或搜索关键词", "zh-Hant": "輸入 owner/repo 或搜尋關鍵詞", lzh: "入 owner/repo 或索詞", ja: "owner/repo または検索キーワード", ko: "owner/repo 또는 검색어 입력", fr: "owner/repo ou mot-clé", de: "owner/repo oder Suchbegriff", es: "owner/repo o palabra clave", ru: "owner/repo или ключевое слово", ar: "أدخل owner/repo أو كلمة البحث" },
    marketSearchBtn: { en: "Search", zh: "搜索", "zh-Hant": "搜尋", lzh: "索", ja: "検索", ko: "검색", fr: "Rechercher", de: "Suchen", es: "Buscar", ru: "Поиск", ar: "بحث" },
    marketIdle: { en: "Enter a keyword, or owner/repo to open directly", zh: "输入关键词，或 owner/repo 直接打开", "zh-Hant": "輸入關鍵詞，或 owner/repo 直接開啟", lzh: "入詞以索，或入 owner/repo 以直達", ja: "キーワード、または owner/repo を入力", ko: "키워드 또는 owner/repo를 입력", fr: "Mot-clé, ou owner/repo pour ouvrir", de: "Schlüsselwort oder owner/repo", es: "Palabra clave u owner/repo", ru: "Ключевое слово или owner/repo", ar: "أدخل كلمة رئيسية أو owner/repo" },
    marketLoading: { en: "Loading...", zh: "加载中...", "zh-Hant": "載入中...", lzh: "載中...", ja: "読み込み中...", ko: "로딩 중...", fr: "Chargement...", de: "Wird geladen...", es: "Cargando...", ru: "Загрузка...", ar: "جارٍ التحميل..." },
    marketNoResults: { en: "No results found", zh: "没有找到相关项目", "zh-Hant": "沒有找到相關專案", lzh: "未得其項", ja: "該当なし", ko: "결과 없음", fr: "Aucun résultat", de: "Keine Ergebnisse", es: "Sin resultados", ru: "Ничего не найдено", ar: "لا نتائج" },
    marketError: { en: "Load failed", zh: "加载失败", "zh-Hant": "載入失敗", lzh: "載敗", ja: "読み込み失敗", ko: "로드 실패", fr: "Échec du chargement", de: "Laden fehlgeschlagen", es: "Error al cargar", ru: "Ошибка загрузки", ar: "فشل التحميل" },
    marketErrorTimeout: { en: "Request timed out. Check your network or configure a GitHub Token.", zh: "请求超时，请检查网络或配置 GitHub Token。", "zh-Hant": "請求逾時，請檢查網路或設定 GitHub 權杖。", lzh: "請逾時，宜察網或設 GitHub 之令", ja: "リクエストがタイムアウトしました。ネットワークを確認するか、GitHub トークンを設定してください。", ko: "요청 시간 초과. 네트워크 확인 또는 GitHub 토큰을 설정하세요.", fr: "Délai dépassé. Vérifiez votre réseau ou configurez un jeton GitHub.", de: "Zeitüberschreitung. Prüfen Sie Ihr Netzwerk oder konfigurieren Sie ein GitHub-Token.", es: "Tiempo de espera agotado. Revisa tu red o configura un token de GitHub.", ru: "Тайм-аут. Проверьте сеть или настройте токен GitHub.", ar: "انتهت المهلة. تحقق من الشبكة أو اضبط رمز GitHub." },
    marketErrorNetwork: { en: "Network error. Check your connection.", zh: "网络错误，请检查网络连接。", "zh-Hant": "網路錯誤，請檢查網路連線。", lzh: "網誤，宜察網連", ja: "ネットワークエラー。接続を確認してください。", ko: "네트워크 오류. 연결을 확인하세요.", fr: "Erreur réseau. Vérifiez votre connexion.", de: "Netzwerkfehler. Prüfen Sie Ihre Verbindung.", es: "Error de red. Revisa tu conexión.", ru: "Сетевая ошибка. Проверьте подключение.", ar: "خطأ في الشبكة. تحقق من الاتصال." },
    marketRateLimit: { en: "GitHub API rate limit exceeded. Configure a token in Settings to raise the limit.", zh: "GitHub API 请求超限，请在设置中配置 Token 提升限额。", "zh-Hant": "GitHub API 請求超限，請在設定中設定權杖以提升限額。", lzh: "GitHub API 請數逾限，宜於設中置令以增其限", ja: "GitHub API のレート制限超過。設定でトークンを設定してください。", ko: "GitHub API 요청 횟수 초과. 설정에서 토큰을 설정하세요.", fr: "Limite de l'API GitHub dépassée. Configurez un jeton dans les paramètres.", de: "GitHub-API-Ratenlimit überschritten. Konfigurieren Sie ein Token in den Einstellungen.", es: "Límite de API de GitHub superado. Configura un token en los ajustes.", ru: "Превышен лимит GitHub API. Настройте токен в настройках.", ar: "تم تجاوز حد GitHub API. اضبط رمزًا في الإعدادات." },
    marketUnauthorized: { en: "GitHub Token is invalid or expired. Please update it in Settings.", zh: "GitHub Token 无效或已过期，请在设置中更新。", "zh-Hant": "GitHub 權杖無效或已過期，請在設定中更新。", lzh: "GitHub 令無效或已逾，宜於設中更新", ja: "GitHub トークンが無効か期限切れです。設定で更新してください。", ko: "GitHub 토큰이 유효하지 않거나 만료되었습니다. 설정에서 업데이트하세요.", fr: "Le jeton GitHub est invalide ou expiré. Mettez-le à jour dans les paramètres.", de: "GitHub-Token ist ungültig oder abgelaufen. Aktualisieren Sie es in den Einstellungen.", es: "El token de GitHub no es válido o ha caducado. Actualízalo en los ajustes.", ru: "Токен GitHub недействителен или просрочен. Обновите его в настройках.", ar: "رمز GitHub غير صالح أو منتهي. حدّثه في الإعدادات." },
    marketRepoNotFound: { en: "Repository not found", zh: "仓库不存在", "zh-Hant": "倉庫不存在", lzh: "庫不存", ja: "リポジトリが見つかりません", ko: "저장소를 찾을 수 없습니다", fr: "Dépôt introuvable", de: "Repository nicht gefunden", es: "Repositorio no encontrado", ru: "Репозиторий не найден", ar: "المستودع غير موجود" },
    marketNoReleases: { en: "No releases found", zh: "没有找到版本", "zh-Hant": "沒有找到版本", lzh: "未得其版", ja: "リリースなし", ko: "릴리스 없음", fr: "Aucune version", de: "Keine Releases", es: "Sin versiones", ru: "Нет релизов", ar: "لا إصدارات" },
    marketNoAssets: { en: "No downloadable files", zh: "没有可下载的文件", "zh-Hant": "沒有可下載的檔案", lzh: "無可載之文", ja: "ダウンロード可能なファイルなし", ko: "다운로드 가능한 파일 없음", fr: "Aucun fichier téléchargeable", de: "Keine Dateien", es: "Sin archivos descargables", ru: "Нет загружаемых файлов", ar: "لا ملفات قابلة للتنزيل" },
    marketTrendingHint: { en: "Popular projects on GitHub", zh: "GitHub 热门项目", "zh-Hant": "GitHub 熱門專案", lzh: "GitHub 眾趨之項", ja: "GitHub 人気プロジェクト", ko: "GitHub 인기 프로젝트", fr: "Projets populaires sur GitHub", de: "Beliebte Projekte auf GitHub", es: "Proyectos populares en GitHub", ru: "Популярные проекты на GitHub", ar: "المشاريع الشائعة على GitHub" },
    marketSearchHint: { en: "Search results", zh: "搜索结果", "zh-Hant": "搜尋結果", lzh: "索之所得", ja: "検索結果", ko: "검색 결과", fr: "Résultats de recherche", de: "Suchergebnisse", es: "Resultados de búsqueda", ru: "Результаты поиска", ar: "نتائج البحث" },
    marketFueySeekHint: { en: "FueySeek repositories", zh: "FueySeek 的仓库", "zh-Hant": "FueySeek 的倉庫", lzh: "FueySeek 之庫", ja: "FueySeek のリポジトリ", ko: "FueySeek 저장소", fr: "Dépôts FueySeek", de: "FueySeek-Repositories", es: "Repositorios de FueySeek", ru: "Репозитории FueySeek", ar: "مستودعات FueySeek" },
    marketTrendingBtn: { en: "Trending", zh: "热门", "zh-Hant": "熱門", lzh: "眾趨", ja: "人気", ko: "인기", fr: "Tendances", de: "Beliebt", es: "Tendencias", ru: "В тренде", ar: "الأكثر شعبية" },
    marketFueySeekBtn: { en: "FueySeek", zh: "FueySeek", "zh-Hant": "FueySeek", lzh: "FueySeek", ja: "FueySeek", ko: "FueySeek", fr: "FueySeek", de: "FueySeek", es: "FueySeek", ru: "FueySeek", ar: "FueySeek" },
    marketRetry: { en: "Retry", zh: "重试", "zh-Hant": "重試", lzh: "復試", ja: "再試行", ko: "재시도", fr: "Réessayer", de: "Erneut", es: "Reintentar", ru: "Повторить", ar: "إعادة" },
    marketOpenSettings: { en: "Open Settings to configure a token", zh: "打开设置配置 Token", "zh-Hant": "開啟設定以設定權杖", lzh: "啟設以置令", ja: "設定を開いてトークンを設定", ko: "설정을 열어 토큰 설정", fr: "Ouvrir les paramètres pour configurer un jeton", de: "Einstellungen öffnen, um ein Token zu konfigurieren", es: "Abrir ajustes para configurar un token", ru: "Открыть настройки для настройки токена", ar: "افتح الإعدادات لضبط رمز" },
    reposLabel: { en: "repos", zh: "个仓库", "zh-Hant": "個倉庫", lzh: "庫", ja: "リポジトリ", ko: "저장소", fr: "dépôts", de: "Repos", es: "repos", ru: "репо", ar: "مستودع" },
    prevPage: { en: "Prev", zh: "上一页", "zh-Hant": "上一頁", lzh: "前", ja: "前へ", ko: "이전", fr: "Préc.", de: "Zurück", es: "Ant.", ru: "Назад", ar: "السابق" },
    nextPage: { en: "Next", zh: "下一页", "zh-Hant": "下一頁", lzh: "後", ja: "次へ", ko: "다음", fr: "Suiv.", de: "Weiter", es: "Sig.", ru: "Вперёд", ar: "التالي" },
    pageInfo: { en: "Page {current} / {total}", zh: "第 {current} / {total} 页", "zh-Hant": "第 {current} / {total} 頁", lzh: "第 {current} / {total} 頁", ja: "{current} / {total} ページ", ko: "{current} / {total} 페이지", fr: "Page {current} / {total}", de: "Seite {current} / {total}", es: "Página {current} / {total}", ru: "Стр. {current} / {total}", ar: "صفحة {current} / {total}" },
    backBtn: { en: "Back", zh: "返回", "zh-Hant": "返回", lzh: "還", ja: "戻る", ko: "뒤로", fr: "Retour", de: "Zurück", es: "Volver", ru: "Назад", ar: "رجوع" },
    starsLabel: { en: "stars", zh: "星", "zh-Hant": "星", lzh: "星", ja: "スター", ko: "스타", fr: "étoiles", de: "Sterne", es: "estrellas", ru: "звёзд", ar: "نجوم" },
    updatedLabel: { en: "Updated", zh: "更新于", "zh-Hant": "更新於", lzh: "更於", ja: "更新", ko: "업데이트", fr: "Mis à jour", de: "Aktualisiert", es: "Actualizado", ru: "Обновлено", ar: "محدث" },
    detailReadme: { en: "README", zh: "简介", "zh-Hant": "簡介", lzh: "述", ja: "概要", ko: "소개", fr: "Aperçu", de: "Übersicht", es: "Resumen", ru: "Обзор", ar: "نظرة عامة" },
    detailChangelog: { en: "Changelog", zh: "更新日志", "zh-Hant": "更新日誌", lzh: "更誌", ja: "更新履歴", ko: "변경 로그", fr: "Journal", de: "Änderungen", es: "Registro", ru: "Журнал", ar: "السجل" },
    detailContributors: { en: "Developers", zh: "开发者", "zh-Hant": "開發者", lzh: "作者", ja: "開発者", ko: "개발자", fr: "Développeurs", de: "Entwickler", es: "Desarrolladores", ru: "Разработчики", ar: "المطورون" },
    detailWiki: { en: "Wiki", zh: "Wiki", "zh-Hant": "Wiki", lzh: "Wiki", ja: "Wiki", ko: "Wiki", fr: "Wiki", de: "Wiki", es: "Wiki", ru: "Вики", ar: "ويكي" },
    detailFiles: { en: "Files", zh: "文件", "zh-Hant": "檔案", lzh: "檔", ja: "ファイル", ko: "파일", fr: "Fichiers", de: "Dateien", es: "Archivos", ru: "Файлы", ar: "الملفات" },
    filesLoading: { en: "Loading files...", zh: "正在加载文件...", "zh-Hant": "正在載入檔案...", lzh: "載檔中...", ja: "ファイルを読み込み中...", ko: "파일 로딩 중...", fr: "Chargement des fichiers...", de: "Dateien werden geladen...", es: "Cargando archivos...", ru: "Загрузка файлов...", ar: "جارٍ تحميل الملفات..." },
    filesFailed: { en: "Failed to load files", zh: "文件加载失败", "zh-Hant": "檔案載入失敗", lzh: "檔載敗", ja: "ファイルの読み込み失敗", ko: "파일 로드 실패", fr: "Échec du chargement des fichiers", de: "Dateien konnten nicht geladen werden", es: "Error al cargar archivos", ru: "Ошибка загрузки файлов", ar: "فشل تحميل الملفات" },
    filesEmpty: { en: "This folder is empty", zh: "该目录为空", "zh-Hant": "該目錄為空", lzh: "此目空", ja: "空のフォルダ", ko: "빈 폴더", fr: "Dossier vide", de: "Ordner leer", es: "Carpeta vacía", ru: "Пустая папка", ar: "مجلد فارغ" },
    filesBack: { en: "Up", zh: "上级", "zh-Hant": "上層", lzh: "上", ja: "上へ", ko: "위로", fr: "Haut", de: "Hoch", es: "Arriba", ru: "Вверх", ar: "أعلى" },
    readmeLoading: { en: "Loading README...", zh: "正在加载 README...", "zh-Hant": "正在載入 README...", lzh: "載述中...", ja: "README を読み込み中...", ko: "README 로딩 중...", fr: "Chargement du README...", de: "README wird geladen...", es: "Cargando README...", ru: "Загрузка README...", ar: "جارٍ تحميل README..." },
    readmeFailed: { en: "Failed to load README", zh: "README 加载失败", "zh-Hant": "README 載入失敗", lzh: "述載敗", ja: "README の読み込み失敗", ko: "README 로드 실패", fr: "Échec du README", de: "README konnte nicht geladen werden", es: "Error al cargar README", ru: "Ошибка загрузки README", ar: "فشل تحميل README" },
    readmeEmpty: { en: "No README available", zh: "没有 README", "zh-Hant": "沒有 README", lzh: "無述", ja: "README なし", ko: "README 없음", fr: "Aucun README", de: "Kein README", es: "Sin README", ru: "Нет README", ar: "لا README" },
    contributorsLoading: { en: "Loading developers...", zh: "正在加载开发者...", "zh-Hant": "正在載入開發者...", lzh: "載作者中...", ja: "開発者を読み込み中...", ko: "개발자 로딩 중...", fr: "Chargement des développeurs...", de: "Entwickler werden geladen...", es: "Cargando desarrolladores...", ru: "Загрузка разработчиков...", ar: "جارٍ تحميل المطورين..." },
    contributorsFailed: { en: "Failed to load developers", zh: "开发者加载失败", "zh-Hant": "開發者載入失敗", lzh: "作者載敗", ja: "開発者の読み込み失敗", ko: "개발자 로드 실패", fr: "Échec du chargement des développeurs", de: "Entwickler konnten nicht geladen werden", es: "Error al cargar desarrolladores", ru: "Ошибка загрузки разработчиков", ar: "فشل تحميل المطورين" },
    contributorsEmpty: { en: "No developers listed", zh: "没有开发者信息", "zh-Hant": "沒有開發者資訊", lzh: "無作者之記", ja: "開発者情報なし", ko: "개발자 정보 없음", fr: "Aucun développeur", de: "Keine Entwickler", es: "Sin desarrolladores", ru: "Нет разработчиков", ar: "لا مطورون" },
    wikiLoading: { en: "Loading Wiki...", zh: "正在加载 Wiki...", "zh-Hant": "正在載入 Wiki...", lzh: "載 Wiki 中...", ja: "Wiki を読み込み中...", ko: "Wiki 로딩 중...", fr: "Chargement du Wiki...", de: "Wiki wird geladen...", es: "Cargando Wiki...", ru: "Загрузка вики...", ar: "جارٍ تحميل الويكي..." },
    wikiFailed: { en: "Failed to load Wiki", zh: "Wiki 加载失败", "zh-Hant": "Wiki 載入失敗", lzh: "Wiki 載敗", ja: "Wiki の読み込み失敗", ko: "Wiki 로드 실패", fr: "Échec du Wiki", de: "Wiki konnte nicht geladen werden", es: "Error al cargar Wiki", ru: "Ошибка загрузки вики", ar: "فشل تحميل الويكي" },
    wikiEmpty: { en: "This repository has no Wiki", zh: "该仓库没有 Wiki", "zh-Hant": "該倉庫沒有 Wiki", lzh: "此庫無 Wiki", ja: "Wiki がありません", ko: "Wiki 없음", fr: "Aucun Wiki", de: "Kein Wiki", es: "Sin Wiki", ru: "Нет вики", ar: "لا ويكي" },
    contributorCommits: { en: "contributions", zh: "次贡献", "zh-Hant": "次貢獻", lzh: "獻", ja: "コントリビューション", ko: "기여", fr: "contributions", de: "Beiträge", es: "contribuciones", ru: "вкладов", ar: "مساهمات" },
    ghTokenInputLabel: { en: "GitHub Token", zh: "GitHub 令牌", "zh-Hant": "GitHub 權杖", lzh: "GitHub 令", ja: "GitHub トークン", ko: "GitHub 토큰", fr: "Jeton GitHub", de: "GitHub-Token", es: "Token de GitHub", ru: "Токен GitHub", ar: "رمز GitHub" },
    ghTokenSaveBtn: { en: "Save", zh: "保存", "zh-Hant": "儲存", lzh: "存", ja: "保存", ko: "저장", fr: "Enregistrer", de: "Speichern", es: "Guardar", ru: "Сохранить", ar: "حفظ" },
    ghTokenClearBtn: { en: "Clear", zh: "清除", "zh-Hant": "清除", lzh: "清", ja: "クリア", ko: "지우기", fr: "Effacer", de: "Löschen", es: "Borrar", ru: "Очистить", ar: "مسح" },
    ghTokenHint: { en: "A Personal Access Token raises the API quota from 60 to 5000 requests per hour", zh: "填入 Personal Access Token 可将 API 配额从每小时 60 次提升到 5000 次", "zh-Hant": "填入 Personal Access Token 可將 API 配額從每小時 60 次提升到 5000 次", lzh: "入 GitHub 之令，可使 API 之限自每時六十至五千", ja: "Personal Access Token で API 制限が 1 時間 60 回から 5000 回に上がります", ko: "Personal Access Token을 입력하면 API 한도가 시간당 60회에서 5000회로 증가합니다", fr: "Un jeton personnel augmente le quota de 60 à 5000 req/h", de: "Ein persönliches Token erhöht das API-Kontingent von 60 auf 5000 Anfragen pro Stunde", es: "Un token personal aumenta la cuota de API de 60 a 5000 solicitudes por hora", ru: "Personal Access Token повышает лимит с 60 до 5000 запросов в час", ar: "رمز الوصول الشخصي يرفع حصة API من 60 إلى 5000 طلب في الساعة" },
    ghApiLabel: { en: "GitHub API Status", zh: "GitHub API 状态", "zh-Hant": "GitHub API 狀態", lzh: "GitHub API 之況", ja: "GitHub API 状態", ko: "GitHub API 상태", fr: "État de l'API GitHub", de: "GitHub-API-Status", es: "Estado de la API GitHub", ru: "Статус GitHub API", ar: "حالة GitHub API" },
    ghCoreLabel: { en: "Core", zh: "核心配额", "zh-Hant": "核心配額", lzh: "核限", ja: "コア", ko: "코어", fr: "Principal", de: "Kern", es: "Principal", ru: "Основной", ar: "الأساسي" },
    ghSearchLabel: { en: "Search", zh: "搜索配额", "zh-Hant": "搜尋配額", lzh: "索限", ja: "検索", ko: "검색", fr: "Recherche", de: "Suche", es: "Búsqueda", ru: "Поиск", ar: "البحث" },
    ghResetLabel: { en: "Reset in", zh: "重置倒计时", "zh-Hant": "重置倒計時", lzh: "復時", ja: "リセットまで", ko: "재설정까지", fr: "Réinit. dans", de: "Reset in", es: "Reinicio en", ru: "Сброс через", ar: "إعادة التعيين بعد" },
    ghTokenStateLabel: { en: "Token", zh: "令牌状态", "zh-Hant": "權杖狀態", lzh: "令況", ja: "トークン", ko: "토큰", fr: "Jeton", de: "Token", es: "Token", ru: "Токен", ar: "الرمز" },
    ghTokenStateYes: { en: "Configured", zh: "已配置", "zh-Hant": "已設定", lzh: "已設", ja: "設定済み", ko: "설정됨", fr: "Configuré", de: "Konfiguriert", es: "Configurado", ru: "Настроен", ar: "مُهيأ" },
    ghTokenStateNo: { en: "Not configured", zh: "未配置", "zh-Hant": "未設定", lzh: "未設", ja: "未設定", ko: "미설정", fr: "Non configuré", de: "Nicht konfiguriert", es: "No configurado", ru: "Не настроен", ar: "غير مهيأ" },
    ghRefreshBtn: { en: "Refresh", zh: "刷新状态", "zh-Hant": "重新整理狀態", lzh: "復察", ja: "更新", ko: "새로고침", fr: "Rafraîchir", de: "Aktualisieren", es: "Actualizar", ru: "Обновить", ar: "تحديث" },
    ghApiLoading: { en: "Loading...", zh: "加载中...", "zh-Hant": "載入中...", lzh: "載中...", ja: "読み込み中...", ko: "로딩 중...", fr: "Chargement...", de: "Lädt...", es: "Cargando...", ru: "Загрузка...", ar: "جارٍ التحميل..." },
    ghApiFailed: { en: "Failed", zh: "获取失败", "zh-Hant": "取得失敗", lzh: "取敗", ja: "取得失敗", ko: "가져오기 실패", fr: "Échec", de: "Fehlgeschlagen", es: "Fallido", ru: "Ошибка", ar: "فشل" },
    visitSite: { en: "Visit Our Website", zh: "访问我们的网站", "zh-Hant": "造訪我們的網站", lzh: "訪吾之站", ja: "ウェブサイトを見る", ko: "웹사이트 방문", fr: "Visiter notre site", de: "Unsere Website besuchen", es: "Visitar nuestro sitio", ru: "Посетить наш сайт", ar: "زيارة موقعنا" },
    cacheTitle: { en: "Caching website resources...", zh: "正在缓存网站资源...", "zh-Hant": "正在快取網站資源...", lzh: "正儲站中之物...", ja: "ウェブサイトのリソースをキャッシュ中...", ko: "웹사이트 리소스 캐싱 중...", fr: "Mise en cache des ressources...", de: "Website-Ressourcen werden zwischengespeichert...", es: "Guardando en caché los recursos...", ru: "Кэширование ресурсов сайта...", ar: "جارٍ تخزين موارد الموقع مؤقتًا..." },
    cachePreparing: { en: "Preparing to cache...", zh: "正在准备缓存...", "zh-Hant": "正在準備快取...", lzh: "備儲中...", ja: "キャッシュを準備中...", ko: "캐시 준비 중...", fr: "Préparation de la mise en cache...", de: "Cache wird vorbereitet...", es: "Preparando la caché...", ru: "Подготовка кэша...", ar: "جارٍ التحضير للتخزين المؤقت..." },
    cacheProgress: { en: "Cached {done} / {total}", zh: "已缓存 {done} / {total}", "zh-Hant": "已快取 {done} / {total}", lzh: "已儲 {done} / {total}", ja: "キャッシュ済み {done} / {total}", ko: "캐시됨 {done} / {total}", fr: "Mis en cache {done} / {total}", de: "Zwischengespeichert {done} / {total}", es: "En caché {done} / {total}", ru: "Кэшировано {done} / {total}", ar: "تم التخزين {done} / {total}" },
    cacheDone: { en: "Caching complete, opening the website...", zh: "缓存完成，正在打开网站...", "zh-Hant": "快取完成，正在開啟網站...", lzh: "儲畢，正啟站...", ja: "キャッシュ完了、ウェブサイトを開きます...", ko: "캐싱 완료, 웹사이트를 엽니다...", fr: "Cache terminé, ouverture du site...", de: "Cache abgeschlossen, Website wird geöffnet...", es: "Caché completa, abriendo el sitio...", ru: "Кэш завершён, открываем сайт...", ar: "اكتمل التخزين المؤقت، جارٍ فتح الموقع..." },
    cacheFail: { en: "Caching skipped, opening the website...", zh: "缓存已跳过，正在打开网站...", "zh-Hant": "已略過快取，正在開啟網站...", lzh: "略儲，正啟站...", ja: "キャッシュをスキップ、サイトを開きます...", ko: "캐싱을 건너뛰고 웹사이트를 엽니다...", fr: "Cache ignoré, ouverture du site...", de: "Cache übersprungen, Website wird geöffnet...", es: "Caché omitida, abriendo el sitio...", ru: "Кэш пропущен, открываем сайт...", ar: "تم تخطي التخزين المؤقت، جارٍ فتح الموقع..." },
    clearCache: { en: "Clear cache", zh: "清理缓存", "zh-Hant": "清理快取", lzh: "清儲", ja: "キャッシュを削除", ko: "캐시 지우기", fr: "Vider le cache", de: "Cache leeren", es: "Borrar caché", ru: "Очистить кэш", ar: "مسح التخزين المؤقت" },
    clearCacheHint: { en: "Clears cached website resources, theme, language and token settings", zh: "清除已缓存的网站资源、主题、语言与令牌等设置", "zh-Hant": "清除已快取的網站資源、主題、語言與權杖等設定", lzh: "清已儲之站物、色、語、令等設", ja: "キャッシュされたリソース、テーマ、言語、トークン設定を削除", ko: "캐시된 리소스, 테마, 언어 및 토큰 설정을 지웁니다", fr: "Efface les ressources en cache, le thème, la langue et le jeton", de: "Löscht zwischengespeicherte Ressourcen, Theme-, Sprach- und Token-Einstellungen", es: "Borra los recursos en caché, el tema, el idioma y el token", ru: "Очищает кэш ресурсов, тему, язык и токен", ar: "يمسح موارد الموقع والسمة واللغة والرمز" },
    clearCacheConfirm: { en: "Tap again to confirm", zh: "再次点击确认清除", "zh-Hant": "再次點擊確認清除", lzh: "復點以定", ja: "もう一度押して確定", ko: "다시 눌러 확인", fr: "Appuyez à nouveau pour confirmer", de: "Erneut tippen zum Bestätigen", es: "Toca de nuevo para confirmar", ru: "Нажмите ещё раз для подтверждения", ar: "اضغط مرة أخرى للتأكيد" },
    clearCacheBusy: { en: "Clearing...", zh: "清除中...", "zh-Hant": "清除中...", lzh: "清中...", ja: "削除中...", ko: "지우는 중...", fr: "Suppression...", de: "Wird gelöscht...", es: "Borrando...", ru: "Очистка...", ar: "جارٍ المسح..." },
    clearCacheDone: { en: "Cache cleared, reloading...", zh: "缓存已清除，正在重新加载...", "zh-Hant": "快取已清除，正在重新載入...", lzh: "儲已清，正復載...", ja: "キャッシュ削除、再読み込み中...", ko: "캐시를 지웠습니다. 다시 로드 중...", fr: "Cache vidé, rechargement...", de: "Cache geleert, wird neu geladen...", es: "Caché borrada, recargando...", ru: "Кэш очищен, перезагрузка...", ar: "تم مسح التخزين المؤقت، جارٍ إعادة التحميل..." }
};

const OTHER_LANGS = [
    { code: "zh-Hant", name: "繁體中文" },
    { code: "lzh", name: "文言" },
    { code: "ja", name: "日本語" },
    { code: "ko", name: "한국어" },
    { code: "fr", name: "Français" },
    { code: "de", name: "Deutsch" },
    { code: "es", name: "Español" },
    { code: "ru", name: "Русский" },
    { code: "ar", name: "العربية" }
];

const RAW_BASE = "https://raw.githubusercontent.com/FueySeek/FueySeek.github.io/main/Projects/tools/FueyApp/";
const DIRECT_BASE = "https://fueyseek.github.io/Projects/tools/FueyApp/";

const CAMPUS_PROXIES = [
    "https://gh-proxy.xjiayun.com/",
    "https://gh.api.99988866.xyz/",
    "https://ghproxy.cfd/",
    "https://gh.chaoyang.icu/",
    "https://gh.acmsz.top/",
    "https://gh.zuoer.xin/",
    "https://hub.whtrys.space/",
    "https://gh.catmak.name/",
    "https://gh.tryxd.cn/",
    "https://cdn.moran233.xyz/",
    "https://gh-proxy.990309.xyz/",
    "https://gh.7gugu.com/"
];

const PREFIX_PROXIES = [
    ...CAMPUS_PROXIES,
    "https://gh-proxy.com/",
    "https://ghfast.top/",
    "https://ghproxy.net/",
    "https://gh.llkk.cc/",
    "https://ghproxy.homeboyc.cn/",
    "https://ghproxy.link/",
    "https://ghp.ci/",
    "https://moeyy.cn/gh-proxy/",
    "https://github.moeyy.xyz/",
    "https://githubproxy.cc/",
    "https://ghproxy.imciel.com/",
    "https://gh.idayer.com/",
    "https://ghproxy.felicity.land/",
    "https://github.mxw.qzz.io/",
    "https://hub.gitmirror.com/",
    "https://ghproxy.cc/",
    "https://gh-proxy.net/",
    "https://ghps.cc/",
    "https://gh-proxy.ygxz.in/",
    "https://ghp.arslantu.xyz/",
    "https://ghproxy.cn/",
    "https://gh.6yit.com/",
    "https://ghproxy.1888866.xyz/",
    "https://gh-proxy.org/"
];

const VERSION_SOURCES = [
    RAW_BASE + "version.js",
    ...PREFIX_PROXIES.slice(0, 6).map(p => p + RAW_BASE + "version.js"),
    "https://cdn.jsdelivr.net/gh/FueySeek/FueySeek.github.io@main/Projects/tools/FueyApp/version.js",
    DIRECT_BASE + "version.js"
];

const MARKET_PAGE_SIZE = 10;
const MARKET_MAX_PAGES = 100;
const MARKET_TRENDING_QUERY = "stars:>5000";
const FUEYSEEK_USER = "FueySeek";
const DOWNLOAD_IDLE_TIMEOUT = 60000;

const SITE_URL = "https://fueyseek.github.io/";
const SITE_ORIGIN = "https://fueyseek.github.io";
const SITE_CACHE_NAME = "fuey-site-cache-v1";
const SITE_EXTRA_ASSETS = ["home/fonts/script.ttf", "home/images/mouse.png"];
const SITE_MAX_ASSETS = 80;
const MIRROR_PREWARM_TIMEOUT = 3000;

const state = {
    cloudVersions: { windows: "", android: "", macos: "", ios: "", linux: "" },
    detectedPlatform: "",
    versionLoadFailed: false,
    downloadBusy: false,
    uiLang: localStorage.getItem("fuey-lang") || "en",
    otherPending: false,
    uiLangBeforeOpen: "en",
    marketState: "idle",
    marketMode: "trending",
    marketResults: [],
    marketDetail: null,
    marketErrorKey: "",
    marketErrorDetail: "",
    marketRequestToken: 0,
    marketQuery: "",
    marketPage: 1,
    marketTotal: 0,
    currentMainTab: "app",
    detailTab: "readme",
    detailData: { readme: null, contributors: null, wiki: null },
    detailLoadToken: 0,
    detailBuilt: false,
    customParsedUrl: "",
    customLastError: "",
    siteCacheBusy: false,
    clearCacheArmed: false,
    clearCacheTimer: null,
    repoFilesState: { path: "", items: null, loading: false, error: "" },
    ghStatusRefreshTimer: null,
    ghCountdownTimer: null,
    ghResetAt: 0,
    mirrorCache: {},
    prewarmInFlight: {},
    lastDownloadBlob: null,
    lastDownloadName: null,
    lastDownloadUrl: null,
    lastDownloadSize: 0
};