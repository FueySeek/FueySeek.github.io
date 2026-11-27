const I18N={
en:{
headerTitle:"Exam System",userSectionLabel:"User",userRoleStudent:"Candidate",userRoleAdmin:"Admin",adminSectionLabel:"Admin",settingsLabel:"Settings",themeLabel:"Theme",themeDark:"Dark",themeLight:"Light",languageLabel:"Language",
importTitle:"Exam System",importDesc:"Import a data file or create a new one to get started.",importBtn:"Import",newDataBtn:"Create New",reImportBtn:"Import New File",
importSuccess:"Import successful",importFail:"Import failed",exportSuccess:"Export successful",exportFail:"Export failed",imageExported:"Result image exported",imageExportFail:"Failed to export image",studentExported:"Your result has been exported",studentExportFail:"Failed to export result",
clearDataBtn:"Clear",clearDataConfirmTitle:"Clear all data?",clearDataConfirm:"This will delete all imported questions, candidates and settings, and cannot be undone. Continue?",clearDataDone:"Data cleared",cannotClearInExam:"Cannot clear data during the exam",cannotSwitchDuringExam:"Cannot switch user during the exam",
statQuestionsLabel:"Questions",statUsersLabel:"Candidates",statScoreLabel:"Total Score",statDurationLabel:"Duration",
actQuestionsTitle:"Questions",actQuestionsDesc:"Manage question bank",actUsersTitle:"Candidates",actUsersDesc:"Manage candidate accounts",actSettingsTitle:"Settings",actSettingsDesc:"Exam configuration",actExportTitle:"Export",actExportDesc:"Save configuration file",
userWelcomeTitle:"Ready for the exam?",userWelcomeDesc:"Enter your name and UID / verify code to begin.",startQuiz:"Start Exam",guestQuiz:"Try Without Login",submit:"Submit",back:"Back",exportImage:"Export Image",exportStudent:"Export My Result",loginNewAccount:"Login with New Account",continueWithAccount:"Continue with This Account",backToHome:"Back to Home",
progress:"{0} / {1}",progressCorrect:"{0} / {1} correct",adminPasswordPrompt:"Enter admin password",adminPasswordWrong:"Wrong password",
setQuestions:"Question Management",setUsers:"Candidate Management",adminSettings:"Admin Settings",changePassword:"Change Password",addQuestion:"Add Question",addUser:"Add Candidate",
noQuestions:"No questions",noUsers:"No candidates",delete:"Delete",selectAll:"Select All",deselectAll:"Deselect All",deleteSelected:"Delete Selected",selectedCount:"{0} selected",
complete:"Complete",cancel:"Cancel",back_btn:"Back",next:"Next",confirm:"Confirm",close:"Close",
questionDeleted:"Question deleted",userDeleted:"Candidate deleted",deleteSuccess:"Deleted successfully",deleteSelectedSuccess:"Deleted {0} item(s)",
step1:"Step 1 · Question",step2:"Step 2 · Options",step3:"Step 3 · Correct Answer",step3Fill:"Step 3 · Blank Answers",questionText:"Question Text",questionType:"Question Type",singleChoice:"Single Choice",multipleChoice:"Multiple Choice",judgeQuestion:"True/False",fillQuestion:"Fill in the Blank",trueLabel:"✓",falseLabel:"✗",addImage:"Add Image",addAudio:"Add Audio",toggleImage:"Include Image",toggleAudio:"Include Audio",audioHint:"Paste audio URL (mp3 / wav / ogg)",questionImageHint:"Paste image URL or SVG code",optionCount:"Number of options",correctOption:"Correct Option",correctOptions:"Correct Options (multiple)",optionPlaceholder:"Option {0}",
titleRequired:"Question text is required",optionRequired:"Option {0} is required",questionAdded:"Question added",deleteConfirm:"Are you sure you want to delete this?",deleteSelectedConfirm:"Delete {0} selected item(s)?",
userName:"Name",gender:"Gender",male:"Male",female:"Female",other:"Other",userAdded:"Candidate added",nameRequired:"Name is required",enterName:"Enter your name",enterCred:"Enter UID or verify code",loginCredLabel:"UID / Verify Code",invalidCred:"Invalid UID or verify code",userNotRegistered:"This name is not registered",uid:"UID",verifyCode:"Verify Code",noVerifyCode:"No verify code",
adminName:"Admin Name",oldPassword:"Old Password",newPassword:"New Password",confirmPassword:"Confirm Password",oldPasswordWrong:"Old password is incorrect",passwordMismatch:"Passwords do not match",passwordTooShort:"Password must be at least 4 characters",
examStartMode:"Exam Start Time",startModeUnlimited:"Unlimited",startModeNow:"Immediately",startModeCustom:"Custom time",examDuration:"Exam Duration",examDurationUnlimited:"Unlimited",minutes:"min",totalScore:"Total Score",examQuestionCount:"Total Question Cap",examQuestionCountHint:"0 = no cap",uidLength:"UID Length",uidLength9:"9 digits (no verify code)",uidLength18:"18 digits (no verify code)",uidLength32:"32 digits (with verify code)",
allowGuest:"Allow guest access",disableCustom:"Disable custom settings",requireAll:"Require all answers",showAnswer:"Show answers after submit",randomQuestions:"Randomize within each section",randomOptions:"Randomize option order",enableAudio:"Enable Audio Exam",allowStudentExport:"Allow candidate to export result",
subject:"Subject",subjectPlaceholder:"e.g., Chinese, Mathematics, English",
noticeTitle:"Candidate Notice",noticePlaceholder:"Enter notice text for candidates",noticePreset:"Load Preset",
noticePresetDefault:"1. Please enter the exam room on time.\n2. No cheating of any kind.\n3. Mobile phones and other electronic devices must be turned off and placed in designated areas.\n4. Keep quiet during the exam.\n5. Do not take screenshots, photos, or recordings during the exam.\n6. Submit your answers before the time is up.\n7. For online exams: ensure a stable internet connection before starting.\n8. For online exams: do not switch windows or applications.\n9. For online exams: the exam duration is strictly enforced.\n10. If you encounter technical issues, contact the invigilator immediately.",
audioTestText:"Custom Audio Test Text",audioTestTextHint:"Leave empty to use the default per-language content",audioTestContent:"This is an apple. I like apples. Apples are good for our health.",
adminSettingsSaved:"Admin settings saved",passwordChanged:"Password changed",timeUp:"Time is up",scoreLabel:"Score",yourAnswer:"Your answer: {0}",correctAnswer:"Correct: {0}",notAnswered:"Not answered",mustAnswerAll:"Please answer all questions",
warningRightClick:"Right click is disabled",warningDevtools:"Developer tools are disabled",warningSource:"Viewing source is disabled",
switchUserConfirm:"Switch to User?",switchUserConfirmMsg:"You will lose admin privileges until you log in again.",switchUserOk:"Switch",switchUserCancel:"Stay",
cancelConfirm:"This action will not save any changes. Only clicking Complete will save. Continue?",cancelConfirmTitle:"Discard changes?",
exitQuiz:"Exit Exam",exitQuizConfirm:"Exit the exam? Progress will not be saved.",
examNotStarted:"Exam has not started yet",examEnded:"This exam has ended. Please wait for the next session.",examEndedTitle:"Exam Session Ended",examEndedDesc:"The scheduled exam time for this exam data has already ended. You cannot start a new exam with this file. Please import a new exam file to continue.",importNewExam:"Import New Exam",examReady:"Exam is ready",waitingExamDesc:"Waiting for exam start time",cancelWaiting:"Cancel",
startExam:"Start Exam",loginName:"Name",
fullscreenTitle:"Fullscreen Required",fullscreenDesc:"Press F11 to enter fullscreen, or click the button below. You will be logged out in {0} seconds if not in fullscreen.",enterFullscreen:"Enter Fullscreen",cancelFullscreen:"Cancel",fullscreenTimeout:"You did not enter fullscreen in time",fullscreenExitWarning:"Please stay in fullscreen during the exam",
noData:"Please import data first",disabledByAdmin:"This setting is managed by admin",uidDuplicate:"UID conflict, please try again",
basicSettings:"Basic",examSettings:"Exam Configuration",uidSettings:"UID Configuration",noticeSettings:"Candidate Notice",audioSettings:"Audio Test",featureSettings:"Features",
adminNameHint:"Displayed in the admin panel",passwordHint:"At least 4 characters",totalScoreInvalid:"Total score must be greater than 0",
uidVerifyWarn:"Verify code regenerated for some candidates",uidChangedWarn:"UID format changed, all candidate UIDs have been regenerated",uidChangedConfirm:"Changing UID length will regenerate all candidate UIDs and verify codes. Continue?",
candidateInfoTitle:"Candidate Information",candidateInfoDesc:"Please verify your information before starting the exam.",audioTestTitle:"Audio Test",audioTestDesc:"Please play the audio and confirm you can hear it clearly.",audioTestPlay:"Play Audio",audioTestConfirm:"I can hear clearly",startAfterConfirm:"Start Exam",noticeTitleDisplay:"Candidate Notice",noticeConfirm:"I have read the notice",
examSubject:"Subject",examTime:"Exam Time",examDurationLabel:"Duration",newDataCreated:"New data table created",noQuestionsWarning:"Please add questions before starting the exam",unknown:"Unknown",continueBtn:"Continue",playbackNotSupported:"Your browser does not support audio playback",noPermission:"You do not have permission to perform this action",
guestName:"Guest",examTimeEnded:"This exam has ended. Please wait for the next session.",examNotStartedYet:"The exam has not started yet. Please wait.",timeRemaining:"Time remaining",
dirtyBadge:"Unsaved changes",unsavedWarning:"You have unsaved changes.",unsavedConfirmTitle:"Unsaved Changes",unsavedConfirmDesc:"You have unsaved changes. Are you sure you want to continue? Your changes will be lost.",unsavedOk:"Continue Anyway",unsavedCancel:"Cancel",
exportPrompt:"Export Data",exportPromptDesc:"Please export your data to keep it.",
fillAnswer:"Your Answer",fillAnswerHint:"The correct answer (whitespace trimmed, case-insensitive)",fillPlaceholder:"Type your answer...",fillAnswerRequired:"Answer is required",allTypes:"All",
examTitleLabel:"Exam Title",examSubtitleLabel:"Exam Subtitle",examTitlePlaceholder:"e.g., 2024 Spring Final Exam",examSubtitlePlaceholder:"e.g., Computer Science · Grade 12",
explanationLabel:"Explanation",toggleExplanation:"Include Explanation",explanationPlaceholder:"Explain the correct answer here...",
examInfoContinue:"Continue",showAnswerDisabled:"Answer details are hidden by the administrator",
addBlankBtn:"Add blank",blankHint:"{0} blank(s) added. Each blank will be rendered as an input.",blankHintEmpty:"No blanks yet. Click + to add a blank.",blankAnswerLabel:"Blank {0}",blankAnswerHint:"Enter the correct answer for this blank",blankAnswerRequired:"Answer for blank {0} is required",blankRequired:"Please add at least one blank in the question text",
dragToReorder:"Drag to reorder",
typeTabsHint:"Drag question type tabs to change their order. Exams will present questions grouped by this order.",
typeOrderHint:"Question order in the exam will follow the current tab order.",
typeQuotasSection:"Type Quotas",quotaSingle:"Single Choice Count",quotaMultiple:"Multiple Choice Count",quotaJudge:"True/False Count",quotaFill:"Fill-in Count",quotaHint:"0 = use all questions of this type",
readingQuestion:"Reading",shortAnswer:"Short Answer",essayQuestion:"Essay",
subjectivePlaceholder:"Type your answer here...",subjectiveAnswer:"Your answer: {0}",subjectiveNotGraded:"Not auto-graded. This answer will be reviewed manually.",subjectivePending:"{0} subjective question(s) are excluded from the score",subjectiveNoAnswer:"This question type is not auto-graded. No correct answer is required.",subjectiveTitleHint:"Enter the passage or question. Line breaks are preserved.",charCount:"{0} characters",
step3Subjective:"Step 3 · Confirm",
quotaReading:"Reading Count",quotaShort:"Short Answer Count",quotaEssay:"Essay Count",
audioDictation:"Listening dictation",audioDictationHint:"Require candidates to type the audio text before continuing",audioTranscriptLabel:"Type what you heard",audioTranscriptPlaceholder:"Type the audio text here...",audioCheckBtn:"Check",audioCheckCorrect:"Correct. You can continue.",audioCheckWrong:"Not quite. Listen again and try again.",audioDictationRequired:"Please type the audio text correctly to continue.",audioPlaying:"Playing...",subjectiveAnswerLabel:"Your Answer",
playAudioText:"Play Listening Text",audioTextLabel:"Listening Text (browser read-aloud)",audioTextHint:"Enter the listening text. It will be read aloud by browser speech synthesis; no audio link is required.",fullscreenExitLogout:"You exited fullscreen. The exam has been ended.",
startTimeRequired:"Please set a custom start time"
},
zh:{
headerTitle:"考试系统",userSectionLabel:"用户",userRoleStudent:"考生",userRoleAdmin:"管理员",adminSectionLabel:"管理",settingsLabel:"设置",themeLabel:"主题",themeDark:"深色",themeLight:"浅色",languageLabel:"语言",
importTitle:"考试系统",importDesc:"导入数据文件或新建数据表开始使用。",importBtn:"导入",newDataBtn:"新建数据表",reImportBtn:"重新导入",
importSuccess:"导入成功",importFail:"导入失败",exportSuccess:"导出成功",exportFail:"导出失败",imageExported:"成绩图片已导出",imageExportFail:"成绩图片导出失败",studentExported:"成绩已导出",studentExportFail:"成绩导出失败",
clearDataBtn:"清空",clearDataConfirmTitle:"清空所有数据？",clearDataConfirm:"此操作将删除所有已导入的题目、考生和设置，且无法撤销。是否继续？",clearDataDone:"数据已清空",cannotClearInExam:"考试进行中无法清空数据",cannotSwitchDuringExam:"考试进行中无法切换用户",
statQuestionsLabel:"题目",statUsersLabel:"考生",statScoreLabel:"总分",statDurationLabel:"时长",
actQuestionsTitle:"题目",actQuestionsDesc:"管理题库",actUsersTitle:"考生",actUsersDesc:"管理考生账号",actSettingsTitle:"设置",actSettingsDesc:"考试配置",actExportTitle:"导出",actExportDesc:"保存配置文件",
userWelcomeTitle:"准备好考试了吗？",userWelcomeDesc:"输入姓名和 UID / 验证码即可开始。",startQuiz:"开始考试",guestQuiz:"免登录体验",submit:"提交",back:"返回",exportImage:"导出图片",exportStudent:"导出我的成绩",loginNewAccount:"使用新账户登录",continueWithAccount:"继续使用该账户",backToHome:"返回主页",
progress:"{0} / {1}",progressCorrect:"答对 {0} / {1} 题",adminPasswordPrompt:"请输入管理员密码",adminPasswordWrong:"密码错误",
setQuestions:"试卷管理",setUsers:"考生管理",adminSettings:"管理员设置",changePassword:"修改密码",addQuestion:"添加题目",addUser:"添加考生",
noQuestions:"暂无题目",noUsers:"暂无考生",delete:"删除",selectAll:"全选",deselectAll:"全不选",deleteSelected:"删除选中",selectedCount:"已选 {0} 项",
complete:"完成",cancel:"取消",back_btn:"上一步",next:"下一步",confirm:"确定",close:"关闭",
questionDeleted:"题目已删除",userDeleted:"考生已删除",deleteSuccess:"删除成功",deleteSelectedSuccess:"已删除 {0} 项",
step1:"第 1 步 · 题目信息",step2:"第 2 步 · 选项内容",step3:"第 3 步 · 正确答案",step3Fill:"第 3 步 · 空的答案",questionText:"题目内容",questionType:"题目类型",singleChoice:"单选题",multipleChoice:"多选题",judgeQuestion:"判断题",fillQuestion:"填空题",trueLabel:"✓",falseLabel:"✗",addImage:"添加图片",addAudio:"添加音频",toggleImage:"包含图片",toggleAudio:"包含音频",audioHint:"粘贴音频 URL（mp3 / wav / ogg）",questionImageHint:"粘贴图片 URL 或 SVG 代码",optionCount:"选项数量",correctOption:"正确选项",correctOptions:"正确选项（可多选）",optionPlaceholder:"选项 {0}",
titleRequired:"题目内容不能为空",optionRequired:"选项 {0} 不能为空",questionAdded:"题目已添加",deleteConfirm:"确定要删除此项吗？",deleteSelectedConfirm:"确定要删除选中的 {0} 项吗？",
userName:"姓名",gender:"性别",male:"男",female:"女",other:"其他",userAdded:"考生已添加",nameRequired:"姓名不能为空",enterName:"请输入你的姓名",enterCred:"请输入 UID 或验证码",loginCredLabel:"UID / 验证码",invalidCred:"UID 或验证码错误",userNotRegistered:"该姓名未注册",uid:"UID",verifyCode:"验证码",noVerifyCode:"无需验证码",
adminName:"管理员名称",oldPassword:"旧密码",newPassword:"新密码",confirmPassword:"确认密码",oldPasswordWrong:"旧密码不正确",passwordMismatch:"两次密码不一致",passwordTooShort:"密码至少 4 位",
examStartMode:"考试开始时间",startModeUnlimited:"不限制",startModeNow:"立即开始",startModeCustom:"自定义时间",examDuration:"考试时长",examDurationUnlimited:"不限时",minutes:"分钟",totalScore:"总分",examQuestionCount:"总题数上限",examQuestionCountHint:"0 = 不限制",uidLength:"UID 长度",uidLength9:"9 位（无需验证码）",uidLength18:"18 位（无需验证码）",uidLength32:"32 位（需验证码）",
allowGuest:"允许体验操作",disableCustom:"禁用自定义设置",requireAll:"要求完成答题",showAnswer:"结束后显示错题与正确选项",randomQuestions:"每个大题内随机",randomOptions:"选项随机",enableAudio:"启用音频考试",allowStudentExport:"允许考生导出成绩",
subject:"科目",subjectPlaceholder:"例如：语文、数学、英语",
noticeTitle:"考生须知",noticePlaceholder:"输入考生须知内容",noticePreset:"加载预设",
noticePresetDefault:"1. 请准时进入考场。\n2. 禁止任何形式的作弊。\n3. 手机等电子设备必须关闭并放置在指定区域。\n4. 考试期间保持安静。\n5. 考试期间禁止截屏、拍照、录屏等行为。\n6. 请在规定时间内提交答案。\n7. 线上考试：请在开始前确保网络连接稳定。\n8. 线上考试：考试期间不得切换窗口或应用程序。\n9. 线上考试：考试时长严格执行。\n10. 如遇技术问题，请立即联系监考人员。",
audioTestText:"自定义音频测试内容",audioTestTextHint:"留空则使用对应语言的默认内容",audioTestContent:"生活就像海洋，只有意志坚强的人，才能到达彼岸。",
adminSettingsSaved:"管理员设置已保存",passwordChanged:"密码已修改",timeUp:"时间到",scoreLabel:"得分",yourAnswer:"你的答案：{0}",correctAnswer:"正确答案：{0}",notAnswered:"未作答",mustAnswerAll:"请完成所有题目",
warningRightClick:"右键已被禁用",warningDevtools:"开发者工具已被禁用",warningSource:"查看源代码已被禁用",
switchUserConfirm:"切换到用户？",switchUserConfirmMsg:"切换后将失去管理员权限，需要重新输入密码才能切回。",switchUserOk:"切换",switchUserCancel:"留在当前",
cancelConfirm:"该操作不会保存任何更改，只有点击「完成」才会保存。是否继续？",cancelConfirmTitle:"放弃修改？",
exitQuiz:"退出考试",exitQuizConfirm:"确定要退出考试吗？答题进度将不会保存。",
examNotStarted:"考试尚未开始",examEnded:"本场考试已结束，请等待下一场考试。",examEndedTitle:"本场考试已结束",examEndedDesc:"该试卷的考试时间已结束，无法使用此文件开始新的考试。请导入新的试卷文件以继续使用。",importNewExam:"导入新试卷",examReady:"试卷已准备完成",waitingExamDesc:"正在等待考试时间开始",cancelWaiting:"取消",
startExam:"开始考试",loginName:"姓名",
fullscreenTitle:"需要全屏模式",fullscreenDesc:"请按 F11 进入全屏，或点击下方按钮。若 {0} 秒内未进入全屏将自动退出登录。",enterFullscreen:"进入全屏",cancelFullscreen:"取消",fullscreenTimeout:"未在规定时间内进入全屏",fullscreenExitWarning:"考试期间请保持全屏",
noData:"请先导入数据",disabledByAdmin:"此项设置由管理员控制",uidDuplicate:"UID 冲突，请重试",
basicSettings:"基本信息",examSettings:"考试配置",uidSettings:"UID 配置",noticeSettings:"考生须知",audioSettings:"音频测试",featureSettings:"功能",
adminNameHint:"显示在管理面板中",passwordHint:"至少 4 位",totalScoreInvalid:"总分必须大于 0",
uidVerifyWarn:"部分考生的验证码已重新生成",uidChangedWarn:"UID 格式已更改，所有考生的 UID 已重新生成",uidChangedConfirm:"更改 UID 长度将重新生成所有考生的 UID 和验证码。是否继续？",
candidateInfoTitle:"考生信息",candidateInfoDesc:"请在开始考试前核对您的信息。",audioTestTitle:"音频测试",audioTestDesc:"请播放音频并确认能清晰听到。",audioTestPlay:"播放音频",audioTestConfirm:"我能听清",startAfterConfirm:"开始考试",noticeTitleDisplay:"考生须知",noticeConfirm:"我已阅读考生须知",
examSubject:"科目",examTime:"考试时间",examDurationLabel:"时长",newDataCreated:"新数据表已创建",noQuestionsWarning:"请先添加题目再开始考试",unknown:"未知",continueBtn:"继续",playbackNotSupported:"您的浏览器不支持音频播放",noPermission:"您没有权限执行此操作",
guestName:"体验用户",examTimeEnded:"本场考试已结束，请等待下一场考试。",examNotStartedYet:"考试尚未开始，请稍候。",timeRemaining:"剩余时间",
dirtyBadge:"未保存",unsavedWarning:"您有未保存的更改。",unsavedConfirmTitle:"未保存的更改",unsavedConfirmDesc:"您有未保存的更改，确定要继续吗？更改将丢失。",unsavedOk:"仍要继续",unsavedCancel:"取消",
exportPrompt:"导出数据",exportPromptDesc:"请导出数据以保存。",
fillAnswer:"你的答案",fillAnswerHint:"正确答案（忽略首尾空白和大小写）",fillPlaceholder:"请输入答案...",fillAnswerRequired:"答案不能为空",allTypes:"全部",
examTitleLabel:"试卷主标题",examSubtitleLabel:"试卷副标题",examTitlePlaceholder:"例如：2024 春季期末考试",examSubtitlePlaceholder:"例如：计算机科学 · 高三",
explanationLabel:"题目解析",toggleExplanation:"包含解析",explanationPlaceholder:"在此处填写题目解析...",
examInfoContinue:"开始",showAnswerDisabled:"答案详情已由管理员隐藏",
addBlankBtn:"添加空",blankHint:"已添加 {0} 个空，每个空会渲染为一个输入框。",blankHintEmpty:"还没有空，点击 + 号添加空。",blankAnswerLabel:"空 {0}",blankAnswerHint:"请输入这个空的正确答案",blankAnswerRequired:"第 {0} 个空的答案不能为空",blankRequired:"请先在题目内容中添加至少一个空",
dragToReorder:"拖动排序",
typeTabsHint:"拖动题型标签可调整大题出场顺序，考试将按此顺序出题。",
typeOrderHint:"考试题目将按当前标签顺序分组呈现。",
typeQuotasSection:"题型配额",quotaSingle:"单选题数",quotaMultiple:"多选题数",quotaJudge:"判断题数",quotaFill:"填空题数",quotaHint:"0 = 该类型全部出题",
readingQuestion:"阅读题",shortAnswer:"自答题",essayQuestion:"作文题",
subjectivePlaceholder:"请在此作答...",subjectiveAnswer:"你的答案：{0}",subjectiveNotGraded:"本题不自动评分，答案将提交人工审阅。",subjectivePending:"{0} 道主观题不计入分数",subjectiveNoAnswer:"此类题目不自动评分，无需设置正确答案。",subjectiveTitleHint:"请输入阅读材料或题目内容，支持换行。",charCount:"{0} 字",
step3Subjective:"第 3 步 · 确认",
quotaReading:"阅读题数",quotaShort:"自答题数",quotaEssay:"作文题数",
audioDictation:"听力听写",audioDictationHint:"要求考生在继续前输入音频文本",audioTranscriptLabel:"请输入你听到的内容",audioTranscriptPlaceholder:"在此输入音频文本...",audioCheckBtn:"核对",audioCheckCorrect:"正确，可以继续。",audioCheckWrong:"不太对，请重新播放后再试一次。",audioDictationRequired:"请输入正确的音频文本后继续。",audioPlaying:"播放中...",subjectiveAnswerLabel:"你的答案",
playAudioText:"播放听力文本",audioTextLabel:"听力文本（浏览器朗读）",audioTextHint:"输入要朗读的听力文本，播放时由浏览器语音合成朗读，无需音频链接。",fullscreenExitLogout:"您已退出全屏，考试已结束。",
startTimeRequired:"请设置自定义开始时间"
}
};

