export default class MarkifyHTML {
    #element;
    constructor(elementID) {
        this.#element = document.getElementById(elementID);
        this.#element.innerHTML = this.#render();
    }

    #render() {
        return `
            <div class="markify">
                <textarea></textarea>
                <article>Привет мир</article>
            </div>
        `;
    }
}