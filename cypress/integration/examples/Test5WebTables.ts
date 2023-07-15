/// <reference types="Cypress" />

describe("My First Test", () => {
  it("New Window, Tab and Popup", () => {
    cy.wait;
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('table[name="courses"] tr td:nth-child(2)').each(
      ($el, index, $list) => {
        let courseName: string = $el.text();
        if (courseName.includes('Python')){
          // $el.next
          cy.get('table[name="courses"] tr td:nth-child(2)').eq(index).next().then(function(price){  //get the nth element using eq and next sibling using next method
            cy.log(price.text())
            expect(price.text()).to.equal('25')
          }) 
        }
      }
    );
  });
});
