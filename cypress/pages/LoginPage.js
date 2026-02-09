class LoginPage {
    elements = {
        emailInput: () => cy.get('#loginEmail'),
        passwordInput: () => cy.get('#loginPassword'),
        loginButton: () => cy.get('#btn_login'),
        rememberMeCheckbox: () => cy.get('.form-check-label'),
        logoutText: () => cy.contains('Logout'),
        errorMessage: () =>
            cy.contains(
                "We're sorry, but the email or password you entered is incorrect"
            )
    }

    visit() {
        cy.visit('/login')
    }

    enterEmail(email) {
        this.elements.emailInput().clear().type(email)
    }
    enterPassword(password) {
        this.elements.passwordInput().clear().type(password)
    }

    clickLogin() {
        this.elements.loginButton().click()
    }

    clickRememberMe() {
        this.elements.rememberMeCheckbox().click()
    }

    login(email, password) {
        this.enterEmail(email)
        this.enterPassword(password)
        this.clickLogin()
    }

    verifyLoginSuccess() {
        cy.url({ timeout: 10000 }).should('not.include', '/login')
        this.elements.logoutText().should('be.visible')
    }

    verifyErrorMessage() {
        this.elements.errorMessage().should('be.visible')
    }

    verifyLoginButtonDisabled() {
        this.elements.loginButton().should('be.disabled')
    }
}

export default LoginPage   // ✅ REQUIRED
