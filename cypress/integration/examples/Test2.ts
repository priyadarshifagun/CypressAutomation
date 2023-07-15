/// <reference types="Cypress" />

describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        // expect(true).to.equal(true)
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)        
        cy.get('.products').as('productsLocator')  //Aliasing use .as and @aliasname               
        cy.get('@productsLocator').find('.product').each(($el, index, $list) => {
            let productName: string = $el.find('h4.product-name').text()
            if(productName.includes('Cashews')){
                cy.wrap($el).find('.product-action button').click()            }
        })    
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
})
