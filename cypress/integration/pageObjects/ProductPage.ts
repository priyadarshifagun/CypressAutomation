class ProductPage{
    
    getShopLink(){
        return cy.get('[href="/angularpractice/shop"]')
    }

    getCheckOutTab(){
        return cy.get('.nav-link.btn.btn-primary')
    }

    getCheckOutButton(){
        return cy.get('button.btn.btn-success')
    }

    getCountryDropDown(){
        return cy.get('#country')
    }

    getDisplayedCountry(){
        return cy.get('.suggestions > ul > li > a')
    }

    getIAgreeCheckBox(){
        return cy.get('#checkbox2')
        // return cy.get('label[for="checkbox2"]')
    }

    getPurchaseButton(){
        return cy.get('input[value="Purchase"]')
    }

    getSuccessMessage(){
        return cy.get('div.alert')
    }

}

export default ProductPage;