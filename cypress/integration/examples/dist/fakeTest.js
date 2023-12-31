/// <reference types="Cypress" />
describe("Fake Test", function () {
    it("Modify The Response Body", function () {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
        cy.intercept({
            method: "GET",
            url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
        }, {
            statusCode: 200,
            body: [
                {
                    book_name: "null",
                    isbn: "SPY40",
                    aisle: "2529857"
                },
            ]
        }).as("bookResponse");
        cy.get(".btn.btn-primary").click();
        cy.wait("@bookResponse");
        cy.get("p").should("have.text", "Oops only 1 Book available");
    });
    it("Modify The Lenght Of Response Array", function () {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
        cy.intercept({
            method: "GET",
            url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
        }, {
            statusCode: 200,
            body: [
                {
                    book_name: "null",
                    isbn: "SPY40",
                    aisle: "2529857"
                },
            ]
        }).as("bookResponse");
        cy.get(".btn.btn-primary").click();
        cy.wait("@bookResponse").then(function (_a) {
            var request = _a.request, response = _a.response;
            cy.get(".table.table-dark tr").should("have.length", response.body.length + 1);
        });
        cy.get("p").should("have.text", "Oops only 1 Book available");
    });
    it("Modify The Request Header", function () {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
        cy.intercept("GET", "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty", function (req) {
            req.url =
                "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra";
            req["continue"](function (res) {
                expect(res.statusCode).to.equal(404);
            });
        }).as("dummyURL");
        cy.get(".btn.btn-primary").click();
        cy.wait("@dummyURL");
    });
    it("Basic API Testing", function () {
        cy.request("POST", "http://216.10.245.166/Library/Addbook.php", {
            name: "Learn Appium Automation with Java",
            isbn: "bcsdd",
            aisle: "2233",
            author: "John Lowe"
        }).then(function (res) {
            expect(res.status).to.equal(200);
            expect(res.body).to.have.property("Msg", "successfully added");
        });
    });
});

//# sourceMappingURL=fakeTest.js.map
