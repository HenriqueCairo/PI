async function loadComponent(id, file) {
   const response = await fetch(file);
   const html = await response.text();
   document.getElementById(id).innerHTML = html; 
}


    async function initPage() {
  await loadComponent("header", "/src/components/header/index.html");
  await loadComponent("footer", "/src/components/footer/index.html");
    
  if (typeof initHeader === "fuction") {
    initHeader();
  }
  if (typeof initFooter === "fuction") {
    initFooter();
  }

}
initPage(); 