class popReprot {
    openPopReport() {
        cy.contains('Pop Report')
            .should('be.visible')
            .click()
    }

    selectSport(sportName) {
        cy.get('#sport_id')
            .should('be.visible')
            .select(sportName)
    }
    enterSetName(setName) {
        cy.get('#set_name')
            .should('be.visible')
            .clear()
            .type(setName)
    }
    enterPlayerName(playerName) {
        cy.get('#player_name')
            .should('be.visible')
            .clear()
            .type(playerName)
    }
    clickSearch() {
        cy.get('input[name="search"]')
            .should('be.visible')
            .click()
    }

    verifyFirstResult(expectedText) {
        cy.get('tbody > :nth-child(1) > :nth-child(5) > a')
            .should('contain.text', expectedText)
    }

    verifySpecificCard(cardName) {
        cy.contains('a', cardName)
            .should('be.visible')
    }

    clickViewAllGrades() {
        cy.get('input[name="ViewAllGrades"]')
            .should('be.visible')
            .click()
    }
    
}

export default new popReprot()
