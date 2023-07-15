/// <reference types="Cypress" />

describe("DB Connection", () => {
  it("Conenct To Azure SQL Server and Database", async () => {
    cy.sqlServer("Select * from Persons").then(function (result) {
        cy.log(result[0][1])
        console.log(result[0])
    });
  });
});
