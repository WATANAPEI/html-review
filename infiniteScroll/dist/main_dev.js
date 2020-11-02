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
    const ms = 400;
    modal.style.transition = "opacity" + ms + "ms";
    modalButton.addEventListener("click", () => {
        setTimeout(() => {
            modal.classList.add("is_open");
        }, 1);
        setTimeout(() => {
            modal.style.opacity = "1";
        }, 50);
    });
    let modalClose = document.querySelectorAll(".js-modal-close");
    for (let i = 0; i < modalClose.length; i++) {
        modalClose[i].addEventListener("click", () => {
            setTimeout(() => { modal.style.opacity = "0"; }, 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL0FydGljbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL0FydGljbGVMaXN0LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL1V1aWRHZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvYWRkSW50ZXJzZWN0aW9uT2JzZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvYWRkTW9kYWxBY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvcmVuZGVyQXJ0aWNsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvdmlldy1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7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cEQsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDMUIsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO0FBRTlDLENBQUMiLCJmaWxlIjoibWFpbl9kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IGluaXRBcnRpY2xlcyB9IGZyb20gXCIuL3ZpZXcvcmVuZGVyQXJ0aWNsZXNcIjtcbmltcG9ydCB7IEFydGljbGVMaXN0IH0gZnJvbSBcIi4vbW9kZWwvQXJ0aWNsZUxpc3RcIjtcbmltcG9ydCBhZGRJbnRlcnNlY3Rpb25PYnNlcnZlciBmcm9tIFwiLi92aWV3L2FkZEludGVyc2VjdGlvbk9ic2VydmVyXCI7XG5pbXBvcnQgYWRkTW9kYWxBY3Rpb24gZnJvbSBcIi4vdmlldy9hZGRNb2RhbEFjdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBtb3VudCgpIHtcbiAgICAgICAgaW5pdEFydGljbGVzKG5ldyBBcnRpY2xlTGlzdCgpKTtcbiAgICAgICAgLy9hZGRTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgICBhZGRJbnRlcnNlY3Rpb25PYnNlcnZlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9vdGVyXCIpKTtcbiAgICAgICAgYWRkTW9kYWxBY3Rpb24oKTtcblxuXG5cbiAgICB9XG59IiwiaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4vQXBwXCI7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbmFwcC5tb3VudCgpO1xuIiwiaW1wb3J0IHsgZ2VuZXJhdGVVVUlEdjQgfSBmcm9tICBcIi4uL3V0aWwvVXVpZEdlblwiO1xuXG5leHBvcnQgY2xhc3MgQXJ0aWNsZSB7XG4gICAgcmVhZG9ubHkgaWQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICByZWFkb25seSBoZWFkZXJUZXh0OiBzdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5IHBhcmFncmFwaFRleHQ6IHN0cmluZ1xuICAgICkge1xuICAgICAgICB0aGlzLmlkID0gZ2VuZXJhdGVVVUlEdjQoKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXJ0aWNsZSB9IGZyb20gXCIuL0FydGljbGVcIjtcblxuZXhwb3J0IGNsYXNzIEFydGljbGVMaXN0IHtcbiAgICBwcml2YXRlIGxpc3Q6IEFydGljbGVbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxpc3QgPSBbXG4gICAgICAgICAgICBuZXcgQXJ0aWNsZShcInNlY3Rpb24gMVwiLCBcInBhcmFncmFwaCAxXCIpLFxuICAgICAgICAgICAgbmV3IEFydGljbGUoXCJzZWN0aW9uIDJcIiwgXCJwYXJhZ3JhcGggMlwiKSxcbiAgICAgICAgICAgIG5ldyBBcnRpY2xlKFwic2VjdGlvbiAzXCIsIFwicGFyYWdyYXBoM1wiKVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIGdldExpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3Q7XG4gICAgfVxuXG4gICAgYXBwZW5kQXJ0aWNsZShzZWN0aW9uVGV4dDogc3RyaW5nLCBwYXJhZ3JhcGhUZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGFydGljbGVUb0FwcGVuZCA9IG5ldyBBcnRpY2xlKHNlY3Rpb25UZXh0LCBwYXJhZ3JhcGhUZXh0KTtcbiAgICAgICAgdGhpcy5saXN0LnB1c2goYXJ0aWNsZVRvQXBwZW5kKTtcbiAgICB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVVVJRHY0KCkge1xuICAgIGxldCBjaGFycyA9IFwieHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4XCIuc3BsaXQoXCJcIik7XG4gICAgZm9yKGxldCBpID0gMCwgbGVuID0gY2hhcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgc3dpdGNoKGNoYXJzW2ldKSB7XG4gICAgICAgICAgICBjYXNlIFwieFwiOlxuICAgICAgICAgICAgICAgIGNoYXJzW2ldID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgICAgICAgICAgY2hhcnNbaV0gPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCkgKyA4KS50b1N0cmluZygxNik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNoYXJzLmpvaW4oXCJcIik7XG59IiwiaW1wb3J0IHsgcmVuZGVyQXJ0aWNsZSB9IGZyb20gXCIuL3JlbmRlckFydGljbGVzXCI7XG5pbXBvcnQgeyBBcnRpY2xlIH0gZnJvbSBcIi4uL21vZGVsL0FydGljbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3Qgb3B0aW9uID0ge1xuICAgICAgICByb290TWFyZ2luOiAnLTEwJScsXG4gICAgfVxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGUgPT4ge1xuICAgICAgICByZW5kZXJBcnRpY2xlKG5ldyBBcnRpY2xlKFwic2VjdGlvbiBhZGRlZCBieSBvYnNlcnZlclwiLCBcInBhcmFncmFwaCBhZGRlZCBieSBvYnNlcnZlclwiKSk7XG4gICAgfSwgb3B0aW9uKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1vZGFsQWN0aW9uKCkge1xuICAgIC8vY29uc3QgbW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsT3BlblwiKTtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxcIik7XG4gICAgLy9jb25zdCBtb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWxPcGVuXCIpO1xuICAgIGNvbnN0IG1vZGFsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbE9wZW5cIik7XG5cbiAgICBjb25zdCBtcyA9IDQwMDtcbiAgICBtb2RhbC5zdHlsZS50cmFuc2l0aW9uID0gXCJvcGFjaXR5XCIgKyBtcyArIFwibXNcIjtcblxuICAgIG1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcImlzX29wZW5cIil9XG4gICAgICAgICwgMSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUub3BhY2l0eSA9IFwiMVwifSwgNTApO1xuICAgIH0pO1xuXG4gICAgbGV0IG1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLW1vZGFsLWNsb3NlXCIpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBtb2RhbENsb3NlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1vZGFsQ2xvc2VbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9Pnttb2RhbC5zdHlsZS5vcGFjaXR5PVwiMFwifSwgMSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4geyBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiaXNfb3BlblwiKX0sIG1zKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi92aWV3LWhlbHBlclwiO1xuaW1wb3J0IHsgQXJ0aWNsZUxpc3QgfSBmcm9tIFwiLi4vbW9kZWwvQXJ0aWNsZUxpc3RcIjtcbmltcG9ydCB7IEFydGljbGUgfSBmcm9tIFwiLi4vbW9kZWwvQXJ0aWNsZVwiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0QXJ0aWNsZXMoYXJ0aWNsZXM6IEFydGljbGVMaXN0KSB7XG4gICAgZm9yKGxldCBhcnRpY2xlIG9mIGFydGljbGVzLmdldExpc3QoKSkge1xuICAgICAgICByZW5kZXJBcnRpY2xlKGFydGljbGUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJBcnRpY2xlKGFydGljbGU6IEFydGljbGUpIHtcbiAgICBjb25zdCBodG1sOiBzdHJpbmcgPSBgXG4gICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJhcnRpY2xlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPiR7YXJ0aWNsZS5oZWFkZXJUZXh0fTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4ke2FydGljbGUucGFyYWdyYXBoVGV4dH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICAgICAgYDtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChodG1sKSk7XG5cbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFRvQXBwZW5kKHNlY3Rpb25UZXh0OiBzdHJpbmcsIHBhcmFncmFwaFRleHQ6IHN0cmluZykge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+JHtzZWN0aW9uVGV4dH08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtwYXJhZ3JhcGhUZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICBgO1xuICAgIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChodG1sOiBzdHJpbmcpIDpFbGVtZW50IHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICAgIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkO1xuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==