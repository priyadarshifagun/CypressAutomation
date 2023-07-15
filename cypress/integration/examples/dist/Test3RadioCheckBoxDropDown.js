/// <reference types="Cypress" />
describe("My First Test", function () {
    it("RadioButton, CheckBox, DropDowns Dynamic/Static", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        // Checkbox Operations
        // cy.get("#checkBoxOption1")
        //   .check()
        //   .should("be.checked")
        //   .and("have.value", "option1"); //For behavior check use be and for value and other verification use have
        // cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
        // cy.get('input[type="checkbox"]').check(); //Check All checkboxes on page
        // cy.get('input[type="checkbox"]').uncheck(); //Check All checkboxes on page
        // cy.get('input[type="checkbox"]').check(["option2", "option3"]); //Check Selected Checkboxes
        // // Static Dropdown Operations
        // cy.get("#dropdown-class-example").select(1); //Select option using Index -> index start from 1
        // cy.get("#dropdown-class-example")
        //   .select("option3")
        //   .should("have.value", "option3"); //Select option using value
        // // Dynamic Dropdown Operations
        // cy.get("#autocomplete").type("ind");
        // cy.get(".ui-menu-item div").each(($el, index, $elementList) => {
        //   if ($el.text() === "India") {
        //     cy.wrap($el).click();
        //   }
        // });
        // cy.get("#autocomplete").should("have.value", "India");
        // // Hide Show Componenet
        // cy.get('#displayed-text').should('be.visible')
        // cy.get('#hide-textbox').click()
        // cy.get('#displayed-text').should('not.be.visible')
        // cy.get('#show-textbox').click()
        // cy.get('#displayed-text').should('be.visible')
        // // Radio Button Operations
        // cy.get('input[value="radio1"]').click().should('be.checked')
        var envs = Cypress.env();
        cy.log("Current User: ", envs["user1"]);
        console.log("Current User: ", envs["user1"]);
        cy.log("Current User: ", envs["user2"]);
        console.log("Current User: ", envs["user2"]);
        // cy.task("log", process.env["ADMIN_USER"])
    });
});

//# sourceMappingURL=Test3RadioCheckBoxDropDown.js.map
