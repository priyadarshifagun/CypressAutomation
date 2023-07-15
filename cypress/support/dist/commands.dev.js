"use strict";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('addProductToCart', function (productName) {
  cy.get('h4.card-title').each(function ($el, index, $list) {
    var mobileModel = $el.text();

    if (mobileModel.includes(productName)) {
      // $el.next
      cy.get('button.btn.btn-info').eq(index).click();
    }
  });
}); //Create the custom command LoginAPI which will get the login token and store in env variable

Cypress.Commands.add('LoginAPI', function () {
  cy.request('POST', 'https://rahulshettyacademy.com/api/ecom/auth/login', {
    "userEmail": "fagun.qa@gmail.com",
    "userPassword": "Newuser@1234"
  }).then(function (res) {
    expect(res.status).to.equal(200);
    Cypress.env('token', res.body.token);
  });
});
//# sourceMappingURL=commands.dev.js.map
