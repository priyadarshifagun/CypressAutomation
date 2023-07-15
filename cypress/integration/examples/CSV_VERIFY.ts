/// <reference types="Cypress" />
import neatCsv from "neat-csv";

describe("Verify CSV", () => {
  it("Inject Token And Verify CSV", async () => {
    //Call the custom command LoginAPI() to get the token
    var prodText;
    cy.LoginAPI().then(function () {
      cy.visit("https://rahulshettyacademy.com/client", {
        onBeforeLoad: function (window) {
          window.localStorage.setItem("token", Cypress.env("token"));
        },
      });
    });
    cy.get(".card-body button:last-of-type").eq(0).click();
    cy.get(".card-body b")
      .eq(0)
      .then((element) => {
        prodText = element.text();
      });
    cy.get('button[routerlink="/dashboard/cart"]').click();
    cy.contains("Checkout").click();
    cy.get('input[placeholder="Select Country"]').type("Ind");
    cy.get(".ta-results button span").each(($el, index, $list) => {
      if ($el.text().trim() === "India") {
        cy.wrap($el).click();
      }
    });
    cy.get(".action__submit").click();
    cy.get(".hero-primary").then(function (el) {
      expect(el.text().toUpperCase()).to.include("THANKYOU FOR THE ORDER.");
    });
    cy.contains("Click To Download Order Details in CSV").click();
    Cypress.config("fileServerFolder");
    cy.readFile("cypress/downloads/order-invoice_fagun.qa.csv").then(
      async function (text) {
        var csvObj = await neatCsv(text);
        console.log(csvObj);
        var csvProductName = csvObj[0]["Product Name"];
        expect(prodText).to.equal(csvProductName)
      }
    );
  });
});
