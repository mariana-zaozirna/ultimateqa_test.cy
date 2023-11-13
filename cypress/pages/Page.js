export default class Page {
    open(path) {
        cy.visit(path);
    }
}
