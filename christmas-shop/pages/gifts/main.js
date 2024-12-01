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

            if (link.textContent.trim().toLowerCase() === 'gifts') {
                e.preventDefault();
                burgerItem.classList.remove('active');
                menu.classList.remove('active');
                body.classList.remove('body-lock');
                return;
            }
            
            if (link.getAttribute('href').startsWith('#')) {
                const idElement = document.querySelector(link.getAttribute('href'));
                if (idElement) {
                    window.scrollTo({
                        top: idElement.offsetTop,
                        behavior: 'smooth'
                    })
                }

                burgerItem.classList.remove('active');
                menu.classList.remove('active');
                body.classList.remove('body-lock');
                return;
                
            }

            burgerItem.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('body-lock');

        });
    });

})();