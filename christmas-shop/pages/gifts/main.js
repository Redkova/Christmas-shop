(function () {
    const burgerItem = document.querySelector('.header-burger');
    const menu = document.querySelector('.header-nav');
    const body = document.body;
    const menuLinks = document.querySelectorAll('.nav-item');
    burgerItem.addEventListener('click', () => {
        burgerItem.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('body-lock');
    });
    