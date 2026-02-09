class Registration{
    elements = {
        emailInput: () => cy.get('#regemail'),
        userName: () => cy.get('#regusername'),
        password: () => cy.get('#regpassword'),
        terms: () => cy.get('#terms'),
        emailcheckbox: () => cy.get('#recEmailCheckbox'),
        submitButton: () => cy.get('#submitregistration'),     

    }

    visit() {
        cy.visit('/register')
    }

    enterEmail(email){
        this.elements.emailInput().clear().type(email)
    }
    enterUserName(username){
        this.elements.userName().clear().type(username)
    }
    enterPass(password){
        this.elements.password().clear().type(password)
    }
    checkTerms(){
        this.elements.terms().check()
    }
    checkEmail(){
        this.elements.emailcheckbox().check()
    }
    clickSignUp(){
        this.elements.submitButton().click()
    }

    registerUser({email,username,password}){
        this.enterEmail(email)
        this.enterUserName(username)
        this.enterPass(password)
        this.checkTerms()
        this.checkEmail()
        this.clickSignUp()
    }

}

export default Registration