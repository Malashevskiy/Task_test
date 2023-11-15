module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },

  "reporter": "mochawesome",
  "reporterOptions": {
  "reportDir": "cypress/reports",
  "overwrite": false,
  "html": false,
  "json": true
  }
};


