import Page from "./Page.js";

class ContactForm extends Page {
    get sendMsgButton() {
        return cy.xpath('//button[@type="submit"]');
    }
    get requiredFieldsList() {
        return cy.get(".et-pb-contact-message li");
    }
    get requiredFieldsTitle() {
        return cy.get(".et-pb-contact-message p");
    }
    get firstNameInput() {
        return cy.get("#et_pb_contact_first_0");
    }
    get lastNameInput() {
        return cy.get("#et_pb_contact_last_0");
    }
    get emailInput() {
        return cy.get("#et_pb_contact_email_0");
    }
    get messageInput() {
        return cy.get("#et_pb_contact_message_0");
    }
    get successMessage() {
        return cy.get(".et-pb-contact-message");
    }
}
export default new ContactForm();
