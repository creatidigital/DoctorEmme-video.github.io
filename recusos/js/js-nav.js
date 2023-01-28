const menu = document.querySelector(".menu");
const openmenu = document.querySelector(".open-menu");
const closemenu = document.querySelector(".close-menu");

function toggleMenu() {
    menu.classList.toggle("menu-opened");
}

openmenu.addEventListener("click", toggleMenu);
closemenu.addEventListener("click", toggleMenu);