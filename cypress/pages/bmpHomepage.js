class BmpHomePage {

  visit() {
    cy.visit('https://marketplace.beckett.com/')
    cy.viewport('macbook-16')
  }

  verifyLoginVisible() {
    cy.get('a[aria-label="Login"]').should('be.visible')
  }

  verifyDefaultRadioChecked() {
    cy.get('input[type="radio"]').should('be.checked')
  }

  searchItem(itemName) {
    cy.get('#siteSearchQuery')
      .should('be.visible')
      .clear()
      .type(itemName)

    cy.get('#search_button_opg')
      .should('be.visible')
      .click()
  }

  verifySearchResult(text) {
    cy.contains('a', text).should('be.visible')
  }

  clickItemTab() {
    cy.contains('a', 'Item')
      .should('be.visible')
      .click()
  }

  applyPriceFilter(from, to) {
    cy.get('input[name="from"]')
      .should('be.visible')
      .clear()
      .type(from)

    cy.get('input[name="to"]')
      .should('be.visible')
      .clear()
      .type(to)

    cy.get('.apply_ranged_filter')
      .should('be.visible')
      .click()
  }

  verifyPriceFilterApplied() {
    cy.contains('a', 'Price').should('be.visible')
  }
}

export default new BmpHomePage()
