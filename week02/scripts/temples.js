// Atualiza o ano no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// Atualiza a última data de modificação da página
document.getElementById("lastModified").textContent = document.lastModified;

// Menu hambúrguer
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.textContent = navMenu.classList.contains("active") ? "✖" : "☰";
});
