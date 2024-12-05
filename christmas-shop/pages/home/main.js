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



    function generateSnowIcon(count) {
        const snowIcon = [];
        for (let i = 1; i <= 5; i++) {
            const redIcon = i <= count;
            snowIcon.push(`<svg class="snow-icon ${redIcon ? 'filled' : 'empty'}" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_44453_608)">
                            <path d="M12.1959 9.88162L11.6482 9.56542L13.1158 9.17219L12.8732 8.26704L10.5005 8.90278L9.38146 8.25667C9.39689 8.17336 9.40538 8.08765 9.40538 7.99997C9.40538 7.91229 9.39692 7.82655 9.38146 7.74327L10.5005 7.09716L12.8732 7.7329L13.1158 6.82775L11.6482 6.43452L12.1959 6.11831L14.546 5.97725L14.8921 4.02063L13.0246 3.34203L11.7274 5.30677L11.1797 5.62297L11.5729 4.15545L10.6678 3.91293L10.032 6.28561L8.91226 6.93211C8.78247 6.82103 8.63242 6.73313 8.4683 6.67494V5.3828L10.2052 3.64586L9.5426 2.98325L8.46827 4.05755V3.42515L9.51792 1.32584L7.99976 0L6.48157 1.3259L7.53122 3.42521V4.05761L6.45689 2.98332L5.79429 3.64592L7.53119 5.38286V6.675C7.36708 6.73319 7.21702 6.82109 7.08724 6.93217L5.96746 6.28568L5.33171 3.91299L4.42656 4.15551L4.81979 5.62304L4.27213 5.30684L2.9749 3.34209L1.10742 4.02069L1.45349 5.97731L3.80362 6.11838L4.35128 6.43458L2.88375 6.82781L3.1263 7.73296L5.49898 7.09722L6.61807 7.74333C6.60264 7.82664 6.59414 7.91235 6.59414 8.00003C6.59414 8.08771 6.60261 8.17345 6.61807 8.25673L5.49898 8.90285L3.1263 8.2671L2.88375 9.17226L4.35128 9.56548L3.80362 9.88169L1.45349 10.0227L1.10742 11.9793L2.97493 12.6579L4.27216 10.6932L4.81985 10.377L4.42662 11.8445L5.33177 12.087L5.96752 9.71435L7.0873 9.06786C7.21708 9.17894 7.36714 9.26684 7.53125 9.32503V10.6172L5.79435 12.3541L6.45696 13.0167L7.53129 11.9424V12.5748L6.48163 14.6741L7.99983 16L9.51802 14.6741L8.46837 12.5748V11.9424L9.5427 13.0167L10.2053 12.3541L8.4684 10.6172V9.32503C8.63251 9.26684 8.78257 9.17894 8.91235 9.06786L10.0321 9.71435L10.6679 12.087L11.573 11.8445L11.1798 10.377L11.7275 10.6932L13.0247 12.6579L14.8922 11.9793L14.5462 10.0227L12.1959 9.88162Z"/>
                            </g>
                            </svg>
                            `);
        }
        return snowIcon.join('');
    }

    function showModal(card) {
        const modal = document.querySelector('.modal');
        const modalOverlay =document.querySelector('.modal-overlay');
        const modalImage = document.querySelector('.modal-image');
        const modalCategory = modal.querySelector('.modal-category');
        const modalName = document.querySelector('.modal-name');
        const modalDescription = document.querySelector('.modal-description');
        const modalSuperPowerContainer = document.querySelector('.modal-superpower-power');

        modalImage.style.backgroundImage = `url(${card.image})`;
        modalCategory.textContent = card.category;
        modalCategory.style.color = card.categoryColor;
        modalName.textContent = card.name;
        modalDescription.textContent = card.description;

        modalSuperPowerContainer.innerHTML = '';
        Object.entries(card.superpowers).forEach(([powerName, powerValue]) => {
            const iconCount = parseInt(powerValue.replace('+', '')) / 100;
            const snowIcon = generateSnowIcon(iconCount);

            const powerElement = document.createElement('div');
            powerElement.classList.add('superpower');
            powerElement.innerHTML = `
                <span class="superpower-name">${powerName}</span>
                <span class="superpower-value">${powerValue}</span>
                <span class="superpower-stars">${snowIcon}</span>
            `;
            modalSuperPowerContainer.appendChild(powerElement);
        });

            modal.classList.add('active');
            modalOverlay.classList.add('active');
            document.body.classList.add('modal-open');
    }

    function closeModal() {
        const modal = document.querySelector('.modal');
        const modalOverlay = document.querySelector('.modal-overlay');
        modal.classList.remove('active');
        modalOverlay.classList.remove('active');
        document.body.classList.remove('modal-open'); 
    }

    document.querySelector('.modal-overlay').addEventListener('click', closeModal);
    document.querySelector('.modal-close').addEventListener('click', closeModal);

    fetch('../../assets/gifts.json')
    .then(response => response.json())
    .then(data => {
        const randomGiftCards = getRandomGiftCards(data, 4);
        const cardContainer = document.querySelector('.gift-card-container');

        randomGiftCards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('gift-card');
            cardElement.innerHTML = `
            <img class="gift-card-image" src="${card.image}" alt="${card.name}">
            <div class="gift-card-category" style="color: ${card.categoryColor};">${card.category}</div>
            <div class="gift-card-name">${card.name}</div>
            `;

            cardElement.addEventListener('click', () => showModal(card));
            cardContainer.appendChild(cardElement);
        });
    });

    function getRandomGiftCards(array, count) {
        const randomCards = array.sort(() => 0.5 - Math.random());
        return randomCards.slice(0, count);
    }


    const slider = document.querySelector('.slider-slides');
    const buttonLeft = document.querySelector('.button-left');
    const buttonRight = document.querySelector('.button-right');

    let currentClick = 0;
    let totalClick = 3;
    let scrollStep = 0;

    const scrollSlider = () => {
        const offset = currentClick * scrollStep;
        slider.style.transform = `translateX(-${offset}px)`;

        buttonLeft.disabled = currentClick === 0;
        buttonRight.disabled = currentClick >= totalClick;
    }; 

    const screenSize = () => {
        if (window.innerWidth < 768) {
            totalClick = 6;
        } else {
            totalClick = 3;
        }

        const visibleWidth = slider.parentElement.offsetWidth;
        const totalWidth = Array.from(slider.children).reduce(
            (sum, slide) => sum + slide.offsetWidth,
            0
        );

        scrollStep = (totalWidth - visibleWidth) / (totalClick - 1);

        currentClick = 0;
        scrollSlider();
    };


    buttonRight.addEventListener('click', () => {
        if (currentClick < totalClick) {
            currentClick++;
            scrollSlider();
        }
    });

    buttonLeft.addEventListener('click', () => {
        if (currentClick > 0) {
            currentClick--;
            scrollSlider();
        }
    });

    window.addEventListener('resize', screenSize);

    screenSize();