const UID_LENGTH_OPTIONS=[9,18,32];
const VERIFY_LENGTH=9;
const FULLSCREEN_TIMEOUT=30;
const SUPPORTED_LANGS=["en","zh"];
const AUDIO_CONFIRMED_KEY="audioConfirmedUsers";
const QUESTION_TYPES=["single","multiple","judge","fill","reading","short","essay"];
const SUBJECTIVE_TYPES=["reading","short","essay"];
const BLANK_PLACEHOLDER="___";
const DEFAULT_SETTINGS={allowGuest:true,disableCustom:false,theme:"dark",language:"en",examStartTime:"",examDuration:60,totalScore:100,examQuestionCount:0,uidLength:18,requireAll:false,showAnswer:true,randomQuestions:false,randomOptions:false,enableAudio:false,audioDictation:true,allowStudentExport:false,subject:"",noticeText:"",audioTestText:"",examTitle:"",examSubtitle:"",typeOrder:["single","multiple","judge","fill","reading","short","essay"],typeQuotas:{single:0,multiple:0,judge:0,fill:0,reading:0,short:0,essay:0}};

const state={
  currentLang:"en",
  currentTheme:"dark",
  currentUser:"user",
  modalClosable:true,
  dirty:false,
  qFilter:"all",
  dragSrcId:null,
  dragSrcType:null,
  appData:{
    admin:{name:"Administrator",password:"password"},
    settings:Object.assign({},DEFAULT_SETTINGS),
    questions:[],
    users:[]
  },
  quiz:{
    active:false,
    currentIndex:0,
    answers:[],
    questions:[],
    timerInterval:null,
    waitInterval:null,
    currentUserInfo:null,
    pendingAdvance:null,
    lastResult:null,
    audioConfirmedUsers:new Set()
  },
  wizard:{step:1,type:"single",image:"",audio:"",title:"",optionCount:4,options:["","","",""],correct:[0],includeImage:false,includeAudio:false,includeExplanation:false,explanation:"",blankAnswers:[]},
  selection:{questions:new Set(),users:new Set()},
  fullscreen:{interval:null,countdown:0,active:false,onSuccess:null},
  lastWarn:0,
  toastTimer:null
};

const $=(id)=>document.getElementById(id);
let speechToken=0;
let currentUtterance=null;

function esc(s){
  if(s===null||s===undefined)return "";
  let str=String(s);
  str=str.split("&").join("&amp;");
  str=str.split("<").join("&lt;");
  str=str.split(">").join("&gt;");
  str=str.split('"').join("&quot;");
  str=str.split("'").join("&#39;");
  return str;
}

function isSubjectiveType(type){return SUBJECTIVE_TYPES.indexOf(type)>=0;}

function typeLabel(type){
  if(type==="single")return t("singleChoice");
  if(type==="multiple")return t("multipleChoice");
  if(type==="judge")return t("judgeQuestion");
  if(type==="fill")return t("fillQuestion");
  if(type==="reading")return t("readingQuestion");
  if(type==="short")return t("shortAnswer");
  if(type==="essay")return t("essayQuestion");
  return t("singleChoice");
}

function countBlanks(text){
  if(!text)return 0;
  const matches=String(text).match(new RegExp(BLANK_PLACEHOLDER,"g"));
  return matches?matches.length:0;
}

function normalizeTypeOrder(order){
  const valid=Array.isArray(order)?order.filter((x)=>QUESTION_TYPES.indexOf(x)>=0):[];
  QUESTION_TYPES.forEach((tp)=>{if(valid.indexOf(tp)<0)valid.push(tp);});
  return valid;
}

function getTypeOrder(){return normalizeTypeOrder(state.appData.settings.typeOrder);}

function makeTransparentDragCanvas(){
  try{
    const c=document.createElement("canvas");
    c.width=1;
    c.height=1;
    return c;
  }catch(e){return null;}
}

const TRANSPARENT_DRAG_CANVAS=makeTransparentDragCanvas();

function loadAudioConfirmedUsers(){try{return new Set(JSON.parse(localStorage.getItem(AUDIO_CONFIRMED_KEY)||"[]"));}catch(e){return new Set();}}
function saveAudioConfirmedUsers(){try{localStorage.setItem(AUDIO_CONFIRMED_KEY,JSON.stringify([...state.quiz.audioConfirmedUsers]));}catch(e){}}
function markDirty(){state.dirty=true;refreshDirtyBadge();}
function markClean(){state.dirty=false;refreshDirtyBadge();}
function refreshDirtyBadge(){const b=$("dirtyBadge");if(!b)return;b.style.display=state.dirty?"inline-flex":"none";const span=$("dirtyText");if(span)span.textContent=t("dirtyBadge");}
function normalizeLang(code){return SUPPORTED_LANGS.indexOf(code)>=0?code:"en";}
function t(key,...args){const dict=I18N[state.currentLang]||I18N.en;let str=dict[key]||I18N.en[key]||key;args.forEach((arg,i)=>{str=str.split("{"+i+"}").join(String(arg));});return str;}
function showToast(msg,type){const el=$("toast");el.textContent=msg;el.classList.remove("warn","success");if(type==="warn")el.classList.add("warn");else if(type==="success")el.classList.add("success");el.classList.add("show");clearTimeout(state.toastTimer);state.toastTimer=setTimeout(()=>el.classList.remove("show"),2200);}
function warnThrottled(msg){const now=Date.now();if(now-state.lastWarn<1500)return;state.lastWarn=now;showToast(msg,"warn");}
function applyTheme(){document.body.classList.toggle("light",state.currentTheme==="light");}
function formatLocalDateTime(date){const pad=(n)=>String(n).padStart(2,"0");return date.getFullYear()+"-"+pad(date.getMonth()+1)+"-"+pad(date.getDate())+"T"+pad(date.getHours())+":"+pad(date.getMinutes());}
function normalizeDateTime(s){if(!s)return "";if(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(s))return s.slice(0,16);const d=new Date(s);if(isNaN(d))return "";return formatLocalDateTime(d);}
function setCustomSelect(id,value){const el=$(id);if(!el)return;el.dataset.value=value;const label=el.querySelector(".custom-select-label");const opt=el.querySelector('.custom-select-option[data-value="'+value+'"]');if(label&&opt)label.textContent=opt.textContent;el.querySelectorAll(".custom-select-option").forEach((o)=>{o.classList.toggle("selected",o.dataset.value===value);});}
function refreshThemeLabels(){const el=$("themeSelect");if(!el)return;const opts=el.querySelectorAll(".custom-select-option");if(opts[0])opts[0].textContent=t("themeDark");if(opts[1])opts[1].textContent=t("themeLight");setCustomSelect("themeSelect",state.currentTheme);}
function initCustomSelects(){document.querySelectorAll(".custom-select").forEach((sel)=>{const btn=sel.querySelector(".custom-select-btn");if(btn){btn.onclick=(e)=>{e.stopPropagation();document.querySelectorAll(".custom-select").forEach((s)=>{if(s!==sel)s.classList.remove("open");});sel.classList.toggle("open");};}sel.querySelectorAll(".custom-select-option").forEach((opt)=>{opt.onclick=(e)=>{e.stopPropagation();sel.classList.remove("open");const val=opt.dataset.value;setCustomSelect(sel.id,val);if(sel.id==="themeSelect"){if(state.currentUser!=="admin"&&state.appData.settings.disableCustom){setCustomSelect("themeSelect",state.currentTheme);showToast(t("disabledByAdmin"),"warn");return;}state.currentTheme=val;state.appData.settings.theme=val;applyTheme();markDirty();}else if(sel.id==="languageSelect"){if(state.currentUser!=="admin"&&state.appData.settings.disableCustom){setCustomSelect("languageSelect",state.currentLang);showToast(t("disabledByAdmin"),"warn");return;}state.currentLang=normalizeLang(val);state.appData.settings.language=state.currentLang;applyLang();}};});});document.addEventListener("click",()=>{document.querySelectorAll(".custom-select").forEach((s)=>s.classList.remove("open"));});}

function applyLang(){
  state.currentLang=normalizeLang(state.currentLang);
  document.documentElement.lang=state.currentLang==="zh"?"zh-CN":"en";
  const adminNameEl=$("adminNameDisplay");
  if(adminNameEl)adminNameEl.textContent=state.appData.admin.name||"Administrator";
  document.title=t("headerTitle");
  const map={headerTitle:"headerTitle",userSectionLabel:"userSectionLabel",userRoleDisplay:"userRoleStudent",adminRoleDisplay:"userRoleAdmin",adminSectionLabel:"adminSectionLabel",settingsLabel:"settingsLabel",themeLabel:"themeLabel",languageLabel:"languageLabel",importTitle:"importTitle",importDesc:"importDesc",importBtnLabel:"importBtn",btnNewData:"newDataBtn",btnReImport:"reImportBtn",btnAdminImport:"importBtn",btnClearData:"clearDataBtn",statQuestionsLabel:"statQuestionsLabel",statUsersLabel:"statUsersLabel",statScoreLabel:"statScoreLabel",statDurationLabel:"statDurationLabel",actQuestionsTitle:"actQuestionsTitle",actQuestionsDesc:"actQuestionsDesc",actUsersTitle:"actUsersTitle",actUsersDesc:"actUsersDesc",actSettingsTitle:"actSettingsTitle",actSettingsDesc:"actSettingsDesc",actExportTitle:"actExportTitle",actExportDesc:"actExportDesc",userWelcomeTitle:"userWelcomeTitle",userWelcomeDesc:"userWelcomeDesc",btnStartQuiz:"startQuiz",btnGuestQuiz:"guestQuiz",btnSubmit:"submit",btnExitQuiz:"exitQuiz",waitingTitle:"examReady",waitingDesc:"waitingExamDesc",btnCancelWaiting:"cancelWaiting",fullscreenTitle:"fullscreenTitle",btnEnterFullscreen:"enterFullscreen",btnCancelFullscreen:"cancelFullscreen"};
  Object.entries(map).forEach(([id,key])=>{const el=$(id);if(el)el.textContent=t(key);});
  refreshThemeLabels();
  setCustomSelect("languageSelect",state.currentLang);
  updateRoleUI();
  updateStats();
  refreshDirtyBadge();
  if(state.quiz.active)updateQuizUI();
}
function toNum(v,def){const n=parseInt(v);return isNaN(n)?def:n;}
function updateStats(){$("statQuestions").textContent=state.appData.questions.length;$("statUsers").textContent=state.appData.users.length;$("statScore").textContent=state.appData.settings.totalScore;const dur=state.appData.settings.examDuration;$("statDuration").textContent=dur>0?dur+" "+t("minutes"):t("examDurationUnlimited");}
function updateRoleUI(){const isAdmin=state.currentUser==="admin";$("userCard").classList.toggle("active",!isAdmin);$("adminCard").classList.toggle("active",isAdmin);const canCustom=isAdmin||!state.appData.settings.disableCustom;$("themeSelect").classList.toggle("disabled",!canCustom);$("languageSelect").classList.toggle("disabled",!canCustom);$("adminActions").style.display=isAdmin?"flex":"none";const newBtn=$("btnNewData");if(newBtn)newBtn.style.display=isAdmin?"inline-flex":"none";const reImportBtn=$("btnReImport");if(reImportBtn)reImportBtn.style.display=isAdmin?"none":"inline-flex";if(!state.quiz.active&&!$("resultArea").classList.contains("active")){if(isAdmin){$("adminView").style.display="flex";$("userView").style.display="none";$("quizArea").classList.remove("active");}else{$("adminView").style.display="none";$("userView").style.display="flex";$("quizArea").classList.remove("active");}}const guestBtn=$("btnGuestQuiz");if(guestBtn)guestBtn.style.display=(state.appData.settings.allowGuest&&!isAdmin)?"inline-flex":"none";}
function openModal(html,closable){state.modalClosable=closable!==false;$("modalContent").innerHTML=html;$("modalOverlay").classList.add("open");}
function closeModal(){stopAllMedia();state.modalClosable=true;$("modalOverlay").classList.remove("open");$("modalContent").innerHTML="";}
function confirmDialog(title,message,okText,cancelText,onOk){
  const overlay=$("confirmOverlay");
  const content=$("confirmContent");
  content.innerHTML='<h2>'+esc(title)+'</h2><p style="font-size:14px;color:var(--text-2);line-height:1.6">'+esc(message)+'</p><div class="modal-actions"><button class="btn btn-secondary" id="cfCancel">'+esc(cancelText)+'</button><button class="btn btn-primary" id="cfOk">'+esc(okText)+'</button></div>';
  overlay.classList.add("open");
  $("cfCancel").onclick=()=>{overlay.classList.remove("open");};
  $("cfOk").onclick=()=>{overlay.classList.remove("open");onOk();};
}
function passwordPrompt(onSuccess){openModal('<h2>'+t("adminPasswordPrompt")+'</h2><div class="form-group"><input id="pwdInput" type="password" autocomplete="current-password"></div><div class="modal-actions"><button class="btn btn-secondary" id="pwdCancel">'+t("cancel")+'</button><button class="btn btn-primary" id="pwdOk">'+t("confirm")+'</button></div>',false);const input=$("pwdInput");setTimeout(()=>input.focus(),50);const check=()=>{if(input.value===state.appData.admin.password){closeModal();onSuccess();}else{showToast(t("adminPasswordWrong"),"warn");input.value="";input.focus();}};$("pwdOk").onclick=check;$("pwdCancel").onclick=closeModal;input.addEventListener("keydown",(e)=>{if(e.key==="Enter")check();});}
function generateUID(seq,gender,length){const g=gender==="male"?"1":gender==="female"?"2":"0";if(length===9){const seqStr3=String(seq).padStart(3,"0");return seqStr3+g+String(Math.floor(Math.random()*100000)).padStart(5,"0");}const seqStr=String(seq).padStart(4,"0");const ts=String(Date.now()).padStart(13,"0");if(length===18)return seqStr+g+ts;let random="";for(let i=0;i<5;i++)random+=Math.floor(Math.random()*10);const base=seqStr+g+ts+random;let h=0;for(let i=0;i<base.length;i++)h=(h*31+base.charCodeAt(i))>>>0;const check=String(h).padStart(VERIFY_LENGTH,"0").slice(-VERIFY_LENGTH);return base+check;}
function needsVerifyCode(uid){return uid&&uid.length===32;}
function generateVerifyCode(uid){let h=0;for(let i=0;i<uid.length;i++)h=(h*33+uid.charCodeAt(i))>>>0;return String(h).padStart(VERIFY_LENGTH,"0").slice(-VERIFY_LENGTH);}
function shuffle(arr){for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));const tmp=arr[i];arr[i]=arr[j];arr[j]=tmp;}return arr;}
function newId(){return Date.now().toString(36)+Math.random().toString(36).slice(2,8)+Math.random().toString(36).slice(2,4);}

