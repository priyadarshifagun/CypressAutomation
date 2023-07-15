"use strict";
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
exports.__esModule = true;
require("cypress-iframe");
describe("My First Test", function () {
    it("Child Window", function () {
        cy.wait;
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //To work with iframe use method frameLoaded 
        cy.frameLoaded("#courses-iframe"); //Load ifram into cy object
        cy.iframe().find('a[href="mentorship"]').eq(0).click(); //Switch to iframe and click on link
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2);
    });
});

//# sourceMappingURL=Test8Frames.js.map
