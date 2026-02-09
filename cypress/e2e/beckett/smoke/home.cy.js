describe('Beckett Home Page', () => {

  it('should open Beckett website', () => {
    cy.visit('/')
    cy.title().should('contain', 'Beckett')
  })

})