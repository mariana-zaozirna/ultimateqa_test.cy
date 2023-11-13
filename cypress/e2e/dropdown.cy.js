import homePage from "../pages/Home.page";
import "cypress-real-events/support";

describe('"Learning" dropdown', () => {
    beforeEach(() => {
        cy.visit("https://ultimateqa.com/");
    });
    it('Test_Case_9: "Learning" dropdown ', () => {
        const baseUrl = Cypress.config("baseUrl");
        homePage.learningDropdown.realHover();
        homePage.learningDropdown.should("include.text", "Learning");

        const listTexts = [
            "Free Courses",
            "Selenium Java",
            "Selenium C#",
            "Selenium Resources",
            "Automation Exercises",
        ];
        homePage.subMenuElements.each((elem, i) => {
            cy.wrap(elem)
                .should("be.visible")
                .and("include.text", listTexts[i]);
        });

        homePage.freeCoursesItem.click();
        cy.url().should("eq", "https://courses.ultimateqa.com/collections");
        cy.go(-1);
        cy.wait(1000);

        homePage.learningDropdown.realHover();
        homePage.seleniumJavaItem.should("be.visible").click();
        cy.url().should("eq", "https://academy.ultimateqa.com/java-sdet");
        cy.go(-1);
        cy.wait(1000);

        homePage.learningDropdown.should("be.visible").realHover();
        homePage.seleniumCItem.should("be.visible").click();
        cy.url().should(
            "eq",
            "https://courses.ultimateqa.com/courses/selenium-with-c",
        );
        cy.go(-1);
        cy.wait(1000);

        homePage.learningDropdown.should("be.visible").realHover();
        homePage.seleniumResourcesItem.should("be.visible").click();
        cy.url().should("eq", `${baseUrl}best-selenium-webdriver-resources/`);
        cy.go(-1);
        cy.wait(1000);

        homePage.learningDropdown.should("be.visible").realHover();
        homePage.automationExercisesItem.should("be.visible").click();
        cy.url().should("eq", `${baseUrl}automation/`);
        cy.go(-1);
    });
});
