"use strict"; /// <reference types="Cypress" />

exports.__esModule = true;

var cypress_cucumber_preprocessor_1 = require("@badeball/cypress-cucumber-preprocessor");

var HomePage_1 = require("../../../pageObjects/HomePage");

var ProductPage_1 = require("../../../pageObjects/ProductPage");

cypress_cucumber_preprocessor_1.Given("I open ecommerce page", function () {
  cy.visit(Cypress.env("url") + "/angularpractice/");
});
cypress_cucumber_preprocessor_1.When("I add products to cart", function () {
  var productPage = new ProductPage_1["default"]();
  var data;
  cy.fixture("FormData.json").then(function (fData) {
    data = fData;
    console.log(data);
  });
  productPage.getShopLink().click();

  for (var _i = 0, _a = data.productName; _i < _a.length; _i++) {
    var value = _a[_i];
    cy.addProductToCart(value); //Custom Command
  }

  productPage.getCheckOutTab().click();
});
cypress_cucumber_preprocessor_1.When("I validate total price", function () {
  var productPage = new ProductPage_1["default"]();
  var data;
  var total = 0;
  cy.get("table tr td:nth-child(4) strong").each(function ($el, index, $list) {
    var amount = $el.text().replace(/[^a-zA-Z0-9]/g, "");
    cy.log(amount);
    total = total + Number(amount); // let USDollar = new Intl.NumberFormat("en-IN", {
    //   style: "currency",
    //   currency: "INR",
    // });
    // cy.log(USDollar.format(Number(amount)));
  });
  cy.get("h3 > strong").then(function (totalText) {
    expect(totalText.text()).includes(total.toString());
  });
  productPage.getCheckOutButton().click();
});
cypress_cucumber_preprocessor_1.Then("I place the order", function () {
  var productPage = new ProductPage_1["default"]();
  productPage.getCountryDropDown().type("India");
  productPage.getDisplayedCountry().click();
  productPage.getIAgreeCheckBox().check({
    force: true
  });
  productPage.getPurchaseButton().click();
  productPage.getSuccessMessage().then(function (textMessage) {
    var message = textMessage.text();
    expect(message.includes("Success!")).to.be["true"];
  });
});
cypress_cucumber_preprocessor_1.When("I fill the form", function () {
  var homePage = new HomePage_1["default"]();
  homePage.getNameTextBox().type(data.name);
  homePage.getTwoWayBindingEditBox().should("have.value", data.name);
  homePage.getNameTextBox().should("have.attr", "minlength", "2");
  homePage.getEmailTextBox().type(data.email);
  homePage.getPasswordTextBox().type(data.password);
  homePage.getCheckBox().check();
});
cypress_cucumber_preprocessor_1.When("I verify forms behaviour", function () {
  var homePage = new HomePage_1["default"]();
  homePage.getGenderDropDown().select(data.gender).should("have.value", data.gender);
  homePage.getStudentRadioButton().click();
  homePage.getEntrepreneurRadioButton().should("be.disabled");
  return true;
});
cypress_cucumber_preprocessor_1.Then("I select the shop", function () {
  return true;
});
//# sourceMappingURL=eCommStepDef.dev.js.map
