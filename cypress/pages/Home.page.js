import Page from "./Page.js";

class HomePage extends Page {
    get learningDropdown() {
        return cy.get("#menu-home-page-menu .et_pb_menu_page_id-217437");
    }
    get subMenuElements() {
        return cy.get("#menu-home-page-menu .et_pb_menu_page_id-217437 li");
    }
    get freeCoursesItem() {
        return cy.get("#menu-home-page-menu .menu-item-216155");
    }
    get seleniumJavaItem() {
        return cy.get("#menu-home-page-menu .menu-item-216153");
    }
    get seleniumCItem() {
        return cy.get("#menu-home-page-menu .menu-item-216154");
    }
    get seleniumResourcesItem() {
        return cy.get("#menu-home-page-menu .menu-item-6838");
    }
    get automationExercisesItem() {
        return cy.get("#menu-home-page-menu .menu-item-587");
    }
    get aboutDropdown() {
        return cy.get(".et-menu-nav .menu-item-217539");
    }
    get subMenuAbout() {
        return cy.get(".et-menu-nav .menu-item-217539 li");
    }
    get contactUsItem() {
        return cy.get(".et-menu-nav .menu-item-217444");
    }
    get linkedInitem() {
        return cy.get(".et-menu-nav .menu-item-217647");
    }
    get youTubeItem() {
        return cy.get(".et-menu-nav .menu-item-217648");
    }

    open() {
        super.open("");
    }
}
export default new HomePage();
