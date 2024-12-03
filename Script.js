document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    // Alterna o menu hambúrguer em telas pequenas
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("show");
    });

    // Alterna entre as seções ao clicar no menu
    window.showSection = (sectionId) => {
        const sections = document.querySelectorAll(".section");
        sections.forEach(section => section.classList.remove("active"));
        document.getElementById(sectionId).classList.add("active");
    };
});
