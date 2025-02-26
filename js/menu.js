// Codigo para Menu Cascata:

document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach((item) => {
        const button = item.querySelector(".menu-btn");
        const submenu = item.querySelector(".submenu");

        if (button && submenu) {
            // Exibir submenu no hover
            item.addEventListener("mouseenter", function () {
                submenu.classList.add("active");
            });

            // Esconder submenu ao sair do menu-item
            item.addEventListener("mouseleave", function () {
                submenu.classList.remove("active");
            });

            // Alternar submenu no clique
            button.addEventListener("click", function (e) {
                e.preventDefault();

                // Fecha todos os outros submenus
                menuItems.forEach((el) => {
                    if (el !== item) {
                        el.classList.remove("active");
                    }
                });

                // Alternar visibilidade do submenu
                item.classList.toggle("active");
            });
        }
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener("click", function (e) {
        if (!e.target.closest(".menu-item")) {
            menuItems.forEach((item) => {
                item.classList.remove("active");
            });
        }
    });
});
