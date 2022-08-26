/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/_burger */ "./src/js/components/_burger.js");
/* harmony import */ var _components_burger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_burger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/_modals */ "./src/js/components/_modals.js");
/* harmony import */ var _components_modals__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_modals__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_sliders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/_sliders */ "./src/js/components/_sliders.js");
/* harmony import */ var _components_sliders__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_sliders__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_show_more__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/_show-more */ "./src/js/components/_show-more.js");
/* harmony import */ var _components_show_more__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_show_more__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_vacancy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/_vacancy */ "./src/js/components/_vacancy.js");
/* harmony import */ var _components_vacancy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_vacancy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_catalog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/_catalog */ "./src/js/components/_catalog.js");
/* harmony import */ var _components_catalog__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_catalog__WEBPACK_IMPORTED_MODULE_5__);







/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/components/_burger.js":
/*!**************************************!*\
  !*** ./src/js/components/_burger.js ***!
  \**************************************/
/***/ (() => {

var burgerBtn = document.querySelector('.burger-menu');
var navMobile = document.querySelector('.nav-mobile');
var navMobileLink = document.querySelectorAll('.nav-mobile__link');
burgerBtn.addEventListener('click', function () {
  burgerBtn.classList.toggle('burger-menu--active');
  navMobile.classList.toggle('nav-mobile--active');
});
navMobileLink.forEach(function (item) {
  item.addEventListener('click', function () {
    burgerBtn.classList.remove('burger-menu--active');
    navMobile.classList.remove('nav-mobile--active');
  });
});

/***/ }),

/***/ "./src/js/components/_catalog.js":
/*!***************************************!*\
  !*** ./src/js/components/_catalog.js ***!
  \***************************************/
