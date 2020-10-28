export function createElementToAppend() {
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