/// <reference types="Cypress" />
describe("JWT Session Token", function () {
    it("Inject Token To Local Storage Of Browser", function () {
        //Call the custom command LoginAPI() to get the token
        cy.LoginAPI().then(function () {
            cy.visit("https://rahulshettyacademy.com/client", {
                onBeforeLoad: function (window) {
                    window.localStorage.setItem("token", Cypress.env("token"));
                }
            });
        });
    });
});

//# sourceMappingURL=JWT.js.map
