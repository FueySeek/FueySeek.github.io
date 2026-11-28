(function(){
    'use strict';
    var wrap=null;
    var outside=null;
    function closeMenu(){var menu=wrap&&wrap.querySelector('.ai-work-menu');if(menu)menu.hidden=true}
    function openTask(label,prompt){
    closeMenu();
    if(window.App&&window.App.openAiTask)window.App.openAiTask(label,prompt);
    }
    function activate(){
    if(wrap)return;
    var C=window.Core;
    var showLabel=C.settingsStore.get().aiWorkLabel!==false;
    wrap=document.createElement('div');
    wrap.className='ai-work-fab-wrap';
    wrap.innerHTML='<button class="ai-work-fab'+(showLabel?'':' is-icon-only')+'" type="button">'+C.ICONS.sparkle+(showLabel?'<span>'+C.t('aiWorkName')+'</span>':'')+'</button>'+
    '<div class="ai-work-menu" hidden>'+
    '<button type="button" data-task="summary">'+C.t('aiWorkSummary')+'</button>'+
    '<button type="button" data-task="translate">'+C.t('aiWorkTranslate')+'</button>'+
    '<button type="button" data-task="polish">'+C.t('aiWorkPolish')+'</button>'+
    '<button type="button" data-task="code">'+C.t('aiWorkCode')+'</button>'+
    '</div>';
    document.body.append(wrap);
    wrap.querySelector('.ai-work-fab').addEventListener('click',function(e){
    e.stopPropagation();
    var menu=wrap.querySelector('.ai-work-menu');
    menu.hidden=!menu.hidden;
    });
    wrap.querySelector('.ai-work-menu').addEventListener('click',function(e){
    var btn=e.target.closest('[data-task]');
    if(!btn)return;
    var map={
    summary:{label:C.t('aiWorkSummary'),prompt:'Read the current page and summarize the key points in 3-5 bullets, then give a one-sentence summary.'},
    translate:{label:C.t('aiWorkTranslate'),prompt:'Translate the current page into English and output only the translation.'},
    polish:{label:C.t('aiWorkPolish'),prompt:'Polish the following text to make it more natural, concise and professional:\n\n'},
    code:{label:C.t('aiWorkCode'),prompt:'Write code for the following requirement:\n'}
    };
    var task=map[btn.dataset.task];
    if(task)openTask(task.label,task.prompt);
    });
    outside=function(e){if(wrap&&!wrap.contains(e.target))closeMenu()};
    document.addEventListener('click',outside);
    }
    function deactivate(){
    if(outside)document.removeEventListener('click',outside);
    outside=null;
    if(wrap&&wrap.parentNode)wrap.remove();
    wrap=null;
    }
    window.FueyPlugins.register('ai-work',{activate:activate,deactivate:deactivate});
    })();
