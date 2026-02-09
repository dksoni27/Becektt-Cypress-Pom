class BcaItemDetailsPage {

  elements = {
    gradedRadio: () => cy.get('#grade_type_graded'),
    gradeCompany: () => cy.get('select[name="grade_company"]'),
    condition: () => cy.get('select[name="grade_card_condition"]'),
    serialStart: () => cy.get('input[name="card_serial_number_start"]'),
    serialEnd: () => cy.get('input[name="card_serial_number_end"]'),
    serialNum: () => cy.get('input[name="serial_num"]'),
    description: () => cy.get('#custom_description'),
    saveButton: () => cy.get('button.btn-blue')
  }

  fillGradedItem(details) {
    this.elements.gradedRadio().click()
    this.elements.gradeCompany().select(details.company)
    this.elements.serialStart().type(details.serialStart)
    this.elements.serialEnd().type(details.serialEnd)
    this.elements.serialNum().type(details.serialNum)
    this.elements.description().type(details.description)
    this.elements.saveButton().click()
  }
}

export default BcaItemDetailsPage
 