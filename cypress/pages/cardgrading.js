class CardGrading {

  clickSubmitButton() {
    cy.get('.align-self-center > .btn-primary')
      .should('be.visible')
      .click()
  }

  selectCardGradingService() {
    cy.get('[href="/submit/cards/service"] .button-title')
      .should('be.visible')
      .click()
  }

  closePopup() {
    cy.get('.close').click({force:true})
  }

  selectBaseServiceCard() {
   cy.get('.col-xxl-6 > .osf_flipCard__ayZ2p > .osf_flipCardInner__vL29m > .FrontCard2024_card__t_7pj > .flex-column > .row > :nth-child(1) > .FrontCard2024_content__DVJSe > .py-2').click()
  }

  searchCard(cardName) {
    cy.get('.Input_input__kPl3n > div > .px-4')
      .click()
      .type(cardName)

    cy.get('.overflow-auto > :nth-child(1) > .d-flex')
      .click()
  }

  enterDeclaredValue(value) {
    cy.get('#value1')
      .clear()
      .type(value)
  }

  selectCheckboxAndContinue() {
    cy.get('#check-0-1').check()
    cy.get('.btn-block > .Button_content___KQ5I > span')
      .click()
  }

  fillPersonalDetails(user) {
    cy.get('#firstName').clear().type(user.f_Name)
    cy.get('#lastName').clear().type(user.l_Name)
    cy.get('#email').clear().type(user.email)
    cy.get('#line1').clear().type(user.street_add)
    cy.get('#line2').clear().type(user.street_add)
    cy.get('#phone').clear().type(user.phone.toString())
    cy.get('#city').clear().type(user.city)
    cy.get('#state').select('United States Virgin Islands')
    cy.get('#zipcode').clear().type(user.pin_code)
  }

  acceptAddressConfirmation() {
    cy.get(':nth-child(2) > .form-check-label').click()
    cy.get('.btn-block').click()
  }

  acceptTermsAndContinue() {
    cy.get('#checked-tos').check()
    cy.get('#checked-expiration').check()
    cy.get('#checked-newsletter').check()
    cy.get('.btn-block').click()
  }

  verifyPaymentPage() {
    cy.contains('Add Payment Method')
      .should('be.visible')
  }
}

export default new CardGrading()
