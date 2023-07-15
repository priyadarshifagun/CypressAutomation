/// <reference types="Cypress" />

import HomePage from "../pageObjects/HomePage";
import ProductPage from "../pageObjects/ProductPage";

describe("Cypress Automation Framework", () => {
  let data;
  before(function () {
    cy.fixture("FormData").then(function (fData) {
      data = fData;
    });
  });

  it("Fill the Form", () => {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    const homePage = new HomePage();
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

  it("Shop The Phones - Custom Command", () => {
    Cypress.config("defaultCommandTimeout", 6000);
    const productPage = new ProductPage();
    cy.visit(`${Cypress.env('url')}/angularpractice/`);
    productPage.getShopLink().click();
    for (let value of data.productName) {
      cy.addProductToCart(value); //Custom Command
    }
    productPage.getCheckOutTab().click();
    let total: number = 0
    cy.get("table tr td:nth-child(4) strong").each(($el, index, $list) => {
      const amount = $el.text().replace(/[^a-zA-Z0-9]/g, '');
      cy.log(amount)      
      total = total + Number(amount)
      // let USDollar = new Intl.NumberFormat("en-IN", {
      //   style: "currency",
      //   currency: "INR",
      // });
      // cy.log(USDollar.format(Number(amount)));
    });
    cy.get('h3 > strong').then((totalText)=>{
      expect(totalText.text()).includes(total.toString())
    })
    productPage.getCheckOutButton().click();
    productPage.getCountryDropDown().type("India");
    productPage.getDisplayedCountry().click();
    productPage.getIAgreeCheckBox().check({ force: true });
    productPage.getPurchaseButton().click();
    productPage.getSuccessMessage().then((textMessage) => {
      const message = textMessage.text();
      expect(message.includes("Success!")).to.be.true;
    });
  });
});