function normalizeQuestion(q){
  let type=q.type;
  if(QUESTION_TYPES.indexOf(type)<0){
    type=Array.isArray(q.correct)?"multiple":"single";
  }
  let correct;
  if(isSubjectiveType(type)){
    correct=null;
  }else if(type==="fill"){
    if(Array.isArray(q.correct)){
      correct=q.correct.map((x)=>String(x==null?"":x).trim());
    }else{
      correct=[String(q.correct==null?"":q.correct).trim()];
    }
    if(correct.length===0)correct=[""];
  }else if(type==="multiple"){
    const arr=Array.isArray(q.correct)?q.correct:[q.correct];
    correct=arr.map(Number).filter((n)=>!isNaN(n)).sort((a,b)=>a-b);
    if(correct.length===0)correct=[0];
  }else{
    const n=Number(q.correct);
    correct=isNaN(n)?0:n;
  }
  return {_id:q._id||newId(),title:q.title||"",image:q.image||"",audio:q.audio||"",audioText:q.audioText||"",options:Array.isArray(q.options)?q.options.slice():[],type,correct,explanation:q.explanation||""};
}

function getQuestions(){return state.appData.questions;}
function getUsers(){return state.appData.users;}
function getExamStartTime(){const s=state.appData.settings.examStartTime;if(!s)return null;const time=new Date(s).getTime();return isNaN(time)?null:time;}
function getExamEndTime(){const start=getExamStartTime();if(start===null)return null;const dur=state.appData.settings.examDuration;if(!dur||dur<=0)return null;return start+dur*60*1000;}
function checkExamTimeWindow(){const startTime=getExamStartTime();if(startTime===null)return{ok:true};const endTime=getExamEndTime();const now=Date.now();if(now<startTime)return{ok:false,reason:"notStarted",startTime};if(endTime!==null&&now>endTime)return{ok:false,reason:"ended",endTime};return{ok:true};}
function verifyImportedUsers(users){let regenCount=0;users.forEach((u)=>{if(needsVerifyCode(u.uid)){const expected=generateVerifyCode(u.uid);if(!u.verifyCode||u.verifyCode!==expected){u.verifyCode=expected;regenCount++;}}});return regenCount;}

function isAnswerCorrect(userAns,correct,type){
  if(isSubjectiveType(type))return false;
  if(type==="fill"){
    const cArr=Array.isArray(correct)?correct:[String(correct==null?"":correct)];
    const uArr=Array.isArray(userAns)?userAns:[String(userAns==null?"":userAns)];
    if(uArr.length!==cArr.length)return false;
    for(let i=0;i<cArr.length;i++){
      const c=String(cArr[i]==null?"":cArr[i]).trim().toLowerCase();
      const u=String(uArr[i]==null?"":uArr[i]).trim().toLowerCase();
      if(c.length===0)return false;
      if(u!==c)return false;
    }
    return true;
  }
  if(type==="multiple"){
    const cArr=Array.isArray(correct)?correct:[correct];
    if(!Array.isArray(userAns))return false;
    if(userAns.length!==cArr.length)return false;
    const s=[...userAns].map(Number).sort((a,b)=>a-b);
    const c=[...cArr].map(Number).sort((a,b)=>a-b);
    for(let i=0;i<s.length;i++){if(s[i]!==c[i])return false;}
    return true;
  }
  if(userAns===null||userAns===undefined)return false;
  return Number(userAns)===Number(correct);
}

function formatAnswer(correct,type){
  if(isSubjectiveType(type))return String(correct==null?"":correct);
  if(type==="fill"){
    const arr=Array.isArray(correct)?correct:[correct];
    return arr.map((a)=>'"'+String(a==null?"":a)+'"').join(", ");
  }
  if(type==="judge"){
    if(correct===null||correct===undefined)return "-";
    return Number(correct)===0?t("trueLabel"):t("falseLabel");
  }
  if(Array.isArray(correct))return correct.map((i)=>String.fromCharCode(65+Number(i))).join(", ");
  return String.fromCharCode(65+Number(correct));
}

