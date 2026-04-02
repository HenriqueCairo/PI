function initHeader() {
  const hamburger = document.querySelector(".hamburger");
  const menuMobile = document.querySelector(".menu-mobile");
  const overlayMenu = document.querySelector(".overlay-menu");

  if (hamburger && menuMobile) {
    hamburger.addEventListener("click", () => {
      menuMobile.classList.toggle("active");

      if (overlayMenu) {
        overlayMenu.classList.toggle("active");
      }
    });
  }

  if (overlayMenu) {
    overlayMenu.addEventListener("click", () => {
      menuMobile.classList.remove("active");
      overlayMenu.classList.remove("active");
    });
  }
}