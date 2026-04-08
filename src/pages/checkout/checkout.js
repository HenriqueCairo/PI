function buscarCep() {
  let cep = document.getElementById('cep').value.replace(/\D/g, '');

  if (cep.length !== 8) {
    alert('CEP inválido');
    return;
  }

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(dados => {
      if (dados.erro) {
        alert('CEP não encontrado');
        return;
      }

      document.getElementById('endereco').value = dados.logradouro;
      document.getElementById('bairro').value = dados.bairro;
      document.getElementById('cidade').value = dados.localidade;
      document.getElementById('estado').value = dados.uf;
    })
    .catch(() => {
      alert('Erro ao buscar CEP');
    });
}
async function loadComponent(id, file) {
  const response = await fetch(file);
  const html = await response.text();
  document.getElementById(id).innerHTML = html;
}

async function initPage() {
  await loadComponent("header", "/src/components/header/index.html");
  await loadComponent("footer", "/src/components/footer/index.html");
  await loadComponent("modals", "/src/components/modals/index.html");

  if (typeof initHeader === "function") {
    initHeader();
  }

  if (typeof initFooter === "function") {
    initFooter();
  }

  if (typeof initModals === "function") {
    initModals();
  }
}
const checkoutData = JSON.parse(localStorage.getItem("checkoutData")) || [];
localStorage.setItem("paymentData", JSON.stringify(checkoutData));
window.location.href = "/src/pages/pagamento/index.html";

initPage();