/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ (() => {

window.addEventListener('DOMContentLoaded', function () {
  var burgerBtn = document.querySelector('.burger-menu');
  var navMobile = document.querySelector('.nav-mobile');
  var navMobileLink = document.querySelectorAll('.nav-mobile__link');
  burgerBtn.addEventListener('click', function () {
    burgerBtn.classList.toggle('burger-menu--active');
    navMobile.classList.toggle('nav-mobile--active');
  });
  navMobileLink.forEach(function (item) {
    item.addEventListener('click', function (e) {
      burgerBtn.classList.remove('burger-menu--active');
      navMobile.classList.remove('nav-mobile--active');
    });
  }); //Modal main page

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
      element.innerHTML = "\n                <div class=\"modal__dialog\">\n                    <div class=\"modal__content\">\n                        <h4 class=\"modal__title\">".concat(newsSectionTitle[index].textContent, "</h4>\n                        <img class=\"modal__img\" src=\"").concat(newsSectionImg[index].src, "\" alt=\"\">\n                        <p class=\"modal__text\">").concat(modalText[index], "</p>\n                        <button class=\"btn-reset modal__closebtn\">\n                            <svg class=\"modal__close\">\n                                <use xlink:href=\"#modal__close\">\n                            </svg>\n                        </button>\n                    </div\n                </div>\n            ");
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
      element.innerHTML = "\n                <div class=\"modal__dialog\">\n                    <div class=\"modal__content\">\n                        <h4 class=\"modal__title\">".concat(aboutProdTitle[index].textContent, "</h4>\n                        <img class=\"modal__img\" src=\"").concat(aboutProdImg[index].src, "\" alt=\"\">\n                        <p class=\"modal__text\">").concat(modalText[index], "</p>\n                        <button class=\"btn-reset modal__closebtn\">\n                            <svg class=\"modal__close\">\n                                <use xlink:href=\"#modal__close\">\n                            </svg>\n                        </button>\n                    </div\n                </div>\n            ");
      aboutProd.append(element);
      document.body.style.overflow = 'hidden';
      var closeBtn = document.querySelector('.modal__closebtn');
      closeBtn.addEventListener('click', function () {
        element.remove();
        document.body.style.overflow = '';
      });
    });
  }); //Stock slider

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
  }); //Show more (news section)

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
  }); // Vacancies

  var vacancies = [{
    title: 'Интернет-маркетолог, Директолог',
    requirmants: 'Среднее образование и стаж работы 1-3 года Полный рабочий деньПолная занятость',
    salary: 'от 40.000 Р'
  }, {
    title: 'СЕО специалист',
    requirmants: 'Неполное среднее образование и без опыта Полный рабочий день Полная занятость',
    salary: '60.000 — 120.000 Р'
  }, {
    title: 'PHP-программист Yii2',
    requirmants: 'Компания ЗДСК ищет в команду yii2 разработчика для работы в команде разработки сайтов, CRM, API, личных кабинетов',
    salary: 'от 40 000 Р'
  }, {
    title: 'Копирайтер',
    requirmants: 'Пишешь красивые статьи? Хочешь, чтобы их публиковали в СМИ и в других интернет порталах?  Тогда присылай свое резюме нам на почту',
    salary: '60.000 — 120.000 Р'
  }]; // vacancies.forEach((item) => {
  //     const elem = document.createElement('div');
  //     elem.classList.add('vacancies__item');
  //     elem.innerHTML = `
  //     <h3 class="vacancies__title">${item.title}</h3>
  //     <p class="vacancies__text">${item.requirmants}</p>
  //     <span class="vacancies__salary">${item.salary}</span>
  //     <button class="btn-reset btn btn__accent btn__short">Подробнее</button>
  //     `;
  //     document.querySelector('.vacancies__list').append(elem);
  //     document.querySelector('.vacancies').classList.add('background');
  // });
});

/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/focus-visible.js */ "./src/js/vendor/focus-visible.js");
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/js/vendor/focus-visible.js":
/*!****************************************!*\
  !*** ./src/js/vendor/focus-visible.js ***!
  \****************************************/
