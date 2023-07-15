/// <reference types="Cypress" />

describe("My First Test", () => {
  Cypress.on("fail", (err, runnable) => {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
    console.log(runnable);
    return false;
  });

  it("Child Window", () => {
    cy.wait;
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#opentab").then((element) => {
      var hrefURL = element.prop("href");
      cy.visit(hrefURL);

      // cy.origin is used to perform the operation on new opened domain URL
      // cy.origin(hrefURL, () => {
      //All the operation should be coded under this block for new opened URL with different domain
      cy.get('div.sub-menu-bar a[href="about.html"]', {timeout: 5000}).click();
      // })
      cy.origin(hrefURL, () => {
        //All the operation should be coded under this block for new opened URL with different domain
        cy.get('div.sub-menu-bar a[href="about.html"]').click();
      });
    });
  });
});
