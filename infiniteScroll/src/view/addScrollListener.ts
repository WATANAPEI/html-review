import { renderArticle } from "./renderArticles";
import { Article } from "../model/Article";

const scrollCallback = () => {
    // absolute position of footer from page top
    let footer = document.querySelector("footer");
    let targetPosition = footer.getBoundingClientRect().top + window.pageYOffset;
    if(ElemComeToPage(window.pageYOffset, targetPosition, window.innerHeight)) {
        //main.appendChild(createElementToAppend("section x", "paragraph x"));
        renderArticle(new Article("section x", "paragraph x"));
    }

    function ElemComeToPage(scrollVal, elemYPosition, ViewportHeight) {
        return scrollVal > (elemYPosition - ViewportHeight);
    }
}

export default function addScrollListener() {
    window.addEventListener("scroll", scrollCallback)
}