"use strict";
exports.__esModule = true;
var ProductPage = /** @class */ (function () {
    function ProductPage() {
    }
    ProductPage.prototype.getShopLink = function () {
        return cy.get('[href="/angularpractice/shop"]');
    };
    ProductPage.prototype.getCheckOutTab = function () {
        return cy.get('.nav-link.btn.btn-primary');
    };
    ProductPage.prototype.getCheckOutButton = function () {
        return cy.get('button.btn.btn-success');
    };
    ProductPage.prototype.getCountryDropDown = function () {
        return cy.get('#country');
    };
    ProductPage.prototype.getDisplayedCountry = function () {
        return cy.get('.suggestions > ul > li > a');
    };
    ProductPage.prototype.getIAgreeCheckBox = function () {
        return cy.get('#checkbox2');
        // return cy.get('label[for="checkbox2"]')
    };
    ProductPage.prototype.getPurchaseButton = function () {
        return cy.get('input[value="Purchase"]');
    };
    ProductPage.prototype.getSuccessMessage = function () {
        return cy.get('div.alert');
    };
    return ProductPage;
}());
exports["default"] = ProductPage;

//# sourceMappingURL=ProductPage.js.map