function exportData(){try{const data={admin:{name:state.appData.admin.name,password:state.appData.admin.password},settings:state.appData.settings,questions:state.appData.questions.map(({_id,...rest})=>rest),users:state.appData.users.map(({_id,...rest})=>rest)};const content="window.APP_DATA="+JSON.stringify(data,null,2)+";";const blob=new Blob([content],{type:"text/javascript"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="exam_data.js";document.body.appendChild(a);a.click();document.body.removeChild(a);setTimeout(()=>URL.revokeObjectURL(url),1000);markClean();showToast(t("exportSuccess"),"success");}catch(err){showToast(t("exportFail"),"warn");}}

function exportStudentResult(){
  try{
    const user=state.quiz.currentUserInfo;
    if(!user){showToast(t("studentExportFail"),"warn");return;}
    const qs=state.quiz.questions;
    const answers=state.quiz.answers;
    const showDetail=state.appData.settings.showAnswer;
    const details=qs.map((q,i)=>{
      const subjective=isSubjectiveType(q.type);
      const base={type:q.type,title:q.title,isCorrect:subjective?null:isAnswerCorrect(answers[i],q.correct,q.type)};
      if(subjective||showDetail){
        base.userAnswer=answers[i];
        if(!subjective&&showDetail)base.correct=q.correct;
        if(showDetail&&q.explanation)base.explanation=q.explanation;
      }
      if(subjective)base.subjective=true;
      return base;
    });
    const data={name:user.name,uid:user.uid,verifyCode:user.verifyCode||"",gender:user.gender,subject:state.appData.settings.subject,examTitle:state.appData.settings.examTitle,examSubtitle:state.appData.settings.examSubtitle,details:details};
    const content="window.STUDENT_RESULT="+JSON.stringify(data,null,2)+";";
    const blob=new Blob([content],{type:"text/javascript"});
    const url=URL.createObjectURL(blob);
    const a=document.createElement("a");
    a.href=url;
    a.download="student_result_"+user.name+".js";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(()=>URL.revokeObjectURL(url),1000);
    showToast(t("studentExported"),"success");
  }catch(err){showToast(t("studentExportFail"),"warn");}
}

function loadData(data){
  state.appData.admin=(data.admin&&typeof data.admin==="object")?{name:data.admin.name||"Administrator",password:data.admin.password||"password"}:{name:"Administrator",password:"password"};
  const merged=Object.assign({},DEFAULT_SETTINGS,data.settings||{});
  state.appData.settings=merged;
  state.appData.settings.totalScore=Math.max(1,toNum(merged.totalScore,100));
  state.appData.settings.examDuration=Math.max(0,toNum(merged.examDuration,0));
  state.appData.settings.examQuestionCount=Math.max(0,toNum(merged.examQuestionCount,0));
  state.appData.settings.uidLength=UID_LENGTH_OPTIONS.indexOf(toNum(merged.uidLength,18))>=0?toNum(merged.uidLength,18):18;
  state.appData.settings.examStartTime=normalizeDateTime(merged.examStartTime);
  state.appData.settings.language=normalizeLang(merged.language);
  state.appData.settings.examTitle=String(merged.examTitle||"");
  state.appData.settings.examSubtitle=String(merged.examSubtitle||"");
  state.appData.settings.typeOrder=normalizeTypeOrder(merged.typeOrder);
  state.appData.settings.typeQuotas={single:Math.max(0,toNum((merged.typeQuotas||{}).single,0)),multiple:Math.max(0,toNum((merged.typeQuotas||{}).multiple,0)),judge:Math.max(0,toNum((merged.typeQuotas||{}).judge,0)),fill:Math.max(0,toNum((merged.typeQuotas||{}).fill,0)),reading:Math.max(0,toNum((merged.typeQuotas||{}).reading,0)),short:Math.max(0,toNum((merged.typeQuotas||{}).short,0)),essay:Math.max(0,toNum((merged.typeQuotas||{}).essay,0))};
  state.appData.settings.audioDictation=merged.audioDictation!==false;
  state.appData.questions=Array.isArray(data.questions)?data.questions.filter((q)=>q&&(q.type==="fill"||q.type==="judge"||isSubjectiveType(q.type)||(Array.isArray(q.options)&&q.options.length>0))).map(normalizeQuestion):[];
  state.appData.users=Array.isArray(data.users)?data.users.filter((u)=>u&&u.uid).map((u)=>({_id:newId(),name:u.name||"",gender:u.gender||"other",uid:u.uid,verifyCode:u.verifyCode||""})):[];
  const regenCount=verifyImportedUsers(state.appData.users);
  state.currentTheme=state.appData.settings.theme||"dark";
  state.currentLang=normalizeLang(state.appData.settings.language||"en");
  state.quiz.active=false;
  state.quiz.answers=[];
  state.quiz.questions=[];
  state.quiz.currentUserInfo=null;
  state.quiz.pendingAdvance=null;
  state.quiz.lastResult=null;
  state.selection.questions.clear();
  state.selection.users.clear();
  state.qFilter="all";
  $("importCard").style.display="none";
  $("workspace").classList.add("active");
  $("quizArea").classList.remove("active");
  $("resultArea").classList.remove("active");
  applyTheme();
  applyLang();
  markClean();
  if(regenCount>0)showToast(t("uidVerifyWarn"),"warn");
  setTimeout(()=>{const end=getExamEndTime();if(end!==null&&Date.now()>end)showExpiredExamModal();},350);
}

function showExpiredExamModal(){openModal('<h2>'+t("examEndedTitle")+'</h2><p style="font-size:14px;color:var(--text-2);line-height:1.6">'+t("examEndedDesc")+'</p><div class="modal-actions"><button class="btn btn-secondary" id="expClose">'+t("close")+'</button><button class="btn btn-primary" id="expImport">'+t("importNewExam")+'</button></div>',false);$("expClose").onclick=()=>closeModal();$("expImport").onclick=()=>{closeModal();$("fileInput").click();};}
function importDataFromFile(file){if(!file)return;const reader=new FileReader();reader.onerror=()=>showToast(t("importFail"),"warn");reader.onload=(e)=>{try{const fn=new Function(e.target.result+"\nreturn (typeof window!=='undefined'&&window.APP_DATA)?window.APP_DATA:null;");const data=fn();if(!data||!Array.isArray(data.questions))throw new Error("invalid");loadData(data);showToast(t("importSuccess"),"success");}catch(err){showToast(t("importFail"),"warn");}};reader.readAsText(file);}
function createNewData(){if(state.currentUser!=="admin"){showToast(t("noPermission"),"warn");return;}const doCreate=()=>{loadData({admin:state.appData.admin,settings:state.appData.settings,questions:[],users:[]});showToast(t("newDataCreated"),"success");};if(state.dirty){confirmDialog(t("unsavedConfirmTitle"),t("unsavedConfirmDesc"),t("unsavedOk"),t("unsavedCancel"),doCreate);}else{doCreate();}}
function clearAllData(){if(state.currentUser!=="admin"){showToast(t("noPermission"),"warn");return;}if(state.quiz.active){showToast(t("cannotClearInExam"),"warn");return;}confirmDialog(t("clearDataConfirmTitle"),t("clearDataConfirm"),t("confirm"),t("cancel"),()=>{state.appData={admin:{name:"Administrator",password:"password"},settings:Object.assign({},DEFAULT_SETTINGS),questions:[],users:[]};state.currentTheme="dark";state.currentLang="en";state.currentUser="user";state.qFilter="all";state.quiz.active=false;state.quiz.answers=[];state.quiz.questions=[];state.quiz.currentUserInfo=null;state.quiz.pendingAdvance=null;state.quiz.lastResult=null;state.quiz.audioConfirmedUsers.clear();saveAudioConfirmedUsers();state.selection.questions.clear();state.selection.users.clear();$("importCard").style.display="block";$("workspace").classList.remove("active");$("quizArea").classList.remove("active");$("resultArea").classList.remove("active");applyTheme();applyLang();markClean();showToast(t("clearDataDone"),"success");});}

function sampleByGroup(groups,typeOrder,limit){
  const total=typeOrder.reduce((s,tp)=>s+(groups[tp]?groups[tp].length:0),0);
  if(total<=limit){
    let out=[];
    typeOrder.forEach((tp)=>{if(groups[tp])out=out.concat(groups[tp]);});
    return out;
  }
  const quotas={};
  let allocated=0;
  typeOrder.forEach((tp)=>{
    const cnt=groups[tp]?groups[tp].length:0;
    quotas[tp]=Math.floor(limit*cnt/total);
    allocated+=quotas[tp];
  });
  let remain=limit-allocated;
  while(remain>0){
    let picked=false;
    for(let i=0;i<typeOrder.length&&remain>0;i++){
      const tp=typeOrder[i];
      if(quotas[tp]<(groups[tp]?groups[tp].length:0)){quotas[tp]++;remain--;picked=true;}
    }
    if(!picked)break;
  }
  let out=[];
  typeOrder.forEach((tp)=>{
    if(groups[tp])out=out.concat(groups[tp].slice(0,quotas[tp]));
  });
  return out;
}

function buildSessionQuestions(){
  const typeOrder=getTypeOrder();
  const base=state.appData.questions.map((q)=>{
    const norm=normalizeQuestion(q);
    const correct=norm.type==="multiple"?[...norm.correct]:norm.type==="fill"?[...norm.correct]:norm.correct;
    return {_id:norm._id,title:norm.title,image:norm.image,audio:norm.audio,audioText:norm.audioText,options:norm.options.slice(),type:norm.type,correct,explanation:norm.explanation||""};
  });
  const groups={};
  typeOrder.forEach((tp)=>{groups[tp]=[];});
  base.forEach((q)=>{
    if(!groups[q.type])groups[q.type]=[];
    groups[q.type].push(q);
  });
  if(state.appData.settings.randomQuestions){
    typeOrder.forEach((tp)=>{groups[tp]=shuffle(groups[tp]);});
  }
  const quotas=state.appData.settings.typeQuotas||{};
  let qs=[];
  typeOrder.forEach((tp)=>{
    const list=groups[tp]||[];
    const quota=Math.max(0,toNum(quotas[tp],0));
    if(quota>0){
      qs=qs.concat(list.slice(0,quota));
    }else{
      qs=qs.concat(list);
    }
  });
  const limit=state.appData.settings.examQuestionCount;
  if(limit>0&&qs.length>limit)qs=qs.slice(0,limit);
  if(state.appData.settings.randomOptions){
    qs=qs.map((q)=>{
      if(q.type!=="single"&&q.type!=="multiple")return q;
      const opts=q.options.map((text,i)=>{
        const isCorrect=q.type==="multiple"?q.correct.indexOf(i)>=0:i===q.correct;
        return {text,isCorrect};
      });
      shuffle(opts);
      let newCorrect;
      if(q.type==="multiple"){
        newCorrect=opts.map((o,i)=>({i,ok:o.isCorrect})).filter((x)=>x.ok).map((x)=>x.i).sort((a,b)=>a-b);
      }else{
        newCorrect=opts.findIndex((o)=>o.isCorrect);
      }
      return {_id:q._id,title:q.title,image:q.image,audio:q.audio,audioText:q.audioText,type:q.type,options:opts.map((o)=>o.text),correct:newCorrect,explanation:q.explanation||""};
    });
  }
  return qs;
}

function initQuizAnswer(q){
  if(isSubjectiveType(q.type))return "";
  if(q.type==="multiple")return [];
  if(q.type==="fill")return new Array(q.correct.length).fill("");
  return null;
}

function extractSvgMarkup(image){
  const raw=String(image==null?"":image);
  const start=raw.search(/<svg[\s>]/i);
  if(start<0)return "";
  let svg=raw.slice(start);
  const end=svg.toLowerCase().lastIndexOf("</svg>");
  if(end>=0)svg=svg.slice(0,end+6);
  else svg+="</svg>";
  const firstTagEnd=svg.indexOf(">");
  if(firstTagEnd>=0&&!/\sxmlns\s*=/.test(svg.slice(0,firstTagEnd+1))){
    svg=svg.replace(/<svg/i,'<svg xmlns="http://www.w3.org/2000/svg"');
  }
  return svg;
}

function buildQuestionImageHtml(image){
  const raw=String(image==null?"":image).trim();
  if(!raw)return "";
  if(/^data:image\//i.test(raw))return '<img class="card-image" src="'+esc(raw)+'" alt="">';
  if(/^<img[\s>]/i.test(raw))return '<div class="card-image-wrap">'+raw+'</div>';
  const svg=extractSvgMarkup(raw);
  if(svg)return '<div class="card-image svg-image">'+svg+'</div>';
  return '<img class="card-image" src="'+esc(raw)+'" alt="">';
}

function renderQuizCards(){
  const container=$("cardsContainer");
  container.innerHTML="";
  if(state.quiz.questions.length===0){
    container.innerHTML='<div class="card active"><div class="empty-state">'+t("noQuestions")+'</div></div>';
    return;
  }
  state.quiz.questions.forEach((q,i)=>{
    const card=document.createElement("div");
    card.className="card"+(i===state.quiz.currentIndex?" active":"");
    const htmlParts=[];
    if(q.image){
      const imageHtml=buildQuestionImageHtml(q.image);
      if(imageHtml)htmlParts.push(imageHtml);
    }
    if(q.audio){
      htmlParts.push('<div class="card-audio"><audio controls preload="metadata" src="'+esc(q.audio)+'"></audio></div>');
    }
    if(q.audioText){
      htmlParts.push('<div class="card-audio card-audio-text"><button type="button" class="btn btn-secondary audio-play-btn" data-q="'+i+'">'+t("playAudioText")+'</button><span class="audio-text-hint">'+t("audioTextLabel")+'</span></div>');
    }
    htmlParts.push('<div class="q-header"><div class="q-num">'+(i+1)+'</div><span>'+t("progress",i+1,state.quiz.questions.length)+'</span><span class="q-type">'+typeLabel(q.type)+'</span></div>');
    if(q.type==="fill"){
      const blankCount=q.correct.length;
      const vals=Array.isArray(state.quiz.answers[i])?state.quiz.answers[i]:new Array(blankCount).fill("");
      const title=String(q.title);
      const hasPlaceholder=countBlanks(title)>0;
      if(hasPlaceholder&&countBlanks(title)===blankCount){
        const parts=title.split(new RegExp(BLANK_PLACEHOLDER));
        let inl='<div class="fill-inline-text">';
        for(let b=0;b<parts.length;b++){
          inl+='<span>'+esc(parts[b])+'</span>';
          if(b<parts.length-1){
            inl+='<input class="fill-inline-input" type="text" data-q="'+i+'" data-blank="'+b+'" value="'+esc(vals[b]||"")+'" placeholder="'+esc(t("blankAnswerLabel",b+1))+' " autocomplete="off">';
          }
        }
        inl+='</div>';
        htmlParts.push(inl);
      }else{
        htmlParts.push('<div class="q-text">'+esc(title)+'</div>');
        let list='<div class="fill-list-box">';
        for(let b=0;b<blankCount;b++){
          list+='<div class="fill-list-row"><span class="fill-index">'+esc(t("blankAnswerLabel",b+1))+'</span><input class="fill-input" type="text" data-q="'+i+'" data-blank="'+b+'" value="'+esc(vals[b]||"")+'" placeholder="'+esc(t("fillPlaceholder"))+'" autocomplete="off"></div>';
        }
        list+='</div>';
        htmlParts.push(list);
      }
    }else if(isSubjectiveType(q.type)){
      const val=typeof state.quiz.answers[i]==="string"?state.quiz.answers[i]:"";
      const rows=q.type==="essay"?10:(q.type==="reading"?8:5);
      htmlParts.push('<div class="q-text'+(q.type==="reading"?" reading-passage":"")+'">'+esc(q.title)+'</div>');
      htmlParts.push('<div class="subjective-box"><textarea class="subjective-input" data-q="'+i+'" rows="'+rows+'" placeholder="'+esc(t("subjectivePlaceholder"))+'">'+esc(val)+'</textarea><div class="subjective-meta" data-count="'+i+'">'+esc(t("charCount",val.length))+'</div></div>');
    }else{
      htmlParts.push('<div class="q-text">'+esc(q.title)+'</div>');
      if(q.type==="judge"){
        const optParts=['<div class="options judge-options">'];
        [t("trueLabel"),t("falseLabel")].forEach((opt,j)=>{
          const selected=state.quiz.answers[i]===j;
          const cls="option judge-option"+(selected?" selected":"");
          optParts.push('<div class="'+cls+'" data-q="'+i+'" data-opt="'+j+'"><div class="judge-symbol">'+esc(opt)+'</div></div>');
        });
        optParts.push('</div>');
        htmlParts.push(optParts.join(""));
      }else{
        const optParts=['<div class="options">'];
        q.options.forEach((opt,j)=>{
          const letter=String.fromCharCode(65+j);
          let selected;
          if(q.type==="multiple"){
            selected=Array.isArray(state.quiz.answers[i])&&state.quiz.answers[i].indexOf(j)>=0;
          }else{
            selected=state.quiz.answers[i]===j;
          }
          const cls="option"+(selected?" selected":"");
          optParts.push('<div class="'+cls+'" data-q="'+i+'" data-opt="'+j+'"><div class="option-letter">'+letter+'</div><div class="option-text">'+esc(opt)+'</div></div>');
        });
        optParts.push('</div>');
        htmlParts.push(optParts.join(""));
      }
    }
    card.innerHTML=htmlParts.join("");
    container.appendChild(card);
  });
  container.querySelectorAll(".option").forEach((el)=>{
    el.onclick=()=>handleOptionClick(el);
  });
  container.querySelectorAll(".fill-input,.fill-inline-input").forEach((input)=>{
    const qi=Number(input.dataset.q);
    const b=Number(input.dataset.blank);
    input.oninput=(e)=>{
      const q=state.quiz.questions[qi];
      if(!q)return;
      if(!Array.isArray(state.quiz.answers[qi])){
        state.quiz.answers[qi]=new Array(q.correct.length).fill("");
      }
      state.quiz.answers[qi][b]=e.target.value;
      updateProgress();
    };
  });
  container.querySelectorAll(".subjective-input").forEach((input)=>{
    const qi=Number(input.dataset.q);
    input.oninput=(e)=>{
      state.quiz.answers[qi]=e.target.value;
      const meta=container.querySelector('.subjective-meta[data-count="'+qi+'"]');
      if(meta)meta.textContent=t("charCount",e.target.value.length);
      updateProgress();
    };
  });
  container.querySelectorAll(".audio-play-btn").forEach((btn)=>{
    btn.onclick=()=>{
      const qi=Number(btn.dataset.q);
      const q=state.quiz.questions[qi];
      if(!q||!q.audioText)return;
      container.querySelectorAll("audio").forEach((a)=>{try{a.pause();}catch(_){}});
      container.querySelectorAll(".audio-play-btn").forEach((b)=>{b.disabled=false;b.textContent=t("playAudioText");});
      btn.disabled=true;
      btn.textContent=t("audioPlaying");
      playSpeech(q.audioText,()=>{
        btn.disabled=false;
        btn.textContent=t("playAudioText");
      });
    };
  });
  container.querySelectorAll("audio").forEach((a)=>{a.onplay=()=>stopSpeech();});
}

function handleOptionClick(el){
  if(!state.quiz.active)return;
  const qi=Number(el.dataset.q);
  const oi=Number(el.dataset.opt);
  const q=state.quiz.questions[qi];
  if(!q)return;
  if(state.quiz.pendingAdvance){
    clearTimeout(state.quiz.pendingAdvance);
    state.quiz.pendingAdvance=null;
  }
  if(q.type==="multiple"){
    let current=Array.isArray(state.quiz.answers[qi])?[...state.quiz.answers[qi]]:[];
    const idx=current.indexOf(oi);
    if(idx>=0)current.splice(idx,1);
    else current.push(oi);
    current.sort((a,b)=>a-b);
    state.quiz.answers[qi]=current;
  }else{
    state.quiz.answers[qi]=oi;
    if(qi===state.quiz.currentIndex&&state.quiz.currentIndex<state.quiz.questions.length-1){
      state.quiz.pendingAdvance=setTimeout(()=>{
        if(state.quiz.active&&state.quiz.currentIndex===qi){
          state.quiz.currentIndex++;
          updateQuizUI();
        }
      },280);
    }
  }
  const card=el.closest(".card");
  if(card){
    const q2=state.quiz.questions[qi];
    card.querySelectorAll(".option").forEach((optEl)=>{
      const oi2=Number(optEl.dataset.opt);
      let sel;
      if(q2.type==="multiple"){
        sel=Array.isArray(state.quiz.answers[qi])&&state.quiz.answers[qi].indexOf(oi2)>=0;
      }else{
        sel=state.quiz.answers[qi]===oi2;
      }
      optEl.classList.toggle("selected",sel);
    });
  }
  updateProgress();
}

function updateProgress(){
  const total=state.quiz.questions.length;
  let answered=0;
  state.quiz.questions.forEach((q,i)=>{
    const a=state.quiz.answers[i];
    if(q.type==="multiple"){
      if(Array.isArray(a)&&a.length>0)answered++;
    }else if(q.type==="fill"){
      const arr=Array.isArray(a)?a:[];
      if(arr.length===q.correct.length&&arr.every((x)=>String(x==null?"":x).trim().length>0))answered++;
    }else if(isSubjectiveType(q.type)){
      if(String(a==null?"":a).trim().length>0)answered++;
    }else{
      if(a!==null&&a!==undefined)answered++;
    }
  });
  $("progressText").textContent=t("progress",answered,total);
}

function updateQuizUI(){
  stopSpeech();
  const cards=$("cardsContainer").querySelectorAll(".card");
  cards.forEach((card,i)=>{
    const active=i===state.quiz.currentIndex;
    card.classList.toggle("active",active);
    if(!active){
      card.querySelectorAll("audio").forEach((a)=>{try{a.pause();}catch(_){}});
      card.querySelectorAll(".audio-play-btn").forEach((btn)=>{btn.disabled=false;btn.textContent=t("playAudioText");});
    }
  });
  $("prevBtn").disabled=state.quiz.currentIndex===0;
  $("nextBtn").disabled=state.quiz.currentIndex>=state.quiz.questions.length-1;
  updateProgress();
}
function formatTime(sec){const m=Math.floor(sec/60);const s=sec%60;return m+":"+String(s).padStart(2,"0");}
function formatHMS(sec){const h=Math.floor(sec/3600);const m=Math.floor((sec%3600)/60);const s=sec%60;return String(h).padStart(2,"0")+":"+String(m).padStart(2,"0")+":"+String(s).padStart(2,"0");}

function showWaitingOverlay(startTime){
  $("waitingOverlay").classList.add("open");
  const update=()=>{
    const remain=Math.max(0,Math.floor((startTime-Date.now())/1000));
    $("waitingCountdown").textContent=formatHMS(remain);
    if(remain<=0){
      clearInterval(state.quiz.waitInterval);
      state.quiz.waitInterval=null;
      $("waitingOverlay").classList.remove("open");
      requestFullscreenFlow(()=>showPreExamFlow(state.quiz.currentUserInfo));
    }
  };
  update();
  state.quiz.waitInterval=setInterval(update,1000);
}
function hideWaitingOverlay(){$("waitingOverlay").classList.remove("open");if(state.quiz.waitInterval){clearInterval(state.quiz.waitInterval);state.quiz.waitInterval=null;}}
function isFullscreen(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement);}
function requestFullscreenFlow(onSuccess){state.fullscreen.onSuccess=onSuccess;state.fullscreen.countdown=FULLSCREEN_TIMEOUT;state.fullscreen.active=true;$("fullscreenCountdown").textContent=state.fullscreen.countdown;$("fullscreenDesc").textContent=t("fullscreenDesc",state.fullscreen.countdown);$("fullscreenOverlay").classList.add("open");clearInterval(state.fullscreen.interval);state.fullscreen.interval=setInterval(()=>{if(isFullscreen()){clearInterval(state.fullscreen.interval);state.fullscreen.interval=null;state.fullscreen.active=false;$("fullscreenOverlay").classList.remove("open");if(state.fullscreen.onSuccess){const cb=state.fullscreen.onSuccess;state.fullscreen.onSuccess=null;cb();}return;}state.fullscreen.countdown--;$("fullscreenCountdown").textContent=state.fullscreen.countdown;$("fullscreenDesc").textContent=t("fullscreenDesc",state.fullscreen.countdown);if(state.fullscreen.countdown<=0){clearInterval(state.fullscreen.interval);state.fullscreen.interval=null;state.fullscreen.active=false;state.fullscreen.onSuccess=null;$("fullscreenOverlay").classList.remove("open");showToast(t("fullscreenTimeout"),"warn");restartFlow();}},1000);}
function cancelFullscreenFlow(){if(state.fullscreen.interval)clearInterval(state.fullscreen.interval);state.fullscreen.interval=null;state.fullscreen.active=false;state.fullscreen.onSuccess=null;$("fullscreenOverlay").classList.remove("open");}
function restartFlow(){
  stopAllMedia();
  if(state.quiz.pendingAdvance){clearTimeout(state.quiz.pendingAdvance);state.quiz.pendingAdvance=null;}
  if(state.quiz.timerInterval){clearInterval(state.quiz.timerInterval);state.quiz.timerInterval=null;}
  if(state.quiz.waitInterval){clearInterval(state.quiz.waitInterval);state.quiz.waitInterval=null;}
  if(isFullscreen()&&document.exitFullscreen){document.exitFullscreen().catch(()=>{});}
  state.quiz.active=false;
  state.quiz.answers=[];
  state.quiz.currentIndex=0;
  state.quiz.questions=[];
  state.quiz.currentUserInfo=null;
  state.quiz.lastResult=null;
  $("waitingOverlay").classList.remove("open");
  $("fullscreenOverlay").classList.remove("open");
  $("resultArea").classList.remove("active");
  $("quizArea").classList.remove("active");
  $("userBanner").style.display="none";
  updateRoleUI();
  applyLang();
}
function getAudioTestText(){const custom=state.appData.settings.audioTestText;if(custom&&custom.trim())return custom;return t("audioTestContent");}
function stopSpeech(){
  speechToken++;
  currentUtterance=null;
  if(window.speechSynthesis){try{window.speechSynthesis.cancel();}catch(err){}}
}
function stopAllMedia(){
  stopSpeech();
  document.querySelectorAll("audio").forEach((a)=>{try{a.pause();}catch(err){}});
  document.querySelectorAll(".audio-play-btn").forEach((btn)=>{btn.disabled=false;btn.textContent=t("playAudioText");});
}
function playSpeech(text,onEnd){
  if(!window.speechSynthesis){showToast(t("playbackNotSupported"),"warn");if(onEnd)onEnd();return;}
  stopSpeech();
  const token=speechToken;
  const u=new SpeechSynthesisUtterance(text);
  u.lang=/[\u3040-\u30ff\u3400-\u9fff]/.test(String(text||""))?"zh-CN":"en-US";
  u.rate=0.95;
  u.pitch=1;
  u.onend=()=>{if(currentUtterance===u)currentUtterance=null;if(token===speechToken&&onEnd)onEnd();};
  u.onerror=()=>{if(currentUtterance===u)currentUtterance=null;if(token===speechToken&&onEnd)onEnd();};
  currentUtterance=u;
  window.speechSynthesis.speak(u);
}
function normalizeAudioText(text){
  return String(text==null?"":text).toLowerCase().replace(/[\s\p{P}\p{S}]/gu,"");
}

function showPreExamFlow(userInfo){
  if(state.appData.questions.length===0){showToast(t("noQuestionsWarning"),"warn");return;}
  const s=state.appData.settings;
  const hasExamInfo=!!((s.examTitle&&s.examTitle.trim())||(s.examSubtitle&&s.examSubtitle.trim()));
  const hasNotice=!!(s.noticeText&&s.noticeText.trim());
  const userKey=userInfo?userInfo.uid:"__guest__";
  const hasAudio=!!s.enableAudio&&!state.quiz.audioConfirmedUsers.has(userKey);
  const steps=[];
  if(hasExamInfo)steps.push("examInfo");
  if(hasNotice)steps.push("notice");
  if(hasAudio)steps.push("audio");
  steps.push("info");
  let stepIndex=0;
  function renderStep(){
    const step=steps[stepIndex];
    if(step==="examInfo")renderExamInfoStep();
    else if(step==="notice")renderNoticeStep();
    else if(step==="audio")renderAudioStep();
    else if(step==="info")renderInfoStep();
  }
  function goNext(){stepIndex++;if(stepIndex>=steps.length){beginExamAfterLogin(userInfo);return;}renderStep();}
  function renderExamInfoStep(){
    const title=(s.examTitle||"").trim();
    const subtitle=(s.examSubtitle||"").trim();
    let inner='<div class="exam-info-box">';
    if(title)inner+='<div class="exam-info-title">'+esc(title)+'</div>';
    if(title&&subtitle)inner+='<div class="exam-info-divider"></div>';
    if(subtitle)inner+='<div class="exam-info-subtitle">'+esc(subtitle)+'</div>';
    inner+='</div>';
    openModal(inner+'<div class="modal-actions"><button class="btn btn-secondary" id="preCancel">'+t("cancel")+'</button><button class="btn btn-primary" id="preNext">'+t("examInfoContinue")+'</button></div>',false);
    $("preNext").onclick=()=>{goNext();};
    $("preCancel").onclick=()=>{closeModal();restartFlow();};
  }
  function renderNoticeStep(){
    openModal('<h2>'+t("noticeTitleDisplay")+'</h2><div class="notice-box selectable">'+esc(s.noticeText)+'</div><div class="checkbox-row"><input type="checkbox" id="noticeCheck"><span>'+t("noticeConfirm")+'</span></div><div class="modal-actions"><button class="btn btn-secondary" id="preCancel">'+t("cancel")+'</button><button class="btn btn-primary" id="preNext" disabled>'+t("continueBtn")+'</button></div>',false);
    const check=$("noticeCheck");const nextBtn=$("preNext");
    check.onchange=()=>{nextBtn.disabled=!check.checked;};
    nextBtn.onclick=()=>{goNext();};
    $("preCancel").onclick=()=>{closeModal();restartFlow();};
  }
  function renderAudioStep(){
    const dictation=!!s.audioDictation;
    const dictationHtml=dictation?'<div class="audio-dictation" id="audioDictation" style="display:none"><label>'+t("audioTranscriptLabel")+'</label><textarea id="audioTranscript" rows="3" placeholder="'+t("audioTranscriptPlaceholder")+'"></textarea><div class="audio-dictation-row"><button class="btn btn-secondary btn-sm" id="checkAudioBtn">'+t("audioCheckBtn")+'</button><span class="audio-check-status" id="audioCheckStatus"></span></div></div>':'';
    openModal('<h2>'+t("audioTestTitle")+'</h2><p style="font-size:13px;color:var(--text-3);line-height:1.6">'+t("audioTestDesc")+'</p><div class="audio-test-box"><button class="btn btn-secondary" id="playAudioBtn">'+t("audioTestPlay")+'</button><div class="audio-test-status" id="audioStatus"></div>'+dictationHtml+'<button class="btn btn-primary" id="confirmAudioBtn" style="display:none">'+t("audioTestConfirm")+'</button></div><div class="modal-actions"><button class="btn btn-secondary" id="preCancel">'+t("cancel")+'</button></div>',false);
    const playBtn=$("playAudioBtn");
    const statusEl=$("audioStatus");
    const confirmBtn=$("confirmAudioBtn");
    playBtn.onclick=()=>{
      playBtn.disabled=true;
      statusEl.textContent=t("audioPlaying");
      confirmBtn.style.display="none";
      if(dictation){$("audioDictation").style.display="none";$("audioCheckStatus").textContent="";}
      playSpeech(getAudioTestText(),()=>{
        playBtn.disabled=false;
        statusEl.textContent="";
        if(dictation){$("audioDictation").style.display="flex";$("audioTranscript").focus();}
        else{confirmBtn.style.display="inline-flex";}
      });
    };
    if(dictation){
      const input=$("audioTranscript");
      const checkStatus=$("audioCheckStatus");
      const check=()=>{
        const expected=normalizeAudioText(getAudioTestText());
        const actual=normalizeAudioText(input.value);
        if(!actual){showToast(t("audioDictationRequired"),"warn");input.focus();return;}
        if(expected&&actual===expected){
          checkStatus.textContent=t("audioCheckCorrect");
          checkStatus.className="audio-check-status ok";
          confirmBtn.style.display="inline-flex";
        }else{
          checkStatus.textContent=t("audioCheckWrong");
          checkStatus.className="audio-check-status bad";
          confirmBtn.style.display="none";
        }
      };
      $("checkAudioBtn").onclick=check;
      input.addEventListener("keydown",(e)=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();check();}});
    }
    confirmBtn.onclick=()=>{if(userInfo){state.quiz.audioConfirmedUsers.add(userKey);saveAudioConfirmedUsers();}goNext();};
    $("preCancel").onclick=()=>{stopAllMedia();closeModal();restartFlow();};
  }
  function renderInfoStep(){
    const avatarText=(userInfo.name||"?").charAt(0).toUpperCase();
    const genderKey=userInfo.gender==="male"?"male":userInfo.gender==="female"?"female":"other";
    const examTime=s.examStartTime?new Date(s.examStartTime).toLocaleString():t("startModeUnlimited");
    const dur=s.examDuration>0?s.examDuration+" "+t("minutes"):t("examDurationUnlimited");
    const subject=s.subject||t("unknown");
    openModal('<h2>'+t("candidateInfoTitle")+'</h2><p style="font-size:13px;color:var(--text-3);line-height:1.6">'+t("candidateInfoDesc")+'</p><div class="info-card"><div class="info-avatar">'+esc(avatarText)+'</div><div class="info-row"><span class="info-label">'+t("userName")+'</span><span class="info-value">'+esc(userInfo.name)+'</span></div><div class="info-row"><span class="info-label">'+t("uid")+'</span><span class="info-value selectable" style="font-family:ui-monospace,monospace;font-size:12px">'+esc(userInfo.uid)+'</span></div><div class="info-row"><span class="info-label">'+t("gender")+'</span><span class="info-value">'+t(genderKey)+'</span></div><div class="info-row"><span class="info-label">'+t("examSubject")+'</span><span class="info-value">'+esc(subject)+'</span></div><div class="info-row"><span class="info-label">'+t("examTime")+'</span><span class="info-value">'+esc(examTime)+'</span></div><div class="info-row"><span class="info-label">'+t("examDurationLabel")+'</span><span class="info-value">'+esc(dur)+'</span></div></div><div class="modal-actions"><button class="btn btn-secondary" id="preCancel">'+t("cancel")+'</button><button class="btn btn-primary" id="confirmInfoBtn">'+t("startAfterConfirm")+'</button></div>',false);
    $("confirmInfoBtn").onclick=()=>{goNext();};
    $("preCancel").onclick=()=>{closeModal();restartFlow();};
  }
  renderStep();
}

