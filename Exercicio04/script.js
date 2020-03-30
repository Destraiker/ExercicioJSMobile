
window.onload = function () {
  if ('localStorage' in window) {
    var confirm = localStorage.getItem('nome') || '';

    if (confirm == '') {
      var inicio = document.getElementById("inicio");
      if (inicio != null) {
        inicio.style.display = "none";
      }
    } else {
      var form = document.getElementById("form");
      form.style.display = "none";

      document.getElementById('nomeH1').innerHTML = "Nome: " + localStorage.getItem('nome');
      document.getElementById('body').style.backgroundColor = localStorage.getItem('cor');
      document.getElementById('idadeH2').innerHTML = "Idade: " + localStorage.getItem('idade');
      document.getElementById('cidadeP').innerHTML = "Cidade: " + localStorage.getItem('cidade');
    }
  }
};

function Salvar() {
  localStorage.setItem('nome', document.getElementById('nome').value);
  localStorage.setItem('cor', document.getElementById('cor').value);
  localStorage.setItem('idade', document.getElementById('idade').value);
  localStorage.setItem('cidade', document.getElementById('cidade').value);
}