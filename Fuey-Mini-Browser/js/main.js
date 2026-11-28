(function(){
    'use strict';
    var C=window.Core;
    var B=window.Browser;
    
    function applyLang(){document.documentElement.lang=C.resolveLang(C.settingsStore.get().language)}
    C.settingsStore.subscribe(applyLang);
    applyLang();
    
    var AGREEMENTS={
    'zh-CN':'Fuey Mini Browser 用户协议\n\n更新日期：2026 年 11 月 28 日\n生效日期：2026 年 11 月 28 日\n\n欢迎使用 Fuey Mini Browser（以下简称「本产品」）。本协议是您与本产品开发者（以下简称「我们」）之间就使用本产品所订立的协议。请您在使用本产品前仔细阅读本协议全部内容。您通过点击「同意」按钮或实际使用本产品，即视为您已充分理解并接受本协议的全部条款。如您不同意本协议任何内容，请立即停止使用本产品并关闭本页面。\n\n一、服务说明\n1.1 本产品是一款本地运行的浏览器首页与轻量浏览工具，所有功能均在您的浏览器本地运行，无需注册账号即可使用。\n1.2 本产品提供标签页管理、搜索、收藏、快捷方式、密码管理、Ai 对话、翻译、插件、主题等功能。\n1.3 我们保留随时增加、修改或终止部分功能的权利，恕不另行通知。\n1.4 本产品不提供任何形式的内容托管服务。所有通过本产品访问的网页均由第三方提供。\n\n二、数据与隐私\n2.1 数据存储：本产品的全部数据（包括但不限于书签、快捷方式、密码、对话记录、历史、设置等）均存储于您本地浏览器的 localStorage / sessionStorage 中，不会上传至任何服务器。\n2.2 加密保护：密码字段使用 Web Crypto API 的 AES-GCM 算法加密存储。密钥同样保存在本机。因此本产品不能替代专业密码管理工具。如设备或浏览器被他人控制，数据仍有泄露风险。\n2.3 第三方请求：当您使用 Ai 对话、翻译功能时，请求将发送至您在设置中配置的第三方接口（如 OpenAI、DeepSeek 等）。这些请求将受对应服务商的隐私政策约束。我们不对第三方服务的数据处理行为负责。\n2.4 无痕模式：无痕模式下所有数据仅存储于 sessionStorage。关闭窗口后自动清除。\n2.5 Cookies：本产品不使用 Cookies。本产品不使用任何追踪、分析或广告代码。\n2.6 数据删除：您可在「设置 - 数据」中随时清除全部本地数据。清除后无法恢复。\n\n三、用户行为规范\n3.1 您承诺不利用本产品从事任何违反中华人民共和国法律法规及您所在地法律法规的活动。\n3.2 您承诺不利用本产品访问、复制、传播任何侵犯他人知识产权、隐私权、名誉权或其他合法权益的内容。\n3.3 您承诺不对本产品进行反向工程、反向编译、破解、篡改或任何试图获取源代码的行为。\n3.4 您承诺不通过自动化脚本、爬虫等手段对本产品进行压力测试或恶意攻击。\n3.5 如您违反上述规定，我们有权停止向您提供服务。并保留追究法律责任的权利。\n\n四、知识产权\n4.1 本产品的源代码、界面设计、图标、文档等知识产权归 Fuey 所有。受中华人民共和国著作权法及国际版权公约保护。\n4.2 未经书面授权，您不得复制、修改、分发、出售、出租、再许可本产品的任何部分。\n4.3 本产品中引用的第三方商标（如 Google、Bing、OpenAI 等）归对应权利人所有。本产品与其无隶属关系。\n\n五、免责声明\n5.1 本产品按「现状」提供。我们不对其适用性、可靠性、无中断性作出任何明示或默示的保证。\n5.2 因使用或无法使用本产品导致的任何直接或间接损失（包括但不限于数据丢失、设备损坏、业务中断、利润损失），我们不承担任何责任。\n5.3 本产品中展示的第三方网站内容与我们无关。我们不承担任何审查或担保义务。\n5.4 因不可抗力（包括但不限于自然灾害、网络故障、政府行为、黑客攻击）导致的服务中断，我们不承担责任。\n\n六、协议变更\n6.1 我们可能随时修订本协议。修订后的协议将在产品内公布。恕不另行通知。\n6.2 如您在协议修订后继续使用本产品，即视为您接受修订后的协议。\n6.3 如您不同意修订后的协议，请立即停止使用本产品并清除全部本地数据。\n\n七、未成年人保护\n7.1 如您是未满 14 周岁的未成年人，请在监护人陪同下阅读本协议并使用本产品。\n7.2 未成年人使用本产品时，监护人应对其行为进行指导与监督。\n\n八、法律适用与争议解决\n8.1 本协议的订立、效力、解释、履行及争议解决均适用中华人民共和国法律。\n8.2 因本协议引起的或与本协议有关的任何争议，双方应友好协商解决。协商不成的，任何一方均可向开发者所在地有管辖权的人民法院提起诉讼。\n\n九、其他\n9.1 本协议构成双方就本产品达成的完整协议，取代此前所有口头或书面的沟通。\n9.2 如本协议中的任何条款被认定为无效或不可执行，不影响其余条款的效力。\n9.3 我们未行使或延迟行使本协议项下的任何权利，不构成对该权利的放弃。\n\n如您对本协议有任何疑问，请停止使用本产品。\n\n© 2020-2026 Fuey All Rights Reserved',
    'en-US':'Fuey Mini Browser User Agreement\n\nLast Updated: November 28, 2026\nEffective Date: November 28, 2026\n\nWelcome to Fuey Mini Browser ("the Product"). This Agreement is between you and the developer of the Product ("we", "us"). Please read this Agreement carefully before using the Product. By clicking "Agree" or actually using the Product, you acknowledge that you have fully understood and accepted all terms of this Agreement. If you do not agree with any part of this Agreement, please immediately stop using the Product and close this page.\n\n1. Service Description\n1.1 The Product is a locally running browser homepage and lightweight browsing tool. All features run locally in your browser. No account registration is required.\n1.2 The Product provides tab management, search, bookmarks, shortcuts, password management, Ai chat, translation, plugins, themes, and other features.\n1.3 We reserve the right to add, modify, or discontinue any feature at any time without prior notice.\n1.4 The Product does not host any content. All web pages accessed through the Product are provided by third parties.\n\n2. Data and Privacy\n2.1 Data Storage: All data of the Product (including but not limited to bookmarks, shortcuts, passwords, chat records, history, settings) is stored in your local browser\'s localStorage / sessionStorage. It is never uploaded to any server.\n2.2 Encryption: Password fields are encrypted using the AES-GCM algorithm of the Web Crypto API. The key is also stored locally. Therefore, the Product cannot replace a professional password manager. If your device or browser is controlled by others, data may still be at risk.\n2.3 Third-Party Requests: When you use Ai chat or translation features, requests will be sent to the third-party endpoints you configured (such as OpenAI, DeepSeek). These requests are subject to the corresponding provider\'s privacy policy. We are not responsible for third-party data handling.\n2.4 Incognito Mode: In Incognito mode, all data is stored only in sessionStorage and cleared when the window is closed.\n2.5 Cookies: The Product does not use cookies. It does not use any tracking, analytics, or advertising code.\n2.6 Data Deletion: You can clear all local data at any time in "Settings - Data". This cannot be undone.\n\n3. User Conduct\n3.1 You agree not to use the Product for any activity that violates the laws of the People\'s Republic of China or your local jurisdiction.\n3.2 You agree not to use the Product to access, copy, or distribute content that infringes any third party\'s intellectual property, privacy, reputation, or other legitimate rights.\n3.3 You agree not to reverse engineer, decompile, crack, tamper with, or attempt to obtain the source code of the Product.\n3.4 You agree not to use automated scripts, crawlers, or other means to conduct stress tests or malicious attacks against the Product.\n3.5 If you violate the above provisions, we may terminate your access and reserve the right to pursue legal liability.\n\n4. Intellectual Property\n4.1 All intellectual property rights in the source code, UI design, icons, and documentation of the Product belong to Fuey. They are protected by the Copyright Law of the People\'s Republic of China and international copyright conventions.\n4.2 Without written authorization, you may not copy, modify, distribute, sell, rent, or sublicense any part of the Product.\n4.3 Third-party trademarks referenced in the Product (such as Google, Bing, OpenAI) belong to their respective owners. The Product has no affiliation with them.\n\n5. Disclaimer\n5.1 The Product is provided "AS IS". We make no express or implied warranty of fitness, reliability, or uninterrupted availability.\n5.2 We shall not be liable for any direct or indirect losses (including but not limited to data loss, device damage, business interruption, or lost profits) arising from the use or inability to use the Product.\n5.3 Content of third-party websites displayed through the Product is unrelated to us. We assume no review or warranty obligations.\n5.4 We shall not be liable for service interruptions caused by force majeure (including but not limited to natural disasters, network failures, government actions, or hacker attacks).\n\n6. Changes to this Agreement\n6.1 We may revise this Agreement at any time. The revised agreement will be published within the Product without further notice.\n6.2 If you continue to use the Product after the revision, you are deemed to have accepted the revised agreement.\n6.3 If you do not agree with the revised agreement, please immediately stop using the Product and clear all local data.\n\n7. Protection of Minors\n7.1 If you are a minor under 14 years old, please read this Agreement under the guidance of a guardian before using the Product.\n7.2 Guardians should guide and supervise minors\' use of the Product.\n\n8. Governing Law and Dispute Resolution\n8.1 The formation, validity, interpretation, performance, and dispute resolution of this Agreement shall be governed by the laws of the People\'s Republic of China.\n8.2 Any dispute arising from or in connection with this Agreement shall be resolved through friendly negotiation. If negotiation fails, either party may file a lawsuit in the competent court where the developer resides.\n\n9. Miscellaneous\n9.1 This Agreement constitutes the entire agreement between the parties regarding the Product and supersedes all prior oral or written communications.\n9.2 If any provision of this Agreement is held to be invalid or unenforceable, the remaining provisions shall remain in effect.\n9.3 Our failure or delay in exercising any right under this Agreement shall not constitute a waiver of that right.\n\nIf you have any questions about this Agreement, please stop using the Product.\n\n© 2020-2026 Fuey All Rights Reserved',
    'ja-JP':'Fuey Mini Browser 利用規約\n\n最終更新日：2026 年 11 月 28 日\n発効日：2026 年 11 月 28 日\n\nFuey Mini Browser（以下「本製品」）へようこそ。本規約は、お客様と本製品の開発者（以下「当方」）との間で、本製品の利用に関して締結される契約です。本製品をご利用になる前に、本規約の全文をよくお読みください。「同意」ボタンをクリックするか本製品を実際に使用することにより、お客様は本規約の全条項を十分に理解し、これに同意したものとみなされます。本規約のいずれかの内容に同意されない場合は、直ちに本製品のご利用を中止し、本ページを閉じてください。\n\n第 1 条 サービスの説明\n1.1 本製品は、ローカルで動作するブラウザのホームページ兼軽量ブラウジングツールです。すべての機能はお客様のブラウザ内でローカルに動作します。アカウント登録は不要です。\n1.2 本製品は、タブ管理、検索、ブックマーク、ショートカット、パスワード管理、Ai チャット、翻訳、プラグイン、テーマなどの機能を提供します。\n1.3 当方は、予告なくいつでも機能の追加・変更・終了を行う権利を留保します。\n1.4 本製品はいかなる形態のコンテンツホスティングサービスも提供しません。本製品を介してアクセスするすべての Web ページは第三者により提供されます。\n\n第 2 条 データとプライバシー\n2.1 データの保存：本製品のすべてのデータ（ブックマーク、ショートカット、パスワード、チャット履歴、履歴、設定などを含みます）は、お客様のローカルブラウザの localStorage / sessionStorage に保存されます。いかなるサーバーにもアップロードされません。\n2.2 暗号化：パスワードフィールドは Web Crypto API の AES-GCM アルゴリズムで暗号化されます。鍵もローカルに保存されるため、本製品は専門のパスワード管理ツールの代わりにはなりません。デバイスまたはブラウザが第三者に制御されている場合、データが漏洩するリスクがあります。\n2.3 第三者へのリクエスト：Ai チャットまたは翻訳機能を使用する際、リクエストはお客様が設定した第三者エンドポイント（OpenAI、DeepSeek など）に送信されます。これらのリクエストは各プロバイダーのプライバシーポリシーに従います。当方は第三者によるデータ処理について責任を負いません。\n2.4 シークレットモード：シークレットモードではすべてのデータは sessionStorage にのみ保存され、ウィンドウを閉じると自動的に消去されます。\n2.5 Cookie：本製品は Cookie を使用しません。トラッキング、分析、広告コードも使用しません。\n2.6 データ削除：「設定 - データ」からいつでも全ローカルデータを消去できます。消去後は復元できません。\n\n第 3 条 ユーザーの行動規範\n3.1 お客様は、中華人民共和国の法律またはお客様の現地法に違反する活動に本製品を使用しないことに同意します。\n3.2 お客様は、第三者の知的財産権、プライバシー権、名誉権その他の正当な権利を侵害するコンテンツにアクセス、複製、配布するために本製品を使用しないことに同意します。\n3.3 お客様は、本製品のリバースエンジニアリング、逆コンパイル、クラック、改ざん、またはソースコードの取得を試みないことに同意します。\n3.4 お客様は、自動化スクリプト、クローラーその他の手段を用いて本製品に対してストレステストや悪意のある攻撃を行わないことに同意します。\n3.5 お客様が上記の規定に違反した場合、当方はサービスの提供を停止し、法的責任を追及する権利を留保します。\n\n第 4 条 知的財産権\n4.1 本製品のソースコード、UI デザイン、アイコン、ドキュメントなどの知的財産権は Fuey に帰属し、中華人民共和国著作権法および国際著作権条約により保護されています。\n4.2 書面による許可なく、本製品のいかなる部分も複製、改変、配布、販売、貸与、再許諾することはできません。\n4.3 本製品で参照される第三者の商標（Google、Bing、OpenAI など）は各権利者に帰属します。本製品はそれらと提携関係にありません。\n\n第 5 条 免責事項\n5.1 本製品は「現状のまま」提供され、当方はその適合性、信頼性、中断されない可用性についていかなる明示的または黙示的な保証も行いません。\n5.2 本製品の使用または使用不能から生じる直接的または間接的な損害について、当方は一切責任を負いません。\n5.3 本製品を通じて表示される第三者の Web サイトのコンテンツは当方とは無関係であり、当方は審査または保証の義務を負いません。\n5.4 不可抗力によるサービス中断について、当方は責任を負いません。\n\n第 6 条 規約の変更\n6.1 当方はいつでも本規約を改訂することがあります。改訂後の規約は本製品内で公開され、別途通知は行いません。\n6.2 改訂後も本製品を継続して使用する場合、お客様は改訂後の規約に同意したものとみなされます。\n6.3 改訂後の規約に同意されない場合は、直ちに本製品の使用を中止し、すべてのローカルデータを消去してください。\n\n第 7 条 未成年者の保護\n7.1 14 歳未満の未成年者は、保護者の同伴のもとで本規約を読み、本製品を使用してください。\n7.2 未成年者が本製品を使用する場合、保護者はその行為を指導・監督するものとします。\n\n第 8 条 準拠法および紛争解決\n8.1 本規約の成立、効力、解釈、履行および紛争解決には中華人民共和国の法律が適用されます。\n8.2 本規約に起因または関連する紛争は、友好的な協議により解決するものとします。協議が成立しない場合、いずれの当事者も開発者の所在地を管轄する裁判所に訴訟を提起することができます。\n\n第 9 条 その他\n9.1 本規約は、本製品に関する両当事者間の完全な合意を構成し、以前のすべての口頭または書面によるコミュニケーションに取って代わります。\n9.2 本規約のいずれかの条項が無効または執行不能と判断された場合でも、残りの条項の効力は維持されます。\n9.3 当方が本規約に基づく権利を行使しない、または行使を遅延した場合でも、その権利の放棄とはみなされません。\n\n本規約についてご不明な点がある場合は、本製品の使用を中止してください。\n\n© 2020-2026 Fuey All Rights Reserved',
    'ko-KR':'Fuey Mini Browser 사용자 약관\n\n최종 업데이트: 2026년 11월 28일\n발효일: 2026년 11월 28일\n\nFuey Mini Browser(이하 "본 제품")에 오신 것을 환영합니다. 본 약관은 귀하와 본 제품 개발자(이하 "당사") 간에 본 제품 사용에 관해 체결되는 계약입니다. 본 제품을 사용하기 전에 본 약관의 전체 내용을 주의 깊게 읽어 주십시오. "동의" 버튼을 클릭하거나 본 제품을 실제로 사용함으로써 귀하는 본 약관의 모든 조항을 충분히 이해하고 수락한 것으로 간주됩니다. 본 약관의 어떤 내용에도 동의하지 않으시면 즉시 본 제품 사용을 중단하고 이 페이지를 닫아 주십시오.\n\n제1조 서비스 설명\n1.1 본 제품은 로컬에서 실행되는 브라우저 홈페이지이자 경량 브라우징 도구입니다. 모든 기능은 귀하의 브라우저에서 로컬로 실행되며 계정 등록이 필요하지 않습니다.\n1.2 본 제품은 탭 관리, 검색, 북마크, 바로가기, 비밀번호 관리, Ai 채팅, 번역, 플러그인, 테마 등의 기능을 제공합니다.\n1.3 당사는 사전 통지 없이 언제든지 기능을 추가, 수정 또는 중단할 권리를 보유합니다.\n1.4 본 제품은 어떠한 형태의 콘텐츠 호스팅 서비스도 제공하지 않습니다. 본 제품을 통해 액세스하는 모든 웹 페이지는 제3자가 제공합니다.\n\n제2조 데이터 및 개인정보\n2.1 데이터 저장: 본 제품의 모든 데이터는 귀하의 로컬 브라우저 localStorage / sessionStorage에 저장되며 어떠한 서버에도 업로드되지 않습니다.\n2.2 암호화: 비밀번호 필드는 Web Crypto API의 AES-GCM 알고리즘으로 암호화됩니다. 키도 로컬에 저장되므로 본 제품은 전문 비밀번호 관리 도구를 대체할 수 없습니다.\n2.3 제3자 요청: Ai 채팅 또는 번역 기능을 사용할 때 요청은 귀하가 설정한 제3자 엔드포인트로 전송됩니다. 이러한 요청은 해당 제공업체의 개인정보 보호정책을 따릅니다.\n2.4 시크릿 모드: 시크릿 모드에서는 모든 데이터가 sessionStorage에만 저장되며 창을 닫으면 자동으로 삭제됩니다.\n2.5 쿠키: 본 제품은 쿠키, 추적, 분석 또는 광고 코드를 사용하지 않습니다.\n2.6 데이터 삭제: "설정 - 데이터"에서 언제든지 모든 로컬 데이터를 삭제할 수 있습니다. 삭제 후에는 복구할 수 없습니다.\n\n제3조 사용자 행동 규범\n3.1 귀하는 중화인민공화국 법률 또는 귀하의 현지 법률을 위반하는 활동에 본 제품을 사용하지 않을 것에 동의합니다.\n3.2 귀하는 제3자의 권리를 침해하는 콘텐츠에 액세스, 복사 또는 배포하기 위해 본 제품을 사용하지 않을 것에 동의합니다.\n3.3 귀하는 본 제품을 리버스 엔지니어링, 디컴파일, 크래킹, 변조하지 않을 것에 동의합니다.\n3.4 귀하는 자동화 스크립트, 크롤러 또는 기타 수단을 통해 본 제품에 대해 스트레스 테스트나 악의적인 공격을 수행하지 않을 것에 동의합니다.\n3.5 위반 시 당사는 서비스 제공을 중단하고 법적 책임을 추궁할 권리를 보유합니다.\n\n제4조 지적 재산권\n4.1 본 제품의 소스 코드, UI 디자인, 아이콘, 문서 등의 지적 재산권은 Fuey에 귀속되며 중화인민공화국 저작권법 및 국제 저작권 협약에 의해 보호됩니다.\n4.2 서면 승인 없이 본 제품의 어떠한 부분도 복사, 수정, 배포, 판매, 대여 또는 재허가할 수 없습니다.\n4.3 본 제품에서 참조되는 제3자 상표는 각 권리자에게 귀속됩니다. 본 제품은 이들과 제휴 관계가 없습니다.\n\n제5조 면책 조항\n5.1 본 제품은 "있는 그대로" 제공되며 당사는 그 적합성, 신뢰성, 중단 없는 가용성에 대해 보증하지 않습니다.\n5.2 본 제품 사용으로 인한 직간접적 손실에 대해 당사는 책임을 지지 않습니다.\n5.3 제3자 웹사이트 콘텐츠는 당사와 무관하며 당사는 검토 또는 보증 의무를 지지 않습니다.\n5.4 불가항력으로 인한 서비스 중단에 대해 당사는 책임을 지지 않습니다.\n\n제6조 약관 변경\n6.1 당사는 언제든지 본 약관을 개정할 수 있습니다. 개정된 약관은 본 제품 내에 게시되며 별도로 통지하지 않습니다.\n6.2 개정 후에도 본 제품을 계속 사용하는 경우 귀하는 개정된 약관에 동의한 것으로 간주됩니다.\n6.3 개정된 약관에 동의하지 않으시면 즉시 본 제품 사용을 중단하고 모든 로컬 데이터를 삭제해 주십시오.\n\n제7조 미성년자 보호\n7.1 만 14세 미만의 미성년자는 보호자와 함께 본 약관을 읽고 본 제품을 사용해 주십시오.\n7.2 미성년자가 본 제품을 사용할 때 보호자는 그 행위를 지도하고 감독해야 합니다.\n\n제8조 준거법 및 분쟁 해결\n8.1 본 약관의 성립, 효력, 해석, 이행 및 분쟁 해결에는 중화인민공화국 법률이 적용됩니다.\n8.2 분쟁은 우호적 협상으로 해결해야 합니다. 협상이 성립되지 않는 경우 어느 당사자든 개발자 소재지의 관할 법원에 소송을 제기할 수 있습니다.\n\n제9조 기타\n9.1 본 약관은 본 제품에 관한 양 당사자 간의 완전한 합의를 구성합니다.\n9.2 본 약관의 어느 조항이 무효로 판단되더라도 나머지 조항의 효력은 유지됩니다.\n9.3 당사가 권리를 행사하지 않거나 행사를 지연하더라도 해당 권리의 포기로 간주되지 않습니다.\n\n본 약관에 관해 궁금한 점이 있으시면 본 제품 사용을 중단해 주십시오.\n\n© 2020-2026 Fuey All Rights Reserved',
    'fr-FR':'Contrat d’utilisation de Fuey Mini Browser\n\nDernière mise à jour : 28 novembre 2026\nDate d’entrée en vigueur : 28 novembre 2026\n\nBienvenue dans Fuey Mini Browser (« le Produit »). Le présent Contrat est conclu entre vous et le développeur du Produit (« nous »). Veuillez lire attentivement l’intégralité de ce Contrat avant d’utiliser le Produit. En cliquant sur « Accepter » ou en utilisant effectivement le Produit, vous reconnaissez avoir pleinement compris et accepté toutes les clauses du présent Contrat. Si vous n’êtes pas d’accord avec l’une des dispositions, veuillez immédiatement cesser d’utiliser le Produit et fermer cette page.\n\n1. Description du service\n1.1 Le Produit est une page d’accueil de navigateur et un outil de navigation légère fonctionnant localement. Toutes les fonctionnalités s’exécutent localement dans votre navigateur. Aucune inscription de compte n’est requise.\n1.2 Le Produit propose la gestion des onglets, la recherche, les favoris, les raccourcis, la gestion des mots de passe, le chat Ai, la traduction, les extensions, les thèmes, etc.\n1.3 Nous nous réservons le droit d’ajouter, de modifier ou de supprimer toute fonctionnalité à tout moment sans préavis.\n1.4 Le Produit n’héberge aucun contenu. Toutes les pages Web consultées via le Produit sont fournies par des tiers.\n\n2. Données et confidentialité\n2.1 Stockage : Toutes les données du Produit sont stockées dans le localStorage / sessionStorage de votre navigateur local. Elles ne sont jamais transmises à un serveur.\n2.2 Chiffrement : Les champs de mot de passe sont chiffrés à l’aide de l’algorithme AES-GCM de l’API Web Crypto. La clé est également stockée localement. Le Produit ne peut donc pas remplacer un gestionnaire de mots de passe professionnel.\n2.3 Requêtes tierces : Lorsque vous utilisez le chat Ai ou la traduction, les requêtes sont envoyées aux points de terminaison tiers que vous avez configurés. Ces requêtes sont soumises à la politique de confidentialité de chaque fournisseur.\n2.4 Mode navigation privée : En navigation privée, toutes les données sont stockées uniquement dans sessionStorage et effacées à la fermeture de la fenêtre.\n2.5 Cookies : Le Produit n’utilise pas de cookies ni de code de suivi, d’analyse ou publicitaire.\n2.6 Suppression : Vous pouvez effacer toutes les données locales à tout moment dans « Paramètres - Données ». Cette action est irréversible.\n\n3. Règles de conduite\n3.1 Vous vous engagez à ne pas utiliser le Produit pour des activités enfreignant les lois de la République populaire de Chine ou votre juridiction locale.\n3.2 Vous vous engagez à ne pas utiliser le Produit pour accéder, copier ou diffuser des contenus portant atteinte aux droits de tiers.\n3.3 Vous vous engagez à ne pas procéder à l’ingénierie inverse, à la décompilation, au crackage ou à la modification du Produit.\n3.4 Vous vous engagez à ne pas utiliser de scripts automatisés ou d’autres moyens pour effectuer des tests de charge ou des attaques malveillantes.\n3.5 En cas de violation, nous pouvons suspendre votre accès et engager des poursuites.\n\n4. Propriété intellectuelle\n4.1 Tous les droits de propriété intellectuelle relatifs au Produit appartiennent à Fuey. Ils sont protégés par la loi sur le droit d’auteur de la République populaire de Chine et les conventions internationales.\n4.2 Sans autorisation écrite, vous ne pouvez pas copier, modifier, distribuer, vendre, louer ou sous-licencier toute partie du Produit.\n4.3 Les marques tierces référencées dans le Produit appartiennent à leurs propriétaires respectifs.\n\n5. Clause de non-responsabilité\n5.1 Le Produit est fourni « en l’état ». Nous n’offrons aucune garantie expresse ou implicite.\n5.2 Nous déclinons toute responsabilité pour les pertes directes ou indirectes résultant de l’utilisation du Produit.\n5.3 Le contenu des sites tiers affichés via le Produit ne nous concerne pas.\n5.4 Nous déclinons toute responsabilité en cas d’interruption due à un cas de force majeure.\n\n6. Modifications du Contrat\n6.1 Nous pouvons réviser ce Contrat à tout moment. Le Contrat révisé sera publié dans le Produit sans préavis supplémentaire.\n6.2 Si vous continuez à utiliser le Produit après la révision, vous êtes réputé avoir accepté le Contrat révisé.\n6.3 Si vous n’êtes pas d’accord, veuillez immédiatement cesser d’utiliser le Produit et effacer toutes les données locales.\n\n7. Protection des mineurs\n7.1 Si vous êtes un mineur de moins de 14 ans, veuillez lire ce Contrat sous la supervision d’un tuteur avant d’utiliser le Produit.\n7.2 Les tuteurs doivent guider et superviser l’utilisation du Produit par les mineurs.\n\n8. Droit applicable et règlement des litiges\n8.1 La formation, la validité, l’interprétation, l’exécution et le règlement des litiges relatifs à ce Contrat sont régis par le droit de la République populaire de Chine.\n8.2 Tout litige sera réglé par voie de négociation amiable. À défaut, chaque partie peut intenter une action devant le tribunal compétent du lieu de résidence du développeur.\n\n9. Dispositions diverses\n9.1 Ce Contrat constitue l’intégralité de l’accord entre les parties.\n9.2 Si une disposition est jugée invalide, les autres dispositions restent en vigueur.\n9.3 Le fait de ne pas exercer un droit ne constitue pas une renonciation à ce droit.\n\nSi vous avez des questions, veuillez cesser d’utiliser le Produit.\n\n© 2020-2026 Fuey All Rights Reserved'
    };
    var EXTRA_CLAUSES={
    'zh-CN':'\n\n第 8 条 法律适用与不可抗力\n8.1 本条款的解释与适用以中华人民共和国法律为准；若本条款与您所在地法律存在冲突，在允许范围内以中华人民共和国法律为准。\n8.2 因洪水、地震、战争、疫情、政府行为、网络中断、黑客攻击等不可抗力或超出我们控制范围的事件，导致本网页、文件或相关权益受损的，我们不承担任何责任。',
    'en-US':'\n\n8. Governing Law and Force Majeure\n8.1 These terms are governed by the laws of the People\'s Republic of China. If a conflict arises with local law, the laws of the People\'s Republic of China prevail to the extent permitted.\n8.2 We are not liable for any damage to this website, files or related rights caused by force majeure or events beyond our control, including floods, earthquakes, war, epidemics, government actions, network outages or cyber attacks.',
    'zh-TW':'\n\n第 8 條 法律適用與不可抗力\n8.1 本條款的解釋與適用以中華人民共和國法律為準；若本條款與您所在地法律存在衝突，在允許範圍內以中華人民共和國法律為準。\n8.2 因洪水、地震、戰爭、疫情、政府行為、網路中斷、駭客攻擊等不可抗力或超出我們控制範圍的事件，導致本網頁、檔案或相關權益受損的，我們不承擔任何責任。',
    'ja-JP':'\n\n第8条 準拠法および不可抗力\n8.1 本規約は中華人民共和国の法律に準拠します。現地法と衝突する場合、許される範囲で中華人民共和国の法律が優先されます。\n8.2 洪水、地震、戦争、疫病、政府の行為、ネットワーク障害、サイバー攻撃など、不可抗力または当方の制御を超えた事態により本ウェブサイト、ファイルまたは関連権益に損害が生じた場合、当方は一切責任を負いません。',
    'ko-KR':'\n\n제8조 준거법 및 불가항력\n8.1 본 약관은 중화인민공화국 법률에 따릅니다. 현지 법률과 충돌하는 경우 허용되는 범위에서 중화인민공화국 법률이 우선합니다.\n8.2 홍수, 지진, 전쟁, 전염병, 정부 조치, 네트워크 중단, 사이버 공격 등 불가항력 또는 당사가 통제할 수 없는 사건으로 본 웹사이트, 파일 또는 관련 권익이 손상된 경우 당사는 책임을 지지 않습니다.',
    'fr-FR':'\n\n8. Droit applicable et force majeure\n8.1 Les présentes conditions sont régies par le droit de la République populaire de Chine. En cas de conflit avec le droit local, le droit de la République populaire de Chine prévaut dans la mesure permise.\n8.2 Nous déclinons toute responsabilité pour les dommages causés à ce site, aux fichiers ou aux droits associés par un cas de force majeure ou un événement hors de notre contrôle, notamment inondations, séismes, guerre, épidémies, actes gouvernementaux, pannes de réseau ou cyberattaques.'
    };
    window.App=window.App||{};
    Object.assign(AGREEMENTS,{
    'de-DE':`Fuey Mini Browser Nutzungsbedingungen

Zuletzt aktualisiert: 28. November 2026
Inkrafttreten: 28. November 2026

Willkommen bei Fuey Mini Browser („das Produkt“). Diese Bedingungen regeln die Nutzung des Produkts zwischen Ihnen und dem Entwickler („wir“). Mit „Zustimmen“ oder der tatsächlichen Nutzung akzeptieren Sie diese Bedingungen. Wenn Sie nicht einverstanden sind, nutzen Sie das Produkt bitte nicht.

1. Leistungsumfang
Das Produkt ist eine lokal laufende Browser-Oberfläche. Tabs, Suche, Lesezeichen, Ai-Funktionen und Übersetzung laufen im Browser; eine Registrierung ist nicht erforderlich.
2. Daten
Einstellungen und Inhalte werden standardmäßig lokal gespeichert. Im Inkognito-Modus werden Sitzungsdaten nicht dauerhaft gespeichert. Sie sind für Ihre Eingaben und Sicherungen verantwortlich.
3. Zulässige Nutzung
Sie dürfen keine rechtswidrigen Inhalte verbreiten, keine Rechte Dritter verletzen und die Sicherheit des Produkts nicht beeinträchtigen.
4. Ai und Drittinhalte
Ai-Antworten und externe Inhalte können ungenau oder unvollständig sein. Prüfen Sie wichtige Informationen selbst; für Drittseiten gelten deren Bedingungen.
5. Haftung
Das Produkt wird „wie besehen“ bereitgestellt. Soweit gesetzlich zulässig, haften wir nicht für mittelbare Schäden oder Datenverluste aus der Nutzung.
6. Änderungen
Wir können Funktionen und diese Bedingungen anpassen. Wesentliche Änderungen werden im Produkt angezeigt; die weitere Nutzung gilt als Zustimmung.
7. Recht und Kontakt
Es gilt das Recht der Volksrepublik China, soweit zulässig; zwingendes lokales Recht bleibt unberührt. Kontakt: GitHub FueySeek/Fuey-Mini-Browser.`,
    'es-ES':`Condiciones de uso de Fuey Mini Browser

Última actualización: 28 de noviembre de 2026
Fecha de entrada en vigor: 28 de noviembre de 2026

Bienvenido a Fuey Mini Browser («el Producto»). Estas condiciones regulan el uso del Producto entre usted y el desarrollador («nosotros»). Al pulsar «Aceptar» o usar el Producto, acepta estas condiciones. Si no está de acuerdo, no utilice el Producto.

1. Servicio
El Producto es una interfaz de navegador que se ejecuta localmente. Las pestañas, la búsqueda, los marcadores, la Ai y la traducción funcionan en el navegador; no se requiere cuenta.
2. Datos
Los ajustes y contenidos se guardan localmente por defecto. En modo incógnito no se guardan datos de sesión de forma permanente. Usted es responsable de sus entradas y copias de seguridad.
3. Uso aceptable
No debe difundir contenido ilegal, vulnerar derechos de terceros ni afectar a la seguridad del Producto.
4. Ai y contenido de terceros
Las respuestas de Ai y los contenidos externos pueden ser inexactos o incompletos. Verifique la información importante; las páginas de terceros se rigen por sus propias condiciones.
5. Responsabilidad
El Producto se ofrece «tal cual». En la medida permitida por la ley, no somos responsables de daños indirectos o pérdida de datos derivados del uso.
6. Cambios
Podemos modificar funciones y estas condiciones. Los cambios importantes se mostrarán en el Producto; el uso continuado implica aceptación.
7. Ley y contacto
Se aplica la ley de la República Popular China en la medida permitida, sin perjuicio de normas locales imperativas. Contacto: GitHub FueySeek/Fuey-Mini-Browser.`,
    'ru-RU':`Условия использования Fuey Mini Browser

Последнее обновление: 28 ноября 2026 г.
Дата вступления в силу: 28 ноября 2026 г.

Добро пожаловать в Fuey Mini Browser («Продукт»). Настоящие Условия регулируют использование Продукта между вами и разработчиком («мы»). Нажимая «Принять» или используя Продукт, вы принимаете Условия. Если вы не согласны, не используйте Продукт.

1. Сервис
Продукт — локальный интерфейс браузера. Вкладки, поиск, закладки, Ai и перевод работают в браузере; регистрация не требуется.
2. Данные
Настройки и содержимое по умолчанию хранятся локально. В режиме инкогнито данные сеанса не сохраняются постоянно. Вы отвечаете за вводимые данные и резервные копии.
3. Допустимое использование
Запрещается распространять незаконный контент, нарушать права третьих лиц и влиять на безопасность Продукта.
4. Ai и сторонний контент
Ответы Ai и внешний контент могут быть неточными или неполными. Проверяйте важную информацию; сторонние сайты регулируются их условиями.
5. Ответственность
Продукт предоставляется «как есть». В пределах закона мы не отвечаем за косвенный ущерб или потерю данных из-за использования.
6. Изменения
Мы можем менять функции и Условия. О существенных изменениях будет сообщено в Продукте; дальнейшее использование означает согласие.
7. Право и контакты
Применяется право КНР в допустимых пределах; императивные местные нормы сохраняются. Контакты: GitHub FueySeek/Fuey-Mini-Browser.`,
    'pt-BR':`Termos de uso do Fuey Mini Browser

Última atualização: 28 de novembro de 2026
Data de vigência: 28 de novembro de 2026

Bem-vindo ao Fuey Mini Browser («o Produto»). Estes Termos regulam o uso do Produto entre você e o desenvolvedor («nós»). Ao clicar em «Aceitar» ou usar o Produto, você aceita estes Termos. Se não concordar, não use o Produto.

1. Serviço
O Produto é uma interface de navegador executada localmente. Abas, pesquisa, favoritos, Ai e tradução funcionam no navegador; não é necessário criar conta.
2. Dados
Configurações e conteúdos são salvos localmente por padrão. No modo anônimo, dados de sessão não são salvos permanentemente. Você é responsável pelos dados inseridos e por backups.
3. Uso permitido
Você não deve divulgar conteúdo ilegal, violar direitos de terceiros ou afetar a segurança do Produto.
4. Ai e conteúdo de terceiros
Respostas de Ai e conteúdos externos podem ser imprecisos ou incompletos. Verifique informações importantes; sites de terceiros seguem seus próprios termos.
5. Responsabilidade
O Produto é fornecido «como está». Na medida permitida por lei, não somos responsáveis por danos indiretos ou perda de dados decorrentes do uso.
6. Alterações
Podemos alterar recursos e estes Termos. Mudanças relevantes serão exibidas no Produto; o uso contínuo implica aceitação.
7. Lei e contato
Aplica-se a lei da República Popular da China no que for permitido, sem prejuízo de normas locais imperativas. Contato: GitHub FueySeek/Fuey-Mini-Browser.`,
    'it-IT':`Termini di utilizzo di Fuey Mini Browser

Ultimo aggiornamento: 28 novembre 2026
Data di efficacia: 28 novembre 2026

Benvenuto in Fuey Mini Browser («il Prodotto»). Questi Termini regolano l’uso del Prodotto tra te e lo sviluppatore («noi»). Premendo «Accetta» o usando il Prodotto accetti questi Termini. Se non sei d’accordo, non usare il Prodotto.

1. Servizio
Il Prodotto è un’interfaccia browser eseguita localmente. Schede, ricerca, segnalibri, Ai e traduzione funzionano nel browser; non è richiesto un account.
2. Dati
Impostazioni e contenuti sono salvati localmente per impostazione predefinita. In modalità incognito i dati di sessione non vengono salvati in modo permanente. Sei responsabile dei dati inseriti e dei backup.
3. Uso consentito
Non devi diffondere contenuti illegali, violare diritti di terzi o compromettere la sicurezza del Prodotto.
4. Ai e contenuti di terzi
Le risposte Ai e i contenuti esterni possono essere imprecisi o incompleti. Verifica le informazioni importanti; i siti di terzi seguono i propri termini.
5. Responsabilità
Il Prodotto è fornito «così com’è». Nei limiti di legge non siamo responsabili per danni indiretti o perdita di dati derivanti dall’uso.
6. Modifiche
Possiamo modificare funzioni e questi Termini. Le modifiche rilevanti saranno mostrate nel Prodotto; l’uso continuato implica accettazione.
7. Legge e contatti
Si applica la legge della Repubblica Popolare Cinese nei limiti consentiti, ferme restando le norme locali imperative. Contatti: GitHub FueySeek/Fuey-Mini-Browser.`,
    'ar-SA':`شروط استخدام Fuey Mini Browser

آخر تحديث: 28 نوفمبر 2026
تاريخ السريان: 28 نوفمبر 2026

مرحباً بك في Fuey Mini Browser («المنتج»). تنظّم هذه الشروط استخدام المنتج بينك وبين المطوّر («نحن»). بالنقر على «موافق» أو باستخدام المنتج فإنك تقبل هذه الشروط. إذا لم توافق، فلا تستخدم المنتج.

1. الخدمة
المنتج واجهة متصفح تعمل محلياً. تعمل علامات التبويب والبحث والمفضلة وAi والترجمة داخل المتصفح؛ ولا يلزم إنشاء حساب.
2. البيانات
تُحفظ الإعدادات والمحتويات محلياً افتراضياً. في وضع التصفح المتخفي لا تُحفظ بيانات الجلسة بشكل دائم. أنت مسؤول عن مدخلاتك والنسخ الاحتياطي.
3. الاستخدام المقبول
يُحظر نشر محتوى غير قانوني أو انتهاك حقوق الغير أو الإضرار بأمن المنتج.
4. Ai ومحتوى الطرف الثالث
قد تكون إجابات Ai والمحتويات الخارجية غير دقيقة أو غير مكتملة. تحقق من المعلومات المهمة؛ وتخضع مواقع الطرف الثالث لشروطها.
5. المسؤولية
يُقدَّم المنتج «كما هو». وفي الحدود التي يسمح بها القانون لا نتحمل مسؤولية الأضرار غير المباشرة أو فقدان البيانات الناتج عن الاستخدام.
6. التغييرات
يجوز لنا تعديل الميزات وهذه الشروط. ستُعرض التغييرات المهمة داخل المنتج، ويُعد الاستخدام المستمر موافقة.
7. القانون والتواصل
يُطبَّق قانون جمهورية الصين الشعبية في الحدود المسموح بها، دون المساس بالقواعد المحلية الآمرة. التواصل: GitHub FueySeek/Fuey-Mini-Browser.`,
    'lzh':`Fuey Mini Browser 用戶之約

更新之日：二〇二六年十一月二十八日
生效之日：二〇二六年十一月二十八日

歡迎用 Fuey Mini Browser（下稱「本品」）。此約乃君與本品開發者（下稱「吾等」）間關於使用本品之約。點「允」或實用本品，即視君已悉閱而受此約。若不允，請勿用。

一、服務
本品為本地運行之旅遊器界面，分頁、尋、書籤、捷徑、Ai 對、譯、主題與插件皆行於旅遊器之內，無須註冊。
二、數據
設置與內容預設存於本地；無痕之時，不永存會話之數據。君當自負所輸與備份之責。
三、正用
不得傳違法之物、侵他人之權、害本品之安。
四、Ai 與外物
Ai 之答與外來之文或有不確不全，要事請自核；第三方之頁依其約。
五、責任
本品按「現狀」而供。於法所許之內，吾等不負因用而生之間接之損或數據之失。
六、更易
吾等可改其能與此約，要改將示於本品；續用即為允。
七、法與通問
於法所許之內，以中華人民共和國之法為準，強行之地法不失。通問：GitHub FueySeek/Fuey-Mini-Browser。`
    });
    Object.assign(EXTRA_CLAUSES,{'de-DE':'','es-ES':'','ru-RU':'','pt-BR':'','it-IT':'','ar-SA':'','lzh':''});
        window.App.getAgreement=function(code){
    var lang=C.resolveLang(code||C.settingsStore.get().language);
    var base=AGREEMENTS[lang]||AGREEMENTS['en-US'];
    var extra=Object.prototype.hasOwnProperty.call(EXTRA_CLAUSES,lang)?EXTRA_CLAUSES[lang]:EXTRA_CLAUSES['en-US'];
    return base+(extra||'');
    };
    
    function showAgreement(){
    if(localStorage.getItem('fuey.agreed')==='1')return;
    var lang=C.resolveLang(C.settingsStore.get().language);
    var text=window.App.getAgreement(lang);
    var overlay=document.createElement('div');
    overlay.className='agreement-overlay';
    var langItems=C.LANGS.filter(function(l){return l.code!=='system'}).map(function(l){return l.code}).map(function(code){
    var info=C.LANGS.find(function(l){return l.code===code});
    return{value:code,label:info?info.name:code};
    });
    overlay.innerHTML='<div class="agreement-card">'+
    '<div class="agreement-head"><div class="agreement-title">'+C.t('userAgreement')+'</div><div class="agreement-lang-slot" data-lang-slot></div></div>'+
    '<div class="agreement-body">'+C.escapeHtml(text)+'</div>'+
    '<div class="agreement-foot">'+
    '<button class="btn" type="button" data-decline>'+C.t('decline')+'</button>'+
    '<button class="btn btn--primary" type="button" data-agree>'+C.t('agree')+'</button>'+
    '</div></div>';
    document.body.append(overlay);
    overlay.querySelector('.agreement-body').dir=lang==='ar-SA'?'rtl':'ltr';
    var chosenLang=lang;
    var langSel=C.createSelect({value:lang,items:langItems,width:'140px',onChange:function(value){
    chosenLang=value;
    overlay.querySelector('.agreement-body').textContent=window.App.getAgreement(value);
    overlay.querySelector('.agreement-body').dir=value==='ar-SA'?'rtl':'ltr';
    }});
    overlay.querySelector('[data-lang-slot]').append(langSel.el);
    overlay.querySelector('[data-decline]').addEventListener('click',function(){C.toast(C.t('agreementDeclined'),'error')});
    overlay.querySelector('[data-agree]').addEventListener('click',function(){
    localStorage.setItem('fuey.agreed','1');
    C.settingsStore.set({language:chosenLang});
    if(C.resolveLang(chosenLang)!==C.resolveLang(lang)){location.reload();return}
    C.closeAllSelects();
    overlay.remove();
    if(!maybeOnboard())setTimeout(function(){C.checkUpdate(true)},700);
    });
    }
    
    function maybeOnboard(){
    if(localStorage.getItem('fuey.agreed')!=='1')return false;
    if(localStorage.getItem('fuey.onboarded')==='1')return false;
    showOnboarding();
    return true;
    }
    
    function showOnboarding(){
    var steps=[
    {target:'#toolbar [data-input]',title:C.t('tourStartTitle'),text:C.t('tourStartText')},
    {target:'#toolbar [data-tabs-btn]',fallback:'#tabs-bar',title:C.t('tourTabsTitle'),text:C.t('tourTabsText')},
    {target:'#toolbar [data-menu-btn]',title:C.t('tourMoreTitle'),text:C.t('tourMoreText')},
    {target:'.ai-btn',title:C.t('tourAiTitle'),text:C.t('tourAiText')},
    {target:'',title:C.t('tourReadyTitle'),text:C.t('tourReadyText')}
    ];
    var index=0;
    var layer=document.createElement('div');
    layer.className='tour-layer';
    var hole=document.createElement('div');
    hole.className='tour-hole';
    var tip=document.createElement('div');
    tip.className='tour-tip';
    layer.append(hole,tip);
    document.body.append(layer);
    function finish(goSettings){
    document.removeEventListener('resize',place);
    layer.remove();
    localStorage.setItem('fuey.onboarded','1');
    if(goSettings&&window.Browser)window.Browser.navigatePage('/settings');
    setTimeout(function(){C.checkUpdate(true)},450);
    }
    function place(){
    var step=steps[index];
    var target=null;
    if(step.target)target=document.querySelector(step.target);
    if((!target||target.offsetParent===null)&&step.fallback)target=document.querySelector(step.fallback);
    if(target&&target.offsetParent===null)target=null;
    var rect=target?target.getBoundingClientRect():null;
    if(rect){
    hole.style.display='block';
    hole.style.left=(rect.left-6)+'px';
    hole.style.top=(rect.top-6)+'px';
    hole.style.width=(rect.width+12)+'px';
    hole.style.height=(rect.height+12)+'px';
    }else{
    hole.style.display='none';
    }
    var dots='';
    for(var i=0;i<steps.length;i++)dots+='<span class="tour-dot'+(i===index?' is-active':'')+'"></span>';
    var actions='';
    if(index<steps.length-1){
    actions='<button class="tour-skip" type="button" data-skip>'+C.t('tourSkip')+'</button><div class="tour-dots">'+dots+'</div><button class="btn btn--primary" type="button" data-next>'+C.t('tourNext')+'</button>';
    }else{
    actions='<button class="tour-skip" type="button" data-skip>'+C.t('tourDone')+'</button><div class="tour-dots">'+dots+'</div><button class="btn btn--primary" type="button" data-settings>'+C.t('tourSettings')+'</button>';
    }
    tip.innerHTML='<h4>'+step.title+'</h4><p>'+step.text+'</p><div class="tour-actions">'+actions+'</div>';
    if(rect){
    var left=Math.min(Math.max(12,rect.left),window.innerWidth-322);
    tip.style.left=left+'px';
    tip.style.top=(rect.bottom+12)+'px';
    tip.style.bottom='auto';
    }else{
    tip.style.left='calc(50% - 155px)';
    tip.style.top='calc(50% - 90px)';
    }
    requestAnimationFrame(function(){
    var tr=tip.getBoundingClientRect();
    if(tr.bottom>window.innerHeight-12){
    tip.style.top=Math.max(12,(rect?rect.top:window.innerHeight/2)-tr.height-12)+'px';
    }
    });
    }
    tip.addEventListener('click',function(e){
    if(e.target.closest('[data-next]')){index++;place();return}
    if(e.target.closest('[data-skip]')){finish(false);return}
    if(e.target.closest('[data-settings]')){finish(true);return}
    });
    document.addEventListener('resize',place);
    place();
    }
        function start(){
    B.init();
    showAgreement();
    if(localStorage.getItem('fuey.agreed')==='1'&&localStorage.getItem('fuey.onboarded')!=='1'){
    showOnboarding();
    }else if(localStorage.getItem('fuey.agreed')==='1'){
    setTimeout(function(){C.checkUpdate(true)},1500);
    }
    }
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);
    else start();
    })();