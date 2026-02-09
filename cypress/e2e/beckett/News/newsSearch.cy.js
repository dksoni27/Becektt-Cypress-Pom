describe('News Search', () => {

    beforeEach(() => {
        cy.fixture('users').as('user')
        cy.visit('/news', { timeout: 30000 })
        cy.contains('Accept All Cookies')
            .click({ force: true })
    })

    it('News Search', function () {
        cy.get('#ajax-form-search > .fa')
            .should('be.visible').click()

        cy.get('[name="s"]')
            .should('be.visible')
            .type(this.user.news.news1 +'{enter}')

        cy.contains('2025 Topps Royalty UFC checklist,')
            .should('be.visible')


    });

})
