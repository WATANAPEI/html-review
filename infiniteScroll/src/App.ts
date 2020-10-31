import { initArticles } from "./view/renderArticles";
import { ArticleList } from "./model/ArticleList";
import addIntersectionObserver from "./view/addIntersectionObserver";

export class App {
    constructor() {}

    mount() {
        initArticles(new ArticleList());
        //addScrollListener();
        addIntersectionObserver(document.querySelector("footer"));



    }
}