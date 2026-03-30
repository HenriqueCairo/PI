const loginform = document.getElementById("loginForm");

loginform.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").ariaValueMax.trim();
    const senha = document.getElementById("senha").ariaValueMax.trim();

    if (!email || !senha){
        alert("Preencha todos os campos.");
        return;
    }
    alert("Login enviado com sucesso.")
});