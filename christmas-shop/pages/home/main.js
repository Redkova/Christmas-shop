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
    /*
    if (window.innerWidth <= 768) {
        for (let i = 0; i < menuLinks.length; i+=1) {
            menuLinks[i].addEventListener('click', () => {
                burgerItem.classList.remove('active');
                menu.classList.remove('active');
                body.classList.remove('body-lock')
            });
        }
    }
        */

    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const linkID = link.getAttribute('href').slice(1);
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