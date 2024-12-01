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
            const href = link.getAttribute('href');

            if (href.includes('#')) {
                e.preventDefault();
            }

            const linkID = href.split('#')[1];
            const linkSection = document.getElementById(linkID);
            
            if (linkSection) {
                linkSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                })
            }

            burgerItem.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('body-lock');
        });
    });

})();