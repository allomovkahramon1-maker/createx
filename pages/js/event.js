
const eventSwiper = new Swiper(".eventSwiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 500,
    loop:true,
    navigation: {
        nextEl: ".event-next",
        prevEl: ".event-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
    },
});


const menuBtn = document.querySelector('#menuBtn');
const closeBtn = document.querySelector('#closeBtn');
const mobileMenu = document.querySelector('#mobileMenu');

// Menu ochish
menuBtn.addEventListener('click', function () {
    mobileMenu.classList.remove('hidden');

    menuBtn.classList.add('hidden');
    closeBtn.classList.remove('hidden');
});

// Menu yopish
closeBtn.addEventListener('click', function () {
    mobileMenu.classList.add('hidden');

    closeBtn.classList.add('hidden');
    menuBtn.classList.remove('hidden');
});