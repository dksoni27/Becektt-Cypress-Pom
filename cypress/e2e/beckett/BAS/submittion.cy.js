describe('Beckett Authentication SSO', () => {

    beforeEach(() => {
        cy.session('Beckett-Login', () => {
            cy.Login()
        })
    })

    it('Authentication submittion', function () {
        cy.visit('https://www.beckett-authentication.com/')

        cy.get('.submBtn > .btn')
            .should('be.visible')
            .click()


    })


})
