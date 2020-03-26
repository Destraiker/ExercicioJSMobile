
window.onload = function() {
  document.getElementById('conexao').innerHTML =navigator.deviceMemory;
  document.getElementById('status').innerHTML = navigator.onLine ? 'online' : 'offline';
  document.getElementById('linguagem').innerHTML = navigator.userAgent;
  document.getElementById('agent').innerHTML = navigator.language;
  
};