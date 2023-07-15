/// <reference types="Cypress" />

describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        // expect(true).to.equal(true)
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').as('productsLocator')  //Aliasing use .as and @aliasname       
        cy.get('@productsLocator').find('.product').should('have.length', 4)
        cy.get('@productsLocator').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('@productsLocator').find('.product').each(($el, index, $list) => {
            let productName: string = $el.find('h4.product-name').text()
            if(productName.includes('Cashews')){
                cy.wrap($el).find('.product-action button').click()            }
        })
        cy.get('.brand').should('have.text','GREENKART')
        cy.get('.brand').then(function(logoElement){
            cy.log(logoElement.text()) //Prints log in Cypress Runner
            console.log(logoElement.text()) //Prints log on browser Console
            
        })
    })
})
