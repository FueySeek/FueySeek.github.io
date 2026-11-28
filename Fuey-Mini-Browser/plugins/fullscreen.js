(function(){
    'use strict';
    window.FueyPlugins.register('fullscreen',{
    activate:function(){
    document.documentElement.classList.add('plugin-fullscreen');
    document.documentElement.dataset.fullscreenHideToolbar=Core.settingsStore.get().fullscreenHideToolbar?'true':'false';
    var root=document.documentElement;
    if(root.requestFullscreen&&!document.fullscreenElement){
    var result=root.requestFullscreen({navigationUI:'hide'});
    if(result&&result.catch)result.catch(function(){});
    }
    },
    deactivate:function(){
    document.documentElement.classList.remove('plugin-fullscreen');
    document.documentElement.removeAttribute('data-fullscreen-hide-toolbar');
    if(document.fullscreenElement&&document.exitFullscreen){
    var result=document.exitFullscreen();
    if(result&&result.catch)result.catch(function(){});
    }
    }
    });
    })();
