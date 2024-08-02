export default class MarkifyHTML {
    #element;
    constructor(elementID) {
        this.#element = document.getElementById(elementID);
        this.#element.innerHTML = this.#render();
    }

    #render() {
        return `
            ${this.#navigate()}
            <div class="markify">
                <textarea></textarea>
                <article>Привет мир</article>
            </div>
        `;
    }

    #navigate() {
        return `
            <div class="markify-navigate">
                <h1>Навигация</h1>
            </div>
        `;
    }
}