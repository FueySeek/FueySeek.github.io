(function(){
    'use strict';
    var C=window.Core={};
    
    var D={
    'zh-CN':{newTab:'新建标签页',back:'后退',forward:'前进',reload:'刷新',search:'搜索',searchOrUrl:'搜索或输入网址',searchWeb:'搜索网页',ai:'Ai',settings:'设置',cancel:'取消',confirm:'确定',save:'保存',delete:'删除',add:'添加',edit:'编辑',close:'关闭',copy:'复制',show:'显示',hide:'隐藏',more:'更多',newWindow:'新建窗口',newIncognito:'新建无痕窗口',zoom:'缩放',bookmarksBar:'收藏栏',history:'历史记录',tabGroups:'标签组',downloads:'下载',passwords:'密码',clearBrowsing:'清除浏览数据',translate:'翻译',help:'帮助和反馈',addBookmark:'添加书签',bookmarkCurrent:'收藏此页',manageBookmarks:'管理书签',toggleBookmarkBar:'显示或隐藏收藏栏',openBookmarks:'打开收藏夹',openInNewWindow:'在新标签打开',openInIncognito:'在无痕窗口打开',openInTabGroup:'在新标签组打开',appearance:'外观',searchSection:'搜索',aiSection:'Ai 与翻译',accessibility:'辅助功能',dataSection:'数据',theme:'主题',language:'语言',font:'字体',followSystem:'跟随系统',engine:'搜索引擎',customEngine:'自定义引擎',engineHint:'例如 https://example.com/search?q=',fontSize:'字号',buttonSize:'按钮大小',colorBlind:'色盲模式',leftHand:'左手模式',none:'无',small:'小',medium:'中',large:'大',xlarge:'超大',aiConfig:'Ai 配置',provider:'厂商',endpoint:'接口地址',apiKey:'API Key',chatSection:'对话',chatModel:'对话模型',temperature:'Temperature',thinking:'思考模式',transSection:'翻译',transModel:'翻译模型',transStrength:'翻译强度',transTarget:'目标语言',transDisclaimer:'翻译由 Ai 完成，不一定 100% 准确，请留意。',off:'关闭',low:'低',high:'高',export:'导出',import:'导入',plugins:'插件',clearAll:'清除全部数据',clearAllHint:'包括书签、快捷方式、密码、对话、设置、主题',exportHint:'打包为 ZIP',importHint:'从 ZIP 恢复',pluginHint:'ZIP 内含 index.js',userAgreement:'用户协议',agree:'同意',decline:'拒绝',addShortcut:'添加快捷方式',name:'名称',url:'网址',domain:'网站域名',username:'用户名',password:'密码',addPassword:'新增密码',managePasswords:'管理已保存的网站登录凭据',customTheme:'自定义主题',themeName:'主题名称',backgroundColor:'背景色',primaryColor:'主色',accentColor:'强调色',uploadImage:'上传图片',chooseImage:'选择图片',noImage:'未选择图片',uploading:'读取中…',imageNotSupported:'不支持的文件类型',imageReadFail:'读取失败，请重试',noShortcuts:'暂无快捷方式',noPasswords:'暂无密码',noBookmarks:'暂无书签',noHistory:'暂无历史',noDownloads:'暂无下载',noPlugins:'暂无插件',clearConfirm:'此操作无法撤销，确定继续？',deleteConfirm:'确定删除？',nameRequired:'名称不能为空',urlRequired:'网址不能为空',confirmAgreement:'请先同意用户协议',agreementDeclined:'您拒绝了用户协议，无法继续使用',aiChat:'与 Ai 聊天',aiSend:'发送',aiClear:'清空',aiWelcome:'输入内容开始对话',aiNotConfigured:'未配置接口或密钥，请前往 Ai 设置填写。',aiRequestFail:'请求失败',loading:'加载中…',pageNotFound:'页面不存在',bookmarkAdded:'已添加书签',shortcutAdded:'已添加快捷方式',saved:'已保存',deleted:'已删除',copied:'已复制',imported:'导入成功',exported:'导出成功',invalidZip:'无效的 ZIP 文件',recentSearches:'最近访问'},
    'en-US':{newTab:'New tab',back:'Back',forward:'Forward',reload:'Reload',search:'Search',searchOrUrl:'Search or enter URL',searchWeb:'Search the web',ai:'Ai',settings:'Settings',cancel:'Cancel',confirm:'OK',save:'Save',delete:'Delete',add:'Add',edit:'Edit',close:'Close',copy:'Copy',show:'Show',hide:'Hide',more:'More',newWindow:'New window',newIncognito:'New Incognito window',zoom:'Zoom',bookmarksBar:'Bookmarks bar',history:'History',tabGroups:'Tab groups',downloads:'Downloads',passwords:'Passwords',clearBrowsing:'Clear browsing data',translate:'Translate',help:'Help & feedback',addBookmark:'Add bookmark',bookmarkCurrent:'Bookmark this page',manageBookmarks:'Manage bookmarks',toggleBookmarkBar:'Toggle bookmarks bar',openBookmarks:'Open bookmarks',openInNewWindow:'Open in new tab',openInIncognito:'Open in Incognito',openInTabGroup:'Open in new tab group',appearance:'Appearance',searchSection:'Search',aiSection:'Ai & Translation',accessibility:'Accessibility',dataSection:'Data',theme:'Theme',language:'Language',font:'Font',followSystem:'Follow system',engine:'Search engine',customEngine:'Custom engine',engineHint:'e.g. https://example.com/search?q=',fontSize:'Font size',buttonSize:'Button size',colorBlind:'Color blind mode',leftHand:'Left-handed mode',none:'None',small:'Small',medium:'Medium',large:'Large',xlarge:'X-Large',aiConfig:'Ai configuration',provider:'Provider',endpoint:'Endpoint',apiKey:'API Key',chatSection:'Chat',chatModel:'Chat model',temperature:'Temperature',thinking:'Thinking mode',transSection:'Translation',transModel:'Translation model',transStrength:'Translation strength',transTarget:'Target language',transDisclaimer:'Translation is performed by Ai. Not guaranteed to be 100% accurate.',off:'Off',low:'Low',high:'High',export:'Export',import:'Import',plugins:'Plugins',clearAll:'Clear all data',clearAllHint:'Includes bookmarks, shortcuts, passwords, chat, settings, themes',exportHint:'Package as ZIP',importHint:'Restore from ZIP',pluginHint:'ZIP containing index.js',userAgreement:'User Agreement',agree:'Agree',decline:'Decline',addShortcut:'Add shortcut',name:'Name',url:'URL',domain:'Domain',username:'Username',password:'Password',addPassword:'Add password',managePasswords:'Manage saved website credentials',customTheme:'Custom theme',themeName:'Theme name',backgroundColor:'Background color',primaryColor:'Primary color',accentColor:'Accent color',uploadImage:'Upload image',chooseImage:'Choose image',noImage:'No image selected',uploading:'Reading…',imageNotSupported:'Unsupported file type',imageReadFail:'Failed to read. Please retry.',noShortcuts:'No shortcuts',noPasswords:'No passwords',noBookmarks:'No bookmarks',noHistory:'No history',noDownloads:'No downloads',noPlugins:'No plugins',clearConfirm:'This cannot be undone. Continue?',deleteConfirm:'Confirm delete?',nameRequired:'Name is required',urlRequired:'URL is required',confirmAgreement:'Please accept the User Agreement first',agreementDeclined:'You declined the User Agreement. Cannot continue.',aiChat:'Chat with Ai',aiSend:'Send',aiClear:'Clear',aiWelcome:'Type a message to start',aiNotConfigured:'Not configured. Open Ai settings to enter endpoint and API key.',aiRequestFail:'Request failed',loading:'Loading…',pageNotFound:'Page not found',bookmarkAdded:'Bookmark added',shortcutAdded:'Shortcut added',saved:'Saved',deleted:'Deleted',copied:'Copied',imported:'Import successful',exported:'Export successful',invalidZip:'Invalid ZIP file',recentSearches:'Recently visited'},
    'zh-TW':{newTab:'新增分頁',back:'上一頁',forward:'下一頁',reload:'重新整理',search:'搜尋',searchOrUrl:'搜尋或輸入網址',searchWeb:'搜尋網頁',ai:'Ai',settings:'設定',cancel:'取消',confirm:'確定',save:'儲存',delete:'刪除',add:'新增',edit:'編輯',close:'關閉',copy:'複製',show:'顯示',hide:'隱藏',more:'更多',newWindow:'新增視窗',newIncognito:'新增無痕視窗',zoom:'縮放',bookmarksBar:'書籤列',history:'瀏覽記錄',tabGroups:'分頁群組',downloads:'下載',passwords:'密碼',clearBrowsing:'清除瀏覽資料',translate:'翻譯',help:'說明與意見回饋',addBookmark:'新增書籤',bookmarkCurrent:'將此頁加入書籤',manageBookmarks:'管理書籤',toggleBookmarkBar:'顯示或隱藏書籤列',openBookmarks:'開啟書籤',openInNewWindow:'在新分頁開啟',openInIncognito:'在無痕視窗開啟',openInTabGroup:'在新分頁群組開啟',appearance:'外觀',searchSection:'搜尋',aiSection:'Ai 與翻譯',accessibility:'無障礙',dataSection:'資料',theme:'主題',language:'語言',font:'字型',followSystem:'跟隨系統',engine:'搜尋引擎',customEngine:'自訂引擎',engineHint:'例如 https://example.com/search?q=',fontSize:'字級',buttonSize:'按鈕大小',colorBlind:'色盲模式',leftHand:'左手模式',none:'無',small:'小',medium:'中',large:'大',xlarge:'特大',aiConfig:'Ai 設定',provider:'廠商',endpoint:'介面位址',apiKey:'API Key',chatSection:'對話',chatModel:'對話模型',temperature:'Temperature',thinking:'思考模式',transSection:'翻譯',transModel:'翻譯模型',transStrength:'翻譯強度',transTarget:'目標語言',transDisclaimer:'翻譯由 Ai 完成，不一定 100% 準確，請留意。',off:'關閉',low:'低',high:'高',export:'匯出',import:'匯入',plugins:'外掛',clearAll:'清除全部資料',clearAllHint:'包含書籤、捷徑、密碼、對話、設定、主題',exportHint:'打包為 ZIP',importHint:'從 ZIP 還原',pluginHint:'ZIP 內含 index.js',userAgreement:'使用者協議',agree:'同意',decline:'拒絕',addShortcut:'新增捷徑',name:'名稱',url:'網址',domain:'網站網域',username:'使用者名稱',password:'密碼',addPassword:'新增密碼',managePasswords:'管理已儲存的網站登入憑證',customTheme:'自訂主題',themeName:'主題名稱',backgroundColor:'背景色',primaryColor:'主色',accentColor:'強調色',uploadImage:'上傳圖片',chooseImage:'選擇圖片',noImage:'未選擇圖片',uploading:'讀取中…',imageNotSupported:'不支援的檔案類型',imageReadFail:'讀取失敗，請重試',noShortcuts:'尚無捷徑',noPasswords:'尚無密碼',noBookmarks:'尚無書籤',noHistory:'尚無記錄',noDownloads:'尚無下載',noPlugins:'尚無外掛',clearConfirm:'此操作無法復原，確定繼續？',deleteConfirm:'確定刪除？',nameRequired:'名稱不能為空',urlRequired:'網址不能為空',confirmAgreement:'請先同意使用者協議',agreementDeclined:'您拒絕了使用者協議，無法繼續使用',aiChat:'與 Ai 聊天',aiSend:'傳送',aiClear:'清除',aiWelcome:'輸入內容開始對話',aiNotConfigured:'未設定介面或金鑰，請前往 Ai 設定填寫。',aiRequestFail:'請求失敗',loading:'載入中…',pageNotFound:'頁面不存在',bookmarkAdded:'已新增書籤',shortcutAdded:'已新增捷徑',saved:'已儲存',deleted:'已刪除',copied:'已複製',imported:'匯入成功',exported:'匯出成功',invalidZip:'無效的 ZIP 檔案',recentSearches:'最近訪問'},
    'ja-JP':{newTab:'新しいタブ',back:'戻る',forward:'進む',reload:'再読み込み',search:'検索',searchOrUrl:'検索または URL を入力',searchWeb:'ウェブを検索',ai:'Ai',settings:'設定',cancel:'キャンセル',confirm:'OK',save:'保存',delete:'削除',add:'追加',edit:'編集',close:'閉じる',copy:'コピー',show:'表示',hide:'非表示',more:'その他',newWindow:'新しいウィンドウ',newIncognito:'新しいシークレットウィンドウ',zoom:'ズーム',bookmarksBar:'ブックマークバー',history:'履歴',tabGroups:'タブグループ',downloads:'ダウンロード',passwords:'パスワード',clearBrowsing:'閲覧データを削除',translate:'翻訳',help:'ヘルプとフィードバック',addBookmark:'ブックマークを追加',bookmarkCurrent:'このページをブックマーク',manageBookmarks:'ブックマークを管理',toggleBookmarkBar:'ブックマークバーの表示切替',openBookmarks:'ブックマークを開く',openInNewWindow:'新しいタブで開く',openInIncognito:'シークレットウィンドウで開く',openInTabGroup:'新しいタブグループで開く',appearance:'外観',searchSection:'検索',aiSection:'Ai と翻訳',accessibility:'ユーザー補助',dataSection:'データ',theme:'テーマ',language:'言語',font:'フォント',followSystem:'システムに従う',engine:'検索エンジン',customEngine:'カスタムエンジン',engineHint:'例 https://example.com/search?q=',fontSize:'文字サイズ',buttonSize:'ボタンサイズ',colorBlind:'色覚モード',leftHand:'左手モード',none:'なし',small:'小',medium:'中',large:'大',xlarge:'特大',aiConfig:'Ai 設定',provider:'プロバイダー',endpoint:'エンドポイント',apiKey:'API キー',chatSection:'チャット',chatModel:'チャットモデル',temperature:'Temperature',thinking:'思考モード',transSection:'翻訳',transModel:'翻訳モデル',transStrength:'翻訳強度',transTarget:'ターゲット言語',transDisclaimer:'翻訳は Ai が行います。100% 正確とは限りません。',off:'オフ',low:'低',high:'高',export:'エクスポート',import:'インポート',plugins:'プラグイン',clearAll:'すべてのデータを削除',clearAllHint:'ブックマーク、ショートカット、パスワード、チャット、設定、テーマを含む',exportHint:'ZIP にまとめる',importHint:'ZIP から復元',pluginHint:'ZIP に index.js を含む',userAgreement:'利用規約',agree:'同意',decline:'拒否',addShortcut:'ショートカットを追加',name:'名前',url:'URL',domain:'ドメイン',username:'ユーザー名',password:'パスワード',addPassword:'パスワードを追加',managePasswords:'保存済みのサイト認証情報を管理',customTheme:'カスタムテーマ',themeName:'テーマ名',backgroundColor:'背景色',primaryColor:'メインカラー',accentColor:'アクセントカラー',uploadImage:'画像をアップロード',chooseImage:'画像を選択',noImage:'画像が選択されていません',uploading:'読み込み中…',imageNotSupported:'サポートされていないファイル形式',imageReadFail:'読み込みに失敗しました。再度お試しください。',noShortcuts:'ショートカットなし',noPasswords:'パスワードなし',noBookmarks:'ブックマークなし',noHistory:'履歴なし',noDownloads:'ダウンロードなし',noPlugins:'プラグインなし',clearConfirm:'元に戻せません。続行しますか？',deleteConfirm:'削除しますか？',nameRequired:'名前は必須です',urlRequired:'URL は必須です',confirmAgreement:'先に利用規約に同意してください',agreementDeclined:'利用規約を拒否したため続行できません',aiChat:'Ai とチャット',aiSend:'送信',aiClear:'クリア',aiWelcome:'メッセージを入力して開始',aiNotConfigured:'未設定です。Ai 設定でエンドポイントと API キーを入力してください。',aiRequestFail:'リクエスト失敗',loading:'読み込み中…',pageNotFound:'ページが見つかりません',bookmarkAdded:'ブックマークを追加しました',shortcutAdded:'ショートカットを追加しました',saved:'保存しました',deleted:'削除しました',copied:'コピーしました',imported:'インポート完了',exported:'エクスポート完了',invalidZip:'無効な ZIP ファイル',recentSearches:'最近のアクセス'},
    'ko-KR':{newTab:'새 탭',back:'뒤로',forward:'앞으로',reload:'새로고침',search:'검색',searchOrUrl:'검색 또는 URL 입력',searchWeb:'웹 검색',ai:'Ai',settings:'설정',cancel:'취소',confirm:'확인',save:'저장',delete:'삭제',add:'추가',edit:'편집',close:'닫기',copy:'복사',show:'표시',hide:'숨기기',more:'더보기',newWindow:'새 창',newIncognito:'새 시크릿 창',zoom:'확대/축소',bookmarksBar:'북마크바',history:'방문 기록',tabGroups:'탭 그룹',downloads:'다운로드',passwords:'비밀번호',clearBrowsing:'인터넷 사용 기록 삭제',translate:'번역',help:'도움말 및 피드백',addBookmark:'북마크 추가',bookmarkCurrent:'이 페이지 북마크',manageBookmarks:'북마크 관리',toggleBookmarkBar:'북마크바 표시/숨기기',openBookmarks:'북마크 열기',openInNewWindow:'새 탭에서 열기',openInIncognito:'시크릿 창에서 열기',openInTabGroup:'새 탭 그룹에서 열기',appearance:'모양',searchSection:'검색',aiSection:'Ai 및 번역',accessibility:'접근성',dataSection:'데이터',theme:'테마',language:'언어',font:'글꼴',followSystem:'시스템 따르기',engine:'검색 엔진',customEngine:'사용자 지정 엔진',engineHint:'예 https://example.com/search?q=',fontSize:'글자 크기',buttonSize:'버튼 크기',colorBlind:'색맹 모드',leftHand:'왼손 모드',none:'없음',small:'작게',medium:'중간',large:'크게',xlarge:'매우 크게',aiConfig:'Ai 설정',provider:'공급자',endpoint:'엔드포인트',apiKey:'API 키',chatSection:'채팅',chatModel:'채팅 모델',temperature:'Temperature',thinking:'사고 모드',transSection:'번역',transModel:'번역 모델',transStrength:'번역 강도',transTarget:'대상 언어',transDisclaimer:'번역은 Ai가 수행하며 100% 정확하지 않을 수 있습니다.',off:'끄기',low:'낮음',high:'높음',export:'내보내기',import:'가져오기',plugins:'플러그인',clearAll:'모든 데이터 삭제',clearAllHint:'북마크, 바로가기, 비밀번호, 채팅, 설정, 테마 포함',exportHint:'ZIP으로 패키징',importHint:'ZIP에서 복원',pluginHint:'index.js가 포함된 ZIP',userAgreement:'사용자 약관',agree:'동의',decline:'거부',addShortcut:'바로가기 추가',name:'이름',url:'URL',domain:'도메인',username:'사용자 이름',password:'비밀번호',addPassword:'비밀번호 추가',managePasswords:'저장된 사이트 자격 증명 관리',customTheme:'사용자 지정 테마',themeName:'테마 이름',backgroundColor:'배경색',primaryColor:'주 색상',accentColor:'강조 색상',uploadImage:'이미지 업로드',chooseImage:'이미지 선택',noImage:'이미지 선택 안 됨',uploading:'읽는 중…',imageNotSupported:'지원하지 않는 파일 형식',imageReadFail:'읽기 실패. 다시 시도해 주세요.',noShortcuts:'바로가기 없음',noPasswords:'비밀번호 없음',noBookmarks:'북마크 없음',noHistory:'방문 기록 없음',noDownloads:'다운로드 없음',noPlugins:'플러그인 없음',clearConfirm:'되돌릴 수 없습니다. 계속하시겠습니까?',deleteConfirm:'삭제하시겠습니까?',nameRequired:'이름은 필수입니다',urlRequired:'URL은 필수입니다',confirmAgreement:'먼저 사용자 약관에 동의해 주세요',agreementDeclined:'사용자 약관을 거부하여 계속할 수 없습니다',aiChat:'Ai와 채팅',aiSend:'보내기',aiClear:'지우기',aiWelcome:'메시지를 입력하여 시작',aiNotConfigured:'구성되지 않았습니다. Ai 설정에서 엔드포인트와 API 키를 입력하세요.',aiRequestFail:'요청 실패',loading:'불러오는 중…',pageNotFound:'페이지를 찾을 수 없음',bookmarkAdded:'북마크 추가됨',shortcutAdded:'바로가기 추가됨',saved:'저장됨',deleted:'삭제됨',copied:'복사됨',imported:'가져오기 완료',exported:'내보내기 완료',invalidZip:'잘못된 ZIP 파일',recentSearches:'최근 방문'},
    'fr-FR':{newTab:'Nouvel onglet',back:'Retour',forward:'Avancer',reload:'Actualiser',search:'Rechercher',searchOrUrl:'Rechercher ou saisir une URL',searchWeb:'Rechercher sur le Web',ai:'Ai',settings:'Paramètres',cancel:'Annuler',confirm:'OK',save:'Enregistrer',delete:'Supprimer',add:'Ajouter',edit:'Modifier',close:'Fermer',copy:'Copier',show:'Afficher',hide:'Masquer',more:'Plus',newWindow:'Nouvelle fenêtre',newIncognito:'Nouvelle fenêtre de navigation privée',zoom:'Zoom',bookmarksBar:'Barre de favoris',history:'Historique',tabGroups:'Groupes d’onglets',downloads:'Téléchargements',passwords:'Mots de passe',clearBrowsing:'Effacer les données de navigation',translate:'Traduire',help:'Aide et commentaires',addBookmark:'Ajouter un favori',bookmarkCurrent:'Ajouter cette page aux favoris',manageBookmarks:'Gérer les favoris',toggleBookmarkBar:'Afficher/masquer la barre de favoris',openBookmarks:'Ouvrir les favoris',openInNewWindow:'Ouvrir dans un nouvel onglet',openInIncognito:'Ouvrir en navigation privée',openInTabGroup:'Ouvrir dans un nouveau groupe d’onglets',appearance:'Apparence',searchSection:'Recherche',aiSection:'Ai et traduction',accessibility:'Accessibilité',dataSection:'Données',theme:'Thème',language:'Langue',font:'Police',followSystem:'Suivre le système',engine:'Moteur de recherche',customEngine:'Moteur personnalisé',engineHint:'ex. https://example.com/search?q=',fontSize:'Taille du texte',buttonSize:'Taille des boutons',colorBlind:'Mode daltonien',leftHand:'Mode gaucher',none:'Aucun',small:'Petit',medium:'Moyen',large:'Grand',xlarge:'Très grand',aiConfig:'Configuration Ai',provider:'Fournisseur',endpoint:'Point de terminaison',apiKey:'Clé API',chatSection:'Chat',chatModel:'Modèle de chat',temperature:'Température',thinking:'Mode réflexion',transSection:'Traduction',transModel:'Modèle de traduction',transStrength:'Force de traduction',transTarget:'Langue cible',transDisclaimer:'Traduction effectuée par l’IA. Précision non garantie à 100 %.',off:'Désactivé',low:'Bas',high:'Haut',export:'Exporter',import:'Importer',plugins:'Extensions',clearAll:'Effacer toutes les données',clearAllHint:'Favoris, raccourcis, mots de passe, chat, paramètres, thèmes',exportHint:'Empaqueter en ZIP',importHint:'Restaurer depuis ZIP',pluginHint:'ZIP contenant index.js',userAgreement:'Contrat d’utilisation',agree:'Accepter',decline:'Refuser',addShortcut:'Ajouter un raccourci',name:'Nom',url:'URL',domain:'Domaine',username:'Nom d’utilisateur',password:'Mot de passe',addPassword:'Ajouter un mot de passe',managePasswords:'Gérer les identifiants de sites enregistrés',customTheme:'Thème personnalisé',themeName:'Nom du thème',backgroundColor:'Couleur de fond',primaryColor:'Couleur principale',accentColor:'Couleur d’accent',uploadImage:'Télécharger une image',chooseImage:'Choisir une image',noImage:'Aucune image sélectionnée',uploading:'Lecture…',imageNotSupported:'Type de fichier non pris en charge',imageReadFail:'Échec de lecture. Veuillez réessayer.',noShortcuts:'Aucun raccourci',noPasswords:'Aucun mot de passe',noBookmarks:'Aucun favori',noHistory:'Aucun historique',noDownloads:'Aucun téléchargement',noPlugins:'Aucune extension',clearConfirm:'Cette action est irréversible. Continuer ?',deleteConfirm:'Confirmer la suppression ?',nameRequired:'Le nom est obligatoire',urlRequired:'L’URL est obligatoire',confirmAgreement:'Veuillez d’abord accepter le contrat',agreementDeclined:'Contrat refusé. Impossible de continuer.',aiChat:'Discuter avec Ai',aiSend:'Envoyer',aiClear:'Effacer',aiWelcome:'Saisissez un message pour commencer',aiNotConfigured:'Non configuré. Ouvrez les paramètres Ai pour saisir le point de terminaison et la clé API.',aiRequestFail:'Échec de la requête',loading:'Chargement…',pageNotFound:'Page introuvable',bookmarkAdded:'Favori ajouté',shortcutAdded:'Raccourci ajouté',saved:'Enregistré',deleted:'Supprimé',copied:'Copié',imported:'Importation réussie',exported:'Exportation réussie',invalidZip:'Fichier ZIP invalide',recentSearches:'Récemment visités'}
    };
    
    var EXTRA={
    'zh-CN':{tabsSheet:'标签页',leftHandHint:'界面左右镜像，方便左手单手操作',readerMode:'阅读模式',siteMode:'站点模式',readerLoading:'正在通过代理加载…',readerFail:'页面加载失败',readerNotice:'可以使用阅读模式，或在新标签中打开。',webBlocked:'该网站不允许内嵌显示',openBrowser:'在浏览器中打开',readerEmpty:'没有可显示的内容',fetchModels:'一键获取模型',fetchingModels:'获取中…',fetchModelsOk:'已获取 {n} 个模型',fetchModelsFail:'获取失败：{msg}',chooseModel:'选择模型',modelsEmpty:'模型列表为空',modelPlaceholder:'模型名称',aiGoal:'对话目标',aiGoalGeneral:'通用助手',aiGoalSummary:'网页总结',aiGoalTranslate:'翻译助手',aiGoalCode:'代码助手',aiWelcomeTitle:'你的浏览器 Ai 助手',aiWelcomeHint:'围绕当前网页总结、翻译、解释，也可以直接问我任何问题。',aiSuggestSummary:'总结当前页面',aiSuggestTranslate:'翻译成中文',aiSuggestExplain:'解释这段内容',aiSuggestCode:'帮我写代码',aiContext:'当前页面',aiClear:'清空',aiClearConfirm:'确定清空全部对话？',aiThinking:'思考中…',aiNoModel:'还没有选择模型，点“一键获取模型”后选择即可。',aiGoSettings:'前往设置',github:'GitHub',githubToken:'GitHub 令牌',githubTokenHint:'可选。填写后使用更高调用额度，并显示剩余次数。',githubRate:'调用余额',githubCheck:'检查额度',githubChecking:'查询中…',githubRemaining:'搜索剩余 {remaining}/{limit}',githubReset:'重置 {time}',githubInvalid:'令牌无效或已过期',githubFail:'额度查询失败',githubSearch:'搜索 GitHub',githubEmpty:'输入关键词搜索 GitHub 仓库',githubResults:'找到 {n} 个仓库',githubAnon:'未填写令牌，使用匿名额度'},
    'en-US':{tabsSheet:'Tabs',leftHandHint:'Mirror the interface for one-handed left use',readerMode:'Reader mode',siteMode:'Site mode',readerLoading:'Loading through proxy…',readerFail:'Unable to load page',readerNotice:'Use reader mode, or open it in a new tab.',webBlocked:'This site blocks embedding',openBrowser:'Open in browser',readerEmpty:'Nothing to display',fetchModels:'Fetch models',fetchingModels:'Fetching…',fetchModelsOk:'Loaded {n} models',fetchModelsFail:'Fetch failed: {msg}',chooseModel:'Choose model',modelsEmpty:'Model list is empty',modelPlaceholder:'Model name',aiGoal:'Conversation goal',aiGoalGeneral:'General assistant',aiGoalSummary:'Page summary',aiGoalTranslate:'Translation',aiGoalCode:'Code assistant',aiWelcomeTitle:'Your browser Ai assistant',aiWelcomeHint:'Summarize, translate or explain the current page, or just ask me anything.',aiSuggestSummary:'Summarize this page',aiSuggestTranslate:'Translate to English',aiSuggestExplain:'Explain this content',aiSuggestCode:'Help me write code',aiContext:'Current page',aiClear:'Clear',aiClearConfirm:'Clear the whole conversation?',aiThinking:'Thinking…',aiNoModel:'No model selected. Use Fetch models and pick one.',aiGoSettings:'Open settings',github:'GitHub',githubToken:'GitHub token',githubTokenHint:'Optional. Raises the rate limit and shows the remaining calls.',githubRate:'API quota',githubCheck:'Check quota',githubChecking:'Checking…',githubRemaining:'Search remaining {remaining}/{limit}',githubReset:'Resets {time}',githubInvalid:'Token is invalid or expired',githubFail:'Quota check failed',githubSearch:'Search GitHub',githubEmpty:'Type keywords to search GitHub repositories',githubResults:'{n} repositories found',githubAnon:'No token, using anonymous quota'},
    'zh-TW':{tabsSheet:'分頁',leftHandHint:'介面左右鏡像，方便左手單手操作',readerMode:'閱讀模式',siteMode:'站點模式',readerLoading:'正在透過代理載入…',readerFail:'頁面載入失敗',readerNotice:'可使用閱讀模式，或在新分頁開啟。',webBlocked:'此網站不允許內嵌顯示',openBrowser:'在瀏覽器中開啟',readerEmpty:'沒有可顯示的內容',fetchModels:'一鍵取得模型',fetchingModels:'取得中…',fetchModelsOk:'已取得 {n} 個模型',fetchModelsFail:'取得失敗：{msg}',chooseModel:'選擇模型',modelsEmpty:'模型列表為空',modelPlaceholder:'模型名稱',aiGoal:'對話目標',aiGoalGeneral:'通用助手',aiGoalSummary:'網頁總結',aiGoalTranslate:'翻譯助手',aiGoalCode:'程式碼助手',aiWelcomeTitle:'你的瀏覽器 Ai 助手',aiWelcomeHint:'圍繞目前網頁總結、翻譯、解釋，也可以直接問我任何問題。',aiSuggestSummary:'總結目前頁面',aiSuggestTranslate:'翻譯成中文',aiSuggestExplain:'解釋這段內容',aiSuggestCode:'幫我寫程式',aiContext:'目前頁面',aiClear:'清空',aiClearConfirm:'確定清空全部對話？',aiThinking:'思考中…',aiNoModel:'尚未選擇模型，點「一鍵取得模型」後選擇即可。',aiGoSettings:'前往設定',github:'GitHub',githubToken:'GitHub 權杖',githubTokenHint:'可選。填寫後使用更高額度，並顯示剩餘次數。',githubRate:'呼叫餘額',githubCheck:'檢查額度',githubChecking:'查詢中…',githubRemaining:'搜尋剩餘 {remaining}/{limit}',githubReset:'重置 {time}',githubInvalid:'權杖無效或已過期',githubFail:'額度查詢失敗',githubSearch:'搜尋 GitHub',githubEmpty:'輸入關鍵詞搜尋 GitHub 儲存庫',githubResults:'找到 {n} 個儲存庫',githubAnon:'未填寫權杖，使用匿名額度'},
    'ja-JP':{tabsSheet:'タブ',leftHandHint:'画面を左右反転して左手で操作しやすくします',readerMode:'リーダーモード',siteMode:'サイトモード',readerLoading:'プロキシ経由で読み込み中…',readerFail:'ページを読み込めません',readerNotice:'リーダーモードか新しいタブで開けます。',webBlocked:'このサイトは埋め込みを許可していません',openBrowser:'ブラウザで開く',readerEmpty:'表示できる内容がありません',fetchModels:'モデルを取得',fetchingModels:'取得中…',fetchModelsOk:'{n} 個のモデルを取得しました',fetchModelsFail:'取得失敗：{msg}',chooseModel:'モデルを選択',modelsEmpty:'モデル一覧が空です',modelPlaceholder:'モデル名',aiGoal:'対話の目的',aiGoalGeneral:'汎用アシスタント',aiGoalSummary:'ページ要約',aiGoalTranslate:'翻訳アシスタント',aiGoalCode:'コードアシスタント',aiWelcomeTitle:'ブラウザ Ai アシスタント',aiWelcomeHint:'表示中のページの要約・翻訳・解説や、どんな質問にも対応します。',aiSuggestSummary:'このページを要約',aiSuggestTranslate:'日本語に翻訳',aiSuggestExplain:'この内容を説明',aiSuggestCode:'コードを書く',aiContext:'現在のページ',aiClear:'クリア',aiClearConfirm:'会話をすべて消去しますか？',aiThinking:'考え中…',aiNoModel:'モデルが未選択です。「モデルを取得」から選択してください。',aiGoSettings:'設定へ',github:'GitHub',githubToken:'GitHub トークン',githubTokenHint:'任意。入力すると上限が増え、残り回数を表示します。',githubRate:'呼び出し残数',githubCheck:'残数を確認',githubChecking:'確認中…',githubRemaining:'検索残り {remaining}/{limit}',githubReset:'リセット {time}',githubInvalid:'トークンが無効か期限切れです',githubFail:'残数の取得に失敗',githubSearch:'GitHub を検索',githubEmpty:'キーワードで GitHub リポジトリを検索',githubResults:'{n} 件のリポジトリ',githubAnon:'トークン未入力のため匿名枠を使用'},
    'ko-KR':{tabsSheet:'탭',leftHandHint:'화면을 좌우 반전하여 왼손으로 편하게 조작합니다',readerMode:'리더 모드',siteMode:'사이트 모드',readerLoading:'프록시로 불러오는 중…',readerFail:'페이지를 불러올 수 없습니다',readerNotice:'리더 모드로 보거나 새 탭에서 여세요.',webBlocked:'이 사이트는 삽입을 허용하지 않습니다',openBrowser:'브라우저에서 열기',readerEmpty:'표시할 내용이 없습니다',fetchModels:'모델 가져오기',fetchingModels:'가져오는 중…',fetchModelsOk:'{n}개 모델을 가져왔습니다',fetchModelsFail:'가져오기 실패: {msg}',chooseModel:'모델 선택',modelsEmpty:'모델 목록이 비어 있습니다',modelPlaceholder:'모델 이름',aiGoal:'대화 목표',aiGoalGeneral:'범용 도우미',aiGoalSummary:'페이지 요약',aiGoalTranslate:'번역 도우미',aiGoalCode:'코드 도우미',aiWelcomeTitle:'브라우저 Ai 도우미',aiWelcomeHint:'현재 페이지를 요약, 번역, 설명하거나 무엇이든 물어보세요.',aiSuggestSummary:'현재 페이지 요약',aiSuggestTranslate:'한국어로 번역',aiSuggestExplain:'이 내용 설명',aiSuggestCode:'코드 작성 도움',aiContext:'현재 페이지',aiClear:'지우기',aiClearConfirm:'모든 대화를 지울까요?',aiThinking:'생각 중…',aiNoModel:'선택된 모델이 없습니다. 모델 가져오기 후 선택하세요.',aiGoSettings:'설정 열기',github:'GitHub',githubToken:'GitHub 토큰',githubTokenHint:'선택 사항. 입력하면 할당량이 늘어나고 남은 횟수를 표시합니다.',githubRate:'호출 잔량',githubCheck:'할당량 확인',githubChecking:'확인 중…',githubRemaining:'검색 남음 {remaining}/{limit}',githubReset:'초기화 {time}',githubInvalid:'토큰이 유효하지 않거나 만료되었습니다',githubFail:'할당량 확인 실패',githubSearch:'GitHub 검색',githubEmpty:'키워드로 GitHub 저장소 검색',githubResults:'저장소 {n}개',githubAnon:'토큰 없음, 익명 할당량 사용'},
    'fr-FR':{tabsSheet:'Onglets',leftHandHint:'Miroir de l’interface pour un usage à une main gauche',readerMode:'Mode lecture',siteMode:'Mode site',readerLoading:'Chargement via proxy…',readerFail:'Impossible de charger la page',readerNotice:'Utilisez le mode lecture ou ouvrez-le dans un nouvel onglet.',webBlocked:'Ce site refuse l’intégration',openBrowser:'Ouvrir dans le navigateur',readerEmpty:'Rien à afficher',fetchModels:'Récupérer les modèles',fetchingModels:'Récupération…',fetchModelsOk:'{n} modèles chargés',fetchModelsFail:'Échec : {msg}',chooseModel:'Choisir un modèle',modelsEmpty:'Liste de modèles vide',modelPlaceholder:'Nom du modèle',aiGoal:'Objectif de la conversation',aiGoalGeneral:'Assistant général',aiGoalSummary:'Résumé de page',aiGoalTranslate:'Assistant de traduction',aiGoalCode:'Assistant de code',aiWelcomeTitle:'Votre assistant IA de navigateur',aiWelcomeHint:'Résumez, traduisez ou expliquez la page courante, ou posez-moi une question.',aiSuggestSummary:'Résumer cette page',aiSuggestTranslate:'Traduire en français',aiSuggestExplain:'Expliquer ce contenu',aiSuggestCode:'Aide-moi à coder',aiContext:'Page actuelle',aiClear:'Vider',aiClearConfirm:'Vider toute la conversation ?',aiThinking:'Réflexion…',aiNoModel:'Aucun modèle sélectionné. Utilisez Récupérer les modèles.',aiGoSettings:'Ouvrir les paramètres',github:'GitHub',githubToken:'Jeton GitHub',githubTokenHint:'Facultatif. Augmente le quota et affiche les appels restants.',githubRate:'Quota API',githubCheck:'Vérifier',githubChecking:'Vérification…',githubRemaining:'Recherche restante {remaining}/{limit}',githubReset:'Réinitialisation {time}',githubInvalid:'Jeton invalide ou expiré',githubFail:'Échec de la vérification',githubSearch:'Rechercher sur GitHub',githubEmpty:'Saisissez des mots-clés pour chercher des dépôts',githubResults:'{n} dépôts trouvés',githubAnon:'Sans jeton, quota anonyme'}
    };
    Object.keys(EXTRA).forEach(function(l){D[l]=Object.assign({},D[l],EXTRA[l])});
    var EXTRA2={
    'zh-CN':{confirmTitle:'请确认',clearSearchHistory:'清除搜索记录',searchHistoryCleared:'搜索记录已清除',clearBrowsingHint:'仅清除访问历史与下载记录，书签、密码和设置会保留',clearBrowsingDone:'浏览数据已清除',openBrowser:'新标签打开',loadSlowHint:'页面加载较慢，若显示空白可试试阅读模式',clearAction:'清除'},
    'en-US':{confirmTitle:'Confirm',clearSearchHistory:'Clear search history',searchHistoryCleared:'Search history cleared',clearBrowsingHint:'Only browsing history and downloads will be removed. Bookmarks, passwords and settings are kept.',clearBrowsingDone:'Browsing data cleared',openBrowser:'Open in new tab',loadSlowHint:'This page is slow to load. If it stays blank, try reader mode.',clearAction:'Clear'},
    'zh-TW':{confirmTitle:'請確認',clearSearchHistory:'清除搜尋記錄',searchHistoryCleared:'搜尋記錄已清除',clearBrowsingHint:'僅清除瀏覽歷史與下載記錄，書籤、密碼和設定會保留',clearBrowsingDone:'瀏覽資料已清除',openBrowser:'新分頁開啟',loadSlowHint:'頁面載入較慢，若顯示空白可試試閱讀模式',clearAction:'清除'},
    'ja-JP':{confirmTitle:'確認',clearSearchHistory:'検索履歴を削除',searchHistoryCleared:'検索履歴を削除しました',clearBrowsingHint:'閲覧履歴とダウンロードのみ削除します。ブックマーク、パスワード、設定は残ります。',clearBrowsingDone:'閲覧データを削除しました',openBrowser:'新しいタブで開く',loadSlowHint:'読み込みが遅いです。空白の場合はリーダーモードをお試しください。',clearAction:'削除'},
    'ko-KR':{confirmTitle:'확인',clearSearchHistory:'검색 기록 지우기',searchHistoryCleared:'검색 기록을 지웠습니다',clearBrowsingHint:'방문 기록과 다운로드만 삭제합니다. 북마크, 비밀번호, 설정은 유지됩니다.',clearBrowsingDone:'방문 데이터를 지웠습니다',openBrowser:'새 탭에서 열기',loadSlowHint:'페이지가 느립니다. 빈 화면이면 리더 모드를 사용해 보세요.',clearAction:'지우기'},
    'fr-FR':{confirmTitle:'Confirmer',clearSearchHistory:'Effacer l’historique de recherche',searchHistoryCleared:'Historique de recherche effacé',clearBrowsingHint:'Seuls l’historique et les téléchargements seront supprimés. Les favoris, mots de passe et réglages sont conservés.',clearBrowsingDone:'Données de navigation effacées',openBrowser:'Ouvrir dans un nouvel onglet',loadSlowHint:'Chargement lent. Si la page reste vide, essayez le mode lecture.',clearAction:'Effacer'}
    };
    Object.keys(EXTRA2).forEach(function(l){D[l]=Object.assign({},D[l],EXTRA2[l])});
    var EXTRA3={
    'zh-CN':{githubCoreRemaining:'核心剩余 {remaining}/{limit}',aboutUs:'关于我们',website:'我们的网站',checkUpdate:'检查更新',latestVersion:'已是最新版本 {version}',newVersion:'发现新版本 {version}',updateFailed:'检查更新失败',openSite:'访问官网',copyCode:'复制代码',codeCopied:'代码已复制',translatePage:'翻译当前页面',pageTextEmpty:'当前页面没有可提取的文字，请先切换到阅读模式',useApi:'用 GitHub API 打开',githubEmbedBlocked:'GitHub 禁止内嵌显示，正在使用 API 获取内容'},
    'en-US':{githubCoreRemaining:'Core remaining {remaining}/{limit}',aboutUs:'About us',website:'Our website',checkUpdate:'Check for updates',latestVersion:'You are on the latest version {version}',newVersion:'New version {version} available',updateFailed:'Update check failed',openSite:'Visit website',copyCode:'Copy code',codeCopied:'Code copied',translatePage:'Translate this page',pageTextEmpty:'No text available. Switch to reader mode first.',useApi:'Open with GitHub API',githubEmbedBlocked:'GitHub blocks embedding. Loading content through the API.'},
    'zh-TW':{githubCoreRemaining:'核心剩餘 {remaining}/{limit}',aboutUs:'關於我們',website:'我們的網站',checkUpdate:'檢查更新',latestVersion:'已是最新版本 {version}',newVersion:'發現新版本 {version}',updateFailed:'檢查更新失敗',openSite:'前往官網',copyCode:'複製程式碼',codeCopied:'程式碼已複製',translatePage:'翻譯目前頁面',pageTextEmpty:'目前頁面沒有可提取的文字，請先切換閱讀模式',useApi:'用 GitHub API 開啟',githubEmbedBlocked:'GitHub 禁止內嵌顯示，正在使用 API 取得內容'},
    'ja-JP':{githubCoreRemaining:'コア残り {remaining}/{limit}',aboutUs:'私たちについて',website:'公式サイト',checkUpdate:'アップデートを確認',latestVersion:'最新バージョン {version} です',newVersion:'新しいバージョン {version} があります',updateFailed:'アップデート確認に失敗しました',openSite:'公式サイトを開く',copyCode:'コードをコピー',codeCopied:'コードをコピーしました',translatePage:'このページを翻訳',pageTextEmpty:'抽出できるテキストがありません。先にリーダーモードに切り替えてください。',useApi:'GitHub API で開く',githubEmbedBlocked:'GitHub は埋め込みを禁止しています。API で内容を取得します。'},
    'ko-KR':{githubCoreRemaining:'코어 남음 {remaining}/{limit}',aboutUs:'우리 소개',website:'공식 사이트',checkUpdate:'업데이트 확인',latestVersion:'최신 버전 {version} 사용 중',newVersion:'새 버전 {version} 사용 가능',updateFailed:'업데이트 확인 실패',openSite:'공식 사이트 열기',copyCode:'코드 복사',codeCopied:'코드를 복사했습니다',translatePage:'현재 페이지 번역',pageTextEmpty:'추출할 텍스트가 없습니다. 먼저 리더 모드로 전환하세요.',useApi:'GitHub API로 열기',githubEmbedBlocked:'GitHub은 삽입을 차단합니다. API로 내용을 불러옵니다.'},
    'fr-FR':{githubCoreRemaining:'Cœur restant {remaining}/{limit}',aboutUs:'À propos',website:'Notre site',checkUpdate:'Vérifier les mises à jour',latestVersion:'Vous êtes à la dernière version {version}',newVersion:'Nouvelle version {version} disponible',updateFailed:'Échec de la vérification',openSite:'Visiter le site',copyCode:'Copier le code',codeCopied:'Code copié',translatePage:'Traduire cette page',pageTextEmpty:'Aucun texte disponible. Passez d’abord en mode lecture.',useApi:'Ouvrir avec l’API GitHub',githubEmbedBlocked:'GitHub bloque l’intégration. Chargement via l’API.'}
    };
    Object.keys(EXTRA3).forEach(function(l){D[l]=Object.assign({},D[l],EXTRA3[l])});
    var EXTRA4={
    'zh-CN':{offlineGame:'断网小游戏'},
    'en-US':{offlineGame:'Offline game'},
    'zh-TW':{offlineGame:'斷網小遊戲'},
    'ja-JP':{offlineGame:'オフラインゲーム'},
    'ko-KR':{offlineGame:'오프라인 게임'},
    'fr-FR':{offlineGame:'Jeu hors ligne'}
    };
    Object.keys(EXTRA4).forEach(function(l){D[l]=Object.assign({},D[l],EXTRA4[l])});
    var EXTRA5={
    'zh-CN':{onboardTitle:'欢迎使用 Fuey Mini Browser',onboardText:'先花几秒选择你喜欢的主题、语言和操作方式，之后可以随时在设置里修改。',onboardNext:'下一步',onboardStart:'开始使用',onboardSkip:'跳过',onboardLight:'浅色',onboardDark:'深色',onboardRight:'右手',onboardLeft:'左手',onboardHand:'操作方式'},
    'en-US':{onboardTitle:'Welcome to Fuey Mini Browser',onboardText:'Take a few seconds to choose your theme, language and hand preference. You can change them anytime in Settings.',onboardNext:'Next',onboardStart:'Start using',onboardSkip:'Skip',onboardLight:'Light',onboardDark:'Dark',onboardRight:'Right hand',onboardLeft:'Left hand',onboardHand:'Hand preference'},
    'zh-TW':{onboardTitle:'歡迎使用 Fuey Mini Browser',onboardText:'先花幾秒選擇你喜歡的主題、語言和操作方式，之後可以隨時在設定裡修改。',onboardNext:'下一步',onboardStart:'開始使用',onboardSkip:'略過',onboardLight:'淺色',onboardDark:'深色',onboardRight:'右手',onboardLeft:'左手',onboardHand:'操作方式'},
    'ja-JP':{onboardTitle:'Fuey Mini Browser へようこそ',onboardText:'テーマ、言語、操作スタイルを数秒で選択できます。設定からいつでも変更できます。',onboardNext:'次へ',onboardStart:'はじめる',onboardSkip:'スキップ',onboardLight:'ライト',onboardDark:'ダーク',onboardRight:'右手',onboardLeft:'左手',onboardHand:'操作スタイル'},
    'ko-KR':{onboardTitle:'Fuey Mini Browser에 오신 것을 환영합니다',onboardText:'테마, 언어, 조작 방식을 몇 초 안에 선택하세요. 설정에서 언제든지 변경할 수 있습니다.',onboardNext:'다음',onboardStart:'시작하기',onboardSkip:'건너뛰기',onboardLight:'라이트',onboardDark:'다크',onboardRight:'오른손',onboardLeft:'왼손',onboardHand:'조작 방식'},
    'fr-FR':{onboardTitle:'Bienvenue dans Fuey Mini Browser',onboardText:'Choisissez en quelques secondes votre thème, votre langue et votre main de prédilection. Modifiable dans les paramètres.',onboardNext:'Suivant',onboardStart:'Commencer',onboardSkip:'Passer',onboardLight:'Clair',onboardDark:'Sombre',onboardRight:'Main droite',onboardLeft:'Main gauche',onboardHand:'Main préférée'}
    };
    Object.keys(EXTRA5).forEach(function(l){D[l]=Object.assign({},D[l],EXTRA5[l])});
    var EXTRA6={
    'zh-CN':{fontLicenses:'字体证书',license:'许可证',project:'项目地址',fontLicenseHint:'下列字体均为开源或免费商用字体，点击可访问对应项目主页。'},
    'en-US':{fontLicenses:'Font licenses',license:'License',project:'Project',fontLicenseHint:'All listed fonts are open-source or free for commercial use. Tap to visit the project page.'},
    'zh-TW':{fontLicenses:'字型授權',license:'授權條款',project:'專案位址',fontLicenseHint:'下列字型皆為開源或免費商用字型，點擊可前往專案首頁。'},
    'ja-JP':{fontLicenses:'フォントライセンス',license:'ライセンス',project:'プロジェクト',fontLicenseHint:'以下のフォントはオープンソースまたは商用利用可能です。クリックでプロジェクトページを開きます。'},
    'ko-KR':{fontLicenses:'폰트 라이선스',license:'라이선스',project:'프로젝트',fontLicenseHint:'아래 폰트는 오픈소스 또는 무료 상업용입니다. 클릭하면 프로젝트 페이지로 이동합니다.'},
    'fr-FR':{fontLicenses:'Licences des polices',license:'Licence',project:'Projet',fontLicenseHint:'Toutes les polices listées sont open source ou gratuites pour usage commercial. Cliquez pour ouvrir la page du projet.'}
    };
    Object.keys(EXTRA6).forEach(function(l){D[l]=Object.assign({},D[l],EXTRA6[l])});
    var EXTRA7={
    'zh-CN':{homeBackground:'主页背景',homeBackgroundHint:'默认不使用，选择后会替换主页背景；自定义主题图片优先。'},
    'en-US':{homeBackground:'Home background',homeBackgroundHint:'Off by default. Choosing one replaces the home background; custom theme images take priority.'},
    'zh-TW':{homeBackground:'首頁背景',homeBackgroundHint:'預設不使用，選擇後會替換首頁背景；自訂主題圖片優先。'},
    'ja-JP':{homeBackground:'ホーム背景',homeBackgroundHint:'既定では使用しません。選択するとホーム背景を置き換えます。カスタムテーマ画像が優先されます。'},
    'ko-KR':{homeBackground:'홈 배경',homeBackgroundHint:'기본적으로 사용하지 않습니다. 선택하면 홈 배경이 바뀌며 사용자 테마 이미지가 우선합니다.'},
    'fr-FR':{homeBackground:'Fond d’accueil',homeBackgroundHint:'Désactivé par défaut. Le choix remplace le fond d’accueil ; les images de thème personnalisées sont prioritaires.'}
    };
    Object.keys(EXTRA7).forEach(function(l){D[l]=Object.assign({},D[l],EXTRA7[l])});
    var EXTRA8={
    'zh-CN':{builtinPlugins:'内置插件',pluginFullscreen:'全屏模式',pluginFullscreenDesc:'一键进入沉浸式全屏，隐藏浏览器地址栏与状态栏，适合安卓设备。',pluginCamera:'摄像头防遮挡',pluginCameraDesc:'只缩小顶部空间，避开前置摄像头、挖孔屏和圆角遮挡。',pluginAiWork:'Ai 工作台',pluginAiWorkDesc:'添加悬浮工作台，快速让 Ai 总结、翻译、润色或写代码。',bgDefault:'默认',bgSnow:'雪山',bgPlant:'绿植',bgDanxia:'丹霞',cameraTitle:'摄像头防遮挡',cameraHint:'拖动滑块调整顶部留白距离，避开前置摄像头和圆角遮挡。',cameraDone:'完成'},
    'en-US':{builtinPlugins:'Built-in plugins',pluginFullscreen:'Fullscreen mode',pluginFullscreenDesc:'Enter immersive fullscreen and hide browser bars, tuned for Android devices.',pluginCamera:'Camera safe area',pluginCameraDesc:'Shrinks only the top area to avoid the front camera, punch-hole and rounded corners.',pluginAiWork:'Ai workspace',pluginAiWorkDesc:'Adds a floating workspace for Ai summaries, translation, polishing and code.',bgDefault:'Default',bgSnow:'Snow mountain',bgPlant:'Green plants',bgDanxia:'Danxia landform',cameraTitle:'Camera safe area',cameraHint:'Drag to adjust the top safe distance and avoid the front camera and rounded corners.',cameraDone:'Done'},
    'zh-TW':{builtinPlugins:'內建外掛',pluginFullscreen:'全螢幕模式',pluginFullscreenDesc:'一鍵進入沉浸式全螢幕，隱藏瀏覽器網址列與狀態列，適合安卓裝置。',pluginCamera:'鏡頭防遮擋',pluginCameraDesc:'只縮小頂部空間，避開前置鏡頭、挖孔螢幕和圓角遮擋。',pluginAiWork:'Ai 工作台',pluginAiWorkDesc:'加入懸浮工作台，快速讓 Ai 總結、翻譯、潤飾或寫程式。',bgDefault:'預設',bgSnow:'雪山',bgPlant:'綠植',bgDanxia:'丹霞',cameraTitle:'鏡頭防遮擋',cameraHint:'拖動滑桿調整頂部留白距離，避開前置鏡頭和圓角遮擋。',cameraDone:'完成'},
    'ja-JP':{builtinPlugins:'内蔵プラグイン',pluginFullscreen:'フルスクリーン',pluginFullscreenDesc:'没入型フルスクリーンに入り、ブラウザのバーを隠します。Android 向けです。',pluginCamera:'カメラ回避',pluginCameraDesc:'上部の余白だけを縮め、フロントカメラやパンチホール、角丸を避けます。',pluginAiWork:'Ai ワークスペース',pluginAiWorkDesc:'フローティングワークスペースを追加し、要約・翻訳・推敲・コード作成を素早く行えます。',bgDefault:'デフォルト',bgSnow:'雪山',bgPlant:'グリーン',bgDanxia:'丹霞',cameraTitle:'カメラ回避',cameraHint:'スライダーで上部の余白を調整し、フロントカメラと角丸を避けます。',cameraDone:'完了'},
    'ko-KR':{builtinPlugins:'내장 플러그인',pluginFullscreen:'전체 화면 모드',pluginFullscreenDesc:'몰입형 전체 화면으로 전환하고 브라우저 바를 숨깁니다. Android 기기에 적합합니다.',pluginCamera:'카메라 가림 방지',pluginCameraDesc:'상단 여백만 줄여 전면 카메라, 펀치홀, 둥근 모서리를 피합니다.',pluginAiWork:'Ai 작업대',pluginAiWorkDesc:'플로팅 작업대를 추가해 Ai 요약, 번역, 다듬기, 코드 작성을 빠르게 합니다.',bgDefault:'기본',bgSnow:'설산',bgPlant:'식물',bgDanxia:'단샤',cameraTitle:'카메라 가림 방지',cameraHint:'슬라이더로 상단 여백을 조정해 전면 카메라와 둥근 모서리를 피하세요.',cameraDone:'완료'},
    'fr-FR':{builtinPlugins:'Plugins intégrés',pluginFullscreen:'Plein écran',pluginFullscreenDesc:'Passe en plein écran immersif et masque les barres du navigateur, adapté à Android.',pluginCamera:'Zone caméra',pluginCameraDesc:'Réduit uniquement le haut de l’interface pour éviter la caméra frontale et les coins arrondis.',pluginAiWork:'Espace Ai',pluginAiWorkDesc:'Ajoute un espace flottant pour résumer, traduire, reformuler ou coder avec l’Ai.',bgDefault:'Par défaut',bgSnow:'Montagne enneigée',bgPlant:'Plantes vertes',bgDanxia:'Relief de Danxia',bgFluid:'Fluide',cameraTitle:'Zone caméra',cameraHint:'Faites glisser pour ajuster l’espace supérieur et éviter la caméra frontale.',cameraDone:'Terminé'}
    };
    Object.keys(EXTRA8).forEach(function(l){D[l]=Object.assign({},D[l],EXTRA8[l])});
    var EXTRA9={
    'zh-CN':{providerQwen:'通义千问',providerZhipu:'智谱 GLM',providerCustom:'自定义'},
    'en-US':{providerQwen:'Qwen',providerZhipu:'Zhipu GLM',providerCustom:'Custom'},
    'zh-TW':{providerQwen:'通義千問',providerZhipu:'智譜 GLM',providerCustom:'自訂'},
    'ja-JP':{providerQwen:'Qwen',providerZhipu:'Zhipu GLM',providerCustom:'カスタム'},
    'ko-KR':{providerQwen:'Qwen',providerZhipu:'Zhipu GLM',providerCustom:'사용자 지정'},
    'fr-FR':{providerQwen:'Qwen',providerZhipu:'Zhipu GLM',providerCustom:'Personnalisé'}
    };
    Object.keys(EXTRA9).forEach(function(l){D[l]=Object.assign({},D[l],EXTRA9[l])});
    var EXTRA10={
    'zh-CN':{bgFluid:'流体'},
    'en-US':{bgFluid:'Fluid'},
    'zh-TW':{bgFluid:'流體'},
    'ja-JP':{bgFluid:'流体'},
    'ko-KR':{bgFluid:'유체'},
    'fr-FR':{bgFluid:'Fluide'},
    'de-DE':{bgFluid:'Flüssig'},
    'es-ES':{bgFluid:'Fluido'},
    'ru-RU':{bgFluid:'Жидкость'},
    'pt-BR':{bgFluid:'Fluido'},
    'it-IT':{bgFluid:'Fluido'},
    'ar-SA':{bgFluid:'سائل'}
    };
    Object.keys(EXTRA10).forEach(function(l){D[l]=Object.assign({},D[l],EXTRA10[l])});
    var EXTRA11={
    'zh-CN':{moreColors:'更多颜色'},'en-US':{moreColors:'More colors'},'zh-TW':{moreColors:'更多顏色'},'ja-JP':{moreColors:'色を追加'},'ko-KR':{moreColors:'색상 추가'},'fr-FR':{moreColors:'Plus de couleurs'},'de-DE':{moreColors:'Mehr Farben'},'es-ES':{moreColors:'Más colores'},'ru-RU':{moreColors:'Больше цветов'},'pt-BR':{moreColors:'Mais cores'},'it-IT':{moreColors:'Più colori'},'ar-SA':{moreColors:'مزيد من الألوان'}
    };
    Object.keys(EXTRA11).forEach(function(l){D[l]=Object.assign({},D[l],EXTRA11[l])});
    var EXTRA12={
    'en-US':{incognito:'Incognito',aboutTagline:'A local-first lightweight browser',aboutDescription:'Fuey Mini Browser is a lightweight browser front end that runs in your browser. It provides tabs, search, bookmarks, shortcuts, Ai chat, translation, themes and plugins. All data is stored locally first and no account is required.',aboutShort:'Fuey Mini Browser is a local-first lightweight browser focused on fast access, Ai assistance and personalization.',officialSite:'Official site: ',pluginEnabled:'Enabled: ',pluginDisabled:'Disabled: ',pluginHideToolbar:'Hide the top toolbar in fullscreen',pluginShowLabel:'Show the floating button label',aiWorkName:'Ai workspace',aiWorkSummary:'Summarize this page',aiWorkTranslate:'Translate this page',aiWorkPolish:'Polish text',aiWorkCode:'Write code',aiWorkPromptSummary:'Read the current page and summarize the key points in 3-5 bullets, then give a one-sentence summary.',aiWorkPromptTranslate:'Translate the current page into English and output only the translation.',aiWorkPromptPolish:'Polish the following text to make it more natural, concise and professional:\n\n',aiWorkPromptCode:'Write code for the following requirement:\n',licenseMiSans:'MiSans license (free for commercial use)',licenseHarmony:'HarmonyOS Sans license',licenseAlibaba:'Alibaba PuHuiTi license (free for commercial use)',licenseOppo:'OPPO Sans license (free for commercial use)',licenseWenQuanYi:'GPL v2 + font embedding exception',tourStartTitle:'Start here',tourStartText:'Type a URL or search term in the address bar and press Enter.',tourTabsTitle:'Tabs',tourTabsText:'All tabs live here. Open this to switch, close or create tabs.',tourMoreTitle:'More',tourMoreText:'Bookmarks, history, plugins, the offline game and settings are in More.',tourAiTitle:'Ai assistant',tourAiText:'Ai can summarize or translate the current page and answer your questions.',tourReadyTitle:'Ready',tourReadyText:'Change the theme, language, font or home background anytime in Settings.',tourSettings:'Open settings',tourDone:'Done',tourSkip:'Skip',tourNext:'Next'},
    'zh-CN':{incognito:'无痕',aboutTagline:'本地优先的轻量浏览器',aboutDescription:'Fuey Mini Browser 是一个运行在浏览器里的轻量浏览器前端，提供标签页、搜索、书签、快捷方式、Ai 对话、翻译、主题与插件能力。所有数据优先保存在本地，不需要注册账号。',aboutShort:'Fuey Mini Browser 是一个本地优先的轻量浏览器前端，专注于快速访问、Ai 辅助和个性化体验。',officialSite:'官网：',pluginEnabled:'已启用：',pluginDisabled:'已关闭：',pluginHideToolbar:'全屏时隐藏顶部工具栏',pluginShowLabel:'显示悬浮按钮文字',aiWorkName:'Ai 工作台',aiWorkSummary:'总结当前页面',aiWorkTranslate:'翻译当前页面',aiWorkPolish:'润色文字',aiWorkCode:'写代码',aiWorkPromptSummary:'请阅读当前页面内容，提炼出 3-5 个关键要点，并给出一句话总结。',aiWorkPromptTranslate:'请把当前页面翻译成中文，只输出译文，不要解释。',aiWorkPromptPolish:'请帮我润色下面这段文字，让它更自然、简洁、专业：\n\n',aiWorkPromptCode:'请帮我写一段代码，需求是：\n',licenseMiSans:'MiSans 字体许可（免费商用）',licenseHarmony:'HarmonyOS Sans 字体许可',licenseAlibaba:'阿里巴巴普惠体许可（免费商用）',licenseOppo:'OPPO Sans 字体许可（免费商用）',licenseWenQuanYi:'GPL v2 + 字体嵌入例外',tourStartTitle:'从这里开始',tourStartText:'在地址栏输入网址或搜索内容，按回车即可打开。',tourTabsTitle:'标签页',tourTabsText:'所有标签页都收在这里，点开可以切换、关闭或新建。',tourMoreTitle:'更多功能',tourMoreText:'更多里有收藏、历史、插件、断网小游戏和设置。',tourAiTitle:'Ai 助手',tourAiText:'Ai 可以总结、翻译当前页面，也能直接回答你的问题。',tourReadyTitle:'准备完成',tourReadyText:'想换主题、语言、字体或主页背景，可以随时到设置里调整。',tourSettings:'前往设置',tourDone:'完成',tourSkip:'跳过',tourNext:'下一步'}
    };
    Object.keys(EXTRA12).forEach(function(l){D[l]=Object.assign({},D[l],EXTRA12[l])});
    var EXTRA13={
    'de-DE':{pluginFullscreen:'Vollbildmodus',pluginFullscreenDesc:'Immersiver Vollbildmodus ohne Browserleisten.',pluginCamera:'Kameraschutz',pluginCameraDesc:'Verkleinert nur den oberen Bereich und vermeidet Frontkamera und runde Ecken.',pluginAiWork:'Ai-Workspace',pluginAiWorkDesc:'Schwebende Arbeitsfläche zum Zusammenfassen, Übersetzen, Polieren und Programmieren.',bgDefault:'Standard',bgSnow:'Schneeberg',bgPlant:'Pflanzen',bgDanxia:'Danxia',cameraTitle:'Kameraschutz',cameraHint:'Ziehen, um den oberen Abstand anzupassen.',cameraDone:'Fertig'},
    'es-ES':{pluginFullscreen:'Pantalla completa',pluginFullscreenDesc:'Pantalla completa inmersiva sin barras del navegador.',pluginCamera:'Protección de cámara',pluginCameraDesc:'Reduce solo la parte superior para evitar la cámara frontal y las esquinas.',pluginAiWork:'Espacio Ai',pluginAiWorkDesc:'Espacio flotante para resumir, traducir, pulir y programar.',bgDefault:'Predeterminado',bgSnow:'Montaña nevada',bgPlant:'Plantas',bgDanxia:'Danxia',cameraTitle:'Protección de cámara',cameraHint:'Arrastra para ajustar el espacio superior.',cameraDone:'Listo'},
    'ru-RU':{pluginFullscreen:'Полный экран',pluginFullscreenDesc:'Иммерсивный полноэкранный режим без панелей браузера.',pluginCamera:'Защита камеры',pluginCameraDesc:'Уменьшает только верхнюю область, чтобы не мешали камера и скругления.',pluginAiWork:'Ai-рабочая область',pluginAiWorkDesc:'Плавающая панель для summary, перевода, правки и кода.',bgDefault:'По умолчанию',bgSnow:'Снежная гора',bgPlant:'Растения',bgDanxia:'Данься',cameraTitle:'Защита камеры',cameraHint:'Перетащите, чтобы настроить верхний отступ.',cameraDone:'Готово'},
    'pt-BR':{pluginFullscreen:'Tela cheia',pluginFullscreenDesc:'Tela cheia imersiva sem as barras do navegador.',pluginCamera:'Proteção da câmera',pluginCameraDesc:'Reduz apenas a parte superior para evitar a câmera frontal e os cantos.',pluginAiWork:'Espaço Ai',pluginAiWorkDesc:'Painel flutuante para resumir, traduzir, revisar e programar.',bgDefault:'Padrão',bgSnow:'Montanha nevada',bgPlant:'Plantas',bgDanxia:'Danxia',cameraTitle:'Proteção da câmera',cameraHint:'Arraste para ajustar o espaço superior.',cameraDone:'Concluído'},
    'it-IT':{pluginFullscreen:'Schermo intero',pluginFullscreenDesc:'Schermo intero immersivo senza barre del browser.',pluginCamera:'Protezione fotocamera',pluginCameraDesc:'Riduce solo la parte superiore per evitare fotocamera e angoli arrotondati.',pluginAiWork:'Spazio Ai',pluginAiWorkDesc:'Pannello flottante per riassumere, tradurre, rifinire e scrivere codice.',bgDefault:'Predefinito',bgSnow:'Montagna innevata',bgPlant:'Piante',bgDanxia:'Danxia',cameraTitle:'Protezione fotocamera',cameraHint:'Trascina per regolare lo spazio superiore.',cameraDone:'Fatto'},
    'ar-SA':{pluginFullscreen:'ملء الشاشة',pluginFullscreenDesc:'ملء شاشة غامر دون أشرطة المتصفح.',pluginCamera:'حماية الكاميرا',pluginCameraDesc:'يصغّر الجزء العلوي فقط لتجنب الكاميرا الأمامية والزوايا.',pluginAiWork:'مساحة Ai',pluginAiWorkDesc:'لوحة عائمة للتلخيص والترجمة والتحرير والبرمجة.',bgDefault:'افتراضي',bgSnow:'جبل ثلجي',bgPlant:'نباتات',bgDanxia:'دانشيا',cameraTitle:'حماية الكاميرا',cameraHint:'اسحب لضبط المسافة العلوية.',cameraDone:'تم'},
    'lzh':{pluginFullscreen:'全屏',pluginFullscreenDesc:'隱諸欄而盡其屏。',pluginCamera:'鏡避',pluginCameraDesc:'惟縮其上，避前置之鏡與圓角。',pluginAiWork:'Ai 工作臺',pluginAiWorkDesc:'浮臺以速令 Ai 總、譯、潤、碼。',bgDefault:'素',bgSnow:'雪山',bgPlant:'綠植',bgDanxia:'丹霞',cameraTitle:'鏡避',cameraHint:'拖以調頂端之距。',cameraDone:'成'}
    };
    Object.keys(EXTRA13).forEach(function(l){D[l]=Object.assign({},D[l],EXTRA13[l])});
    var EXTRA14={
    'en-US':{startGame:'Start game'},'zh-CN':{startGame:'开始游戏'},'zh-TW':{startGame:'開始遊戲'},'ja-JP':{startGame:'ゲーム開始'},'ko-KR':{startGame:'게임 시작'},'fr-FR':{startGame:'Commencer'},'de-DE':{startGame:'Spiel starten'},'es-ES':{startGame:'Iniciar juego'},'ru-RU':{startGame:'Начать игру'},'pt-BR':{startGame:'Iniciar jogo'},'it-IT':{startGame:'Avvia gioco'},'ar-SA':{startGame:'ابدأ اللعبة'},'lzh':{startGame:'始戲'}
    };
    Object.keys(EXTRA14).forEach(function(l){D[l]=Object.assign({},D[l],EXTRA14[l])});
    var EXTRA15={'en-US':{download:'Download',browseFiles:'Browse files'},'zh-CN':{download:'下载',browseFiles:'浏览文件'},'zh-TW':{download:'下載',browseFiles:'瀏覽檔案'},'ja-JP':{download:'ダウンロード',browseFiles:'ファイルを見る'},'ko-KR':{download:'다운로드',browseFiles:'파일 보기'},'fr-FR':{download:'Télécharger',browseFiles:'Parcourir les fichiers'},'de-DE':{download:'Herunterladen',browseFiles:'Dateien ansehen'},'es-ES':{download:'Descargar',browseFiles:'Ver archivos'},'ru-RU':{download:'Скачать',browseFiles:'Просмотр файлов'},'pt-BR':{download:'Baixar',browseFiles:'Ver arquivos'},'it-IT':{download:'Scarica',browseFiles:'Sfoglia file'},'ar-SA':{download:'تنزيل',browseFiles:'تصفح الملفات'},'lzh':{download:'下載',browseFiles:'覽卷'}};
    Object.keys(EXTRA15).forEach(function(l){D[l]=Object.assign({},D[l],EXTRA15[l])});
    
    var MORE_LANGS={
    'de-DE':{newTab:'Neuer Tab',back:'Zurück',forward:'Vorwärts',reload:'Neu laden',search:'Suchen',searchOrUrl:'Suchen oder URL eingeben',searchWeb:'Web durchsuchen',ai:'Ai',settings:'Einstellungen',cancel:'Abbrechen',confirm:'OK',save:'Speichern',delete:'Löschen',add:'Hinzufügen',edit:'Bearbeiten',close:'Schließen',copy:'Kopieren',show:'Anzeigen',hide:'Ausblenden',more:'Mehr',history:'Verlauf',downloads:'Downloads',passwords:'Passwörter',translate:'Übersetzen',help:'Hilfe',appearance:'Darstellung',searchSection:'Suche',aiSection:'Ai & Übersetzung',accessibility:'Barrierefreiheit',dataSection:'Daten',theme:'Design',language:'Sprache',font:'Schrift',followSystem:'System',engine:'Suchmaschine',customEngine:'Eigene Suchmaschine',leftHand:'Linkshänder-Modus',none:'Keine',small:'Klein',medium:'Mittel',large:'Groß',xlarge:'Sehr groß',provider:'Anbieter',endpoint:'Endpunkt',apiKey:'API-Schlüssel',chatSection:'Chat',chatModel:'Chat-Modell',temperature:'Temperatur',thinking:'Denkmodus',transSection:'Übersetzung',transModel:'Übersetzungsmodell',transTarget:'Zielsprache',export:'Exportieren',import:'Importieren',plugins:'Plugins',clearAll:'Alle Daten löschen',userAgreement:'Nutzungsbedingungen',agree:'Zustimmen',decline:'Ablehnen',name:'Name',url:'URL',username:'Benutzername',password:'Passwort',customTheme:'Eigenes Design',themeName:'Designname',backgroundColor:'Hintergrundfarbe',primaryColor:'Primärfarbe',accentColor:'Akzentfarbe',uploadImage:'Bild hochladen',chooseImage:'Bild wählen',noImage:'Kein Bild',uploading:'Wird gelesen…',recentSearches:'Zuletzt besucht',clearSearchHistory:'Suchverlauf löschen',searchHistoryCleared:'Suchverlauf gelöscht',fontLicenses:'Schriftlizenzen',offlineGame:'Offline-Spiel',builtinPlugins:'Integrierte Plugins',homeBackground:'Startseiten-Hintergrund',github:'GitHub'},
    'es-ES':{newTab:'Nueva pestaña',back:'Atrás',forward:'Adelante',reload:'Recargar',search:'Buscar',searchOrUrl:'Buscar o escribir URL',searchWeb:'Buscar en la web',ai:'Ai',settings:'Ajustes',cancel:'Cancelar',confirm:'OK',save:'Guardar',delete:'Eliminar',add:'Añadir',edit:'Editar',close:'Cerrar',copy:'Copiar',show:'Mostrar',hide:'Ocultar',more:'Más',history:'Historial',downloads:'Descargas',passwords:'Contraseñas',translate:'Traducir',help:'Ayuda',appearance:'Apariencia',searchSection:'Búsqueda',aiSection:'Ai y traducción',accessibility:'Accesibilidad',dataSection:'Datos',theme:'Tema',language:'Idioma',font:'Fuente',followSystem:'Sistema',engine:'Buscador',customEngine:'Buscador personalizado',leftHand:'Modo zurdo',none:'Ninguno',small:'Pequeño',medium:'Medio',large:'Grande',xlarge:'Muy grande',provider:'Proveedor',endpoint:'Endpoint',apiKey:'Clave API',chatSection:'Chat',chatModel:'Modelo de chat',temperature:'Temperatura',thinking:'Modo de pensamiento',transSection:'Traducción',transModel:'Modelo de traducción',transTarget:'Idioma destino',export:'Exportar',import:'Importar',plugins:'Complementos',clearAll:'Borrar todos los datos',userAgreement:'Términos de uso',agree:'Aceptar',decline:'Rechazar',name:'Nombre',url:'URL',username:'Usuario',password:'Contraseña',customTheme:'Tema personalizado',themeName:'Nombre del tema',backgroundColor:'Color de fondo',primaryColor:'Color primario',accentColor:'Color de acento',uploadImage:'Subir imagen',chooseImage:'Elegir imagen',noImage:'Sin imagen',uploading:'Leyendo…',recentSearches:'Recientes',clearSearchHistory:'Borrar historial de búsqueda',searchHistoryCleared:'Historial borrado',fontLicenses:'Licencias de fuentes',offlineGame:'Juego sin conexión',builtinPlugins:'Complementos integrados',homeBackground:'Fondo de inicio',github:'GitHub'},
    'ru-RU':{newTab:'Новая вкладка',back:'Назад',forward:'Вперёд',reload:'Обновить',search:'Поиск',searchOrUrl:'Поиск или URL',searchWeb:'Искать в интернете',ai:'Ai',settings:'Настройки',cancel:'Отмена',confirm:'ОК',save:'Сохранить',delete:'Удалить',add:'Добавить',edit:'Изменить',close:'Закрыть',copy:'Копировать',show:'Показать',hide:'Скрыть',more:'Ещё',history:'История',downloads:'Загрузки',passwords:'Пароли',translate:'Перевести',help:'Помощь',appearance:'Оформление',searchSection:'Поиск',aiSection:'Ai и перевод',accessibility:'Доступность',dataSection:'Данные',theme:'Тема',language:'Язык',font:'Шрифт',followSystem:'Системная',engine:'Поисковик',customEngine:'Свой поисковик',leftHand:'Режим для левши',none:'Нет',small:'Малый',medium:'Средний',large:'Большой',xlarge:'Очень большой',provider:'Провайдер',endpoint:'Эндпоинт',apiKey:'API-ключ',chatSection:'Чат',chatModel:'Модель чата',temperature:'Температура',thinking:'Режим размышления',transSection:'Перевод',transModel:'Модель перевода',transTarget:'Целевой язык',export:'Экспорт',import:'Импорт',plugins:'Плагины',clearAll:'Удалить все данные',userAgreement:'Условия использования',agree:'Принять',decline:'Отклонить',name:'Название',url:'URL',username:'Пользователь',password:'Пароль',customTheme:'Своя тема',themeName:'Название темы',backgroundColor:'Фон',primaryColor:'Основной цвет',accentColor:'Акцент',uploadImage:'Загрузить изображение',chooseImage:'Выбрать изображение',noImage:'Без изображения',uploading:'Чтение…',recentSearches:'Недавние',clearSearchHistory:'Очистить историю поиска',searchHistoryCleared:'История очищена',fontLicenses:'Лицензии шрифтов',offlineGame:'Игра офлайн',builtinPlugins:'Встроенные плагины',homeBackground:'Фон главной',github:'GitHub'},
    'pt-BR':{newTab:'Nova aba',back:'Voltar',forward:'Avançar',reload:'Recarregar',search:'Pesquisar',searchOrUrl:'Pesquisar ou digitar URL',searchWeb:'Pesquisar na web',ai:'Ai',settings:'Configurações',cancel:'Cancelar',confirm:'OK',save:'Salvar',delete:'Excluir',add:'Adicionar',edit:'Editar',close:'Fechar',copy:'Copiar',show:'Mostrar',hide:'Ocultar',more:'Mais',history:'Histórico',downloads:'Downloads',passwords:'Senhas',translate:'Traduzir',help:'Ajuda',appearance:'Aparência',searchSection:'Pesquisa',aiSection:'Ai e tradução',accessibility:'Acessibilidade',dataSection:'Dados',theme:'Tema',language:'Idioma',font:'Fonte',followSystem:'Sistema',engine:'Mecanismo de busca',customEngine:'Mecanismo personalizado',leftHand:'Modo canhoto',none:'Nenhum',small:'Pequeno',medium:'Médio',large:'Grande',xlarge:'Muito grande',provider:'Provedor',endpoint:'Endpoint',apiKey:'Chave de API',chatSection:'Chat',chatModel:'Modelo de chat',temperature:'Temperatura',thinking:'Modo de pensamento',transSection:'Tradução',transModel:'Modelo de tradução',transTarget:'Idioma de destino',export:'Exportar',import:'Importar',plugins:'Plugins',clearAll:'Excluir todos os dados',userAgreement:'Termos de uso',agree:'Aceitar',decline:'Recusar',name:'Nome',url:'URL',username:'Usuário',password:'Senha',customTheme:'Tema personalizado',themeName:'Nome do tema',backgroundColor:'Cor de fundo',primaryColor:'Cor primária',accentColor:'Cor de destaque',uploadImage:'Enviar imagem',chooseImage:'Escolher imagem',noImage:'Sem imagem',uploading:'Lendo…',recentSearches:'Recentes',clearSearchHistory:'Limpar histórico de pesquisa',searchHistoryCleared:'Histórico limpo',fontLicenses:'Licenças de fontes',offlineGame:'Jogo offline',builtinPlugins:'Plugins integrados',homeBackground:'Fundo da página inicial',github:'GitHub'},
    'it-IT':{newTab:'Nuova scheda',back:'Indietro',forward:'Avanti',reload:'Ricarica',search:'Cerca',searchOrUrl:'Cerca o inserisci URL',searchWeb:'Cerca sul web',ai:'Ai',settings:'Impostazioni',cancel:'Annulla',confirm:'OK',save:'Salva',delete:'Elimina',add:'Aggiungi',edit:'Modifica',close:'Chiudi',copy:'Copia',show:'Mostra',hide:'Nascondi',more:'Altro',history:'Cronologia',downloads:'Download',passwords:'Password',translate:'Traduci',help:'Aiuto',appearance:'Aspetto',searchSection:'Ricerca',aiSection:'Ai e traduzione',accessibility:'Accessibilità',dataSection:'Dati',theme:'Tema',language:'Lingua',font:'Carattere',followSystem:'Sistema',engine:'Motore di ricerca',customEngine:'Motore personalizzato',leftHand:'Modalità mancino',none:'Nessuno',small:'Piccolo',medium:'Medio',large:'Grande',xlarge:'Molto grande',provider:'Provider',endpoint:'Endpoint',apiKey:'Chiave API',chatSection:'Chat',chatModel:'Modello chat',temperature:'Temperatura',thinking:'Modalità pensiero',transSection:'Traduzione',transModel:'Modello di traduzione',transTarget:'Lingua di destinazione',export:'Esporta',import:'Importa',plugins:'Plugin',clearAll:'Elimina tutti i dati',userAgreement:'Termini di utilizzo',agree:'Accetta',decline:'Rifiuta',name:'Nome',url:'URL',username:'Utente',password:'Password',customTheme:'Tema personalizzato',themeName:'Nome tema',backgroundColor:'Colore di sfondo',primaryColor:'Colore primario',accentColor:'Colore accento',uploadImage:'Carica immagine',chooseImage:'Scegli immagine',noImage:'Nessuna immagine',uploading:'Lettura…',recentSearches:'Recenti',clearSearchHistory:'Cancella cronologia ricerche',searchHistoryCleared:'Cronologia cancellata',fontLicenses:'Licenze caratteri',offlineGame:'Gioco offline',builtinPlugins:'Plugin integrati',homeBackground:'Sfondo home',github:'GitHub'},
    'ar-SA':{newTab:'علامة تبويب جديدة',back:'رجوع',forward:'تقدم',reload:'إعادة تحميل',search:'بحث',searchOrUrl:'بحث أو أدخل عنوان URL',searchWeb:'البحث في الويب',ai:'Ai',settings:'الإعدادات',cancel:'إلغاء',confirm:'موافق',save:'حفظ',delete:'حذف',add:'إضافة',edit:'تعديل',close:'إغلاق',copy:'نسخ',show:'إظهار',hide:'إخفاء',more:'المزيد',history:'السجل',downloads:'التنزيلات',passwords:'كلمات المرور',translate:'ترجمة',help:'المساعدة',appearance:'المظهر',searchSection:'البحث',aiSection:'Ai والترجمة',accessibility:'إمكانية الوصول',dataSection:'البيانات',theme:'السمة',language:'اللغة',font:'الخط',followSystem:'النظام',engine:'محرك البحث',customEngine:'محرك مخصص',leftHand:'وضع اليد اليسرى',none:'لا شيء',small:'صغير',medium:'متوسط',large:'كبير',xlarge:'كبير جداً',provider:'المزود',endpoint:'نقطة النهاية',apiKey:'مفتاح API',chatSection:'الدردشة',chatModel:'نموذج الدردشة',temperature:'درجة الحرارة',thinking:'وضع التفكير',transSection:'الترجمة',transModel:'نموذج الترجمة',transTarget:'اللغة الهدف',export:'تصدير',import:'استيراد',plugins:'الإضافات',clearAll:'حذف كل البيانات',userAgreement:'شروط الاستخدام',agree:'موافق',decline:'رفض',name:'الاسم',url:'URL',username:'المستخدم',password:'كلمة المرور',customTheme:'سمة مخصصة',themeName:'اسم السمة',backgroundColor:'لون الخلفية',primaryColor:'اللون الأساسي',accentColor:'لون التمييز',uploadImage:'رفع صورة',chooseImage:'اختيار صورة',noImage:'لا صورة',uploading:'جارٍ القراءة…',recentSearches:'الأخيرة',clearSearchHistory:'مسح سجل البحث',searchHistoryCleared:'تم مسح السجل',fontLicenses:'تراخيص الخطوط',offlineGame:'لعبة دون اتصال',builtinPlugins:'إضافات مدمجة',homeBackground:'خلفية الرئيسية',github:'GitHub'}
    };
    Object.keys(MORE_LANGS).forEach(function(code){D[code]=Object.assign({},D['en-US'],D[code]||{},MORE_LANGS[code])});
    D['lzh']=Object.assign({},D['zh-CN'],{
    newTab:'新頁',back:'返',forward:'進',reload:'復新',search:'尋',searchOrUrl:'尋或書址',searchWeb:'尋於網',ai:'機',settings:'設置',cancel:'止',confirm:'可',save:'存',delete:'刪',add:'增',edit:'改',close:'閉',copy:'錄',show:'顯',hide:'隱',more:'眾',history:'閱歷',downloads:'下載',passwords:'密碼',translate:'譯',help:'助',appearance:'外觀',searchSection:'尋',aiSection:'機與譯',accessibility:'輔',dataSection:'數據',theme:'主題',language:'語',font:'字',followSystem:'隨系統',engine:'尋器',customEngine:'自訂尋器',leftHand:'左手',none:'無',small:'小',medium:'中',large:'大',xlarge:'巨',provider:'供者',endpoint:'端',apiKey:'鑰',chatSection:'對',chatModel:'對模',temperature:'溫',thinking:'思',transSection:'譯',transModel:'譯模',transTarget:'譯的',export:'出',import:'入',plugins:'插件',clearAll:'盡除諸數據',userAgreement:'用戶之約',agree:'允',decline:'拒',name:'名',url:'址',username:'用戶',password:'密碼',customTheme:'自定主題',themeName:'主題名',backgroundColor:'底色',primaryColor:'主色',accentColor:'飾色',uploadImage:'上圖',chooseImage:'擇圖',noImage:'無圖',uploading:'讀中…',recentSearches:'近尋',clearSearchHistory:'除尋史',searchHistoryCleared:'尋史已除',fontLicenses:'字證',offlineGame:'離線戲',builtinPlugins:'內建插件',homeBackground:'首頁底',github:'GitHub',providerQwen:'通義千問',providerZhipu:'智譜 GLM',providerCustom:'自訂',bgDefault:'素',bgSnow:'雪山',bgPlant:'綠植',bgDanxia:'丹霞',bgFluid:'流體',cameraTitle:'鏡避',cameraHint:'拖以調頂端之距，避前置鏡與圓角。',cameraDone:'成',moreColors:'眾色'
    });
    Object.keys(D).forEach(function(code){D[code]=Object.assign({},D['en-US'],D[code])});
    D['de-DE']=Object.assign({},D['de-DE'],{
    tourStartTitle:'Hier starten',tourStartText:'Geben Sie eine URL oder einen Suchbegriff in die Adressleiste ein und drücken Sie die Eingabetaste.',
    tourTabsTitle:'Tabs',tourTabsText:'Alle Tabs sind hier. Öffnen Sie dies zum Wechseln, Schließen oder Erstellen.',
    tourMoreTitle:'Mehr',tourMoreText:'Lesezeichen, Verlauf, Plugins, Offline-Spiel und Einstellungen finden Sie unter Mehr.',
    tourAiTitle:'Ai-Assistent',tourAiText:'Ai kann die aktuelle Seite zusammenfassen oder übersetzen und Ihre Fragen beantworten.',
    tourReadyTitle:'Bereit',tourReadyText:'Ändern Sie Thema, Sprache, Schrift oder Hintergrund jederzeit in den Einstellungen.',
    tourSettings:'Einstellungen öffnen',tourDone:'Fertig',tourSkip:'Überspringen',tourNext:'Weiter'
    });
    var TOUR_I18N={
    'zh-TW':{tourStartTitle:'從這裡開始',tourStartText:'在網址列輸入網址或搜尋內容，按 Enter 即可開啟。',tourTabsTitle:'分頁',tourTabsText:'所有分頁都收在這裡，點開可切換、關閉或新增。',tourMoreTitle:'更多功能',tourMoreText:'更多裡有書籤、歷史、外掛、離線遊戲和設定。',tourAiTitle:'Ai 助手',tourAiText:'Ai 可以總結、翻譯目前頁面，也能直接回答問題。',tourReadyTitle:'準備完成',tourReadyText:'想換主題、語言、字型或首頁背景，可以隨時到設定調整。',tourSettings:'前往設定',tourDone:'完成',tourSkip:'略過',tourNext:'下一步'},
    'ja-JP':{tourStartTitle:'ここから',tourStartText:'アドレスバーにURLまたは検索語を入力し、Enterで開きます。',tourTabsTitle:'タブ',tourTabsText:'タブはここにまとまっています。開いて切り替え、閉じる、新規作成ができます。',tourMoreTitle:'その他',tourMoreText:'ブックマーク、履歴、プラグイン、オフラインゲーム、設定は「その他」にあります。',tourAiTitle:'Aiアシスタント',tourAiText:'Aiは現在のページの要約・翻訳や質問への回答ができます。',tourReadyTitle:'準備完了',tourReadyText:'テーマ、言語、フォント、ホーム背景は設定でいつでも変更できます。',tourSettings:'設定を開く',tourDone:'完了',tourSkip:'スキップ',tourNext:'次へ'},
    'ko-KR':{tourStartTitle:'여기서 시작',tourStartText:'주소창에 URL이나 검색어를 입력하고 Enter를 누르세요.',tourTabsTitle:'탭',tourTabsText:'모든 탭이 여기에 있습니다. 열어서 전환, 닫기, 새로 만들기.',tourMoreTitle:'더보기',tourMoreText:'북마크, 기록, 플러그인, 오프라인 게임, 설정은 더보기에 있습니다.',tourAiTitle:'Ai 도우미',tourAiText:'Ai가 현재 페이지를 요약·번역하고 질문에 답합니다.',tourReadyTitle:'준비 완료',tourReadyText:'테마, 언어, 글꼴, 홈 배경은 설정에서 언제든 변경할 수 있습니다.',tourSettings:'설정 열기',tourDone:'완료',tourSkip:'건너뛰기',tourNext:'다음'},
    'fr-FR':{tourStartTitle:'Commencer ici',tourStartText:'Saisissez une URL ou un terme de recherche dans la barre d’adresse et appuyez sur Entrée.',tourTabsTitle:'Onglets',tourTabsText:'Tous les onglets sont ici. Ouvrez pour changer, fermer ou créer.',tourMoreTitle:'Plus',tourMoreText:'Favoris, historique, plugins, jeu hors ligne et paramètres dans Plus.',tourAiTitle:'Assistant Ai',tourAiText:'Ai peut résumer ou traduire la page et répondre à vos questions.',tourReadyTitle:'Prêt',tourReadyText:'Modifiez le thème, la langue, la police ou le fond dans les paramètres.',tourSettings:'Ouvrir les paramètres',tourDone:'Terminé',tourSkip:'Ignorer',tourNext:'Suivant'},
    'es-ES':{tourStartTitle:'Empezar aquí',tourStartText:'Escribe una URL o búsqueda en la barra y pulsa Intro.',tourTabsTitle:'Pestañas',tourTabsText:'Todas las pestañas están aquí. Abre para cambiar, cerrar o crear.',tourMoreTitle:'Más',tourMoreText:'Marcadores, historial, plugins, juego sin conexión y ajustes en Más.',tourAiTitle:'Asistente Ai',tourAiText:'Ai puede resumir o traducir la página y responder.',tourReadyTitle:'Listo',tourReadyText:'Cambia tema, idioma, fuente o fondo en Ajustes.',tourSettings:'Abrir ajustes',tourDone:'Listo',tourSkip:'Omitir',tourNext:'Siguiente'},
    'ru-RU':{tourStartTitle:'Начать здесь',tourStartText:'Введите URL или запрос в адресную строку и нажмите Enter.',tourTabsTitle:'Вкладки',tourTabsText:'Все вкладки здесь. Откройте, чтобы переключать, закрывать или создавать.',tourMoreTitle:'Ещё',tourMoreText:'Закладки, история, плагины, офлайн-игра и настройки в «Ещё».',tourAiTitle:'Ai-помощник',tourAiText:'Ai может суммировать или переводить страницу и отвечать.',tourReadyTitle:'Готово',tourReadyText:'Тему, язык, шрифт и фон можно менять в настройках.',tourSettings:'Открыть настройки',tourDone:'Готово',tourSkip:'Пропустить',tourNext:'Далее'},
    'pt-BR':{tourStartTitle:'Começar aqui',tourStartText:'Digite uma URL ou pesquisa na barra e pressione Enter.',tourTabsTitle:'Abas',tourTabsText:'Todas as abas ficam aqui. Abra para alternar, fechar ou criar.',tourMoreTitle:'Mais',tourMoreText:'Favoritos, histórico, plugins, jogo offline e configurações em Mais.',tourAiTitle:'Assistente Ai',tourAiText:'O Ai pode resumir ou traduzir a página e responder.',tourReadyTitle:'Pronto',tourReadyText:'Altere tema, idioma, fonte ou fundo nas configurações.',tourSettings:'Abrir configurações',tourDone:'Concluído',tourSkip:'Pular',tourNext:'Próximo'},
    'it-IT':{tourStartTitle:'Inizia qui',tourStartText:'Digita un URL o una ricerca nella barra e premi Invio.',tourTabsTitle:'Schede',tourTabsText:'Tutte le schede sono qui. Apri per cambiare, chiudere o crearne.',tourMoreTitle:'Altro',tourMoreText:'Segnalibri, cronologia, plugin, gioco offline e impostazioni in Altro.',tourAiTitle:'Assistente Ai',tourAiText:'Ai può riassumere o tradurre la pagina e rispondere.',tourReadyTitle:'Pronto',tourReadyText:'Cambia tema, lingua, font o sfondo nelle impostazioni.',tourSettings:'Apri impostazioni',tourDone:'Fatto',tourSkip:'Salta',tourNext:'Avanti'},
    'ar-SA':{tourStartTitle:'ابدأ هنا',tourStartText:'أدخل عنوان URL أو عبارة بحث في شريط العنوان واضغط Enter.',tourTabsTitle:'علامات التبويب',tourTabsText:'كل علامات التبويب هنا. افتحها للتبديل أو الإغلاق أو الإنشاء.',tourMoreTitle:'المزيد',tourMoreText:'الإشارات والسجل والإضافات واللعبة دون اتصال والإعدادات في المزيد.',tourAiTitle:'مساعد Ai',tourAiText:'يمكن لـ Ai تلخيص الصفحة أو ترجمتها والإجابة عن أسئلتك.',tourReadyTitle:'جاهز',tourReadyText:'غيّر السمة أو اللغة أو الخط أو الخلفية من الإعدادات.',tourSettings:'فتح الإعدادات',tourDone:'تم',tourSkip:'تخطي',tourNext:'التالي'},
    'lzh':{tourStartTitle:'自此始',tourStartText:'於址欄書址或所尋，按 Enter 即啟。',tourTabsTitle:'頁',tourTabsText:'諸頁皆聚於此，啟之可易、閉、新。',tourMoreTitle:'眾',tourMoreText:'書籤、閱歷、插件、離線戲與設置皆在眾。',tourAiTitle:'Ai 助',tourAiText:'Ai 可總、譯今頁，亦可答問。',tourReadyTitle:'備矣',tourReadyText:'欲易主題、語、字或首頁底，可於設置調之。',tourSettings:'往設置',tourDone:'成',tourSkip:'略',tourNext:'次'}
    };
    Object.keys(TOUR_I18N).forEach(function(code){D[code]=Object.assign({},D[code],TOUR_I18N[code])});
        C.LANGS=[{code:'system',name:'System'},{code:'zh-CN',name:'简体中文'},{code:'zh-TW',name:'繁體中文'},{code:'lzh',name:'文言文'},{code:'en-US',name:'English'},{code:'ja-JP',name:'日本語'},{code:'ko-KR',name:'한국어'},{code:'fr-FR',name:'Français'},{code:'de-DE',name:'Deutsch'},{code:'es-ES',name:'Español'},{code:'ru-RU',name:'Русский'},{code:'pt-BR',name:'Português'},{code:'it-IT',name:'Italiano'},{code:'ar-SA',name:'العربية'}];
    
    C.resolveLang=function(lang){
    if(!lang||lang==='system'){
    var sys=(navigator.language||'en-US').toLowerCase();
    if(sys.indexOf('zh-tw')===0||sys.indexOf('zh-hk')===0||sys.indexOf('zh-hant')===0)return'zh-TW';
    if(sys.indexOf('zh')===0)return'zh-CN';
    if(sys.indexOf('ja')===0)return'ja-JP';
    if(sys.indexOf('ko')===0)return'ko-KR';
    if(sys.indexOf('fr')===0)return'fr-FR';
    if(sys.indexOf('de')===0)return'de-DE';
    if(sys.indexOf('es')===0)return'es-ES';
    if(sys.indexOf('ru')===0)return'ru-RU';
    if(sys.indexOf('pt')===0)return'pt-BR';
    if(sys.indexOf('it')===0)return'it-IT';
    if(sys.indexOf('ar')===0)return'ar-SA';
    if(sys.indexOf('lzh')===0)return'lzh';
    return'en-US';
    }
    return D[lang]?lang:'en-US';
    };
    
    C.t=function(key,vars){
    var lang=C.resolveLang(C.settingsStore.get().language);
    var dict=D[lang]||D['en-US'];
    var str=dict[key]||D['en-US'][key]||key;
    if(vars)Object.keys(vars).forEach(function(k){str=str.replace(new RegExp('\\{'+k+'\\}','g'),vars[k])});
    return str;
    };
    
    C.ENGINES={google:{label:'Google',url:'https://www.google.com/search?q='},bing:{label:'Bing',url:'https://www.bing.com/search?q='},baidu:{label:'Baidu',url:'https://www.baidu.com/s?wd='},duckduckgo:{label:'DuckDuckGo',url:'https://duckduckgo.com/?q='},github:{label:'GitHub',url:'https://github.com/search?q=',type:'github'}};
    C.SEARCH_DOMAINS=['google.com','bing.com','baidu.com','duckduckgo.com','github.com','google.co.jp','google.co.kr','google.com.hk','google.co.uk','google.fr','google.de','google.es','google.ru','google.it','google.ca','google.com.br','google.com.au','search.yahoo.com'];
    
    C.THEMES=[
    {id:'system',label:'System',bg:'#ffffff',ac:'#1a73e8'},
    {id:'light',label:'Light',bg:'#ffffff',ac:'#1a73e8'},
    {id:'dark',label:'Dark',bg:'#1e2023',ac:'#4c8dff'},
    {id:'graphite',label:'Graphite',bg:'#0d0d0f',ac:'#ededee'},
    {id:'midnight',label:'Midnight',bg:'#0b1020',ac:'#7aa2ff'},
    {id:'forest',label:'Forest',bg:'#0e1512',ac:'#6ed49a'},
    {id:'rose',label:'Rose',bg:'#fff5f7',ac:'#e8547a'},
    {id:'sunset',label:'Sunset',bg:'#1a0f0a',ac:'#ff9f5a'},
    {id:'violet',label:'Violet',bg:'#0f0a1a',ac:'#b794f6'}
    ];
    
    C.FONTS=[
    {id:'system',name:'System',stack:'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif'},
    {id:'source-han-sans',name:'Source Han Sans',stack:"'Source Han Sans','Noto Sans SC',sans-serif"},
    {id:'misans',name:'MiSans',stack:"'MiSans',sans-serif"},
    {id:'harmonyos-sans',name:'HarmonyOS Sans',stack:"'HarmonyOS Sans SC',sans-serif"},
    {id:'alibaba-puhuiti',name:'阿里巴巴普惠体',stack:"'Alibaba PuHuiTi',sans-serif"},
    {id:'oppo-sans',name:'OPPO Sans',stack:"'OPPO Sans',sans-serif"},
    {id:'lxgw-neo-xihei',name:'LXGW Neo XiHei',stack:"'LXGW Neo XiHei',sans-serif"},
    {id:'smiley-sans',name:'Smiley Sans',stack:"'Smiley Sans',sans-serif"},
    {id:'wenquanyi-zen-hei',name:'WenQuanYi Zen Hei',stack:"'WenQuanYi Zen Hei',sans-serif"},
    {id:'lxgw-wenkai',name:'LXGW WenKai',stack:"'LXGW WenKai',serif"},
    {id:'ma-shan-zheng',name:'马善政楷书',stack:"'Ma Shan Zheng',cursive"},
    {id:'zhi-mang-xing',name:'志莽行书',stack:"'Zhi Mang Xing',cursive"},
    {id:'long-cang',name:'龙藏体',stack:"'Long Cang',cursive"},
    {id:'liu-jian-mao-cao',name:'柳建毛草',stack:"'Liu Jian Mao Cao',cursive"},
    {id:'zcool-kuaile',name:'站酷快乐体',stack:"'ZCOOL KuaiLe',cursive"},
    {id:'source-han-serif',name:'Source Han Serif CN',stack:"'Source Han Serif CN',serif"},
    {id:'inter',name:'Inter',stack:"'Inter',sans-serif"},
    {id:'source-sans-3',name:'Source Sans 3',stack:"'Source Sans 3',sans-serif"},
    {id:'geist',name:'Geist',stack:"'Geist',sans-serif"},
    {id:'roboto',name:'Roboto',stack:"'Roboto',sans-serif"},
    {id:'maple-mono',name:'Maple Mono',stack:"'Maple Mono',monospace"},
    {id:'jetbrains-mono',name:'JetBrains Mono',stack:"'JetBrains Mono',monospace"},
    {id:'fira-code',name:'Fira Code',stack:"'Fira Code',monospace"},
    {id:'monaspace',name:'Monaspace',stack:"'Monaspace',monospace"},
    {id:'source-code-pro',name:'Source Code Pro',stack:"'Source Code Pro',monospace"},
    {id:'cascadia-code',name:'Cascadia Code',stack:"'Cascadia Code',monospace"},
    {id:'iosevka',name:'Iosevka',stack:"'Iosevka',monospace"},
    {id:'hack',name:'Hack',stack:"'Hack',monospace"},
    {id:'chillround',name:'ChillRound',stack:"'ChillRound','Chill Round',sans-serif"}
    ];
    
    C.PROVIDERS={
    openai:{label:'OpenAI',endpoint:'https://api.openai.com/v1/chat/completions',model:'gpt-4o-mini',badge:'O',color:'#10a37f'},
    deepseek:{label:'DeepSeek',endpoint:'https://api.deepseek.com/v1/chat/completions',model:'deepseek-chat',badge:'D',color:'#4d6bfe'},
    anthropic:{label:'Anthropic',endpoint:'https://api.anthropic.com/v1/messages',model:'claude-3-5-sonnet-latest',badge:'A',color:'#d97757'},
    google:{label:'Google Gemini',endpoint:'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions',model:'gemini-1.5-flash',badge:'G',color:'#4285f4'},
    qwen:{label:'通义千问',labelKey:'providerQwen',endpoint:'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',model:'qwen-plus',badge:'Q',color:'#615ced'},
    moonshot:{label:'Moonshot',endpoint:'https://api.moonshot.cn/v1/chat/completions',model:'moonshot-v1-8k',badge:'M',color:'#1f1f1f'},
    zhipu:{label:'智谱 GLM',labelKey:'providerZhipu',endpoint:'https://open.bigmodel.cn/api/paas/v4/chat/completions',model:'glm-4-flash',badge:'Z',color:'#3859ff'},
    siliconflow:{label:'SiliconFlow',endpoint:'https://api.siliconflow.cn/v1/chat/completions',model:'Qwen/Qwen2.5-7B-Instruct',badge:'S',color:'#16b8a6'},
    groq:{label:'Groq',endpoint:'https://api.groq.com/openai/v1/chat/completions',model:'llama-3.1-8b-instant',badge:'G',color:'#f55036'},
    mistral:{label:'Mistral',endpoint:'https://api.mistral.ai/v1/chat/completions',model:'mistral-small-latest',badge:'M',color:'#ff7000'},
    xai:{label:'Grok',endpoint:'https://api.x.ai/v1/chat/completions',model:'grok-2-latest',badge:'X',color:'#111111'},
    openrouter:{label:'OpenRouter',endpoint:'https://openrouter.ai/api/v1/chat/completions',model:'openai/gpt-4o-mini',badge:'R',color:'#6467f2'},
    ollama:{label:'Ollama',endpoint:'http://localhost:11434/v1/chat/completions',model:'llama3.1',badge:'O',color:'#333333'},
    lmstudio:{label:'LM Studio',endpoint:'http://localhost:1234/v1/chat/completions',model:'local-model',badge:'L',color:'#6b4fbb'},
    custom:{label:'自定义',labelKey:'providerCustom',endpoint:'',model:'',badge:'+',color:'#8b8d93'}
    };
    C.TRANS_LANGS=[{code:'zh-CN',name:'简体中文'},{code:'zh-TW',name:'繁體中文'},{code:'en',name:'English'},{code:'ja',name:'日本語'},{code:'ko',name:'한국어'},{code:'fr',name:'Français'},{code:'de',name:'Deutsch'},{code:'es',name:'Español'},{code:'ru',name:'Русский'},{code:'pt',name:'Português'},{code:'it',name:'Italiano'},{code:'nl',name:'Nederlands'},{code:'pl',name:'Polski'},{code:'tr',name:'Türkçe'},{code:'ar',name:'العربية'},{code:'he',name:'עברית'},{code:'hi',name:'हिन्दी'},{code:'th',name:'ไทย'},{code:'vi',name:'Tiếng Việt'},{code:'id',name:'Bahasa Indonesia'},{code:'ms',name:'Bahasa Melayu'},{code:'sv',name:'Svenska'},{code:'no',name:'Norsk'},{code:'da',name:'Dansk'},{code:'fi',name:'Suomi'},{code:'cs',name:'Čeština'},{code:'hu',name:'Magyar'},{code:'ro',name:'Română'},{code:'uk',name:'Українська'},{code:'el',name:'Ελληνικά'},{code:'fa',name:'فارسی'},{code:'bn',name:'বাংলা'},{code:'sw',name:'Kiswahili'}];
    C.THINKING_KEYS=['off','low','medium','high'];
    C.THINKING_PROMPT={off:'',low:'Be concise.',medium:'Think step by step, then answer clearly.',high:'Reason deeply step by step, then produce a thorough answer.'};
    C.AI_PERSONAS=[
    {id:'general',label:'aiGoalGeneral',prompt:'You are Fuey Ai, the assistant built into Fuey Mini Browser. Be accurate, clear and concise. When the user refers to the page they are viewing, use the page URL and title as context.'},
    {id:'summary',label:'aiGoalSummary',prompt:'You are a web page summarizer inside Fuey Mini Browser. Give a tight structured summary: one-line gist, key points, and takeaways. Never invent facts that are not in the provided content.'},
    {id:'translate',label:'aiGoalTranslate',prompt:'You are a professional translator inside Fuey Mini Browser. Translate the user content faithfully into the requested language, keep formatting, and do not add commentary.'},
    {id:'code',label:'aiGoalCode',prompt:'You are a senior software engineer inside Fuey Mini Browser. Provide correct, runnable code and short explanations. Point out edge cases without over-explaining.'}
    ];
    C.getPersona=function(id){return C.AI_PERSONAS.find(function(p){return p.id===id})||C.AI_PERSONAS[0]};
    C.GROUP_COLORS=[{id:'red',value:'#e5484d'},{id:'orange',value:'#f7a142'},{id:'yellow',value:'#f2c94c'},{id:'green',value:'#4eac5b'},{id:'blue',value:'#4a8cff'},{id:'purple',value:'#b794f6'},{id:'gray',value:'#8b8d93'},{id:'pink',value:'#f472b6'}];
    
    C.uid=function(){return Date.now().toString(36)+Math.random().toString(36).slice(2,8)};
    C.escapeHtml=function(t){return String(t).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})};
    C.initial=function(n){var t=String(n||'').trim();return t?t[0].toUpperCase():'?'};
    C.domainOf=function(url){try{var u=new URL(/^https?:\/\//.test(url)?url:'https://'+url);return u.hostname.replace(/^www\./,'')}catch(e){return''}};
    C.isSearchEngine=function(url){var d=C.domainOf(url);return C.SEARCH_DOMAINS.some(function(s){return d===s||d.endsWith('.'+s)})};
    C.faviconSources=function(url){
    var d=C.domainOf(url);
    if(!d)return[];
    var host=d;
    try{host=new URL(/^https?:\/\//.test(url)?url:'https://'+url).hostname}catch(e){}
    if(/^\d{1,3}(\.\d{1,3}){3}$/.test(host)||host==='localhost'||host==='[::1]'||host.indexOf('.')<0)return[];
    return['https://'+host+'/favicon.ico'];
    };
    C.faviconUrl=function(url){return C.faviconSources(url)[0]||''};
    C.faviconImg=function(url,cls){var list=C.faviconSources(url);if(!list.length)return'';return'<img'+(cls?' class="'+cls+'"':'')+' src="'+list[0]+'" alt="" loading="lazy" referrerpolicy="no-referrer" data-fi="0" data-fs="'+C.escapeHtml(list.join('|'))+'" onerror="window.Core.faviconError(this)">'};
    C.faviconError=function(img){
    var list=(img.getAttribute('data-fs')||'').split('|');
    var i=parseInt(img.getAttribute('data-fi')||'0',10)+1;
    if(list[i]){img.setAttribute('data-fi',String(i));img.src=list[i];return}
    img.onerror=null;
    var svg=C.ICONS.globeSmall.replace(/currentColor/g,'#8b8d93');
    img.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);
    };
    C.isUrl=function(text){var v=String(text||'').trim();if(!v)return false;if(/^[a-zA-Z][a-zA-Z\d+\-.]*:\/\//.test(v))return true;if(/^[\w-]+(\.[\w-]+)+(\/\S*)?$/.test(v))return true;if(v==='localhost'||/^localhost[:/]/.test(v))return true;if(/^\d{1,3}(\.\d{1,3}){3}(:\d+)?(\/\S*)?$/.test(v))return true;return false};
    C.resolveTarget=function(text,engine){var v=String(text||'').trim();if(!v)return'';if(C.isUrl(v))return/^[a-zA-Z][a-zA-Z\d+\-.]*:\/\//.test(v)?v:'https://'+v;var s=C.settingsStore.get();if(engine==='custom'&&s.customEngine&&s.customEngine.url)return s.customEngine.url+encodeURIComponent(v);var eng=C.ENGINES[engine]||C.ENGINES.google;return eng.url+encodeURIComponent(v)};
    C.normalizeUrl=function(url){var v=String(url||'').trim();if(!v)return'';if(/^[a-zA-Z][a-zA-Z\d+\-.]*:\/\//.test(v))return v;return'https://'+v};
    var titleWait={};
    C.ensureTitle=function(url,done){
    if(!url||!C.faviconSources(url).length)return;
    var items=C.titlesStore.get().items||{};
    if(items[url]){if(done)done(items[url]);return}
    var wait=titleWait[url]||(titleWait[url]=[]);
    if(done)wait.push(done);
    if(wait.busy)return;
    wait.busy=true;
    fetch('https://api.microlink.io/?url='+encodeURIComponent(url),{credentials:'omit'})
    .then(function(res){if(!res.ok)throw new Error('HTTP '+res.status);return res.json()})
    .then(function(data){
    var title=data&&data.data&&(data.data.title||data.data.publisher);
    if(!title)throw new Error('no-title');
    C.titlesStore.set(function(s){
    var next=Object.assign({},s.items);
    next[url]=title;
    var keys=Object.keys(next);
    if(keys.length>600)keys.slice(0,100).forEach(function(k){delete next[k]});
    return{items:next};
    });
    wait.forEach(function(fn){try{fn(title)}catch(e){}});
    })
    .catch(function(){})
    .then(function(){delete titleWait[url]});
    };
    C.isGithubEngine=function(engine){return engine==='github'};
    C.githubToken=function(){return String(C.settingsStore.get().githubToken||'').trim()};
    C.githubHeaders=function(token){var h={'Accept':'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28'};if(token)h.Authorization='Bearer '+token;return h};
    C.modelsEndpoint=function(endpoint){
    var base=String(endpoint||'').trim().replace(/\/+$/,'');
    if(!base)return'';
    if(/api\.anthropic\.com/i.test(base))return base.replace(/\/messages$/,'')+'/models';
    base=base.replace(/\/chat\/completions$/,'');
    if(!/\/v\d+[a-z0-9.\-]*$/i.test(base))base+='/v1';
    return base+'/models';
    };
    C.formatReset=function(ts){var d=new Date(ts*1000);return String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')};
    C.maskKey=function(v){var t=String(v||'');if(!t)return'';if(t.length<=10)return t.slice(0,2)+'••••';return t.slice(0,6)+'••••••••'+t.slice(-4)};
    C.formatDate=function(ts){var d=new Date(ts);return d.getFullYear()+'/'+String(d.getMonth()+1).padStart(2,'0')+'/'+String(d.getDate()).padStart(2,'0')};
    C.copyText=function(text){if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(text);var a=document.createElement('textarea');a.value=text;a.style.position='fixed';a.style.opacity='0';document.body.append(a);a.select();document.execCommand('copy');a.remove();return Promise.resolve()};
    C.hexToRgba=function(hex,a){var h=hex.replace('#','');if(h.length===3)h=h.split('').map(function(c){return c+c}).join('');var r=parseInt(h.slice(0,2),16),g=parseInt(h.slice(2,4),16),b=parseInt(h.slice(4,6),16);return'rgba('+r+','+g+','+b+','+a+')'};
    C.isColorDark=function(hex){var h=hex.replace('#','');if(h.length===3)h=h.split('').map(function(c){return c+c}).join('');var r=parseInt(h.slice(0,2),16),g=parseInt(h.slice(2,4),16),b=parseInt(h.slice(4,6),16);var yiq=(r*299+g*587+b*114)/1000;return yiq<128};
    
    C.compressImage=function(file,maxWidth,quality){
    return new Promise(function(resolve,reject){
    if(!file.type||file.type.indexOf('image/')!==0){reject(new Error('not-image'));return}
    var reader=new FileReader();
    reader.onerror=function(){reject(new Error('read-fail'))};
    reader.onload=function(e){
    var img=new Image();
    img.onerror=function(){reject(new Error('image-fail'))};
    img.onload=function(){
    var w=img.width,h=img.height;
    var ratio=Math.min(1,(maxWidth||1920)/w);
    var cw=Math.round(w*ratio),ch=Math.round(h*ratio);
    var canvas=document.createElement('canvas');
    canvas.width=cw;canvas.height=ch;
    canvas.getContext('2d').drawImage(img,0,0,cw,ch);
    try{resolve(canvas.toDataURL('image/jpeg',quality||.85))}catch(err){reject(new Error('encode-fail'))}
    };
    img.src=e.target.result;
    };
    reader.readAsDataURL(file);
    });
    };
    
    var INC=new URLSearchParams(location.search).has('incognito');
    var STORAGE=INC?sessionStorage:localStorage;
    var PREFIX='fuey.v26.11.28.0.';
    C.VERSION='v26.11.28.0';
    C.isIncognito=INC;
    
    function readStore(name,fb){try{var raw=STORAGE.getItem(PREFIX+name);if(raw===null)return fb;var p=JSON.parse(raw);return p&&typeof p==='object'?p:fb}catch(e){return fb}}
    function writeStore(name,val){try{STORAGE.setItem(PREFIX+name,JSON.stringify(val));return true}catch(e){return false}}
    
    function createStore(name,initial){
    var state=Object.assign({},initial,readStore(name,{}));
    var listeners=new Set();
    return{
    get:function(){return state},
    set:function(patch){
    var next=typeof patch==='function'?patch(state):patch;
    state=Object.assign({},state,next);
    var ok=writeStore(name,state);
    listeners.forEach(function(fn){fn(state,ok)});
    },
    subscribe:function(fn){listeners.add(fn);return function(){listeners.delete(fn)}}
    };
    }
    
    C.settingsStore=createStore('settings',{theme:'system',engine:'google',customEngine:{label:'Custom',url:''},githubToken:'',language:'system',zoom:100,bookmarksBarVisible:true,fontFamily:'system',fontScale:1,buttonScale:1,colorBlind:'none',leftHanded:false,homeBackground:'none',cameraOffset:24,fullscreenHideToolbar:false,aiWorkLabel:true,settingsTab:'appearance'});
    C.HOME_BACKGROUNDS=[
    {id:'none',nameKey:'bgDefault',file:'',tone:'none'},
    {id:'snow',nameKey:'bgSnow',file:'background.png',tone:'snow'},
    {id:'plant',nameKey:'bgPlant',file:'background_1.png',tone:'plant'},
    {id:'danxia',nameKey:'bgDanxia',file:'background_2.png',tone:'danxia'},
    {id:'fluid',nameKey:'bgFluid',file:'background_3.png',tone:'fluid'}
    ];
    C.aiStore=createStore('ai',{provider:'custom',endpoint:'',apiKey:'',chat:{model:'',temperature:.7,thinking:'medium',persona:'general'},translate:{model:'',temperature:.3,thinking:'off',target:'zh-CN'}});
    C.githubStore=createStore('github',{query:'',items:[],total:0,message:''});
    C.titlesStore=createStore('titles',{items:{}});
    C.builtinPluginsStore=createStore('builtinPlugins',{enabled:{}});
    C.BUILTIN_PLUGINS=[
    {id:'fullscreen',nameKey:'pluginFullscreen',descKey:'pluginFullscreenDesc'},
    {id:'camera-safe',nameKey:'pluginCamera',descKey:'pluginCameraDesc'},
    {id:'ai-work',nameKey:'pluginAiWork',descKey:'pluginAiWorkDesc'}
    ];
    C.bookmarksStore=createStore('bookmarks',{items:[]});
    C.shortcutsStore=createStore('shortcuts',{items:[]});
    C.passwordsStore=createStore('passwords',{items:[]});
    C.chatStore=createStore('chat',{messages:[]});
    C.historyStore=createStore('history',{items:[]});
    C.downloadsStore=createStore('downloads',{items:[]});
    C.customThemesStore=createStore('customThemes',{items:[]});
    C.pluginsStore=createStore('plugins',{items:[]});
    
    C.clearAll=function(){
    Object.keys(STORAGE).filter(function(k){return k.indexOf(PREFIX)===0}).forEach(function(k){STORAGE.removeItem(k)});
    Object.keys(localStorage).filter(function(k){return k.indexOf('fuey-')===0||k==='fuey.agreed'||k==='fuey.master'||k==='fuey.onboarded'}).forEach(function(k){localStorage.removeItem(k)});
    try{Object.keys(sessionStorage).filter(function(k){return k.indexOf('fuey-')===0||k.indexOf(PREFIX)===0}).forEach(function(k){sessionStorage.removeItem(k)})}catch(e){}
    };
    C.clearBrowsingData=function(){
    C.historyStore.set({items:[]});
    C.downloadsStore.set({items:[]});
    };
    
    var MASTER='fuey.master.';
    function getMasterKey(){
    var raw=localStorage.getItem(MASTER);
    if(!raw){var bytes=crypto.getRandomValues(new Uint8Array(32));raw=btoa(String.fromCharCode.apply(null,bytes));localStorage.setItem(MASTER,raw)}
    return crypto.subtle.importKey('raw',Uint8Array.from(atob(raw),function(c){return c.charCodeAt(0)}),'AES-GCM',false,['encrypt','decrypt']);
    }
    
    C.encrypt=function(text){
    if(!text)return Promise.resolve('');
    return getMasterKey().then(function(key){
    var iv=crypto.getRandomValues(new Uint8Array(12));
    return crypto.subtle.encrypt({name:'AES-GCM',iv:iv},key,new TextEncoder().encode(text)).then(function(enc){
    var combined=new Uint8Array(12+enc.byteLength);
    combined.set(iv,0);combined.set(new Uint8Array(enc),12);
    return btoa(String.fromCharCode.apply(null,combined));
    });
    });
    };
    
    C.decrypt=function(b64){
    if(!b64)return Promise.resolve('');
    return getMasterKey().then(function(key){
    try{
    var combined=Uint8Array.from(atob(b64),function(c){return c.charCodeAt(0)});
    var iv=combined.subarray(0,12);var data=combined.subarray(12);
    return crypto.subtle.decrypt({name:'AES-GCM',iv:iv},key,data).then(function(dec){return new TextDecoder().decode(dec)});
    }catch(e){return''}
    });
    };
    
    function crc32(bytes){var crc=-1;for(var i=0;i<bytes.length;i++){crc^=bytes[i];for(var j=0;j<8;j++)crc=(crc>>>1)^(crc&1?0xEDB88320:0)}return(crc^-1)>>>0}
    function u16(n){return[n&0xff,(n>>>8)&0xff]}
    function u32(n){return[n&0xff,(n>>>8)&0xff,(n>>>16)&0xff,(n>>>24)&0xff]}
    
    C.makeZip=function(files){
    var local=[],central=[],offset=0;
    files.forEach(function(f){
    var nameBytes=new TextEncoder().encode(f.name);
    var crc=crc32(f.data);var size=f.data.length;
    var lh=[].concat(u32(0x04034b50),u16(20),u16(0),u16(0),u16(0),u16(0),u32(crc),u32(size),u32(size),u16(nameBytes.length),u16(0));
    var localEntry=new Uint8Array(lh.length+nameBytes.length+size);
    localEntry.set(lh,0);localEntry.set(nameBytes,lh.length);localEntry.set(f.data,lh.length+nameBytes.length);
    var ch=[].concat(u32(0x02014b50),u16(20),u16(20),u16(0),u16(0),u16(0),u16(0),u32(crc),u32(size),u32(size),u16(nameBytes.length),u16(0),u16(0),u16(0),u16(0),u32(0),u32(offset));
    var centralEntry=new Uint8Array(ch.length+nameBytes.length);
    centralEntry.set(ch,0);centralEntry.set(nameBytes,ch.length);
    local.push(localEntry);central.push(centralEntry);offset+=localEntry.length;
    });
    var localLen=local.reduce(function(s,e){return s+e.length},0);
    var centralLen=central.reduce(function(s,e){return s+e.length},0);
    var end=new Uint8Array([].concat(u32(0x06054b50),u16(0),u16(0),u16(files.length),u16(files.length),u32(centralLen),u32(localLen),u16(0)));
    var total=localLen+centralLen+end.length;
    var out=new Uint8Array(total);var pos=0;
    local.forEach(function(e){out.set(e,pos);pos+=e.length});
    central.forEach(function(e){out.set(e,pos);pos+=e.length});
    out.set(end,pos);
    return out;
    };
    
    C.parseZip=function(arrayBuffer){
    var bytes=new Uint8Array(arrayBuffer);
    var eocd=-1;
    for(var i=bytes.length-22;i>=0;i--){if(bytes[i]===0x50&&bytes[i+1]===0x4b&&bytes[i+2]===0x05&&bytes[i+3]===0x06){eocd=i;break}}
    if(eocd<0)return Promise.reject(new Error('invalid-zip'));
    var cdOffset=bytes[eocd+16]|(bytes[eocd+17]<<8)|(bytes[eocd+18]<<16)|(bytes[eocd+19]<<24);
    var count=bytes[eocd+10]|(bytes[eocd+11]<<8);
    var pos=cdOffset;var files={};var pending=[];
    for(var k=0;k<count;k++){
    var nameLen=bytes[pos+28]|(bytes[pos+29]<<8);
    var extraLen=bytes[pos+30]|(bytes[pos+31]<<8);
    var commentLen=bytes[pos+32]|(bytes[pos+33]<<8);
    var compression=bytes[pos+10]|(bytes[pos+11]<<8);
    var localOffset=bytes[pos+42]|(bytes[pos+43]<<8)|(bytes[pos+44]<<16)|(bytes[pos+45]<<24);
    var name=new TextDecoder().decode(bytes.subarray(pos+46,pos+46+nameLen));
    var lnameLen=bytes[localOffset+26]|(bytes[localOffset+27]<<8);
    var lextraLen=bytes[localOffset+28]|(bytes[localOffset+29]<<8);
    var compSize=bytes[localOffset+18]|(bytes[localOffset+19]<<8)|(bytes[localOffset+20]<<16)|(bytes[localOffset+21]<<24);
    var dataStart=localOffset+30+lnameLen+lextraLen;
    var data=bytes.subarray(dataStart,dataStart+compSize);
    if(compression===0){files[name]=data}
    else if(compression===8){
    pending.push((function(name,data){
    return function(){
    var stream=new DecompressionStream('deflate-raw');
    var writer=stream.writable.getWriter();
    writer.write(data);writer.close();
    return new Response(stream.readable).arrayBuffer().then(function(buf){files[name]=new Uint8Array(buf)});
    };
    })(name,data));
    }
    pos+=46+nameLen+extraLen+commentLen;
    }
    return Promise.all(pending.map(function(fn){return fn()})).then(function(){return files});
    };
    
    C.toast=function(msg,type){
    var stack=document.querySelector('#toast-stack');
    if(!stack)return;
    var el=document.createElement('div');
    el.className='toast'+(type==='error'?' toast--error':'');
    el.textContent=msg;
    stack.append(el);
    setTimeout(function(){el.classList.add('is-out');setTimeout(function(){el.remove()},200)},2000);
    };
    
    C.openModal=function(options){
    var root=document.querySelector('#modal-root');
    var overlay=document.createElement('div');
    overlay.className='modal-overlay';
    overlay.innerHTML='<div class="modal">'+
    '<div class="modal-head"><h3 class="modal-title"></h3><button class="modal-close" type="button" data-close>×</button></div>'+
    '<div class="modal-body"></div>'+
    '<div class="modal-foot"><button class="btn" type="button" data-cancel></button><button class="btn btn--primary" type="button" data-confirm></button></div>'+
    '</div>';
    overlay.querySelector('.modal-title').textContent=options.title||'';
    overlay.querySelector('[data-cancel]').textContent=options.cancelText||C.t('cancel');
    if(options.cancelText==='')overlay.querySelector('[data-cancel]').style.display='none';
    overlay.querySelector('[data-confirm]').textContent=options.confirmText||C.t('confirm');
    overlay.querySelector('.modal-body').append(options.body);
    var closed=false;
    function close(){if(closed)return;closed=true;document.removeEventListener('keydown',onKey);overlay.classList.add('is-out');setTimeout(function(){overlay.remove()},160)}
    function confirm(){var result=options.onConfirm?options.onConfirm():true;if(result!==false)close()}
    function onKey(e){if(e.key==='Escape')close();if(e.key==='Enter'&&e.target.tagName==='INPUT'){e.preventDefault();confirm()}}
    overlay.addEventListener('click',function(e){
    if(e.target===overlay)close();
    if(e.target.closest('[data-close]')||e.target.closest('[data-cancel]'))close();
    if(e.target.closest('[data-confirm]'))confirm();
    });
    document.addEventListener('keydown',onKey);
    root.append(overlay);
    var first=overlay.querySelector('input:not([type=file]),textarea');
    if(first)setTimeout(function(){first.focus()},60);
    return{close:close};
    };
    
    C.compareVersion=function(a,b){
    var pa=String(a||'0').replace(/^v/i,'').split('.').map(function(x){return parseInt(x,10)||0});
    var pb=String(b||'0').replace(/^v/i,'').split('.').map(function(x){return parseInt(x,10)||0});
    var len=Math.max(pa.length,pb.length);
    for(var i=0;i<len;i++){
    var x=pa[i]||0,y=pb[i]||0;
    if(x>y)return 1;
    if(x<y)return -1;
    }
    return 0;
    };
    C.checkUpdate=function(silent){
    var local=(window.FUEY_UPDATE&&window.FUEY_UPDATE.version)||C.VERSION;
    var urls=[
    'https://raw.githubusercontent.com/FueySeek/Fuey-Mini-Browser/main/update.js',
    'https://raw.githubusercontent.com/FueySeek/Fuey-Mini-Browser/master/update.js',
    'https://fueyseek.github.io/Fuey-Mini-Browser/update.js'
    ];
    function next(i){
    if(i>=urls.length){if(!silent)C.toast(C.t('updateFailed'),'error');return}
    var ctrl=typeof AbortController!=='undefined'?new AbortController():null;
    var timer=setTimeout(function(){if(ctrl)ctrl.abort()},5000);
    var conf={cache:'no-store'};
    if(ctrl)conf.signal=ctrl.signal;
    fetch(urls[i]+'?t='+Date.now(),conf).then(function(res){
    clearTimeout(timer);
    if(!res.ok)throw new Error('HTTP '+res.status);
    return res.text();
    }).then(function(text){
    var match=text.match(/version['"]?\s*[:=]\s*['"]([^'"]+)/i);
    if(!match)throw new Error('bad-update-file');
    var remote=match[1];
    if(C.compareVersion(remote,local)>0){
    C.confirmDialog(C.t('newVersion',{version:remote}),function(){
    if(window.Browser)window.Browser.openUrl((window.FUEY_UPDATE&&window.FUEY_UPDATE.url)||'https://github.com/FueySeek/Fuey-Mini-Browser');
    },{title:C.t('checkUpdate'),confirmText:C.t('openSite'),cancelText:C.t('cancel')});
    }else if(!silent){
    C.toast(C.t('latestVersion',{version:local}));
    }
    }).catch(function(){clearTimeout(timer);next(i+1)});
    }
    next(0);
    };
    
    C.confirmDialog=function(text,onConfirm,opts){
    opts=opts||{};
    var body=document.createElement('div');
    body.className='confirm-message';
    body.textContent=text;
    return C.openModal({title:opts.title||C.t('confirmTitle'),body:body,confirmText:opts.confirmText||C.t('confirm'),cancelText:opts.cancelText||C.t('cancel'),onConfirm:onConfirm});
    };
    
    var openSelect=null;
    C.closeAllSelects=function(){if(openSelect){openSelect.menu.hidden=true;openSelect.trigger.classList.remove('is-open');openSelect=null}};
    
    C.createSelect=function(options){
    var el=document.createElement('div');
    el.className='select';
    el.style.minWidth=options.width||'200px';
    var trigger=document.createElement('button');
    trigger.type='button';
    trigger.className='select-trigger';
    trigger.innerHTML='<span class="select-value"></span><svg class="select-arrow" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';
    el.append(trigger);
    var menu=document.createElement('div');
    menu.className='select-menu';
    menu.hidden=true;
    document.body.append(menu);
    var value=options.value;
    var items=options.items||[];
    function render(){
    var current=items.find(function(i){return i.value===value});
    var triggerValue=trigger.querySelector('.select-value');
    triggerValue.textContent=current?current.label:'';
    triggerValue.style.fontFamily=current&&current.fontFamily?current.fontFamily:'';
    menu.innerHTML=items.map(function(i){
    return'<button class="select-option'+(i.value===value?' is-active':'')+'" type="button" data-value="'+C.escapeHtml(i.value)+'">'+
    '<span class="select-label">'+C.escapeHtml(i.label)+'</span>'+
    (i.fontFamily?'<span class="select-font-sample">Aa 汉字</span>':'')+
    (i.value===value?'<svg class="check" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>':'')+
    '</button>';
    }).join('');
    if(items.some(function(i){return i.fontFamily})){
    menu.querySelectorAll('[data-value]').forEach(function(btn){
    var item=items.find(function(i){return i.value===btn.dataset.value});
    if(item&&item.fontFamily)btn.style.fontFamily=item.fontFamily;
    });
    }
    }
    function positionMenu(){
    var rect=trigger.getBoundingClientRect();
    var spaceBelow=window.innerHeight-rect.bottom-12;
    var spaceAbove=rect.top-12;
    menu.style.minWidth=Math.max(rect.width,140)+'px';
    menu.style.left=Math.min(rect.left,window.innerWidth-160)+'px';
    if(spaceBelow<240&&spaceAbove>spaceBelow){
    menu.style.top='auto';
    menu.style.bottom=(window.innerHeight-rect.top+4)+'px';
    menu.style.maxHeight=Math.min(300,spaceAbove-8)+'px';
    }else{
    menu.style.top=(rect.bottom+4)+'px';
    menu.style.bottom='auto';
    menu.style.maxHeight=Math.min(300,spaceBelow-8)+'px';
    }
    }
    trigger.addEventListener('click',function(e){
    e.stopPropagation();
    if(openSelect&&openSelect.menu!==menu)C.closeAllSelects();
    if(!menu.hidden){menu.hidden=true;trigger.classList.remove('is-open');if(openSelect&&openSelect.menu===menu)openSelect=null;return}
    positionMenu();menu.hidden=false;trigger.classList.add('is-open');
    openSelect={menu:menu,trigger:trigger};
    });
    menu.addEventListener('click',function(e){
    var opt=e.target.closest('[data-value]');
    if(!opt)return;
    value=opt.dataset.value;
    menu.hidden=true;trigger.classList.remove('is-open');openSelect=null;
    render();
    if(options.onChange)options.onChange(value);
    });
    render();
    return{el:el,getValue:function(){return value},setValue:function(v){value=v;render()},setItems:function(list){items=list;if(!items.some(function(i){return i.value===value})&&items.length)value=items[0].value;render()}};
    };
    
    C.installSelectGlobal=function(){
    document.addEventListener('click',function(e){
    if(openSelect&&!openSelect.menu.contains(e.target)&&!openSelect.trigger.contains(e.target))C.closeAllSelects();
    });
    window.addEventListener('resize',function(){C.closeAllSelects()});
    window.addEventListener('scroll',function(e){
    if(openSelect&&openSelect.menu&&(e.target===openSelect.menu||openSelect.menu.contains(e.target)))return;
    C.closeAllSelects();
    },true);
    window.addEventListener('touchstart',function(e){
    if(openSelect&&openSelect.menu&&openSelect.menu.contains(e.target))e.stopPropagation();
    },true);
    };
    
    C.ICONS={
    back:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="m11 18-6-6 6-6"/></svg>',
    forward:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>',
    reload:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 12a8.5 8.5 0 1 1-2.5-6"/><path d="M20.5 4v5h-5"/></svg>',
    search:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/></svg>',
    searchBig:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/></svg>',
    star:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3.5l1.8 3.7 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L3.2 7.8l4-.6L9 3.5z"/><path d="M16.5 7.5h5M16.5 12h5M16.5 16.5h5"/></svg>',
    menu:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><circle cx="12" cy="5.5" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="12" cy="18.5" r="1.8"/></svg>',
    plus:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    plusBig:'<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    globe:'<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/></svg>',
    globeSmall:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/></svg>',
    home:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5.5 9.5V21h13V9.5"/></svg>',
    ai:'<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2c.6 4.5 3 6.9 7.5 7.5-4.5.6-6.9 3-7.5 7.5-.6-4.5-3-6.9-7.5-7.5 4.5-.6 6.9-3 7.5-7.5z"/></svg>',
    sparkle:'<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2c.6 4.5 3 6.9 7.5 7.5-4.5.6-6.9 3-7.5 7.5-.6-4.5-3-6.9-7.5-7.5 4.5-.6 6.9-3 7.5-7.5z"/></svg>',
    eye:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>',
    eyeOff:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10 10 0 0 1 12 20c-7 0-11-8-11-8a18 18 0 0 1 5.06-5.94M9.9 4.24A9 9 0 0 1 12 4c7 0 11 8 11 8a18 18 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><path d="m1 1 22 22"/></svg>',
    trash:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/></svg>',
    copy:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>',
    window:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/></svg>',
    incognito:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18M6 12a3 3 0 1 0 6 0M12 12a3 3 0 1 0 6 0"/><path d="M9 7l3-3 3 3"/></svg>',
    zoom:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6M8 11h6M11 8v6"/></svg>',
    bookmarksBar:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h18M3 12h18M3 19h10"/></svg>',
    history:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
    groups:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="8" height="12" rx="1.5"/><rect x="13" y="6" width="8" height="12" rx="1.5"/></svg>',
    download:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7 10l5 5 5-5M4 20h16"/></svg>',
    password:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>',
    clearData:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/></svg>',
    translate:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h9M7.5 3v2M4.5 7c1.5 3.5 4.5 5 7.5 5M3 12c4.5 0 7.5-2.5 9-6"/><path d="m13 20 4-11 4 11"/><path d="M14.2 16h5.6"/></svg>',
    help:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 1-1 1.7v.5"/><circle cx="12" cy="17" r="0.7" fill="currentColor"/></svg>',
    chat:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16v11H8l-4 4z"/></svg>',
    plugin:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v4H5v4h4v4h4v-4h4V8h-4V4z"/></svg>',
    upload:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7 8l5-5 5 5M4 20h16"/></svg>',
    settings:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.7l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.7-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.7.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.7 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.7l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.7.3h.1a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.7-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.7v.1a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/></svg>',
    tabs:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="13" height="14" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v11"/></svg>',
    key:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="4"/><path d="m11 12 8-8M17 4l3 3M15 6l3 3"/></svg>',
    check:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    github:'<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>',
    external:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-9 9M18 14v5H5V6h5"/></svg>',
    game:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 8h10a5 5 0 0 1 5 5v1a3 3 0 0 1-5.4 1.8L15 14H9l-1.6 1.8A3 3 0 0 1 2 14v-1a5 5 0 0 1 5-5z"/><path d="M7 11v3M5.5 12.5h3M16 12h.01M18 11h.01"/></svg>'
    };
    })();