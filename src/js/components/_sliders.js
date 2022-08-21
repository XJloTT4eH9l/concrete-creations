 //Stock slider
 const swiper = new Swiper(".swiper-stock-preview", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesProgress: true,
});
const swiper2 = new Swiper(".swiper-stock-main", {
    loop: true,
    spaceBetween: 10,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    thumbs: {
    swiper: swiper,
    },
});