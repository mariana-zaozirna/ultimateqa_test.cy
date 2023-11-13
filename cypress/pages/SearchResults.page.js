import Page from "./Page.js";

class SearchResults extends Page {
    get allTitles() {
        return cy.get(".entry-title");
    }
}
export default new SearchResults();
