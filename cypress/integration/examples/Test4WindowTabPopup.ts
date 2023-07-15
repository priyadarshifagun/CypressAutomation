/// <reference types="Cypress" />

describe("My First Test", () => {
  it("New Window, Tab and Popup", () => {
    cy.wait;
    // cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // Alert and Popup
    cy.get("#name").type("Fagoon");
    cy.get("#alertbtn").click();
    // Developer Concept for Browser Events Alert: window:alert
    // Verify text of the Alert
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Hello Fagoon, share this practice page and share your knowledge"
      );
    });
    cy.get("#confirmbtn").click();
    // Developer Concept for Browser Events Popup: window:confirm
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });

    // New Tab - This will open site in same window. Cypress doesnt handle switching to new Tab
    // cy.get("#opentab").then(($elem) => {
    //   $elem[0].removeAttribute("target");
    //   $elem[0].click()
    // }); //Remove Target Attribute from DOM
    cy.get("#opentab").invoke("removeAttr", "target").click();
    // cy.url().should("include", "qaclickacademy");
    // cy.location("href", { timeout: 10000 }).should("include", "qaclickacademy");
    cy.title().should("include","Practice Page")
    cy.url().then((url) => {
      cy.url().should("include", "qaclickacademy");
    });
    cy.go("back");
  });
});
