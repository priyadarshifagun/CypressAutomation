/// <reference types="Cypress" />
describe("My First Test", function () {
    it("New Window, Tab and Popup", function () {
        cy.wait;
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('table[name="courses"] tr td:nth-child(2)').each(function ($el, index, $list) {
            var courseName = $el.text();
            if (courseName.includes('Python')) {
                // $el.next
                cy.get('table[name="courses"] tr td:nth-child(2)').eq(index).next().then(function (price) {
                    cy.log(price.text());
                    expect(price.text()).to.equal('25');
                });
            }
        });
    });
});

//# sourceMappingURL=Test5WebTables.js.map
