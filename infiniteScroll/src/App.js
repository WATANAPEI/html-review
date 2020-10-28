import { createElementToAppend } from "./view/view-helper.js";

export class App {
    constructor() {}

    mount() {
        let footer = document.querySelector("footer");

        const scrollCallback = () => {
            // absolute position of footer from page top
            let main = document.querySelector("main");
            let footerYPosition = footer.getBoundingClientRect().top + window.pageYOffset;
            if(ElemComeToPage(window.pageYOffset, footerYPosition, window.innerHeight)) {
                main.appendChild(createElementToAppend());
            }

            function ElemComeToPage(scrollVal, elemYPosition, ViewportHeight) {
                return scrollVal > (elemYPosition - ViewportHeight);
            }
        }

        window.addEventListener("scroll", scrollCallback);
    }
}