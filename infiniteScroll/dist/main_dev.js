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
        Object(_view_addIntersectionObserver__WEBPACK_IMPORTED_MODULE_2__["default"])();
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
        this._sectionText = sectionText;
        this._paragraphText = paragraphText;
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
/* harmony import */ var _view_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-helper */ "./src/view/view-helper.ts");

function addIntersectionObserver() {
    const option = {
        rootMargin: '-10%',
    };
    const observer = new IntersectionObserver(e => {
        console.log("found footer");
        let main = document.querySelector("main");
        main.appendChild(Object(_view_helper__WEBPACK_IMPORTED_MODULE_0__["createElementToAppend"])("section x", "paragraph x"));
    }, option);
    observer.observe(document.querySelector("footer"));
}


/***/ }),

/***/ "./src/view/renderArticles.ts":
/*!************************************!*\
  !*** ./src/view/renderArticles.ts ***!
  \************************************/
/*! exports provided: initArticles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initArticles", function() { return initArticles; });
/* harmony import */ var _view_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-helper */ "./src/view/view-helper.ts");

function initArticles(articles) {
    const main = document.querySelector("#main");
    for (let article of articles.list) {
        main.appendChild(Object(_view_helper__WEBPACK_IMPORTED_MODULE_0__["createElementToAppend"])(article._sectionText, article._paragraphText));
    }
}
;


/***/ }),

/***/ "./src/view/view-helper.ts":
/*!*********************************!*\
  !*** ./src/view/view-helper.ts ***!
  \*********************************/
