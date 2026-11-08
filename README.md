<div align="center">

# ✨ FueySeek.github.io

**The official website and project showcase for the Fuey Project.**

Built with pure vanilla HTML / CSS / JavaScript, no frameworks, no build steps, directly deployed on GitHub Pages.

[![Online](https://img.shields.io/badge/Online-fueyseek.github.io-blue?style=flat-square&logo=googlechrome&logoColor=white)](https://fueyseek.github.io)
[![Repo](https://img.shields.io/badge/GitHub-FueySeek%2FFueySeek.github.io-black?style=flat-square&logo=github)](https://github.com/FueySeek/FueySeek.github.io)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](#)
[![License](https://img.shields.io/badge/License-GPLv3-green?style=flat-square)](https://www.gnu.org/licenses/gpl-3.0.txt)

</div>

---

## 📖 Table of Contents

- [🌟 Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Directory Structure](#-directory-structure)
- [🚀 Local Development](#-local-development)
- [🗄️ Data Source Mechanism](#️-data-source-mechanism)
- [🌍 Multi-language Support](#-multi-language-support)
- [📦 Settings Import & Export](#-settings-import--export)
- [🛡️ Security Policy](#️-security-policy)
- [🧩 Versioning](#-versioning)
- [📄 License & Disclaimer](#-license--disclaimer)

---

## 🌟 Features

### 📄 Pages
- **Home**: Dynamic hero section, update logs, developer list, and embedded expansion area (mini-game + notes).
- **Download**: Project download list, supporting search by name / date / system / access code, with one-click code copy.
- **Other Projects**: List + search, consistent card style with the download page.
- **About Us**: Configurable external links (GitHub, Minecraft skins, repository, licenses, font certificate, EULA, etc.).

### ⚙️ Settings Panel
- 🌓 **Theme Switch**: Light / Dark mode with smooth liquid transition animations.
- 🔄 **Data Source**: Switch between loading data from GitHub Cloud or Local.
- 🌐 **Multi-language**: 11 built-in languages, switching seamlessly in real-time.
- 🖐️ **Left-handed Mode**: Global layout mirroring for the settings panel, hero section, cards, and scroll buttons.
- 📥 **Settings Import/Export**: Export local configurations as a `.js` file or import external configurations (with strict validation and high-risk confirmation).
- 🔍 **Version Check**: One-click comparison between local and cloud version numbers.
- 🟢 **Security Environment Indicator**: Real-time monitoring of custom injections; the indicator dims from bright green to gray when enabled.

### 🎮 Hidden Easter Egg
Click the "Under Construction" card in the homepage expansion area **3 times consecutively** to launch the built-in **Dino Run mini-game**.
> The game supports spacebar/click jumping, features progressive difficulty, day/night cycles, speed boosts, and invincibility, with the high score saved in `localStorage`.

---

## 🛠️ Tech Stack

- **Core**: Vanilla HTML5 / CSS3 / ES2018+
- **Architecture**: No frameworks, no build tools, no external dependencies.
- **Data**: Injected via `<script>` as global variables (`window.__XXX__`).
- **Communication**: Uses `postMessage` for bidirectional communication between the main page and two `iframe` expansion pages (syncing theme, language, handedness, and height).

---

## 📁 Directory Structure

<details>
<summary>Click to expand the full directory tree</summary>

```text
FueySeek.github.io/
├── index.html              Home page
├── download.html           Download page
├── open.html               About Us page
├── other.html              Other Projects page
├── embed.html              Embedded expansion: Dino game
├── embed-notes.html        Embedded expansion: Notes box
├── css/
│   ├── common.css          Global styles (variables, nav, settings, etc.)
│   ├── index.css           Home page styles
│   ├── download.css        Download page styles
│   └── open.css            About / Other Projects styles
├── js/
│   ├── common.js           Global logic (settings, nav, import/export, etc.)
│   ├── lang.js             Multi-language dictionary
│   ├── rule.js             Security policy (action interception, etc.)
│   ├── index.js            Home logic (logs, iframe comms, etc.)
│   ├── download.js         Download page logic
│   ├── open.js             About page logic
│   └── other.js            Other projects logic
├── data/
│   ├── version.js          UI version number
│   ├── update-logs.js      Update logs data
│   ├── download-list.js    Download list data
│   ├── open-list.js        About page links data
│   ├── other-list.js       Other projects data
│   └── eula.txt            End User License Agreement
├── images/                 Icons, cursors, hero image, dino assets
├── fonts/                  Handwriting-style font
└── README.md
```
</details>

---

## 🚀 Local Development

There is no build step, but some features (like `fetch` for version check and cross-`iframe` communication) require an HTTP environment. Use any static server:

```bash
# Python 3
python -m http.server 8080

# Node.js (requires http-server)
npx http-server -p 8080

# PHP
php -S localhost:8080
```

Visit `http://localhost:8080`.
*(Note: Opening the homepage directly via `file://` will render basic content, but version checks will fail and some `fetch` behaviors will be restricted by the browser.)*

---

## 🗄️ Data Source Mechanism

You can switch between two data sources in the settings panel:

| Data Source | Description |
| :--- | :--- |
| `github` (Default) | Tries `fueyseek.github.io` → `raw.githubusercontent.com` → `cdn.jsdelivr.net` in order. Uses the first successful response. |
| `local` | Loads the files directly from the `data/` directory in the repository. |

- If all GitHub sources fail, it automatically falls back to local and shows a toast notification.
- All data files are loaded with cache-busting timestamps to ensure the latest content is fetched every time.

---

## 🌍 Multi-language Support

Features full translations for 11 languages, switchable in the settings panel:

| Code | Language | Native Name |
| :--- | :--- | :--- |
| `en` | English | English |
| `zh` | Chinese (Simplified) | 简体中文 |
| `zh-Hant` | Chinese (Traditional) | 繁體中文 |
| `lzh` | Literary Chinese | 文言 |
| `ja` | Japanese | 日本語 |
| `ko` | Korean | 한국어 |
| `fr` | French | Français |
| `de` | German | Deutsch |
| `es` | Spanish | Español |
| `ru` | Russian | Русский |
| `ar` | Arabic | العربية |

- Defaults to English on first visit. Language choice is saved in `localStorage` under `fuey-lang`.
- Switching updates the navigation, content, buttons, toasts, update logs, and embedded expansions instantly.
- List-based data (downloads, about, others) prioritizes the current language, falling back to Chinese, then English.
- Update logs (`data/update-logs.js`) currently only provide `zh` and `en` packs. Other languages will fall back as described above.

---

## 📦 Settings Import & Export

Exported files are named `FueySettings.js` and contain the current configuration state.

**Export Rules**
- No export timestamps are included.
- Hidden persistent settings (like the Dino high score `fuey-dino-hi`) are excluded (only accepted during import).

**Import Rules**
1. **Strict Validation**: Immediately rejects and prompts "Invalid format" if `__meta__` is missing, field types mismatch, or the language is not in the whitelist.
2. **Risk Confirmation**: If custom code is detected (`custom.css`, `custom.js`, or custom switches enabled), a high-risk confirmation dialog appears. The settings are applied only after user confirmation.
3. **Smart Correction**: If `custom` has actual content but `apply-customization` is `false` in the file, it is automatically set to `true` upon applying to prevent "importing content that doesn't take effect".

---

## 🛡️ Security Policy

`js/rule.js` initializes immediately on page load to intercept the following actions with a toast notification:

- Right-click menu, text selection (except for inputs), image dragging.
- Copy / Cut (except for editable elements).
- Developer tools shortcuts (`F12`, `Ctrl+Shift+I/J/C/K/E`, etc.).
- Source code / print shortcuts (`Ctrl+U`, `Ctrl+S`, `Ctrl+P`).

> Normal browsing behaviors (`F5`, `Ctrl+R`, `F11`, zoom, find, etc.) are not intercepted.
> Interception toasts in the embedded expansion pages are forwarded via `postMessage` to the main page to ensure consistent styling and language.

---

## 🧩 Versioning

The project maintains two independent version numbers:

| Type | Location | Purpose |
| :--- | :--- | :--- |
| **UI Version** | `__FUEY_VERSION__` in `data/version.js` | Used by the "Check Version" button to compare with the cloud. |
| **Game Version** | `GAME_VERSION` in `embed.html` | Displayed in the top-left of the Dino game, hardcoded and decoupled. |

---

## 📄 License & Disclaimer

- **Code**: [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.txt)
- **Fonts**: [SIL OFL 1.1](https://github.com/Warren2060/ChillRound/)
- **EULA**: [`data/eula.txt`](data/eula.txt)

<details>
<summary><b>🌐 Disclaimer for Other Services (Multi-language)</b></summary>

<br>

**English:**
Content related to other services is prioritized subject to the terms of service and user agreements of the respective service providers.

**简体中文:**
涉及其它服务相关的内容，优先受对应服务提供商的用户协议与服务条款约束。

**繁體中文:**
涉及其它服務相關的內容，優先受對應服務提供者的使用者協議與服務條款約束。

**文言:**
涉及其它服務之事，優先受其提供者之約、款所約束。

**日本語:**
その他のサービスに関連するコンテンツは、それぞれのサービス提供者の利用規約およびサービス条件に優先的に従うものとします。

**한국어:**
기타 서비스와 관련된 콘텐츠는 해당 서비스 제공업체의 이용 약관 및 서비스 조건의 적용을 우선적으로 받습니다.

**Français:**
Le contenu lié à d'autres services est prioritairement soumis aux conditions d'utilisation et aux accords de service des fournisseurs concernés.

**Deutsch:**
Inhalte, die sich auf andere Dienste beziehen, unterliegen vorrangig den Nutzungsbedingungen und Servicevereinbarungen der jeweiligen Dienstanbieter.

**Español:**
El contenido relacionado con otros servicios está sujeto prioritariamente a los términos de servicio y acuerdos de usuario de los respectivos proveedores.

**Русский:**
Контент, связанный с другими сервисами, в первую очередь регулируется условиями обслуживания и пользовательскими соглашениями соответствующих поставщиков услуг.

**العربية:**
تخضع المحتويات المتعلقة بالخدمات الأخرى بشكل أساسي لشروط الخدمة واتفاقيات المستخدم الخاصة بمقدمي الخدمات المعنيين.

</details>
