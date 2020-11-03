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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _view_renderArticles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/renderArticles */ "./src/view/renderArticles.ts");
/* harmony import */ var _model_ArticleList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/ArticleList */ "./src/model/ArticleList.ts");
/* harmony import */ var _view_addIntersectionObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/addIntersectionObserver */ "./src/view/addIntersectionObserver.ts");
/* harmony import */ var _view_addModalAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/addModalAction */ "./src/view/addModalAction.ts");




class App {
    constructor() { }
    mount() {
        Object(_view_renderArticles__WEBPACK_IMPORTED_MODULE_0__["initArticles"])(new _model_ArticleList__WEBPACK_IMPORTED_MODULE_1__["ArticleList"]());
        //addScrollListener();
        Object(_view_addIntersectionObserver__WEBPACK_IMPORTED_MODULE_2__["default"])(document.querySelector("footer"));
        Object(_view_addModalAction__WEBPACK_IMPORTED_MODULE_3__["default"])();
    }
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/App.ts");

const app = new _App__WEBPACK_IMPORTED_MODULE_0__["App"]();
app.mount();


/***/ }),

/***/ "./src/model/Article.ts":
/*!******************************!*\
  !*** ./src/model/Article.ts ***!
  \******************************/
/*! exports provided: Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
/* harmony import */ var _util_UuidGen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/UuidGen */ "./src/util/UuidGen.ts");

class Article {
    constructor(headerText, paragraphText) {
        this.headerText = headerText;
        this.paragraphText = paragraphText;
        this.id = Object(_util_UuidGen__WEBPACK_IMPORTED_MODULE_0__["generateUUIDv4"])();
    }
}


/***/ }),

/***/ "./src/model/ArticleList.ts":
/*!**********************************!*\
  !*** ./src/model/ArticleList.ts ***!
  \**********************************/
/*! exports provided: ArticleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleList", function() { return ArticleList; });
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Article */ "./src/model/Article.ts");

class ArticleList {
    constructor() {
        this.list = [
            new _Article__WEBPACK_IMPORTED_MODULE_0__["Article"]("section 1", "paragraph 1"),
            new _Article__WEBPACK_IMPORTED_MODULE_0__["Article"]("section 2", "paragraph 2"),
            new _Article__WEBPACK_IMPORTED_MODULE_0__["Article"]("section 3", "paragraph3")
        ];
    }
    getList() {
        return this.list;
    }
    appendArticle(sectionText, paragraphText) {
        let articleToAppend = new _Article__WEBPACK_IMPORTED_MODULE_0__["Article"](sectionText, paragraphText);
        this.list.push(articleToAppend);
    }
}


/***/ }),

/***/ "./src/util/UuidGen.ts":
/*!*****************************!*\
  !*** ./src/util/UuidGen.ts ***!
  \*****************************/
/*! exports provided: generateUUIDv4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateUUIDv4", function() { return generateUUIDv4; });
function generateUUIDv4() {
    let chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");
    for (let i = 0, len = chars.length; i < len; i++) {
        switch (chars[i]) {
            case "x":
                chars[i] = Math.floor(Math.random() * 16).toString(16);
                break;
            case "y":
                chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16);
                break;
        }
    }
    return chars.join("");
}


/***/ }),

/***/ "./src/view/addIntersectionObserver.ts":
/*!*********************************************!*\
  !*** ./src/view/addIntersectionObserver.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addIntersectionObserver; });
/* harmony import */ var _renderArticles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderArticles */ "./src/view/renderArticles.ts");
/* harmony import */ var _model_Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/Article */ "./src/model/Article.ts");


function addIntersectionObserver(element) {
    const option = {
        rootMargin: '-10%',
    };
    const observer = new IntersectionObserver(e => {
        Object(_renderArticles__WEBPACK_IMPORTED_MODULE_0__["renderArticle"])(new _model_Article__WEBPACK_IMPORTED_MODULE_1__["Article"]("section added by observer", "paragraph added by observer"));
    }, option);
    observer.observe(element);
}


/***/ }),

/***/ "./src/view/addModalAction.ts":
/*!************************************!*\
  !*** ./src/view/addModalAction.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addModalAction; });
function addModalAction() {
    //const modalButton = document.querySelector("#modalOpen");
    const modal = document.getElementById("modal");
    //const modalButton = document.querySelector("#modalOpen");
    const modalButton = document.getElementById("modalOpen");
    const body = document.getElementById("body");
    const ms = 400;
    modal.style.transition = "opacity" + ms + "ms";
    modalButton.addEventListener("click", () => {
        setTimeout(() => { modal.classList.add("is_open"); }, 1);
        //setTimeout(() => { body.classList.add("opacity-half")}, 50);
        setTimeout(() => { modal.classList.add("opacity-full"); }, 50);
    });
    let modalClose = document.querySelectorAll(".js-modal-close");
    for (let i = 0; i < modalClose.length; i++) {
        modalClose[i].addEventListener("click", () => {
            setTimeout(() => { modal.classList.remove("opacity-full"); }, 1);
            //setTimeout(() => { body.style.opacity = "1"}, 50);
            setTimeout(() => { modal.classList.remove("is_open"); }, ms);
        });
    }
}


/***/ }),

