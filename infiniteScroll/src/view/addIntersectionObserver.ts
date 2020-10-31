import { renderArticle } from "./renderArticles";
import { Article } from "../model/Article";

export default function addIntersectionObserver (element: HTMLElement) {
    const option = {
        rootMargin: '-10%',
    }
    const observer = new IntersectionObserver(e => {
        renderArticle(new Article("section added by observer", "paragraph added by observer"));
    }, option);
    observer.observe(element);
}