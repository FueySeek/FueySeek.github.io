window.__EMBED_UPDATE_LOGS__ = {
    zh: {
        embedTitle: "更新日志",
        embedDesc: "本项目的所有改动都记录在这里。",
        sectionAdded: "新增",
        sectionChanged: "修改",
        sectionFixed: "修复",
        logs: [
            {
                version: "v26.10.30.0",
                date: "2026-10-30",
                title: "日志数据化与附属页修复",
                sections: [
                    {
                        key: "sectionAdded",
                        items: [
                            "更新日志改为数据驱动，所有日志条目统一存放在独立的数据文件中，新增日志只需在数据文件里追加一条对象，无需改动页面结构。",
                            "扩展页内部新增附属页，由扩展页自身加载，沿用同一套样式规则和宽度，作为独立文件存在，可单独打开也可被扩展页内嵌调用。",
                            "附属页高度会跟随内容自动上报给扩展页，扩展页再同步给主页面，形成子页面到父页面的完整高度同步链路。",
                            "附属页与扩展页共用同一套语言数据和格式化函数，切换语言时两边同步更新。"
                        ]
                    },
                    {
                        key: "sectionChanged",
                        items: [
                            "扩展页 HTML 只保留结构与渲染逻辑，日志内容改由数据文件提供，文件体积大幅减小。",
                            "日志日期统一以数据形式存储，渲染时按当前语言格式化：中文显示为年/月/日，英文显示为日/月/年。",
                            "扩展页渲染日志时按数据条目顺序生成列表，标题、段落标题、列表项都从数据中读取，不再散落在 HTML 中。",
                            "主题和语言同步统一收敛到一处入口，扩展页只保留必要的消息处理，避免重复逻辑。"
                        ]
                    },
                    {
                        key: "sectionFixed",
                        items: [
                            "修复附属页不跟随扩展页切换语言的问题。",
                            "修复扩展页在语言切换后日期格式未同步更新的问题。",
                            "修复附属页初始化时高度未及时上报、导致父页面出现空白的问题。",
                            "修复扩展页与附属页之间消息重复处理导致的高度抖动问题。",
                            "修复扩展页在子页面未就绪时提前发送同步消息、导致同步丢失的问题。"
                        ]
                    }
                ]
            },
            {
                version: "v26.10.29.0",
                date: "2026-10-29",
                title: "日期格式修复与附属页",
                sections: [
                    {
                        key: "sectionAdded",
                        items: [
                            "扩展页内部新增附属页，由扩展页自身加载，沿用同一套规则和宽度。",
                            "附属页会跟随扩展页同步更新高度，内容变化时自动撑开。",
                            "附属页会跟随扩展页同步切换语言，界面文本与扩展页保持一致。",
                            "下载列表新增 FueyTV Settings 条目，包含网盘链接、密钥、可用系统和开发时间。"
                        ]
                    },
                    {
                        key: "sectionChanged",
                        items: [
                            "日期不再硬编码在页面标记中，改为数据存储，渲染时按语言格式化。",
                            "中文日期显示为年/月/日，英文日期显示为日/月/年，两套格式互不干扰。",
                            "下载列表里的日期同步改为按语言格式化的形式，中文与英文显示不同顺序。",
                            "扩展页与主页面之间的高度同步逻辑调整为以子页面上报为主，父页面不再主动测量。"
                        ]
                    },
                    {
                        key: "sectionFixed",
                        items: [
                            "修复切换语言时日期格式不变化、始终显示同一种顺序的问题。",
                            "修复附属页不跟随扩展页切换语言的问题。",
                            "修复附属页高度首次加载时未正确同步、需要滚动后才恢复的问题。",
                            "修复下载列表日期在英文环境下仍显示中文顺序的问题。"
                        ]
                    }
                ]
            },
            {
                version: "v26.10.13.1",
                date: "2026-10-13",
                title: "左撇子模式与交互修复",
                sections: [
                    {
                        key: "sectionAdded",
                        items: [
                            "新增左撇子模式开关，开启后设置面板从左侧平滑滑出，设置面板保留圆角，并保持与浏览器边缘 16px 的间隔。",
                            "设置面板支持拖动关闭，拖回约三分之一面板宽度即可关闭，拖动过程中面板透明度随拖动距离渐变。",
                            "设置面板内部的标题、标签、开关行、底部按钮在左撇子模式下自动镜像排列。",
                            "首页主视觉、下载页、关于页、下滑按钮、设置面板均在左撇子模式下镜像到左侧。",
                            "扩展页内的禁用警告现在转发到主页面，由主页面统一弹出提示，与主页面使用同一套 UI 和语言。",
                            "导航滑块指示器在左撇子模式下重新计算位置，避免镜像后错位。"
                        ]
                    },
                    {
                        key: "sectionChanged",
                        items: [
                            "左撇子模式切换时先播放面板关闭动画，再进行布局镜像，避免切换过程中出现错位。",
                            "任务锁机制统一管理导航拖动、分段控件拖动、设置面板拖动，同一时间只允许一个拖动手势生效，先执行的那个优先。",
                            "拖动导航、拖动分段控件、打开设置面板、拖动设置面板时，页面滚动被锁定，避免误触页面滚动。",
                            "设置面板的语言选项顺序调整为英文在前、中文在后，与默认语言保持一致。",
                            "设置面板打开时同步刷新分段控件位置，确保面板内控件指示器正确对齐。"
                        ]
                    },
                    {
                        key: "sectionFixed",
                        items: [
                            "修复左撇子模式下拖动关闭设置面板时面板乱漂移的问题。",
                            "修复左撇子模式下设置面板关闭后位置未复位的问题。",
                            "修复下载页和关于页在左撇子模式下未正确镜像的问题。",
                            "修复下载页搜索框、条目行、标签在左撇子模式下未反向排列的问题。",
                            "修复关于页列表项和箭头在左撇子模式下未反向排列的问题。",
                            "修复首页主视觉在左撇子模式下文字未右对齐的问题。",
                            "语言文件补全了缺失的左撇子相关翻译。"
                        ]
                    }
                ]
            },
            {
                version: "v26.10.13.0",
                date: "2026-10-13",
                title: "搜索框与多语言改进",
                sections: [
                    {
                        key: "sectionAdded",
                        items: [
                            "下载页新增搜索框，采用全圆角设计，输入框与搜索按钮组合在同一个胶囊形容器内。",
                            "搜索同时匹配中文名和英文名，不受当前语言影响，方便用任意语言查找项目。",
                            "搜索同时匹配日期、可用系统和网盘密钥，输入任意字段都能过滤出对应条目。",
                            "扩展页移除固定高度，改为随内容自动撑开。",
                            "扩展页内容变化时高度实时同步，父页面无需手动测量。",
                            "扩展页新增缓存刷新，每次加载都带上时间戳，始终加载最新内容。"
                        ]
                    },
                    {
                        key: "sectionChanged",
                        items: [
                            "默认语言改为英文，首次访问时界面以英文显示。",
                            "顶部导航条改为全圆角胶囊形，配合毛玻璃背景和阴影。",
                            "搜索结果只按当前语言显示，不再中英混排。",
                            "搜索框在左撇子模式下自动反向排列，输入框右对齐。",
                            "扩展页在语言切换时会把当前语言同步给子页面，保证内容与主页面一致。"
                        ]
                    },
                    {
                        key: "sectionFixed",
                        items: [
                            "修复下载页和关于页默认语言不匹配的问题。",
                            "修复设置面板中语言切换未正确反映的问题。",
                            "修复扩展页在手机端和服务器部署中不可见的问题。",
                            "修复扩展页加载失败时父页面仍显示空白区域的问题。",
                            "修复扩展页高度在内容变化后未及时更新的问题。"
                        ]
                    }
                ]
            },
            {
                version: "v26.10.12.0",
                date: "2026-10-12",
                title: "扩展页",
                sections: [
                    {
                        key: "sectionAdded",
                        items: [
                            "在首页主视觉下方新增可展开的扩展区域。",
                            "新增带光晕效果的圆形下滑按钮，点击后平滑滚动到扩展区域。",
                            "扩展内容与主页面分开加载，扩展页作为独立文件存在。",
                            "扩展页通过消息机制与主页面通信，接收主题、语言和惯用手设置。",
                            "扩展页会把自身高度上报给主页面，父页面据此调整 iframe 高度。",
                            "扩展页加载完成、内容变化、窗口尺寸变化时都会重新上报高度。"
                        ]
                    },
                    {
                        key: "sectionChanged",
                        items: [
                            "调整首页布局，扩展区域整体下移，不再出现在第一屏。",
                            "下滑按钮在页面滚动超过一定距离后自动隐藏，回到顶部时重新显示。",
                            "下滑按钮在左撇子模式下镜像到左下角。",
                            "扩展页加载失败时自动隐藏扩展区域和下滑按钮，避免出现空白。"
                        ]
                    }
                ]
            },
            {
                version: "v26.10.11.0",
                date: "2026-10-11",
                title: "设置与主题",
                sections: [
                    {
                        key: "sectionAdded",
                        items: [
                            "设置面板新增可拖动的分段控件，主题和语言选项都改为分段控件形式。",
                            "分段控件支持点击和拖动两种操作，拖动时指示器跟随手指移动，松手后吸附到最近的选项。",
                            "新增浅色 / 深色主题切换，带液态过渡动画，切换时背景、文字、边框、阴影同步过渡。",
                            "新增英文 / 中文语言切换，切换后导航、页面内容、按钮文本、提示文本全部同步更新。",
                            "新增重置设置按钮，带确认弹窗，确认后清空所有本地存储并刷新页面。",
                            "新增导航滑块指示器，当前页面对应的导航项下方有高亮背景，可拖动切换。",
                            "设置按钮新增齿轮图标，鼠标悬停时齿轮旋转。",
                            "新增禁用操作提示，右键、选中、复制、剪切、开发者工具等操作被拦截时弹出提示。",
                            "新增页面退出遮罩，切换页面时先播放遮罩动画再跳转。"
                        ]
                    },
                    {
                        key: "sectionChanged",
                        items: [
                            "整体界面改为毛玻璃风格，导航、设置面板、页面卡片、页脚都使用半透明背景加模糊。",
                            "按钮和卡片改为全圆角，导航项、分段控件、设置按钮都使用胶囊形或圆角矩形。",
                            "页脚改为胶囊形，固定在页面底部居中。",
                            "导航栏、设置面板、页面卡片、页脚的阴影改为多层柔和阴影，深色模式下阴影同步调整。",
                            "设置面板从右侧滑入，带弹性缓动，关闭时反向滑出。",
                            "主题和语言切换后，导航滑块指示器会自动重新定位，避免因文本宽度变化导致错位。"
                        ]
                    }
                ]
            },
            {
                version: "v26.10.10.0",
                date: "2026-10-10",
                title: "首次发布",
                sections: [
                    {
                        key: "sectionAdded",
                        items: [
                            "初始首页，包含主标题、手绘下划线装饰和人物图。",
                            "主标题支持中英文切换，手绘下划线带轻微摆动动画。",
                            "下载页，展示项目列表，包含名称、开发时间、可用系统、网盘链接和网盘密钥。",
                            "下载页支持一键复制网盘密钥，复制后按钮短暂显示已复制状态。",
                            "关于页，展示可配置的链接列表，支持中英文名称。",
                            "关于页链接支持外部链接、邮箱、协议文本等多种形式。",
                            "自定义鼠标样式，替换默认光标。",
                            "自定义字体，全站使用同一套手写风格字体。",
                            "导航栏固定在顶部，包含首页、下载、关于我们、设置四个入口。",
                            "页脚固定在底部，显示版权年份，年份自动更新。"
                        ]
                    }
                ]
            }
        ]
    },
    en: {
        embedTitle: "Update Log",
        embedDesc: "All changes to this project are recorded here.",
        sectionAdded: "Added",
        sectionChanged: "Changed",
        sectionFixed: "Fixed",
        logs: [
            {
                version: "v26.10.30.0",
                date: "2026-10-30",
                title: "Data-driven Logs & Sub-page Fix",
                sections: [
                    {
                        key: "sectionAdded",
                        items: [
                            "Update logs are now data-driven; all log entries are stored in a separate data file, so adding a new log only requires appending an object to the data file, without touching the page structure.",
                            "Added a sub-page inside the embed, loaded by the embed itself using the same style rules and width; it exists as an independent file and can be opened on its own or embedded by the embed page.",
                            "The sub-page reports its height to the embed automatically, and the embed forwards it to the main page, forming a complete height-sync chain from the sub-page to the parent.",
                            "The sub-page and the embed share the same language data and formatting functions, so both update in sync on language switch."
                        ]
                    },
                    {
                        key: "sectionChanged",
                        items: [
                            "The embed HTML now only keeps the structure and rendering logic; log content is provided by the data file, greatly reducing file size.",
                            "Log dates are stored as data and formatted per language at render time: Chinese uses year/month/day, English uses day/month/year.",
                            "The embed renders logs in the order of the data entries; titles, section headers and list items are all read from data instead of being scattered in HTML.",
                            "Theme and language sync are consolidated into a single entry point; the embed only keeps the necessary message handling to avoid duplicated logic."
                        ]
                    },
                    {
                        key: "sectionFixed",
                        items: [
                            "Fixed the sub-page not following language changes from the embed.",
                            "Fixed the date format not updating after switching languages in the embed.",
                            "Fixed the sub-page height not being reported in time on initialization, which caused blank space on the parent page.",
                            "Fixed height jitter caused by duplicate message handling between the embed and the sub-page.",
                            "Fixed sync messages being sent before the sub-page was ready, causing the sync to be lost."
                        ]
                    }
                ]
            },
            {
                version: "v26.10.29.0",
                date: "2026-10-29",
                title: "Date Format Fix & Sub-page",
                sections: [
                    {
                        key: "sectionAdded",
                        items: [
                            "Added a sub-page inside the embed, loaded by the embed itself using the same rules and width.",
                            "The sub-page updates its height together with the embed and expands automatically when content changes.",
                            "The sub-page follows language changes from the embed, keeping its text consistent with the embed.",
                            "Added a FueyTV Settings entry to the download list, including link, access code, supported systems and release date."
                        ]
                    },
                    {
                        key: "sectionChanged",
                        items: [
                            "Dates are no longer hardcoded in the markup; they are stored as data and formatted per language at render time.",
                            "Chinese dates display as year/month/day, English dates display as day/month/year, and the two formats do not interfere with each other.",
                            "Dates in the download list now follow the same per-language formatting, with different orders in Chinese and English.",
                            "Height synchronization between the embed and the main page now relies on the sub-page reporting its height; the parent no longer measures it actively."
                        ]
                    },
                    {
                        key: "sectionFixed",
                        items: [
                            "Fixed the date format not changing when switching languages and always showing the same order.",
                            "Fixed the sub-page not following language changes from the embed.",
                            "Fixed the sub-page height not syncing on first load and only recovering after scrolling.",
                            "Fixed the download list date still showing the Chinese order in English mode."
                        ]
                    }
                ]
            },
            {
                version: "v26.10.13.1",
                date: "2026-10-13",
                title: "Left-handed Mode & Interaction Fixes",
                sections: [
                    {
                        key: "sectionAdded",
                        items: [
                            "Added a left-handed mode toggle; when enabled, the settings panel slides out from the left, keeping its rounded corners and its 16px gap from the browser edge.",
                            "The settings panel can be closed by dragging it back to the edge; dragging about one third of the panel width closes it, and its opacity fades with the drag distance.",
                            "Inside the settings panel, the title, labels, toggle row and footer buttons mirror automatically in left-handed mode.",
                            "The homepage hero, download page, about page, scroll-down button and settings panel all mirror to the left side in left-handed mode.",
                            "Security warnings inside the embed are now forwarded to the main page, which shows the toast with the same UI and language as the main page.",
                            "The navigation slider indicator recalculates its position in left-handed mode to avoid misalignment after mirroring."
                        ]
                    },
                    {
                        key: "sectionChanged",
                        items: [
                            "Switching left-handed mode now plays the panel close animation before mirroring the layout, avoiding misalignment during the switch.",
                            "A task lock now manages navigation dragging, segmented control dragging and settings panel dragging, allowing only one drag gesture at a time; the first one wins.",
                            "Page scroll is locked while dragging the navigation, dragging the segmented control, opening the settings panel or dragging the settings panel.",
                            "The language options in the settings panel are now ordered English first, Chinese second, matching the default language.",
                            "Segmented control positions are refreshed when the settings panel opens, ensuring the indicator inside the panel aligns correctly."
                        ]
                    },
                    {
                        key: "sectionFixed",
                        items: [
                            "Fixed the settings panel drifting when dragged to close in left-handed mode.",
                            "Fixed the settings panel not resetting its position after closing in left-handed mode.",
                            "Fixed the download page and about page not mirroring correctly in left-handed mode.",
                            "Fixed the search bar, item rows and tags on the download page not reversing in left-handed mode.",
                            "Fixed the about page list items and arrows not reversing in left-handed mode.",
                            "Fixed the homepage hero text not aligning to the right in left-handed mode.",
                            "Missing left-handed translations added to the language file."
                        ]
                    }
                ]
            },
            {
                version: "v26.10.13.0",
                date: "2026-10-13",
                title: "Search Bar & Multi-language Improvements",
                sections: [
                    {
                        key: "sectionAdded",
                        items: [
                            "Download page: added a search bar with a fully rounded design; the input and the search button share a single pill-shaped container.",
                            "Search matches both Chinese and English names, regardless of the current language, so projects can be found in either language.",
                            "Search also matches dates, supported systems and access codes, so any field can filter the corresponding entries.",
                            "Embed panel: removed the fixed height and now grows with its content.",
                            "Embed panel: height syncs in real time when the content changes, without the parent measuring it manually.",
                            "Embed panel: added cache refresh; each load carries a timestamp so the latest content is always loaded."
                        ]
                    },
                    {
                        key: "sectionChanged",
                        items: [
                            "Default language changed to English; the interface displays in English on first visit.",
                            "Top navigation bar is now a fully rounded pill with a glassmorphism background and shadow.",
                            "Search results now display only in the current language, no mixed output.",
                            "The search bar reverses automatically in left-handed mode, with the input right-aligned.",
                            "The embed syncs the current language to the sub-page on language switch, keeping its content consistent with the main page."
                        ]
                    },
                    {
                        key: "sectionFixed",
                        items: [
                            "Fixed default language mismatch on the download and about pages.",
                            "Fixed language switch not reflected correctly in the settings panel.",
                            "Fixed the embed panel not visible on mobile and server deployments.",
                            "Fixed the parent page still showing a blank area when the embed fails to load.",
                            "Fixed the embed height not updating in time after content changes."
                        ]
                    }
                ]
            },
            {
                version: "v26.10.12.0",
                date: "2026-10-12",
                title: "Embed Panel",
                sections: [
                    {
                        key: "sectionAdded",
                        items: [
                            "Added an expandable embed area below the homepage hero.",
                            "Added a scroll-down circular button with a glow effect; clicking it smoothly scrolls to the embed area.",
                            "Embedded content is loaded separately from the main page; the embed exists as an independent file.",
                            "The embed communicates with the main page via messages, receiving theme, language and handedness settings.",
                            "The embed reports its height to the main page, which adjusts the iframe height accordingly.",
                            "The embed re-reports its height on load, content change and window resize."
                        ]
                    },
                    {
                        key: "sectionChanged",
                        items: [
                            "Homepage layout adjusted so the embed area sits below the first screen.",
                            "The scroll-down button hides automatically after the page scrolls past a certain distance and reappears near the top.",
                            "The scroll-down button mirrors to the bottom-left corner in left-handed mode.",
                            "When the embed fails to load, the embed area and the scroll-down button hide automatically to avoid blank space."
                        ]
                    }
                ]
            },
            {
                version: "v26.10.11.0",
                date: "2026-10-11",
                title: "Settings & Theme",
                sections: [
                    {
                        key: "sectionAdded",
                        items: [
                            "Added a draggable segmented control in the settings panel; both theme and language options now use the segmented control style.",
                            "The segmented control supports both clicking and dragging; the indicator follows the pointer while dragging and snaps to the nearest option on release.",
                            "Added light / dark theme toggle with a liquid transition; background, text, border and shadow all transition together on switch.",
                            "Added English / Chinese language toggle; navigation, page content, button text and toast text all update on switch.",
                            "Added a reset settings button with a confirmation dialog; confirming clears all local storage and refreshes the page.",
                            "Added a navigation slider indicator; the current page's nav item has a highlighted background that can be dragged to switch.",
                            "Added a gear icon to the settings button; the gear rotates on hover.",
                            "Added a disabled-operation toast; right-click, selection, copy, cut and developer tools are intercepted with a toast.",
                            "Added a page exit overlay; switching pages plays the overlay animation before navigating."
                        ]
                    },
                    {
                        key: "sectionChanged",
                        items: [
                            "Overall UI changed to a glassmorphism style; navigation, settings panel, page cards and footer all use translucent backgrounds with blur.",
                            "Buttons and cards changed to fully rounded corners; nav items, segmented controls and settings buttons use pill shapes or rounded rectangles.",
                            "The footer is now pill-shaped and fixed at the bottom center of the page.",
                            "Shadows on the navigation bar, settings panel, page cards and footer are now multi-layered and soft, with dark-mode variants.",
                            "The settings panel slides in from the right with a spring easing and slides out in reverse on close.",
                            "After switching theme or language, the navigation slider indicator repositions automatically to avoid misalignment caused by text width changes."
                        ]
                    }
                ]
            },
            {
                version: "v26.10.10.0",
                date: "2026-10-10",
                title: "First Release",
                sections: [
                    {
                        key: "sectionAdded",
                        items: [
                            "Initial homepage with a hero title, a hand-drawn underline decoration and a person image.",
                            "The hero title supports Chinese and English switching; the hand-drawn underline has a subtle wobble animation.",
                            "Download page showing a project list with name, release date, supported systems, link and access code.",
                            "The download page supports one-click copy of the access code; the button briefly shows a copied state after copying.",
                            "About page showing a configurable link list with Chinese and English names.",
                            "About page links support external links, email, license text and other forms.",
                            "Custom cursor replacing the default pointer.",
                            "Custom font; the whole site uses the same handwritten-style font.",
                            "Navigation bar fixed at the top with Home, Download, About Us and Settings entries.",
                            "Footer fixed at the bottom showing the copyright year; the year updates automatically."
                        ]
                    }
                ]
            }
        ]
    }
};