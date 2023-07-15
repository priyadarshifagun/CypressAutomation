"use strict";
/// <reference types="Cypress" />
exports.__esModule = true;
var HomePage_1 = require("../pageObjects/HomePage");
var ProductPage_1 = require("../pageObjects/ProductPage");
describe("Cypress Automation Framework", function () {
    var data;
    before(function () {
        cy.fixture("FormData").then(function (fData) {
            data = fData;
        });
    });
    it("Fill the Form", function () {
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        var homePage = new HomePage_1["default"]();
        homePage.getNameTextBox().type(data.name);
        homePage.getTwoWayBindingEditBox().should("have.value", data.name);
        homePage.getNameTextBox().should("have.attr", "minlength", "2");
        homePage.getEmailTextBox().type(data.email);
        homePage.getPasswordTextBox().type(data.password);
        homePage.getCheckBox().check();
        homePage
            .getGenderDropDown()
            .select(data.gender)
            .should("have.value", data.gender);
        homePage.getStudentRadioButton().click();
        homePage.getEntrepreneurRadioButton().should("be.disabled");
        // cy.pause()   // For Debugging
        // cy.debug()   // For Debugging
    });
    it("Shop The Phones - Custom Command", function () {
        Cypress.config("defaultCommandTimeout", 6000);
        var productPage = new ProductPage_1["default"]();
        cy.visit(Cypress.env('url') + "/angularpractice/");
        productPage.getShopLink().click();
        for (var _i = 0, _a = data.productName; _i < _a.length; _i++) {
            var value = _a[_i];
            cy.addProductToCart(value); //Custom Command
        }
        productPage.getCheckOutTab().click();
        var total = 0;
        cy.get("table tr td:nth-child(4) strong").each(function ($el, index, $list) {
            var amount = $el.text().replace(/[^a-zA-Z0-9]/g, '');
            cy.log(amount);
            total = total + Number(amount);
            // let USDollar = new Intl.NumberFormat("en-IN", {
            //   style: "currency",
            //   currency: "INR",
            // });
            // cy.log(USDollar.format(Number(amount)));
        });
        cy.get('h3 > strong').then(function (totalText) {
            expect(totalText.text()).includes(total.toString());
        });
        productPage.getCheckOutButton().click();
        productPage.getCountryDropDown().type("India");
        productPage.getDisplayedCountry().click();
        productPage.getIAgreeCheckBox().check({ force: true });
        productPage.getPurchaseButton().click();
        productPage.getSuccessMessage().then(function (textMessage) {
            var message = textMessage.text();
            expect(message.includes("Success!")).to.be["true"];
        });
    });
});

//# sourceMappingURL=Test9Framework.js.map
