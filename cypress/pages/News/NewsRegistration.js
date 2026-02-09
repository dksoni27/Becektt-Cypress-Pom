class NewsRegistrationPage {

  
  openLoginModal() {
    cy.get('li > .login_user')
      .should('be.visible')
      .click()

    cy.contains('LOGIN').should('be.visible')
  }

  openSignup() {
    cy.get('.signup_user')
      .should('be.visible')
      .click()
  }

  fillRegistrationForm(email, username, password) {
    cy.get('[name="regemail"]').type(email, { force: true })
    cy.get('[name="regusername"]').type(username, { force: true })
    cy.get('[name="regpassword"]').type(password, { force: true })
  }

  submitSignup() {
    cy.get('#modelSignup .loginBtn').click()
  }

  verifySignUp(){

  }
}

export default new NewsRegistrationPage;
