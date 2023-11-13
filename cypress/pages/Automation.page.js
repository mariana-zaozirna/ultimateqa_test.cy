import Page from "./Page.js";
const path = "automation/";

class Automation extends Page {
    get interactionsButton() {
        return cy.xpath('//a[@href="../simple-html-elements-for-automation/"]');
    }
    get searchBtn() {
        return cy.xpath(
            '//button[@class="et_pb_menu__icon et_pb_menu__search-button"]',
        );
    }
    get searchContainer() {
        return cy.get(".et_pb_menu__search-container.et_pb_no_animation");
    }
    get searchInput() {
        return cy.get(".et_pb_menu__search-input");
    }
    get closeSearchButton() {
        return cy.xpath(
            '//button[@class="et_pb_menu__icon et_pb_menu__close-search-button"]',
        );
    }

    open() {
        super.open(path);
    }
}
export default new Automation();
