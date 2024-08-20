export default class MarkifyParse {
    constructor() {
        const textarea = document.querySelector('.markify textarea');
        const article = document.querySelector('.markify article');

        textarea.addEventListener('input', (e) => {
            article.innerHTML = this.#parse(e.target.value);
        });
    }

    #parse(markdown) {
        let lines = markdown.split('\n');
        let html = '';
        let listStack = [];
        let lastIndentLevel = 0;
        let isList = false;

        lines.forEach(line => {

            const indentLevel = this.#getIndentLevel(line);
            const isListItem = this.#isListItem(line.trim());

            if (isListItem) {
                let list = '';
                if (indentLevel > lastIndentLevel) {
                    list += '<ul>';
                    isList = true;
                    listStack.push(indentLevel);
                }

                if (listStack.length === 0) {
                    list += '<ul>';
                    isList = true;
                    listStack.push(0);
                }

                list += this.#parseList(line.trim());
                html += list
                lastIndentLevel = indentLevel;
            } else if (line.startsWith('#')) {
                if (isList) {
                    html += '</ul>';
                    isList = false;
                }

                html += this.#parseHeader(line.trim());
            } else {
                if (isList) {
                    html += '</ul>';
                    isList = false;
                }

                html += `<p>${line.trim()}</p>`;
            }
        });

        if (isList) {
            html += '</ul>';
            isList = false;
        }

        console.log(html);
        return html;
    }

    #parseHeader(line) {
        const headerLevel = line.match(/^#+/)[0].length;
        const content = line.replace(/^#+\s*/, '').trim();
        return `<h${headerLevel}>${content}</h${headerLevel}>`;
    }

    #parseList(line) {
        const content = line.replace(/^[*\-+\s]+/, '').trim();
        return `<li>${content}</li>`;
    }

    #getIndentLevel(line) {
        const match = line.match(/^\s*/);
        if (!match) return 0;
        const indentSpaces = match[0].length;
        return Math.floor(indentSpaces / 2);
    }

    #isListItem(line) {
        return /^\s*[*\-+]+/.test(line);
    }
}