function beginExamAfterLogin(userInfo){
  if(state.appData.questions.length===0){showToast(t("noQuestionsWarning"),"warn");return;}
  closeModal();
  state.quiz.questions=buildSessionQuestions();
  state.quiz.active=true;
  state.quiz.currentIndex=0;
  state.quiz.answers=state.quiz.questions.map((q)=>initQuizAnswer(q));
  state.quiz.currentUserInfo=userInfo||null;
  state.quiz.pendingAdvance=null;
  $("adminView").style.display="none";
  $("userView").style.display="none";
  $("quizArea").classList.add("active");
  $("resultArea").classList.remove("active");
  const banner=$("userBanner");
  if(userInfo){
    banner.style.display="flex";
    $("userBannerName").textContent=userInfo.name;
    $("userBannerUid").textContent=t("uid")+" · "+userInfo.uid;
  }else{
    banner.style.display="none";
  }
  renderQuizCards();
  updateProgress();
  if(state.quiz.timerInterval)clearInterval(state.quiz.timerInterval);
  const timerEl=$("timerDisplay");
  const dur=state.appData.settings.examDuration;
  if(dur&&dur>0){
    let remaining=dur*60;
    timerEl.style.display="inline";
    timerEl.textContent=formatTime(remaining);
    timerEl.classList.toggle("warning",remaining<300);
    timerEl.classList.toggle("critical",remaining<60);
    state.quiz.timerInterval=setInterval(()=>{
      remaining--;
      if(remaining<=0){
        clearInterval(state.quiz.timerInterval);
        state.quiz.timerInterval=null;
        submitQuiz(true);
      }else{
        timerEl.textContent=formatTime(remaining);
        timerEl.classList.toggle("warning",remaining<300&&remaining>=60);
        timerEl.classList.toggle("critical",remaining<60);
      }
    },1000);
  }else{
    timerEl.style.display="none";
  }
}

function startQuiz(userInfo){
  const win=checkExamTimeWindow();
  state.quiz.currentUserInfo=userInfo||null;
  if(!win.ok){
    if(win.reason==="ended"){showExpiredExamModal();return;}
    if(win.reason==="notStarted"){showWaitingOverlay(win.startTime);return;}
  }
  requestFullscreenFlow(()=>{showPreExamFlow(userInfo);});
}

function submitQuiz(timeUp){
  if(state.quiz.pendingAdvance){clearTimeout(state.quiz.pendingAdvance);state.quiz.pendingAdvance=null;}
  if(!timeUp&&state.appData.settings.requireAll){
    let unanswered=0;
    state.quiz.questions.forEach((q,i)=>{
      const a=state.quiz.answers[i];
      if(q.type==="multiple"){if(!Array.isArray(a)||a.length===0)unanswered++;}
      else if(q.type==="fill"){
        const arr=Array.isArray(a)?a:[];
        if(arr.length!==q.correct.length||arr.some((x)=>String(x==null?"":x).trim()===""))unanswered++;
      }
      else if(isSubjectiveType(q.type)){if(String(a==null?"":a).trim()==="")unanswered++;}
      else{if(a===null||a===undefined)unanswered++;}
    });
    if(unanswered>0){showToast(t("mustAnswerAll"),"warn");return;}
  }
  stopAllMedia();
  state.quiz.active=false;
  if(state.quiz.timerInterval){clearInterval(state.quiz.timerInterval);state.quiz.timerInterval=null;}
  $("timerDisplay").style.display="none";
  const total=state.quiz.questions.length;
  const gradedTotal=state.quiz.questions.filter((q)=>!isSubjectiveType(q.type)).length;
  const subjectiveTotal=total-gradedTotal;
  const totalScore=Math.max(1,toNum(state.appData.settings.totalScore,100));
  let correctCount=0;
  state.quiz.questions.forEach((q,i)=>{if(!isSubjectiveType(q.type)&&isAnswerCorrect(state.quiz.answers[i],q.correct,q.type))correctCount++;});
  const perScore=gradedTotal>0?totalScore/gradedTotal:0;
  let finalScore=Math.round(correctCount*perScore);
  if(finalScore>totalScore)finalScore=totalScore;
  if(finalScore<0)finalScore=0;
  state.quiz.lastResult={
    correctCount:correctCount,
    total:total,
    gradedTotal:gradedTotal,
    subjectiveTotal:subjectiveTotal,
    score:finalScore,
    totalScore:totalScore,
    timeUp:timeUp,
    questions:state.quiz.questions.map((q)=>({title:q.title,correct:q.correct,type:q.type,options:q.options.slice(),explanation:q.explanation||""})),
    answers:state.quiz.answers.map((a)=>Array.isArray(a)?[...a]:a)
  };
  const user=state.quiz.currentUserInfo;
  let summaryHtml='<div class="result-summary">';
  if(user)summaryHtml+='<div class="result-user">'+esc(user.name)+'</div>';
  summaryHtml+='<div class="result-label">'+(timeUp?t("timeUp")+" · ":"")+t("scoreLabel")+'</div>';
  summaryHtml+='<div class="result-score">'+finalScore+' / '+totalScore+'</div>';
  if(gradedTotal>0)summaryHtml+='<div class="result-sub">'+t("progressCorrect",correctCount,gradedTotal)+'</div>';
  if(subjectiveTotal>0)summaryHtml+='<div class="result-sub subjective-note">'+t("subjectivePending",subjectiveTotal)+'</div>';
  summaryHtml+='</div>';
  $("resultSummary").innerHTML=summaryHtml;
  let listHtml="";
  if(state.appData.settings.showAnswer){
    state.quiz.questions.forEach((q,i)=>{
      const userAns=state.quiz.answers[i];
      const subjective=isSubjectiveType(q.type);
      const ok=!subjective&&isAnswerCorrect(userAns,q.correct,q.type);
      let lines="";
      if(subjective){
        const isEmpty=String(userAns==null?"":userAns).trim()==="";
        if(isEmpty){
          lines+='<div class="result-line wrong">'+t("notAnswered")+'</div>';
        }else{
          lines+='<div class="result-line neutral">'+t("yourAnswer",esc(formatAnswer(userAns,q.type)))+'</div>';
        }
        lines+='<div class="result-line neutral">'+t("subjectiveNotGraded")+'</div>';
      }else{
        const isEmpty=(q.type==="multiple")?(!Array.isArray(userAns)||userAns.length===0)
                     :(q.type==="fill")?(!Array.isArray(userAns)||userAns.every((x)=>String(x==null?"":x).trim()===""))
                     :(userAns===null||userAns===undefined);
        if(isEmpty){
          lines+='<div class="result-line wrong">'+t("notAnswered")+'</div>';
        }else{
          lines+='<div class="result-line '+(ok?"correct":"wrong")+'">'+t("yourAnswer",esc(formatAnswer(userAns,q.type)))+'</div>';
        }
        if(!ok){lines+='<div class="result-line correct">'+t("correctAnswer",esc(formatAnswer(q.correct,q.type)))+'</div>';}
      }
      if(q.explanation&&q.explanation.trim()){
        lines+='<div class="explanation-box"><div class="explanation-label">'+t("explanationLabel")+'</div><div class="explanation-text">'+esc(q.explanation)+'</div></div>';
      }
      listHtml+='<div class="result-item"><div class="result-item-title">'+(i+1)+'. '+esc(q.title)+'</div>'+lines+'</div>';
    });
  }
  $("resultList").innerHTML=listHtml;
  renderResultActions();
  $("resultArea").classList.add("active");
  $("quizArea").classList.remove("active");
  if(isFullscreen()&&document.exitFullscreen){document.exitFullscreen().catch(()=>{});}
}

function renderResultActions(){
  const container=$("resultActions");
  container.innerHTML="";
  const user=state.quiz.currentUserInfo;
  const btnContinue=document.createElement("button");
  btnContinue.className="btn btn-primary";
  btnContinue.textContent=t("continueWithAccount");
  btnContinue.onclick=()=>{if(!user){restartFlow();return;}startQuiz(user);};
  container.appendChild(btnContinue);
  const btnNew=document.createElement("button");
  btnNew.className="btn btn-secondary";
  btnNew.textContent=t("loginNewAccount");
  btnNew.onclick=()=>{restartFlow();openLoginModal((u)=>startQuiz(u));};
  container.appendChild(btnNew);
  const btnHome=document.createElement("button");
  btnHome.className="btn btn-secondary";
  btnHome.textContent=t("backToHome");
  btnHome.onclick=()=>{restartFlow();};
  container.appendChild(btnHome);
  if(state.appData.settings.allowStudentExport&&user){
    const btnExp=document.createElement("button");
    btnExp.className="btn btn-secondary";
    btnExp.textContent=t("exportImage");
    btnExp.onclick=exportResultImage;
    container.appendChild(btnExp);
    const btnExp2=document.createElement("button");
    btnExp2.className="btn btn-secondary";
    btnExp2.textContent=t("exportStudent");
    btnExp2.onclick=exportStudentResult;
    container.appendChild(btnExp2);
  }
}

function exportResultImage(){
  try{
    const r=state.quiz.lastResult;
    if(!r)return;
    const user=state.quiz.currentUserInfo;
    const qs=r.questions;
    const answers=r.answers;
    const totalScore=r.totalScore;
    const finalScore=r.score;
    const showDetail=state.appData.settings.showAnswer;
    const isLight=state.currentTheme==="light";
    const bg=isLight?"#ffffff":"#161618";
    const fg=isLight?"#1a1a1e":"#f0f0f0";
    const muted=isLight?"#5a5a62":"#a8a8b0";
    const border=isLight?"#e0e0e6":"#26262a";
    const success="#22c55e";
    const danger="#ef4444";
    const fontCN="'PingFang SC','Microsoft YaHei',system-ui,sans-serif";
    const width=900;
    const padding=60;
    const headerHeight=user?260:220;
    let itemHeights=0;
    if(showDetail){
      qs.forEach((q,i)=>{
        itemHeights+=70;
        if(isSubjectiveType(q.type))itemHeights+=22;
        else if(!isAnswerCorrect(answers[i],q.correct,q.type))itemHeights+=22;
      });
    }
    const height=Math.max(600,headerHeight+itemHeights+padding+80);
    const canvas=document.createElement("canvas");
    const dpr=window.devicePixelRatio||1;
    canvas.width=width*dpr;
    canvas.height=height*dpr;
    const ctx=canvas.getContext("2d");
    ctx.scale(dpr,dpr);
    ctx.fillStyle=bg;
    ctx.fillRect(0,0,width,height);
    ctx.strokeStyle=border;
    ctx.lineWidth=2;
    ctx.strokeRect(1,1,width-2,height-2);
    ctx.textAlign="center";
    if(user){
      ctx.fillStyle=fg;
      ctx.font="600 22px "+fontCN;
      ctx.fillText(user.name,width/2,50);
    }
    ctx.fillStyle=muted;
    ctx.font="600 14px "+fontCN;
    ctx.fillText(t("scoreLabel").toUpperCase(),width/2,user?90:60);
    ctx.fillStyle=fg;
    ctx.font="700 64px "+fontCN;
    ctx.fillText(finalScore+" / "+totalScore,width/2,user?160:130);
    ctx.fillStyle=muted;
    ctx.font="500 16px "+fontCN;
    ctx.fillText(t("progressCorrect",r.correctCount,r.gradedTotal==null?r.total:r.gradedTotal),width/2,user?195:165);
    if(user){
      ctx.textAlign="left";
      ctx.fillStyle=muted;
      ctx.font="500 12px ui-monospace,monospace";
      ctx.fillText(t("uid")+": "+user.uid,padding,230);
    }
    ctx.strokeStyle=border;
    ctx.lineWidth=1;
    ctx.beginPath();
    ctx.moveTo(padding,headerHeight+10);
    ctx.lineTo(width-padding,headerHeight+10);
    ctx.stroke();
    if(showDetail){
      let y=headerHeight+50;
      ctx.textAlign="left";
      qs.forEach((q,i)=>{
        const userAns=answers[i];
        const subjective=isSubjectiveType(q.type);
        const ok=!subjective&&isAnswerCorrect(userAns,q.correct,q.type);
        ctx.fillStyle=fg;
        ctx.font="600 16px "+fontCN;
        let title=(i+1)+". "+String(q.title||"").replace(/\s+/g," ");
        if(title.length>60)title=title.slice(0,60)+"...";
        ctx.fillText(title,padding,y);
        y+=24;
        ctx.font="500 13px "+fontCN;
        if(subjective){
          const ans=String(userAns==null?"":userAns).trim();
          if(!ans){
            ctx.fillStyle=danger;
            ctx.fillText(t("notAnswered"),padding+20,y);
          }else{
            ctx.fillStyle=muted;
            let txt=ans.replace(/\s+/g," ");
            if(txt.length>50)txt=txt.slice(0,50)+"...";
            ctx.fillText(t("yourAnswer",txt),padding+20,y);
          }
          y+=20;
          ctx.fillStyle=muted;
          ctx.fillText(t("subjectiveNotGraded"),padding+20,y);
          y+=8;
          return;
        }
        const isEmpty=(q.type==="multiple")?(!Array.isArray(userAns)||userAns.length===0):(q.type==="fill")?(!Array.isArray(userAns)||userAns.every((x)=>String(x==null?"":x).trim()==="")):(userAns===null||userAns===undefined);
        if(isEmpty){
          ctx.fillStyle=danger;
          ctx.fillText(t("notAnswered"),padding+20,y);
        }else{
          ctx.fillStyle=ok?success:danger;
          let txt=formatAnswer(userAns,q.type);
          if(txt.length>50)txt=txt.slice(0,50)+"...";
          ctx.fillText(t("yourAnswer",txt),padding+20,y);
        }
        y+=20;
        if(!ok){
          ctx.fillStyle=success;
          let ctxt=formatAnswer(q.correct,q.type);
          if(ctxt.length>50)ctxt=ctxt.slice(0,50)+"...";
          ctx.fillText(t("correctAnswer",ctxt),padding+20,y);
          y+=22;
        }
        y+=8;
      });
    }else{
      ctx.textAlign="center";
      ctx.fillStyle=muted;
      ctx.font="500 14px "+fontCN;
      ctx.fillText(t("showAnswerDisabled"),width/2,headerHeight+60);
    }
    ctx.fillStyle=muted;
    ctx.font="500 11px "+fontCN;
    ctx.textAlign="right";
    ctx.fillText("© "+new Date().getFullYear()+" fuey All Rights Reserved",width-padding,height-24);
    const url=canvas.toDataURL("image/png");
    const a=document.createElement("a");
    a.href=url;
    a.download="exam_result_"+Date.now()+".png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast(t("imageExported"),"success");
  }catch(err){showToast(t("imageExportFail"),"warn");}
}

