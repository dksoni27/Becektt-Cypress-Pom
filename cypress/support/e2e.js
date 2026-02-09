// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-file-upload'
import 'cypress-mailslurp'

Cypress.on('uncaught:exception', (err) => {
  if (
    err.message.includes('googletag') ||
    err.message.includes('Minified React error')
  ) {
    return false
  }
  if (err.message.includes('No reCAPTCHA clients exist')) {
    return false   // ✅ prevents test failure
  }
})


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false prevents Cypress from failing the test
  if (err.message.includes('charCodeAt')) {
    return false
  }
})


Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('postMessage')) {
    return false; // prevents test failure
  }
});
Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('intlTelInput')) {
    return false
  }
})


Cypress.on('uncaught:exception', (err) => {

  // Ignore beacon / analytics related errors
  if (err.message.includes('beaconURL is required')) {
    return false
  }

  // Let other errors fail the test
  return true
})

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('reading \'document\'')) {
    return false   // prevent Cypress from failing the test
  }
})

