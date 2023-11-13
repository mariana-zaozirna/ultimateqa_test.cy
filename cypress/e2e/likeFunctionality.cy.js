import simpleHTMLElemPage from "../pages/SimpleHTMLElem.page";
import buttonSuccessPage from "../pages/Button.success.page";

describe("Contact us Form", () => {
    beforeEach(() => {
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
    });
    it('Test_Case_6:"Like" button functionality', () => {
        simpleHTMLElemPage.clickButton.should("be.visible");
        simpleHTMLElemPage.clickButton.click();
        const baseUrl = Cypress.config("baseUrl");
        cy.url().should("eq", `${baseUrl}button-success/`);
        buttonSuccessPage.commentsSection
            .should("be.visible")
            .and("contain.text", "Comments");
        buttonSuccessPage.likeButton.eq(0).click();
        buttonSuccessPage.succesMsg
            .should("be.visible")
            .and("have.text", "Thanks! You Liked This.");
        buttonSuccessPage.likeButton
            .eq(0)
            .should("have.class", "wp_ulike_btn_is_active")
            .and("have.class", "image-unlike");
        buttonSuccessPage.likeButton.eq(0).click();
        buttonSuccessPage.unlikeMsg
            .should("be.visible")
            .and("have.text", "Sorry! You unliked this.");
    });
});
