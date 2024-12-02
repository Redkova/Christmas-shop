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


    const daysBlock = document.getElementById('days').querySelector('.cta-number');
    const hoursBlock = document.getElementById('hours').querySelector('.cta-number');
    const minutesBlock = document.getElementById('minutes').querySelector('.cta-number');
    const secondsBlock = document.getElementById('seconds').querySelector('.cta-number');

    const newYear = new Date(Date.UTC(2025, 0, 1, 0, 0, 0));

const updateTimer = () => {
    const today = Date.now();
    const deltaTodayNewYear = newYear - today;

if (deltaTodayNewYear <= 0) {
    clearInterval(createTimer);
    daysBlock.innerHTML = '0';
    hoursBlock.innerHTML = '0';
    minutesBlock.innerHTML = '0';
    secondsBlock.innerHTML = '0';
    return;
}
    const days = Math.floor(deltaTodayNewYear / (1000 * 60 * 60 * 24));
    const hours = Math.floor((deltaTodayNewYear % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((deltaTodayNewYear % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((deltaTodayNewYear % (1000 * 60)) / 1000);

    daysBlock.innerHTML = days;
    hoursBlock.innerHTML = hours;
    minutesBlock.innerHTML = minutes;
    secondsBlock.innerHTML = seconds;

};

const createTimer = setInterval(updateTimer, 1000);
updateTimer();

