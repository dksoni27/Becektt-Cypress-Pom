class BcaHome {
    elements = {
        startBcaButton: () =>
            cy.get('.container > .ServiceSlot > .serSec > .sendBtn > .currency_alert')
    }

    visit() {
        cy.visit('/bca')
    }

    startBcaOrder() {
        this.elements.startBcaButton()
            .should('be.visible')
            .click()
    }

    verifyRedirectToAdd() {
        cy.url().should('include', '/bca/add')
    }
}

export default BcaHome
