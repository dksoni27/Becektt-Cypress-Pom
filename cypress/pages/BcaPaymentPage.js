class BcaPaymentPage {

  elements = {
    coupon: () => cy.get('#coupon_code'),
    giftCode: () => cy.get('#gift_code'),
    terms: () => cy.get('#terms'),
    paypal: () => cy.get('#checkout_paypal'),
    checkout: () => cy.get('#checkout')
  }

  verifyPaymentPage() {
    this.elements.coupon().should('be.visible')
    this.elements.giftCode().should('be.visible')
    cy.contains('Agree to Terms and Disclaimer').should('be.visible')
  }

  acceptTerms() {
    this.elements.terms().click()
  }

  checkout() {
    this.elements.checkout().click()
  }
}

export default BcaPaymentPage
