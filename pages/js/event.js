
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
