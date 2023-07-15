const cypress = require("cypress");
import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
import browserify from "@badeball/cypress-cucumber-preprocessor/browserify";
const sqlServer = require("cypress-sql-server");
const excelToJson = require("convert-excel-to-json");
const fs = require("fs");

// async function setupNodeEvents(
//   on: Cypress.PluginEvents,
//   config: Cypress.PluginConfigOptions
// ): Promise<Cypress.PluginConfigOptions> {
//   // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
//   await addCucumberPreprocessorPlugin(on, config);
//   on(
//     "file:preprocessor",
//     browserify(config, {
//       typescript: require.resolve("typescript"),
//     })
//   );

//   tasks = sqlServer.loadDBPlugin(config.db);
//   on("task", tasks);

//   // Make sure to return the config object as it might have been modified by the plugin.
//   return config;
// }

async function setupNodeEvents(on, config) {
  config.db = {
    userName: "cypressadmin",
    password: "Newuser@1234",
    server: "azure-cypress-sql-server.database.windows.net",
    options: {
      database: "AzureCypressSQLDatabase",
      encrypt: true,
      rowCollectionOnRequestCompletion: true,
    },
  };
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    browserify(config, {
      typescript: require.resolve("typescript"),
    })
  );

  const tasks = sqlServer.loadDBPlugin(config.db);
  on("task", tasks);

  on("task", {
    excelToJsonConverter(filePath) {
      const result = excelToJson({
        source: fs.readFileSync(
          "cypress/downloads/order-invoice_fagun.qa.xlsx"
        ), // fs.readFileSync return a Buffer
      });
      return result
    },
  });

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  defaultCommandTimeout: 15000,
  env: {
    url: "https://rahulshettyacademy.com",
    user1:"",
    user2:"",
    user3:"",
    user4:"",
  },
  e2e: {
    baseUrl: "https://rahulshettyacademy.com",
    setupNodeEvents,
    // specPattern: 'cypress/integration/examples/*.ts',
    specPattern: "cypress/integration/examples/*.ts",
  },
  projectId: "5e8n7q",
  retries: {
    runMode: 0,
  },
});
