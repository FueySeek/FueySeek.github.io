# Fuey Mini Browser

![Static](https://img.shields.io/badge/static-HTML%20%2F%20CSS%20%2F%20JS-1a73e8)
![Languages](https://img.shields.io/badge/languages-13-34c759)
![No backend](https://img.shields.io/badge/backend-none-8b5cf6)
![License](https://img.shields.io/badge/license-TBD-d93025)

A local-first, static, mobile-friendly browser front end.  
一个本地优先、纯静态、面向移动端的浏览器前端。

[简体中文](#简体中文) · [繁體中文](#繁體中文) · [文言文](#文言文) · [English](#english) · [日本語](#日本語) · [한국어](#한국어) · [Français](#français) · [Deutsch](#deutsch) · [Español](#español) · [Русский](#русский) · [Português](#português) · [Italiano](#italiano) · [العربية](#العربية)

> API reference, plugin development and known issues are documented once below in [Public API](#public-api--公开-api) and [Known Issues](#known-issues--已知问题).

---

## 简体中文

Fuey Mini Browser 是一个运行在浏览器里的轻量浏览器前端，不需要后端，不需要账号。它提供标签页、搜索、书签、快捷方式、历史、Ai 对话、页面翻译、主题、壁纸、字体、插件和断网小游戏。

### 功能

- 多标签页、标签分组、历史前进/后退
- 搜索引擎切换、自定义搜索引擎、GitHub 搜索
- 书签、快捷方式、密码、下载记录
- 站点图标、站点标题、阅读模式、代理阅读
- Ai 对话、页面翻译、Ai 工作台、自定义模型厂商
- 13 种界面语言，支持系统语言跟随
- 多主题、自定义主题、颜色球取色、磨砂玻璃
- 本地字体预览与字体许可证页面
- 内置插件与 ZIP 插件导入
- 断网小恐龙游戏，主题/语言/版本与主界面同步

### 运行

```bash
cd Web
python -m http.server 8080
# 打开 http://127.0.0.1:8080
```

也可以直接部署到 GitHub Pages、Cloudflare Pages、Nginx 或任意静态文件服务器。  
不建议直接双击 `index.html`：`file://` 下的跨域请求、更新检查和部分 API 会失败。

### 目录

```text
index.html              入口
update.js               本地版本信息
css/                    主题、组件、页面、移动端样式
js/core.js              工具、翻译、存储、图标、弹窗、选择器
js/browser.js           标签、导航、网页容器、网页栏、主题应用
js/pages.js             主页、设置、关于、GitHub、插件、字体证书、游戏页
js/ai-drawer.js         Ai 抽屉、上下文注入、翻译、Markdown 渲染
js/main.js              启动、协议、新手引导、更新检查
plugins/                内置插件 + 插件管理器
game/                   断网小游戏（embed.html）
fonts/                  本地字体与 fonts.css
images/                 Ai 厂商图标、用户壁纸
assets/                 图标等静态资源
```

### 数据

所有数据优先保存在浏览器本地：

- 普通模式：`localStorage`
- 无痕模式：`sessionStorage`，关闭窗口即清除
- 数据键统一使用 `fuey.` 前缀；游戏使用 `fuey-` 前缀
- 「清除所有数据」会清除应用设置、书签、历史、Ai 配置、游戏最高分等

### 许可证

仓库目前没有 `LICENSE` 文件。开源前请补充明确的许可证（例如 MIT、Apache-2.0 或自定义许可证），并确认字体、图片、游戏素材的再分发许可。

---

## 繁體中文

Fuey Mini Browser 是一個純靜態、本地優先的瀏覽器前端，提供分頁、搜尋、書籤、捷徑、歷史、Ai 對話、翻譯、主題、桌布、字型、外掛與離線小遊戲。

- 執行：使用任意靜態伺服器開啟 `index.html`
- 資料：一般模式使用 `localStorage`，無痕模式使用 `sessionStorage`
- 語言：支援 13 種介面語言
- 外掛：內建外掛與 ZIP 匯入
- 遊戲：離線小恐龍，主題、語言、版本與主介面同步
- 授權：目前未加入 `LICENSE`，開源前請補上

完整 API 與已知問題請見下方 [Public API](#public-api--公开-api) 與 [Known Issues](#known-issues--已知问题)。

---

## 文言文

Fuey Mini Browser 者，純靜態、本地優先之旅遊器前端也。具分頁、尋、書籤、捷徑、閱歷、Ai 對、譯、主題、壁紙、字、插件與離線小戲。

- 行：以靜態伺服器開 `index.html`
- 數據：常時用 `localStorage`，無痕用 `sessionStorage`
- 語：十三種
- 戲：離線小恐龍，主題、語、版本與主界面相通
- 授權：今無 `LICENSE`，開源前當補

API 與已知之弊，見下 [Public API](#public-api--公开-api)、[Known Issues](#known-issues--已知问题)。

---

## English

Fuey Mini Browser is a static, local-first browser front end with tabs, search, bookmarks, shortcuts, history, Ai chat, page translation, themes, wallpapers, fonts, plugins and an offline dinosaur game.

### Features

- Tabs, tab groups, back/forward history
- Search engines, custom engine, GitHub search
- Bookmarks, shortcuts, passwords, downloads
- Site icons and titles, reader mode, proxy reader
- Ai chat, page translation, Ai workspace, custom providers
- 13 UI languages with system-language following
- Themes, custom themes, color-ball picker, frosted glass UI
- Local font preview and font license page
- Built-in plugins and ZIP plugin import
- Offline dinosaur game with theme/language/version sync

### Run

```bash
cd Web
python -m http.server 8080
# open http://127.0.0.1:8080
```

Deploy to GitHub Pages, Cloudflare Pages, Nginx or any static host. Opening `index.html` via `file://` is not recommended because of CORS, update checks and API restrictions.

### License

No `LICENSE` file is present yet. Add one before publishing. Check the licenses of bundled fonts, images and game assets.

---

## 日本語

Fuey Mini Browser は静的配信できるローカル優先のブラウザフロントエンドです。タブ、検索、ブックマーク、履歴、Ai チャット、翻訳、テーマ、壁紙、フォント、プラグイン、オフラインゲームを備えます。

- 起動：任意の静的サーバーで `index.html` を開く
- データ：通常は `localStorage`、シークレットは `sessionStorage`
- 言語：13 言語
- ゲーム：テーマ・言語・バージョンを同期
- ライセンス：`LICENSE` 未追加。公開前に追加してください

API と既知の問題は下の [Public API](#public-api--公开-api) と [Known Issues](#known-issues--已知问题) を参照してください。

---

## 한국어

Fuey Mini Browser는 정적 호스팅이 가능한 로컬 우선 브라우저 프런트엔드입니다. 탭, 검색, 북마크, 기록, Ai 채팅, 번역, 테마, 배경, 글꼴, 플러그인, 오프라인 게임을 제공합니다.

- 실행: 정적 서버로 `index.html` 열기
- 데이터: 일반 모드는 `localStorage`, 시크릿 모드는 `sessionStorage`
- 언어: 13개
- 게임: 테마·언어·버전 동기화
- 라이선스: `LICENSE` 없음. 공개 전 추가 필요

API와 알려진 문제는 아래 [Public API](#public-api--公开-api), [Known Issues](#known-issues--已知问题)를 참고하세요.

---

## Français

Fuey Mini Browser est une interface de navigateur statique et locale-first : onglets, recherche, favoris, historique, Ai, traduction, thèmes, fonds d’écran, polices, plugins et jeu hors ligne.

- Lancement : serveur statique puis `index.html`
- Données : `localStorage` en normal, `sessionStorage` en navigation privée
- Langues : 13
- Jeu : thème, langue et version synchronisés
- Licence : aucun `LICENSE` pour l’instant

Voir [Public API](#public-api--公开-api) et [Known Issues](#known-issues--已知问题).

---

## Deutsch

Fuey Mini Browser ist ein statisches, lokal orientiertes Browser-Frontend mit Tabs, Suche, Lesezeichen, Verlauf, Ai-Chat, Übersetzung, Themes, Hintergründen, Schriften, Plugins und Offline-Spiel.

- Start: über einen statischen Server `index.html` öffnen
- Daten: normal `localStorage`, Inkognito `sessionStorage`
- Sprachen: 13
- Spiel: Theme, Sprache und Version synchron
- Lizenz: noch keine `LICENSE`-Datei

Siehe [Public API](#public-api--公开-api) und [Known Issues](#known-issues--已知问题).

---

## Español

Fuey Mini Browser es un frontend de navegador estático y local-first con pestañas, búsqueda, marcadores, historial, Ai, traducción, temas, fondos, fuentes, plugins y juego sin conexión.

- Ejecutar: servidor estático y abrir `index.html`
- Datos: `localStorage` normal, `sessionStorage` en incógnito
- Idiomas: 13
- Juego: tema, idioma y versión sincronizados
- Licencia: falta `LICENSE`

Consulta [Public API](#public-api--公开-api) y [Known Issues](#known-issues--已知问题).

---

## Русский

Fuey Mini Browser — статический локальный браузерный интерфейс с вкладками, поиском, закладками, историей, Ai-чатом, переводом, темами, обоями, шрифтами, плагинами и офлайн-игрой.

- Запуск: статический сервер и `index.html`
- Данные: `localStorage` обычно, `sessionStorage` в инкогнито
- Языки: 13
- Игра: синхронизация темы, языка и версии
- Лицензия: `LICENSE` пока нет

См. [Public API](#public-api--公开-api) и [Known Issues](#known-issues--已知问题).

---

## Português

Fuey Mini Browser é um frontend de navegador estático e local-first com abas, pesquisa, favoritos, histórico, Ai, tradução, temas, papéis de parede, fontes, plugins e jogo offline.

- Executar: servidor estático e abrir `index.html`
- Dados: `localStorage` normal, `sessionStorage` anônimo
- Idiomas: 13
- Jogo: tema, idioma e versão sincronizados
- Licença: falta `LICENSE`

Veja [Public API](#public-api--公开-api) e [Known Issues](#known-issues--已知问题).

---

## Italiano

Fuey Mini Browser è un frontend browser statico e local-first con schede, ricerca, segnalibri, cronologia, Ai, traduzione, temi, sfondi, font, plugin e gioco offline.

- Avvio: server statico e `index.html`
- Dati: `localStorage` normale, `sessionStorage` in incognito
- Lingue: 13
- Gioco: tema, lingua e versione sincronizzati
- Licenza: manca `LICENSE`

Vedi [Public API](#public-api--公开-api) e [Known Issues](#known-issues--已知问题).

---

## العربية

Fuey Mini Browser واجهة متصفح ثابتة تعمل محلياً، وتضم علامات تبويب وبحثاً ومفضلة وسجلاً وAi وترجمة وسمات وخلفيات وخطوطاً وإضافات ولعبة دون اتصال.

- التشغيل: خادم ملفات ثابت ثم `index.html`
- البيانات: `localStorage` عادةً، و`sessionStorage` في التصفح المتخفي
- اللغات: 13
- اللعبة: تزامن السمة واللغة والإصدار
- الترخيص: لا يوجد `LICENSE` بعد

راجع [Public API](#public-api--公开-api) و[Known Issues](#known-issues--已知问题).

---

## Public API / 公开 API

All APIs are exposed as globals after the application boots.

```js
window.Core      // utilities, translations, stores, icons, UI helpers
window.Browser   // tabs, routing, web view, themes
window.App       // app-level actions (Ai drawer, agreement, GitHub browser)
window.FueyPlugins // built-in plugin lifecycle
```

### Core

| API | Description |
|---|---|
| `Core.VERSION` | Current app version string |
| `Core.isIncognito` | Whether the current window is incognito (`?incognito=1`) |
| `Core.LANGS` | Supported language list `{code,name}` |
| `Core.t(key, vars)` | Translate a key with optional `{name}` interpolation |
| `Core.resolveLang(code)` | Resolve `system` / language code to a supported code |
| `Core.settingsStore` | Persistent settings store |
| `Core.bookmarksStore` | Bookmarks |
| `Core.shortcutsStore` | Home shortcuts |
| `Core.historyStore` | Browsing history |
| `Core.downloadsStore` | Download records |
| `Core.passwordsStore` | Encrypted password vault |
| `Core.chatStore` | Ai conversation |
| `Core.aiStore` | Ai provider / model configuration |
| `Core.githubStore` | GitHub search state |
| `Core.customThemesStore` | User themes |
| `Core.pluginsStore` | Imported ZIP plugins |
| `Core.builtinPluginsStore` | Built-in plugin enabled state |
| `Core.createSelect(options)` | App-styled select; returns `{el,getValue,setValue,setItems}` |
| `Core.openModal(options)` | App modal; returns `{close}` |
| `Core.confirmDialog(text, onConfirm, opts)` | Confirmation modal |
| `Core.toast(message, type)` | Toast; `type` can be `error` |
| `Core.copyText(text)` | Copy to clipboard |
| `Core.escapeHtml(text)` | HTML escape |
| `Core.uid()` | Unique id |
| `Core.formatDate(value)` | Format date |
| `Core.faviconImg(url, cls)` | Favicon `<img>` markup |
| `Core.ensureTitle(url, done)` | Fetch and cache page title |
| `Core.githubHeaders(token)` | GitHub API headers |
| `Core.modelsEndpoint(provider)` | Model-list endpoint helper |
| `Core.clearAll()` | Clear all local app data |
| `Core.clearBrowsingData()` | Clear browsing data only |
| `Core.ICONS` | Inline SVG icon map |

#### Stores

```js
const value = Core.settingsStore.get();
Core.settingsStore.set({ theme: 'dark' });
Core.settingsStore.set((state) => ({ ...state, language: 'en-US' }));

const unsubscribe = Core.settingsStore.subscribe((state) => {
  console.log(state.theme);
});
unsubscribe();
```

`set` accepts an object or an updater function. Stores persist according to normal/incognito mode.

#### Modal

```js
Core.openModal({
  title: 'Example',
  body: document.createElement('div'),
  confirmText: 'Save',
  cancelText: 'Cancel',
  onConfirm() {
    return true; // false keeps the modal open
  }
});
```

#### Select

```js
const select = Core.createSelect({
  value: 'en-US',
  width: '240px',
  items: [
    { value: 'en-US', label: 'English' },
    { value: 'zh-CN', label: '简体中文' }
  ],
  onChange(value) {
    console.log(value);
  }
});
document.body.append(select.el);
```

Items may include `fontFamily` for font-preview menus.

### Browser

| API | Description |
|---|---|
| `Browser.registerPage(route, definition)` | Register an in-app page |
| `Browser.getPage(route)` | Get page definition |
| `Browser.navigatePage(route)` | Navigate current tab to a page |
| `Browser.openUrl(url)` | Open a URL in the current tab |
| `Browser.newTab(entry)` | Create a tab; entry defaults to home |
| `Browser.closeTab(id)` | Close a tab |
| `Browser.activateTab(id)` | Activate a tab |
| `Browser.reorderTabs(fromId,toId)` | Reorder tabs |
| `Browser.currentTab()` | Current tab object |
| `Browser.currentEntry()` | Current `{kind:'page',route}` or `{kind:'web',url}` |
| `Browser.back()` / `Browser.forward()` | History navigation |
| `Browser.refresh()` | Re-render current view |
| `Browser.getCurrentUrl()` | Current web URL or `''` |
| `Browser.getPageText()` | Reader-mode text, max ~8000 chars |
| `Browser.renderMarkdown(text)` | Markdown to safe HTML |
| `Browser.openTabsSheet()` | Open tab sheet |
| `Browser.openGameOverlay()` | Open the offline game over the home page |
| `Browser.applyTheme()` | Re-apply theme and home background |
| `Browser.applyHomeBackground()` | Re-apply only home background |
| `Browser.syncGameFrames()` | Sync theme/language/version into game iframes |
| `Browser.openCreateGroup()` | Create tab group dialog |
| `Browser.openBookmarkDialog()` | Add bookmark dialog |
| `Browser.applyAccessibility(settings)` | Apply accessibility settings |
| `Browser.init()` | Boot browser module |

#### Page example

```js
Browser.registerPage('/hello', {
  titleKey: 'plugins',
  icon: 'plugin',
  render(container) {
    const el = document.createElement('div');
    el.className = 'page';
    el.innerHTML = '<div class="page-inner"><h2>Hello</h2></div>';
    container.append(el);
    return {
      destroy() {
        // cleanup listeners
      }
    };
  }
});

Browser.navigatePage('/hello');
```

`titleKey` is resolved with `Core.t`; `icon` is a key in `Core.ICONS`.

### App

| API | Description |
|---|---|
| `App.openAiDrawer()` | Open Ai drawer |
| `App.closeAiDrawer()` | Close Ai drawer |
| `App.openAiTranslate()` | Translate current page through Ai |
| `App.openAiSend(text)` | Send a visible user message |
| `App.openAiTask(label, prompt)` | Send visible label + hidden English task prompt |
| `App.openGithubRepo('owner/repo')` | Open GitHub file browser |
| `App.getAgreement(code)` | Get agreement text for a language |

### Plugins

Built-in plugins live in `plugins/*.js` and register themselves:

```js
window.FueyPlugins.register('my-plugin', {
  activate(manual) {
    // manual is true when enabled from the plugin page
  },
  deactivate() {
    // cleanup
  }
});
```

| API | Description |
|---|---|
| `FueyPlugins.register(id, api)` | Register a plugin with `activate` / `deactivate` |
| `FueyPlugins.setEnabled(id, enabled)` | Enable/disable and call lifecycle |
| `FueyPlugins.isEnabled(id)` | Read enabled state |
| `FueyPlugins.list()` | Built-in plugin definitions |
| `FueyPlugins.boot()` | Activate persisted enabled plugins |

Built-in metadata:

```js
Core.BUILTIN_PLUGINS = [
  { id: 'fullscreen', nameKey: 'pluginFullscreen', descKey: 'pluginFullscreenDesc' },
  { id: 'camera-safe', nameKey: 'pluginCamera', descKey: 'pluginCameraDesc' },
  { id: 'ai-work', nameKey: 'pluginAiWork', descKey: 'pluginAiWorkDesc' }
];
```

#### ZIP plugin format

Upload from Settings → Plugins → Add:

```text
my-plugin.zip
├── index.js
└── manifest.json   (optional)
```

`manifest.json`:

```json
{ "name": "My Plugin", "version": "1.0.0" }
```

`index.js` is executed once with the arguments `(App, Core, Browser)`. There is no sandbox, permission system or unload hook for imported plugins; only register lifecycle handlers if needed.

### Update protocol

`update.js` must define:

```js
window.FUEY_UPDATE = {
  version: "v26.11.28.0",
  url: "https://github.com/FueySeek/Fuey-Mini-Browser"
};
```

Checked URLs:

1. `raw.githubusercontent.com/FueySeek/Fuey-Mini-Browser/main/update.js`
2. `raw.githubusercontent.com/FueySeek/Fuey-Mini-Browser/master/update.js`
3. `fueyseek.github.io/Fuey-Mini-Browser/update.js`

No signature verification is performed.

### Game embed protocol

`game/embed.html` is a same-origin iframe and accepts:

```js
iframe.contentWindow.postMessage({
  type: 'fuey-sync',
  theme: 'dark',        // 'light' | 'dark'
  handed: 'right',      // 'left' | 'right'
  lang: 'en',           // game language code
  version: 'v26.11.28.0'
}, '*');
```

Game messages to the parent:

- `{ type: 'fuey-embed-ready' }`
- `{ type: 'fuey-embed-resize', height: number }`

The app sets theme variables (`--bg`, `--text`, `--accent`, etc.) on the game document as well as sending `fuey-sync`.

### Theme CSS contract

A theme is expressed through CSS custom properties on `document.documentElement`:

```css
--bg, --bg-elev, --bg-hover, --bg-active
--border, --border-strong
--text, --text-dim, --text-faint
--accent, --accent-soft
--shadow-sm, --shadow-md
--home-bg-image
--glass-bg, --glass-strong, --glass-border, --glass-blur
```

Custom themes may also set `--home-bg-image` to a data URL. Built-in theme IDs: `system`, `light`, `dark`, `graphite`, `midnight`, `forest`, `rose`, `sunset`, `violet`, plus `custom:<id>`.

---

## Known Issues / 已知问题

### Browser / navigation

- Cross-origin iframes cannot be controlled by the parent. Sites that force `target="_blank"` or `window.open` may still open a real browser tab. Reader/proxy pages are rewritten, but direct third-party sites are not.
- Unknown sites that send `X-Frame-Options` / CSP `frame-ancestors` may display the browser's own error page inside the frame. Only known-blocked hosts and connection failures show the custom app error card.
- Reader/proxy uses a third-party service; authenticated, dynamic or anti-bot pages may fail. Extracted text is truncated (~6000–8000 chars).
- Some sites require cookies/storage that are lost in incognito mode.

### Ai

- AI requests send the current page URL/title/visible text plus IP, location, time and system information to the configured provider. This is a privacy consideration; IP lookup may fail and is marked `unavailable`.
- Anthropic's native API uses a different request format (`x-api-key`, `anthropic-version`). The current generic OpenAI-compatible request may not work with `api.anthropic.com` directly.
- Model-list fetching depends on provider CORS support.
- AI keys are stored in local storage; they are not protected by the password vault.
- Markdown rendering is sanitized by the app, but model output should still be treated as untrusted.

### GitHub

- API rate limits apply (anonymous core limit is low). A token in Settings improves this.
- Repository browser uses the default branch and does not expose a branch selector.
- Files larger than the Contents API limit or binary files may not display; textual file download is supported, repository ZIP download is not.
- Private repositories require a token with the right scopes.

### Themes / wallpapers

- Custom theme images are stored as data URLs in local storage and can hit browser quota.
- Custom theme images take priority over the selected home wallpaper.
- Wallpaper text contrast is tuned per theme; arbitrary user wallpapers can still reduce readability.
- Bundled wallpapers are large (several MB each); first load may be slow.
- Font selection menu can trigger loading many large local font files.

### Plugins

- Imported ZIP plugins execute arbitrary JavaScript through `new Function` with no sandbox. Only install trusted plugins.
- Imported plugins have no permission model, no automatic unload and no per-plugin settings UI (settings gears exist only for built-in plugins).
- Built-in plugin settings are stored in the main settings object.

### Internationalization

- Some deeper strings, legal text and newly added locales may fall back to English.
- Arabic is RTL for the agreement body but the entire UI is not fully RTL-mirrored.
- Legal translations are concise and have not been reviewed by a lawyer.
- `file://` origins may affect fetch, update and GitHub API behavior.

### Performance / compatibility

- Font package is large; opening the font picker can load many faces.
- No service worker / offline app shell; only the game works offline.
- No automated test suite or lint pipeline.
- iOS Safari has restrictions on `requestFullscreen`, popups and some storage behavior.
- Fullscreen plugin needs a user gesture; automatic activation on startup may not enter fullscreen.
- `window.open` for incognito opens a separate window; it is not a fully isolated browser profile.

### Accessibility

- Modals use `inert` when closed and focus blur on close, but there is no complete focus trap for every dynamic panel.
- Some icon-only buttons rely on `aria-label`; coverage is not exhaustive.
- Reduced-motion preference is not fully honored by all animations.

---

## License / 许可证

No `LICENSE` file is currently included. Add a license before publishing, and verify the redistribution terms of bundled fonts, provider logos, wallpapers and game assets.
