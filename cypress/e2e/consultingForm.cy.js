import consultingPage from "../pages/Consulting.page";
import { faker } from "@faker-js/faker";

describe('"Consulting" Form', () => {
    beforeEach(() => {
        cy.visit("https://ultimateqa.com/consulting/");
    });

    it('TestCase_10:Submitting "Consulting" form with empty "Name" field', () => {
        consultingPage.consultingTitle.scrollIntoView();
        consultingPage.consultingTitle
            .should("be.visible")
            .and(
                "have.text",
                "Unlock Your Automation Potential with a FREE Framework Assessment!",
            );
        const listTexts = [
            "Name ",
            "Email ",
            "Job Title ",
            "Company ",
            "Comment or Message ",
        ];
        consultingPage.allFormLabels.each((elem, i) => {
            cy.wrap(elem)
                .should("be.visible")
                .and("include.text", listTexts[i]);
        });
        consultingPage.nameInput.should("be.empty");
        consultingPage.emailInput.type(faker.internet.email());
        consultingPage.jobTitleInput.type(faker.person.jobTitle());
        consultingPage.companyInput.type(faker.company.name());
        consultingPage.messageInput.type(faker.lorem.sentence());
        consultingPage.submitButton.click();
        consultingPage.nameInput
            .should("be.visible")
            .and("have.class", "wpforms-error");
        consultingPage.nameErrorMsg.should(
            "have.text",
            "This field is required.",
        );
    });
});
