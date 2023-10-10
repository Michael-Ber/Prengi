/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/adaptation.js":
/*!**************************************!*\
  !*** ./src/js/modules/adaptation.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function adaptation({
  barSelector,
  parentSelector
}) {
  //Адаптация first__bar 
  const bar = document.querySelector(barSelector),
    parentBar = document.querySelector(parentSelector),
    barRightValue = +window.getComputedStyle(bar).width.slice(0, -2),
    mobileWidth = 320;
  bar.style.right = `${barRightValue + (getStyleWidth(parentBar) - mobileWidth) / 2}px`;
  if (window.matchMedia('(max-width: 576px)').matches) {
    window.addEventListener('resize', () => {
      const parentWidth = getStyleWidth(parentBar);
      bar.style.right = `${barRightValue + (parentWidth - mobileWidth) / 2}px`;
    });
  } else if (window.matchMedia('(max-width: 768px)').matches) {
    bar.style.right = `200px`;
  } else if (window.matchMedia('(max-width: 992px)').matches) {
    bar.style.right = `156px`;
  } else if (window.matchMedia('(max-width: 1200px)').matches) {
    bar.style.right = `50px`;
    console.log('here');
  } else {
    bar.style.right = 0;
  }
  function getStyleWidth(element) {
    return +window.getComputedStyle(element).width.slice(0, -2);
  }
}
/* harmony default export */ __webpack_exports__["default"] = (adaptation);

/***/ }),

/***/ "./src/js/modules/carousel.js":
/*!************************************!*\
  !*** ./src/js/modules/carousel.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function carousel({
  trackWrapper,
  slideSelector,
  wrapperSelector,
  prevArrow,
  nextArrow
}) {
  //Carousel

  window.addEventListener('resize', () => {
    callSlider();
  });
  function callSlider() {
    const track = document.querySelector(trackWrapper),
      slides = document.querySelectorAll(slideSelector),
      wrapper = document.querySelector(wrapperSelector),
      width = +window.getComputedStyle(wrapper).width.slice(0, -2),
      btnNext = document.querySelector(nextArrow),
      btnPrev = document.querySelector(prevArrow);
    track.style.width = 100 * slides.length + '%';
    slides.forEach(slide => {
      slide.style.width = `${width}px`;
    });
    let offset = 0;
    track.style.transform = `translateX(${offset}px)`;
    btnNext.addEventListener('click', () => moveNext(track));
    btnPrev.addEventListener('click', () => movePrev(track));
    function moveNext(element) {
      if (offset >= (slides.length - 1) * width) {
        offset = 0;
      } else {
        offset += width;
      }
      element.style.transform = `translateX(-${offset}px)`;
    }
    function movePrev(element) {
      if (offset <= 0) {
        offset = (slides.length - 1) * width;
      } else {
        offset -= width;
      }
      element.style.transform = `translateX(-${offset}px)`;
    }

    //Взаимодействие со слайдером при помощи мыши или касания пальцем
    let moving = false,
      initX,
      currentX,
      diffDist,
      threshold = 100;
    const carousel = document.querySelector('.third__carousel');

    // document.addEventListener('mousedown', swipeStart);
    carousel.addEventListener('touchstart', swipeStart, {
      passive: false
    });

    // document.addEventListener('mousemove', swipeAction);
    carousel.addEventListener('touchmove', swipeAction, {
      passive: false
    });

    // document.addEventListener('mouseup', swipeEnd);
    carousel.addEventListener('touchend', swipeEnd);
    function swipeStart(e) {
      e.preventDefault();
      initX = e.touches[0].clientX;
      moving = true;
    }
    function swipeAction(e) {
      e.preventDefault();
      if (moving) {
        currentX = e.touches[0].clientX;
        diffDist = currentX - initX;
        track.style.transform = `translateX(${diffDist - offset}px)`;
        if (diffDist < -threshold) {
          moveNext(track);
          moving = false;
        } else if (diffDist > threshold) {
          movePrev(track);
          moving = false;
        }
      }
    }
    function swipeEnd() {
      moving = false;
      track.style.transform = `translateX(${-offset}px)`;
    }
  }
  callSlider();
}
/* harmony default export */ __webpack_exports__["default"] = (carousel);

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");
/* harmony import */ var _services_postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/postData */ "./src/js/services/postData.js");


