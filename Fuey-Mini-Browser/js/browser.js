(function(){
    'use strict';
    var C=window.Core;
    var B=window.Browser={};
    var PAGES={};
    B.registerPage=function(r,d){PAGES[r]=d};
    B.getPage=function(r){return PAGES[r]};
    
    var incognito=C.isIncognito;
    var tabsState=incognito?null:(function(){try{var raw=localStorage.getItem('fuey.v26.11.28.0.tabs');return raw?JSON.parse(raw):null}catch(e){return null}})();
    if(!tabsState)tabsState={list:[{id:C.uid(),history:[{kind:'page',route:'/home'}],index:0,groupId:null}],activeId:null,groups:[]};
    if(!tabsState.list.length)tabsState.list=[{id:C.uid(),history:[{kind:'page',route:'/home'}],index:0,groupId:null}];
    if(!tabsState.activeId||!tabsState.list.some(function(t){return t.id===tabsState.activeId}))tabsState.activeId=tabsState.list[0].id;
    if(!tabsState.groups)tabsState.groups=[];
    
    function currentTab(){return tabsState.list.find(function(t){return t.id===tabsState.activeId})}
    function currentEntry(){var t=currentTab();return t?t.history[t.index]:null}
    function save(){if(!incognito)try{localStorage.setItem('fuey.v26.11.28.0.tabs',JSON.stringify(tabsState))}catch(e){}}
    B.currentTab=currentTab;B.currentEntry=currentEntry;
    function replaceTab(tab){tabsState.list=tabsState.list.map(function(t){return t.id===tab.id?tab:t})}
    function trackHistory(entry){
    if(entry.kind!=='web')return;
    C.historyStore.set(function(s){
    var items=s.items.slice();
    if(items.length&&items[0].url===entry.url)return{items:items};
    items.unshift({id:C.uid(),url:entry.url,title:C.domainOf(entry.url)||entry.url,ts:Date.now()});
    return{items:items.slice(0,500)};
    });
    }
    B.pushHistory=function(entry){var tab=currentTab();if(!tab)return;var h=tab.history.slice(0,tab.index+1);h.push(entry);replaceTab({id:tab.id,history:h,index:h.length-1,groupId:tab.groupId});save();trackHistory(entry);renderAll(true)};
    B.openUrl=function(url){if(url)B.pushHistory({kind:'web',url:url})};
    B.navigatePage=function(route){B.pushHistory({kind:'page',route:route})};
    B.back=function(){var tab=currentTab();if(!tab||tab.index<=0)return;replaceTab({id:tab.id,history:tab.history,index:tab.index-1,groupId:tab.groupId});save();renderAll()};
    B.forward=function(){var tab=currentTab();if(!tab||tab.index>=tab.history.length-1)return;replaceTab({id:tab.id,history:tab.history,index:tab.index+1,groupId:tab.groupId});save();renderAll()};
    B.refresh=function(){renderViewport(currentEntry(),true)};
    B.newTab=function(entry){var tab={id:C.uid(),history:[entry||{kind:'page',route:'/home'}],index:0,groupId:null};tabsState.list.push(tab);tabsState.activeId=tab.id;save();renderAll(true)};
    B.closeTab=function(id){tabsState.list=tabsState.list.filter(function(t){return t.id!==id});if(!tabsState.list.length)tabsState.list=[{id:C.uid(),history:[{kind:'page',route:'/home'}],index:0,groupId:null}];if(!tabsState.list.some(function(t){return t.id===tabsState.activeId}))tabsState.activeId=tabsState.list[tabsState.list.length-1].id;save();renderAll(true)};
    B.activateTab=function(id){tabsState.activeId=id;save();renderAll(true)};
    B.reorderTabs=function(dragId,targetId){if(dragId===targetId)return;var from=tabsState.list.findIndex(function(t){return t.id===dragId});var to=tabsState.list.findIndex(function(t){return t.id===targetId});if(from<0||to<0)return;var item=tabsState.list.splice(from,1)[0];tabsState.list.splice(to,0,item);save();renderTabs()};
    B.createGroup=function(name,color){var tab=currentTab();if(!tab)return;var g={id:C.uid(),name:name,color:color};tabsState.groups.push(g);replaceTab({id:tab.id,history:tab.history,index:tab.index,groupId:g.id});save();renderAll()};
    B.getCurrentUrl=function(){var e=currentEntry();return e&&e.kind==='web'?e.url:''};
    B.getPageText=function(){
    var e=currentEntry();
    if(!e)return'';
    if(e.kind==='web'){
    if(B.readerText&&B.readerTextUrl===e.url)return B.readerText;
    return'';
    }
    var vp=document.getElementById('viewport');
    return vp?String(vp.innerText||'').slice(0,8000):'';
    };
    
    function entryTitle(entry){
    if(!entry)return C.t('newTab');
    if(entry.kind==='web'){var known=C.titlesStore.get().items[entry.url];return known||C.domainOf(entry.url)||entry.url}
    var p=PAGES[entry.route];
    return p?C.t(p.titleKey):entry.route;
    }
    
    function entryIcon(entry){
    if(!entry)return C.ICONS.home;
    if(entry.kind==='web'){
    if(C.isSearchEngine(entry.url))return C.ICONS.search;
    var fav=C.faviconImg(entry.url);
    if(fav)return fav;
    return C.ICONS.globeSmall;
    }
    var p=PAGES[entry.route];
    return p?(C.ICONS[p.icon]||C.ICONS.globeSmall):C.ICONS.home;
    }
    
    var draggedTab=null;
    function renderTabs(){
    var bar=document.querySelector('#tabs-bar');
    if(!bar)return;
    bar.innerHTML='';
    tabsState.list.forEach(function(tab){
    var entry=tab.history[tab.index];
    var el=document.createElement('div');
    el.className='tab'+(tab.id===tabsState.activeId?' is-active':'');
    if(tab.groupId){el.classList.add('has-group');var g=tabsState.groups.find(function(x){return x.id===tab.groupId});if(g)el.style.setProperty('--group-color',g.color)}
    el.dataset.id=tab.id;
    el.draggable=true;
    el.innerHTML='<span class="tab-icon">'+entryIcon(entry)+'</span><span class="tab-title">'+C.escapeHtml(entryTitle(entry))+'</span><button class="tab-close" type="button" data-close="'+tab.id+'" draggable="false">×</button>';
    el.querySelector('.tab-close').addEventListener('mousedown',function(e){e.stopPropagation()});
    el.addEventListener('dragstart',function(e){draggedTab=tab.id;el.classList.add('is-dragging');e.dataTransfer.effectAllowed='move';try{e.dataTransfer.setData('text/plain',tab.id)}catch(er){}});
    el.addEventListener('dragend',function(){draggedTab=null;el.classList.remove('is-dragging');document.querySelectorAll('.tab').forEach(function(t){t.classList.remove('drop-target')})});
    el.addEventListener('dragover',function(e){e.preventDefault();e.dataTransfer.dropEffect='move';if(draggedTab&&draggedTab!==tab.id)el.classList.add('drop-target')});
    el.addEventListener('dragleave',function(){el.classList.remove('drop-target')});
    el.addEventListener('drop',function(e){e.preventDefault();el.classList.remove('drop-target');if(draggedTab&&draggedTab!==tab.id)B.reorderTabs(draggedTab,tab.id)});
    bar.append(el);
    });
    var newBtn=document.createElement('button');
    newBtn.className='tab-new';
    newBtn.type='button';
    newBtn.dataset.newTab='';
    newBtn.title=C.t('newTab');
    newBtn.innerHTML=C.ICONS.plus;
    bar.append(newBtn);
    bar.onclick=function(e){
    if(e.target.closest('[data-new-tab]')){B.newTab();return}
    var closeBtn=e.target.closest('[data-close]');
    if(closeBtn){e.stopPropagation();B.closeTab(closeBtn.dataset.close);return}
    var tabEl=e.target.closest('.tab');
    if(tabEl)B.activateTab(tabEl.dataset.id);
    };
    var activeTab=bar.querySelector('.tab.is-active');
    if(activeTab&&activeTab.scrollIntoView)activeTab.scrollIntoView({block:'nearest',inline:'center'});
    }
    
    var tabsSheetEl=null;
    var tabsOverlayEl=null;
    function closeTabsSheet(){
    if(tabsOverlayEl){tabsOverlayEl.classList.remove('is-open');tabsSheetEl.classList.remove('is-open')}
    var overlay=tabsOverlayEl;
    var sheet=tabsSheetEl;
    tabsOverlayEl=null;
    tabsSheetEl=null;
    if(overlay)setTimeout(function(){if(overlay.parentNode)overlay.remove()},260);
    if(sheet)setTimeout(function(){if(sheet.parentNode)sheet.remove()},300);
    }
    function openTabsSheet(){
    closeTabsSheet();
    var overlay=document.createElement('div');
    overlay.className='tabs-overlay';
    var sheet=document.createElement('div');
    sheet.className='tabs-sheet';
    var items=tabsState.list.map(function(tab){
    var entry=tab.history[tab.index];
    var active=tab.id===tabsState.activeId?' is-active':'';
    var url=entry&&entry.kind==='web'?entry.url:'';
    return'<div class="tabs-sheet-item'+active+'" data-tab="'+tab.id+'">'+
    '<span class="tsi-icon">'+entryIcon(entry)+'</span>'+
    '<span class="tsi-text"><span class="tsi-title">'+C.escapeHtml(entryTitle(entry))+'</span>'+(url?'<span class="tsi-url">'+C.escapeHtml(url)+'</span>':'')+'</span>'+
    '<button class="tsi-close" type="button" data-close="'+tab.id+'" aria-label="'+C.t('close')+'">×</button>'+
    '</div>';
    }).join('');
    sheet.innerHTML='<div class="tabs-sheet-head"><span>'+C.t('tabsSheet')+'</span><button class="tabs-sheet-close" type="button" data-close-sheet aria-label="'+C.t('close')+'">×</button></div>'+
    '<div class="tabs-sheet-list">'+items+'</div>'+
    '<button class="tabs-sheet-new" type="button" data-new-tab>'+C.ICONS.plus+'<span>'+C.t('newTab')+'</span></button>';
    document.body.append(overlay,sheet);
    tabsOverlayEl=overlay;
    tabsSheetEl=sheet;
    overlay.addEventListener('click',closeTabsSheet);
    sheet.addEventListener('click',function(e){
    if(e.target.closest('[data-close-sheet]')){closeTabsSheet();return}
    if(e.target.closest('[data-new-tab]')){B.newTab();closeTabsSheet();return}
    var closeBtn=e.target.closest('[data-close]');
    if(closeBtn){e.stopPropagation();B.closeTab(closeBtn.dataset.close);closeTabsSheet();return}
    var item=e.target.closest('[data-tab]');
    if(item){B.activateTab(item.dataset.tab);closeTabsSheet()}
    });
    requestAnimationFrame(function(){overlay.classList.add('is-open');sheet.classList.add('is-open')});
    }
    B.openTabsSheet=openTabsSheet;
    B.closeTabsSheet=closeTabsSheet;
    
    var toolbarRefs=null;
    function renderToolbar(){
    var bar=document.querySelector('#toolbar');
    if(!bar)return;
    if(!toolbarRefs){
    bar.innerHTML='<div class="toolbar-inner">'+
    '<div class="nav-group">'+
    '<button class="tb-btn" type="button" data-back title="'+C.t('back')+'">'+C.ICONS.back+'</button>'+
    '<button class="tb-btn" type="button" data-forward title="'+C.t('forward')+'">'+C.ICONS.forward+'</button>'+
    '<button class="tb-btn" type="button" data-reload title="'+C.t('reload')+'">'+C.ICONS.reload+'</button>'+
    '</div>'+
    '<form class="address-bar" data-form>'+
    '<input class="address-input" type="text" placeholder="'+C.t('searchOrUrl')+'" autocomplete="off" spellcheck="false" data-input>'+
    '<button class="address-search" type="submit" title="'+C.t('search')+'">'+C.ICONS.search+'</button>'+
    '</form>'+
    '<div class="toolbar-right">'+
    '<button class="tb-btn" type="button" data-bookmark-btn title="'+C.t('addBookmark')+'">'+C.ICONS.star+'</button>'+
    '<button class="tb-btn tabs-btn" type="button" data-tabs-btn title="'+C.t('tabsSheet')+'">'+C.ICONS.tabs+'<span class="tab-count" data-tab-count>1</span></button>'+
    '<button class="tb-btn" type="button" data-menu-btn title="'+C.t('more')+'">'+C.ICONS.menu+'</button>'+
    '</div>'+
    '</div>';
    var form=bar.querySelector('[data-form]');
    var input=bar.querySelector('[data-input]');
    form.addEventListener('submit',function(e){
    e.preventDefault();
    var v=input.value.trim();
    if(!v)return;
    var eng=C.settingsStore.get().engine;
    if(C.isGithubEngine(eng)){C.githubStore.set({query:v});B.navigatePage('/github');return}
    B.openUrl(C.resolveTarget(v,eng));
    });
    input.addEventListener('focus',function(){setTimeout(function(){try{input.select()}catch(e){}},0)});
    bar.querySelector('[data-back]').addEventListener('click',B.back);
    bar.querySelector('[data-forward]').addEventListener('click',B.forward);
    bar.querySelector('[data-reload]').addEventListener('click',B.refresh);
    bar.querySelector('[data-bookmark-btn]').addEventListener('click',function(){var url=B.getCurrentUrl();openBookmarkDialog(url&&url!=='about:blank'?url:null)});
    bar.querySelector('[data-tabs-btn]').addEventListener('click',openTabsSheet);
    bar.querySelector('[data-menu-btn]').addEventListener('click',function(e){e.stopPropagation();ensureMenus();toggleMenu(mainMenuEl,e.currentTarget,'right')});
    toolbarRefs={back:bar.querySelector('[data-back]'),forward:bar.querySelector('[data-forward]'),input:input};
    }
    var countEl=bar.querySelector('[data-tab-count]');
    if(countEl)countEl.textContent=tabsState.list.length;
    var entry=currentEntry();
    if(entry&&entry.kind==='web')toolbarRefs.input.value=entry.url;
    else toolbarRefs.input.value='';
    var tab=currentTab();
    if(tab){toolbarRefs.back.disabled=tab.index<=0;toolbarRefs.forward.disabled=tab.index>=tab.history.length-1}
    }
    
    var lastKey=null;
    function renderViewport(entry,force){
    var viewport=document.querySelector('#viewport');
    if(!viewport)return;
    if(!entry){viewport.innerHTML='';return}
    var key=entry.kind==='page'?'p:'+entry.route:'w:'+entry.url;
    if(!force&&key===lastKey)return;
    lastKey=key;
    viewport.innerHTML='';
    viewport.scrollTop=0;
    if(entry.kind==='page'){
    viewport.classList.remove('is-webview');
    var page=PAGES[entry.route];
    if(page)page.render(viewport);
    else viewport.innerHTML='<div class="empty">'+C.t('pageNotFound')+'</div>';
    }else{
    viewport.classList.add('is-webview');
    loadWebView(viewport,entry.url);
    C.ensureTitle(entry.url,function(title){
    C.historyStore.set(function(s){
    var hit=false;
    var items=s.items.map(function(it){if(it.url===entry.url&&it.title!==title){hit=true;return Object.assign({},it,{title:title})}return it});
    return hit?{items:items}:{items:s.items};
    });
    renderTabs();
    });
    }
    }
    
    function withBase(html,url){
    html=html.replace(/\s+target\s*=\s*["']_blank["']/gi,' target="_self"');
    var base='<base href="'+url.replace(/"/g,'&quot;')+'" target="_self">';
    if(/<head[^>]*>/i.test(html))return html.replace(/<head[^>]*>/i,function(m){return m+base});
    if(/<html[^>]*>/i.test(html))return html.replace(/<html[^>]*>/i,function(m){return m+base});
    return base+html;
    }
    function inlineMd(t){
    return t.replace(/`([^`]+)`/g,'<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g,'<em>$1</em>')
    .replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g,'<a href="$2" data-reader-link rel="noopener">$1</a>');
    }
    function renderMarkdown(md){
    var lines=C.escapeHtml(md).split(/\r?\n/);
    var out=[],i=0,line;
    while(i<lines.length){
    line=lines[i];
    if(/^```/.test(line)){
    var code=[];i++;
    while(i<lines.length&&!/^```/.test(lines[i])){code.push(lines[i]);i++}
    i++;out.push('<pre><code>'+code.join('\n')+'</code></pre>');continue;
    }
    var h=line.match(/^(#{1,6})\s+(.*)$/);
    if(h){out.push('<h'+h[1].length+'>'+inlineMd(h[2])+'</h'+h[1].length+'>');i++;continue}
    if(/^\s*[-*+]\s+/.test(line)){
    var items=[];
    while(i<lines.length&&/^\s*[-*+]\s+/.test(lines[i])){items.push('<li>'+inlineMd(lines[i].replace(/^\s*[-*+]\s+/,''))+'</li>');i++}
    out.push('<ul>'+items.join('')+'</ul>');continue;
    }
    if(/^\s*\d+\.\s+/.test(line)){
    var oitems=[];
    while(i<lines.length&&/^\s*\d+\.\s+/.test(lines[i])){oitems.push('<li>'+inlineMd(lines[i].replace(/^\s*\d+\.\s+/,''))+'</li>');i++}
    out.push('<ol>'+oitems.join('')+'</ol>');continue;
    }
    if(/^&gt;\s?/.test(line)){
    var quote=[];
    while(i<lines.length&&/^&gt;\s?/.test(lines[i])){quote.push(lines[i].replace(/^&gt;\s?/,''));i++}
    out.push('<blockquote>'+inlineMd(quote.join(' '))+'</blockquote>');continue;
    }
    if(/^\s*(---|\*\*\*|___)\s*$/.test(line)){out.push('<hr>');i++;continue}
    if(!line.trim()){i++;continue}
    var para=[];
    while(i<lines.length&&lines[i].trim()&&!/^(#{1,6}\s|```|\s*[-*+]\s|\s*\d+\.\s|&gt;)/.test(lines[i])){para.push(inlineMd(lines[i]));i++}
    out.push('<p>'+para.join('<br>')+'</p>');
    }
    return out.join('');
    }
    B.renderMarkdown=renderMarkdown;
    var PROXIES=[
    function(u){return'https://api.allorigins.win/raw?url='+encodeURIComponent(u)},
    function(u){return'https://corsproxy.io/?url='+encodeURIComponent(u)},
    function(u){return'https://api.codetabs.com/v1/proxy?quest='+encodeURIComponent(u)}
    ];
    function fetchWithTimeout(url,opts,ms){
    var ctrl=typeof AbortController!=='undefined'?new AbortController():null;
    var timer=setTimeout(function(){if(ctrl)ctrl.abort()},ms);
    var conf=Object.assign({},opts||{});
    if(ctrl)conf.signal=ctrl.signal;
    return fetch(url,conf).then(function(res){clearTimeout(timer);return res},function(err){clearTimeout(timer);throw err});
    }
    function fetchProxyHtml(url){
    var tasks=PROXIES.map(function(make){
    return fetchWithTimeout(make(url),{credentials:'omit'},5000).then(function(res){
    if(!res.ok)throw new Error('HTTP '+res.status);
    return res.text();
    }).then(function(text){
    if(!text||text.length<40)throw new Error('empty');
    return text;
    });
    });
    return new Promise(function(resolve,reject){
    var left=tasks.length;
    var lastErr=new Error('empty');
    tasks.forEach(function(task){
    task.then(resolve,function(err){
    lastErr=err;
    left--;
    if(left===0)reject(lastErr);
    });
    });
    });
    }
    function loadWebView(container,url){
    B.readerText='';
    B.readerTextUrl='';
    container.innerHTML='';
    var shell=document.createElement('div');
    shell.className='web-shell';
    shell.innerHTML='<div class="web-bar">'+
    '<span class="web-domain"><span data-domain></span><span class="web-mode-tag" data-mode-tag hidden></span></span>'+
    '<button class="web-bar-btn" type="button" data-reader>'+C.ICONS.globeSmall+'<span data-reader-label></span></button>'+
    '<button class="web-bar-btn" type="button" data-external>'+C.ICONS.external+'<span>'+C.t('openBrowser')+'</span></button>'+
    '</div><div class="web-stage" data-stage></div>';
    container.append(shell);
    var stage=shell.querySelector('[data-stage]');
    var domainEl=shell.querySelector('[data-domain]');
    var tagEl=shell.querySelector('[data-mode-tag]');
    var readerBtn=shell.querySelector('[data-reader]');
    var readerLabel=shell.querySelector('[data-reader-label]');
    var mode='site';
    domainEl.textContent=C.domainOf(url)||url;
    function updateModeUI(){
    tagEl.hidden=mode!=='reader';
    tagEl.textContent=C.t('readerMode');
    readerLabel.textContent=mode==='reader'?C.t('siteMode'):C.t('readerMode');
    }
    function status(html){stage.className='web-stage';stage.innerHTML='<div class="web-status">'+html+'</div>'}
    function showSiteError(){
    if(mode!=='site')return;
    status('<strong>'+C.t('readerFail')+'</strong><span>'+C.t('readerNotice')+'</span><div class="web-choice"><button class="btn btn--primary" type="button" data-err-reader>'+C.t('readerMode')+'</button><button class="btn" type="button" data-err-retry>'+C.t('reload')+'</button><button class="btn" type="button" data-err-tab>'+C.t('openBrowser')+'</button></div>');
    var rb=stage.querySelector('[data-err-reader]');
    if(rb)rb.addEventListener('click',showReader);
    var retry=stage.querySelector('[data-err-retry]');
    if(retry)retry.addEventListener('click',showSite);
    var tab=stage.querySelector('[data-err-tab]');
    if(tab)tab.addEventListener('click',function(){B.newTab({kind:'web',url:url})});
    }
    function showSite(){
    mode='site';updateModeUI();
    stage.className='web-stage';
    stage.innerHTML='<div class="web-status"><span class="web-spinner"></span><span>'+C.t('loading')+'</span></div>';
    var frame=document.createElement('iframe');
    frame.src=url;
    frame.setAttribute('referrerpolicy','no-referrer');
    frame.setAttribute('allow','clipboard-write; fullscreen; autoplay');
    stage.append(frame);
    applyZoomToIframe();
    var loaded=false;
    var probeCtrl=typeof AbortController!=='undefined'?new AbortController():null;
    var probeTimer=setTimeout(function(){if(probeCtrl)probeCtrl.abort()},8000);
    fetch(url,{mode:'no-cors',credentials:'omit',cache:'no-store',signal:probeCtrl?probeCtrl.signal:undefined}).then(function(){
    clearTimeout(probeTimer);
    },function(){
    clearTimeout(probeTimer);
    if(!loaded)showSiteError();
    });
    frame.addEventListener('error',function(){if(!loaded)showSiteError()});
    var hintTimer=setTimeout(function(){
    if(loaded)return;
    var hint=document.createElement('div');
    hint.className='web-hint';
    hint.innerHTML='<span>'+C.t('loadSlowHint')+'</span><button type="button" data-hint-reader>'+C.t('readerMode')+'</button><button type="button" data-hint-close>×</button>';
    stage.append(hint);
    hint.querySelector('[data-hint-reader]').addEventListener('click',showReader);
    hint.querySelector('[data-hint-close]').addEventListener('click',function(){hint.remove()});
    },6000);
    frame.addEventListener('load',function(){
    loaded=true;
    clearTimeout(probeTimer);
    clearTimeout(hintTimer);
    var st=stage.querySelector('.web-status');
    if(st)st.remove();
    var hint=stage.querySelector('.web-hint');
    if(hint)hint.remove();
    });
    }
    function showReaderHtml(html){
    mode='reader';updateModeUI();
    stage.className='web-stage is-reader';
    stage.innerHTML='<div class="reader-doc">'+renderMarkdown(html)+'</div>';
    var doc=stage.querySelector('.reader-doc');
    B.readerText=doc?String(doc.innerText||'').slice(0,8000):'';
    B.readerTextUrl=url;
    var heading=doc?doc.querySelector('h1,h2'):null;
    if(heading&&heading.innerText.trim()){
    var t=heading.innerText.trim().slice(0,120);
    C.titlesStore.set(function(s){var it=Object.assign({},s.items);it[url]=t;return{items:it}});
    renderTabs();
    }
    stage.querySelectorAll('[data-reader-link]').forEach(function(a){
    a.addEventListener('click',function(e){e.preventDefault();if(a.href)B.openUrl(a.href)});
    });
    }
    function showReader(){
    mode='reader';updateModeUI();
    stage.className='web-stage';
    stage.innerHTML='<div class="web-status"><span class="web-spinner"></span><span>'+C.t('readerLoading')+'</span></div>';
    var settled=false;
    function finishJina(text){
    if(settled)return;
    settled=true;
    showReaderHtml(text);
    }
    function finishProxy(html){
    if(settled)return;
    settled=true;
    B.readerText='';
    B.readerTextUrl='';
    stage.className='web-stage';
    stage.innerHTML='';
    var frame=document.createElement('iframe');
    frame.setAttribute('sandbox','allow-forms allow-popups');
    frame.srcdoc=withBase(html,url);
    stage.append(frame);
    }
    function fail(){
    if(settled)return;
    settled=true;
    status('<strong>'+C.t('readerFail')+'</strong><span>'+C.t('readerEmpty')+'</span><button class="btn btn--primary" type="button" data-external-open>'+C.t('openBrowser')+'</button>');
    var b=stage.querySelector('[data-external-open]');
    if(b)b.addEventListener('click',function(){B.newTab({kind:'web',url:url})});
    }
    var jina=fetchWithTimeout('https://r.jina.ai/'+url,{headers:{'Accept':'text/plain'},credentials:'omit'},4000)
    .then(function(res){if(!res.ok)throw new Error('HTTP '+res.status);return res.text()})
    .then(function(text){if(!text||!text.trim())throw new Error('empty');finishJina(text)})
    .catch(function(){});
    var proxy=fetchProxyHtml(url).then(finishProxy).catch(function(){});
    Promise.allSettled([jina,proxy]).then(fail);
    }
    readerBtn.addEventListener('click',function(){
    if(mode==='reader')showSite();
    else showReader();
    });
    shell.querySelector('[data-external]').addEventListener('click',function(){B.newTab({kind:'web',url:url})});
    var host=(C.domainOf(url)||'').toLowerCase();
    var blocked=[/(^|\.)google\./,/youtube\.com$/,/facebook\.com$/,/twitter\.com$/,/x\.com$/,/instagram\.com$/,/linkedin\.com$/,/reddit\.com$/,/tiktok\.com$/];
    if(host==='github.com'||host==='www.github.com'){handleGithub(url);return}
    if(blocked.some(function(re){return re.test(host)})){showBlockedCard(C.t('webBlocked'));return}
    showSite();
    function showBlockedCard(title){
    status('<strong>'+title+'</strong><span>'+C.t('readerNotice')+'</span><div class="web-choice">'+
    '<button class="btn btn--primary" type="button" data-reader-card>'+C.t('readerMode')+'</button>'+
    '<button class="btn" type="button" data-site-card>'+C.t('siteMode')+'</button>'+
    '<button class="btn" type="button" data-inapp-card>'+C.t('openBrowser')+'</button>'+
    '</div>');
    var rb=stage.querySelector('[data-reader-card]');
    if(rb)rb.addEventListener('click',showReader);
    var sb=stage.querySelector('[data-site-card]');
    if(sb)sb.addEventListener('click',showSite);
    var nb=stage.querySelector('[data-inapp-card]');
    if(nb)nb.addEventListener('click',function(){B.newTab({kind:'web',url:url})});
    }
    function handleGithub(target){
    var u;
    try{u=new URL(target)}catch(e){showBlockedCard(C.t('githubEmbedBlocked'));return}
    if(u.pathname==='/'||u.pathname===''){
    C.githubStore.set({query:''});
    B.navigatePage('/github');
    return;
    }
    if(u.pathname==='/search'){
    C.githubStore.set({query:u.searchParams.get('q')||''});
    B.navigatePage('/github');
    return;
    }
    var parts=u.pathname.split('/').filter(Boolean);
    if(parts.length>=2){showGithubRepo(parts[0],parts[1]);return}
    showBlockedCard(C.t('githubEmbedBlocked'));
    }
    function showGithubRepo(owner,repo){
    mode='site';updateModeUI();
    status('<span class="web-spinner"></span><span>'+C.t('githubEmbedBlocked')+'</span>');
    fetchWithTimeout('https://api.github.com/repos/'+encodeURIComponent(owner)+'/'+encodeURIComponent(repo),{headers:C.githubHeaders(C.githubToken()),credentials:'omit'},10000)
    .then(function(res){if(!res.ok)throw new Error('HTTP '+res.status);return res.json()})
    .then(function(d){
    status('<div class="embed-card"><div class="embed-name">'+C.escapeHtml(d.full_name||owner+'/'+repo)+'</div>'+
    '<div class="embed-desc">'+C.escapeHtml(d.description||'')+'</div>'+
    '<div class="embed-meta">★ '+(d.stargazers_count||0)+(d.language?' · '+C.escapeHtml(d.language):'')+'</div></div>'+
    '<div class="web-choice"><button class="btn btn--primary" type="button" data-gh-files>'+C.t('browseFiles')+'</button><button class="btn" type="button" data-gh-reader>'+C.t('readerMode')+'</button>'+
    '<button class="btn" type="button" data-gh-search>'+C.t('useApi')+'</button></div>');
    var fb=stage.querySelector('[data-gh-files]');
    if(fb)fb.addEventListener('click',function(){if(window.App&&App.openGithubRepo)App.openGithubRepo(owner+'/'+repo)});
    var rb=stage.querySelector('[data-gh-reader]');
    if(rb)rb.addEventListener('click',showReader);
    var sb=stage.querySelector('[data-gh-search]');
    if(sb)sb.addEventListener('click',function(){C.githubStore.set({query:owner+'/'+repo});B.navigatePage('/github')});
    })
    .catch(function(err){status('<strong>'+C.t('readerFail')+'</strong><span>'+C.escapeHtml(err.message)+'</span><div class="web-choice"><button class="btn btn--primary" type="button" data-gh-reader>'+C.t('readerMode')+'</button><button class="btn" type="button" data-inapp-card>'+C.t('openBrowser')+'</button></div>');
    var rb=stage.querySelector('[data-gh-reader]');
    if(rb)rb.addEventListener('click',showReader);
    var nb=stage.querySelector('[data-inapp-card]');
    if(nb)nb.addEventListener('click',function(){B.newTab({kind:'web',url:url})});
    });
    }
    }
    function openGameOverlay(){
    if(document.querySelector('.game-overlay'))return;
    var overlay=document.createElement('div');
    overlay.className='game-overlay';
    overlay.innerHTML='<div class="game-overlay-card"><div class="game-overlay-head"><span>'+C.t('offlineGame')+'</span><button class="game-overlay-close" type="button" aria-label="close">×</button></div><iframe class="game-overlay-frame" src="./game/embed.html" title="Dino"></iframe></div>';
    document.body.append(overlay);
    var frame=overlay.querySelector('.game-overlay-frame');
    function close(){
    document.removeEventListener('keydown',onKey);
    overlay.remove();
    }
    function onKey(e){if(e.key==='Escape')close()}
    overlay.querySelector('.game-overlay-close').addEventListener('click',close);
    overlay.addEventListener('click',function(e){if(e.target===overlay)close()});
    document.addEventListener('keydown',onKey);
    frame.addEventListener('load',function(){setTimeout(function(){try{frame.contentWindow.focus()}catch(e){}syncGameFrames()},240)});
    setTimeout(syncGameFrames,400);
    }
    B.openGameOverlay=openGameOverlay;
    B.loadWebView=loadWebView;
    
    function applyZoomToIframe(){
    var iframe=document.querySelector('#viewport iframe');
    if(!iframe)return;
    var z=C.settingsStore.get().zoom||100;
    if(z===100){
    iframe.style.transform='';
    iframe.style.transformOrigin='';
    iframe.style.width='';
    iframe.style.height='';
    }else{
    var r=z/100;
    iframe.style.transformOrigin='0 0';
    iframe.style.transform='scale('+r+')';
    iframe.style.width=(100/r)+'%';
    iframe.style.height=(100/r)+'%';
    }
    }
    B.applyZoomToIframe=applyZoomToIframe;
    
    function renderAll(rebuild){renderTabs();renderToolbar();renderBookmarksBar();if(rebuild)lastKey=null;renderViewport(currentEntry())}
    B.renderAll=renderAll;
    
    var bookmarksRendered=false;
    function renderBookmarksBar(){
    var bar=document.querySelector('#bookmarks');
    if(!bar)return;
    if(!bookmarksRendered){
    bar.innerHTML='<div class="bookmarks-inner"><button class="bookmark-add" type="button" data-add title="'+C.t('addBookmark')+'">'+C.ICONS.plus+'</button><div class="bookmarks-sep"></div><div class="bookmarks-list" data-list></div></div>';
    bar.querySelector('[data-add]').addEventListener('click',function(e){e.stopPropagation();ensureMenus();toggleMenu(bookmarksMenuEl,e.currentTarget,'left')});
    bookmarksRendered=true;
    }
    var list=bar.querySelector('[data-list]');
    var items=C.bookmarksStore.get().items;
    list.innerHTML=items.map(function(it){
    var fav=C.faviconImg(it.url);
    var icon=fav||'<span class="bookmark-badge">'+C.escapeHtml(C.initial(it.name))+'</span>';
    return'<button class="bookmark-item" type="button" data-open="'+C.escapeHtml(it.url)+'">'+icon+'<span>'+C.escapeHtml(it.name)+'</span></button>';
    }).join('');
    list.onclick=function(e){var btn=e.target.closest('[data-open]');if(btn)B.openUrl(btn.dataset.open)};
    }
    
    var mainMenuEl=null,bookmarksMenuEl=null,zoomMenuEl=null;
    
    var MENU_MAIN=[
    {key:'newTab',act:'new-tab',icon:'plus',sc:'Ctrl+T'},
    {key:'newWindow',act:'new-window',icon:'window',sc:'Ctrl+N'},
    {key:'newIncognito',act:'incognito',icon:'incognito'},
    {sep:1},
    {key:'reload',act:'reload',icon:'reload'},
    {key:'zoom',act:'zoom',icon:'zoom'},
    {sep:1},
    {key:'history',act:'history',icon:'history'},
    {key:'tabGroups',act:'tab-groups',icon:'groups'},
    {key:'downloads',act:'downloads',icon:'download'},
    {key:'offlineGame',act:'game',icon:'game'},
    {key:'passwords',act:'passwords',icon:'password'},
    {sep:1},
    {key:'clearBrowsing',act:'clear-data',icon:'clearData'},
    {key:'translate',act:'translate',icon:'translate'},
    {sep:1},
    {key:'plugins',act:'plugins',icon:'plugin'},
    {key:'settings',act:'settings',icon:'settings'},
    {key:'aiChat',act:'ai-chat',icon:'chat'},
    {key:'help',act:'help',icon:'help'}
    ];
    
    var MENU_BOOKMARKS=[
    {key:'openBookmarks',act:'open',icon:'star'},
    {key:'openInNewWindow',act:'new-window',icon:'window'},
    {key:'openInIncognito',act:'incognito',icon:'incognito'},
    {key:'openInTabGroup',act:'tab-group',icon:'groups'},
    {sep:1},
    {key:'bookmarkCurrent',act:'add-current',icon:'plus'},
    {key:'addBookmark',act:'add',icon:'plus'},
    {key:'manageBookmarks',act:'manage',icon:'star'},
    ];
    
    function buildMenu(items,onClick){
    var el=document.createElement('div');
    el.className='dropdown';
    el.hidden=true;
    el.innerHTML=items.map(function(it){
    if(it.sep)return'<div class="menu-sep"></div>';
    return'<button class="menu-item" type="button" data-act="'+it.act+'"><span class="mi-icon">'+(C.ICONS[it.icon]||'')+'</span><span class="mi-label">'+C.t(it.key)+'</span>'+(it.sc?'<span class="mi-shortcut">'+it.sc+'</span>':'')+'</button>';
    }).join('');
    el.addEventListener('click',function(e){var btn=e.target.closest('[data-act]');if(!btn)return;el.hidden=true;onClick(btn.dataset.act)});
    document.body.append(el);
    return el;
    }
    
    function positionMenu(menu,anchor,align){
    var rect=anchor.getBoundingClientRect();
    var onRight=rect.left+rect.width/2>window.innerWidth/2;
    menu.style.top=(rect.bottom+6)+'px';
    if(onRight){menu.style.right=(window.innerWidth-rect.right)+'px';menu.style.left='auto'}
    else{menu.style.left=Math.max(12,rect.left)+'px';menu.style.right='auto'}
    var check=menu.getBoundingClientRect();
    if(check.bottom>window.innerHeight-12)menu.style.top=Math.max(12,rect.top-check.height-6)+'px';
    if(check.left<12){menu.style.left='12px';menu.style.right='auto';check=menu.getBoundingClientRect()}
    if(check.right>window.innerWidth-12){menu.style.left='auto';menu.style.right='12px'}
    }
    
    function toggleMenu(menu,anchor,align){
    if(!menu)return;
    if(!menu.hidden){menu.hidden=true;return}
    C.closeAllSelects();
    if(mainMenuEl)mainMenuEl.hidden=true;
    if(bookmarksMenuEl)bookmarksMenuEl.hidden=true;
    if(zoomMenuEl)zoomMenuEl.hidden=true;
    menu.hidden=false;
    positionMenu(menu,anchor,align);
    }
    
    function ensureMenus(){
    if(mainMenuEl)return;
    mainMenuEl=buildMenu(MENU_MAIN,handleMainAction);
    bookmarksMenuEl=buildMenu(MENU_BOOKMARKS,function(act){
    if(act==='add'){openBookmarkDialog(null);return}
    if(act==='add-current'){var url=B.getCurrentUrl();if(url&&url!=='about:blank')openBookmarkDialog(url);else C.toast(C.t('noBookmarks'),'error');return}
    if(act==='open'||act==='manage'){B.navigatePage('/bookmarks');return}
    if(act==='new-window'){B.newTab();return}
    if(act==='incognito'){window.open(location.pathname+'?incognito=1','_blank','noopener,width=1200,height=800');return}
    if(act==='tab-group'){var cur=B.getCurrentUrl();B.newTab();if(cur)B.pushHistory({kind:'web',url:cur});openCreateGroup();return}
    });
    zoomMenuEl=document.createElement('div');
    zoomMenuEl.className='dropdown';
    zoomMenuEl.hidden=true;
    var levels=[50,75,90,100,110,125,150,175,200];
    zoomMenuEl.innerHTML=levels.map(function(z){return'<button class="menu-item" type="button" data-zoom="'+z+'"><span class="mi-label">'+z+'%</span></button>'}).join('');
    zoomMenuEl.addEventListener('click',function(e){
    var btn=e.target.closest('[data-zoom]');
    if(!btn)return;
    zoomMenuEl.hidden=true;
    var z=parseInt(btn.dataset.zoom,10);
    C.settingsStore.set({zoom:z});
    applyZoomToIframe();
    });
    document.body.append(zoomMenuEl);
    var zoomBtn=mainMenuEl.querySelector('[data-act="zoom"]');
    if(zoomBtn)zoomBtn.addEventListener('click',function(e){e.stopPropagation();mainMenuEl.hidden=true;positionMenu(zoomMenuEl,zoomBtn,'right');zoomMenuEl.hidden=false});
    }
    
    function handleMainAction(act){
    if(act==='new-tab')return B.newTab();
    if(act==='new-window')return B.newTab();
    if(act==='incognito')return window.open(location.pathname+'?incognito=1','_blank','noopener,width=1200,height=800');
    if(act==='reload')return B.refresh();
    if(act==='zoom')return;
    if(act==='history')return B.navigatePage('/history');
    if(act==='tab-groups')return openCreateGroup();
    if(act==='downloads')return B.navigatePage('/downloads');
    if(act==='game'){
    var ent=currentEntry();
    if(!ent||ent.route!=='/home')B.navigatePage('/home');
    setTimeout(openGameOverlay,140);
    return;
    }
    if(act==='passwords')return B.navigatePage('/passwords');
    if(act==='clear-data'){C.confirmDialog(C.t('clearConfirm'),function(){C.clearBrowsingData();B.renderAll(true);C.toast(C.t('clearBrowsingDone'))});return}
    if(act==='translate'){if(window.App&&window.App.openAiTranslate)window.App.openAiTranslate();return}
    if(act==='plugins')return B.navigatePage('/plugins');
    if(act==='settings')return B.navigatePage('/settings');
    if(act==='ai-chat'){if(window.App&&window.App.openAiDrawer)window.App.openAiDrawer();return}
    if(act==='help')return B.navigatePage('/about');
    }
    
    function openCreateGroup(){
    var colors=C.GROUP_COLORS;
    var chosen=colors[0].value;
    var body=document.createElement('div');
    body.innerHTML='<div class="modal-field"><span class="modal-field-label">'+C.t('tabGroups')+'</span><input class="input" data-name maxlength="32"></div>'+
    '<div class="modal-field"><span class="modal-field-label">Color</span><div style="display:flex;gap:8px;flex-wrap:wrap">'+
    colors.map(function(c,i){return'<button type="button" data-color="'+c.value+'" style="width:32px;height:32px;border-radius:50%;background:'+c.value+';border:2px solid '+(i===0?'var(--text)':'transparent')+';cursor:pointer"></button>'}).join('')+
    '</div></div>';
    body.addEventListener('click',function(e){var btn=e.target.closest('[data-color]');if(!btn)return;chosen=btn.dataset.color;body.querySelectorAll('[data-color]').forEach(function(b){b.style.borderColor=b===btn?'var(--text)':'transparent'})});
    C.openModal({title:C.t('tabGroups'),body:body,confirmText:C.t('save'),onConfirm:function(){var name=body.querySelector('[data-name]').value.trim()||'Group';B.createGroup(name,chosen)}});
    }
    B.openCreateGroup=openCreateGroup;
    
    function openBookmarkDialog(url){
    var body=document.createElement('div');
    body.innerHTML='<div class="modal-field"><span class="modal-field-label">'+C.t('name')+'</span><input class="input" data-name maxlength="32"></div>'+
    '<div class="modal-field"><span class="modal-field-label">'+C.t('url')+'</span><input class="input" data-url placeholder="https://..." autocomplete="off"></div>';
    var urlInput=body.querySelector('[data-url]');
    var nameInput=body.querySelector('[data-name]');
    if(url){urlInput.value=url;var d=C.domainOf(url);if(d)nameInput.value=d}
    C.openModal({title:C.t('addBookmark'),body:body,confirmText:C.t('add'),onConfirm:function(){
    var name=nameInput.value.trim()||C.domainOf(urlInput.value)||'Bookmark';
    var finalUrl=C.normalizeUrl(urlInput.value);
    if(!finalUrl){C.toast(C.t('urlRequired'),'error');return false}
    C.bookmarksStore.set(function(s){return{items:s.items.concat([{id:C.uid(),name:name,url:finalUrl}])}});
    C.toast(C.t('bookmarkAdded'));
    renderBookmarksBar();
    }});
    }
    B.openBookmarkDialog=openBookmarkDialog;
    
    function applyAccessibility(s){
    var root=document.documentElement;
    root.style.setProperty('--font-scale',s.fontScale||1);
    root.style.setProperty('--btn-scale',s.buttonScale||1);
    root.setAttribute('data-cb',s.colorBlind||'none');
    root.setAttribute('data-left-hand',s.leftHanded?'true':'false');
    var font=C.FONTS.find(function(f){return f.id===s.fontFamily})||C.FONTS[0];
    root.style.setProperty('--font-family',font.stack);
    }
    B.applyAccessibility=applyAccessibility;
    
    function applyTheme(){
    var cur=C.settingsStore.get().theme;
    var root=document.documentElement;
    ['--bg','--bg-elev','--bg-hover','--bg-active','--border','--border-strong','--text','--text-dim','--text-faint','--accent','--accent-soft','--tabs-bg','--home-bg-image'].forEach(function(v){root.style.removeProperty(v)});
    if(cur&&cur.indexOf('custom:')===0){
    var id=cur.split(':')[1];
    var t=C.customThemesStore.get().items.find(function(x){return x.id===id});
    root.dataset.theme='light';
    root.dataset.homeDark=t&&t.bg&&C.isColorDark(t.bg)?'true':'false';
    if(t){
    var bg=t.bg||'#ffffff';
    var isDark=C.isColorDark(bg);
    var overlay=isDark?'rgba(255,255,255,':'rgba(0,0,0,';
    root.style.setProperty('--bg',bg);
    root.style.setProperty('--tabs-bg',bg);
    root.style.setProperty('--bg-elev',overlay+'.08)');
    root.style.setProperty('--bg-hover',overlay+'.12)');
    root.style.setProperty('--bg-active',overlay+'.18)');
    root.style.setProperty('--border',overlay+'.10)');
    root.style.setProperty('--border-strong',overlay+'.22)');
    if(isDark){
    root.style.setProperty('--text','#e8eaed');
    root.style.setProperty('--text-dim','#9aa0a6');
    root.style.setProperty('--text-faint','#646a72');
    }else{
    root.style.setProperty('--text','#1f2225');
    root.style.setProperty('--text-dim','#5f6368');
    root.style.setProperty('--text-faint','#9aa0a6');
    }
    if(t.accent){
    root.style.setProperty('--accent',t.accent);
    root.style.setProperty('--accent-soft',C.hexToRgba(t.accent,.16));
    }
    if(t.image){
    root.style.setProperty('--home-bg-image','url('+t.image+')');
    }
    }
    }else{
    root.dataset.theme=cur||'system';
    var darkThemes=['dark','graphite','midnight','forest','sunset','violet'];
    var darkTheme=darkThemes.indexOf(cur)>=0||(cur==='system'&&window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches);
    root.dataset.homeDark=darkTheme?'true':'false';
    }
    applyHomeBackground();
    setTimeout(syncGameFrames,0);
    }
    function applyHomeBackground(){
    var root=document.documentElement;
    var s=C.settingsStore.get();
    var cur=s.theme||'system';
    var bg=C.HOME_BACKGROUNDS.find(function(x){return x.id===(s.homeBackground||'none')});
    var hasCustomImage=false;
    if(cur.indexOf('custom:')===0){
    var custom=C.customThemesStore.get().items.find(function(x){return x.id===cur.split(':')[1]});
    hasCustomImage=!!(custom&&custom.image);
    }
    if(hasCustomImage){
    root.removeAttribute('data-home-bg');
    root.removeAttribute('data-home-bg-id');
    return;
    }
    if(bg&&bg.id!=='none'){
    root.setAttribute('data-home-bg',bg.tone);
    root.setAttribute('data-home-bg-id',bg.id);
    var bgUrl=new URL('./images/user_background/'+bg.file,location.href).href;
    root.style.setProperty('--home-bg-image','url("'+bgUrl+'")');
    }else{
    root.removeAttribute('data-home-bg');
    root.removeAttribute('data-home-bg-id');
    root.style.removeProperty('--home-bg-image');
    }
    }
    function syncGameFrames(){
    var cs=getComputedStyle(document.documentElement);
    var dark=document.documentElement.dataset.theme==='dark'||(document.documentElement.dataset.theme==='system'&&window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches);
    var appLang=C.resolveLang(C.settingsStore.get().language);
    var gameLang={'zh-CN':'zh','zh-TW':'zh-Hant','lzh':'lzh','en-US':'en','ja-JP':'ja','ko-KR':'ko','fr-FR':'fr','de-DE':'de','es-ES':'es','ru-RU':'ru','pt-BR':'pt','it-IT':'it','ar-SA':'ar'}[appLang]||'en';
    var vars=['--bg','--bg-elev','--bg-hover','--bg-active','--border','--border-strong','--text','--text-dim','--text-faint','--accent','--accent-soft'];
    document.querySelectorAll('.home-game-frame,.game-frame,.game-overlay-frame').forEach(function(frame){
    try{
    var doc=frame.contentWindow.document;
    if(!doc||!doc.documentElement)return;
    var root=doc.documentElement;
    vars.forEach(function(v){root.style.setProperty(v,cs.getPropertyValue(v))});
    root.dataset.theme=dark?'dark':'light';
    root.lang=appLang;
    if(doc.body)doc.body.style.fontFamily=cs.getPropertyValue('--font-family');
    var startBtn=doc.getElementById('startGameBtn');
    if(startBtn)startBtn.textContent=C.t('startGame');
    try{frame.contentWindow.localStorage.setItem('fuey-lang',gameLang)}catch(e){}
    try{frame.contentWindow.postMessage({type:'fuey-sync',theme:dark?'dark':'light',handed:C.settingsStore.get().leftHanded?'left':'right',lang:gameLang,version:C.VERSION},'*')}catch(e){}
    }catch(e){}
    });
    }
    B.syncGameFrames=syncGameFrames;
    B.applyHomeBackground=applyHomeBackground;
    B.applyTheme=applyTheme;
    
    function syncAppHeight(){
    var vv=window.visualViewport;
    var h=window.innerHeight;
    if(vv&&(!vv.scale||Math.abs(vv.scale-1)<0.02))h=Math.min(h,vv.height);
    document.documentElement.style.setProperty('--app-height',Math.round(h)+'px');
    }
    B.syncAppHeight=syncAppHeight;
    
    B.init=function(){
    ensureMenus();
    syncAppHeight();
    window.addEventListener('resize',syncAppHeight);
    window.addEventListener('orientationchange',function(){setTimeout(syncAppHeight,280)});
    if(window.visualViewport){
    window.visualViewport.addEventListener('resize',syncAppHeight);
    window.visualViewport.addEventListener('scroll',syncAppHeight);
    }
    C.bookmarksStore.subscribe(function(){renderBookmarksBar()});
    C.customThemesStore.subscribe(function(){applyTheme()});
    C.settingsStore.subscribe(function(s){applyTheme();applyAccessibility(s);applyZoomToIframe()});
    applyTheme();
    applyAccessibility(C.settingsStore.get());
    renderAll(true);
    document.addEventListener('click',function(e){
    if(mainMenuEl&&!mainMenuEl.hidden&&!mainMenuEl.contains(e.target)&&!e.target.closest('[data-menu-btn]'))mainMenuEl.hidden=true;
    if(bookmarksMenuEl&&!bookmarksMenuEl.hidden&&!bookmarksMenuEl.contains(e.target)&&!e.target.closest('[data-add]'))bookmarksMenuEl.hidden=true;
    if(zoomMenuEl&&!zoomMenuEl.hidden&&!zoomMenuEl.contains(e.target)&&!e.target.closest('[data-act="zoom"]'))zoomMenuEl.hidden=true;
    });
    document.addEventListener('contextmenu',function(e){var vp=document.querySelector('#viewport');if(vp&&!vp.classList.contains('is-webview'))e.preventDefault()});
    document.addEventListener('keydown',function(e){
    if(e.key==='Escape'){if(mainMenuEl)mainMenuEl.hidden=true;if(bookmarksMenuEl)bookmarksMenuEl.hidden=true;if(zoomMenuEl)zoomMenuEl.hidden=true;closeTabsSheet();C.closeAllSelects()}
    if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='l'){e.preventDefault();if(toolbarRefs)toolbarRefs.input.focus()}
    if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='t'){e.preventDefault();B.newTab()}
    });
    if(window.matchMedia){
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',function(){applyTheme()});
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change',function(){applyTheme()});
    }
    C.installSelectGlobal();
    };
    })();