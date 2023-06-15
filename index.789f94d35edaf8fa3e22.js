/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _js_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/modal */ \"./src/js/modal.js\");\n/* harmony import */ var _js_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_modal__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/product */ \"./src/js/product.js\");\n/* harmony import */ var _js_product__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_product__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/connect */ \"./src/js/connect.js\");\n/* harmony import */ var _js_connect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_connect__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=webpack://webpackbaseconfig/./src/index.js?");

/***/ }),

/***/ "./src/js/connect.js":
/*!***************************!*\
  !*** ./src/js/connect.js ***!
  \***************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', () => {\n  const connectBox = document.querySelectorAll('.connect__box');\n  window.addEventListener('scroll', () => {\n    const windowCenter = window.innerHeight / 2 + window.scrollY;\n    connectBox.forEach(el => {\n      const scrollOffset = el.offsetTop - el.offsetHeight / 2;\n      if (windowCenter >= scrollOffset) {\n        el.classList.add('connect__box_animated');\n      }\n    });\n  });\n});\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/connect.js?");

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', () => {\n  const phoneBtn = document.querySelectorAll('.phone__btn');\n  const modal = document.querySelector('.modal');\n  const modalClose = document.querySelector('.modal__close');\n  const modalWindow = document.querySelector('.modal__window');\n  const modalForm = document.querySelector('.modal__form');\n  phoneBtn.forEach(btn => {\n    btn.addEventListener('click', () => {\n      modal.classList.remove('hidden');\n    });\n  });\n  modalClose.addEventListener('click', () => {\n    modal.classList.add('hidden');\n  });\n  modal.addEventListener('click', () => {\n    modal.classList.add('hidden');\n  });\n  modalWindow.addEventListener('click', event => {\n    event.stopPropagation();\n  });\n  modalForm.addEventListener('submit', event => {\n    event.preventDefault();\n    event.target.reset();\n  });\n  window.addEventListener('scroll', () => {\n    const scrollTop = window.pageYOffset;\n    const windowHeight = document.documentElement.clientHeight;\n    if (scrollTop >= windowHeight / 3) {\n      modal.style.transform = `translateY(${scrollTop}px)`;\n    } else {\n      modal.style.transform = 'translateY(0)';\n    }\n  });\n});\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/modal.js?");

/***/ }),

/***/ "./src/js/product.js":
/*!***************************!*\
  !*** ./src/js/product.js ***!
  \***************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', () => {\n  const products = document.querySelectorAll('.product');\n  window.addEventListener('scroll', () => {\n    const windowCenter = window.innerHeight / 2 + window.scrollY;\n    products.forEach(el => {\n      const scrollOffset = el.offsetTop;\n      if (windowCenter >= scrollOffset) {\n        el.classList.add('product_animated');\n      }\n    });\n  });\n});\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/product.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpackbaseconfig/./src/main.scss?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;