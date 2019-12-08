module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! markdown-to-jsx */ "markdown-to-jsx");
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(markdown_to_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_resume_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/resume.md */ "./public/resume.md");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const IndexPage = () => {
  return __jsx(markdown_to_jsx__WEBPACK_IMPORTED_MODULE_1___default.a, null, _public_resume_md__WEBPACK_IMPORTED_MODULE_2__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./public/resume.md":
/*!**************************!*\
  !*** ./public/resume.md ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("# FUMIYA KOHNO\n\n## INFO\n\n- E-mail: kohnofumiya@gmail.com\n- GitHub: [https://github.com/fnwiya](https://github.com/fnwiya)\n- Blog(Japanese): [http://fnwiya.hatenablog.com/](http://fnwiya.hatenablog.com/)\n\n## QUALIFICATIONS\n\n- PostgreSQL\n- JavaScript\n  - Node.js\n  - React/Redux\n- Rust\n  - wasm\n- Blockchain\n  - Ethereum\n\n## PROFESSIONAL EXPERIENCE\n\n### [Japan Venture Research Co., LTD.](http://jvr.jp/) / [Uzabase, Inc.](https://www.uzabase.com/) 2018.08 -\n\n#### Engineer\n\n- Developed entrepedia(https://biz.entrepedia.jp/), startup database platform.\n- Developed ami(https://biz.entrepedia.jp/), live app for entrepreneurs.\n  - react native\n  - Ruby on Rails\n  - k8s\n  - firebase\n\n### [Mielka, Nonprofit Organization](mielka.org) 2017.04 -\n\n#### Software Engineer\n\n- Developed visualization service http://japanchoice.jp/\n  - Featured in Buzzfeed [https://www.buzzfeed.com/jp/harunayamazaki/japan-choice?utm_term=.saWXbG8gl#.ni88gO1Rz](https://www.buzzfeed.com/jp/harunayamazaki/japan-choice?utm_term=.saWXbG8gl#.ni88gO1Rz)\n  - Got Innovative Communication Award(ICA) 第五回「広告業界の若手が選ぶ、コミュニケーション大賞 」優秀賞 [http://www.jaaa.ne.jp/wp-content/uploads/2018/04/5603d76ba848cb962fb260253f8e7925.pdf](http://www.jaaa.ne.jp/wp-content/uploads/2018/04/5603d76ba848cb962fb260253f8e7925.pdf)\n\n### [Forcia, Inc.](http://www.forcia.com/) 2016.04 - 2018.07\n\n#### Chief Engineer\n\n- Developed search engine\n- Developed travel applications\n  - [https://www.his-vacation.com/](https://www.his-vacation.com/)\n- Improved development environment\n  - Set code convention and linter\n- Participated in ISUCON [http://isucon.net/](http://isucon.net/)\n\n### [Dot-jp, Nonprofit Organization](http://www.dot-jp.or.jp/) 2012.09 - 2015.03\n\n#### General Manager\n\n- Coordinated lawmaker-Internship\n- Developed a daily report application for internship students\n\n## EDUCATION\n\n- Bachelor’s Degree in Law , KYOTO UNIVERSITY (2016)\n- Summer Internship\n  - Works Applications Co., Ltd.\n  - FreakOut, Inc.\n- Internship\n  - Code for Japan\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/fumiya.kohno/repos/github.com/fnwiya/fnwiya.github.io/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "markdown-to-jsx":
/*!**********************************!*\
  !*** external "markdown-to-jsx" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("markdown-to-jsx");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map