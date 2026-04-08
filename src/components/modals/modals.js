function formatPrice(value) {
  return "R$" + value.toFixed(2).replace(".", ",");
}

function openModal(modalId) {
  const overlay = document.getElementById("globalModalOverlay");
  const modals = document.querySelectorAll(".global-modal");

  modals.forEach((modal) => modal.classList.remove("active"));

  const targetModal = document.getElementById(modalId);
  if (overlay) overlay.classList.add("active");
  if (targetModal) targetModal.classList.add("active");
}

function closeAllModals() {
  const overlay = document.getElementById("globalModalOverlay");
  const modals = document.querySelectorAll(".global-modal");

  if (overlay) overlay.classList.remove("active");
  modals.forEach((modal) => modal.classList.remove("active"));
}

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function renderCart() {
  const cartItemsContainer = document.getElementById("cartItemsContainer");
  const cartSummaryLines = document.getElementById("cartSummaryLines");
  const cartTotal = document.getElementById("cartTotal");

  if (!cartItemsContainer || !cartSummaryLines || !cartTotal) return;

  const cart = getCart();

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<p class="empty-cart">Seu carrinho está vazio.</p>`;
    cartSummaryLines.innerHTML = "";
    cartTotal.textContent = "R$0,00";
    return;
  }

  let total = 0;

  cartItemsContainer.innerHTML = cart.map((item, index) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;

    return `
      <article class="cart-item" data-index="${index}">
        <img src="${item.image || 'https://placehold.co/170x140/1a1a1a/ffffff?text=PRODUTO'}" alt="${item.name}">
        <div class="item-info">
          <div class="item-header">
            <div>
              <h2>${item.name}</h2>
              <p class="category">${item.category || "Produto"}</p>
            </div>
            <button class="remove-btn" data-remove-index="${index}">x</button>
          </div>

          <div class="item-controls">
            <span class="size">Tamanho: ${item.size || "Único"}</span>

            <div class="qty-box">
              <button class="qty-btn" data-minus-index="${index}">-</button>
              <span class="qty">${item.qty}</span>
              <button class="qty-btn" data-plus-index="${index}">+</button>
            </div>
          </div>

          <p class="item-price">${formatPrice(itemTotal)}</p>
        </div>
      </article>
    `;
  }).join("");

  cartSummaryLines.innerHTML = cart.map((item) => {
    const itemTotal = item.price * item.qty;
    return `
      <div class="summary-line">
        <span>${item.name}</span>
        <span>${formatPrice(itemTotal)}</span>
      </div>
    `;
  }).join("");

  cartTotal.textContent = formatPrice(total);

  bindCartActions();
}

function bindCartActions() {
  const minusButtons = document.querySelectorAll("[data-minus-index]");
  const plusButtons = document.querySelectorAll("[data-plus-index]");
  const removeButtons = document.querySelectorAll("[data-remove-index]");

  minusButtons.forEach((button) => {
    button.onclick = () => {
      const index = Number(button.dataset.minusIndex);
      let cart = getCart();

      if (cart[index].qty > 1) {
        cart[index].qty -= 1;
        saveCart(cart);
        renderCart();
      }
    };
  });

  plusButtons.forEach((button) => {
    button.onclick = () => {
      const index = Number(button.dataset.plusIndex);
      let cart = getCart();

      cart[index].qty += 1;
      saveCart(cart);
      renderCart();
    };
  });

  removeButtons.forEach((button) => {
    button.onclick = () => {
      const index = Number(button.dataset.removeIndex);
      let cart = getCart();

      cart.splice(index, 1);
      saveCart(cart);
      renderCart();
    };
  });
}

function initModals() {
  const goToCheckoutBtn = document.getElementById("goToCheckoutBtn");

if (goToCheckoutBtn) {
  goToCheckoutBtn.addEventListener("click", () => {
    const cart = getCart();
    localStorage.setItem("checkoutData", JSON.stringify(cart));
    window.location.href = "/src/pages/checkout/index.html";
  });
}
  const isPaymentPage = window.location.pathname.includes("/pagamento/");

  if (isPaymentPage) return;

  const overlay = document.getElementById("globalModalOverlay");
  const closeButtons = document.querySelectorAll("[data-close-modal]");
  const loginTriggers = document.querySelectorAll(".login-trigger");
  const cartTriggers = document.querySelectorAll(".cart-trigger");
  const openRegisterBtn = document.querySelector("[data-open-register]");
  const openLoginBtn = document.querySelector("[data-open-login]");
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  loginTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      openModal("loginModal");
    });
  });

  cartTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      renderCart();
      openModal("cartModal");
    });
  });

  if (openRegisterBtn) {
    openRegisterBtn.addEventListener("click", () => {
      openModal("registerModal");
    });
  }

  if (openLoginBtn) {
    openLoginBtn.addEventListener("click", () => {
      openModal("loginModal");
    });
  }

  if (overlay) {
    overlay.addEventListener("click", closeAllModals);
  }

  closeButtons.forEach((button) => {
    button.addEventListener("click", closeAllModals);
  });

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const email = document.getElementById("loginEmail").value.trim();
      const senha = document.getElementById("loginSenha").value.trim();

      if (!email || !senha) {
        alert("Preencha todos os campos.");
        return;
      }

      alert("Login enviado com sucesso.");
      closeAllModals();
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const sobrenome = document.getElementById("sobrenome").value.trim();
      const dia = document.getElementById("dia").value.trim();
      const mes = document.getElementById("mes").value.trim();
      const ano = document.getElementById("ano").value.trim();
      const cpf = document.getElementById("cpf").value.trim();
      const telefone = document.getElementById("telefone").value.trim();
      const email = document.getElementById("registerEmail").value.trim();
      const senha = document.getElementById("registerSenha").value.trim();
      const sexo = document.querySelector('input[name="sexo"]:checked');

      if (!nome || !sobrenome || !dia || !mes || !ano || !cpf || !telefone || !email || !senha || !sexo) {
        alert("Preencha todos os campos.");
        return;
      }

      alert("Cadastro enviado com sucesso.");
      closeAllModals();
    });
  }
}