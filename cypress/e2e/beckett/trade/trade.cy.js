describe('Create Trade Flow', () => {
    beforeEach(() => {
        cy.session('Beckett-Login', () => {
            cy.Login()
        })
    })

    it('creates a trade successfully', () => {
        // Given the user has tradable items in their collection
        cy.visit('https://www.beckett.com/users/skoul');
        cy.get(':nth-child(2) > #trade_with_user').click();
        cy.get('.buttons > .from_trader_items_button').click();
        cy.wait(8000);
        cy.get('#\\31 2000143052400 > [title="Add to Trade"]').click()
        cy.get('[aria-describedby="add_to_trade_saving_popup"] > .ui-dialog-titlebar > .ui-button > .ui-button-icon').click()
        cy.get('div.fright > .back_to_trade').click();
        cy.get('#from_trader_no_items > .to_trader_items_button').click()
        cy.wait(8000);
        cy.get('#\\31 2000135838599 > [style="text-align:center;"]').click()
        cy.get('#add_selected_to_trade').click()
        cy.get('[aria-describedby="add_to_trade_saving_popup"] > .ui-dialog-titlebar > .ui-button > .ui-button-icon').click()
        cy.get('div.fright > .back_to_trade').click()
        cy.get('#send_offer_button').click()

        cy.url().should('include', '/trade/index');
        cy.contains('Trade Summary Details').should('be.visible');

    });
});
 
