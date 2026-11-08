```markdown
# FueySeek.github.io

Fuey Project 的官方网站与项目展示页。纯原生 HTML / CSS / JavaScript 实现，无框架、无构建步骤，直接部署在 GitHub Pages。

- 在线访问：<https://fueyseek.github.io>
- 仓库地址：<https://github.com/FueySeek/FueySeek.github.io>

---

## 功能特性

**页面**

- 首页：主视觉、更新日志、开发者名单、内嵌扩展区（小游戏 + 提示框）
- 下载页：项目下载列表，支持名称 / 日期 / 系统 / 提取码搜索，一键复制提取码
- 其它项目页：列表 + 搜索，结构与下载页一致
- 关于我们页：可配置链接列表（GitHub、Minecraft 皮肤、仓库、许可证、字体证书、EULA 等）

**设置面板**

- 浅色 / 深色主题切换，液态过渡动画
- 数据源切换：GitHub 云端 / 本地
- 语言切换：English、简体中文、繁體中文、文言、日本語、한국어、Français、Deutsch、Español、Русский、العربية
- 左撇子模式：设置面板、首页主视觉、页面卡片、下滑按钮、安全指示器全部镜像
- 设置导入 / 导出（`.js` 文件格式，含严格校验与高风险确认）
- 版本检测：对比本地 `version.js` 与云端版本
- 重置设置：确认后清空全部 `fuey-` 前缀的本地存储并刷新
- 安全环境指示器：开启自定义注入后圆点由绿色发光变为灰色暗置

**全局行为**

- 自定义鼠标光标与手写风格字体
- 导航栏可拖动的分段指示器
- 设置面板可拖动关闭
- 页面切换退出遮罩
- 禁止右键、选中、复制、剪切、开发者工具等操作，触发时弹出提示
- 响应式布局，移动端与桌面端自适应

**彩蛋**

在首页扩展区的 "Under Construction" 卡片上连续点击 3 次，会启动内嵌小恐龙跑酷游戏（`embed.html`）。游戏支持空格 / 点击跳跃，包含难度递进、昼夜切换、道具加速、无敌状态等机制，最高分保存在 `localStorage`。游戏版本独立硬编码为 `v26.11.8.0`。

---

## 技术栈

- 原生 HTML5 / CSS3 / ES2018+
- 无框架、无打包工具、无依赖安装
- 数据文件以 `window.__XXX__` 全局变量形式通过 `<script>` 注入
- 使用 `postMessage` 实现主页面与两个 `iframe` 扩展页的双向通信（主题、语言、惯用手、高度）

---

## 目录结构

```
FueySeek.github.io/
├── index.html              首页
├── download.html           下载页
├── open.html               关于我们页
├── other.html              其它项目页
├── embed.html              内嵌扩展：小恐龙游戏
├── embed-notes.html        内嵌扩展：提示框
├── css/
│   ├── common.css          全局样式（变量、导航、设置面板、卡片、页脚等）
│   ├── index.css           首页专属样式
│   ├── download.css        下载页专属样式
│   └── open.css            关于页 / 其它项目页专属样式
├── js/
│   ├── common.js           全局逻辑（设置面板、导航、分段控件、导入导出、版本检测等）
│   ├── lang.js             多语言翻译表
│   ├── rule.js             安全策略（禁用操作拦截、提示转发）
│   ├── index.js            首页逻辑（更新日志、iframe 通信、开发者名单）
│   ├── download.js         下载页逻辑
│   ├── open.js             关于页逻辑
│   └── other.js            其它项目页逻辑
├── data/
│   ├── version.js          界面版本号
│   ├── update-logs.js      更新日志数据
│   ├── download-list.js    下载列表数据
│   ├── open-list.js        关于页链接数据
│   ├── other-list.js       其它项目数据
│   └── eula.txt            最终用户许可协议（中英双语）
├── images/                 图标、光标、人物图、小恐龙素材
├── fonts/                  手写风格字体（script.ttf）
└── README.md
```

---

## 本地运行

项目没有构建步骤，但部分功能（如版本检测的 `fetch`、`postMessage` 跨 `iframe` 通信）需要 HTTP 环境。推荐用任意静态服务器启动：

```bash
# Python 3
python -m http.server 8080

# Node.js（需先安装 http-server）
npx http-server -p 8080

# PHP
php -S localhost:8080
```

然后访问 <http://localhost:8080>。直接用 `file://` 打开首页可以显示基本内容，但版本检测会失败，且部分 `fetch` 行为受浏览器限制。

---

## 数据源

设置面板中可切换两种数据源：

| 数据源 | 说明 |
|---|---|
| `github`（默认） | 按顺序尝试 `fueyseek.github.io/data/` → `raw.githubusercontent.com` → `cdn.jsdelivr.net`，任一成功即使用 |
| `local` | 直接加载仓库内 `data/` 目录下的同名文件 |