/***/ (() => {

var locationCata = String(window.location.href).split('/');

if (locationCata[locationCata.length - 1] === 'catalog.html') {
  var goodsNums = document.querySelectorAll('.product__num');
  var catalogInner = document.querySelector('.catalog-section__inner--page');
  var catalogGoods = [{
    id: 1,
    title: 'Лоток Л 20.5 (УБК-2а)',
    descr: 'Д/Ш/В 3080х2060х580 ммВес 0,175 т  |  Объём 0,07 м3',
    price: '5 200 грн/шт',
    img: 'img/plate.png'
  }, {
    id: 1,
    title: 'Лоток Л 20.5 (УБК-2а)',
    descr: 'Д/Ш/В 3080х2060х580 ммВес 0,175 т  |  Объём 0,07 м3',
    price: '6 250 грн/шт',
    img: 'img/plate.png'
  }, {
    id: 1,
    title: 'Лоток Л 20.5 (УБК-2а)',
    descr: 'Д/Ш/В 3080х2060х580 ммВес 0,175 т  |  Объём 0,07 м3',
    price: '3 400 грн/шт',
    img: 'img/plate.png'
  }, {
    id: 1,
    title: 'Лоток Л 20.5 (УБК-2а)',
    descr: 'Д/Ш/В 3080х2060х580 ммВес 0,175 т  |  Объём 0,07 м3',
    price: '5 650 грн/шт',
    img: 'img/plate.png'
  }, {
    id: 2,
    title: 'Лоток Л 20.5 (УБК-2а)',
    descr: 'Д/Ш/В 3080х2060х580 ммВес 0,175 т  |  Объём 0,07 м3',
    price: '5 200 грн/шт',
    img: 'img/tray.png'
  }, {
    id: 2,
    title: 'Лоток Л 20.5 (УБК-2а)',
    descr: 'Д/Ш/В 3080х2060х580 ммВес 0,175 т  |  Объём 0,07 м3',
    price: '5 200 грн/шт',
    img: 'img/tray.png'
  }, {
    id: 2,
    title: 'Лоток Л 20.5 (УБК-2а)',
    descr: 'Д/Ш/В 3080х2060х580 ммВес 0,175 т  |  Объём 0,07 м3',
    price: '5 200 грн/шт',
    img: 'img/tray.png'
  }, {
    id: 3,
    title: 'Лоток Л 20.5 (УБК-2а)',
    descr: 'Д/Ш/В 3080х2060х580 ммВес 0,175 т  |  Объём 0,07 м3',
    price: '5 200 грн/шт',
    img: 'img/plate.png'
  }, {
    id: 3,
    title: 'Лоток Л 20.5 (УБК-2а)',
    descr: 'Д/Ш/В 3080х2060х580 ммВес 0,175 т  |  Объём 0,07 м3',
    price: '5 200 грн/шт',
    img: 'img/plate.png'
  }, {
    id: 3,
    title: 'Лоток Л 20.5 (УБК-2а)',
    descr: 'Д/Ш/В 3080х2060х580 ммВес 0,175 т  |  Объём 0,07 м3',
    price: '5 200 грн/шт',
    img: 'img/plate.png'
  }, {
    id: 3,
    title: 'Лоток Л 20.5 (УБК-2а)',
    descr: 'Д/Ш/В 3080х2060х580 ммВес 0,175 т  |  Объём 0,07 м3',
    price: '5 200 грн/шт',
    img: 'img/plate.png'
  }, {
    id: 4,
    title: 'Лоток Л 20.5 (УБК-2а)',
    descr: 'Д/Ш/В 3080х2060х580 ммВес 0,175 т  |  Объём 0,07 м3',
    price: '5 200 грн/шт',
    img: 'img/plate.png'
  }, {
    id: 4,
    title: 'Лоток Л 20.5 (УБК-2а)',
    descr: 'Д/Ш/В 3080х2060х580 ммВес 0,175 т  |  Объём 0,07 м3',
    price: '5 200 грн/шт',
    img: 'img/plate.png'
  }, {
    id: 5,
    title: 'Лоток Л 20.5 (УБК-2а)',
    descr: 'Д/Ш/В 3080х2060х580 ммВес 0,175 т  |  Объём 0,07 м3',
    price: '5 200 грн/шт',
    img: 'img/plate.png'
  }, {
    id: 5,
    title: 'Лоток Л 20.5 (УБК-2а)',
    descr: 'Д/Ш/В 3080х2060х580 ммВес 0,175 т  |  Объём 0,07 м3',
    price: '5 200 грн/шт',
    img: 'img/plate.png'
  }, {
    id: 5,
    title: 'Лоток Л 20.5 (УБК-2а)',
    descr: 'Д/Ш/В 3080х2060х580 ммВес 0,175 т  |  Объём 0,07 м3',
    price: '5 200 грн/шт',
    img: 'img/plate.png'
  }, {
    id: 5,
    title: 'Лоток Л 20.5 (УБК-2а)',
    descr: 'Д/Ш/В 3080х2060х580 ммВес 0,175 т  |  Объём 0,07 м3',
    price: '5 200 грн/шт',
    img: 'img/plate.png'
  }, {
    id: 5,
    title: 'Лоток Л 20.5 (УБК-2а)',
    descr: 'Д/Ш/В 3080х2060х580 ммВес 0,175 т  |  Объём 0,07 м3',
    price: '5 200 грн/шт',
    img: 'img/plate.png'
  }, {
    id: 6,
    title: 'Лоток Л 20.5 (УБК-2а)',
    descr: 'Д/Ш/В 3080х2060х580 ммВес 0,175 т  |  Объём 0,07 м3',
    price: '5 200 грн/шт',
    img: 'img/plate.png'
  }, {
    id: 6,
    title: 'Лоток Л 20.5 (УБК-2а)',
    descr: 'Д/Ш/В 3080х2060х580 ммВес 0,175 т  |  Объём 0,07 м3',
    price: '5 200 грн/шт',
    img: 'img/plate.png'
  }, {
    id: 6,
    title: 'Лоток Л 20.5 (УБК-2а)',
    descr: 'Д/Ш/В 3080х2060х580 ммВес 0,175 т  |  Объём 0,07 м3',
    price: '5 200 грн/шт',
    img: 'img/plate.png'
  }, {
    id: 7,
    title: 'Лоток Л 20.5 (УБК-2а)',
    descr: 'Д/Ш/В 3080х2060х580 ммВес 0,175 т  |  Объём 0,07 м3',
    price: '5 200 грн/шт',
    img: 'img/plate.png'
  }, {
    id: 7,
    title: 'Лоток Л 20.5 (УБК-2а)',
    descr: 'Д/Ш/В 3080х2060х580 ммВес 0,175 т  |  Объём 0,07 м3',
    price: '5 200 грн/шт',
    img: 'img/plate.png'
  }, {
    id: 7,
    title: 'Лоток Л 20.5 (УБК-2а)',
    descr: 'Д/Ш/В 3080х2060х580 ммВес 0,175 т  |  Объём 0,07 м3',
    price: '5 200 грн/шт',
    img: 'img/plate.png'
  }, {
    id: 7,
    title: 'Лоток Л 20.5 (УБК-2а)',
    descr: 'Д/Ш/В 3080х2060х580 ммВес 0,175 т  |  Объём 0,07 м3',
    price: '5 200 грн/шт',
    img: 'img/plate.png'
  }, {
    id: 7,
    title: 'Лоток Л 20.5 (УБК-2а)',
    descr: 'Д/Ш/В 3080х2060х580 ммВес 0,175 т  |  Объём 0,07 м3',
    price: '5 200 грн/шт',
    img: 'img/plate.png'
  }];
  var catalog1 = catalogGoods.filter(function (item) {
    return item.id === 1;
  });
  var catalog2 = catalogGoods.filter(function (item) {
    return item.id === 2;
  });
  var catalog3 = catalogGoods.filter(function (item) {
    return item.id === 3;
  });
  var catalog4 = catalogGoods.filter(function (item) {
    return item.id === 4;
  });
  var catalog5 = catalogGoods.filter(function (item) {
    return item.id === 5;
  });
  var catalog6 = catalogGoods.filter(function (item) {
    return item.id === 6;
  });
  var catalog7 = catalogGoods.filter(function (item) {
    return item.id === 7;
  });
  goodsNums.forEach(function (elem, i) {
    elem.textContent = catalogGoods.filter(function (item) {
      return item.id === i + 1;
    }).length;
  });
  var products = document.querySelectorAll('.product');
  products.forEach(function (product) {
    product.addEventListener('click', function (event) {
      catalogInner.classList.add('catalog-section__inner--flex');
      catalogInner.innerHTML = "\n                <ul class=\"catalog-section__aside\">\n                    <li class=\"catalog-section__item\"><a data-action=\"catalog1\" class=\"catalog-section__link\">\u0418\u0437\u0434\u0435\u043B\u0438\u044F \u0434\u043B\u044F \u041E\u0420\u0423 \u043F\u043E\u0434\u0441\u0442\u0430\u043D\u0446\u0438\u0439 35-500 \u043A\u0412 <span class=\"product__num\">".concat(catalog1.length, "</span><a/></li>\n                    <li class=\"catalog-section__item\"><a data-action=\"catalog2\" class=\"catalog-section__link\">\u0418\u0437\u0434\u0435\u043B\u0438\u044F \u0434\u043B\u044F \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u044B\u0445 \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0439 <span class=\"product__num\">").concat(catalog2.length, "</span><a/></li>\n                    <li class=\"catalog-section__item\"><a data-action=\"catalog3\" class=\"catalog-section__link\">\u0418\u0437\u0434\u0435\u043B\u0438\u044F \u0434\u043B\u044F \u043A\u043E\u043B\u043E\u0434\u0446\u0435\u0432 \u043A\u0430\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0441\u0435\u0442\u0435\u0439 <span class=\"product__num\">").concat(catalog3.length, "</span><a/></li>\n                    <li class=\"catalog-section__item\"><a data-action=\"catalog4\" class=\"catalog-section__link\">\u0418\u0437\u0434\u0435\u043B\u0438\u044F \u0434\u043B\u044F \u0431\u0430\u043B\u043B\u0430\u0441\u0442\u0438\u0440\u043E\u0432\u043A\u0438 \u043C\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u0442\u0440\u0443\u0431\u043E\u043F\u0440\u043E\u0432\u043E\u0434\u043E\u0432 <span class=\"product__num\">").concat(catalog4.length, "</span><a/></li>\n                    <li class=\"catalog-section__item\"><a data-action=\"catalog5\" class=\"catalog-section__link\">\u0423\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F \u043E\u0442\u043A\u043E\u0441\u043E\u0432 \u0434\u043E\u0440\u043E\u0433, \u0440\u0443\u0441\u0435\u043B \u0438 \u043A\u044E\u0432\u0435\u0442\u043E\u0432 <span class=\"product__num\">").concat(catalog5.length, "</span><a/></li>\n                    <li class=\"catalog-section__item\"><a data-action=\"catalog6\" class=\"catalog-section__link\">\u041A\u0430\u043C\u043D\u0438 \u0431\u0435\u0442\u043E\u043D\u043D\u044B\u0435 \u0438 \u0436\u0435\u043B\u0435\u0437\u043E\u0431\u0435\u0442\u043E\u043D\u043D\u044B\u0435 \u0431\u043E\u0440\u0442\u043E\u0432\u044B\u0435 <span class=\"product__num\">").concat(catalog6.length, "</span><a/></li>\n                    <li class=\"catalog-section__item\"><a data-action=\"catalog7\" class=\"catalog-section__link\">\u041F\u0430\u043D\u0435\u043B\u0438 \u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440\u043E\u0432, \u043B\u043E\u0442\u043A\u0438 <span class=\"product__num\">").concat(catalog7.length, "</span></a></li>\n                </ul>\n            <div class=\"catalog-section__main\"></div>\n            ");
      var catalogSectionMain = document.querySelector('.catalog-section__main');

      if (event.target.dataset.action === 'catalog1') {
        catalog1.forEach(function (item) {
          var element = document.createElement('div');
          element.classList.add('product');
          element.innerHTML = "\n                    <a href=\"#\" class=\"product__link\">\n                        <img class=\"product__img\" src=".concat(item.img, " alt=\"concrete tray l 20.5 (\u0423\u0411\u041A-2\u0410)\">\n                        <h3 class=\"product__title\">").concat(item.title, "</h3>\n                        <p class=\"product__description\">").concat(item.descr, "</p>\n                        <p class=\"product__price\">").concat(item.price, "</p>\n                        <button class=\"btn btn__accent btn__short btn__product btn-reset\">\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button>\n                    </a>\n                    ");
          catalogSectionMain.append(element);
        });
      }

      if (event.target.dataset.action === 'catalog2') {
        catalog2.forEach(function (item) {
          var element = document.createElement('div');
          element.classList.add('product');
          element.innerHTML = "\n                    <a href=\"#\" class=\"product__link\">\n                        <img class=\"product__img\" src=".concat(item.img, " alt=\"concrete tray l 20.5 (\u0423\u0411\u041A-2\u0410)\">\n                        <h3 class=\"product__title\">").concat(item.title, "</h3>\n                        <p class=\"product__description\">").concat(item.descr, "</p>\n                        <p class=\"product__price\">").concat(item.price, "</p>\n                        <button class=\"btn btn__accent btn__short btn__product btn-reset\">\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button>\n                    </a>\n                    ");
          catalogSectionMain.append(element);
        });
      }

      if (event.target.dataset.action === 'catalog3') {
        catalog3.forEach(function (item) {
          var element = document.createElement('div');
          element.classList.add('product');
          element.innerHTML = "\n                    <a href=\"#\" class=\"product__link\">\n                        <img class=\"product__img\" src=".concat(item.img, " alt=\"concrete tray l 20.5 (\u0423\u0411\u041A-2\u0410)\">\n                        <h3 class=\"product__title\">").concat(item.title, "</h3>\n                        <p class=\"product__description\">").concat(item.descr, "</p>\n                        <p class=\"product__price\">").concat(item.price, "</p>\n                        <button class=\"btn btn__accent btn__short btn__product btn-reset\">\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button>\n                    </a>\n                    ");
          catalogSectionMain.append(element);
        });
      }

      if (event.target.dataset.action === 'catalog4') {
        catalog4.forEach(function (item) {
          var element = document.createElement('div');
          element.classList.add('product');
          element.innerHTML = "\n                    <a href=\"#\" class=\"product__link\">\n                        <img class=\"product__img\" src=".concat(item.img, " alt=\"concrete tray l 20.5 (\u0423\u0411\u041A-2\u0410)\">\n                        <h3 class=\"product__title\">").concat(item.title, "</h3>\n                        <p class=\"product__description\">").concat(item.descr, "</p>\n                        <p class=\"product__price\">").concat(item.price, "</p>\n                        <button class=\"btn btn__accent btn__short btn__product btn-reset\">\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button>\n                    </a>\n                    ");
          catalogSectionMain.append(element);
        });
      }

      if (event.target.dataset.action === 'catalog5') {
        catalog5.forEach(function (item) {
          var element = document.createElement('div');
          element.classList.add('product');
          element.innerHTML = "\n                    <a href=\"#\" class=\"product__link\">\n                        <img class=\"product__img\" src=".concat(item.img, " alt=\"concrete tray l 20.5 (\u0423\u0411\u041A-2\u0410)\">\n                        <h3 class=\"product__title\">").concat(item.title, "</h3>\n                        <p class=\"product__description\">").concat(item.descr, "</p>\n                        <p class=\"product__price\">").concat(item.price, "</p>\n                        <button class=\"btn btn__accent btn__short btn__product btn-reset\">\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button>\n                    </a>\n                    ");
          catalogSectionMain.append(element);
        });
      }

      if (event.target.dataset.action === 'catalog6') {
        catalog6.forEach(function (item) {
          var element = document.createElement('div');
          element.classList.add('product');
          element.innerHTML = "\n                    <a href=\"#\" class=\"product__link\">\n                        <img class=\"product__img\" src=".concat(item.img, " alt=\"concrete tray l 20.5 (\u0423\u0411\u041A-2\u0410)\">\n                        <h3 class=\"product__title\">").concat(item.title, "</h3>\n                        <p class=\"product__description\">").concat(item.descr, "</p>\n                        <p class=\"product__price\">").concat(item.price, "</p>\n                        <button class=\"btn btn__accent btn__short btn__product btn-reset\">\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button>\n                    </a>\n                    ");
          catalogSectionMain.append(element);
        });
      }

      if (event.target.dataset.action === 'catalog7') {
        catalog7.forEach(function (item) {
          var element = document.createElement('div');
          element.classList.add('product');
          element.innerHTML = "\n                    <a href=\"#\" class=\"product__link\">\n                        <img class=\"product__img\" src=".concat(item.img, " alt=\"concrete tray l 20.5 (\u0423\u0411\u041A-2\u0410)\">\n                        <h3 class=\"product__title\">").concat(item.title, "</h3>\n                        <p class=\"product__description\">").concat(item.descr, "</p>\n                        <p class=\"product__price\">").concat(item.price, "</p>\n                        <button class=\"btn btn__accent btn__short btn__product btn-reset\">\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button>\n                    </a>\n                    ");
          catalogSectionMain.append(element);
        });
      }

      var catalogSectionLink = document.querySelectorAll('.catalog-section__link');
      catalogSectionLink.forEach(function (item) {
        item.addEventListener('click', function (e) {
          if (e.target.dataset.action === 'catalog1') {
            catalogSectionMain.innerHTML = '';
            catalog1.forEach(function (item) {
              var element = document.createElement('div');
              element.classList.add('product');
              element.innerHTML = "\n                            <a href=\"#\" class=\"product__link\">\n                                <img class=\"product__img\" src=".concat(item.img, " alt=\"concrete tray l 20.5 (\u0423\u0411\u041A-2\u0410)\">\n                                <h3 class=\"product__title\">").concat(item.title, "</h3>\n                                <p class=\"product__description\">").concat(item.descr, "</p>\n                                <p class=\"product__price\">").concat(item.price, "</p>\n                                <button class=\"btn btn__accent btn__short btn__product btn-reset\">\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button>\n                            </a>\n                            ");
              catalogSectionMain.append(element);
            });
          }

          if (e.target.dataset.action === 'catalog2') {
            catalogSectionMain.innerHTML = '';
            catalog2.forEach(function (item) {
              var element = document.createElement('div');
              element.classList.add('product');
              element.innerHTML = "\n                            <a href=\"#\" class=\"product__link\">\n                                <img class=\"product__img\" src=".concat(item.img, " alt=\"concrete tray l 20.5 (\u0423\u0411\u041A-2\u0410)\">\n                                <h3 class=\"product__title\">").concat(item.title, "</h3>\n                                <p class=\"product__description\">").concat(item.descr, "</p>\n                                <p class=\"product__price\">").concat(item.price, "</p>\n                                <button class=\"btn btn__accent btn__short btn__product btn-reset\">\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button>\n                            </a>\n                            ");
              catalogSectionMain.append(element);
            });
          }

          if (e.target.dataset.action === 'catalog3') {
            catalogSectionMain.innerHTML = '';
            catalog3.forEach(function (item) {
              var element = document.createElement('div');
              element.classList.add('product');
              element.innerHTML = "\n                            <a href=\"#\" class=\"product__link\">\n                                <img class=\"product__img\" src=".concat(item.img, " alt=\"concrete tray l 20.5 (\u0423\u0411\u041A-2\u0410)\">\n                                <h3 class=\"product__title\">").concat(item.title, "</h3>\n                                <p class=\"product__description\">").concat(item.descr, "</p>\n                                <p class=\"product__price\">").concat(item.price, "</p>\n                                <button class=\"btn btn__accent btn__short btn__product btn-reset\">\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button>\n                            </a>\n                            ");
              catalogSectionMain.append(element);
            });
          }

          if (e.target.dataset.action === 'catalog4') {
            catalogSectionMain.innerHTML = '';
            catalog4.forEach(function (item) {
              var element = document.createElement('div');
              element.classList.add('product');
              element.innerHTML = "\n                            <a href=\"#\" class=\"product__link\">\n                                <img class=\"product__img\" src=".concat(item.img, " alt=\"concrete tray l 20.5 (\u0423\u0411\u041A-2\u0410)\">\n                                <h3 class=\"product__title\">").concat(item.title, "</h3>\n                                <p class=\"product__description\">").concat(item.descr, "</p>\n                                <p class=\"product__price\">").concat(item.price, "</p>\n                                <button class=\"btn btn__accent btn__short btn__product btn-reset\">\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button>\n                            </a>\n                            ");
              catalogSectionMain.append(element);
            });
          }

          if (e.target.dataset.action === 'catalog5') {
            catalogSectionMain.innerHTML = '';
            catalog5.forEach(function (item) {
              var element = document.createElement('div');
              element.classList.add('product');
              element.innerHTML = "\n                            <a href=\"#\" class=\"product__link\">\n                                <img class=\"product__img\" src=".concat(item.img, " alt=\"concrete tray l 20.5 (\u0423\u0411\u041A-2\u0410)\">\n                                <h3 class=\"product__title\">").concat(item.title, "</h3>\n                                <p class=\"product__description\">").concat(item.descr, "</p>\n                                <p class=\"product__price\">").concat(item.price, "</p>\n                                <button class=\"btn btn__accent btn__short btn__product btn-reset\">\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button>\n                            </a>\n                            ");
              catalogSectionMain.append(element);
            });
          }

          if (e.target.dataset.action === 'catalog6') {
            catalogSectionMain.innerHTML = '';
            catalog6.forEach(function (item) {
              var element = document.createElement('div');
              element.classList.add('product');
              element.innerHTML = "\n                            <a href=\"#\" class=\"product__link\">\n                                <img class=\"product__img\" src=".concat(item.img, " alt=\"concrete tray l 20.5 (\u0423\u0411\u041A-2\u0410)\">\n                                <h3 class=\"product__title\">").concat(item.title, "</h3>\n                                <p class=\"product__description\">").concat(item.descr, "</p>\n                                <p class=\"product__price\">").concat(item.price, "</p>\n                                <button class=\"btn btn__accent btn__short btn__product btn-reset\">\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button>\n                            </a>\n                            ");
              catalogSectionMain.append(element);
            });
          }

          if (e.target.dataset.action === 'catalog7') {
            catalogSectionMain.innerHTML = '';
            catalog7.forEach(function (item) {
              var element = document.createElement('div');
              element.classList.add('product');
              element.innerHTML = "\n                            <a href=\"#\" class=\"product__link\">\n                                <img class=\"product__img\" src=".concat(item.img, " alt=\"concrete tray l 20.5 (\u0423\u0411\u041A-2\u0410)\">\n                                <h3 class=\"product__title\">").concat(item.title, "</h3>\n                                <p class=\"product__description\">").concat(item.descr, "</p>\n                                <p class=\"product__price\">").concat(item.price, "</p>\n                                <button class=\"btn btn__accent btn__short btn__product btn-reset\">\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button>\n                            </a>\n                            ");
              catalogSectionMain.append(element);
            });
          }
        });
      });
    });
  });
}

/***/ }),

