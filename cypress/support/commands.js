// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Chainable safeType command


// Login command
Cypress.Commands.add('Login', () => {
  cy.fixture('users').then((users) => {
    const user = users.validUser

    cy.visit('/login')
    cy.get('#loginEmail').type(user.email)
    cy.get('#loginPassword').type(user.password)
    cy.get('#btn_login').click()
  })
})

//email generet 
Cypress.Commands.add('generatePlusEmail', (prefix, domain) => {
  const random4Digit = Math.floor(1000 + Math.random() * 9000);
  return cy.wrap(`${prefix}+${random4Digit}@${domain}`);
});


//otp getting function 
const { MailSlurp } = require('mailslurp-client');

Cypress.Commands.add('getOtpFromMailSlurp', (inboxId) => {
  const mailslurp = new MailSlurp({
    apiKey: Cypress.env('MAILSLURP_API_KEY'),
  });


  return cy.wrap(
    mailslurp.waitForLatestEmail(inboxId, 60000, true)
      .then(email => {
        const otpMatch = email.body.match(/OTP for Password Reset is:\s*(\d{6})/); 
        
        if (!otpMatch) {
          throw new Error('OTP not found in email');
        }
        return otpMatch[1];
      })
  );
});







