const input = document.getElementById("card-number");

input.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, ""); // remove letras

  // adiciona espaço a cada 4 números
  value = value.replace(/(\d{4})(?=\d)/g, "$1 ");

  e.target.value = value;
});

// Validade (MM/AA)
const expiryInput = document.getElementById("expiration-date");

expiryInput.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "");

  if (value.length > 2) {
    value = value.slice(0, 2) + "/" + value.slice(2, 4);
  }

  e.target.value = value;
});

// CVV
const cvvInput = document.getElementById("cvv");

cvvInput.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/\D/g, "");
});

const nameInput = document.getElementById("card-name");

nameInput.addEventListener("input", (e) => {
  let value = e.target.value;

  // Remove números e caracteres especiais (permite só letras e espaço)
  value = value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");

  // Deixa tudo em MAIÚSCULO (padrão de cartão)
  e.target.value = value.toUpperCase();
});
loadComponent("header", "/src/components/header/index.html");
loadComponent("footer", "/src/components/footer/index.html");