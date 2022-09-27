//console.log('Hello, World')
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuIconMobile = document.querySelector(".menu");
const menuCarIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopmenu);
menuIconMobile.addEventListener("click", toggleMobileMenu);
menuCarIcon.addEventListener("click", toggleCaraside);

function toggleDesktopmenu() {
  const isCarsideClosed = aside.classList.contains("inactive");
  if (!isCarsideClosed) {
    aside.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
  const isCarsideClosed = aside.classList.contains("inactive");
  if (!isCarsideClosed) {
    aside.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleCaraside() {
  const isDesktopmenu = desktopMenu.classList.contains("inactive");
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  if (!isMobileMenuClosed || !isDesktopmenu) {
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
  }
  aside.classList.toggle("inactive");
}