function form({
  modalSelector,
  formSelector
}) {
  // Работа с формой

  const form = document.querySelector(formSelector);
  const message = {
    "success": "Спасибо, скоро мы с вами свяжемся",
    "loading": 'icons/form/spinner1.gif',
    "failure": "Что-то пошло не так"
  };
  function showThanksModal(message) {
    const prevWindow = document.querySelector('.modal__wrapper');
    Object(_modal__WEBPACK_IMPORTED_MODULE_0__["hideModal"])(prevWindow);
    let newWindow = document.createElement('div');
    newWindow.classList.add('modal__wrapper');
    newWindow.innerHTML = `
              <div data-close class="modal__close">&times;</div>
              <div class="modal__title">${message}</div>
          `;
    document.querySelector(modalSelector).append(newWindow);
    setTimeout(() => {
      newWindow.remove();
      Object(_modal__WEBPACK_IMPORTED_MODULE_0__["hideModal"])(document.querySelector(modalSelector));
      Object(_modal__WEBPACK_IMPORTED_MODULE_0__["showModal"])(prevWindow);
    }, 5000);
  }
  function bindPostData(formName, message) {
    formName.addEventListener('submit', e => {
      e.preventDefault();
      const spinner = document.createElement('img');
      spinner.src = message.loading;
      spinner.style.cssText = `
                      display: block;
                      margin: 10px auto 0 auto;	
                      max-width: 20px;
              `;
      form.insertAdjacentElement("afterend", spinner);
      const formData = new FormData(formName);
      let json = JSON.stringify(Object.fromEntries(formData.entries()));
      Object(_services_postData__WEBPACK_IMPORTED_MODULE_1__["default"])('http://localhost:3000/requests', json).then(data => {
        showThanksModal(message.success);
      }).finally(() => {
        form.reset();
      }).catch(() => {
        showThanksModal(message.failure);
      });
    });
  }
  bindPostData(form, message);
}
/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default, hideModal, showModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideModal", function() { return hideModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return showModal; });
function showModal(e, selector) {
  e.preventDefault();
  selector.classList.add('show');
  selector.classList.remove('hide');
}
function hideModal(selector) {
  selector.classList.remove('show');
  selector.classList.add('hide');
}
function modal({
  modalSelector,
  openBtn,
  closeBtn
}) {
  //Работа с модальным окном

  const modal = document.querySelector(modalSelector),
    callBtn = document.querySelector(openBtn),
    close = document.querySelector(closeBtn);
  callBtn.addEventListener('click', e => showModal(e, modal));
  close.addEventListener('click', () => hideModal(modal));
  window.addEventListener('click', e => {
    if (e.target.getAttribute('data-close') == '') {
      hideModal(modal);
    }
  });
}
/* harmony default export */ __webpack_exports__["default"] = (modal);


/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs({
  tabHeader,
  tabHeaderItem,
  tabContentSelector
}) {
  //Tabs

  const tabsParent = document.querySelector(tabHeader),
    tabItem = document.querySelectorAll(tabHeaderItem),
    tabContent = document.querySelectorAll(tabContentSelector);
  removeActive(tabItem);
  removeActive(tabContent);
  addActive(tabItem[1]);
  addActive(tabContent[1]);
  tabsParent.addEventListener('click', chooseTab);
  function chooseTab(e) {
    tabItem.forEach((item, index) => {
      if (e.target && e.target == item) {
        removeActive(tabItem);
        removeActive(tabContent);
        addActive(item);
        addActive(tabContent[index]);
      }
    });
  }
  function removeActive(item) {
    item.forEach(element => {
      element.classList.remove('active');
    });
  }
  function addActive(item) {
    item.classList.add('active');
  }
}
/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_adaptation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/adaptation */ "./src/js/modules/adaptation.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");
/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/carousel */ "./src/js/modules/carousel.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");





window.addEventListener('DOMContentLoaded', () => {
  Object(_modules_adaptation__WEBPACK_IMPORTED_MODULE_0__["default"])({
    barSelector: '.first__bar',
    parentSelector: '.first__content'
  });
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])({
    modalSelector: '.modal',
    openBtn: '.sixth__btn',
    closeBtn: '.modal__close'
  });
  Object(_modules_form__WEBPACK_IMPORTED_MODULE_2__["default"])({
    modalSelector: '.modal',
    formSelector: '.form'
  });
  Object(_modules_carousel__WEBPACK_IMPORTED_MODULE_3__["default"])({
    trackWrapper: '.third__carousel-track',
    slideSelector: '.third__carousel-slide',
    wrapperSelector: '.third__carousel-wrapper',
    nextArrow: '.third__carousel-right',
    prevArrow: '.third__carousel-left'
  });
  Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_4__["default"])({
    tabHeader: '.third__tabs-header',
    tabHeaderItem: '.third__tabs-header-item',
    tabContentSelector: '.third__tabs-content'
  });
});

/***/ }),

/***/ "./src/js/services/postData.js":
/*!*************************************!*\
  !*** ./src/js/services/postData.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
async function postData(url, data) {
  let res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: data
  });
  return await res.json();
}
/* harmony default export */ __webpack_exports__["default"] = (postData);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map