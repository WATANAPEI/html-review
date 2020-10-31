import { createElement } from "./view-helper";
import { ArticleList } from "../model/ArticleList";
import { Article } from "../model/Article";


export function initArticles(articles: ArticleList) {
    for(let article of articles.getList()) {
        renderArticle(article);
    }
};

export function renderArticle(article: Article) {
    const html: string = `
                <article>
                    <section>
                        <h2>${article.sectionText}</h2>
                        <p>${article.paragraphText}</p>
                    </section>
                </article>
                `;
    const main = document.querySelector("#main");
    main.appendChild(createElement(html));

}