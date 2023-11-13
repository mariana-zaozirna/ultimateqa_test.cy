import { faker } from "@faker-js/faker";
import contactForm from "../pages/ContactForm.page";

describe("Contact us Form", () => {
    beforeEach(() => {
        cy.visit("https://ultimateqa.com/contact/");
    });

    it('TestCase_1:Submitting "Contact us" form with empty fields', () => {
        contactForm.sendMsgButton.click();
        contactForm.requiredFieldsTitle
            .should("be.visible")
            .and("have.text", "Please, fill in the following fields:");
        contactForm.requiredFieldsList
            .eq(0)
            .should("be.visible")
            .and("have.text", "First Name");
        contactForm.requiredFieldsList
            .eq(1)
            .should("be.visible")
            .and("have.text", "Last Name");
        contactForm.requiredFieldsList
            .eq(2)
            .should("be.visible")
            .and("have.text", "Email Address");
        contactForm.requiredFieldsList
            .eq(3)
            .should("be.visible")
            .and("have.text", "Message");
        contactForm.firstNameInput.should("have.class", "et_contact_error");
        contactForm.lastNameInput.should("have.class", "et_contact_error");
        contactForm.emailInput.should("have.class", "et_contact_error");
        contactForm.messageInput.should("have.class", "et_contact_error");
    });
    it('TestCase_2:Submitting "Contact us" form with empty "First name"', () => {
        contactForm.firstNameInput.should("be.empty");
        contactForm.lastNameInput.type(faker.person.lastName());
        contactForm.emailInput.type(faker.internet.email());
        contactForm.messageInput.type(faker.lorem.sentence());
        contactForm.sendMsgButton.click();
        contactForm.requiredFieldsTitle
            .should("be.visible")
            .and("have.text", "Please, fill in the following fields:");
        contactForm.requiredFieldsList
            .eq(0)
            .should("be.visible")
            .and("have.text", "First Name");
        contactForm.firstNameInput.should("have.class", "et_contact_error");
    });
    it('TestCase_3:Submitting "Contact us" form with empty "Last name"', () => {
        contactForm.lastNameInput.should("be.empty");
        contactForm.firstNameInput.type(faker.person.firstName());
        contactForm.emailInput.type(faker.internet.email());
        contactForm.messageInput.type(faker.lorem.sentence());
        contactForm.sendMsgButton.click();
        contactForm.requiredFieldsTitle
            .should("be.visible")
            .and("have.text", "Please, fill in the following fields:");
        contactForm.requiredFieldsList
            .eq(0)
            .should("be.visible")
            .and("have.text", "Last Name");
        contactForm.lastNameInput.should("have.class", "et_contact_error");
    });
    it('Test_Case_4:Sending "Contact us" form', () => {
        contactForm.firstNameInput.type(faker.person.firstName());
        contactForm.lastNameInput.type(faker.person.lastName());
        contactForm.emailInput.type(faker.internet.email());
        contactForm.messageInput.type(faker.lorem.sentence());
        contactForm.sendMsgButton.click();
        contactForm.successMessage
            .should("be.visible")
            .and("have.text", "Thanks for contacting us");
        contactForm.firstNameInput.should("not.exist");
        contactForm.lastNameInput.should("not.exist");
        contactForm.emailInput.should("not.exist");
        contactForm.messageInput.should("not.exist");
    });
    it("Test_Case_5:Invalid email format", () => {
        contactForm.firstNameInput.type(faker.person.firstName());
        contactForm.lastNameInput.type(faker.person.lastName());
        contactForm.messageInput.type(faker.lorem.sentence());

        const fakeEmail = faker.internet.email();
        contactForm.emailInput.type(fakeEmail.replace(/@/g, ""));
        contactForm.sendMsgButton.click();
        contactForm.requiredFieldsList
            .eq(0)
            .should("be.visible")
            .and("have.text", "Invalid email");
        contactForm.emailInput.should("have.class", "et_contact_error");
        contactForm.emailInput.clear();

        contactForm.emailInput.type(faker.person.firstName());
        contactForm.sendMsgButton.click();
        contactForm.requiredFieldsList
            .eq(0)
            .should("be.visible")
            .and("have.text", "Invalid email");
        contactForm.emailInput.should("have.class", "et_contact_error");
        contactForm.emailInput.clear();

        contactForm.emailInput.type(fakeEmail.replace(/\./g, ""));
        contactForm.sendMsgButton.click();
        contactForm.requiredFieldsList
            .eq(0)
            .should("be.visible")
            .and("have.text", "Invalid email");
        contactForm.emailInput.should("have.class", "et_contact_error");
        contactForm.emailInput.clear();

        contactForm.emailInput.type(fakeEmail.replace(/\.[^.]+$/, ""));
        contactForm.sendMsgButton.click();
        contactForm.requiredFieldsList
            .eq(0)
            .should("be.visible")
            .and("have.text", "Invalid email");
        contactForm.emailInput.should("have.class", "et_contact_error");
        contactForm.emailInput.clear();

        contactForm.emailInput.type(fakeEmail.replace(/@/, " @"));
        contactForm.sendMsgButton.click();
        contactForm.requiredFieldsList
            .eq(0)
            .should("be.visible")
            .and("have.text", "Invalid email");
        contactForm.emailInput.should("have.class", "et_contact_error");
        contactForm.emailInput.clear();
    });
});
