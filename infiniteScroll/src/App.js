import addScrollListener from "./view/addScrollListener.js";
import { initArticles } from "./view/renderArticles.js";
import { ArticleList } from "./model/ArticleList.js";

export class App {
    constructor() {}

    mount() {
        initArticles(new ArticleList());
        addScrollListener();



    }
}