// TROCA DE IMAGEM
const mainProductImage = document.getElementById("mainProductImage");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const newImage = thumb.getAttribute("data-image");
    mainProductImage.src = newImage;

    thumbs.forEach((item) => item.classList.remove("active"));
    thumb.classList.add("active");
  });
});

// SELEÇÃO DE TAMANHO
const sizeButtons = document.querySelectorAll(".size-btn");

sizeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    sizeButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
  });
});

// ACCORDION
const accordionTriggers = document.querySelectorAll(".accordion-trigger");

accordionTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const content = trigger.nextElementSibling;
    const arrow = trigger.querySelector(".arrow");

    const isOpen = content.classList.contains("open");

    document.querySelectorAll(".accordion-content").forEach((item) => {
      item.classList.remove("open");
    });

    document.querySelectorAll(".accordion-trigger").forEach((btn) => {
      const arr = btn.querySelector(".arrow");
      if (arr) arr.textContent = "›";
    });

    if (!isOpen) {
      content.classList.add("open");
      arrow.textContent = "⌄";
    }
  });
});

// ADICIONAR AO CARRINHO
const addToCartBtn = document.querySelector(".add-cart-btn");

addToCartBtn.addEventListener("click", () => {
  const selectedSize = document.querySelector(".size-btn.active");

  if (!selectedSize) {
    alert("Selecione um tamanho.");
    return;
  }

  const product = {
    name: 'ESSENTIALS "OFF-GRID" OVERSIZED TEE',
    price: 189.90,
    size: selectedSize.textContent,
    qty: 1
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Produto adicionado ao carrinho!");
});
async function loadComponent(id, file) {
  const response = await fetch(file);
  const html = await response.text();
  document.getElementById(id).innerHTML = html;
}

loadComponent("header", "/src/components/header/index.html");
loadComponent("footer", "/src/components/footer/index.html");