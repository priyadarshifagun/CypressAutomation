"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var excelToJson = require("convert-excel-to-json");
var fs = require("fs");
// @ts-ignore
describe("Verify Excel", function () {
    it("Inject Token And Verify Excel", function () { return __awaiter(void 0, void 0, void 0, function () {
        var prodText;
        return __generator(this, function (_a) {
            // @ts-ignore
            cy.LoginAPI().then(function () {
                cy.visit("https://rahulshettyacademy.com/client", {
                    onBeforeLoad: function (window) {
                        window.localStorage.setItem("token", Cypress.env("token"));
                    }
                });
            });
            cy.get(".card-body button:last-of-type").eq(0).click();
            cy.get(".card-body b")
                .eq(0)
                .then(function (element) {
                prodText = element.text();
            });
            cy.get('button[routerlink="/dashboard/cart"]').click();
            cy.contains("Checkout").click();
            cy.get('input[placeholder="Select Country"]').type("Ind");
            cy.wait(2000);
            cy.get(".ta-results button span").each(function ($el, index, $list) {
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
            cy.task("excelToJsonConverter", "cypress/downloads/order-invoice_fagun.qa.xlsx").then(function (result) {
                // @ts-ignore
                console.log(result.data[0]);
                // @ts-ignore
                expect(prodText).to.equal(result.data[1].B);
            });
            cy.readFile("cypress/downloads/order-invoice_fagun.qa.xlsx").then(function (text) {
                expect(text).to.include(prodText);
            });
            return [2 /*return*/];
        });
    }); });
});

//# sourceMappingURL=EXCEL_VERIFY.js.map