GitHub 数据源全部失败时会自动回退到本地，并弹出「数据源已回退到本地」提示。

所有数据文件均带时间戳缓存破坏参数，确保每次访问加载最新内容。

---

## 版本说明

项目存在两个独立的版本号，互不影响：

| 版本 | 位置 | 当前值 | 用途 |
|---|---|---|---|
| 界面版本 | `data/version.js` 中的 `__FUEY_VERSION__` | `v26.11.2.1` | 设置面板「检测版本」按钮对比云端使用 |
| 游戏版本 | `embed.html` 中的 `GAME_VERSION` | `v26.11.8.0` | 小恐龙游戏左上角显示，纯硬编码 |

更新界面版本时只需修改 `data/version.js`；更新游戏版本时修改 `embed.html` 内 `GAME_VERSION` 常量即可。

---

## 多语言

`js/lang.js` 内置 11 种语言的完整翻译，可在设置面板的语言选项或语言下拉框中切换：

| 代码 | 语言 | 本地名称 |
|---|---|---|
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

- 首次访问默认英文
- 语言选择保存在 `localStorage` 的 `fuey-lang`
- 切换后导航、页面内容、按钮、提示、更新日志、内嵌扩展页全部同步
- 列表类数据（下载、关于、其它项目）优先使用当前语言，缺失时回退中文，再缺失回退英文
- 更新日志 `data/update-logs.js` 目前仅提供 `zh` 与 `en` 两套内容，其他语言会按上述规则回退

翻译可能并非 100% 准确，欢迎在 Issue 中指出。

---

## 设置导入 / 导出

导出文件为 `FueySettings.js`，格式如下：

```js
window.__FUEY_SETTINGS__ = {
  "__meta__": {
    "protocol": "Fuey EULA",
    "version": "v26.11.2.1"
  },
  "theme": "light",
  "lang": "en",
  "handed": "right",
  "dataSource": "github",
  "apply-customization": false,
  "enable-custom-protocols": false,
  "custom": null
};
// 随后附带一段免责声明注释
```

**导出规则**

- 不包含导出时间戳
- 不包含 `__permanent__` 字段（隐藏的持久化设置，如小恐龙最高分 `fuey-dino-hi`，仅在导入时接受写入）

**导入规则**

1. 解析后先做严格格式校验：缺少 `__meta__.protocol`、字段类型不符、语言不在白名单内、`custom` 非对象等任一情况，直接拒绝并提示「设置文件格式不正确」
2. 格式合法后判断是否需要警告确认。满足以下任一条件时弹出确认框（与「重置设置」同款 UI）：
   - `apply-customization === true`
   - `enable-custom-protocols === true`
   - `custom.vars` 非空
   - `custom.css` 非空
   - `custom.js` 非空
3. 用户确认后应用设置并刷新页面；未确认则不写入任何内容
4. 若 `custom` 有实际内容但文件里 `apply-customization` 为 `false`，应用时会自动将其置为 `true`，避免「导入了内容却不生效」
5. `__permanent__` 中的键值会写入 `localStorage` 的 `fuey-perm-<key>`，可通过 `window.__fueyGetPermanent(key)` 读取

---

## 安全策略

`js/rule.js` 在页面加载时立即初始化，拦截以下操作并弹出提示：

- 右键菜单
- 文本选中（输入框、文本域、`contenteditable` 除外）
- 图片拖拽
- 复制 / 剪切（可编辑元素除外）
- `F12`、`Ctrl+Shift+I/J/C/K/E`、`Cmd+Alt+I/J/C/U`
- `Ctrl+U`、`Ctrl+S`、`Ctrl+P`

`F5`、`Ctrl+R`、`F11`、`Ctrl+±`、`Ctrl+F` 等正常浏览行为不被拦截。

内嵌扩展页（`embed.html`、`embed-notes.html`）中的拦截提示会通过 `postMessage` 转发到主页面统一弹出，保证样式与语言一致。

---

## 浏览器兼容

需要现代浏览器，推荐 Chrome / Edge / Safari / Firefox 最新版本。依赖的现代特性包括：

- CSS `backdrop-filter`、`gap`、`clamp()`、`color-scheme`
- JS `DOMMatrixReadOnly`、`ResizeObserver`、`postMessage`、`localStorage`
- `navigator.clipboard.writeText`（复制提取码，需 HTTPS 或 localhost）

不支持 IE。

---

## 贡献

欢迎通过 Issue 反馈问题，或直接提交 Pull Request。

- 仓库：<https://github.com/FueySeek/FueySeek.github.io>
- 贡献者名单会自动从 GitHub API 拉取并展示在首页底部

---

## 许可

- 项目代码：[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.txt)
- 字体：[SIL OFL 1.1](https://github.com/Warren2060/ChillRound/)
- 最终用户许可协议（EULA）：见 [`data/eula.txt`](data/eula.txt)

涉及其它服务相关的内容，优先受对应服务提供商的用户协议与服务条款约束。
```
