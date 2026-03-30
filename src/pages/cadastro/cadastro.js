const cadastroForm = document.getElementById("cadastroForm");

cadastroForm.addEventListener("submit", function (event){
    event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const sobrenome = document.getElementById("sobrenome").value.trim();
  const dia = document.getElementById("dia").value.trim();
  const mes = document.getElementById("mes").value.trim();
  const ano = document.getElementById("ano").value.trim();
  const cpf = document.getElementById("cpf").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const sexoSelecionado = document.querySelector('input[name="sexo"]:checked');
})