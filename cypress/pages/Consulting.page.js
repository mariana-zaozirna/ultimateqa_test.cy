import Page from "./Page.js";

class Consulting extends Page {
    get consultingTitle() {
        return cy.get(".wpforms-title");
    }
    get allFormLabels() {
        return cy.get(".wpforms-field-label");
    }
    get nameInput() {
        return cy.get("#wpforms-217788-field_0");
    }
    get emailInput() {
        return cy.get("#wpforms-217788-field_1");
    }
    get jobTitleInput() {
        return cy.get("#wpforms-217788-field_4");
    }
    get companyInput() {
        return cy.get("#wpforms-217788-field_3");
    }
    get messageInput() {
        return cy.get("#wpforms-217788-field_2");
    }
    get submitButton() {
        return cy.get("#wpforms-submit-217788");
    }
    get nameErrorMsg() {
        return cy.get("#wpforms-217788-field_0-error");
    }
}
export default new Consulting();
