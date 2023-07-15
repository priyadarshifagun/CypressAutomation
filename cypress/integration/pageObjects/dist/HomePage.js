"use strict";
exports.__esModule = true;
var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage.prototype.getNameTextBox = function () {
        return cy.get('input[name="name"]:nth-child(2)');
    };
    HomePage.prototype.getTwoWayBindingEditBox = function () {
        return cy.get('input[name="name"]:nth-child(1)');
    };
    HomePage.prototype.getEmailTextBox = function () {
        return cy.get('input[name="email"]');
    };
    HomePage.prototype.getPasswordTextBox = function () {
        return cy.get('#exampleInputPassword1');
    };
    HomePage.prototype.getCheckBox = function () {
        return cy.get('input#exampleCheck1');
    };
    HomePage.prototype.getGenderDropDown = function () {
        return cy.get('#exampleFormControlSelect1');
    };
    HomePage.prototype.getStudentRadioButton = function () {
        return cy.get('input#inlineRadio1');
    };
    HomePage.prototype.getEntrepreneurRadioButton = function () {
        return cy.get('input#inlineRadio3');
    };
    return HomePage;
}());
exports["default"] = HomePage;

//# sourceMappingURL=HomePage.js.map
