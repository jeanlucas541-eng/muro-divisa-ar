(function(){
  var done=false;
  var status=document.getElementById('status');
  function fail(message){
    if(done)return;
    status.hidden=false;
    status.textContent='Não foi possível iniciar a caminhada. '+message+' Abra no Safari e envie uma captura desta mensagem.';
    document.getElementById('badge').textContent='Falha no carregamento';
  }
  window.addEventListener('error',function(e){fail(e.message||'Erro ao carregar o 3D.');});
  window.addEventListener('unhandledrejection',function(e){fail(String(e.reason&&e.reason.message||e.reason));});
  window.addEventListener('viewer-ready',function(){done=true;});
  setTimeout(function(){if(!done)fail('O carregamento excedeu 60 segundos. Confira a conexão.');},60000);
  import('./viewer.js?v=3').catch(function(e){fail(e.message||'Falha na biblioteca 3D.');});
})();
