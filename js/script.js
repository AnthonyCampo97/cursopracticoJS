//console.log('Hello, World')
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuIconMobile = document.querySelector(".menu");
const menuCarIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector("#productDatail");

menuEmail.addEventListener("click", toggleDesktopmenu);
menuIconMobile.addEventListener("click", toggleMobileMenu);
menuCarIcon.addEventListener("click", toggleCaraside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);


function toggleDesktopmenu() {
  const isCarsideClosed = shoppingCartContainer.classList.contains('inactive');
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  if (!isCarsideClosed || !isProductDetailClosed) {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
  const isCarsideClosed = shoppingCartContainer.classList.contains('inactive');
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  if (!isCarsideClosed || !isProductDetailClosed) {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
}
function toggleCaraside() {
  const isDesktopmenu = desktopMenu.classList.contains('inactive');
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  if (!isMobileMenuClosed || !isDesktopmenu || !isProductDetailClosed) {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
  }
  shoppingCartContainer.classList.toggle('inactive');
}
function openProductDetailAside(){
  const isCarsideClosed = shoppingCartContainer.classList.contains('inactive');
  const isDesktopmenu = desktopMenu.classList.contains('inactive');
  if (!isCarsideClosed|| !isDesktopmenu) {
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
  }
  productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside(){
  productDetailContainer.classList.add('inactive');
}
const productList = []; //Constructor
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'PC AIO',
  price: 990,
  image: 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
  name: 'Portatil',
  price: 890,
  image: 'https://images.pexels.com/photos/5797997/pexels-photo-5797997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
//Funcion para crear productos en el HTML
function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
