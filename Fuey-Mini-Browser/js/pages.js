(function(){
    'use strict';
    window.App=window.App||{};
    var C=window.Core;
    var B=window.Browser;
    var I=C.ICONS;
    function T(k,vars){return C.t(k,vars)}
    
    function backBar(titleKey){
    return'<div class="page-bar"><button class="back-btn" type="button" data-back>'+I.back+' '+T('back')+'</button><h2 class="page-title">'+T(titleKey)+'</h2><span style="width:78px"></span></div>';
    }
    function bindBack(el){var btn=el.querySelector('[data-back]');if(btn)btn.addEventListener('click',function(){B.back()})}
    
    function fetchWithTimeout(url,opts,ms){
    var ctrl=typeof AbortController!=='undefined'?new AbortController():null;
    var timer=setTimeout(function(){if(ctrl)ctrl.abort()},ms);
    var conf=Object.assign({},opts||{});
    if(ctrl)conf.signal=ctrl.signal;
    return fetch(url,conf).then(function(res){clearTimeout(timer);return res},function(err){clearTimeout(timer);throw err});
    }
    
    function fetchGithubRate(token,cb){
    fetchWithTimeout('https://api.github.com/rate_limit',{headers:C.githubHeaders(token),credentials:'omit'},8000)
    .then(function(res){if(res.status===401)throw new Error('auth');if(res.status===403)throw new Error('auth');if(!res.ok)throw new Error('HTTP '+res.status);return res.json()})
    .then(function(data){var r=(data&&data.resources)||{};var s=r.search||r.core||{limit:60,remaining:0,reset:0};var core=r.core||{limit:60,remaining:0};cb(null,{limit:s.limit||60,remaining:s.remaining||0,reset:s.reset||0,coreLimit:core.limit||60,coreRemaining:core.remaining||0})})
    .catch(function(err){cb(err)});
    }
    
    function renderHome(container){
    var el=document.createElement('div');
    el.className='page';
    el.innerHTML='<div class="home"><div class="home-inner">'+
    '<div class="home-logo">Fuey Mini Browser'+(C.isIncognito?'<span class="incognito-badge">'+T('incognito')+'</span>':'')+'</div>'+
    '<form class="search-row" data-form>'+
    '<div class="search-wrap">'+
    '<div class="search-box"><input type="text" placeholder="'+T('searchWeb')+'" autocomplete="off" spellcheck="false" data-input></div>'+
    '<div class="search-history" data-history hidden></div>'+
    '</div>'+
    '<button class="search-btn" type="submit" title="'+T('search')+'">'+I.searchBig+'</button>'+
    '<button class="ai-btn" type="button" data-ai title="'+T('aiChat')+'">'+I.sparkle+'<span>'+T('ai')+'</span></button>'+
    '</form>'+
    '<div class="shortcuts" data-shortcuts></div>'+
    '</div></div>';
    var form=el.querySelector('[data-form]');
    var input=el.querySelector('[data-input]');
    var aiBtn=el.querySelector('[data-ai]');
    var shortcuts=el.querySelector('[data-shortcuts]');
    var historyBox=el.querySelector('[data-history]');

    
    function tileInner(url){
    var src=C.faviconImg(url);
    if(!src)return'<span style="display:grid;place-items:center;color:var(--text-faint)">'+I.globe+'</span>';
    return src;
    }
    
    function renderShortcuts(){
    var items=C.shortcutsStore.get().items;
    shortcuts.innerHTML=items.map(function(item){
    return'<div class="shortcut" data-id="'+item.id+'">'+
    '<button class="shortcut-open" type="button" data-open="'+C.escapeHtml(item.url)+'">'+
    '<span class="shortcut-tile">'+tileInner(item.url)+'</span>'+
    '<span class="shortcut-name">'+C.escapeHtml(item.name)+'</span>'+
    '</button>'+
    '<button class="shortcut-del" type="button" data-del="'+item.id+'">×</button>'+
    '</div>';
    }).join('')+
    '<div class="shortcut shortcut-add"><button class="shortcut-open" type="button" data-add><span class="shortcut-tile">'+I.plusBig+'</span><span class="shortcut-name">'+T('add')+'</span></button></div>';
    }
    
    function renderHistoryDropdown(){
    var items=C.historyStore.get().items.slice(0,8);
    if(!items.length){historyBox.hidden=true;return}
    var html='<div class="search-history-label"><span>'+T('recentSearches')+'</span><button class="search-history-clear" type="button" data-clear-history>'+T('clearSearchHistory')+'</button></div>';
    html+=items.map(function(it){
    var icon=C.faviconImg(it.url)||I.globeSmall;
    return'<div class="search-history-row"><button class="search-history-item" type="button" data-url="'+C.escapeHtml(it.url)+'">'+icon+'<span class="search-history-text">'+C.escapeHtml(it.title||it.url)+'</span></button><button class="search-history-del" type="button" data-del-history="'+C.escapeHtml(it.url)+'" aria-label="delete">×</button></div>';
    }).join('');
    historyBox.innerHTML=html;
    historyBox.hidden=false;
    }
    
    function openAdd(){
    var body=document.createElement('div');
    body.innerHTML='<div class="modal-field"><span class="modal-field-label">'+T('name')+'</span><input class="input" data-name maxlength="32"></div>'+
    '<div class="modal-field"><span class="modal-field-label">'+T('url')+'</span><input class="input" data-url placeholder="https://..." autocomplete="off"></div>';
    C.openModal({title:T('addShortcut'),body:body,confirmText:T('add'),onConfirm:function(){
    var name=body.querySelector('[data-name]').value.trim();
    var url=C.normalizeUrl(body.querySelector('[data-url]').value);
    if(!name){C.toast(T('nameRequired'),'error');return false}
    if(!url){C.toast(T('urlRequired'),'error');return false}
    C.shortcutsStore.set(function(s){return{items:s.items.concat([{id:C.uid(),name:name,url:url}])}});
    C.toast(T('shortcutAdded'));
    }});
    }
    
    form.addEventListener('submit',function(e){e.preventDefault();var v=input.value.trim();if(!v)return;historyBox.hidden=true;var eng=C.settingsStore.get().engine;if(C.isGithubEngine(eng)){C.githubStore.set({query:v});B.navigatePage('/github');return}B.openUrl(C.resolveTarget(v,eng))});
    aiBtn.addEventListener('click',function(){if(window.App&&window.App.openAiDrawer)window.App.openAiDrawer()});
    
    input.addEventListener('click',function(){renderHistoryDropdown()});
    input.addEventListener('blur',function(){setTimeout(function(){historyBox.hidden=true},200)});
    historyBox.addEventListener('mousedown',function(e){e.preventDefault()});
    historyBox.addEventListener('click',function(e){
    if(e.target.closest('[data-clear-history]')){
    C.historyStore.set({items:[]});
    historyBox.hidden=true;
    C.toast(T('searchHistoryCleared'));
    return;
    }
    var del=e.target.closest('[data-del-history]');
    if(del){
    var target=del.dataset.delHistory;
    C.historyStore.set(function(s){return{items:s.items.filter(function(it){return it.url!==target})}});
    renderHistoryDropdown();
    return;
    }
    var item=e.target.closest('[data-url]');
    if(item){B.openUrl(item.dataset.url);historyBox.hidden=true;input.blur()}
    });
    
    shortcuts.addEventListener('click',function(e){
    if(e.target.closest('[data-add]')){openAdd();return}
    var del=e.target.closest('[data-del]');
    if(del){C.shortcutsStore.set(function(s){return{items:s.items.filter(function(it){return it.id!==del.dataset.del})}});return}
    var open=e.target.closest('[data-open]');
    if(open)B.openUrl(open.dataset.open);
    });
    var unsub=C.shortcutsStore.subscribe(renderShortcuts);
    renderShortcuts();
    container.append(el);
    return{destroy:function(){unsub()}};
    }
    
    function renderAiSettings(container){
    var el=document.createElement('div');
    el.className='page';
    el.innerHTML='<div class="page-inner">'+
    backBar('aiSection')+
    '<section class="settings-group"><h3 class="settings-group-title">'+T('aiConfig')+'</h3><div class="settings-list">'+
    '<div class="setting-row" style="grid-template-columns:1fr"><div><div class="setting-label">'+T('provider')+'</div><div class="provider-picker" data-provider-picker></div></div></div>'+
    '<div class="setting-row"><span class="setting-label">'+T('endpoint')+'</span><div class="setting-control"><input class="input" data-endpoint autocomplete="off" placeholder="https://api.example.com/v1/chat/completions"></div></div>'+
    '<div class="setting-row"><span class="setting-label">'+T('apiKey')+'</span><div class="setting-control"><input class="input" type="password" data-key autocomplete="off"></div></div>'+
    '</div></section>'+
    '<section class="settings-group"><h3 class="settings-group-title">'+T('chatSection')+'</h3><div class="settings-list">'+
    '<div class="setting-row"><span class="setting-label">'+T('aiGoal')+'</span><div class="setting-control" data-sel="persona"></div></div>'+
    '<div class="setting-row"><span class="setting-label">'+T('chatModel')+'</span><div class="setting-control"><div class="model-control"><input class="input" data-chat-model autocomplete="off" placeholder="'+T('modelPlaceholder')+'"><div data-sel="chat-model-select"></div><button class="btn" type="button" data-fetch-models>'+T('fetchModels')+'</button></div></div></div>'+
    '<div class="setting-row" style="grid-template-columns:1fr"><span class="models-status" data-models-status></span></div>'+
    '<div class="setting-row"><span class="setting-label">'+T('temperature')+'</span><div class="setting-control"><input class="input" type="number" min="0" max="2" step="0.1" data-chat-temp></div></div>'+
    '<div class="setting-row"><span class="setting-label">'+T('thinking')+'</span><div class="setting-control" data-sel="chat-thinking"></div></div>'+
    '</div></section>'+
    '<section class="settings-group"><h3 class="settings-group-title">'+T('transSection')+'</h3><div class="settings-list">'+
    '<div class="setting-row"><span class="setting-label">'+T('transModel')+'</span><div class="setting-control"><div class="model-control"><input class="input" data-trans-model autocomplete="off" placeholder="'+T('modelPlaceholder')+'"><div data-sel="trans-model-select"></div></div></div></div>'+
    '<div class="setting-row"><span class="setting-label">'+T('transStrength')+'</span><div class="setting-control"><input class="input" type="number" min="0" max="2" step="0.1" data-trans-temp></div></div>'+
    '<div class="setting-row"><span class="setting-label">'+T('transTarget')+'</span><div class="setting-control" data-sel="trans-target"></div></div>'+
    '<div class="setting-row" style="grid-template-columns:1fr"><span class="setting-hint">'+T('transDisclaimer')+'</span></div>'+
    '</div></section>'+
    '<div style="display:flex;justify-content:flex-end;gap:10px;margin-top:36px"><button class="btn" type="button" data-cancel>'+T('cancel')+'</button><button class="btn btn--primary" type="button" data-save>'+T('save')+'</button></div>'+
    '</div>';
    bindBack(el);
    var ai=C.aiStore.get();
    var endpointInput=el.querySelector('[data-endpoint]');
    var keyInput=el.querySelector('[data-key]');
    var chatModelInput=el.querySelector('[data-chat-model]');
    var chatTempInput=el.querySelector('[data-chat-temp]');
    var transModelInput=el.querySelector('[data-trans-model]');
    var transTempInput=el.querySelector('[data-trans-temp]');
    var statusEl=el.querySelector('[data-models-status]');
    var statusRow=statusEl.parentNode;
    var fetchBtn=el.querySelector('[data-fetch-models]');
    statusRow.hidden=true;
    function setStatus(msg,kind){statusEl.textContent=msg;statusEl.className='models-status'+(kind?' is-'+kind:'');statusRow.hidden=!msg}
    var providerValue=ai.provider||'custom';
    var picker=el.querySelector('[data-provider-picker]');
    function renderProviders(){
    picker.innerHTML=Object.keys(C.PROVIDERS).map(function(k){
    var p=C.PROVIDERS[k];
    var on=k===providerValue?' is-active':'';
    return'<button class="provider-item'+on+'" type="button" data-provider="'+k+'"><span class="provider-badge" style="--pc:'+p.color+'" data-badge="'+C.escapeHtml(p.badge)+'"><img src="./images/artificial_intelligence/'+k+'.png" alt="" loading="lazy"></span><span class="provider-name">'+C.escapeHtml(p.labelKey?T(p.labelKey):p.label)+'</span></button>';
    }).join('');
    picker.querySelectorAll('.provider-badge img').forEach(function(img){
    img.addEventListener('error',function(){
    var badge=img.parentNode;
    img.remove();
    badge.classList.add('is-letter');
    badge.textContent=badge.getAttribute('data-badge')||'';
    });
    });
    }
    function selectProvider(k){
    var p=C.PROVIDERS[k];if(!p)return;
    providerValue=k;
    endpointInput.value=p.endpoint||'';
    chatModelInput.value=p.model||'';
    transModelInput.value=p.model||'';
    renderProviders();
    }
    renderProviders();
    picker.addEventListener('click',function(e){var btn=e.target.closest('[data-provider]');if(btn)selectProvider(btn.dataset.provider)});
    var personaSel=C.createSelect({value:ai.chat.persona||'general',items:C.AI_PERSONAS.map(function(p){return{value:p.id,label:T(p.label)}}),width:'220px'});
    el.querySelector('[data-sel="persona"]').append(personaSel.el);
    var chatThinkingSel=C.createSelect({value:ai.chat.thinking,items:C.THINKING_KEYS.map(function(k){return{value:k,label:T(k)}})});
    el.querySelector('[data-sel="chat-thinking"]').append(chatThinkingSel.el);
    var transTargetSel=C.createSelect({value:ai.translate.target,items:C.TRANS_LANGS.map(function(l){return{value:l.code,label:l.name}}),width:'240px'});
    el.querySelector('[data-sel="trans-target"]').append(transTargetSel.el);
    var chatModelSel=C.createSelect({value:ai.chat.model||'',items:(ai.chat.model?[{value:ai.chat.model,label:ai.chat.model}]:[]),width:'190px',onChange:function(v){chatModelInput.value=v}});
    var chatModelWrap=el.querySelector('[data-sel="chat-model-select"]');
    chatModelWrap.append(chatModelSel.el);
    chatModelWrap.hidden=!ai.chat.model;
    var transModelSel=C.createSelect({value:ai.translate.model||'',items:(ai.translate.model?[{value:ai.translate.model,label:ai.translate.model}]:[]),width:'190px',onChange:function(v){transModelInput.value=v}});
    var transModelWrap=el.querySelector('[data-sel="trans-model-select"]');
    transModelWrap.append(transModelSel.el);
    transModelWrap.hidden=!ai.translate.model;
    endpointInput.value=ai.endpoint||'';
    keyInput.value=ai.apiKey||'';
    chatModelInput.value=ai.chat.model||'';
    chatTempInput.value=ai.chat.temperature;
    transModelInput.value=ai.translate.model||'';
    transTempInput.value=ai.translate.temperature;
    function applyModelList(list){
    var items=list.map(function(id){return{value:id,label:id}});
    chatModelSel.setItems(items);
    transModelSel.setItems(items);
    chatModelWrap.hidden=false;
    transModelWrap.hidden=false;
    if(!chatModelInput.value)chatModelInput.value=chatModelSel.getValue();
    if(!transModelInput.value)transModelInput.value=transModelSel.getValue();
    }
    function fetchModels(){
    var endpoint=endpointInput.value.trim();
    var key=keyInput.value.trim();
    if(!endpoint){setStatus(T('fetchModelsFail',{msg:'endpoint'}),'error');return}
    var headers={'Content-Type':'application/json'};
    if(/api\.anthropic\.com/i.test(endpoint)){
    if(key)headers['x-api-key']=key;
    headers['anthropic-version']='2023-06-01';
    headers['anthropic-dangerous-direct-browser-access']='true';
    }else if(key){headers.Authorization='Bearer '+key}
    fetchBtn.disabled=true;
    fetchBtn.textContent=T('fetchingModels');
    setStatus(T('fetchingModels'));
    var ctrl=typeof AbortController!=='undefined'?new AbortController():null;
    var timer=setTimeout(function(){if(ctrl)ctrl.abort()},15000);
    var conf={headers:headers,credentials:'omit'};
    if(ctrl)conf.signal=ctrl.signal;
    fetch(C.modelsEndpoint(endpoint),conf)
    .then(function(res){if(!res.ok)throw new Error('HTTP '+res.status);return res.json()})
    .then(function(data){
    var raw=(data&&(data.data||data.models))||[];
    var list=raw.map(function(m){return typeof m==='string'?m:(m.id||m.name||m.display_name||'')}).filter(Boolean);
    list=list.filter(function(v,i){return list.indexOf(v)===i});
    if(!list.length)throw new Error(T('modelsEmpty'));
    applyModelList(list);
    setStatus(T('fetchModelsOk',{n:list.length}),'ok');
    }).catch(function(err){
    setStatus(T('fetchModelsFail',{msg:err.message}),'error');
    }).then(function(){
    clearTimeout(timer);
    fetchBtn.disabled=false;
    fetchBtn.textContent=T('fetchModels');
    });
    }
    fetchBtn.addEventListener('click',fetchModels);
    el.querySelector('[data-save]').addEventListener('click',function(){
    C.aiStore.set({provider:providerValue,endpoint:endpointInput.value.trim(),apiKey:keyInput.value.trim(),chat:{model:chatModelInput.value.trim(),temperature:parseFloat(chatTempInput.value)||0,thinking:chatThinkingSel.getValue(),persona:personaSel.getValue()},translate:{model:transModelInput.value.trim(),temperature:parseFloat(transTempInput.value)||0,thinking:ai.translate.thinking,target:transTargetSel.getValue()}});
    C.toast(T('saved'));
    });
    el.querySelector('[data-cancel]').addEventListener('click',function(){B.back()});
    container.append(el);
    return{destroy:function(){C.closeAllSelects()}};
    }
    
    function renderPasswords(container){
    var el=document.createElement('div');
    el.className='page';
    el.innerHTML='<div class="page-inner">'+
    backBar('passwords')+
    '<div class="list-head"><span class="setting-hint">'+T('managePasswords')+'</span><button class="btn btn--primary" type="button" data-create>'+T('add')+'</button></div>'+
    '<div class="list-body" data-list></div>'+
    '</div>';
    bindBack(el);
    var list=el.querySelector('[data-list]');
    var createBtn=el.querySelector('[data-create]');
    var revealed=new Set();
    function renderList(){
    var items=C.passwordsStore.get().items;
    if(!items.length){list.innerHTML='<div class="empty">'+T('noPasswords')+'</div>';list.style.borderTop='none';return}
    list.style.borderTop='';
    list.innerHTML=items.map(function(it){
    var open=revealed.has(it.id);
    var icon=C.faviconImg(it.domain)||I.globeSmall;
    return'<div class="list-row" data-id="'+it.id+'">'+
    '<div class="list-row-icon">'+icon+'</div>'+
    '<div><div class="list-row-name">'+C.escapeHtml(it.domain)+'</div><div class="list-row-meta">'+C.escapeHtml(it.username||'—')+' · '+C.formatDate(it.createdAt)+'</div></div>'+
    '<div class="list-row-actions">'+
    '<code class="code">'+C.escapeHtml(open?(it.plain||'••••••••'):C.maskKey(it.plain||'••••'))+'</code>'+
    '<button class="ghost-btn" type="button" data-toggle>'+(open?I.eyeOff:I.eye)+'</button>'+
    '<button class="ghost-btn" type="button" data-copy>'+I.copy+'</button>'+
    '<button class="ghost-btn is-danger" type="button" data-delete>'+I.trash+'</button>'+
    '</div></div>';
    }).join('');
    items.forEach(function(it){if(!it._plainLoaded&&it.cipher){C.decrypt(it.cipher).then(function(plain){it.plain=plain;it._plainLoaded=true;if(revealed.has(it.id))renderList()})}});
    }
    function openCreate(){
    var body=document.createElement('div');
    body.innerHTML='<div class="modal-field"><span class="modal-field-label">'+T('domain')+'</span><input class="input" data-domain placeholder="example.com"></div>'+
    '<div class="modal-field"><span class="modal-field-label">'+T('username')+'</span><input class="input" data-username></div>'+
    '<div class="modal-field"><span class="modal-field-label">'+T('password')+'</span><input class="input" type="password" data-password></div>';
    C.openModal({title:T('addPassword'),body:body,confirmText:T('save'),onConfirm:function(){
    var domain=body.querySelector('[data-domain]').value.trim();
    var username=body.querySelector('[data-username]').value.trim();
    var password=body.querySelector('[data-password]').value;
    if(!domain||!password){C.toast(T('nameRequired'),'error');return false}
    C.encrypt(password).then(function(cipher){
    C.passwordsStore.set(function(s){
    return{items:[{id:C.uid(),domain:domain.replace(/^https?:\/\//,'').replace(/\/$/,''),username:username,cipher:cipher,plain:password,_plainLoaded:true,createdAt:Date.now()}].concat(s.items)};
    });
    renderList();
    });
    return false;
    }});
    }
    list.addEventListener('click',function(e){
    var row=e.target.closest('[data-id]');
    if(!row)return;
    var id=row.dataset.id;
    var item=C.passwordsStore.get().items.find(function(x){return x.id===id});
    if(!item)return;
    if(e.target.closest('[data-toggle]')){if(revealed.has(id))revealed.delete(id);else revealed.add(id);if(item.cipher&&!item._plainLoaded){C.decrypt(item.cipher).then(function(plain){item.plain=plain;item._plainLoaded=true;renderList()})}else renderList();return}
    if(e.target.closest('[data-copy]')){var p=item.cipher&&!item._plainLoaded?C.decrypt(item.cipher):Promise.resolve(item.plain||'');p.then(function(v){C.copyText(v).then(function(){C.toast(T('copied'))})});return}
    if(e.target.closest('[data-delete]')){C.confirmDialog(T('deleteConfirm'),function(){C.passwordsStore.set(function(s){return{items:s.items.filter(function(x){return x.id!==id})}});revealed.delete(id);renderList();C.toast(T('deleted'))})}
    });
    createBtn.addEventListener('click',openCreate);
    var unsub=C.passwordsStore.subscribe(renderList);
    renderList();
    container.append(el);
    return{destroy:unsub};
    }
    
    function renderBookmarksManage(container){
    var el=document.createElement('div');
    el.className='page';
    el.innerHTML='<div class="page-inner">'+
    backBar('manageBookmarks')+
    '<div class="list-head"><span class="setting-hint">'+T('manageBookmarks')+'</span><button class="btn btn--primary" type="button" data-create>'+T('add')+'</button></div>'+
    '<div class="list-body" data-list></div>'+
    '</div>';
    bindBack(el);
    var list=el.querySelector('[data-list]');
    var createBtn=el.querySelector('[data-create]');
    function renderList(){
    var items=C.bookmarksStore.get().items;
    if(!items.length){list.innerHTML='<div class="empty">'+T('noBookmarks')+'</div>';list.style.borderTop='none';return}
    list.style.borderTop='';
    list.innerHTML=items.map(function(it){
    var icon=C.faviconImg(it.url)||I.globeSmall;
    return'<div class="list-row" data-id="'+it.id+'">'+
    '<div class="list-row-icon">'+icon+'</div>'+
    '<div><div class="list-row-name">'+C.escapeHtml(it.name)+'</div><div class="list-row-meta">'+C.escapeHtml(it.url)+'</div></div>'+
    '<div class="list-row-actions"><button class="ghost-btn" type="button" data-open>'+I.search+'</button><button class="ghost-btn is-danger" type="button" data-delete>'+I.trash+'</button></div>'+
    '</div>';
    }).join('');
    }
    list.addEventListener('click',function(e){
    var row=e.target.closest('[data-id]');
    if(!row)return;
    var id=row.dataset.id;
    var item=C.bookmarksStore.get().items.find(function(x){return x.id===id});
    if(!item)return;
    if(e.target.closest('[data-open]')){B.openUrl(item.url);return}
    if(e.target.closest('[data-delete]')){C.confirmDialog(T('deleteConfirm'),function(){C.bookmarksStore.set(function(s){return{items:s.items.filter(function(x){return x.id!==id})}});renderList();C.toast(T('deleted'))})}
    });
    createBtn.addEventListener('click',function(){B.openBookmarkDialog(null)});
    var unsub=C.bookmarksStore.subscribe(renderList);
    renderList();
    container.append(el);
    return{destroy:unsub};
    }
    
    function renderHistory(container){
    var el=document.createElement('div');
    el.className='page';
    el.innerHTML='<div class="page-inner">'+
    backBar('history')+
    '<div class="list-head"><input class="input" data-search placeholder="'+T('search')+'" style="flex:1;max-width:320px"><button class="btn btn--danger" type="button" data-clear>'+T('delete')+'</button></div>'+
    '<div class="list-body" data-list></div>'+
    '</div>';
    bindBack(el);
    var list=el.querySelector('[data-list]');
    var searchInput=el.querySelector('[data-search]');
    var clearBtn=el.querySelector('[data-clear]');
    function renderList(){
    var q=searchInput.value.trim().toLowerCase();
    var items=C.historyStore.get().items.filter(function(it){if(!q)return true;return(it.url+' '+it.title).toLowerCase().indexOf(q)>=0});
    if(!items.length){list.innerHTML='<div class="empty">'+T('noHistory')+'</div>';list.style.borderTop='none';return}
    list.style.borderTop='';
    list.innerHTML=items.map(function(it){
    var icon=C.faviconImg(it.url)||I.globeSmall;
    return'<div class="list-row" data-id="'+it.id+'">'+
    '<div class="list-row-icon">'+icon+'</div>'+
    '<div><div class="list-row-name">'+C.escapeHtml(it.title)+'</div><div class="list-row-meta">'+C.escapeHtml(it.url)+'</div></div>'+
    '<div class="list-row-actions"><button class="ghost-btn" type="button" data-open>'+I.search+'</button><button class="ghost-btn is-danger" type="button" data-delete>'+I.trash+'</button></div>'+
    '</div>';
    }).join('');
    }
    list.addEventListener('click',function(e){
    var row=e.target.closest('[data-id]');
    if(!row)return;
    var id=row.dataset.id;
    var item=C.historyStore.get().items.find(function(x){return x.id===id});
    if(!item)return;
    if(e.target.closest('[data-open]')){B.openUrl(item.url);return}
    if(e.target.closest('[data-delete]')){C.historyStore.set(function(s){return{items:s.items.filter(function(x){return x.id!==id})}});renderList()}
    });
    searchInput.addEventListener('input',renderList);
    clearBtn.addEventListener('click',function(){C.confirmDialog(T('clearConfirm'),function(){C.historyStore.set({items:[]});renderList();C.toast(T('searchHistoryCleared'))},{title:T('clearSearchHistory')})});
    var unsub=C.historyStore.subscribe(renderList);
    renderList();
    container.append(el);
    return{destroy:unsub};
    }
    
    function renderDownloads(container){
    var el=document.createElement('div');
    el.className='page';
    el.innerHTML='<div class="page-inner">'+backBar('downloads')+'<div class="list-body" data-list></div></div>';
    bindBack(el);
    var list=el.querySelector('[data-list]');
    var items=C.downloadsStore.get().items;
    if(!items.length)list.innerHTML='<div class="empty">'+T('noDownloads')+'</div>';
    else list.innerHTML=items.map(function(it){
    return'<div class="list-row"><div class="list-row-icon">'+I.download+'</div><div><div class="list-row-name">'+C.escapeHtml(it.name)+'</div><div class="list-row-meta">'+C.formatDate(it.ts)+'</div></div><div></div></div>';
    }).join('');
    container.append(el);
    return{destroy:function(){}};
    }
    
    function renderAbout(container){
    var el=document.createElement('div');
    el.className='page';
    el.innerHTML='<div class="page-inner">'+backBar('help')+
    '<section class="about-hero">'+
    '<div class="about-logo">Fuey Mini Browser</div>'+
    '<div class="about-version">'+C.VERSION+' · 2026-11-28</div>'+
    '</section>'+
    '<section class="settings-group"><h3 class="settings-group-title">'+T('help')+'</h3><div class="settings-list">'+
    '<div class="setting-row"><div><div class="setting-label">'+T('userAgreement')+'</div><div class="setting-hint">Fuey Mini Browser</div></div><div class="setting-control"><button class="btn" type="button" data-agreement>'+T('show')+'</button></div></div>'+
    '<div class="setting-row"><div><div class="setting-label">'+T('aboutUs')+'</div><div class="setting-hint">Fuey Mini Browser · '+T('aboutTagline')+'</div></div><div class="setting-control"><button class="btn" type="button" data-about>'+T('show')+'</button></div></div>'+
    '<div class="setting-row"><div><div class="setting-label">'+T('website')+'</div><div class="setting-hint">https://fueyseek.github.io</div></div><div class="setting-control"><button class="btn" type="button" data-site>'+T('openSite')+'</button></div></div>'+
    '<div class="setting-row"><div><div class="setting-label">'+T('fontLicenses')+'</div><div class="setting-hint">'+T('fontLicenseHint')+'</div></div><div class="setting-control"><button class="btn" type="button" data-licenses>'+T('show')+'</button></div></div>'+
    '<div class="setting-row"><div><div class="setting-label">'+T('checkUpdate')+'</div><div class="setting-hint">v26.11.28.0</div></div><div class="setting-control"><button class="btn" type="button" data-update>'+T('checkUpdate')+'</button></div></div>'+
    '</div></section>'+
    '<section class="settings-group"><h3 class="settings-group-title">'+T('aboutUs')+'</h3>'+
    '<p class="about-text">'+T('aboutDescription')+'</p>'+
    '<p class="about-text">'+T('officialSite')+'<a href="https://fueyseek.github.io" data-site-link>fueyseek.github.io</a></p>'+
    '</section>'+
    '<div class="copyright"><span class="copyright-pill">© 2020-2026 Fuey All Rights Reserved</span></div>'+
    '</div>';
    bindBack(el);
    function openAgreement(){
    var body=document.createElement('div');
    var text=document.createElement('div');
    text.className='about-agreement';
    var current=C.resolveLang(C.settingsStore.get().language);
    var items=C.LANGS.filter(function(l){return l.code!=='system'}).map(function(l){return l.code}).map(function(code){
    var info=C.LANGS.find(function(l){return l.code===code});
    return{value:code,label:info?info.name:code};
    });
    body.innerHTML='<div class="agreement-lang-row"><div class="agreement-lang-slot" data-lang-slot></div></div>';
    body.append(text);
    text.textContent=window.App&&window.App.getAgreement?window.App.getAgreement(current):T('userAgreement');
    text.dir=current==='ar-SA'?'rtl':'ltr';
    var langSel=C.createSelect({value:current,items:items,width:'160px',onChange:function(value){
    text.textContent=window.App.getAgreement(value);
    text.dir=value==='ar-SA'?'rtl':'ltr';
    }});
    body.querySelector('[data-lang-slot]').append(langSel.el);
    C.openModal({title:T('userAgreement'),body:body,confirmText:T('close'),cancelText:'',onConfirm:function(){C.closeAllSelects();return true}});
    }
    function openAbout(){
    var body=document.createElement('div');
    body.innerHTML='<div class="about-text">'+T('aboutShort')+'</div>'+
    '<div class="about-text">'+T('officialSite')+'https://fueyseek.github.io</div>'+
    '<div class="about-text">© 2020-2026 Fuey All Rights Reserved</div>';
    C.openModal({title:T('aboutUs'),body:body,confirmText:T('close'),cancelText:'',onConfirm:function(){return true}});
    }
    function checkUpdate(){C.checkUpdate(false)}
    el.querySelector('[data-agreement]').addEventListener('click',openAgreement);
    el.querySelector('[data-about]').addEventListener('click',openAbout);
    el.querySelector('[data-site]').addEventListener('click',function(){B.openUrl('https://fueyseek.github.io')});
    el.querySelector('[data-licenses]').addEventListener('click',function(){B.navigatePage('/font-licenses')});
    el.querySelector('[data-site-link]').addEventListener('click',function(e){e.preventDefault();B.openUrl('https://fueyseek.github.io')});
    el.querySelector('[data-update]').addEventListener('click',checkUpdate);
    container.append(el);
    return{destroy:function(){}};
    }
    
    function renderPlugins(container){
    var el=document.createElement('div');
    el.className='page';
    el.innerHTML='<div class="page-inner">'+backBar('plugins')+
    '<section class="settings-group"><h3 class="settings-group-title">'+T('builtinPlugins')+'</h3><div class="plugin-list" data-builtin></div></section>'+
    '<div class="list-head"><span class="setting-hint">'+T('pluginHint')+'</span><button class="btn btn--primary" type="button" data-import>'+T('add')+'</button></div>'+
    '<div class="list-body" data-list></div>'+
    '</div>';
    bindBack(el);
    var list=el.querySelector('[data-list]');
    var builtin=el.querySelector('[data-builtin]');
    var importBtn=el.querySelector('[data-import]');
    function renderBuiltin(){
    var manager=window.FueyPlugins;
    builtin.innerHTML=C.BUILTIN_PLUGINS.map(function(p){
    var on=manager&&manager.isEnabled(p.id);
    return'<div class="plugin-card"><div class="plugin-icon">'+I.plugin+'</div><div class="plugin-info"><div class="plugin-name">'+C.escapeHtml(T(p.nameKey))+'</div><div class="plugin-desc">'+C.escapeHtml(T(p.descKey))+'</div></div><button class="ghost-btn plugin-gear" type="button" data-plugin-settings="'+p.id+'" aria-label="settings">'+I.settings+'</button><button class="switch'+(on?' is-on':'')+'" type="button" data-plugin="'+p.id+'"></button></div>';
    }).join('');
    }
    function openPluginSettings(id){
    var def=C.BUILTIN_PLUGINS.find(function(x){return x.id===id});
    var body=document.createElement('div');
    if(id==='camera-safe'){
    body.innerHTML='<div class="modal-field"><span class="modal-field-label">'+T('cameraTitle')+'</span><div class="plugin-range-row"><input class="camera-range" type="range" min="0" max="80" step="2" value="'+(C.settingsStore.get().cameraOffset||24)+'" data-camera-offset><span data-camera-value>'+(C.settingsStore.get().cameraOffset||24)+' px</span></div><div class="setting-hint">'+T('cameraHint')+'</div></div>';
    }else if(id==='fullscreen'){
    body.innerHTML='<label class="plugin-setting-row"><input type="checkbox" data-fullscreen-hide '+(C.settingsStore.get().fullscreenHideToolbar?'checked':'')+'><span>'+T('pluginHideToolbar')+'</span></label>';
    }else{
    body.innerHTML='<label class="plugin-setting-row"><input type="checkbox" data-ai-label '+(C.settingsStore.get().aiWorkLabel!==false?'checked':'')+'><span>'+T('pluginShowLabel')+'</span></label>';
    }
    var range=body.querySelector('[data-camera-offset]');
    if(range){
    range.addEventListener('input',function(){
    var v=parseInt(range.value,10);
    body.querySelector('[data-camera-value]').textContent=v+' px';
    });
    }
    C.openModal({title:def?T(def.nameKey):T('settings'),body:body,confirmText:T('save'),onConfirm:function(){
    if(id==='camera-safe'){
    var v=parseInt(range.value,10);
    C.settingsStore.set({cameraOffset:v});
    document.documentElement.style.setProperty('--camera-offset',v+'px');
    }else if(id==='fullscreen'){
    var hide=body.querySelector('[data-fullscreen-hide]').checked;
    C.settingsStore.set({fullscreenHideToolbar:hide});
    document.documentElement.dataset.fullscreenHideToolbar=hide?'true':'false';
    }else{
    var label=body.querySelector('[data-ai-label]').checked;
    C.settingsStore.set({aiWorkLabel:label});
    if(window.FueyPlugins&&FueyPlugins.isEnabled('ai-work')){
    FueyPlugins.setEnabled('ai-work',false);
    FueyPlugins.setEnabled('ai-work',true);
    }
    }
    C.toast(T('saved'));
    return true;
    }});
    }
    builtin.addEventListener('click',function(e){
    var gear=e.target.closest('[data-plugin-settings]');
    if(gear){openPluginSettings(gear.dataset.pluginSettings);return}
    var btn=e.target.closest('[data-plugin]');
    if(!btn||!window.FueyPlugins)return;
    var id=btn.dataset.plugin;
    var next=!window.FueyPlugins.isEnabled(id);
    window.FueyPlugins.setEnabled(id,next);
    renderBuiltin();
    var def=C.BUILTIN_PLUGINS.find(function(x){return x.id===id});
    C.toast((next?T('pluginEnabled'):T('pluginDisabled'))+(def?T(def.nameKey):id));
    });
    renderBuiltin();
    function renderList(){
    var items=C.pluginsStore.get().items;
    if(!items.length){list.innerHTML='<div class="empty">'+T('noPlugins')+'</div>';list.style.borderTop='none';return}
    list.style.borderTop='';
    list.innerHTML=items.map(function(it){
    return'<div class="list-row" data-id="'+it.id+'"><div class="list-row-icon">'+I.plugin+'</div><div><div class="list-row-name">'+C.escapeHtml(it.name)+'</div><div class="list-row-meta">'+C.escapeHtml(it.version||'1.0')+' · '+C.formatDate(it.ts)+'</div></div><div class="list-row-actions"><button class="ghost-btn is-danger" type="button" data-delete>'+I.trash+'</button></div></div>';
    }).join('');
    }
    importBtn.addEventListener('click',function(){
    var inp=document.createElement('input');
    inp.type='file';
    inp.accept='.zip';
    inp.onchange=function(){
    var file=inp.files&&inp.files[0];
    if(!file)return;
    file.arrayBuffer().then(function(buf){return C.parseZip(buf)}).then(function(files){
    var idx=files['index.js'];
    if(!idx){C.toast('index.js missing','error');return}
    var code=new TextDecoder().decode(idx);
    var name=files['manifest.json']?JSON.parse(new TextDecoder().decode(files['manifest.json'])).name:(file.name.replace(/\.zip$/,''));
    C.pluginsStore.set(function(s){return{items:s.items.concat([{id:C.uid(),name:name,version:'1.0',code:code,ts:Date.now()}])}});
    try{new Function('App','Core','Browser',code)(window.App,window.Core,window.Browser)}catch(e){}
    renderList();
    }).catch(function(){C.toast(T('invalidZip'),'error')});
    };
    inp.click();
    });
    list.addEventListener('click',function(e){
    var row=e.target.closest('[data-id]');
    if(!row)return;
    if(e.target.closest('[data-delete]')){var id=row.dataset.id;C.pluginsStore.set(function(s){return{items:s.items.filter(function(x){return x.id!==id})}});renderList()}
    });
    var unsub=C.pluginsStore.subscribe(renderList);
    var unsubBuiltin=C.builtinPluginsStore.subscribe(renderBuiltin);
    renderList();
    container.append(el);
    return{destroy:function(){unsub();unsubBuiltin()}};
    }
    
    function renderSettings(container){
    var s=C.settingsStore.get();
    var el=document.createElement('div');
    el.className='page';
    el.innerHTML='<div class="page-inner">'+
    backBar('settings')+
    '<div class="settings-tabs" data-tabs>'+
    '<button class="settings-tab" type="button" data-tab="appearance">'+T('appearance')+'</button>'+
    '<button class="settings-tab" type="button" data-tab="search">'+T('searchSection')+'</button>'+
    '<button class="settings-tab" type="button" data-tab="ai">'+T('aiSection')+'</button>'+
    '<button class="settings-tab" type="button" data-tab="accessibility">'+T('accessibility')+'</button>'+
    '<button class="settings-tab" type="button" data-tab="data">'+T('dataSection')+'</button>'+
    '</div>'+
    
    '<div class="settings-panel" data-panel="appearance" hidden>'+
    '<section class="settings-group"><h3 class="settings-group-title">'+T('appearance')+'</h3>'+
    '<div class="theme-dots" data-theme-dots></div>'+
    '<div class="theme-preview"><div class="theme-preview-mask"><div class="theme-preview-title">Preview</div><div class="theme-preview-bar"><span class="theme-preview-chip">'+T('search')+'</span><span class="theme-preview-chip primary">'+T('search')+'</span><span class="theme-preview-chip">'+T('ai')+'</span></div></div></div>'+
    '<div class="setting-row" style="grid-template-columns:1fr"><div><div class="setting-label">'+T('homeBackground')+'</div><div class="setting-hint">'+T('homeBackgroundHint')+'</div><div class="background-options" data-backgrounds></div></div></div>'+
    '<div class="setting-row"><span class="setting-label">'+T('language')+'</span><div class="setting-control" data-sel="lang"></div></div>'+
    '<div class="setting-row"><span class="setting-label">'+T('font')+'</span><div class="setting-control" data-sel="font"></div></div>'+
    '</section>'+
    '</div>'+
    
    '<div class="settings-panel" data-panel="search" hidden>'+
    '<section class="settings-group"><h3 class="settings-group-title">'+T('searchSection')+'</h3><div class="settings-list">'+
    '<div class="setting-row"><span class="setting-label">'+T('engine')+'</span><div class="setting-control" data-sel="engine"></div></div>'+
    '<div class="setting-row" data-custom-row><span class="setting-label">'+T('customEngine')+'</span><div class="setting-control"><input class="input" data-custom-engine placeholder="'+T('engineHint')+'" autocomplete="off"></div></div>'+
    '</div></section>'+
    '<section class="settings-group github-panel" data-github-panel hidden><h3 class="settings-group-title">'+T('github')+'</h3><div class="settings-list">'+
    '<div class="setting-row"><div><div class="setting-label">'+T('githubToken')+'</div><div class="setting-hint">'+T('githubTokenHint')+'</div></div><div class="setting-control"><input class="input" type="password" data-github-token autocomplete="off" placeholder="ghp_..."><button class="btn" type="button" data-github-save>'+T('save')+'</button></div></div>'+
    '<div class="setting-row"><div><div class="setting-label">'+T('githubRate')+'</div><div class="setting-hint" data-github-hint>'+T('githubAnon')+'</div></div><div class="setting-control"><div class="github-rate" data-github-rate><span class="rate-display" data-github-bin>—</span><button class="btn" type="button" data-github-check>'+T('githubCheck')+'</button></div></div></div>'+
    '</div></section>'+
    '</div>'+
    
    '<div class="settings-panel" data-panel="ai" hidden>'+
    '<section class="settings-group"><h3 class="settings-group-title">'+T('aiSection')+'</h3><div class="settings-list">'+
    '<div class="setting-row"><div><div class="setting-label">'+T('aiConfig')+'</div><div class="setting-hint">'+T('provider')+' · '+T('chatSection')+' · '+T('transSection')+'</div></div><div class="setting-control"><button class="btn" type="button" data-ai>'+T('edit')+'</button></div></div>'+
    '</div></section>'+
    '</div>'+
    
    '<div class="settings-panel" data-panel="accessibility" hidden>'+
    '<section class="settings-group"><h3 class="settings-group-title">'+T('accessibility')+'</h3><div class="settings-list">'+
    '<div class="setting-row"><span class="setting-label">'+T('buttonSize')+'</span><div class="setting-control" data-sel="btn-size"></div></div>'+
    '<div class="setting-row"><span class="setting-label">'+T('fontSize')+'</span><div class="setting-control" data-sel="font-size"></div></div>'+
    '<div class="setting-row"><span class="setting-label">'+T('colorBlind')+'</span><div class="setting-control" data-sel="cb"></div></div>'+
    '<div class="setting-row"><span class="setting-label">'+T('leftHand')+'</span><div class="setting-control"><button class="switch" type="button" data-lefthand></button></div></div>'+
    '</div></section>'+
    '</div>'+
    
    '<div class="settings-panel" data-panel="data" hidden>'+
    '<section class="settings-group"><h3 class="settings-group-title">'+T('dataSection')+'</h3><div class="settings-list">'+
    '<div class="setting-row"><div><div class="setting-label">'+T('export')+'</div><div class="setting-hint">'+T('exportHint')+'</div></div><div class="setting-control"><button class="btn" type="button" data-export>'+T('export')+'</button></div></div>'+
    '<div class="setting-row"><div><div class="setting-label">'+T('import')+'</div><div class="setting-hint">'+T('importHint')+'</div></div><div class="setting-control"><button class="btn" type="button" data-import>'+T('import')+'</button></div></div>'+
    '<div class="setting-row"><div><div class="setting-label">'+T('plugins')+'</div><div class="setting-hint">'+T('pluginHint')+'</div></div><div class="setting-control"><button class="btn" type="button" data-plugins>'+T('plugins')+'</button></div></div>'+
    '<div class="setting-row"><div><div class="setting-label">'+T('clearBrowsing')+'</div><div class="setting-hint">'+T('clearBrowsingHint')+'</div></div><div class="setting-control"><button class="btn" type="button" data-clear-browsing>'+T('clearAction')+'</button></div></div>'+
    '<div class="setting-row"><div><div class="setting-label">'+T('clearAll')+'</div><div class="setting-hint">'+T('clearAllHint')+'</div></div><div class="setting-control"><button class="btn btn--danger" type="button" data-reset>'+T('delete')+'</button></div></div>'+
    '</div></section>'+
    '</div>'+
    '</div>';
    bindBack(el);
    
    var tabs=el.querySelector('[data-tabs]');
    var panels=el.querySelectorAll('[data-panel]');
    function setTab(name){
    tabs.querySelectorAll('[data-tab]').forEach(function(b){b.classList.toggle('is-active',b.dataset.tab===name)});
    panels.forEach(function(p){p.hidden=p.dataset.panel!==name});
    C.settingsStore.set({settingsTab:name});
    }
    tabs.addEventListener('click',function(e){var b=e.target.closest('[data-tab]');if(b)setTab(b.dataset.tab)});
    setTab(s.settingsTab||'appearance');
    
    var dots=el.querySelector('[data-theme-dots]');
    function renderDots(){
    var cur=C.settingsStore.get();
    var custom=C.customThemesStore.get().items;
    var html=C.THEMES.map(function(t){
    return'<button class="theme-dot'+(cur.theme===t.id?' is-active':'')+'" type="button" data-theme-opt="'+t.id+'" title="'+t.label+'" style="--dot-bg:'+t.bg+';--dot-ac:'+t.ac+'"></button>';
    }).join('');
    html+=custom.map(function(t){
    var bgStyle=t.image?'background-image:url('+t.image+');background-size:cover;background-position:center':'background:'+(t.accent||'#888');
    return'<div class="theme-dot-wrap"><button class="theme-dot theme-dot-custom'+(cur.theme==='custom:'+t.id?' is-active':'')+'" type="button" data-theme-custom="'+t.id+'" title="'+C.escapeHtml(t.name)+'" style="'+bgStyle+'"></button><button class="theme-dot-del" type="button" data-theme-del="'+t.id+'" title="'+T('delete')+'">×</button></div>';
    }).join('');
    html+='<button class="theme-add" type="button" data-theme-add title="'+T('customTheme')+'">'+I.plus+'</button>';
    dots.innerHTML=html;
    }
    renderDots();
    var bgOptions=el.querySelector('[data-backgrounds]');
    function renderBackgrounds(){
    var current=C.settingsStore.get().homeBackground||'none';
    bgOptions.innerHTML=C.HOME_BACKGROUNDS.map(function(bg){
    var style=bg.file?'background-image:url('+new URL('./images/user_background/'+bg.file,location.href).href+')':'';
    return'<button class="background-option'+(current===bg.id?' is-active':'')+'" type="button" data-home-bg="'+bg.id+'" style="'+style+'"><span>'+C.escapeHtml(T(bg.nameKey))+'</span></button>';
    }).join('');
    }
    renderBackgrounds();
    bgOptions.addEventListener('click',function(e){
    var btn=e.target.closest('[data-home-bg]');
    if(!btn)return;
    C.settingsStore.set({homeBackground:btn.dataset.homeBg});
    renderBackgrounds();
    });
    var unsubBg=C.settingsStore.subscribe(renderBackgrounds);
    
    dots.addEventListener('click',function(e){
    var opt=e.target.closest('[data-theme-opt]');
    if(opt){C.settingsStore.set({theme:opt.dataset.themeOpt});renderDots();return}
    var cust=e.target.closest('[data-theme-custom]');
    if(cust){C.settingsStore.set({theme:'custom:'+cust.dataset.themeCustom});renderDots();return}
    var add=e.target.closest('[data-theme-add]');
    if(add){openCustomThemeDialog();return}
    var del=e.target.closest('[data-theme-del]');
    if(del){
    e.stopPropagation();
    var id=del.dataset.themeDel;
    C.confirmDialog(T('deleteConfirm'),function(){
    C.customThemesStore.set(function(st){return{items:st.items.filter(function(x){return x.id!==id})}});
    if(C.settingsStore.get().theme==='custom:'+id)C.settingsStore.set({theme:'system'});
    renderDots();
    C.toast(T('deleted'));
    });
    return;
    }
    });
    
    var langSel=C.createSelect({value:s.language,items:C.LANGS.map(function(l){return{value:l.code,label:l.name}}),onChange:function(v){C.settingsStore.set({language:v});setTimeout(function(){location.reload()},120)}});
    el.querySelector('[data-sel="lang"]').append(langSel.el);
    
    var fontSel=C.createSelect({value:s.fontFamily,items:C.FONTS.map(function(f){return{value:f.id,label:f.name,fontFamily:f.stack}}),width:'300px',onChange:function(v){C.settingsStore.set({fontFamily:v})}});
    el.querySelector('[data-sel="font"]').append(fontSel.el);
    
    var engineItems=Object.keys(C.ENGINES).map(function(k){return{value:k,label:C.ENGINES[k].label}}).concat([{value:'custom',label:T('customEngine')}]);
    var engineSel=C.createSelect({value:s.engine,items:engineItems,onChange:function(v){C.settingsStore.set({engine:v});syncEnginePanels()}});
    el.querySelector('[data-sel="engine"]').append(engineSel.el);
    
    var customEngineInput=el.querySelector('[data-custom-engine]');
    customEngineInput.value=(s.customEngine&&s.customEngine.url)||'';
    customEngineInput.addEventListener('change',function(){C.settingsStore.set({customEngine:{label:'Custom',url:customEngineInput.value.trim()}})});
    
    var customRow=el.querySelector('[data-custom-row]');
    var githubPanel=el.querySelector('[data-github-panel]');
    var tokenInput=el.querySelector('[data-github-token]');
    var binEl=el.querySelector('[data-github-bin]');
    var rateBox=el.querySelector('[data-github-rate]');
    var rateHint=el.querySelector('[data-github-hint]');
    var rateBusy=false;
    tokenInput.value=s.githubToken||'';
    function checkGithubRate(){
    if(rateBusy)return;
    rateBusy=true;
    var token=tokenInput.value.trim();
    rateBox.classList.remove('is-error');
    binEl.textContent=T('githubChecking');
    fetchGithubRate(token,function(err,data){
    rateBusy=false;
    if(err){
    rateBox.classList.add('is-error');
    binEl.textContent=err.message==='auth'?T('githubInvalid'):T('githubFail');
    return;
    }
    binEl.textContent=T('githubRemaining',{remaining:data.remaining,limit:data.limit})+' · '+T('githubCoreRemaining',{remaining:data.coreRemaining,limit:data.coreLimit});
    rateHint.textContent=T('githubReset',{time:C.formatReset(data.reset)})+(token?'':' · '+T('githubAnon'));
    });
    }
    function syncEnginePanels(){
    var e=engineSel.getValue();
    customRow.hidden=e!=='custom';
    githubPanel.hidden=e!=='github';
    if(e==='github')checkGithubRate();
    }
    syncEnginePanels();
    el.querySelector('[data-github-save]').addEventListener('click',function(){C.settingsStore.set({githubToken:tokenInput.value.trim()});C.toast(T('saved'));checkGithubRate()});
    el.querySelector('[data-github-check]').addEventListener('click',checkGithubRate);
    
    el.querySelector('[data-ai]').addEventListener('click',function(){B.navigatePage('/ai-settings')});
    
    var sizeItems=[{value:'0.85',label:T('small')},{value:'1',label:T('medium')},{value:'1.15',label:T('large')},{value:'1.3',label:T('xlarge')}];
    var btnSizeSel=C.createSelect({value:String(s.buttonScale),items:sizeItems,onChange:function(v){C.settingsStore.set({buttonScale:parseFloat(v)})}});
    el.querySelector('[data-sel="btn-size"]').append(btnSizeSel.el);
    var fontSizeSel=C.createSelect({value:String(s.fontScale),items:sizeItems,onChange:function(v){C.settingsStore.set({fontScale:parseFloat(v)})}});
    el.querySelector('[data-sel="font-size"]').append(fontSizeSel.el);
    
    var cbSel=C.createSelect({value:s.colorBlind,items:[{value:'none',label:T('none')},{value:'red',label:T('colorBlind')+' R'},{value:'green',label:T('colorBlind')+' G'},{value:'blue',label:T('colorBlind')+' B'},{value:'gray',label:T('colorBlind')+' Gray'}],onChange:function(v){C.settingsStore.set({colorBlind:v})}});
    el.querySelector('[data-sel="cb"]').append(cbSel.el);
    
    var lhBtn=el.querySelector('[data-lefthand]');
    function syncLh(){lhBtn.classList.toggle('is-on',!!C.settingsStore.get().leftHanded)}
    lhBtn.addEventListener('click',function(){C.settingsStore.set(function(st){return{leftHanded:!st.leftHanded}})});
    syncLh();
    var unsubLh=C.settingsStore.subscribe(syncLh);
    
    el.querySelector('[data-clear-browsing]').addEventListener('click',function(){C.confirmDialog(T('clearConfirm'),function(){C.clearBrowsingData();C.toast(T('clearBrowsingDone'))})});
    el.querySelector('[data-export]').addEventListener('click',exportData);
    el.querySelector('[data-import]').addEventListener('click',importData);
    el.querySelector('[data-plugins]').addEventListener('click',function(){B.navigatePage('/plugins')});
    el.querySelector('[data-reset]').addEventListener('click',function(){
    C.confirmDialog(T('clearConfirm'),function(){
    C.clearAll();
    location.reload();
    });
    });
    
    var unsubDots=C.customThemesStore.subscribe(renderDots);
    container.append(el);
    return{destroy:function(){C.closeAllSelects();unsubLh();unsubDots();unsubBg()}};
    }
    
    function openCustomThemeDialog(){
    var body=document.createElement('div');
    var palettes={
    bg:['#ffffff','#f5f6f8','#fff5f7','#eef4ff','#fdf6ec','#0d0d0f','#1e2023','#0b1020','#0e1512','#1a0f0a'],
    primary:['#1a73e8','#4c8dff','#7aa2ff','#4eac5b','#6ed49a','#b794f6','#e8547a','#ff9f5a','#f2c94c','#ededee'],
    accent2:['#fbbc05','#ff9f5a','#e5484d','#4eac5b','#4a8cff','#b794f6','#f472b6','#16b8a6','#ffd93d','#ededee']
    };
    function balls(key,label,value){
    return'<div class="color-ball-field"><span class="modal-field-label">'+label+'</span>'+
    '<div class="color-balls" data-group="'+key+'">'+
    palettes[key].map(function(c){return'<button class="color-ball'+(c===value?' is-active':'')+'" type="button" data-color="'+c+'" style="--ball:'+c+'" aria-label="'+c+'"></button>'}).join('')+
    '</div><div class="color-more-row"><label class="color-more" style="--ball:'+value+'" aria-label="'+label+'"><input type="color" data-'+key+' value="'+value+'" class="color-native"><span class="color-more-plus">+</span></label><span class="color-more-caption">'+T('moreColors')+'</span></div></div>';
    }
    body.innerHTML='<div class="modal-field"><span class="modal-field-label">'+T('themeName')+'</span><input class="input" data-name maxlength="32" placeholder="'+T('themeName')+'"></div>'+
    balls('bg',T('backgroundColor'),'#ffffff')+
    balls('primary',T('primaryColor'),'#1a73e8')+
    balls('accent2',T('accentColor'),'#fbbc05')+
    '<div class="modal-field"><span class="modal-field-label">'+T('uploadImage')+'</span>'+
    '<label class="file-upload" data-file-label><input type="file" accept="image/*" data-image>'+C.ICONS.upload+'<span data-file-text>'+T('chooseImage')+'</span></label>'+
    '</div>';
    body.querySelectorAll('.color-balls').forEach(function(group){
    var key=group.dataset.group;
    var input=body.querySelector('[data-'+key+']');
    var add=body.querySelector('[data-group="'+key+'"]').parentNode.querySelector('.color-more');
    function setValue(value,fromInput){
    input.value=value;
    group.querySelectorAll('[data-color]').forEach(function(b){b.classList.toggle('is-active',b.dataset.color===value)});
    add.style.setProperty('--ball',value);
    add.classList.toggle('is-active',fromInput);
    }
    group.addEventListener('click',function(e){
    var ball=e.target.closest('[data-color]');
    if(ball){setValue(ball.dataset.color,false)}
    });
    input.addEventListener('input',function(){setValue(input.value,true)});
    });
    var imageData='';
    var fileLabel=body.querySelector('[data-file-label]');
    var fileText=body.querySelector('[data-file-text]');
    body.querySelector('[data-image]').addEventListener('change',function(e){
    var file=e.target.files&&e.target.files[0];
    if(!file)return;
    fileText.textContent=T('uploading');
    fileLabel.classList.remove('has-file');
    C.compressImage(file,1920,.85).then(function(dataUrl){
    imageData=dataUrl;
    fileLabel.classList.add('has-file');
    fileText.textContent='✓ '+file.name;
    }).catch(function(err){
    fileText.textContent=T('chooseImage');
    fileLabel.classList.remove('has-file');
    var msg=T('imageReadFail');
    if(err&&err.message==='not-image')msg=T('imageNotSupported');
    C.toast(msg,'error');
    e.target.value='';
    });
    });
    C.openModal({title:T('customTheme'),body:body,confirmText:T('save'),onConfirm:function(){
    var name=body.querySelector('[data-name]').value.trim();
    var bg=body.querySelector('[data-bg]').value;
    var primary=body.querySelector('[data-primary]').value;
    var accent2=body.querySelector('[data-accent2]').value;
    if(!name){C.toast(T('nameRequired'),'error');return false}
    var id=C.uid();
    var theme={id:id,name:name,bg:bg,accent:primary,accent2:accent2,image:imageData||'',ts:Date.now()};
    C.customThemesStore.set(function(st){return{items:st.items.concat([theme])}});
    C.settingsStore.set({theme:'custom:'+id});
    C.toast(T('saved'));
    return true;
    }});
    }
    
    function openGithubRepo(full,initialPath){
    var parts=String(full||'').split('/');
    if(parts.length<2)return;
    var owner=parts[0],repo=parts[1],current=initialPath||'';
    var body=document.createElement('div');
    body.className='repo-browser';
    body.innerHTML='<div class="repo-path" data-repo-path></div><div class="repo-list" data-repo-list></div><pre class="repo-file" data-repo-file hidden></pre><div class="repo-actions"><span class="repo-size" data-repo-size></span><button class="btn" type="button" data-download hidden>'+T('download')+'</button></div>';
    C.openModal({title:owner+'/'+repo,body:body,confirmText:T('close'),cancelText:'',onConfirm:function(){return true}});
    var listEl=body.querySelector('[data-repo-list]');
    var fileEl=body.querySelector('[data-repo-file]');
    var pathEl=body.querySelector('[data-repo-path]');
    var sizeEl=body.querySelector('[data-repo-size]');
    var downloadBtn=body.querySelector('[data-download]');
    var currentFile=null;
    function renderPath(){
    var segs=current?current.split('/'):[];
    var html='<button type="button" data-path="">'+C.escapeHtml(owner+'/'+repo)+'</button>';
    var acc='';
    segs.forEach(function(seg){acc=acc?acc+'/'+seg:seg;html+='<span>/</span><button type="button" data-path="'+C.escapeHtml(acc)+'">'+C.escapeHtml(seg)+'</button>'});
    pathEl.innerHTML=html;
    }
    function load(path){
    current=path||'';
    currentFile=null;
    renderPath();
    fileEl.hidden=true;
    downloadBtn.hidden=true;
    sizeEl.textContent='';
    listEl.hidden=false;
    listEl.innerHTML='<div class="github-empty">'+T('loading')+'</div>';
    var api='https://api.github.com/repos/'+encodeURIComponent(owner)+'/'+encodeURIComponent(repo)+'/contents/'+(current?current.split('/').map(encodeURIComponent).join('/'):'');
    fetch(api,{headers:C.githubHeaders(C.githubToken()),credentials:'omit',cache:'no-store'}).then(function(res){
    return res.json().catch(function(){return null}).then(function(data){
    if(!res.ok)throw new Error(data&&data.message||('HTTP '+res.status));
    return data;
    });
    }).then(function(data){
    if(Array.isArray(data)){
    listEl.innerHTML=data.map(function(it){
    return'<button class="repo-item" type="button" data-entry="'+C.escapeHtml(it.path)+'" data-type="'+it.type+'"><span class="repo-item-icon">'+(it.type==='dir'?'▸':'·')+'</span><span class="repo-item-name">'+C.escapeHtml(it.name)+'</span><span class="repo-item-size">'+(it.type==='file'?C.escapeHtml(String(it.size||0))+' B':'')+'</span></button>';
    }).join('')||'<div class="github-empty">'+T('githubEmpty')+'</div>';
    return;
    }
    if(data&&data.type==='file'){
    listEl.hidden=true;
    fileEl.hidden=false;
    sizeEl.textContent=(data.size||0)+' B';
    if(data.content&&data.encoding==='base64'){
    try{
    var bin=atob(String(data.content).replace(/\s/g,''));
    var bytes=new Uint8Array(bin.length);
    for(var i=0;i<bin.length;i++)bytes[i]=bin.charCodeAt(i);
    var text=new TextDecoder().decode(bytes);
    fileEl.textContent=text.slice(0,200000);
    currentFile={name:data.name,text:text};
    downloadBtn.hidden=false;
    }catch(e){fileEl.textContent=T('readerFail')}
    }else{
    fileEl.textContent=T('readerFail');
    if(data.download_url){currentFile=null;downloadBtn.hidden=false}
    }
    return;
    }
    listEl.innerHTML='<div class="github-empty">'+T('githubEmpty')+'</div>';
    }).catch(function(err){listEl.innerHTML='<div class="github-empty">'+C.escapeHtml(err.message)+'</div>'});
    }
    body.addEventListener('click',function(e){
    var pathBtn=e.target.closest('[data-path]');
    if(pathBtn){load(pathBtn.dataset.path);return}
    var entry=e.target.closest('[data-entry]');
    if(entry){if(entry.dataset.type==='dir')load(entry.dataset.entry);else load(entry.dataset.entry);return}
    });
    downloadBtn.addEventListener('click',function(){
    if(!currentFile)return;
    var blob=new Blob([currentFile.text],{type:'text/plain;charset=utf-8'});
    var a=document.createElement('a');
    a.href=URL.createObjectURL(blob);
    a.download=currentFile.name||'file.txt';
    a.click();
    setTimeout(function(){URL.revokeObjectURL(a.href)},1500);
    });
    load(current);
    }
    window.App.openGithubRepo=openGithubRepo;
    
    function renderGithub(container){
    var el=document.createElement('div');
    el.className='page';
    el.innerHTML='<div class="page-inner">'+
    backBar('github')+
    '<div class="github-page">'+
    '<div class="github-search-row"><input class="input" type="text" data-q placeholder="'+T('githubEmpty')+'" autocomplete="off" spellcheck="false"><button class="btn btn--primary" type="button" data-go>'+T('search')+'</button></div>'+
    '<div class="github-rate" data-rate><span class="rate-display" data-bin>—</span><span data-hint>'+T('githubRate')+'</span></div>'+
    '<div class="github-count" data-count></div>'+
    '<div class="github-list" data-list></div>'+
    '</div>'+
    '</div>';
    bindBack(el);
    var qInput=el.querySelector('[data-q]');
    var list=el.querySelector('[data-list]');
    var count=el.querySelector('[data-count]');
    var bin=el.querySelector('[data-bin]');
    var hint=el.querySelector('[data-hint]');
    var rateBox=el.querySelector('[data-rate]');
    var token=C.githubToken();
    var st=C.githubStore.get();
    var query=st.query||'';
    qInput.value=query;
    function renderResults(items,total,message){
    if(message){list.innerHTML='<div class="github-empty">'+C.escapeHtml(message)+'</div>';count.textContent='';return}
    count.textContent=T('githubResults',{n:total});
    if(!items.length){list.innerHTML='<div class="github-empty">'+T('githubEmpty')+'</div>';return}
    list.innerHTML=items.map(function(it){
    return'<button class="github-item" type="button" data-repo="'+C.escapeHtml(it.full_name)+'">'+
    '<span class="github-name">'+C.escapeHtml(it.full_name)+'</span>'+
    (it.description?'<span class="github-desc">'+C.escapeHtml(it.description)+'</span>':'')+
    '<span class="github-meta"><span>★ '+(it.stargazers_count||0)+'</span>'+(it.language?'<span>'+C.escapeHtml(it.language)+'</span>':'')+(it.updated_at?'<span>'+C.formatDate(it.updated_at)+'</span>':'')+'</span>'+
    '</button>';
    }).join('');
    }
    function search(){
    var q=qInput.value.trim();
    if(!q)return;
    C.githubStore.set({query:q});
    count.textContent=T('githubSearch');
    list.innerHTML='<div class="github-empty"><span class="web-spinner"></span></div>';
    fetchWithTimeout('https://api.github.com/search/repositories?per_page=10&sort=stars&order=desc&q='+encodeURIComponent(q),{headers:C.githubHeaders(token),credentials:'omit'},10000)
    .then(function(res){if(res.status===401||res.status===403)throw new Error(T('githubInvalid'));if(!res.ok)throw new Error('HTTP '+res.status);return res.json()})
    .then(function(data){
    var items=data.items||[];
    C.githubStore.set({query:q,items:items,total:data.total_count||0});
    renderResults(items,data.total_count||0);
    loadRate();
    }).catch(function(err){renderResults([],0,T('githubFail')+': '+err.message);loadRate()});
    }
    function loadRate(){
    fetchGithubRate(token,function(err,data){
    if(err){rateBox.classList.add('is-error');bin.textContent=err.message==='auth'?T('githubInvalid'):T('githubFail');hint.textContent=T('githubRate');return}
    rateBox.classList.remove('is-error');
    bin.textContent=T('githubRemaining',{remaining:data.remaining,limit:data.limit})+' · '+T('githubCoreRemaining',{remaining:data.coreRemaining,limit:data.coreLimit});
    hint.textContent=T('githubReset',{time:C.formatReset(data.reset)})+(token?'':' · '+T('githubAnon'));
    });
    }
    qInput.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();search()}});
    el.querySelector('[data-go]').addEventListener('click',search);
    list.addEventListener('click',function(e){var btn=e.target.closest('[data-repo]');if(btn)openGithubRepo(btn.dataset.repo)});
    if(st.query&&st.items&&st.items.length)renderResults(st.items,st.total||st.items.length);
    else list.innerHTML='<div class="github-empty">'+T('githubEmpty')+'</div>';
    loadRate();
    if(query)search();
    container.append(el);
    return{destroy:function(){}};
    }
    
    function renderFontLicenses(container){
    var items=[
    ['Source Han Sans','SIL OFL 1.1','https://github.com/adobe-fonts/source-han-sans'],
    ['Source Han Serif CN','SIL OFL 1.1','https://github.com/adobe-fonts/source-han-serif'],
    ['MiSans','MiSans 字体许可（免费商用）','https://hyperos.mi.com/font'],
    ['HarmonyOS Sans SC','HarmonyOS Sans 字体许可','https://developer.harmonyos.com/cn/docs/design/font-0000001157868583'],
    ['Alibaba PuHuiTi','阿里巴巴普惠体许可（免费商用）','https://www.alibabafonts.com/'],
    ['OPPO Sans','OPPO Sans 字体许可（免费商用）','https://www.coloros.com/'],
    ['LXGW Neo XiHei','SIL OFL 1.1','https://github.com/lxgw/LxgwNeoXiHei'],
    ['Smiley Sans','SIL OFL 1.1','https://github.com/atelier-anchor/smiley-sans'],
    ['WenQuanYi Zen Hei','GPL v2 + 字体嵌入例外','http://wenq.org/'],
    ['LXGW WenKai','SIL OFL 1.1','https://github.com/lxgw/LxgwWenKai'],
    ['Ma Shan Zheng','SIL OFL 1.1','https://fonts.google.com/specimen/Ma+Shan+Zheng'],
    ['Zhi Mang Xing','SIL OFL 1.1','https://fonts.google.com/specimen/Zhi+Mang+Xing'],
    ['Long Cang','SIL OFL 1.1','https://fonts.google.com/specimen/Long+Cang'],
    ['Liu Jian Mao Cao','SIL OFL 1.1','https://fonts.google.com/specimen/Liu+Jian+Mao+Cao'],
    ['ZCOOL KuaiLe','SIL OFL 1.1','https://fonts.google.com/specimen/ZCOOL+KuaiLe'],
    ['Inter','SIL OFL 1.1','https://github.com/rsms/inter'],
    ['Source Sans 3','SIL OFL 1.1','https://github.com/adobe-fonts/source-sans'],
    ['Geist','SIL OFL 1.1','https://github.com/vercel/geist-font'],
    ['Roboto','Apache License 2.0','https://github.com/googlefonts/roboto'],
    ['Maple Mono','SIL OFL 1.1','https://github.com/subframe7536/maple-font'],
    ['JetBrains Mono','SIL OFL 1.1','https://github.com/JetBrains/JetBrainsMono'],
    ['Fira Code','SIL OFL 1.1','https://github.com/tonsky/FiraCode'],
    ['Monaspace','SIL OFL 1.1','https://github.com/githubnext/monaspace'],
    ['Source Code Pro','SIL OFL 1.1','https://github.com/adobe-fonts/source-code-pro'],
    ['Cascadia Code','SIL OFL 1.1','https://github.com/microsoft/cascadia-code'],
    ['Iosevka','SIL OFL 1.1','https://github.com/be5invis/Iosevka'],
    ['Hack','MIT License','https://github.com/source-foundry/Hack'],
    ['ChillRound','SIL OFL 1.1','https://github.com/lxgw/ChillRound']
    ];
    var el=document.createElement('div');
    el.className='page';
    el.innerHTML='<div class="page-inner">'+backBar('fontLicenses')+
    '<p class="about-text">'+T('fontLicenseHint')+'</p>'+
    '<div class="license-list" data-list></div>'+
    '</div>';
    bindBack(el);
    var list=el.querySelector('[data-list]');
    var licenseKeys={'MiSans 字体许可（免费商用）':'licenseMiSans','HarmonyOS Sans 字体许可':'licenseHarmony','阿里巴巴普惠体许可（免费商用）':'licenseAlibaba','OPPO Sans 字体许可（免费商用）':'licenseOppo','GPL v2 + 字体嵌入例外':'licenseWenQuanYi'};
    list.innerHTML=items.map(function(it){
    var license=licenseKeys[it[1]]?T(licenseKeys[it[1]]):it[1];
    return'<div class="license-item"><div class="license-info"><div class="license-name">'+C.escapeHtml(it[0])+'</div><div class="license-meta">'+C.escapeHtml(license)+'</div></div><button class="ghost-btn" type="button" data-url="'+C.escapeHtml(it[2])+'">'+T('project')+' ↗</button></div>';
    }).join('');
    list.addEventListener('click',function(e){
    var btn=e.target.closest('[data-url]');
    if(btn)B.openUrl(btn.dataset.url);
    });
    container.append(el);
    return{destroy:function(){}};
    }
    
    function renderGame(container){
    var el=document.createElement('div');
    el.className='page game-page';
    el.innerHTML='<iframe class="game-frame" src="./game/embed.html" title="Fuey Dino"></iframe>';
    container.append(el);
    var frame=el.querySelector('.game-frame');
    frame.addEventListener('load',function(){setTimeout(function(){try{frame.contentWindow.focus()}catch(e){}if(Browser.syncGameFrames)Browser.syncGameFrames()},250)});
    return{destroy:function(){}};
    }
    
    function exportData(){
    var files=[];
    files.push({name:'settings.json',data:new TextEncoder().encode(JSON.stringify(C.settingsStore.get(),null,2))});
    files.push({name:'bookmarks.json',data:new TextEncoder().encode(JSON.stringify(C.bookmarksStore.get(),null,2))});
    files.push({name:'shortcuts.json',data:new TextEncoder().encode(JSON.stringify(C.shortcutsStore.get(),null,2))});
    files.push({name:'passwords.json',data:new TextEncoder().encode(JSON.stringify(C.passwordsStore.get().items.map(function(p){return{id:p.id,domain:p.domain,username:p.username,cipher:p.cipher,createdAt:p.createdAt}}),null,2))});
    files.push({name:'chat.json',data:new TextEncoder().encode(JSON.stringify(C.chatStore.get(),null,2))});
    files.push({name:'custom-themes.json',data:new TextEncoder().encode(JSON.stringify(C.customThemesStore.get(),null,2))});
    files.push({name:'plugins.json',data:new TextEncoder().encode(JSON.stringify(C.pluginsStore.get().items.map(function(p){return{id:p.id,name:p.name,version:p.version,code:p.code,ts:p.ts}}),null,2))});
    var zipBytes=C.makeZip(files);
    var blob=new Blob([zipBytes],{type:'application/zip'});
    var url=URL.createObjectURL(blob);
    var a=document.createElement('a');
    a.href=url;a.download='fuey-backup-'+Date.now()+'.zip';
    document.body.append(a);a.click();a.remove();
    setTimeout(function(){URL.revokeObjectURL(url)},1000);
    C.toast(T('exported'));
    }
    
    function importData(){
    var inp=document.createElement('input');
    inp.type='file';
    inp.accept='.zip';
    inp.onchange=function(){
    var file=inp.files&&inp.files[0];
    if(!file)return;
    file.arrayBuffer().then(function(buf){return C.parseZip(buf)}).then(function(files){
    function readJson(name){if(!files[name])return null;try{return JSON.parse(new TextDecoder().decode(files[name]))}catch(e){return null}}
    var settings=readJson('settings.json');if(settings)C.settingsStore.set(settings);
    var bookmarks=readJson('bookmarks.json');if(bookmarks)C.bookmarksStore.set(bookmarks);
    var shortcuts=readJson('shortcuts.json');if(shortcuts)C.shortcutsStore.set(shortcuts);
    var passwords=readJson('passwords.json');if(passwords)C.passwordsStore.set(passwords);
    var chat=readJson('chat.json');if(chat)C.chatStore.set(chat);
    var themes=readJson('custom-themes.json');if(themes)C.customThemesStore.set(themes);
    C.toast(T('imported'));
    setTimeout(function(){location.reload()},300);
    }).catch(function(){C.toast(T('invalidZip'),'error')});
    };
    inp.click();
    }
    
    B.registerPage('/home',{titleKey:'newTab',icon:'home',render:renderHome});
    B.registerPage('/ai-settings',{titleKey:'aiSection',icon:'ai',render:renderAiSettings});
    B.registerPage('/passwords',{titleKey:'passwords',icon:'password',render:renderPasswords});
    B.registerPage('/bookmarks',{titleKey:'manageBookmarks',icon:'star',render:renderBookmarksManage});
    B.registerPage('/history',{titleKey:'history',icon:'history',render:renderHistory});
    B.registerPage('/downloads',{titleKey:'downloads',icon:'download',render:renderDownloads});
    B.registerPage('/about',{titleKey:'help',icon:'help',render:renderAbout});
    B.registerPage('/plugins',{titleKey:'plugins',icon:'plugin',render:renderPlugins});
    B.registerPage('/settings',{titleKey:'settings',icon:'settings',render:renderSettings});
    B.registerPage('/github',{titleKey:'github',icon:'github',render:renderGithub});
    B.registerPage('/game',{titleKey:'offlineGame',icon:'game',render:renderGame});
    B.registerPage('/font-licenses',{titleKey:'fontLicenses',icon:'help',render:renderFontLicenses});
    })();