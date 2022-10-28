document.addEventListener('DOMContentLoaded', function () {
    const headerShopCart = document.querySelector('#header-shop-cart');
    const shopCartPopup = document.querySelector('#shop-cart-popup');
    const appOverlay = document.querySelector('#app-overlay');
    const shopCartPopupCloseBtn = shopCartPopup.querySelector('.cart-popup__hidden-button');
    const mobileMenu = document.querySelector('#mobile-menu');

    const menuButton = document.querySelector('#menu-toggle-icon');

    menuButton.addEventListener('click', function () {

        var rect = menuButton.getBoundingClientRect();

        menuButton.style.top = rect.top + 'px';
        menuButton.style.left = rect.left + 'px';

        menuButton.classList.toggle('position-fixed');
        menuButton.querySelector('.bars-icon').classList.toggle('is-open');
        mobileMenu.classList.toggle('show');
        appOverlay.classList.toggle('d-block');
    });
    headerShopCart.addEventListener('click', function () {
        shopCartPopup.classList.add('show');
        appOverlay.classList.add('d-block');
    });
    shopCartPopupCloseBtn.addEventListener('click', function () {
        shopCartPopup.classList.remove('show');
        appOverlay.classList.remove('d-block');
    });

});