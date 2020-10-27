/*
document.querySelectorAll("#main").forEach(elem => {
    elem.onscroll = function() {
        console.log(`scrollTop: ${this.scrollTop}, clientHeight: ${this.clientHeight}, scrollHeight: ${this.scrollHeight}`);
        if(this.scrollTop + this.clientHeight >= ) {
            let template = document.querySelector("#template");
            this.appendChild(template);
        }
    };
});
*/
let articles = Array.from(document.querySelectorAll("article"));
let lastArticle = articles[articles.length - 1];

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
    let scrollVal = window.pageYOffset;
    let lastArticleYPosition = lastArticle.getBoundingClientRect().y;
    if(scrollVal > lastArticleYPosition) {
        lastArticle.appendChild(createElementToAppend());
        articles = Array.from(document.querySelectorAll("article"));
        lastArticle = articles[articles.length - 1];
    }

})