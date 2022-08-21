const burgerBtn = document.querySelector('.burger-menu');
const navMobile = document.querySelector('.nav-mobile');
const navMobileLink = document.querySelectorAll('.nav-mobile__link');


burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger-menu--active');
    navMobile.classList.toggle('nav-mobile--active');
});

navMobileLink.forEach((item) => {
    item.addEventListener('click', () => {
        burgerBtn.classList.remove('burger-menu--active');
        navMobile.classList.remove('nav-mobile--active');
    });
});