/***/ "./src/view/renderArticles.ts":
/*!************************************!*\
  !*** ./src/view/renderArticles.ts ***!
  \************************************/
/*! exports provided: initArticles, renderArticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initArticles", function() { return initArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderArticle", function() { return renderArticle; });
/* harmony import */ var _view_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-helper */ "./src/view/view-helper.ts");

function initArticles(articles) {
    for (let article of articles.getList()) {
        renderArticle(article);
    }
}
;
function renderArticle(article) {
    const html = `
                <article class="article">
                    <section>
                        <h2>${article.headerText}</h2>
                        <p>${article.paragraphText}</p>
                    </section>
                </article>
                `;
    const main = document.querySelector("#main");
    main.appendChild(Object(_view_helper__WEBPACK_IMPORTED_MODULE_0__["createElement"])(html));
}


/***/ }),

/***/ "./src/view/view-helper.ts":
/*!*********************************!*\
  !*** ./src/view/view-helper.ts ***!
  \*********************************/
/*! exports provided: createElementToAppend, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementToAppend", function() { return createElementToAppend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
function createElementToAppend(sectionText, paragraphText) {
    const template = document.createElement("template");
    template.innerHTML = `
                <article>
                    <section>
                        <h2>${sectionText}</h2>
                        <p>${paragraphText}</p>
                    </section>
                </article>
                `;
    return template.content.firstElementChild;
}
function createElement(html) {
    const template = document.createElement("template");
    template.innerHTML = html;
    return template.content.firstElementChild;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL0FydGljbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL0FydGljbGVMaXN0LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL1V1aWRHZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvYWRkSW50ZXJzZWN0aW9uT2JzZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvYWRkTW9kYWxBY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvcmVuZGVyQXJ0aWNsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvdmlldy1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7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RU0sU0FBUyxhQUFhLENBQUMsSUFBWTtJQUN0QyxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BELFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQzFCLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztBQUU5QyxDQUFDIiwiZmlsZSI6Im1haW5fZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBpbml0QXJ0aWNsZXMgfSBmcm9tIFwiLi92aWV3L3JlbmRlckFydGljbGVzXCI7XG5pbXBvcnQgeyBBcnRpY2xlTGlzdCB9IGZyb20gXCIuL21vZGVsL0FydGljbGVMaXN0XCI7XG5pbXBvcnQgYWRkSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgZnJvbSBcIi4vdmlldy9hZGRJbnRlcnNlY3Rpb25PYnNlcnZlclwiO1xuaW1wb3J0IGFkZE1vZGFsQWN0aW9uIGZyb20gXCIuL3ZpZXcvYWRkTW9kYWxBY3Rpb25cIjtcblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgbW91bnQoKSB7XG4gICAgICAgIGluaXRBcnRpY2xlcyhuZXcgQXJ0aWNsZUxpc3QoKSk7XG4gICAgICAgIC8vYWRkU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgICAgYWRkSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvb3RlclwiKSk7XG4gICAgICAgIGFkZE1vZGFsQWN0aW9uKCk7XG5cblxuXG4gICAgfVxufSIsImltcG9ydCB7IEFwcCB9IGZyb20gXCIuL0FwcFwiO1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5hcHAubW91bnQoKTtcbiIsImltcG9ydCB7IGdlbmVyYXRlVVVJRHY0IH0gZnJvbSAgXCIuLi91dGlsL1V1aWRHZW5cIjtcblxuZXhwb3J0IGNsYXNzIEFydGljbGUge1xuICAgIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcmVhZG9ubHkgaGVhZGVyVGV4dDogc3RyaW5nLFxuICAgICAgICByZWFkb25seSBwYXJhZ3JhcGhUZXh0OiBzdHJpbmdcbiAgICApIHtcbiAgICAgICAgdGhpcy5pZCA9IGdlbmVyYXRlVVVJRHY0KCk7XG4gICAgfVxufSIsImltcG9ydCB7IEFydGljbGUgfSBmcm9tIFwiLi9BcnRpY2xlXCI7XG5cbmV4cG9ydCBjbGFzcyBBcnRpY2xlTGlzdCB7XG4gICAgcHJpdmF0ZSBsaXN0OiBBcnRpY2xlW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gW1xuICAgICAgICAgICAgbmV3IEFydGljbGUoXCJzZWN0aW9uIDFcIiwgXCJwYXJhZ3JhcGggMVwiKSxcbiAgICAgICAgICAgIG5ldyBBcnRpY2xlKFwic2VjdGlvbiAyXCIsIFwicGFyYWdyYXBoIDJcIiksXG4gICAgICAgICAgICBuZXcgQXJ0aWNsZShcInNlY3Rpb24gM1wiLCBcInBhcmFncmFwaDNcIilcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBnZXRMaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0O1xuICAgIH1cblxuICAgIGFwcGVuZEFydGljbGUoc2VjdGlvblRleHQ6IHN0cmluZywgcGFyYWdyYXBoVGV4dDogc3RyaW5nKSB7XG4gICAgICAgIGxldCBhcnRpY2xlVG9BcHBlbmQgPSBuZXcgQXJ0aWNsZShzZWN0aW9uVGV4dCwgcGFyYWdyYXBoVGV4dCk7XG4gICAgICAgIHRoaXMubGlzdC5wdXNoKGFydGljbGVUb0FwcGVuZCk7XG4gICAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVVVSUR2NCgpIHtcbiAgICBsZXQgY2hhcnMgPSBcInh4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eFwiLnNwbGl0KFwiXCIpO1xuICAgIGZvcihsZXQgaSA9IDAsIGxlbiA9IGNoYXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHN3aXRjaChjaGFyc1tpXSkge1xuICAgICAgICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgICAgICAgICBjaGFyc1tpXSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KS50b1N0cmluZygxNik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwieVwiOlxuICAgICAgICAgICAgICAgIGNoYXJzW2ldID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpICsgOCkudG9TdHJpbmcoMTYpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjaGFycy5qb2luKFwiXCIpO1xufSIsImltcG9ydCB7IHJlbmRlckFydGljbGUgfSBmcm9tIFwiLi9yZW5kZXJBcnRpY2xlc1wiO1xuaW1wb3J0IHsgQXJ0aWNsZSB9IGZyb20gXCIuLi9tb2RlbC9BcnRpY2xlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZEludGVyc2VjdGlvbk9ic2VydmVyIChlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IG9wdGlvbiA9IHtcbiAgICAgICAgcm9vdE1hcmdpbjogJy0xMCUnLFxuICAgIH1cbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlID0+IHtcbiAgICAgICAgcmVuZGVyQXJ0aWNsZShuZXcgQXJ0aWNsZShcInNlY3Rpb24gYWRkZWQgYnkgb2JzZXJ2ZXJcIiwgXCJwYXJhZ3JhcGggYWRkZWQgYnkgb2JzZXJ2ZXJcIikpO1xuICAgIH0sIG9wdGlvbik7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNb2RhbEFjdGlvbigpIHtcbiAgICAvL2NvbnN0IG1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2RhbE9wZW5cIik7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsXCIpO1xuICAgIC8vY29uc3QgbW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsT3BlblwiKTtcbiAgICBjb25zdCBtb2RhbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxPcGVuXCIpO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIik7XG5cbiAgICBjb25zdCBtcyA9IDQwMDtcbiAgICBtb2RhbC5zdHlsZS50cmFuc2l0aW9uID0gXCJvcGFjaXR5XCIgKyBtcyArIFwibXNcIjtcblxuICAgIG1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiaXNfb3BlblwiKX0sIDEpO1xuICAgICAgICAvL3NldFRpbWVvdXQoKCkgPT4geyBib2R5LmNsYXNzTGlzdC5hZGQoXCJvcGFjaXR5LWhhbGZcIil9LCA1MCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBtb2RhbC5jbGFzc0xpc3QuYWRkKFwib3BhY2l0eS1mdWxsXCIpfSwgNTApO1xuICAgIH0pO1xuXG4gICAgbGV0IG1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLW1vZGFsLWNsb3NlXCIpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBtb2RhbENsb3NlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1vZGFsQ2xvc2VbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9Pnttb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3BhY2l0eS1mdWxsXCIpfSwgMSk7XG4gICAgICAgICAgICAvL3NldFRpbWVvdXQoKCkgPT4geyBib2R5LnN0eWxlLm9wYWNpdHkgPSBcIjFcIn0sIDUwKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7IG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJpc19vcGVuXCIpfSwgbXMpO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL3ZpZXctaGVscGVyXCI7XG5pbXBvcnQgeyBBcnRpY2xlTGlzdCB9IGZyb20gXCIuLi9tb2RlbC9BcnRpY2xlTGlzdFwiO1xuaW1wb3J0IHsgQXJ0aWNsZSB9IGZyb20gXCIuLi9tb2RlbC9BcnRpY2xlXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRBcnRpY2xlcyhhcnRpY2xlczogQXJ0aWNsZUxpc3QpIHtcbiAgICBmb3IobGV0IGFydGljbGUgb2YgYXJ0aWNsZXMuZ2V0TGlzdCgpKSB7XG4gICAgICAgIHJlbmRlckFydGljbGUoYXJ0aWNsZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckFydGljbGUoYXJ0aWNsZTogQXJ0aWNsZSkge1xuICAgIGNvbnN0IGh0bWw6IHN0cmluZyA9IGBcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cImFydGljbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+JHthcnRpY2xlLmhlYWRlclRleHR9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7YXJ0aWNsZS5wYXJhZ3JhcGhUZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICBgO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KGh0bWwpKTtcblxufSIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VG9BcHBlbmQoc2VjdGlvblRleHQ6IHN0cmluZywgcGFyYWdyYXBoVGV4dDogc3RyaW5nKSB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj4ke3NlY3Rpb25UZXh0fTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3BhcmFncmFwaFRleHR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgICAgIGA7XG4gICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGh0bWw6IHN0cmluZykgOkVsZW1lbnQge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9