function openLoginModal(onSuccess){
  if(state.appData.users.length===0){showToast(t("noUsers"),"warn");return;}
  openModal('<h2>'+t("startExam")+'</h2><div class="form-group"><label>'+t("loginName")+'</label><input id="loginName" type="text" autocomplete="off" placeholder="'+t("enterName")+'"></div><div class="form-group"><label>'+t("loginCredLabel")+'</label><input id="loginCred" type="text" autocomplete="off" placeholder="'+t("enterCred")+'"></div><div class="modal-actions"><button class="btn btn-secondary" id="loginCancel">'+t("cancel")+'</button><button class="btn btn-primary" id="loginOk">'+t("confirm")+'</button></div>',false);
  const nameInput=$("loginName");const credInput=$("loginCred");
  setTimeout(()=>nameInput.focus(),50);
  const submit=()=>{
    const name=nameInput.value.trim();
    const cred=credInput.value.trim();
    if(!name){showToast(t("nameRequired"),"warn");nameInput.focus();return;}
    if(!cred){showToast(t("enterCred"),"warn");credInput.focus();return;}
    const user=state.appData.users.find((u)=>u.name===name);
    if(!user){showToast(t("userNotRegistered"),"warn");nameInput.value="";nameInput.focus();return;}
    let valid=false;
    if(needsVerifyCode(user.uid)){valid=cred===user.verifyCode||cred===user.uid;}
    else{valid=cred===user.uid;}
    if(!valid){showToast(t("invalidCred"),"warn");credInput.value="";credInput.focus();return;}
    closeModal();
    onSuccess(user);
  };
  $("loginCancel").onclick=closeModal;
  $("loginOk").onclick=submit;
  nameInput.onkeydown=(e)=>{if(e.key==="Enter"){e.preventDefault();credInput.focus();}};
  credInput.onkeydown=(e)=>{if(e.key==="Enter"){e.preventDefault();submit();}};
}

function getWizardSteps(){return (state.wizard.type==="single"||state.wizard.type==="multiple")?[1,2,3]:[1,3];}
function renderStepIndicator(){const steps=getWizardSteps();const currentIdx=steps.indexOf(state.wizard.step);return '<div class="step-indicator">'+steps.map((s,i)=>'<div class="step-dot'+(i<=currentIdx?" active":"")+'"></div>').join("")+'</div>';}
function buildListToolbar(prefix){return '<div class="list-toolbar"><button class="btn btn-secondary btn-sm" id="'+prefix+'SelectAll">'+t("selectAll")+'</button><button class="btn btn-secondary btn-sm" id="'+prefix+'DeselectAll">'+t("deselectAll")+'</button><button class="btn btn-danger btn-sm" id="'+prefix+'DeleteBtn">'+t("deleteSelected")+'</button><div class="spacer"></div><span class="selected-count" id="'+prefix+'SelectedCount">'+t("selectedCount",0)+'</span></div>';}
function updateListToolbar(prefix){const sel=prefix==="q"?state.selection.questions:state.selection.users;const countEl=$(prefix+"SelectedCount");const delBtn=$(prefix+"DeleteBtn");if(countEl)countEl.textContent=t("selectedCount",sel.size);if(delBtn)delBtn.disabled=sel.size===0;}
function bindListToolbar(prefix,refreshFn){
  const getSel=()=>prefix==="q"?state.selection.questions:state.selection.users;
  $(prefix+"SelectAll").onclick=()=>{
    let data;
    if(prefix==="q"){
      data=getQuestions();
      if(state.qFilter!=="all")data=data.filter((q)=>q.type===state.qFilter);
    }else{
      data=getUsers();
    }
    for(let i=0;i<data.length;i++)getSel().add(data[i]._id);
    refreshFn();
    updateListToolbar(prefix);
  };
  $(prefix+"DeselectAll").onclick=()=>{getSel().clear();refreshFn();updateListToolbar(prefix);};
  $(prefix+"DeleteBtn").onclick=()=>{
    const sel=getSel();
    if(sel.size===0)return;
    const count=sel.size;
    confirmDialog(t("delete"),t("deleteSelectedConfirm",count),t("delete"),t("cancel"),()=>{
      if(prefix==="q"){state.appData.questions=state.appData.questions.filter((item)=>!sel.has(item._id));}
      else{state.appData.users=state.appData.users.filter((item)=>!sel.has(item._id));}
      sel.clear();
      markDirty();updateStats();
      showToast(t("deleteSelectedSuccess",count),"success");
      refreshFn();
      updateListToolbar(prefix);
    });
  };
}

function renderQuestionListItems(){
  const list=$("qList");
  if(!list)return;
  let questions=getQuestions();
  if(state.qFilter!=="all"){
    questions=questions.filter((q)=>q.type===state.qFilter);
  }else{
    const order=getTypeOrder();
    questions=[...questions].sort((a,b)=>order.indexOf(a.type)-order.indexOf(b.type));
  }
  if(questions.length===0){list.innerHTML='<div class="empty-state">'+t("noQuestions")+'</div>';return;}
  list.innerHTML="";
  questions.forEach((q,i)=>{
    const item=document.createElement("div");
    item.className="list-item";
    item.draggable=true;
    item.dataset.id=q._id;
    const checked=state.selection.questions.has(q._id)?" checked":"";
    item.innerHTML='<div class="drag-handle" title="'+esc(t("dragToReorder"))+'"><svg viewBox="0 0 16 16" fill="currentColor"><circle cx="5" cy="3" r="1.1"/><circle cx="11" cy="3" r="1.1"/><circle cx="5" cy="8" r="1.1"/><circle cx="11" cy="8" r="1.1"/><circle cx="5" cy="13" r="1.1"/><circle cx="11" cy="13" r="1.1"/></svg></div><input type="checkbox" draggable="false" data-sel="'+q._id+'"'+checked+'><div class="list-item-body"><div class="list-item-title">'+(i+1)+'. '+esc(q.title)+'</div><div class="list-item-meta">'+esc(typeLabel(q.type))+'</div></div><div class="list-item-actions"><button class="btn btn-danger btn-sm" draggable="false" data-del="'+q._id+'">'+t("delete")+'</button></div>';
    list.appendChild(item);
  });
  list.querySelectorAll("[data-del]").forEach((btn)=>{
    btn.onclick=()=>{
      const id=btn.dataset.del;
      confirmDialog(t("delete"),t("deleteConfirm"),t("delete"),t("cancel"),()=>{
        state.appData.questions=state.appData.questions.filter((q)=>q._id!==id);
        state.selection.questions.delete(id);
        markDirty();updateStats();
        showToast(t("questionDeleted"),"success");
        renderQuestionListItems();
        updateListToolbar("q");
      });
    };
  });
  list.querySelectorAll("[data-sel]").forEach((cb)=>{
    cb.onchange=()=>{
      const id=cb.dataset.sel;
      if(cb.checked)state.selection.questions.add(id);
      else state.selection.questions.delete(id);
      updateListToolbar("q");
    };
  });
  bindQuestionDragEvents();
}

function bindQuestionDragEvents(){
  const items=document.querySelectorAll("#qList .list-item");
  items.forEach((item)=>{
    item.addEventListener("dragstart",(e)=>{
      const t2=e.target;
      if(t2&&(t2.tagName==="INPUT"||t2.tagName==="BUTTON"||(t2.closest&&(t2.closest("input")||t2.closest("button"))))){
        e.preventDefault();
        return;
      }
      state.dragSrcId=item.dataset.id;
      item.classList.add("dragging");
      if(e.dataTransfer){
        e.dataTransfer.effectAllowed="move";
        try{
          if(TRANSPARENT_DRAG_CANVAS)e.dataTransfer.setDragImage(TRANSPARENT_DRAG_CANVAS,0,0);
          e.dataTransfer.setData("text/plain",state.dragSrcId);
        }catch(_){}
      }
    });
    item.addEventListener("dragover",(e)=>{
      e.preventDefault();
      if(e.dataTransfer)e.dataTransfer.dropEffect="move";
      if(!state.dragSrcId||state.dragSrcId===item.dataset.id)return;
      const rect=item.getBoundingClientRect();
      const midpoint=rect.top+rect.height/2;
      const isTop=e.clientY<midpoint;
      item.classList.toggle("drag-over-top",isTop);
      item.classList.toggle("drag-over-bottom",!isTop);
    });
    item.addEventListener("dragleave",(e)=>{
      if(!item.contains(e.relatedTarget)){
        item.classList.remove("drag-over-top","drag-over-bottom");
      }
    });
    item.addEventListener("drop",(e)=>{
      e.preventDefault();
      const targetId=item.dataset.id;
      const isAfter=item.classList.contains("drag-over-bottom");
      item.classList.remove("drag-over-top","drag-over-bottom");
      if(!state.dragSrcId||state.dragSrcId===targetId){state.dragSrcId=null;return;}
      reorderQuestions(state.dragSrcId,targetId,isAfter);
      state.dragSrcId=null;
    });
    item.addEventListener("dragend",()=>{
      item.classList.remove("dragging");
      document.querySelectorAll("#qList .list-item").forEach((el)=>el.classList.remove("drag-over-top","drag-over-bottom"));
      state.dragSrcId=null;
    });
  });
}

function reorderQuestions(srcId,targetId,isAfter){
  const qs=state.appData.questions;
  const srcItem=qs.find((q)=>q._id===srcId);
  const tgtItem=qs.find((q)=>q._id===targetId);
  if(!srcItem||!tgtItem)return;
  if(srcItem.type!==tgtItem.type)return;
  const order=getTypeOrder();
  const sorted=[...qs].sort((a,b)=>order.indexOf(a.type)-order.indexOf(b.type));
  const srcIdx=sorted.indexOf(srcItem);
  const tgtIdx=sorted.indexOf(tgtItem);
  if(srcIdx<0||tgtIdx<0||srcIdx===tgtIdx)return;
  sorted.splice(srcIdx,1);
  const newTgtIdx=sorted.indexOf(tgtItem);
  const insertAt=isAfter?newTgtIdx+1:newTgtIdx;
  sorted.splice(insertAt,0,srcItem);
  state.appData.questions.length=0;
  sorted.forEach((q)=>state.appData.questions.push(q));
  markDirty();
  renderQuestionListItems();
}

function renderUserListItems(){
  const list=$("uList");
  if(!list)return;
  const users=getUsers();
  if(users.length===0){list.innerHTML='<div class="empty-state">'+t("noUsers")+'</div>';return;}
  list.innerHTML="";
  users.forEach((u,i)=>{
    const item=document.createElement("div");
    item.className="list-item";
    const checked=state.selection.users.has(u._id)?" checked":"";
    const genderKey=u.gender==="male"?"male":u.gender==="female"?"female":"other";
    let verifyLine;
    if(needsVerifyCode(u.uid)){
      verifyLine='<div class="list-item-meta">'+t("verifyCode")+': '+esc(u.verifyCode||generateVerifyCode(u.uid))+'</div>';
    }else{
      verifyLine='<div class="list-item-meta">'+t("noVerifyCode")+'</div>';
    }
    item.innerHTML='<input type="checkbox" data-sel="'+u._id+'"'+checked+'><div class="list-item-body"><div class="list-item-title">'+esc(u.name)+' · '+t(genderKey)+'</div><div class="list-item-meta selectable">'+t("uid")+': '+esc(u.uid)+'</div>'+verifyLine+'</div><div class="list-item-actions"><button class="btn btn-danger btn-sm" data-del="'+u._id+'">'+t("delete")+'</button></div>';
    list.appendChild(item);
  });
  list.querySelectorAll("[data-del]").forEach((btn)=>{
    btn.onclick=()=>{
      const id=btn.dataset.del;
      confirmDialog(t("delete"),t("deleteConfirm"),t("delete"),t("cancel"),()=>{
        state.appData.users=state.appData.users.filter((u)=>u._id!==id);
        state.selection.users.delete(id);
        markDirty();updateStats();
        showToast(t("userDeleted"),"success");
        renderUserListItems();
        updateListToolbar("u");
      });
    };
  });
  list.querySelectorAll("[data-sel]").forEach((cb)=>{
    cb.onchange=()=>{
      const id=cb.dataset.sel;
      if(cb.checked)state.selection.users.add(id);
      else state.selection.users.delete(id);
      updateListToolbar("u");
    };
  });
}

function bindTypeTabDragEvents(){
  const tabs=document.querySelectorAll('#qTypeTabs .type-tab[data-type]');
  tabs.forEach((tab)=>{
    tab.addEventListener('dragstart',(e)=>{
      state.dragSrcType=tab.dataset.type;
      tab.classList.add('dragging');
      if(e.dataTransfer){
        e.dataTransfer.effectAllowed='move';
        try{
          if(TRANSPARENT_DRAG_CANVAS)e.dataTransfer.setDragImage(TRANSPARENT_DRAG_CANVAS,0,0);
          e.dataTransfer.setData('text/plain',state.dragSrcType);
        }catch(_){}
      }
    });
    tab.addEventListener('dragover',(e)=>{
      e.preventDefault();
      if(!state.dragSrcType||state.dragSrcType===tab.dataset.type)return;
      if(e.dataTransfer)e.dataTransfer.dropEffect='move';
      const rect=tab.getBoundingClientRect();
      const midX=rect.left+rect.width/2;
      tab.classList.toggle('drag-over-left',e.clientX<midX);
      tab.classList.toggle('drag-over-right',e.clientX>=midX);
    });
    tab.addEventListener('dragleave',(e)=>{
      if(!tab.contains(e.relatedTarget)){
        tab.classList.remove('drag-over-left','drag-over-right');
      }
    });
    tab.addEventListener('drop',(e)=>{
      e.preventDefault();
      const rect=tab.getBoundingClientRect();
      const midX=rect.left+rect.width/2;
      const isBefore=e.clientX<midX;
      tab.classList.remove('drag-over-left','drag-over-right');
      const targetType=tab.dataset.type;
      if(!state.dragSrcType||state.dragSrcType===targetType){state.dragSrcType=null;return;}
      const order=getTypeOrder();
      const srcIdx=order.indexOf(state.dragSrcType);
      if(srcIdx<0){state.dragSrcType=null;return;}
      order.splice(srcIdx,1);
      const newTgtIdx=order.indexOf(targetType);
      const insertAt=isBefore?newTgtIdx:newTgtIdx+1;
      order.splice(insertAt,0,state.dragSrcType);
      state.appData.settings.typeOrder=order;
      state.dragSrcType=null;
      markDirty();
      renderQuestionEditorModal();
    });
    tab.addEventListener('dragend',()=>{
      tab.classList.remove('dragging');
      document.querySelectorAll('#qTypeTabs .type-tab').forEach((el)=>{
        el.classList.remove('drag-over-left','drag-over-right');
      });
      state.dragSrcType=null;
    });
  });
}

function renderQuestionEditorModal(){
  let html='<h2>'+t("setQuestions")+'</h2>';
  const order=getTypeOrder();
  html+='<div class="type-tabs" id="qTypeTabs">';
  html+='<button type="button" class="type-tab'+(state.qFilter==="all"?" active":"")+'" data-filter="all">'+t("allTypes")+'</button>';
  order.forEach((tp)=>{
    const active=state.qFilter===tp?" active":"";
    html+='<button type="button" class="type-tab'+active+'" data-type="'+tp+'" draggable="true">'+typeLabel(tp)+'</button>';
  });
  html+='</div>';
  html+='<div class="type-tabs-hint"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/></svg><span>'+t("typeTabsHint")+'</span></div>';
  html+='<div style="display:flex;justify-content:flex-end"><button class="btn btn-primary btn-sm" id="qAddBtn">+ '+t("addQuestion")+'</button></div>';
  html+=buildListToolbar("q");
  html+='<div class="list-container" id="qList" style="max-height:360px"></div>';
  html+='<div class="modal-actions"><button class="btn btn-secondary" id="qClose">'+t("close")+'</button></div>';
  openModal(html,false);
  document.querySelectorAll("#qTypeTabs .type-tab").forEach((tab)=>{
    tab.onclick=()=>{
      if(tab.dataset.filter){
        state.qFilter="all";
      }else if(tab.dataset.type){
        state.qFilter=tab.dataset.type;
      }
      renderQuestionEditorModal();
    };
  });
  bindTypeTabDragEvents();
  renderQuestionListItems();
  updateListToolbar("q");
  bindListToolbar("q",renderQuestionListItems);
  $("qAddBtn").onclick=()=>openQuestionWizard();
  $("qClose").onclick=()=>{state.selection.questions.clear();closeModal();updateStats();};
}

function renderUserEditorModal(){
  let html='<h2>'+t("setUsers")+'</h2>';
  html+='<div style="display:flex;justify-content:flex-end"><button class="btn btn-primary btn-sm" id="uAddBtn">+ '+t("addUser")+'</button></div>';
  html+=buildListToolbar("u");
  html+='<div class="list-container" id="uList" style="max-height:400px"></div>';
  html+='<div class="modal-actions"><button class="btn btn-secondary" id="uClose">'+t("close")+'</button></div>';
  openModal(html,false);
  renderUserListItems();
  updateListToolbar("u");
  bindListToolbar("u",renderUserListItems);
  $("uAddBtn").onclick=()=>openUserForm();
  $("uClose").onclick=()=>{state.selection.users.clear();closeModal();updateStats();};
}

function openQuestionEditor(){state.selection.questions.clear();renderQuestionEditorModal();}
function openUserEditor(){state.selection.users.clear();renderUserEditorModal();}

function openQuestionWizard(){
  const defaultType=(state.qFilter&&state.qFilter!=="all")?state.qFilter:"single";
  state.wizard={
    step:1,
    type:defaultType,
    image:"",
    audio:"",
    audioText:"",
    title:"",
    optionCount:4,
    options:["","","",""],
    correct: defaultType==="fill" ? [""] : (isSubjectiveType(defaultType) ? null : [0]),
    includeImage:false,
    includeAudio:false,
    includeExplanation:false,
    explanation:"",
    blankAnswers: defaultType==="fill" ? [""] : []
  };
  renderWizard();
}

function updateWizardBlankHint(){
  const hint=$("wBlankHint");
  if(!hint)return;
  const title=$("wTitle")?$("wTitle").value:state.wizard.title;
  const count=countBlanks(title);
  if(count===0){
    hint.textContent=t("blankHintEmpty");
    hint.classList.remove("has-blanks");
  }else{
    hint.textContent=t("blankHint",count);
    hint.classList.add("has-blanks");
  }
}

