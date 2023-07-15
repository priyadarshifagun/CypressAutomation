"use strict";

/// <reference types="Cypress" />
describe("Cypress Automation Framework", function () {
  var data;
  before(function () {
    cy.fixture('example').then(function (fdata) {
      data = data;
    });
  });
  it("Fill the Form", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get('input[name="name"]:nth-child(2)').type(data.name);
    cy.get('input[name="email"]').type(data.email);
    cy.get('#exampleInputPassword1').type(data.password);
    cy.get('input#exampleCheck1').check();
    cy.get("#exampleFormControlSelect1").select(data.gender).should("have.value", "Male");
    cy.get('input#inlineRadio1').click();
  });
});
//# sourceMappingURL=Test9Framework copy.dev.js.map
