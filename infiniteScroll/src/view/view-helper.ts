export function createElementToAppend(sectionText: string, paragraphText: string) {
    const template = document.createElement("template");
    template.innerHTML = `
                <article>
                    <section>
                        <h2>${sectionText}</h2>
                        <p>${paragraphText}</p>
                    </section>
                </article>
                `;
    return template.content.firstElementChild;
}

export function createElement(html: string) :Element {
    const template = document.createElement("template");
    template.innerHTML = html;
    return template.content.firstElementChild;

}