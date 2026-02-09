const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.beckett.com",
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    chromeWebSecurity: false,

    retries: {
      runMode: 2,
      openMode: 0
    },

    setupNodeEvents(on, config) {
      // ✅ MailSlurp API Key
      config.env.MAILSLURP_API_KEY = process.env.MAILSLURP_API_KEY;
      return config;
    },
  },

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
    reportFilename: "[name]-report",
  },

  env:
  {
    "MAILSLURP_API_KEY": "sk_OnqKX5yrvWIMFGp8_5RR6KqXuiibjSnKF108ZSgkU4VDvl1I2nJQoyWWYTzPLpQBkLBAufIqrhgD67RGx",
    "MAILSLURP_INBOX_ID": "3d54e40c-b1e0-4706-a21b-4477aa7866dc",
    "MAILSLURP_EMAIL": "3d54e40c-b1e0-4706-a21b-4477aa7866dc@mailslurp.biz"
  }


});
