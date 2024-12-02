var burger = document.querySelector(".burger");
var burger_menu = document.querySelector(".burger_menu");

var toggleMenu = function toggleMenu() {
  burger_menu.classList.toggle("is-active");
  burger.classList.toggle("is-active");
};

burger.addEventListener("click", toggleMenu);
