import { createElementToAppend } from "./view-helper.js";

export default function addIntersectionObserver () {
    const option = {
        rootMargin: '-10%',
    }
    const observer = new IntersectionObserver(e => {
        console.log("found footer");
        let main = document.querySelector("main");
        main.appendChild(createElementToAppend("section x", "paragraph x"));
    }, option);
    observer.observe(document.querySelector("footer"));
}