/***/ "./src/js/components/_modals.js":
/*!**************************************!*\
  !*** ./src/js/components/_modals.js ***!
  \**************************************/
/***/ (() => {

//Modal main page
var detailed = document.querySelectorAll('.detailed');
var newsSection = document.querySelector('.news-section');
var newsSectionTitle = document.querySelectorAll('.news-section__title');
var newsSectionImg = document.querySelectorAll('.news-section__img');
var modalText = ['Армирование конструкций выполняется, как правило, отдельными стальными стержнями или сетками, каркасами. Диаметр стержней и характер их расположения определяется расчётами. При этом соблюдается следующий принцип — арматура устанавливается в растянутые зоны бетона либо в сжатые зоны при недостаточной прочности последней, а также по конструктивным соображениям. При расчёте железобетонных изгибаемых элементов основной целью является определение требуемой площади рабочей арматуры в соответствии с заданными усилиями (прямая задача) или определение действительной несущей способности элемента по заданным геометрическим и прочностным параметрам (обратная задача).', 'Наш завод ЖБИ основан в 2015 году В самом начале мы научились продавать и организовывать логистику для потребителей железобетонных изделий. Затем мы пошли дальше. Что бы ни утонуть в современном, быстроменяющемся рынке ЖБИ изделий, где вытесняются посредники государственными структурами и пожеланиями потребителей, коллективом ООО «ЗДСК» принято решение, об организации производства ЖБИ изделий.', 'Недостатком заводского способа изготовления является невозможность выпускать широкий ассортимент конструкций. Особенно это относится к разнообразию форм изготавливаемых конструкций, которые ограничиваются типовыми опалубками. Фактически на заводах ЖБИ изготавливаются только конструкции, требующие массового применения. В свете этого обстоятельства, широкое внедрение технологии сборного железобетона приводит к появлению большого количества однотипных зданий, что, в свою очередь, приводит к уменьшению затрат на строительство. Такое явление наблюдалось в СССР в период массового строительства.', 'Сущность сборных железобетонной конструкций, против монолитных, состоит в том, что конструкции изготавливаются на заводах ЖБИ (железобетонных изделий), а затем доставляются на стройплощадку и монтируются в проектное положение. Основное преимущество технологии сборного железобетона в том, что ключевые технологические процессы происходят на заводе. Это позволяет достичь высоких показателей по срокам изготовления и качеству конструкций. Кроме того, изготовление предварительно напряжённых ЖБК возможно, как правило, только в заводских условиях.', 'Армирование конструкций выполняется, как правило, отдельными стальными стержнями или сетками, каркасами. Диаметр стержней и характер их расположения определяется расчётами. При этом соблюдается следующий принцип — арматура устанавливается в растянутые зоны бетона либо в сжатые зоны при недостаточной прочности последней, а также по конструктивным соображениям. При расчёте железобетонных изгибаемых элементов основной целью является определение требуемой площади рабочей арматуры в соответствии с заданными усилиями (прямая задача) или определение действительной несущей способности элемента по заданным геометрическим и прочностным параметрам (обратная задача).', 'Наш завод ЖБИ основан в 2015 году В самом начале мы научились продавать и организовывать логистику для потребителей железобетонных изделий. Затем мы пошли дальше. Что бы ни утонуть в современном, быстроменяющемся рынке ЖБИ изделий, где вытесняются посредники государственными структурами и пожеланиями потребителей, коллективом ООО «ЗДСК» принято решение, об организации производства ЖБИ изделий.', 'Недостатком заводского способа изготовления является невозможность выпускать широкий ассортимент конструкций. Особенно это относится к разнообразию форм изготавливаемых конструкций, которые ограничиваются типовыми опалубками. Фактически на заводах ЖБИ изготавливаются только конструкции, требующие массового применения. В свете этого обстоятельства, широкое внедрение технологии сборного железобетона приводит к появлению большого количества однотипных зданий, что, в свою очередь, приводит к уменьшению затрат на строительство. Такое явление наблюдалось в СССР в период массового строительства.', 'Сущность сборных железобетонной конструкций, против монолитных, состоит в том, что конструкции изготавливаются на заводах ЖБИ (железобетонных изделий), а затем доставляются на стройплощадку и монтируются в проектное положение. Основное преимущество технологии сборного железобетона в том, что ключевые технологические процессы происходят на заводе. Это позволяет достичь высоких показателей по срокам изготовления и качеству конструкций. Кроме того, изготовление предварительно напряжённых ЖБК возможно, как правило, только в заводских условиях.', 'Армирование конструкций выполняется, как правило, отдельными стальными стержнями или сетками, каркасами. Диаметр стержней и характер их расположения определяется расчётами. При этом соблюдается следующий принцип — арматура устанавливается в растянутые зоны бетона либо в сжатые зоны при недостаточной прочности последней, а также по конструктивным соображениям. При расчёте железобетонных изгибаемых элементов основной целью является определение требуемой площади рабочей арматуры в соответствии с заданными усилиями (прямая задача) или определение действительной несущей способности элемента по заданным геометрическим и прочностным параметрам (обратная задача).', 'Наш завод ЖБИ основан в 2015 году В самом начале мы научились продавать и организовывать логистику для потребителей железобетонных изделий. Затем мы пошли дальше. Что бы ни утонуть в современном, быстроменяющемся рынке ЖБИ изделий, где вытесняются посредники государственными структурами и пожеланиями потребителей, коллективом ООО «ЗДСК» принято решение, об организации производства ЖБИ изделий.', 'Недостатком заводского способа изготовления является невозможность выпускать широкий ассортимент конструкций. Особенно это относится к разнообразию форм изготавливаемых конструкций, которые ограничиваются типовыми опалубками. Фактически на заводах ЖБИ изготавливаются только конструкции, требующие массового применения. В свете этого обстоятельства, широкое внедрение технологии сборного железобетона приводит к появлению большого количества однотипных зданий, что, в свою очередь, приводит к уменьшению затрат на строительство. Такое явление наблюдалось в СССР в период массового строительства.', 'Сущность сборных железобетонной конструкций, против монолитных, состоит в том, что конструкции изготавливаются на заводах ЖБИ (железобетонных изделий), а затем доставляются на стройплощадку и монтируются в проектное положение. Основное преимущество технологии сборного железобетона в том, что ключевые технологические процессы происходят на заводе. Это позволяет достичь высоких показателей по срокам изготовления и качеству конструкций. Кроме того, изготовление предварительно напряжённых ЖБК возможно, как правило, только в заводских условиях.'];
detailed.forEach(function (item, index) {
  item.addEventListener('click', function () {
    console.log('click');
    var element = document.createElement('div');
    element.classList.add('modal');
    element.innerHTML = "\n             <div class=\"modal__dialog\">\n                 <div class=\"modal__content\">\n                     <h4 class=\"modal__title\">".concat(newsSectionTitle[index].textContent, "</h4>\n                     <img class=\"modal__img\" src=\"").concat(newsSectionImg[index].src, "\" alt=\"\">\n                     <p class=\"modal__text\">").concat(modalText[index], "</p>\n                     <button class=\"btn-reset modal__closebtn\">\n                         <svg class=\"modal__close\">\n                             <use xlink:href=\"#modal__close\">\n                         </svg>\n                     </button>\n                 </div\n             </div>\n         ");
    newsSection.append(element);
    document.body.style.overflow = 'hidden';
    var closeBtn = document.querySelector('.modal__closebtn');
    closeBtn.addEventListener('click', function () {
      element.remove();
      document.body.style.overflow = '';
    });
  });
}); //Modal about production page

var aboutProd = document.querySelector('.about-production');
var detailed1 = document.querySelectorAll('.detailed1');
var aboutProdTitle = document.querySelectorAll('.about-production__title');
var aboutProdImg = document.querySelectorAll('.about-production__img');
detailed1.forEach(function (item, index) {
  item.addEventListener('click', function () {
    console.log('click');
    var element = document.createElement('div');
    element.classList.add('modal');
    element.innerHTML = "\n             <div class=\"modal__dialog\">\n                 <div class=\"modal__content\">\n                     <h4 class=\"modal__title\">".concat(aboutProdTitle[index].textContent, "</h4>\n                     <img class=\"modal__img\" src=\"").concat(aboutProdImg[index].src, "\" alt=\"\">\n                     <p class=\"modal__text\">").concat(modalText[index], "</p>\n                     <button class=\"btn-reset modal__closebtn\">\n                         <svg class=\"modal__close\">\n                             <use xlink:href=\"#modal__close\">\n                         </svg>\n                     </button>\n                 </div\n             </div>\n         ");
    aboutProd.append(element);
    document.body.style.overflow = 'hidden';
    var closeBtn = document.querySelector('.modal__closebtn');
    closeBtn.addEventListener('click', function () {
      element.remove();
      document.body.style.overflow = '';
    });
  });
});

/***/ }),

