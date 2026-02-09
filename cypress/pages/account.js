class AccountPage {

  // ===== Account Section =====
  verifyAccountSection() {
    cy.contains('Account')
  }

  verifyUserEmail(email) {
    cy.contains(email)
  }

  // ===== Profile Section =====
  openProfile() {
    cy.get('ul > :nth-child(2) > .btn')
      .should('be.visible',{timeout: 10000})
      .click()

    cy.contains('Profile')
  }

  clickEditProfile() {
    cy.get('.actions > .btn')
      .should('be.visible')
      .click({timeout: 10000})
  }

  updateProfile(profile) {
    cy.get('[name="first_name"]').clear().type(profile.f_Name)
    cy.get('[name="last_name"]').clear().type(profile.l_Name)
    cy.get('[name="currency"]').select(profile.currency)
    cy.get('[name="gender"]').select(profile.gender)

    // Phone type dropdown (custom dropdown, not select)
    cy.get('.PhoneNumber_phone__odEH2 .dropdown-toggle').click()
    cy.get('.PhoneNumber_phone__odEH2 > .dropdown-menu > :nth-child(1)').click()

    cy.get('[name="dob"]').clear().type(profile.dob)
  }

  saveProfile() {
    cy.get('.position-relative')
      .should('be.visible')
      .click()
  }

  verifyUpdatedProfile(profile) {
    cy.contains(profile.f_Name)
    cy.contains(profile.l_Name)
    cy.contains(profile.dob)
    cy.contains('EUR')
    cy.contains(profile.gender)
  }

  // ===== Subscriptions Section =====
  openSubscriptions() {
    cy.get(':nth-child(3) > .btn > span')
      .should('be.visible')
      .click()
  }

  verifySubscriptions() {
    cy.contains('Subscriptions')
    cy.contains('Total Access Web, Market Data Report and Mobile App')
    cy.contains('Account Balance')
  }
}

export default new AccountPage()
