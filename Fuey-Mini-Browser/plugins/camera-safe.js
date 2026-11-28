(function(){
    'use strict';
    var sheet=null;
    function offset(){return Core.settingsStore.get().cameraOffset||24}
    function apply(value){
    document.documentElement.style.setProperty('--camera-offset',value+'px');
    }
    function closeSheet(){
    if(sheet&&sheet.parentNode)sheet.remove();
    sheet=null;
    }
    function showSheet(){
    closeSheet();
    sheet=document.createElement('div');
    sheet.className='camera-sheet';
    sheet.innerHTML='<div class="camera-sheet-card"><div class="camera-sheet-title">'+Core.t('cameraTitle')+'</div><div class="camera-sheet-hint">'+Core.t('cameraHint')+'</div><input class="camera-range" type="range" min="0" max="80" step="2" value="'+offset()+'"><div class="camera-value" data-value>'+offset()+' px</div><div class="camera-sheet-actions"><button class="btn btn--primary" type="button" data-done>'+Core.t('cameraDone')+'</button></div></div>';
    document.body.append(sheet);
    var range=sheet.querySelector('.camera-range');
    var value=sheet.querySelector('[data-value]');
    range.addEventListener('input',function(){
    apply(parseInt(range.value,10));
    value.textContent=range.value+' px';
    Core.settingsStore.set({cameraOffset:parseInt(range.value,10)});
    });
    sheet.querySelector('[data-done]').addEventListener('click',closeSheet);
    sheet.addEventListener('click',function(e){if(e.target===sheet)closeSheet()});
    }
    window.FueyPlugins.register('camera-safe',{
    activate:function(manual){
    document.documentElement.classList.add('plugin-camera-safe');
    apply(offset());
    if(manual)showSheet();
    },
    deactivate:function(){
    document.documentElement.classList.remove('plugin-camera-safe');
    closeSheet();
    }
    });
    })();
