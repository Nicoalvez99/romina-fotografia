const navBtn = document.querySelector(".btn-toggle");
const navMenu = document.querySelector(".nav-menu");
const sobreMi = document.querySelector(".sobre");
const cont = document.querySelector(".conta");

navBtn.addEventListener("click", () => {
	navMenu.classList.toggle("nav-menu_visible");
});

sobreMi.addEventListener("click", () => {
	navMenu.classList.toggle("nav-menu_visible");
});

cont.addEventListener("click", () => {
	navMenu.classList.toggle("nav-menu_visible");
});

