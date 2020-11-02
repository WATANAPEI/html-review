import { initArticles } from "./view/renderArticles";
import { ArticleList } from "./model/ArticleList";
import addIntersectionObserver from "./view/addIntersectionObserver";
import addModalAction from "./view/addModalAction";

export class App {
    constructor() {}

    mount() {
        initArticles(new ArticleList());
        //addScrollListener();
        addIntersectionObserver(document.querySelector("footer"));
        addModalAction();



    }
}