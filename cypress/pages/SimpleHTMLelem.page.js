import Page from "./Page.js";

class SimpleHTMLelem extends Page {
    get clickButton() {
        return cy.xpath('//a[@id="idExample"]');
    }
}
export default new SimpleHTMLelem();
