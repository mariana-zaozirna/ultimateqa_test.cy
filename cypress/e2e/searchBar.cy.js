import automationPage from "../pages/Automation.page";
import searchResultsPage from "../pages/SearchResults.page";
import { faker } from "@faker-js/faker";

describe("Search", () => {
    beforeEach(() => {
        cy.visit("https://ultimateqa.com/automation/");
    });
    it("Test_Case_7:Search bar results", () => {
        automationPage.searchBtn.click();
        automationPage.searchContainer.should("be.visible");
        automationPage.searchInput.should("be.focused");
        const expectedPlaceholderText = "Search …";
        automationPage.searchInput.should(
            "have.attr",
            "placeholder",
            expectedPlaceholderText,
        );
        automationPage.searchInput.type("automation");
        automationPage.searchInput.type("{enter}");

        searchResultsPage.allTitles.each((element) => {
            cy.wrap(element.text()).then((titleText) => {
                expect(titleText.toLowerCase()).to.include("automation");
            });
        });
    });
    it("Test_Case_8: Restoring search query in Search bar ", () => {
        automationPage.searchBtn.click();
        automationPage.searchContainer.should("be.visible");
        automationPage.searchInput.should("be.focused");
        const fakeText = faker.lorem.sentence();
        automationPage.searchInput.type(fakeText);
        automationPage.closeSearchButton.click();
        automationPage.searchBtn.click();
        automationPage.searchInput.invoke("val").should("eq", fakeText);
    });
});
