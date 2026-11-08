<div align="center">

# ✨ FueySeek.github.io

**The official website and project showcase for the Fuey Project.**

Built with pure vanilla HTML / CSS / JavaScript. No frameworks, no build steps, deployed directly on GitHub Pages.

[![Online](https://img.shields.io/badge/Online-fueyseek.github.io-blue?style=flat-square&logo=googlechrome&logoColor=white)](https://fueyseek.github.io)
[![Repo](https://img.shields.io/badge/GitHub-FueySeek%2FFueySeek.github.io-black?style=flat-square&logo=github)](https://github.com/FueySeek/FueySeek.github.io)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](#)
[![License](https://img.shields.io/badge/License-GPLv3-green?style=flat-square)](https://www.gnu.org/licenses/gpl-3.0.txt)

<br>

**🌐 Switch Language / 切换语言:**

[English](#-english) &nbsp;|&nbsp; 
[简体中文](#-简体中文) &nbsp;|&nbsp; 
[繁體中文](#-繁體中文) &nbsp;|&nbsp; 
[文言](#-文言) &nbsp;|&nbsp; 
[日本語](#-日本語) &nbsp;|&nbsp; 
[한국어](#-한국어) &nbsp;|&nbsp; 
[Français](#-français) &nbsp;|&nbsp; 
[Deutsch](#-deutsch) &nbsp;|&nbsp; 
[Español](#-español) &nbsp;|&nbsp; 
[Русский](#-русский) &nbsp;|&nbsp; 
[العربية](#-العربية)

</div>

---

<h2 id="-english">🇬🇧 English</h2>

### 🌟 Features

**📄 Pages**
- **Home**: Dynamic hero section, update logs, developer list, and embedded expansion area (mini-game + notes).
- **Download**: Project download list, supporting search by name / date / system / access code, with one-click code copy.
- **Other Projects**: List + search, consistent card style with the download page.
- **About Us**: Configurable external links (GitHub, skins, repository, licenses, etc.).

**⚙️ Settings Panel**
- **Theme Switch**: Light / Dark mode with smooth liquid transition animations.
- **Data Source**: Switch between loading data from GitHub Cloud or Local.
- **Multi-language**: 11 built-in languages, switching seamlessly in real-time.
- **Left-handed Mode**: Global layout mirroring for the settings panel, hero section, cards, and scroll buttons.
- **Settings Import/Export**: Export local configurations as a `.js` file or import external configurations (with strict validation and high-risk confirmation).
- **Version Check**: One-click comparison between local and cloud version numbers.
- **Security Indicator**: Real-time monitoring of custom injections; the indicator dims when enabled.

**🎮 Hidden Easter Egg**
Click the "Under Construction" card in the homepage expansion area **3 times consecutively** to launch the built-in **Dino Run mini-game**. The game supports spacebar/click jumping, progressive difficulty, day/night cycles, and invincibility. The high score is saved in `localStorage`.

### 🛠️ Tech Stack
- **Core**: Vanilla HTML5 / CSS3 / ES2018+
- **Architecture**: No frameworks, no build tools, no external dependencies.
- **Communication**: Uses `postMessage` for bidirectional communication between the main page and two `iframe` expansion pages.

### 📁 Directory Structure
```text
FueySeek.github.io/
├── index.html              Home page
├── download.html           Download page
├── open.html               About Us page
├── other.html              Other Projects page
├── embed.html              Embedded expansion: Dino game
├── embed-notes.html        Embedded expansion: Notes box
├── css/                    Stylesheets
├── js/                     Core logic and translations
├── data/                   Data files (logs, lists, version)
├── images/                 Assets (icons, cursors, dino, etc.)
└── fonts/                  Handwriting-style font
```

### 📦 Settings Import & Export
Exported files are named `FueySettings.js` and contain the current configuration.
- **Export Rules**: No timestamps, no hidden persistent settings (like Dino high score).
- **Import Rules**: Strict validation of format. Risk confirmation dialog for custom code (`custom.css`, `custom.js`). Smart correction automatically enables `apply-customization` if content is present.

### 🛡️ Security Policy
`js/rule.js` intercepts right-clicks, text selection (except inputs), copy/cut, and dev tools shortcuts (`F12`, `Ctrl+Shift+I`, etc.), displaying a toast. Normal browsing (`F5`, `F11`) is unaffected.

### 📄 License & Disclaimer
- **Code**: [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.txt)
- **Fonts**: [SIL OFL 1.1](https://github.com/Warren2060/ChillRound/)
- **EULA**: [`data/eula.txt`](data/eula.txt)
- **Disclaimer**: Content related to other services is prioritized subject to the terms of service and user agreements of the respective service providers.

---

<h2 id="-简体中文">🇨🇳 简体中文</h2>

### 🌟 功能特性

**📄 页面展示**
- **首页**：动态主视觉、更新日志、开发者名单、内嵌扩展区（小游戏 + 提示框）。
- **下载页**：项目下载列表，支持名称 / 日期 / 系统 / 提取码搜索及一键复制。
- **其它项目页**：列表 + 搜索，与下载页保持一致的卡片风格。
- **关于我们页**：可配置的外部链接列表（GitHub、皮肤、仓库、许可证等）。

**⚙️ 设置面板**
- **主题切换**：浅色 / 深色模式，带有平滑液态过渡动画。
- **数据源切换**：支持从 GitHub 云端或本地加载数据。
- **多语言支持**：内置 11 种语言，实时无缝切换。
- **左撇子模式**：全局布局镜像，设置面板、主视觉、卡片等自动靠左。
- **设置导入/导出**：导出本地配置为 `.js` 文件，或导入外部配置（带严格校验与高危确认）。
- **版本检测**：一键对比本地与云端版本号。
- **安全指示灯**：实时监控自定义注入状态，开启时指示灯变灰暗置。

**🎮 隐藏彩蛋**
在首页扩展区的 "Under Construction" 卡片上**连续点击 3 次**，即可启动内置的**小恐龙跑酷游戏**。游戏支持空格跳跃、昼夜交替、道具加速与无敌状态，最高分保存在 `localStorage` 中。

### 🛠️ 技术栈
- **核心**：原生 HTML5 / CSS3 / ES2018+
- **架构**：无框架、无打包工具、无外部依赖。
- **通信**：使用 `postMessage` 实现主页面与扩展页之间的双向通信。

### 📁 目录结构
```text
FueySeek.github.io/
├── index.html              首页
├── download.html           下载页
├── open.html               关于我们页
├── other.html              其它项目页
├── embed.html              内嵌扩展：小恐龙游戏
├── embed-notes.html        内嵌扩展：提示框
├── css/                    样式表
├── js/                     核心逻辑与翻译
├── data/                   数据文件
├── images/                 静态资源
└── fonts/                  手写字体
```

### 📦 设置导入与导出
导出文件为 `FueySettings.js`。
- **导出规则**：不包含时间戳，不包含隐藏的持久化设置（如小恐龙最高分）。
- **导入规则**：严格校验格式。检测到自定义代码时会弹出高危确认。智能修正机制会自动将含有内容的配置开启自定义开关。

### 🛡️ 安全策略
`js/rule.js` 会拦截右键菜单、文本选中（输入框除外）、复制/剪切以及开发者工具快捷键（`F12`等），并弹出提示。正常浏览行为不受影响。

### 📄 许可与声明
- **代码**：[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.txt)
- **字体**：[SIL OFL 1.1](https://github.com/Warren2060/ChillRound/)
- **协议**：[`data/eula.txt`](data/eula.txt)
- **声明**：涉及其它服务相关的内容，优先受对应服务提供商的用户协议与服务条款约束。

---

<h2 id="-繁體中文">🇭🇰 繁體中文</h2>

### 🌟 功能特性

**📄 頁面展示**
- **首頁**：動態主視覺、更新日誌、開發者名單、內嵌擴展區。
- **下載頁**：專案下載列表，支援搜尋與一鍵複製提取碼。
- **其它專案頁**：列表 + 搜尋，與下載頁風格一致。
- **關於我們頁**：可配置的外部連結列表。

**⚙️ 設定面板**
- **主題切換**：淺色 / 深色模式，平滑過渡動畫。
- **資料來源切換**：支援 GitHub 雲端或本地載入。
- **多語言支援**：內建 11 種語言，即時切換。
- **左手模式**：全域佈局鏡像。
- **設定匯入/匯出**：支援 `.js` 格式，附帶嚴格校驗與高風險確認。
- **版本檢測**：對比本地與雲端版本。
- **安全指示燈**：監控自訂注入狀態。

**🎮 隱藏彩蛋**
在首頁擴展區的卡片上連續點擊 3 次，即可啟動內建的小恐龍跑酷遊戲，最高分保存在 `localStorage` 中。

### 🛠️ 技術棧
- **核心**：原生 HTML5 / CSS3 / ES2018+
- **架構**：無框架、無打包工具。
- **通訊**：使用 `postMessage` 實現雙向通訊。

### 📦 設定匯入與匯出
匯出檔案為 `FueySettings.js`。導入時嚴格校驗格式，包含自訂代碼時會彈出確認，並具備智慧修正機制。

### 🛡️ 安全策略
攔截右鍵選單、文字選取、複製/剪下及開發者工具快捷鍵，確保頁面安全。

### 📄 許可與聲明
- **代碼**：[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.txt)
- **字體**：[SIL OFL 1.1](https://github.com/Warren2060/ChillRound/)
- **聲明**：涉及其它服務相關的內容，優先受對應服務提供者的使用者協議與服務條款約束。

---

<h2 id="-文言">🏛️ 文言</h2>

### 🌟 功能

**📄 頁面**
- **首頁**：主視覺、日誌、作者、擴展區。
- **下載**：專案之列，可索名、日、統、密，一鍵錄密。
- **他項**：列表與索，形制同下載。
- **吾輩**：外鏈之列。

**⚙️ 設置**
- **色**：淺深之替，過渡甚滑。
- **源**：GitHub 雲端或本地。
- **語**：十一語，實時易之。
- **左撇**：全局鏡像。
- **出入設**：出為 `.js`，入有嚴校與危警。
- **查版**：比本地與雲端。
- **安燈**：察自定之注。

**🎮 隱彩**
點首頁擴展之卡三，啟恐龍之戲，高分存於本地。

### 📦 設定出入
出為 `FueySettings.js`。入必嚴校，含危碼則警，並有智修之能。

### 📄 許可與聲明
- **代碼**：[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.txt)
- **字體**：[SIL OFL 1.1](https://github.com/Warren2060/ChillRound/)
- **聲明**：涉及其它服務之事，優先受其提供者之約、款所約束。

---

<h2 id="-日本語">🇯🇵 日本語</h2>

### 🌟 機能

**📄 ページ**
- **ホーム**：ヒーローセクション、更新履歴、開発者リスト、埋め込み拡張エリア（ミニゲーム）。
- **ダウンロード**：プロジェクトリスト、検索機能、コードのワンクリックコピー。
- **その他**：リストと検索。
- **私たちについて**：リンクリスト。

**⚙️ 設定パネル**
- **テーマ**：ライト / ダークモード。
- **データソース**：GitHub またはローカル。
- **多言語**：11言語対応。
- **左利きモード**：レイアウトのミラーリング。
- **設定のインポート/エクスポート**：`.js` ファイル形式、厳格な検証とリスク確認付き。
- **バージョン確認**：クラウドとの比較。
- **セキュリティインジケーター**：カスタム注入の監視。

**🎮 隠し要素**
ホームのカードを3回クリックすると、恐竜のミニゲームが起動します。

### 📦 設定のインポート/エクスポート
エクスポートファイルは `FueySettings.js`。インポート時に厳格な検証とリスク確認を行います。

### 📄 ライセンスと免責事項
- **コード**：[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.txt)
- **フォント**：[SIL OFL 1.1](https://github.com/Warren2060/ChillRound/)
- **免責**：他のサービスに関連するコンテンツは、それぞれのサービス提供者の利用規約が優先されます。

---

<h2 id="-한국어">🇰🇷 한국어</h2>

### 🌟 기능

**📄 페이지**
- **홈**: 히어로 섹션, 업데이트 로그, 개발자 목록, 내장 확장 영역 (미니 게임).
- **다운로드**: 프로젝트 목록, 검색 기능, 코드 원클릭 복사.
- **기타 프로젝트**: 목록 및 검색.
- **소개**: 링크 목록.

**⚙️ 설정 패널**
- **테마**: 라이트 / 다크 모드.
- **데이터 소스**: GitHub 또는 로컬.
- **다국어**: 11개 언어 지원.
- **왼손잡이 모드**: 레이아웃 미러링.
- **설정 가져오기/내보내기**: `.js` 파일 형식, 엄격한 유효성 검사 및 위험 확인.
- **버전 확인**: 클라우드와 비교.
- **보안 표시기**: 사용자 정의 주입 모니터링.

**🎮 숨겨진 이스터 에그**
홈의 카드를 3번 연속 클릭하면 공룡 미니 게임이 시작됩니다.

### 📦 설정 가져오기/내보내기
내보낸 파일은 `FueySettings.js`입니다. 가져올 때 엄격한 유효성 검사와 위험 확인을 수행합니다.

### 📄 라이선스 및 면책 조항
- **코드**: [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.txt)
- **글꼴**: [SIL OFL 1.1](https://github.com/Warren2060/ChillRound/)
- **면책 조항**: 다른 서비스와 관련된 콘텐츠는 해당 서비스 제공업체의 이용 약관이 우선합니다.

---

<h2 id="-français">🇫🇷 Français</h2>

### 🌟 Fonctionnalités

**📄 Pages**
- **Accueil** : Section héros, journal des mises à jour, liste des développeurs, zone d'extension intégrée.
- **Téléchargement** : Liste des projets, recherche, copie de code en un clic.
- **Autres projets** : Liste et recherche.
- **À propos** : Liste de liens.

**⚙️ Panneau de paramètres**
- **Thème** : Mode clair / sombre.
- **Source de données** : GitHub ou Local.
- **Multilingue** : 11 langues prises en charge.
- **Mode gaucher** : Mise en miroir de la mise en page.
- **Import/Export des paramètres** : Format de fichier `.js`, validation stricte et confirmation des risques.
- **Vérification de version** : Comparaison avec le cloud.
- **Indicateur de sécurité** : Surveillance des injections personnalisées.

**🎮 Easter Egg Caché**
Cliquez 3 fois sur la carte d'accueil pour lancer le mini-jeu du dinosaure.

### 📦 Import/Export des paramètres
Le fichier exporté est `FueySettings.js`. L'importation effectue une validation stricte et une confirmation des risques.

### 📄 Licence et Avertissement
- **Code** : [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.txt)
- **Polices** : [SIL OFL 1.1](https://github.com/Warren2060/ChillRound/)
- **Avertissement** : Le contenu lié à d'autres services est prioritairement soumis aux conditions d'utilisation des fournisseurs concernés.

---

<h2 id="-deutsch">🇩🇪 Deutsch</h2>

### 🌟 Funktionen

**📄 Seiten**
- **Startseite**: Hero-Bereich, Update-Protokoll, Entwicklerliste, eingebetteter Erweiterungsbereich.
- **Download**: Projektliste, Suche, Ein-Klick-Code-Kopie.
- **Andere Projekte**: Liste und Suche.
- **Über uns**: Linkliste.

**⚙️ Einstellungsfeld**
- **Thema**: Hell- / Dunkelmodus.
- **Datenquelle**: GitHub oder Lokal.
- **Mehrsprachig**: 11 Sprachen unterstützt.
- **Linkshänder-Modus**: Layout-Spiegelung.
- **Einstellungen Import/Export**: `.js`-Dateiformat, strenge Validierung und Risikobestätigung.
- **Versionsprüfung**: Vergleich mit der Cloud.
- **Sicherheitsindikator**: Überwachung benutzerdefinierter Injektionen.

**🎮 Verstecktes Easter Egg**
Klicken Sie dreimal auf die Startseitenkarte, um das Dinosaurier-Minispiel zu starten.

### 📦 Einstellungen Import/Export
Die exportierte Datei ist `FueySettings.js`. Beim Import erfolgt eine strenge Validierung und Risikobestätigung.

### 📄 Lizenz & Haftungsausschluss
- **Code**: [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.txt)
- **Schriftarten**: [SIL OFL 1.1](https://github.com/Warren2060/ChillRound/)
- **Haftungsausschluss**: Inhalte, die sich auf andere Dienste beziehen, unterliegen vorrangig den Nutzungsbedingungen der jeweiligen Anbieter.

---

<h2 id="-español">🇪🇸 Español</h2>

### 🌟 Características

**📄 Páginas**
- **Inicio**: Sección principal, registro de actualizaciones, lista de desarrolladores, área de expansión integrada.
- **Descarga**: Lista de proyectos, búsqueda, copia de código con un clic.
- **Otros proyectos**: Lista y búsqueda.
- **Sobre nosotros**: Lista de enlaces.

**⚙️ Panel de ajustes**
- **Tema**: Modo claro / oscuro.
- **Fuente de datos**: GitHub o Local.
- **Multiidioma**: 11 idiomas compatibles.
- **Modo zurdo**: Reflejo de diseño.
- **Importar/Exportar ajustes**: Formato `.js`, validación estricta y confirmación de riesgos.
- **Comprobación de versión**: Comparación con la nube.
- **Indicador de seguridad**: Monitoreo de inyecciones personalizadas.

**🎮 Huevo de Pascua Oculto**
Haz clic 3 veces en la tarjeta de inicio para iniciar el minijuego del dinosaurio.

### 📦 Importar/Exportar ajustes
El archivo exportado es `FueySettings.js`. La importación realiza una validación estricta y confirmación de riesgos.

### 📄 Licencia y Descargo de responsabilidad
- **Código**: [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.txt)
- **Fuentes**: [SIL OFL 1.1](https://github.com/Warren2060/ChillRound/)
- **Descargo**: El contenido relacionado con otros servicios está sujeto prioritariamente a los términos de servicio de los respectivos proveedores.

---

<h2 id="-русский">🇷🇺 Русский</h2>

### 🌟 Особенности

**📄 Страницы**
- **Главная**: Главный экран, журнал обновлений, список разработчиков, встроенная область расширения.
- **Скачать**: Список проектов, поиск, копирование кода в один клик.
- **Другие проекты**: Список и поиск.
- **О нас**: Список ссылок.

**⚙️ Панель настроек**
- **Тема**: Светлый / темный режим.
- **Источник данных**: GitHub или локальный.
- **Мультиязычность**: Поддержка 11 языков.
- **Режим для левшей**: Зеркальное отражение интерфейса.
- **Импорт/Экспорт настроек**: Формат `.js`, строгая проверка и подтверждение рисков.
- **Проверка версии**: Сравнение с облаком.
- **Индикатор безопасности**: Мониторинг пользовательских инъекций.

**🎮 Скрытая пасхалка**
Нажмите 3 раза на карточку на главной странице, чтобы запустить мини-игру с динозавриком.

### 📦 Импорт/Экспорт настроек
Экспортируемый файл — `FueySettings.js`. При импорте выполняется строгая проверка и подтверждение рисков.

### 📄 Лицензия и Отказ от ответственности
- **Код**: [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.txt)
- **Шрифты**: [SIL OFL 1.1](https://github.com/Warren2060/ChillRound/)
- **Отказ**: Контент, связанный с другими сервисами, в первую очередь регулируется условиями обслуживания соответствующих поставщиков.

---

<h2 id="-العربية">🇸🇦 العربية</h2>

### 🌟 الميزات

**📄 الصفحات**
- **الرئيسية**: قسم البطل، سجل التحديثات، قائمة المطورين، منطقة التوسيع المدمجة.
- **تنزيل**: قائمة المشاريع، البحث، نسخ الكود بنقرة واحدة.
- **مشاريع أخرى**: القائمة والبحث.
- **من نحن**: قائمة الروابط.

**⚙️ لوحة الإعدادات**
- **السمة**: الوضع الفاتح / الداكن.
- **مصدر البيانات**: GitHub أو محلي.
- **متعدد اللغات**: يدعم 11 لغة.
- **وضع اليد اليسرى**: عكس التخطيط.
- **استيراد/تصدير الإعدادات**: تنسيق ملف `.js`، تحقق صارم وتأكيد المخاطر.
- **التحقق من الإصدار**: المقارنة مع السحابة.
- **مؤشر الأمان**: مراقبة الحقن المخصصة.

**🎮 بيضة عيد الفصح المخفية**
انقر 3 مرات على بطاقة الصفحة الرئيسية لبدء لعبة الديناصور المصغرة.

### 📦 استيراد/تصدير الإعدادات
الملف الذي تم تصديره هو `FueySettings.js`. يقوم الاستيراد بإجراء تحقق صارم وتأكيد المخاطر.

### 📄 الترخيص وإخلاء المسؤولية
- **الكود**: [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.txt)
- **الخطوط**: [SIL OFL 1.1](https://github.com/Warren2060/ChillRound/)
- **إخلاء المسؤولية**: تخضع المحتويات المتعلقة بالخدمات الأخرى بشكل أساسي لشروط الخدمة الخاصة بمقدمي الخدمات المعنيين.
