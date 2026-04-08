function initHeader() {
  const hamburger = document.querySelector(".hamburger");
  const menuMobile = document.querySelector(".menu-mobile");
  const overlay = document.querySelector(".overlay-menu");

  if (!hamburger || !menuMobile || !overlay) return;

  hamburger.addEventListener("click", () => {
    menuMobile.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    menuMobile.classList.remove("active");
    overlay.classList.remove("active");
  });
}