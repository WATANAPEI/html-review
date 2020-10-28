function createElementToAppend() {
    const template = document.createElement("template");
    template.innerHTML = `
                <article>
                    <section>
                        <h2>section x</h2>
                        <p>paragraph x</p>
                    </section>
                </article>
                `;
    return template.content.firstElementChild;
}

window.addEventListener("scroll", () => {
    // absolute position of footer from page top
    let main = getMainElem();
    let footer = getFooterElem();
    let footerYPosition = footer.getBoundingClientRect().top + window.pageYOffset;
    if(ElemComeToPage(window.pageYOffset, footerYPosition, window.innerHeight)) {
        main.appendChild(createElementToAppend());
        footer = getFooterElem();
    }

})

function ElemComeToPage(scrollVal, elemYPosition, ViewportHeight) {
    return scrollVal > (elemYPosition - ViewportHeight);
}

function getFooterElem() {
    return document.querySelector("footer");
}

function getMainElem() {
    return document.querySelector("main");
}