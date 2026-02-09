class AuthHomePage {

    elements = {
        servicesMenu: () => cy.get('#myNavbar > .nav > :nth-child(1) > a'),
        signatureReviewLink: () => cy.get(':nth-child(9) > a > span')
    }

    visit() {
        cy.visit('https://www.beckett-authentication.com/')
    }

    openSignatureReview() {
        this.elements.servicesMenu()
            .should('be.visible')
            .click()

        this.elements.signatureReviewLink()
            .should('be.visible')
            .click()
    }

    verifySsoLoggedIn() {
        cy.origin('https://www.beckett-authentication.com', () => {
            cy.contains('Login').should('not.exist')
        })
    }
}

export default AuthHomePage
