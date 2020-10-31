import { Article } from "./Article";

export class ArticleList {
    list: Article[];
    constructor() {
        this.list = [
            new Article("section 1", "paragraph 1"),
            new Article("section 2", "paragraph 2"),
            new Article("section 3", "paragraph3")
        ];
    }

    appendArticle(sectionText: string, paragraphText: string) {
        let articleToAppend = new Article(sectionText, paragraphText);
        this.list.push(articleToAppend);
    }
}