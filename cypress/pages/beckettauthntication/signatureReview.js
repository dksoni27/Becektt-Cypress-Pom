class SignatureReviewPage {

  elements = {
    startOrderBtn: () => cy.get('.signBtn > .btn'),
    itemDescription: () => cy.get('[name="item_description"]'),
    fileUpload: () => cy.get('input[title="file input"]'),
    additionalComment: () => cy.get('[name="additional_comment"]'),
    termsCheckbox: () => cy.get('[name="term"]'),
    proceedBtn: () => cy.get('[name="PROCEED"]')
  }

  startOrder() {
    this.elements.startOrderBtn()
      .should('be.visible')
      .click()
  }

  fillOrderDetails(description, fileName, comment) {
    this.elements.itemDescription().type(description)
    this.elements.fileUpload().attachFile(fileName)
    this.elements.additionalComment().type(comment)
    this.elements.termsCheckbox().click()
  }

  proceedToAddress() {
    this.elements.proceedBtn()
      .should('be.visible')
      .click()
  }
}

export default SignatureReviewPage
