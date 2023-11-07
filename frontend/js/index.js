/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./frontend/_js/main.js ***!
  \******************************/
const menuIcon = document.querySelector(".menu-mobile--icon");
const navMobile = document.querySelector(".header__nav--mobile");
const navOverlay = document.querySelector(".nav-overlay");

const handleClick = (e) => {
  if (navMobile.style.transform === "translateX(-100%)") {
    navMobile.style.transform = "translateX(0)";
    navMobile.style.transition = "all ease-in 0.2s";
    navOverlay.style.display = "block";
  } else {
    navMobile.style.transform = "translateX(-100%)";
    navOverlay.style.display = "none";
  }
};

navOverlay.addEventListener("click", handleClick);
menuIcon.addEventListener("click", handleClick);

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

/******/ })()
;
//# sourceMappingURL=index.js.map