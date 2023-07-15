/// <reference types="Cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../pageObjects/HomePage";
import ProductPage from "../../../pageObjects/ProductPage";

Given("I open ecommerce page", function () {
  cy.visit(`${Cypress.env("url")}/angularpractice/`);
});

When("I add products to cart", () => {
  const productPage = new ProductPage();
  let data;
  cy.fixture("FormData.json").then(function (fData) {
    data = fData;
    console.log(data)
  });
  productPage.getShopLink().click();
  for (let value of data.productName) {
    cy.addProductToCart(value); //Custom Command
  }
  productPage.getCheckOutTab().click();
});

When("I validate total price", () => {
  const productPage = new ProductPage();
  let data;
  let total: number = 0;
  cy.get("table tr td:nth-child(4) strong").each(($el, index, $list) => {
    const amount = $el.text().replace(/[^a-zA-Z0-9]/g, "");
    cy.log(amount);
    total = total + Number(amount);
    // let USDollar = new Intl.NumberFormat("en-IN", {
    //   style: "currency",
    //   currency: "INR",
    // });
    // cy.log(USDollar.format(Number(amount)));
  });
  cy.get("h3 > strong").then((totalText) => {
    expect(totalText.text()).includes(total.toString());
  });
  productPage.getCheckOutButton().click();
});

Then("I place the order", () => {
  const productPage = new ProductPage();
  productPage.getCountryDropDown().type("India");
  productPage.getDisplayedCountry().click();
  productPage.getIAgreeCheckBox().check({ force: true });
  productPage.getPurchaseButton().click();
  productPage.getSuccessMessage().then((textMessage) => {
    const message = textMessage.text();
    expect(message.includes("Success!")).to.be.true;
  });
});

When("I fill the form", () => {
  const homePage = new HomePage();
  homePage.getNameTextBox().type(data.name);
  homePage.getTwoWayBindingEditBox().should("have.value", data.name);
  homePage.getNameTextBox().should("have.attr", "minlength", "2");
  homePage.getEmailTextBox().type(data.email);
  homePage.getPasswordTextBox().type(data.password);
  homePage.getCheckBox().check();
});

When("I verify forms behaviour", () => {
  const homePage = new HomePage();
  homePage
    .getGenderDropDown()
    .select(data.gender)
    .should("have.value", data.gender);
  homePage.getStudentRadioButton().click();
  homePage.getEntrepreneurRadioButton().should("be.disabled");
  return true;
});

Then("I select the shop", () => {
  return true;
});
