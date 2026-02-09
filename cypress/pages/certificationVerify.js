class CertificateVerifyPage {

  openVerificationPage() {
    cy.get('.navbar-toggler-icon').click()
    cy.get('.Layout_navbarDropdown__j6gdY > .dropdown-toggle').click()
    cy.get('.dropdown-menu > [href="/grading"]').click()
  }

  clickVerifyButton() {
    cy.get('.VerifySN2_verify__MI3JL > .content > .btn')
      .should('be.visible')
      .click()
  }

  enterCertificateNumber(certNumber) {
    cy.get('.field > .Input_input__kPl3n > div > .form-control')
      .should('be.visible')
      .clear()
      .type(certNumber)
  }

  selectCertificateType(certType) {
    cy.contains('label', certType)
      .should('be.visible')
      .click()
  }

  submitVerification() {
    cy.get('.field > .btn > .Button_content___KQ5I > span')
      .click()
  }

  verifyResultPage(certNumber) {
    cy.get('.cert > .title').should('be.visible')
    cy.get('.details > .title').should('be.visible')
    cy.get('.cert > .number')
      .should('contain.text', certNumber)
  }
}

export default new CertificateVerifyPage()
