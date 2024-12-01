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

    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {

            if (link.dataset.action === 'close-menu') {
                menu.classList.remove('active');
                body.classList.remove('body-lock');
                return;
            }
            
            if (link.getAttribute('href').startsWith('#')) {
                const idElement = document.querySelector(link.getAttribute('href'));
                if (idElement) {
                    e.preventDefault();
                    window.scrollTo({
                        top: idElement.offsetTop,
                        behavior: 'smooth'
                    })
                }
                
            }

        });
    });

})();