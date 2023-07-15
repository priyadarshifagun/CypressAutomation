class HomePage{
    
    getNameTextBox(){
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getTwoWayBindingEditBox(){
        return cy.get('input[name="name"]:nth-child(1)')
    }

    getEmailTextBox(){
        return cy.get('input[name="email"]')
    }

    getPasswordTextBox(){
        return cy.get('#exampleInputPassword1')
    }

    getCheckBox(){
        return cy.get('input#exampleCheck1')
    }

    getGenderDropDown(){
        return cy.get('#exampleFormControlSelect1')
    }

    getStudentRadioButton(){
        return cy.get('input#inlineRadio1')
    }

    getEntrepreneurRadioButton(){
        return cy.get('input#inlineRadio3')
    }

}

export default HomePage;