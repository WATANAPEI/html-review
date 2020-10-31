import { createElementToAppend } from "./view-helper";

export function initArticles(articles) {
    const main = document.querySelector("#main");
    for(let article of articles.list) {
        main.appendChild(createElementToAppend(article._sectionText, article._paragraphText));
    }

};