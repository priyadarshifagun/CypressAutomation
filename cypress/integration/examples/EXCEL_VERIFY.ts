/// <reference types="Cypress" />
import neatCsv from "neat-csv";
const excelToJson = require("convert-excel-to-json");
const fs = require("fs");
// @ts-ignore

describe("Verify Excel", () => {
  it("Inject Token And Verify Excel", async () => {
    //Call the custom command LoginAPI() to get the token
    var prodText;
    // @ts-ignore
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
    cy.wait(2000)
    cy.get(".ta-results button span").each(($el, index, $list) => {
      if ($el.text().trim() === "India") {
        cy.wrap($el).click();
      }
    });
    cy.get(".action__submit").click();
    cy.get(".hero-primary").then(function (el) {
      expect(el.text().toUpperCase()).to.include("THANKYOU FOR THE ORDER.");
    });
    cy.contains("Click To Download Order Details in Excel").click();
    Cypress.config("fileServerFolder");
    // const result = excelToJson({
    //   source: fs.readFileSync("cypress/downloads/order-invoice_fagun.qa.xlsx"), // fs.readFileSync return a Buffer
    // });
    cy.task(
      "excelToJsonConverter",
      "cypress/downloads/order-invoice_fagun.qa.xlsx"
    ).then(function (result) {
      // @ts-ignore
      console.log(result.data[0]);
      // @ts-ignore
      expect(prodText).to.equal(result.data[1].B)
    });

    cy.readFile("cypress/downloads/order-invoice_fagun.qa.xlsx").then(function(text){
      expect(text).to.include(prodText)
    })

    // Browser(JS Engine) -> JS Code -> Client Side Environment (Front End)
    // Node (Engine) -> JS Code -> Backend applications/environment
    // Node Supports Accessing file system - fs, Database
    // Cypress doesnt support fs and should be configured as tasks => Tasks(fs,db) in config.js/.ts
  });
});
