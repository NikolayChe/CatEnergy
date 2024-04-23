const burgerMenu = document.querySelector(".nav-menu__list");
const burgerBtn = document.querySelector(".nav-menu__btn");
const navBtn = document.querySelector (".nav-menu__link");

if (window.innerWidth < 768) {
    burgerMenu.classList.add ("nav-hiden");
} else {
    burgerMenu.classList.remove ("nav-hiden");
};
window.addEventListener("resize", (function() {
    if (window.innerWidth < 768) {
        burgerMenu.classList.add ("nav-hiden");
    } else {
        burgerMenu.classList.remove ("nav-hiden");
    };
}));
burgerBtn.addEventListener ("click", () => {
    burgerMenu.classList.toggle ("nav-hiden");
    burgerBtn.classList.toggle ("btn-closed")
})
navBtn.addEventListener ("click", () => {
    burgerMenu.classList.remove ("nav-hiden");
})

