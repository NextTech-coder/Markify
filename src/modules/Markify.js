import MarkifyHTML from "./MarkifyHTML.js";

export default class Markify {
    constructor({ elementID }) {
        new MarkifyHTML(elementID);
    }
}