function renderWizard(){
  const w=state.wizard;
  let html='<h2>'+t("addQuestion")+'</h2>'+renderStepIndicator();
  if(w.step===1){
    html+='<h3>'+t("step1")+'</h3>';
    let typeRadios="";
    QUESTION_TYPES.forEach((tp)=>{
      const checked=w.type===tp?" checked":"";
      typeRadios+='<label class="radio-option"><input type="radio" name="wType" value="'+tp+'"'+checked+'><span>'+typeLabel(tp)+'</span></label>';
    });
    html+='<div class="form-group"><label>'+t("questionType")+'</label><div class="radio-row" id="wTypeGroup">'+typeRadios+'</div></div>';
    if(w.type==="fill"){
      const blankCount=countBlanks(w.title);
      const hintText=blankCount===0?t("blankHintEmpty"):t("blankHint",blankCount);
      const hintCls=blankCount===0?"":" has-blanks";
      html+='<div class="form-group"><label>'+t("questionText")+'</label><div class="title-input-wrap"><textarea id="wTitle" rows="3" placeholder="'+t("fillPlaceholder")+'">'+esc(w.title||"")+'</textarea><button type="button" class="add-blank-btn" id="wAddBlank" title="'+t("addBlankBtn")+'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button></div><div class="blank-hint'+hintCls+'" id="wBlankHint">'+hintText+'</div></div>';
    }else if(isSubjectiveType(w.type)){
      html+='<div class="form-group"><label>'+t("questionText")+'</label><textarea id="wTitle" rows="6" placeholder="'+t("subjectiveTitleHint")+'">'+esc(w.title||"")+'</textarea></div>';
    }else{
      html+='<div class="form-group"><label>'+t("questionText")+'</label><textarea id="wTitle" rows="3">'+esc(w.title||"")+'</textarea></div>';
    }
    html+='<div class="checkbox-row"><input type="checkbox" id="wIncludeImage"'+(w.includeImage?" checked":"")+'><span>'+t("toggleImage")+'</span></div>';
    html+='<div class="form-group" id="wImageGroup" style="display:'+(w.includeImage?"flex":"none")+'"><label>'+t("addImage")+'</label><textarea id="wImage" placeholder="'+t("questionImageHint")+'">'+esc(w.image||"")+'</textarea></div>';
    html+='<div class="checkbox-row"><input type="checkbox" id="wIncludeAudio"'+(w.includeAudio?" checked":"")+'><span>'+t("toggleAudio")+'</span></div>';
    html+='<div class="form-group" id="wAudioGroup" style="display:'+(w.includeAudio?"flex":"none")+'"><label>'+t("addAudio")+'</label><input id="wAudio" type="text" placeholder="'+t("audioHint")+'" value="'+esc(w.audio||"")+'"><label>'+t("audioTextLabel")+'</label><textarea id="wAudioText" rows="3" placeholder="'+t("audioTextHint")+'">'+esc(w.audioText||"")+'</textarea></div>';
    html+='<div class="checkbox-row"><input type="checkbox" id="wIncludeExplanation"'+(w.includeExplanation?" checked":"")+'><span>'+t("toggleExplanation")+'</span></div>';
    html+='<div class="form-group" id="wExplanationGroup" style="display:'+(w.includeExplanation?"flex":"none")+'"><label>'+t("explanationLabel")+'</label><textarea id="wExplanation" placeholder="'+t("explanationPlaceholder")+'">'+esc(w.explanation||"")+'</textarea></div>';
    html+='<div class="modal-actions"><button class="btn btn-secondary" id="wCancel">'+t("cancel")+'</button><button class="btn btn-primary" id="wNext">'+t("next")+'</button></div>';
  }else if(w.step===2){
    html+='<h3>'+t("step2")+'</h3>';
    html+='<div class="form-row"><div class="form-group"><label>'+t("optionCount")+'</label><input id="wOptCount" type="number" min="2" max="8" value="'+w.optionCount+'"></div><button class="btn btn-secondary" id="wGen">'+t("confirm")+'</button></div>';
    html+='<div id="wOptionsBox">';
    for(let i=0;i<w.optionCount;i++){
      const letter=String.fromCharCode(65+i);
      html+='<div class="option-input-row"><div class="letter">'+letter+'</div><input type="text" id="wOpt_'+i+'" value="'+esc(w.options[i]||"")+'" placeholder="'+t("optionPlaceholder",letter)+'"></div>';
    }
    html+='</div>';
    html+='<div class="modal-actions"><button class="btn btn-secondary" id="wCancel">'+t("cancel")+'</button><button class="btn btn-secondary" id="wBack">'+t("back_btn")+'</button><button class="btn btn-primary" id="wNext">'+t("next")+'</button></div>';
  }else{
    html+='<h3>'+(w.type==="fill"?t("step3Fill"):(isSubjectiveType(w.type)?t("step3Subjective"):t("step3")))+'</h3>';
    if(w.type==="multiple"){
      html+='<div class="form-group"><label>'+t("correctOptions")+'</label><div id="wCorrectBox">';
      for(let i=0;i<w.optionCount;i++){
        const letter=String.fromCharCode(65+i);
        const checked=w.correct.indexOf(i)>=0?" checked":"";
        html+='<label class="checkbox-row" style="margin-bottom:6px"><input type="checkbox" data-correct="'+i+'"'+checked+'><span>'+letter+'. '+esc(w.options[i]||"")+'</span></label>';
      }
      html+='</div></div>';
    }else if(w.type==="judge"){
      const isTrue=w.correct[0]===0;
      html+='<div class="form-group"><label>'+t("correctOption")+'</label><div class="radio-row">';
      html+='<label class="radio-option"><input type="radio" name="judgeCorrect" value="0"'+(isTrue?" checked":"")+'><span style="font-size:22px;line-height:1">'+t("trueLabel")+'</span></label>';
      html+='<label class="radio-option"><input type="radio" name="judgeCorrect" value="1"'+(!isTrue?" checked":"")+'><span style="font-size:22px;line-height:1">'+t("falseLabel")+'</span></label>';
      html+='</div></div>';
    }else if(w.type==="fill"){
      const blankCount=countBlanks(w.title);
      if(blankCount===0){
        html+='<div class="empty-state">'+t("blankRequired")+'</div>';
        html+='<div class="modal-actions"><button class="btn btn-secondary" id="wCancel">'+t("cancel")+'</button><button class="btn btn-secondary" id="wBack">'+t("back_btn")+'</button></div>';
        openModal(html,false);
        $("wCancel").onclick=()=>{renderQuestionEditorModal();};
        $("wBack").onclick=()=>{collectFillAnswers();w.step=1;renderWizard();};
        return;
      }
      if(!Array.isArray(w.blankAnswers))w.blankAnswers=[];
      while(w.blankAnswers.length<blankCount)w.blankAnswers.push("");
      w.blankAnswers=w.blankAnswers.slice(0,blankCount);
      html+='<div class="form-group"><label>'+t("fillAnswer")+'</label><div id="wBlankAnswersBox">';
      for(let i=0;i<blankCount;i++){
        html+='<div class="blank-answer-row"><span class="blank-index">'+esc(t("blankAnswerLabel",i+1))+'</span><input type="text" id="wBlank_'+i+'" value="'+esc(w.blankAnswers[i]||"")+'" placeholder="'+esc(t("blankAnswerHint"))+'"></div>';
      }
      html+='</div></div>';
    }else if(isSubjectiveType(w.type)){
      html+='<div class="subjective-note">'+t("subjectiveNoAnswer")+'</div>';
    }else{
      html+='<div class="form-group"><label>'+t("correctOption")+'</label><div class="radio-row" id="wCorrectGroup" style="flex-direction:column;gap:6px">';
      for(let i=0;i<w.optionCount;i++){
        const letter=String.fromCharCode(65+i);
        const checked=w.correct[0]===i?" checked":"";
        html+='<label class="checkbox-row" style="margin-bottom:0"><input type="radio" name="wCorrect" value="'+i+'"'+checked+'><span>'+letter+'. '+esc(w.options[i]||"")+'</span></label>';
      }
      html+='</div></div>';
    }
    html+='<div class="modal-actions"><button class="btn btn-secondary" id="wCancel">'+t("cancel")+'</button><button class="btn btn-secondary" id="wBack">'+t("back_btn")+'</button><button class="btn btn-primary" id="wSave">'+t("complete")+'</button></div>';
  }
  openModal(html,false);
  $("wCancel").onclick=()=>{renderQuestionEditorModal();};
  if(w.step===1){
    document.querySelectorAll('input[name="wType"]').forEach((radio)=>{
      radio.onchange=()=>{
        if($("wTitle"))w.title=$("wTitle").value;
        if($("wImage"))w.image=$("wImage").value;
        if($("wAudio"))w.audio=$("wAudio").value;
        if($("wAudioText"))w.audioText=$("wAudioText").value;
        if($("wExplanation"))w.explanation=$("wExplanation").value;
        const oldType=w.type;
        w.type=radio.value;
        if(w.type==="fill"&&oldType!=="fill"){w.correct=[""];w.blankAnswers=[];}
        else if(isSubjectiveType(w.type)){w.correct=null;w.blankAnswers=[];}
        else if(w.type==="single"||w.type==="multiple"){w.correct=[0];}
        else if(w.type==="judge"){w.correct=[0];}
        renderWizard();
      };
    });
    if($("wAddBlank")){
      $("wAddBlank").onclick=()=>{
        const input=$("wTitle");
        const start=input.selectionStart==null?input.value.length:input.selectionStart;
        const end=input.selectionEnd==null?input.value.length:input.selectionEnd;
        const val=input.value;
        const newVal=val.slice(0,start)+BLANK_PLACEHOLDER+val.slice(end);
        input.value=newVal;
        const newPos=start+BLANK_PLACEHOLDER.length;
        input.selectionStart=newPos;
        input.selectionEnd=newPos;
        input.focus();
        w.title=newVal;
        updateWizardBlankHint();
      };
      const titleInput=$("wTitle");
      titleInput.addEventListener("input",()=>{updateWizardBlankHint();});
    }
    $("wIncludeImage").onchange=(e)=>{$("wImageGroup").style.display=e.target.checked?"flex":"none";w.includeImage=e.target.checked;};
    $("wIncludeAudio").onchange=(e)=>{$("wAudioGroup").style.display=e.target.checked?"flex":"none";w.includeAudio=e.target.checked;};
    $("wIncludeExplanation").onchange=(e)=>{$("wExplanationGroup").style.display=e.target.checked?"flex":"none";w.includeExplanation=e.target.checked;};
    const titleEl=$("wTitle");if(titleEl)setTimeout(()=>titleEl.focus(),50);
    $("wNext").onclick=()=>{
      const title=$("wTitle").value.trim();
      if(!title){showToast(t("titleRequired"),"warn");return;}
      w.title=title;
      w.image=w.includeImage?$("wImage").value.trim():"";
      w.audio=w.includeAudio?$("wAudio").value.trim():"";
      w.audioText=w.includeAudio?$("wAudioText").value.trim():"";
      w.explanation=w.includeExplanation?$("wExplanation").value.trim():"";
      if(w.type==="single"||w.type==="multiple"){
        if(w.options.length<w.optionCount)w.options=Array.from({length:w.optionCount},(_,i)=>w.options[i]||"");
        w.step=2;
      }else if(w.type==="fill"){
        const blankCount=countBlanks(w.title);
        if(blankCount===0){showToast(t("blankRequired"),"warn");return;}
        if(!Array.isArray(w.blankAnswers))w.blankAnswers=[];
        while(w.blankAnswers.length<blankCount)w.blankAnswers.push("");
        w.blankAnswers=w.blankAnswers.slice(0,blankCount);
        w.step=3;
      }else{
        w.step=3;
      }
      renderWizard();
    };
  }else if(w.step===2){
    $("wGen").onclick=()=>{
      const count=Math.max(2,Math.min(8,toNum($("wOptCount").value,4)));
      w.optionCount=count;
      const newOptions=[];
      for(let i=0;i<count;i++){const prev=$("wOpt_"+i);newOptions.push(prev?prev.value:(w.options[i]||""));}
      w.options=newOptions;
      if(Array.isArray(w.correct)){
        w.correct=w.correct.filter((i)=>i<count);
        if(w.correct.length===0)w.correct=[0];
      }
      renderWizard();
    };
    $("wBack").onclick=()=>{collectOptions();w.step=1;renderWizard();};
    $("wNext").onclick=()=>{
      collectOptions();
      for(let i=0;i<w.optionCount;i++){
        if(!w.options[i]||!w.options[i].trim()){showToast(t("optionRequired",String.fromCharCode(65+i)),"warn");return;}
      }
      w.step=3;renderWizard();
    };
  }else{
    if(w.type==="multiple"){
      document.querySelectorAll("[data-correct]").forEach((cb)=>{
        cb.onchange=()=>{
          const arr=[];
          document.querySelectorAll("[data-correct]").forEach((c)=>{if(c.checked)arr.push(Number(c.dataset.correct));});
          w.correct=arr.sort((a,b)=>a-b);
        };
      });
    }else if(w.type==="judge"){
      document.querySelectorAll('input[name="judgeCorrect"]').forEach((r)=>{
        r.onchange=()=>{
          const checked=document.querySelector('input[name="judgeCorrect"]:checked');
          if(checked)w.correct=[Number(checked.value)];
        };
      });
    }else if(w.type==="fill"){
      const blankCount=countBlanks(w.title);
      for(let i=0;i<blankCount;i++){
        const el=$("wBlank_"+i);
        if(el){el.oninput=(e)=>{w.blankAnswers[i]=e.target.value;};}
      }
    }
    $("wBack").onclick=()=>{
      collectOptions();
      if(w.type==="single"||w.type==="multiple"){w.step=2;}
      else{w.step=1;}
      renderWizard();
    };
    $("wSave").onclick=()=>{
      collectOptions();
      let finalCorrect;
      if(isSubjectiveType(w.type)){
        finalCorrect=null;
      }else if(w.type==="multiple"){
        const arr=[];
        document.querySelectorAll("[data-correct]").forEach((c)=>{if(c.checked)arr.push(Number(c.dataset.correct));});
        if(arr.length===0){showToast(t("correctOptions"),"warn");return;}
        finalCorrect=arr.sort((a,b)=>a-b);
      }else if(w.type==="judge"){
        const checked=document.querySelector('input[name="judgeCorrect"]:checked');
        if(!checked){showToast(t("correctOption"),"warn");return;}
        finalCorrect=Number(checked.value);
      }else if(w.type==="fill"){
        const blankCount=countBlanks(w.title);
        if(blankCount===0){showToast(t("blankRequired"),"warn");return;}
        const answers=[];
        for(let i=0;i<blankCount;i++){
          const el=$("wBlank_"+i);
          const val=el?el.value.trim():"";
          if(!val){showToast(t("blankAnswerRequired",i+1),"warn");return;}
          answers.push(val);
        }
        finalCorrect=answers;
      }else{
        const checked=document.querySelector('input[name="wCorrect"]:checked');
        finalCorrect=checked?parseInt(checked.value):0;
      }
      const optionsToSave=(w.type==="single"||w.type==="multiple")?w.options.slice():[];
      state.appData.questions.push({
        _id:newId(),
        type:w.type,
        title:w.title,
        image:w.image||"",
        audio:w.audio||"",
        audioText:w.audioText||"",
        options:optionsToSave,
        correct:finalCorrect,
        explanation:w.includeExplanation?(w.explanation||""):""
      });
      markDirty();
      showToast(t("questionAdded"),"success");
      renderQuestionEditorModal();
      updateStats();
    };
  }
}

function collectOptions(){
  const newOptions=[];
  for(let i=0;i<state.wizard.optionCount;i++){
    const el=$("wOpt_"+i);
    if(el)newOptions.push(el.value);
    else newOptions.push(state.wizard.options[i]||"");
  }
  state.wizard.options=newOptions;
}

function collectFillAnswers(){
  const blankCount=countBlanks(state.wizard.title);
  const answers=[];
  for(let i=0;i<blankCount;i++){
    const el=$("wBlank_"+i);
    if(el)answers.push(el.value);
    else answers.push((state.wizard.blankAnswers&&state.wizard.blankAnswers[i])||"");
  }
  state.wizard.blankAnswers=answers;
}

function openUserForm(){
  let genderRadios="";
  const genderOpts=[{v:"male",l:t("male")},{v:"female",l:t("female")},{v:"other",l:t("other")}];
  genderOpts.forEach((g,idx)=>{
    const checked=idx===0?" checked":"";
    genderRadios+='<label class="radio-option"><input type="radio" name="uGender" value="'+g.v+'"'+checked+'><span>'+g.l+'</span></label>';
  });
  openModal('<h2>'+t("addUser")+'</h2><div class="form-group"><label>'+t("userName")+'</label><input id="uName"></div><div class="form-group"><label>'+t("gender")+'</label><div class="radio-row" id="uGenderGroup">'+genderRadios+'</div></div><div class="modal-actions"><button class="btn btn-secondary" id="uCancel">'+t("cancel")+'</button><button class="btn btn-primary" id="uSave">'+t("complete")+'</button></div>',false);
  setTimeout(()=>$("uName").focus(),50);
  $("uCancel").onclick=()=>{renderUserEditorModal();};
  $("uSave").onclick=()=>{
    const name=$("uName").value.trim();
    const genderEl=document.querySelector('input[name="uGender"]:checked');
    const gender=genderEl?genderEl.value:"other";
    if(!name){showToast(t("nameRequired"),"warn");return;}
    const list=state.appData.users;
    const uidLen=state.appData.settings.uidLength;
    let uid=generateUID(list.length+1,gender,uidLen);
    let attempts=0;
    while(list.some((u)=>u.uid===uid)&&attempts<10){
      uid=generateUID(list.length+1+attempts,gender,uidLen);
      attempts++;
    }
    if(list.some((u)=>u.uid===uid)){showToast(t("uidDuplicate"),"warn");return;}
    const verifyCode=needsVerifyCode(uid)?generateVerifyCode(uid):"";
    state.appData.users.push({_id:newId(),name,gender,uid,verifyCode});
    markDirty();
    showToast(t("userAdded"),"success");
    renderUserEditorModal();
    updateStats();
  };
}

