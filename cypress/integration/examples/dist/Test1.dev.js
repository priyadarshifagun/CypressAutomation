"use strict";

/// <reference types="Cypress" />
describe('My First Test', function () {
  it('Does not do much!', function () {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/'); // expect(true).to.equal(true)

    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
    cy.get('.product:visible').should('have.length', 4);
    cy.get('.products').find('.product').should('have.length', 4);
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
    cy.get('.products').find('.product').each(function ($el, index, $list) {});
  });
});
//# sourceMappingURL=Test1.dev.js.map
