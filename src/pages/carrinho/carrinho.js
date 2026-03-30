const cartItems = document.querySelectorAll(".cart-item");
const removeButtons = document.querySelectorAll(".remove-btn");
const plusButtons = document.querySelectorAll(".plus");
const minusButtons = document.querySelectorAll(".minus");

const item1PriceEl = document.getElementById("item1Price");
const item2PriceEl = document.getElementById("item2Price");
const subtotalEl = document.getElementById("subtotal");
const totalEl = document.getElementById("total");

function formatPrice(value) {
  return "R$" + value.toFixed(2).replace(".", ",");
}

function updateSummary() {
  const activeItems = document.querySelectorAll(".cart-item");
  let subtotal = 0;

  activeItems.forEach((item, index) => {
    const unitPrice = Number(item.dataset.price);
    const qty = Number(item.querySelector(".qty").textContent);
    const totalItem = unitPrice * qty;

    subtotal += totalItem;

    if (index === 0 && item1PriceEl) {
      item1PriceEl.textContent = formatPrice(totalItem);
    }

    if (index === 1 && item2PriceEl) {
      item2PriceEl.textContent = formatPrice(totalItem);
    }
  });

  if (activeItems.length === 0) {
    if (item1PriceEl) item1PriceEl.textContent = "R$0,00";
    if (item2PriceEl) item2PriceEl.textContent = "R$0,00";
  }

  if (activeItems.length === 1) {
    if (item2PriceEl && !document.querySelectorAll(".cart-item")[1]) {
      item2PriceEl.textContent = "R$0,00";
    }
  }

  subtotalEl.textContent = formatPrice(subtotal);
  totalEl.textContent = formatPrice(subtotal);
}

plusButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const qtyEl = this.parentElement.querySelector(".qty");
    let qty = Number(qtyEl.textContent);
    qty++;
    qtyEl.textContent = qty;
    updateSummary();
  });
});

minusButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const qtyEl = this.parentElement.querySelector(".qty");
    let qty = Number(qtyEl.textContent);

    if (qty > 1) {
      qty--;
      qtyEl.textContent = qty;
      updateSummary();
    }
  });
});
const closeButton = document.querySelector(".close-btn");
const cartModal = document.querySelector(".cart-modal");

closeButton.addEventListener("click", () => {
  cartModal.style.display = "none";
});

function bindRemoveButtons() {
  const removeButtons = document.querySelectorAll(".remove-btn");

  removeButtons.forEach((button) => {
    button.onclick = function () {
      const item = this.closest(".cart-item");
      item.remove();
      updateSummary();
    };
  });
}

bindRemoveButtons();