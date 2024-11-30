(function () {
    const burgerItem = document.querySelector('.header-burger');
    const menu = document.querySelector('.header-nav');
    burgerItem.addEventListener('click', () => {
        burgerItem.classList.toggle('active');
        menu.classList.toggle('active');
    });

}())