/***/ "./src/js/components/_show-more.js":
/*!*****************************************!*\
  !*** ./src/js/components/_show-more.js ***!
  \*****************************************/
/***/ (() => {

//Show more (news section)
var showMoreBtns = document.querySelectorAll('.news-section__btn--show-more');
var showMoreNews = document.querySelectorAll('.news-section__item--more');
var newsSectionList = document.querySelector('.news-section__list--page');
showMoreBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    btn.classList.add('hidden');
    showMoreNews.forEach(function (item) {
      item.classList.toggle('hidden');
    });
    var showLessBtn = document.createElement('button');
    showLessBtn.classList.add('btn', 'btn__accent', 'btn-reset', 'btn__wide', 'news-section__btn');
    showLessBtn.textContent = 'Показать меньше';
    newsSectionList.append(showLessBtn);
    showLessBtn.addEventListener('click', function () {
      showLessBtn.remove();
      showMoreNews.forEach(function (item) {
        item.classList.toggle('hidden');
      });
      btn.classList.remove('hidden');
    });
  });
});

/***/ }),

/***/ "./src/js/components/_sliders.js":
/*!***************************************!*\
  !*** ./src/js/components/_sliders.js ***!
  \***************************************/
/***/ (() => {

//Stock slider
var swiper = new Swiper(".swiper-stock-preview", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 7,
  freeMode: true,
  watchSlidesProgress: true
});
var swiper2 = new Swiper(".swiper-stock-main", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  thumbs: {
    swiper: swiper
  }
});

