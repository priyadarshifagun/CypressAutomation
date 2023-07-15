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
var cypress = require("cypress");
var cypress_1 = require("cypress");
var cypress_cucumber_preprocessor_1 = require("@badeball/cypress-cucumber-preprocessor");
var preprocessor = require("@badeball/cypress-cucumber-preprocessor");
var browserify_1 = require("@badeball/cypress-cucumber-preprocessor/browserify");
function setupNodeEvents(on, config) {
    return __awaiter(this, void 0, Promise, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
                return [4 /*yield*/, cypress_cucumber_preprocessor_1.addCucumberPreprocessorPlugin(on, config)];
                case 1:
                    // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
                    _a.sent();
                    on("file:preprocessor", browserify_1["default"](config, {
                        typescript: require.resolve("typescript")
                    }));
                    // Make sure to return the config object as it might have been modified by the plugin.
                    return [2 /*return*/, config];
            }
        });
    });
}
exports["default"] = cypress_1.defineConfig({
    defaultCommandTimeout: 15000,
    env: {
        url: "https://rahulshettyacademy.com"
    },
    e2e: {
        baseUrl: "https://rahulshettyacademy.com",
        setupNodeEvents: setupNodeEvents,
        // specPattern: 'cypress/integration/examples/*.ts',
        specPattern: "cypress/integration/examples/BDD/*.feature"
    },
    projectId: "5e8n7q",
    retries: {
        runMode: 1
    }
});

//# sourceMappingURL=cypress.config.js.map
