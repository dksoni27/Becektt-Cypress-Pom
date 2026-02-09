class CheckoutPage {

  elements = {
    addressSelect: () =>
      cy.get('#address_block_12102691 > .addressBox > .addressHad > .slcBox'),
    continueBtn: () => cy.get('.step2Btn > .btn-primary'),
    payNowButton: () => cy.get('#submit-button')
  }

  selectAddressAndContinue() {
    this.elements.addressSelect()
      .should('be.visible')
      .click()

    this.elements.continueBtn()
      .should('be.visible')
      .click()
  }

  verifyPayNowVisible() {
    this.elements.payNowButton()
      .should('contain.text', 'Pay Now')
  }
}

export default CheckoutPage