/***/ }),

/***/ "./src/js/components/_vacancy.js":
/*!***************************************!*\
  !*** ./src/js/components/_vacancy.js ***!
  \***************************************/
/***/ (() => {

var location = String(window.location.href).split('/');

if (location[location.length - 1] === 'vacancies.html') {
  window.addEventListener('click', function (e) {
    if (e.target.dataset.action === 'offer') {
      var vacanciesParant = document.querySelector('.vacancies');
      var vacanciesItem = e.target.closest('.vacancies__item');
      var vacanciesTitle = vacanciesItem.querySelector('.vacancies__title').textContent;
      var vacanciesDescr = vacanciesItem.querySelector('.vacancies__descr').textContent;
      var vacanciesSalary = vacanciesItem.querySelector('.vacancies__salary').textContent;
      var vacanciesRequirements = vacanciesItem.querySelector('.vacancies__requir').textContent.split('/');
      var element = document.createElement('div');
      element.classList.add('modal');
      element.innerHTML = "\n                <div class=\"modal__dialog\">\n                <div class=\"modal__content modal__content--vacancies\">\n                    <h3 class=\"vacancies__title vacancies__title--modal\">".concat(vacanciesTitle, "</h3>\n                    <p class=\"vacancies__descr vacancies__descr--modal\">").concat(vacanciesDescr, "</p>\n                    <h4 class=\"vacancies__requirements\">\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F:</h4>\n                    <ul class=\"purchases__list vacancies__reqs\"></ul>\n                    <p class=\"vacancies__salary\">").concat(vacanciesSalary, "</p>\n                    <button class=\"btn-reset modal__closebtn\">\n                        <svg class=\"modal__close\">\n                            <use xlink:href=\"#modal__close\">\n                        </svg>\n                    </button>\n                </div\n            </div>\n            ");
      vacanciesParant.append(element);
      var modalContent = document.querySelector('.modal__content--vacancies');
      var modalList = modalContent.querySelector('.vacancies__reqs');
      vacanciesRequirements.forEach(function (item) {
        var el = document.createElement('li');
        el.classList.add('purchases__item', 'vacancies__requirment');
        el.textContent = item;
        modalList.append(el);
      });
      document.body.style.overflow = 'hidden';
      var closeBtn = document.querySelector('.modal__closebtn');
      closeBtn.addEventListener('click', function () {
        element.remove();
        document.body.style.overflow = '';
      });
    }
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vars__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");



})();

/******/ })()
;
//# sourceMappingURL=main.js.map