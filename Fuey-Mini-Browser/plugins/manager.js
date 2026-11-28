(function(){
    'use strict';
    var registry={};
    function core(){return window.Core}
    function defs(){return core().BUILTIN_PLUGINS}
    function isEnabled(id){return !!(core().builtinPluginsStore.get().enabled||{})[id]}
    function setEnabled(id,on){
    core().builtinPluginsStore.set(function(s){
    var next=Object.assign({},s.enabled||{});
    if(on)next[id]=true;else delete next[id];
    return{enabled:next};
    });
    if(on)activate(id,true);else deactivate(id);
    }
    function register(id,api){registry[id]=api;if(isEnabled(id)){try{api.activate(false)}catch(e){}}}
    function activate(id,manual){
    var api=registry[id];
    if(!api)return;
    try{api.activate(manual)}catch(e){}
    }
    function deactivate(id){
    var api=registry[id];
    if(!api)return;
    try{api.deactivate()}catch(e){}
    }
    function boot(){
    defs().forEach(function(d){if(isEnabled(d.id))activate(d.id)});
    }
    window.FueyPlugins={register:register,setEnabled:setEnabled,isEnabled:isEnabled,boot:boot,list:defs};
    document.addEventListener('DOMContentLoaded',function(){setTimeout(boot,350)});
    })();