/*! exports provided: createElementToAppend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementToAppend", function() { return createElementToAppend; });
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL0FydGljbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL0FydGljbGVMaXN0LnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3L2FkZEludGVyc2VjdGlvbk9ic2VydmVyLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3JlbmRlckFydGljbGVzLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3ZpZXctaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxRDtBQUNIO0FBQ21CO0FBRTlELE1BQU0sR0FBRztJQUNaLGdCQUFlLENBQUM7SUFFaEIsS0FBSztRQUNELHlFQUFZLENBQUMsSUFBSSw4REFBVyxFQUFFLENBQUMsQ0FBQztRQUNoQyxzQkFBc0I7UUFDdEIsNkVBQXVCLEVBQUUsQ0FBQztJQUk5QixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUNmRDtBQUFBO0FBQTRCO0FBRTVCLE1BQU0sR0FBRyxHQUFHLElBQUksd0NBQUcsRUFBRSxDQUFDO0FBQ3RCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ0haO0FBQUE7QUFBTyxNQUFNLE9BQU87SUFJaEIsWUFBWSxXQUFtQixFQUFFLGFBQXFCO1FBQ2xELElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO0lBQ3hDLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ1JEO0FBQUE7QUFBQTtBQUFvQztBQUU3QixNQUFNLFdBQVc7SUFFcEI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1IsSUFBSSxnREFBTyxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUM7WUFDdkMsSUFBSSxnREFBTyxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUM7WUFDdkMsSUFBSSxnREFBTyxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUM7U0FDekMsQ0FBQztJQUNOLENBQUM7SUFFRCxhQUFhLENBQUMsV0FBbUIsRUFBRSxhQUFxQjtRQUNwRCxJQUFJLGVBQWUsR0FBRyxJQUFJLGdEQUFPLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ2hCRDtBQUFBO0FBQUE7QUFBc0Q7QUFFdkMsU0FBUyx1QkFBdUI7SUFDM0MsTUFBTSxNQUFNLEdBQUc7UUFDWCxVQUFVLEVBQUUsTUFBTTtLQUNyQjtJQUNELE1BQU0sUUFBUSxHQUFHLElBQUksb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1QixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxXQUFXLENBQUMsMEVBQXFCLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ1gsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDdkQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1pEO0FBQUE7QUFBQTtBQUFzRDtBQUUvQyxTQUFTLFlBQVksQ0FBQyxRQUFRO0lBQ2pDLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0MsS0FBSSxJQUFJLE9BQU8sSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsMEVBQXFCLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztLQUN6RjtBQUVMLENBQUM7QUFBQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDUkY7QUFBQTtBQUFPLFNBQVMscUJBQXFCLENBQUMsV0FBVyxFQUFFLGFBQWE7SUFDNUQsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwRCxRQUFRLENBQUMsU0FBUyxHQUFHOzs7OEJBR0ssV0FBVzs2QkFDWixhQUFhOzs7aUJBR3pCLENBQUM7SUFDZCxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7QUFDOUMsQ0FBQyIsImZpbGUiOiJtYWluX2Rldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgaW5pdEFydGljbGVzIH0gZnJvbSBcIi4vdmlldy9yZW5kZXJBcnRpY2xlc1wiO1xuaW1wb3J0IHsgQXJ0aWNsZUxpc3QgfSBmcm9tIFwiLi9tb2RlbC9BcnRpY2xlTGlzdFwiO1xuaW1wb3J0IGFkZEludGVyc2VjdGlvbk9ic2VydmVyIGZyb20gXCIuL3ZpZXcvYWRkSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcIjtcblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgbW91bnQoKSB7XG4gICAgICAgIGluaXRBcnRpY2xlcyhuZXcgQXJ0aWNsZUxpc3QoKSk7XG4gICAgICAgIC8vYWRkU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgICAgYWRkSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKTtcblxuXG5cbiAgICB9XG59IiwiaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4vQXBwXCI7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbmFwcC5tb3VudCgpO1xuIiwiZXhwb3J0IGNsYXNzIEFydGljbGUge1xuICAgIHByaXZhdGUgX3NlY3Rpb25UZXh0OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcGFyYWdyYXBoVGV4dDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3Ioc2VjdGlvblRleHQ6IHN0cmluZywgcGFyYWdyYXBoVGV4dDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3NlY3Rpb25UZXh0ID0gc2VjdGlvblRleHQ7XG4gICAgICAgIHRoaXMuX3BhcmFncmFwaFRleHQgPSBwYXJhZ3JhcGhUZXh0O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBcnRpY2xlIH0gZnJvbSBcIi4vQXJ0aWNsZVwiO1xuXG5leHBvcnQgY2xhc3MgQXJ0aWNsZUxpc3Qge1xuICAgIGxpc3Q6IEFydGljbGVbXTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gW1xuICAgICAgICAgICAgbmV3IEFydGljbGUoXCJzZWN0aW9uIDFcIiwgXCJwYXJhZ3JhcGggMVwiKSxcbiAgICAgICAgICAgIG5ldyBBcnRpY2xlKFwic2VjdGlvbiAyXCIsIFwicGFyYWdyYXBoIDJcIiksXG4gICAgICAgICAgICBuZXcgQXJ0aWNsZShcInNlY3Rpb24gM1wiLCBcInBhcmFncmFwaDNcIilcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBhcHBlbmRBcnRpY2xlKHNlY3Rpb25UZXh0OiBzdHJpbmcsIHBhcmFncmFwaFRleHQ6IHN0cmluZykge1xuICAgICAgICBsZXQgYXJ0aWNsZVRvQXBwZW5kID0gbmV3IEFydGljbGUoc2VjdGlvblRleHQsIHBhcmFncmFwaFRleHQpO1xuICAgICAgICB0aGlzLmxpc3QucHVzaChhcnRpY2xlVG9BcHBlbmQpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50VG9BcHBlbmQgfSBmcm9tIFwiLi92aWV3LWhlbHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRJbnRlcnNlY3Rpb25PYnNlcnZlciAoKSB7XG4gICAgY29uc3Qgb3B0aW9uID0ge1xuICAgICAgICByb290TWFyZ2luOiAnLTEwJScsXG4gICAgfVxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGUgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImZvdW5kIGZvb3RlclwiKTtcbiAgICAgICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50VG9BcHBlbmQoXCJzZWN0aW9uIHhcIiwgXCJwYXJhZ3JhcGggeFwiKSk7XG4gICAgfSwgb3B0aW9uKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb290ZXJcIikpO1xufSIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnRUb0FwcGVuZCB9IGZyb20gXCIuL3ZpZXctaGVscGVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0QXJ0aWNsZXMoYXJ0aWNsZXMpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuICAgIGZvcihsZXQgYXJ0aWNsZSBvZiBhcnRpY2xlcy5saXN0KSB7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudFRvQXBwZW5kKGFydGljbGUuX3NlY3Rpb25UZXh0LCBhcnRpY2xlLl9wYXJhZ3JhcGhUZXh0KSk7XG4gICAgfVxuXG59OyIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VG9BcHBlbmQoc2VjdGlvblRleHQsIHBhcmFncmFwaFRleHQpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPiR7c2VjdGlvblRleHR9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7cGFyYWdyYXBoVGV4dH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICAgICAgYDtcbiAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZDtcbn0iXSwic291cmNlUm9vdCI6IiJ9