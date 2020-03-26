
window.onload = function() {
  if ('localStorage' in window) {
    var confirm = localStorage.getItem('nome')|| '';
    
    if(confirm==''){
      document.getElementById('teste').innerHTML="<p>Você deve setar as suas configurações:</p><br><form><input type='text' id='nome' placeholder='Nome'><input type='text' id='cor' placeholder=' Cor favorita'><input type='text' id='idade' placeholder='Idade'><input type='text' id='cidade' placeholder='Cidade onde mora'><button onclick='Salvar()'>Salvar</button></form>";
    }else{
      document.getElementById('teste').innerHTML="teste02";
    }
       /*
    const valueInputLocal = document.getElementById('valuelocal');

    let reloadInputValue = function () {
      console.log("Local Storage: ", localStorage.getItem('myKey'));
      valueInputLocal.value = localStorage.getItem('myKey') || '';
    }
     
    reloadInputValue(); 

    valueInputLocal.addEventListener('keyup', function () {
      localStorage.setItem('myKey', this.value);
    });    */
    
  }
};
function Salvar(){
    const valueNome = document.getElementById('nome');
    const valueCor = document.getElementById('cor');
    const valueIdade = document.getElementById('idade');
    const valueCidade = document.getElementById('cidade');
}