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



class App {
    constructor() { }
    mount() {
        Object(_view_renderArticles__WEBPACK_IMPORTED_MODULE_0__["initArticles"])(new _model_ArticleList__WEBPACK_IMPORTED_MODULE_1__["ArticleList"]());
        //addScrollListener();
        Object(_view_addIntersectionObserver__WEBPACK_IMPORTED_MODULE_2__["default"])(document.querySelector("footer"));
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
class Article {
    constructor(sectionText, paragraphText) {
        this.sectionText = sectionText;
        this.paragraphText = paragraphText;
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
                <article>
                    <section>
                        <h2>${article.sectionText}</h2>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL0FydGljbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL0FydGljbGVMaXN0LnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3L2FkZEludGVyc2VjdGlvbk9ic2VydmVyLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3JlbmRlckFydGljbGVzLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3ZpZXctaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxRDtBQUNIO0FBQ21CO0FBRTlELE1BQU0sR0FBRztJQUNaLGdCQUFl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QUMsSUFBWTtJQUN0QyxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BELFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQzFCLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztBQUU5QyxDQUFDIiwiZmlsZSI6Im1haW5fZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBpbml0QXJ0aWNsZXMgfSBmcm9tIFwiLi92aWV3L3JlbmRlckFydGljbGVzXCI7XG5pbXBvcnQgeyBBcnRpY2xlTGlzdCB9IGZyb20gXCIuL21vZGVsL0FydGljbGVMaXN0XCI7XG5pbXBvcnQgYWRkSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgZnJvbSBcIi4vdmlldy9hZGRJbnRlcnNlY3Rpb25PYnNlcnZlclwiO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBtb3VudCgpIHtcbiAgICAgICAgaW5pdEFydGljbGVzKG5ldyBBcnRpY2xlTGlzdCgpKTtcbiAgICAgICAgLy9hZGRTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgICBhZGRJbnRlcnNlY3Rpb25PYnNlcnZlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9vdGVyXCIpKTtcblxuXG5cbiAgICB9XG59IiwiaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4vQXBwXCI7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbmFwcC5tb3VudCgpO1xuIiwiZXhwb3J0IGNsYXNzIEFydGljbGUge1xuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHNlY3Rpb25UZXh0OiBzdHJpbmcsIHJlYWRvbmx5IHBhcmFncmFwaFRleHQ6IHN0cmluZykge31cbn0iLCJpbXBvcnQgeyBBcnRpY2xlIH0gZnJvbSBcIi4vQXJ0aWNsZVwiO1xuXG5leHBvcnQgY2xhc3MgQXJ0aWNsZUxpc3Qge1xuICAgIHByaXZhdGUgbGlzdDogQXJ0aWNsZVtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubGlzdCA9IFtcbiAgICAgICAgICAgIG5ldyBBcnRpY2xlKFwic2VjdGlvbiAxXCIsIFwicGFyYWdyYXBoIDFcIiksXG4gICAgICAgICAgICBuZXcgQXJ0aWNsZShcInNlY3Rpb24gMlwiLCBcInBhcmFncmFwaCAyXCIpLFxuICAgICAgICAgICAgbmV3IEFydGljbGUoXCJzZWN0aW9uIDNcIiwgXCJwYXJhZ3JhcGgzXCIpXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgZ2V0TGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdDtcbiAgICB9XG5cbiAgICBhcHBlbmRBcnRpY2xlKHNlY3Rpb25UZXh0OiBzdHJpbmcsIHBhcmFncmFwaFRleHQ6IHN0cmluZykge1xuICAgICAgICBsZXQgYXJ0aWNsZVRvQXBwZW5kID0gbmV3IEFydGljbGUoc2VjdGlvblRleHQsIHBhcmFncmFwaFRleHQpO1xuICAgICAgICB0aGlzLmxpc3QucHVzaChhcnRpY2xlVG9BcHBlbmQpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyByZW5kZXJBcnRpY2xlIH0gZnJvbSBcIi4vcmVuZGVyQXJ0aWNsZXNcIjtcbmltcG9ydCB7IEFydGljbGUgfSBmcm9tIFwiLi4vbW9kZWwvQXJ0aWNsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRJbnRlcnNlY3Rpb25PYnNlcnZlciAoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBvcHRpb24gPSB7XG4gICAgICAgIHJvb3RNYXJnaW46ICctMTAlJyxcbiAgICB9XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZSA9PiB7XG4gICAgICAgIHJlbmRlckFydGljbGUobmV3IEFydGljbGUoXCJzZWN0aW9uIGFkZGVkIGJ5IG9ic2VydmVyXCIsIFwicGFyYWdyYXBoIGFkZGVkIGJ5IG9ic2VydmVyXCIpKTtcbiAgICB9LCBvcHRpb24pO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG59IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL3ZpZXctaGVscGVyXCI7XG5pbXBvcnQgeyBBcnRpY2xlTGlzdCB9IGZyb20gXCIuLi9tb2RlbC9BcnRpY2xlTGlzdFwiO1xuaW1wb3J0IHsgQXJ0aWNsZSB9IGZyb20gXCIuLi9tb2RlbC9BcnRpY2xlXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRBcnRpY2xlcyhhcnRpY2xlczogQXJ0aWNsZUxpc3QpIHtcbiAgICBmb3IobGV0IGFydGljbGUgb2YgYXJ0aWNsZXMuZ2V0TGlzdCgpKSB7XG4gICAgICAgIHJlbmRlckFydGljbGUoYXJ0aWNsZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckFydGljbGUoYXJ0aWNsZTogQXJ0aWNsZSkge1xuICAgIGNvbnN0IGh0bWw6IHN0cmluZyA9IGBcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+JHthcnRpY2xlLnNlY3Rpb25UZXh0fTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4ke2FydGljbGUucGFyYWdyYXBoVGV4dH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICAgICAgYDtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChodG1sKSk7XG5cbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFRvQXBwZW5kKHNlY3Rpb25UZXh0OiBzdHJpbmcsIHBhcmFncmFwaFRleHQ6IHN0cmluZykge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+JHtzZWN0aW9uVGV4dH08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtwYXJhZ3JhcGhUZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICBgO1xuICAgIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChodG1sOiBzdHJpbmcpIDpFbGVtZW50IHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICAgIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkO1xuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==