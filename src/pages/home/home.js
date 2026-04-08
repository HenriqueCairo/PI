async function loadComponent(id, file) {
  const target = document.getElementById(id);
  if (!target) return;

  const response = await fetch(file);
  const html = await response.text();
  target.innerHTML = html;
}

async function initPage() {
  await loadComponent("header", "/src/components/header/index.html");
  await loadComponent("footer", "/src/components/footer/index.html");
  await loadComponent("modals", "/src/components/modals/index.html");

  if (typeof initHeader === "function") initHeader();
  if (typeof initFooter === "function") initFooter();
  if (typeof initModals === "function") initModals();
}

document.addEventListener("DOMContentLoaded", initPage);