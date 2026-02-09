class BeckettHomePage {

  elements = {
    hamburgerMenu: () => cy.get('.navbar-toggler-icon'),
    authLink: () =>
      cy.get('.me-auto > [href="https://www.beckett-authentication.com/"]')
  }

  acceptCookies() {
    cy.contains('Accept All Cookies')
      .click({ force: true })
  }

  visitHome() {
    cy.visit('https://www.beckett.com')
  }

  visitAccount() {
    cy.visit('https://www.beckett.com/account')
  }


  visitLogin() {
    cy.visit('https://www.beckett.com/login')
  }

  verifyAlreadyLoggedIn() {
    cy.url().should('not.include', '/login')
    cy.contains('Logout', { timeout: 10000 }).should('be.visible')
  }

  openAuthSiteViaMenu() {
    this.elements.hamburgerMenu()
      .should('be.visible')
      .click()

    this.elements.authLink()
      .should('be.visible')
      .invoke('removeAttr', 'target') // force same tab
      .click()
  }
}

export default new BeckettHomePage
