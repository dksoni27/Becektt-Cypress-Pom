class NewsLoginPage {
    // ====== Login Button ======
    loginIcon() {
        return cy.get('li > .login_user')
    }
    // ====== Login Modal ======
    loginHeading() {
        return cy.contains('LOGIN')
    }

    emailInput() {
        return cy.get('[name="login_email"]')
    }

    passwordInput() {
        return cy.get('[name="password"]')
    }

    loginButton() {
        return cy.get('[style="text-align:center;"] > .loginBtn')
    }

    // ====== Actions ======
    openLoginPopup() {
        this.loginIcon().should('be.visible').click()
        this.loginHeading().should('be.visible')
    }

    login(email, password) {
        this.emailInput()
            .should('be.visible')
            .clear()
            .type(email)

        this.passwordInput()
            .should('be.visible')
            .clear()
            .type(password)

        cy.wait(50000) // keeping your existing wait
        this.loginButton()
            .should('be.visible')
            .click()
    }

    // ====== Assertions ======
    loginShouldFail() {
        cy.contains("We're sorry, but the username/password you entered is incorrect.")
            .should('be.visible')
    }

    loginShouldSucceed() {
        cy.contains('login').should('not.exist')
    }

}

export default new NewsLoginPage()
