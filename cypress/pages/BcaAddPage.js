class BcaAddPage {
    elements = {
        serviceTerm: () => cy.get('select[name="service_term"]'),
        searchInput: () => cy.get('[name="search_text"]'),
        applyFilter: ()=> cy.get('[title="North Carolina"]',{ timeout: 50000 }),
        searchButton: () => cy.get('#search_submit',{force:true}),
        searchResultItem: (title) => cy.get(`li[title="${title}"]`,{ timeout: 50000 }),
        removeIcon: () => cy.get('img[alt="Remove"]',{ timeout: 50000 }).first(),
        addItemButton: () => cy.get('#\\35 9_30189773 > [title="Add Item"] > .btn-blue'),
        continueButton: () => cy.get('.btn-blue-large')
    }

    selectServiceTerm(value) {
        this.elements.serviceTerm().select(value).should('have.value', value)
    }

    searchItem(text) {
        this.elements.searchInput().clear().type(text)
        this.elements.searchButton().click()
    }
    applyFilter(){
        this.elements.applyFilter().click()
    }
    verifySearchResult(title) {
        this.elements.searchResultItem(title).should('be.visible')
    }

    removeFirstItem() {
        this.elements.removeIcon().click()
    }

    clickAddItem() {
        this.elements.addItemButton().click()
    }

    continue() {
        this.elements.continueButton().click()
    }

}

export default BcaAddPage