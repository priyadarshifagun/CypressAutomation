"use strict";

var cypress = require("cypress");

var _require = require("cypress"),
    defineConfig = _require.defineConfig;

var preprocessor = require("@badeball/cypress-cucumber-preprocessor");

var browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

function setupNodeEvents(on, config) {
  return regeneratorRuntime.async(function setupNodeEvents$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(preprocessor.addCucumberPreprocessorPlugin(on, config));

        case 2:
          on("file:preprocessor", browserify["default"](config)); // Make sure to return the config object as it might have been modified by the plugin.

          return _context.abrupt("return", config);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  env: {
    url: "https://rahulshettyacademy.com"
  },
  e2e: {
    setupNodeEvents: setupNodeEvents,
    // specPattern: 'cypress/integration/examples/*.ts',
    specPattern: 'cypress/integration/examples/BDD/*.feature'
  },
  projectId: "5e8n7q",
  retries: {
    runMode: 1
  }
});
//# sourceMappingURL=cypress.config.dev.js.map
