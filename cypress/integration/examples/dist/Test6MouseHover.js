/// <reference types="Cypress" />
describe("My First Test", function () {
    it("Mouse Hover", function () {
        cy.wait;
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('.mouse-hover-content').invoke('show'); //Use parent locator of the element which is hidden
        cy.contains('Top').click();
        // cy.contains('Top').click({force: true})  //Use either .invoke method to show the content and click or use {force: true} to ignore the error and click on invisible elements
        cy.url().should('include', 'top');
    });
});

//# sourceMappingURL=Test6MouseHover.js.map
