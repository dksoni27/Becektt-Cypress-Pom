class NewsPage {

    // -------- Page URL --------
    visit() {
        cy.visit('https://www.beckett.com/news')
    }

    // ====== Login Button ======
    loginIcon() {
        return cy.get('li > .login_user')
    }

    // -------- Header / Page Load --------
    verifyPageLoaded() {
        cy.url().should('include', '/news')
        cy.get('body').should('be.visible')
    }

    // -------- Featured Section --------
    getFeaturedArticles() {
        return cy.get('section').first().find('a')
    }

    clickFirstFeaturedArticle() {
        this.getFeaturedArticles().first().click()
    }

    // -------- Latest News Section --------
    getLatestNewsSection() {
        return cy.contains('LATEST NEWS').parent()
    }

    getLatestNewsCards() {
        return cy.get(':nth-child(1) > .content_out > .post-wrapper-inner')
    }

    clickLatestNewsByIndex(index = 0) {
        this.getLatestNewsCards()
            .eq(index)
            .find('a')
            .first()
            .click()
    }

    // -------- News Card Validations --------
    validateNewsCardStructure() {
        this.getLatestNewsCards().first().within(() => {
            cy.get('img').first().scrollIntoView().should('be.visible', { timeout: 10000 })
            //cy.get(':nth-child(1) > .content_out > .post-wrapper-inner > .post-c-wrap > .title').should('exist')
            cy.get('.post-c-wrap').should('exist')
            cy.contains(/read more/i).should('exist')
        })
    }

    // -------- Sidebar --------
    verifySidebarVisible() {
        cy.get('aside').should('be.visible')
    }

    verifyNewChecklistsVisible() {
        cy.get('#bk_latest_posts_2-2 > .widget-title-wrap > .bk-header > .widget-title > h3').should('be.visible')
    }

    // -------- Article Page --------
    verifyArticlePage() {
        cy.get('h1').should('be.visible')
        cy.get('.post-author').should('exist')
    }
}

export default new NewsPage()
