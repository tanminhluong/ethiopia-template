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
