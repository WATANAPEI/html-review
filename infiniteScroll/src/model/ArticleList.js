import { Article } from "./Article.js";

export class ArticleList {
    constructor() {
        this.list = [
            new Article("section 1", "paragraph 1"),
            new Article("section 2", "paragraph 2"),
            new Article("section 3", "paragraph3")
        ];
    }

    appendArticle(sectionText, paragraphText) {
        let articleToAppend = new Article(sectionText, paragraphText);
        this.articles.push(articleToAppend);
    }
}