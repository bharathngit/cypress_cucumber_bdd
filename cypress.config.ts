import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  projectId: 'dmrg49',
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor",
        createBundler({
            plugins: [createEsbuildPlugin(config)]
        }));
      return config;
    },
    env: {
      omitFiltered: true,
      filterSpecs: true,

    },
    baseUrl: 'https://s3.eu-west-1.amazonaws.com/odaseva.tech.tests/rand/qa-zpxafg/index.html#',
    supportFile: false,
    fixturesFolder: false,

    watchForFileChanges: true,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    reporter: "mochawesome",
    reporterOptions: {
          "charts":true,
          "overwrite":false,
          "html": true,
          "json": true,
          "reportDir": "./cypress/reports",
          "reportFilename": "mocha-report"
        }
  },
});
