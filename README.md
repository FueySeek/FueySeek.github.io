markdown
<div align="center">

# ✨ FueySeek.github.io

**Fuey Project 的官方网站与项目展示页**

纯原生 HTML / CSS / JavaScript 实现，无框架、无构建步骤，直接部署在 GitHub Pages。

[![Online](https://img.shields.io/badge/Online-fueyseek.github.io-blue?style=flat-square&logo=googlechrome&logoColor=white)](https://fueyseek.github.io)
[![Repo](https://img.shields.io/badge/GitHub-FueySeek%2FFueySeek.github.io-black?style=flat-square&logo=github)](https://github.com/FueySeek/FueySeek.github.io)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](#)
[![License](https://img.shields.io/badge/License-GPLv3-green?style=flat-square)](https://www.gnu.org/licenses/gpl-3.0.txt)

</div>

---

## 📖 目录

- [🌟 核心功能](#-核心功能)
- [🛠️ 技术栈](#️-技术栈)
- [📁 目录结构](#-目录结构)
- [🚀 本地运行](#-本地运行)
- [🗄️ 数据源机制](#️-数据源机制)
- [🌍 多语言支持](#-多语言支持)
- [📦 设置导入与导出](#-设置导入与导出)
- [🛡️ 安全策略](#️-安全策略)
- [🧩 版本说明](#-版本说明)
- [📄 许可与声明](#-许可与声明)

---

## 🌟 核心功能

### 📄 页面展示
- **首页**：动态主视觉、更新日志、开发者名单、内嵌扩展区（小游戏 + 提示框）。
- **下载页**：项目下载列表，支持名称 / 日期 / 系统 / 提取码搜索，支持一键复制提取码。
- **其它项目页**：列表 + 搜索，与下载页保持一致的卡片风格。
- **关于我们页**：可配置的外部链接列表（GitHub、皮肤、仓库、许可证、字体证书、EULA 等）。

### ⚙️ 设置面板
- 🌓 **主题切换**：浅色 / 深色模式，带有平滑液态过渡动画。
- 🔄 **数据源切换**：支持从 GitHub 云端或本地加载数据。
- 🌐 **多语言支持**：内置 11 种语言，实时无缝切换。
- 🖐️ **左撇子模式**：全局布局镜像，设置面板、主视觉、页面卡片、下滑按钮等自动靠左。
- 📥 **设置导入/导出**：将本地配置导出为 `.js` 文件，或导入外部配置（附带严格校验与高危确认）。
- 🔍 **版本检测**：一键对比本地与云端的版本号。
- 🟢 **安全环境指示器**：实时监控是否开启了自定义注入，开启时指示灯由绿色变为灰色暗置。

### 🎮 隐藏彩蛋
在首页扩展区的 "Under Construction" 卡片上**连续点击 3 次**，即可启动内置的**小恐龙跑酷游戏**。
> 游戏支持空格/点击跳跃，包含难度递进、昼夜交替、道具加速、无敌状态等机制，最高分保存在 `localStorage` 中。

---

## 🛠️ 技术栈

- **核心**：原生 HTML5 / CSS3 / ES2018+
- **架构**：无框架、无打包工具、无外部依赖
- **数据**：以 `window.__XXX__` 全局变量形式通过 `<script>` 注入
- **通信**：使用 `postMessage` 实现主页面与两个 `iframe` 扩展页的双向通信（同步主题、语言、惯用手、高度）

---

## 📁 目录结构

<details>
<summary>点击展开查看完整目录树</summary>

```text
FueySeek.github.io/
├── index.html              首页
├── download.html           下载页
├── open.html               关于我们页
├── other.html              其它项目页
├── embed.html              内嵌扩展：小恐龙游戏
├── embed-notes.html        内嵌扩展：提示框
├── css/
│   ├── common.css          全局样式（变量、导航、设置面板等）
│   ├── index.css           首页专属样式
│   ├── download.css        下载页专属样式
│   └── open.css            关于页 / 其它项目页专属样式
├── js/
│   ├── common.js           全局逻辑（设置面板、导航、导入导出等）
│   ├── lang.js             多语言翻译表
│   ├── rule.js             安全策略（禁用操作拦截等）
│   ├── index.js            首页逻辑（更新日志、iframe 通信等）
│   ├── download.js         下载页逻辑
│   ├── open.js             关于页逻辑
│   └── other.js            其它项目页逻辑
├── data/
│   ├── version.js          界面版本号
│   ├── update-logs.js      更新日志数据
│   ├── download-list.js    下载列表数据
│   ├── open-list.js        关于页链接数据
│   ├── other-list.js       其它项目数据
│   └── eula.txt            最终用户许可协议
├── images/                 图标、光标、人物图、小恐龙素材
├── fonts/                  手写风格字体
└── README.md
```
</details>

---

## 🚀 本地运行

项目没有构建步骤，但部分功能（如版本检测的 `fetch`、跨 `iframe` 通信）需要 HTTP 环境。推荐使用任意静态服务器启动：

```bash
# Python 3
python -m http.server 8080

# Node.js (需先安装 http-server)
npx http-server -p 8080

# PHP
php -S localhost:8080
```

启动后访问 `http://localhost:8080`。
*(注：直接用 `file://` 打开首页可以显示基本内容，但版本检测会失败，且部分 `fetch` 行为受浏览器限制。)*

---

## 🗄️ 数据源机制

设置面板中可自由切换两种数据源：

| 数据源 | 说明 |
| :--- | :--- |
| `github`（默认） | 按顺序尝试 `fueyseek.github.io` → `raw.githubusercontent.com` → `cdn.jsdelivr.net`，任一成功即使用 |
| `local` | 直接加载仓库内 `data/` 目录下的同名文件 |

- 如果 GitHub 数据源全部失败，会自动回退到本地，并弹出提示。
- 所有数据文件均带有时间戳缓存破坏参数（Cache Busting），确保每次访问加载最新内容。

---

## 🌍 多语言支持

内置 11 种语言的完整翻译，可在设置面板中实时切换：

| 代码 | 语言 | 本地名称 |
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

- 首次访问默认英文，语言选择保存在 `localStorage` 的 `fuey-lang` 中。
- 切换后导航、内容、按钮、提示、更新日志及内嵌扩展页全部同步更新。
- 列表类数据（下载、关于、其它项目）优先使用当前语言，缺失时回退中文，再缺失回退英文。
- 更新日志 `data/update-logs.js` 目前仅提供 `zh` 与 `en` 两套内容，其他语言会按上述规则回退。

---

## 📦 设置导入与导出

导出文件为 `FueySettings.js`，包含当前所有的配置状态。

**导出规则**
- 不包含导出时间戳。
- 不包含隐藏的持久化设置（如小恐龙最高分 `fuey-dino-hi`，仅在导入时接受写入）。

**导入规则**
1. **严格校验**：解析后先做格式校验（缺少 `__meta__`、字段类型不符、语言不在白名单等），任一不满足将直接拒绝并提示「格式不正确」。
2. **风险确认**：若检测到文件包含自定义代码（`custom.css`、`custom.js`、开启自定义开关等），会弹出高危确认框。用户确认后才应用并刷新页面。
3. **智能修正**：若 `custom` 有实际内容但文件里 `apply-customization` 为 `false`，系统会自动将其置为 `true`，避免「导入了内容却不生效」。

---

## 🛡️ 安全策略

`js/rule.js` 在页面加载时立即初始化，拦截以下操作并弹出提示：

- 右键菜单、文本选中（输入框除外）、图片拖拽
- 复制 / 剪切（可编辑元素除外）
- 开发者工具快捷键（`F12`、`Ctrl+Shift+I/J/C/K/E` 等）
- 源码/打印快捷键（`Ctrl+U`、`Ctrl+S`、`Ctrl+P`）

> 正常的浏览行为（`F5`、`Ctrl+R`、`F11`、缩放、查找等）不会被拦截。
> 内嵌扩展页中的拦截提示会通过 `postMessage` 转发到主页面统一弹出，保证样式与语言一致。

---

## 🧩 版本说明

项目存在两个独立的版本号，互不影响：

| 版本类型 | 位置 | 用途 |
| :--- | :--- | :--- |
| **界面版本** | `data/version.js` 中的 `__FUEY_VERSION__` | 设置面板「检测版本」按钮对比云端使用 |
| **游戏版本** | `embed.html` 中的 `GAME_VERSION` | 小恐龙游戏左上角显示，纯硬编码解耦 |

---

## 📄 许可与声明

- 项目代码：[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.txt)
- 字体授权：[SIL OFL 1.1](https://github.com/Warren2060/ChillRound/)
- 最终用户许可协议：[`data/eula.txt`](data/eula.txt)

<details>
<summary><b>🌐 涉及其它服务相关的内容及多语言声明 (点击展开)</b></summary>

<br>

**English:** Content related to other services is prioritized subject to the terms of service and user agreements of the respective service providers.

**简体中文:** 涉及其它服务相关的内容，优先受对应服务提供商的用户协议与服务条款约束。

**繁體中文:** 涉及其它服務相關的內容，優先受對應服務提供者的使用者協議與服務條款約束。

**文言:** 涉及其它服務之事，優先受其提供者之約、款所約束。

**日本語:** その他のサービスに関連するコンテンツは、それぞれのサービス提供者の利用規約およびサービス条件に優先的に従うものとします。

**한국어:** 기타 서비스와 관련된 콘텐츠는 해당 서비스 제공업체의 이용 약관 및 서비스 조건의 적용을 우선적으로 받습니다.

**Français:** Le contenu lié à d'autres services est prioritairement soumis aux conditions d'utilisation et aux accords de service des fournisseurs concernés.

**Deutsch:** Inhalte, die sich auf andere Dienste beziehen, unterliegen vorrangig den Nutzungsbedingungen und Servicevereinbarungen der jeweiligen Dienstanbieter.

**Español:** El contenido relacionado con otros servicios está sujeto prioritariamente a los términos de servicio y acuerdos de usuario de los respectivos proveedores.

**Русский:** Контент, связанный с другими сервисами, в первую очередь регулируется условиями обслуживания и пользовательскими соглашениями соответствующих поставщиков услуг.

**العربية:** تخضع المحتويات المتعلقة بالخدمات الأخرى بشكل أساسي لشروط الخدمة واتفاقيات المستخدم الخاصة بمقدمي الخدمات المعنيين.

</details>
