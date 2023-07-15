/// <reference types="Cypress" />
describe('My First Test', function () {
    it('Does not do much!', function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        // expect(true).to.equal(true)
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.products').as('productsLocator'); //Aliasing use .as and @aliasname               
        cy.get('@productsLocator').find('.product').each(function ($el, index, $list) {
            var productName = $el.find('h4.product-name').text();
            if (productName.includes('Cashews')) {
                cy.wrap($el).find('.product-action button').click();
            }
        });
        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();
    });
});

//# sourceMappingURL=Test2.js.map