/***/ (() => {

/**
 * Applies the :focus-visible polyfill at the given scope.
 * A scope in this case is either the top-level Document or a Shadow Root.
 *
 * @param {(Document|ShadowRoot)} scope
 * @see https://github.com/WICG/focus-visible
 */
function applyFocusVisiblePolyfill(scope) {
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesAllowlist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };
  /**
   * Helper function for legacy browsers and iframes which sometimes focus
   * elements like document, body, and non-interactive SVG.
   * @param {Element} el
   */

  function isValidFocusTarget(el) {
    if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
      return true;
    }

    return false;
  }
  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} el
   * @return {boolean}
   */


  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;

    if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
      return true;
    }

    if (tagName === 'TEXTAREA' && !el.readOnly) {
      return true;
    }

    if (el.isContentEditable) {
      return true;
    }

    return false;
  }
  /**
   * Add the `focus-visible` class to the given element if it was not added by
   * the author.
   * @param {Element} el
   */


  function addFocusVisibleClass(el) {
    if (el.classList.contains('focus-visible')) {
      return;
    }

    el.classList.add('focus-visible');
    el.setAttribute('data-focus-visible-added', '');
  }
  /**
   * Remove the `focus-visible` class from the given element if it was not
   * originally added by the author.
   * @param {Element} el
   */


  function removeFocusVisibleClass(el) {
    if (!el.hasAttribute('data-focus-visible-added')) {
      return;
    }

    el.classList.remove('focus-visible');
    el.removeAttribute('data-focus-visible-added');
  }
  /**
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * Apply `focus-visible` to any current active element and keep track
   * of our keyboard modality state with `hadKeyboardEvent`.
   * @param {KeyboardEvent} e
   */


  function onKeyDown(e) {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return;
    }

    if (isValidFocusTarget(scope.activeElement)) {
      addFocusVisibleClass(scope.activeElement);
    }

    hadKeyboardEvent = true;
  }
  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   * @param {Event} e
   */


  function onPointerDown(e) {
    hadKeyboardEvent = false;
  }
  /**
   * On `focus`, add the `focus-visible` class to the target if:
   * - the target received focus as a result of keyboard navigation, or
   * - the event target is an element that will likely require interaction
   *   via the keyboard (e.g. a text box)
   * @param {Event} e
   */


  function onFocus(e) {
    // Prevent IE from focusing the document or HTML element.
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleClass(e.target);
    }
  }
  /**
   * On `blur`, remove the `focus-visible` class from the target.
   * @param {Event} e
   */


  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
      }, 100);
      removeFocusVisibleClass(e.target);
    }
  }
  /**
   * If the user changes tabs, keep track of whether or not the previously
   * focused element had .focus-visible.
   * @param {Event} e
   */


  function onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }

      addInitialPointerMoveListeners();
    }
  }
  /**
   * Add a group of listeners to detect usage of any pointing devices.
   * These listeners will be added when the polyfill first loads, and anytime
   * the window is blurred, so that they are active when the window regains
   * focus.
   */


  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }

  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }
  /**
   * When the polfyill first loads, assume the user is in keyboard modality.
   * If any event is received from a pointing device (e.g. mouse, pointer,
   * touch), turn off keyboard modality.
   * This accounts for situations where focus enters the page from the URL bar.
   * @param {Event} e
   */


  function onInitialPointerMove(e) {
    // Work around a Safari quirk that fires a mousemove on <html> whenever the
    // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
    if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
      return;
    }

    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  } // For some kinds of state, we are interested in changes at the global scope
  // only. For example, global pointer input, global key presses and global
  // visibility change should affect the state at every scope:


  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);
  addInitialPointerMoveListeners(); // For focus and blur, we specifically care about state changes in the local
  // scope. This is because focus / blur events that originate from within a
  // shadow root are not re-dispatched from the host element if it was already
  // the active element in its own scope:

  scope.addEventListener('focus', onFocus, true);
  scope.addEventListener('blur', onBlur, true); // We detect that a node is a ShadowRoot by ensuring that it is a
  // DocumentFragment and also has a host property. This check covers native
  // implementation and polyfill implementation transparently. If we only cared
  // about the native implementation, we could just check if the scope was
  // an instance of a ShadowRoot.

  if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
    // Since a ShadowRoot is a special kind of DocumentFragment, it does not
    // have a root element to add a class to. So, we add this attribute to the
    // host element instead:
    scope.host.setAttribute('data-js-focus-visible', '');
  } else if (scope.nodeType === Node.DOCUMENT_NODE) {
    document.documentElement.classList.add('js-focus-visible');
    document.documentElement.setAttribute('data-js-focus-visible', '');
  }
} // It is important to wrap all references to global window and document in
// these checks to support server-side rendering use cases
// @see https://github.com/WICG/focus-visible/issues/199


if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // Make the polyfill helper globally available. This can be used as a signal
  // to interested libraries that wish to coordinate with the polyfill for e.g.,
  // applying the polyfill to a shadow root:
  window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill; // Notify interested libraries of the polyfill's presence, in case the
  // polyfill was loaded lazily:

  var event;

  try {
    event = new CustomEvent('focus-visible-polyfill-ready');
  } catch (error) {
    // IE11 does not support using CustomEvent as a constructor directly:
    event = document.createEvent('CustomEvent');
    event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
  }

  window.dispatchEvent(event);
}

if (typeof document !== 'undefined') {
  // Apply the polyfill to the global document, so that no JavaScript
  // coordination is required to use the polyfill in the top-level document:
  applyFocusVisiblePolyfill(document);
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_1__);


})();

/******/ })()
;
//# sourceMappingURL=main.js.map