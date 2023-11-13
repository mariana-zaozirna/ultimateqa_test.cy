import Page from "./Page.js";

class ButtonSuccess extends Page {
    get commentsSection() {
        return cy.xpath('//h1[@id="comments"]');
    }
    get likeButton() {
        return cy.xpath(
            '//div[@class="comment-content clearfix"] //button[@aria-label="Like Button"]',
            { timeout: 10000 },
        );
    }
    get succesMsg() {
        return cy.xpath('//div[@class="wpulike-message wpulike-success"]', {
            timeout: 10000,
        });
    }
    get unlikeMsg() {
        return cy.xpath('//div[@class="wpulike-message wpulike-info"]', {
            timeout: 10000,
        });
    }
}
export default new ButtonSuccess();
