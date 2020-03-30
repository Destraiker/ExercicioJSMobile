
window.onload = function () {



  console.log(JSON.parse(localStorage.getItem('dados')));

};

function Salvar() {
  var dados = new Object();
  dados.nome = document.getElementById('nome').value;
  dados.data = document.getElementById('data').value;
  dados.QCa = document.getElementById('QCa').value;
  dados.QA = document.getElementById('QA').value;
  dados.QCu = document.getElementById('QCu').value;
  dados.melhorCurso = document.getElementById('melhorCurso').value;

  localStorage.setItem('dados', JSON.stringify(dados));
}