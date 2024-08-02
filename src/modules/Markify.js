import MarkifyHTML from "./MarkifyHTML.js";
import MarkifyParse from "./MarkifyParse.js";

export default class Markify {
    constructor({ elementID }) {
        new MarkifyHTML(elementID);
        new MarkifyParse();
    }
}