function openAdminSettings(){
  const s=state.appData.settings;
  let startMode="";
  let startCustom="";
  if(s.examStartTime){startMode="custom";startCustom=normalizeDateTime(s.examStartTime);}
  let uidRadios="";
  UID_LENGTH_OPTIONS.forEach((n)=>{
    let label;
    if(n===9)label=t("uidLength9");
    else if(n===18)label=t("uidLength18");
    else label=t("uidLength32");
    const checked=(s.uidLength===n)?" checked":"";
    uidRadios+='<label class="radio-option"><input type="radio" name="uidLen" value="'+n+'"'+checked+'><span>'+label+'</span></label>';
  });
  const presetValues=[15,30,45,60,90,120,180,0];
  let presets="";
  presetValues.forEach((v)=>{
    const label=v===0?t("examDurationUnlimited"):v+" "+t("minutes");
    const active=(s.examDuration===v)?" active":"";
    presets+='<button type="button" class="duration-preset'+active+'" data-val="'+v+'">'+label+'</button>';
  });
  let startModeRadios="";
  const startModeOpts=[
    {v:"",l:t("startModeUnlimited")},
    {v:"now",l:t("startModeNow")},
    {v:"custom",l:t("startModeCustom")}
  ];
  startModeOpts.forEach((m)=>{
    const checked=startMode===m.v?" checked":"";
    startModeRadios+='<label class="radio-option"><input type="radio" name="asStartMode" value="'+m.v+'"'+checked+'><span>'+m.l+'</span></label>';
  });
  const durVal=s.examDuration>0?s.examDuration:"";
  const noticeText=s.noticeText||"";
  const audioTestText=s.audioTestText||"";
  const qCountVal=s.examQuestionCount||0;
  const _q=s.typeQuotas||{};
  const quotaSingleVal=Math.max(0,toNum(_q.single,0));
  const quotaMultipleVal=Math.max(0,toNum(_q.multiple,0));
  const quotaJudgeVal=Math.max(0,toNum(_q.judge,0));
  const quotaFillVal=Math.max(0,toNum(_q.fill,0));
  const quotaReadingVal=Math.max(0,toNum(_q.reading,0));
  const quotaShortVal=Math.max(0,toNum(_q.short,0));
  const quotaEssayVal=Math.max(0,toNum(_q.essay,0));
  const examTitle=s.examTitle||"";
  const examSubtitle=s.examSubtitle||"";
  const customGroupDisplay=(startMode==="custom"||startMode==="now")?"flex":"none";
  openModal('<h2>'+t("adminSettings")+'</h2><h3>'+t("basicSettings")+'</h3><div class="form-group"><label>'+t("adminName")+'</label><input id="asName" value="'+esc(state.appData.admin.name)+'" placeholder="'+t("adminNameHint")+'"></div><div class="form-group"><label>'+t("subject")+'</label><input id="asSubject" value="'+esc(s.subject||"")+'" placeholder="'+t("subjectPlaceholder")+'"></div><div class="form-group"><label>'+t("examTitleLabel")+'</label><input id="asExamTitle" value="'+esc(examTitle)+'" placeholder="'+t("examTitlePlaceholder")+'"></div><div class="form-group"><label>'+t("examSubtitleLabel")+'</label><input id="asExamSubtitle" value="'+esc(examSubtitle)+'" placeholder="'+t("examSubtitlePlaceholder")+'"></div><button class="btn btn-secondary btn-sm" id="asChangePwd" style="align-self:flex-start">'+t("changePassword")+'</button><h3>'+t("examSettings")+'</h3><div class="form-group"><label>'+t("examStartMode")+'</label><div class="radio-row" id="asStartModeGroup">'+startModeRadios+'</div></div><div class="form-group" id="asStartCustomGroup" style="display:'+customGroupDisplay+'"><label>'+t("examStartMode")+'</label><input id="asStartCustom" type="datetime-local" value="'+(startCustom||"")+'"></div><div class="form-group"><label>'+t("examDuration")+'</label><input id="asDuration" type="number" min="0" value="'+durVal+'" placeholder="'+t("examDurationUnlimited")+'"><div class="duration-preset-row">'+presets+'</div></div><div class="form-group"><label>'+t("totalScore")+'</label><input id="asTotalScore" type="number" min="1" value="'+s.totalScore+'"></div><div class="form-group"><label>'+t("examQuestionCount")+'</label><input id="asQCount" type="number" min="0" value="'+qCountVal+'" placeholder="'+t("examQuestionCountHint")+'"></div><h3>'+t("typeQuotasSection")+'</h3><div class="form-row"><div class="form-group"><label>'+t("quotaSingle")+'</label><input id="asQuotaSingle" type="number" min="0" value="'+quotaSingleVal+'" placeholder="0"></div><div class="form-group"><label>'+t("quotaMultiple")+'</label><input id="asQuotaMultiple" type="number" min="0" value="'+quotaMultipleVal+'" placeholder="0"></div></div><div class="form-row"><div class="form-group"><label>'+t("quotaJudge")+'</label><input id="asQuotaJudge" type="number" min="0" value="'+quotaJudgeVal+'" placeholder="0"></div><div class="form-group"><label>'+t("quotaFill")+'</label><input id="asQuotaFill" type="number" min="0" value="'+quotaFillVal+'" placeholder="0"></div></div><div class="form-row"><div class="form-group"><label>'+t("quotaReading")+'</label><input id="asQuotaReading" type="number" min="0" value="'+quotaReadingVal+'" placeholder="0"></div><div class="form-group"><label>'+t("quotaShort")+'</label><input id="asQuotaShort" type="number" min="0" value="'+quotaShortVal+'" placeholder="0"></div><div class="form-group"><label>'+t("quotaEssay")+'</label><input id="asQuotaEssay" type="number" min="0" value="'+quotaEssayVal+'" placeholder="0"></div></div><p style="font-size:11px;color:var(--text-3);margin-top:-6px">'+t("quotaHint")+'</p><h3>'+t("uidSettings")+'</h3><div class="radio-row">'+uidRadios+'</div><h3>'+t("noticeSettings")+'</h3><div class="form-group"><textarea id="asNotice" rows="5" placeholder="'+t("noticePlaceholder")+'">'+esc(noticeText)+'</textarea><button class="btn btn-secondary btn-sm" id="asNoticePreset" style="align-self:flex-start;margin-top:6px">'+t("noticePreset")+'</button></div><h3>'+t("audioSettings")+'</h3><div class="form-group"><label>'+t("audioTestText")+'</label><textarea id="asAudioTest" rows="3" placeholder="'+t("audioTestTextHint")+'">'+esc(audioTestText)+'</textarea></div><h3>'+t("featureSettings")+'</h3><div class="checkbox-row"><input type="checkbox" id="asAllowGuest"'+(s.allowGuest?" checked":"")+'><span>'+t("allowGuest")+'</span></div><div class="checkbox-row"><input type="checkbox" id="asDisableCustom"'+(s.disableCustom?" checked":"")+'><span>'+t("disableCustom")+'</span></div><div class="checkbox-row"><input type="checkbox" id="asRequireAll"'+(s.requireAll?" checked":"")+'><span>'+t("requireAll")+'</span></div><div class="checkbox-row"><input type="checkbox" id="asShowAnswer"'+(s.showAnswer?" checked":"")+'><span>'+t("showAnswer")+'</span></div><div class="checkbox-row"><input type="checkbox" id="asRandomQ"'+(s.randomQuestions?" checked":"")+'><span>'+t("randomQuestions")+'</span></div><div class="checkbox-row"><input type="checkbox" id="asRandomO"'+(s.randomOptions?" checked":"")+'><span>'+t("randomOptions")+'</span></div><div class="checkbox-row"><input type="checkbox" id="asEnableAudio"'+(s.enableAudio?" checked":"")+'><span>'+t("enableAudio")+'</span></div><div class="checkbox-row"><input type="checkbox" id="asAudioDictation"'+(s.audioDictation?" checked":"")+'><span>'+t("audioDictation")+'</span></div><div class="checkbox-row"><input type="checkbox" id="asAllowStudentExport"'+(s.allowStudentExport?" checked":"")+'><span>'+t("allowStudentExport")+'</span></div><div class="modal-actions"><button class="btn btn-secondary" id="asCancel">'+t("cancel")+'</button><button class="btn btn-primary" id="asSave">'+t("complete")+'</button></div>',false);
  $("asChangePwd").onclick=()=>openChangePassword();
  $("asNoticePreset").onclick=()=>{$("asNotice").value=t("noticePresetDefault");};
  document.querySelectorAll(".duration-preset").forEach((btn)=>{
    btn.onclick=()=>{
      document.querySelectorAll(".duration-preset").forEach((b)=>b.classList.remove("active"));
      btn.classList.add("active");
      const v=parseInt(btn.dataset.val);
      $("asDuration").value=v>0?v:"";
    };
  });
  document.querySelectorAll('input[name="asStartMode"]').forEach((radio)=>{
    radio.onchange=()=>{
      const group=$("asStartCustomGroup");
      const v=radio.value;
      if(v==="custom"){group.style.display="flex";setTimeout(()=>$("asStartCustom").focus(),50);}
      else if(v==="now"){group.style.display="flex";$("asStartCustom").value=formatLocalDateTime(new Date());}
      else{group.style.display="none";}
    };
  });
  $("asCancel").onclick=()=>{closeModal();};
  $("asSave").onclick=()=>{
    const name=$("asName").value.trim()||"Administrator";
    const subject=$("asSubject").value.trim();
    const title=$("asExamTitle").value.trim();
    const subtitle=$("asExamSubtitle").value.trim();
    const totalScore=toNum($("asTotalScore").value,0);
    if(!totalScore||totalScore<=0){showToast(t("totalScoreInvalid"),"warn");return;}
    const qCount=Math.max(0,toNum($("asQCount").value,0));
    const modeEl=document.querySelector('input[name="asStartMode"]:checked');
    const mode=modeEl?modeEl.value:"";
    let startTime="";
    if(mode==="now"){
      startTime=formatLocalDateTime(new Date());
    }else if(mode==="custom"){
      startTime=$("asStartCustom").value||"";
      if(!startTime){showToast(t("startTimeRequired"),"warn");return;}
    }
    const uidRadio=document.querySelector('input[name="uidLen"]:checked');
    const uidLen=uidRadio?parseInt(uidRadio.value):18;
    const oldUidLen=state.appData.settings.uidLength;
    const durValInput=$("asDuration").value;
    const dur=durValInput?toNum(durValInput,0):0;
    const noticeTextVal=$("asNotice").value;
    const audioTestTextVal=$("asAudioTest").value;
    const applySettings=()=>{
      state.appData.admin.name=name;
      state.appData.settings.examStartTime=startTime;
      state.appData.settings.examDuration=dur;
      state.appData.settings.totalScore=totalScore;
      state.appData.settings.examQuestionCount=qCount;
      state.appData.settings.typeQuotas={single:Math.max(0,toNum($("asQuotaSingle").value,0)),multiple:Math.max(0,toNum($("asQuotaMultiple").value,0)),judge:Math.max(0,toNum($("asQuotaJudge").value,0)),fill:Math.max(0,toNum($("asQuotaFill").value,0)),reading:Math.max(0,toNum($("asQuotaReading").value,0)),short:Math.max(0,toNum($("asQuotaShort").value,0)),essay:Math.max(0,toNum($("asQuotaEssay").value,0))};
      state.appData.settings.uidLength=uidLen;
      state.appData.settings.subject=subject;
      state.appData.settings.examTitle=title;
      state.appData.settings.examSubtitle=subtitle;
      state.appData.settings.noticeText=noticeTextVal;
      state.appData.settings.audioTestText=audioTestTextVal;
      state.appData.settings.allowGuest=$("asAllowGuest").checked;
      state.appData.settings.disableCustom=$("asDisableCustom").checked;
      state.appData.settings.requireAll=$("asRequireAll").checked;
      state.appData.settings.showAnswer=$("asShowAnswer").checked;
      state.appData.settings.randomQuestions=$("asRandomQ").checked;
      state.appData.settings.randomOptions=$("asRandomO").checked;
      state.appData.settings.enableAudio=$("asEnableAudio").checked;
      state.appData.settings.audioDictation=$("asAudioDictation").checked;
      state.appData.settings.allowStudentExport=$("asAllowStudentExport").checked;
      markDirty();
      showToast(t("adminSettingsSaved"),"success");
      closeModal();
      updateRoleUI();
      updateStats();
      applyLang();
    };
    if(uidLen!==oldUidLen&&state.appData.users.length>0){
      confirmDialog(t("uidSettings"),t("uidChangedConfirm"),t("confirm"),t("cancel"),()=>{
        state.appData.users.forEach((u,i)=>{
          const newUid=generateUID(i+1,u.gender,uidLen);
          u.uid=newUid;
          u.verifyCode=needsVerifyCode(newUid)?generateVerifyCode(newUid):"";
        });
        applySettings();
        showToast(t("uidChangedWarn"),"success");
      });
    }else{
      applySettings();
    }
  };
}

function openChangePassword(){
  openModal('<h2>'+t("changePassword")+'</h2><div class="form-group"><label>'+t("oldPassword")+'</label><input id="cpOld" type="password" autocomplete="current-password"></div><div class="form-group"><label>'+t("newPassword")+'</label><input id="cpNew" type="password" autocomplete="new-password" placeholder="'+t("passwordHint")+'"></div><div class="form-group"><label>'+t("confirmPassword")+'</label><input id="cpConfirm" type="password" autocomplete="new-password"></div><div class="modal-actions"><button class="btn btn-secondary" id="cpCancel">'+t("cancel")+'</button><button class="btn btn-primary" id="cpSave">'+t("complete")+'</button></div>',false);
  setTimeout(()=>$("cpOld").focus(),50);
  $("cpCancel").onclick=()=>openAdminSettings();
  $("cpSave").onclick=()=>{
    const oldPwd=$("cpOld").value;
    const newPwd=$("cpNew").value;
    const confirmPwd=$("cpConfirm").value;
    if(oldPwd!==state.appData.admin.password){showToast(t("oldPasswordWrong"),"warn");return;}
    if(newPwd!==confirmPwd){showToast(t("passwordMismatch"),"warn");return;}
    if(newPwd.length<4){showToast(t("passwordTooShort"),"warn");return;}
    state.appData.admin.password=newPwd;
    markDirty();
    showToast(t("passwordChanged"),"success");
    openAdminSettings();
  };
}

function bindEvents(){
  $("settingsBtn").onclick=(e)=>{e.stopPropagation();$("dropdown").classList.toggle("open");};
  document.addEventListener("click",(e)=>{const dd=$("dropdown");const btn=$("settingsBtn");if(!dd.contains(e.target)&&!btn.contains(e.target))dd.classList.remove("open");});
  $("userCard").onclick=()=>{
    $("dropdown").classList.remove("open");
    if(state.quiz.active){showToast(t("cannotSwitchDuringExam"),"warn");return;}
    if(state.currentUser==="admin"){
      confirmDialog(t("switchUserConfirm"),t("switchUserConfirmMsg"),t("switchUserOk"),t("switchUserCancel"),()=>{
        state.currentUser="user";updateRoleUI();applyLang();
      });
    }else{
      state.currentUser="user";updateRoleUI();applyLang();
    }
  };
  $("adminCard").onclick=()=>{
    $("dropdown").classList.remove("open");
    if(state.quiz.active){showToast(t("cannotSwitchDuringExam"),"warn");return;}
    if(state.currentUser==="admin")return;
    passwordPrompt(()=>{state.currentUser="admin";updateRoleUI();applyLang();});
  };
  $("fileInput").onchange=(e)=>{const f=e.target.files[0];if(f)importDataFromFile(f);e.target.value="";};
  $("btnNewData").onclick=()=>createNewData();
  $("btnClearData").onclick=()=>{$("dropdown").classList.remove("open");clearAllData();};
  $("btnAdminImport").onclick=()=>{
    $("dropdown").classList.remove("open");
    if(state.quiz.active){showToast(t("cannotClearInExam"),"warn");return;}
    if(state.dirty){
      confirmDialog(t("unsavedConfirmTitle"),t("unsavedConfirmDesc"),t("unsavedOk"),t("unsavedCancel"),()=>{$("fileInput").click();});
    }else{
      $("fileInput").click();
    }
  };
  $("btnReImport").onclick=()=>{
    if(state.quiz.active){showToast(t("cannotClearInExam"),"warn");return;}
    if(state.dirty){
      confirmDialog(t("unsavedConfirmTitle"),t("unsavedConfirmDesc"),t("unsavedOk"),t("unsavedCancel"),()=>{$("fileInput").click();});
    }else{
      $("fileInput").click();
    }
  };
  $("actQuestions").onclick=()=>openQuestionEditor();
  $("actUsers").onclick=()=>openUserEditor();
  $("actSettings").onclick=()=>openAdminSettings();
  $("actExport").onclick=()=>exportData();
  $("btnStartQuiz").onclick=()=>{
    const win=checkExamTimeWindow();
    if(!win.ok&&win.reason==="ended"){showExpiredExamModal();return;}
    openLoginModal((user)=>startQuiz(user));
  };
  $("btnGuestQuiz").onclick=()=>{
    if(!state.appData.settings.allowGuest){showToast(t("disabledByAdmin"),"warn");return;}
    const guest={name:t("guestName"),gender:"other",uid:"GUEST-"+Date.now(),verifyCode:""};
    startQuiz(guest);
  };
  $("prevBtn").onclick=()=>{
    if(state.quiz.pendingAdvance){clearTimeout(state.quiz.pendingAdvance);state.quiz.pendingAdvance=null;}
    if(state.quiz.currentIndex>0){state.quiz.currentIndex--;updateQuizUI();}
  };
  $("nextBtn").onclick=()=>{
    if(state.quiz.pendingAdvance){clearTimeout(state.quiz.pendingAdvance);state.quiz.pendingAdvance=null;}
    if(state.quiz.currentIndex<state.quiz.questions.length-1){state.quiz.currentIndex++;updateQuizUI();}
  };
  $("btnSubmit").onclick=()=>submitQuiz(false);
  $("btnExitQuiz").onclick=()=>{confirmDialog(t("exitQuiz"),t("exitQuizConfirm"),t("confirm"),t("cancel"),restartFlow);};
  $("btnCancelWaiting").onclick=()=>{hideWaitingOverlay();restartFlow();};
  $("btnEnterFullscreen").onclick=()=>{
    const el=document.documentElement;
    const req=el.requestFullscreen||el.webkitRequestFullscreen||el.mozRequestFullScreen||el.msRequestFullscreen;
    if(req){req.call(el).catch(()=>{});}
  };
  $("btnCancelFullscreen").onclick=()=>{cancelFullscreenFlow();restartFlow();};
  $("modalOverlay").onclick=(e)=>{if(e.target===$("modalOverlay")&&state.modalClosable)closeModal();};
  $("confirmOverlay").onclick=(e)=>{if(e.target===$("confirmOverlay"))$("confirmOverlay").classList.remove("open");};
  document.addEventListener("contextmenu",(e)=>{e.preventDefault();warnThrottled(t("warningRightClick"));});
  document.addEventListener("keydown",(e)=>{
    const tag=(e.target.tagName||"").toLowerCase();
    const inField=tag==="input"||tag==="textarea"||tag==="select";
    const k=e.key.toUpperCase();
    if(e.key==="F12"){e.preventDefault();warnThrottled(t("warningDevtools"));return;}
    if(e.ctrlKey&&e.shiftKey&&(k==="I"||k==="J"||k==="C")){e.preventDefault();warnThrottled(t("warningDevtools"));return;}
    if(e.ctrlKey&&k==="U"){e.preventDefault();warnThrottled(t("warningSource"));return;}
    if(state.quiz.active&&!inField&&k.length===1&&k>="A"&&k<="Z"){
      const card=document.querySelector(".card.active");
      if(card){
        const opt=card.querySelector('.option[data-opt="'+(k.charCodeAt(0)-65)+'"]');
        if(opt){e.preventDefault();opt.click();}
      }
    }
  });
  document.addEventListener("fullscreenchange",()=>{
    if(state.fullscreen.active&&isFullscreen()){
      if(state.fullscreen.interval)clearInterval(state.fullscreen.interval);
      state.fullscreen.interval=null;
      state.fullscreen.active=false;
      $("fullscreenOverlay").classList.remove("open");
      if(state.fullscreen.onSuccess){const cb=state.fullscreen.onSuccess;state.fullscreen.onSuccess=null;cb();}
    }else if(!isFullscreen()&&state.quiz.active){
      showToast(t("fullscreenExitLogout"),"warn");
      restartFlow();
    }
  });
  window.addEventListener("beforeunload",(e)=>{
    if(state.dirty||state.quiz.active){e.preventDefault();e.returnValue="";}
  });
}

state.quiz.audioConfirmedUsers=loadAudioConfirmedUsers();
applyTheme();
applyLang();
bindEvents();
initCustomSelects();
