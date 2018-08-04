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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 383);
/******/ })
/************************************************************************/
/******/ ({

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(384);


/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(385);

var slideIndex = 0;
showSlides();

function showSlides() {
    var i = void 0;
    var slides = document.getElementsByClassName("slider-item");
    var btn = document.getElementsByClassName("slider-btn");
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace("slider-item__active");
    }
    slideIndex++;
    for (i = 0; i < btn.length; i++) {
        btn[i].className = btn[i].className.replace("slider-btn__active");
    }

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].className += " slider-item__active";
    btn[slideIndex - 1].className += " slider-btn__active";
    setTimeout(showSlides, 4000);
}

/***/ }),

/***/ 385:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });