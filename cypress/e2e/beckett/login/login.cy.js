import LoginPage from '../../../pages/LoginPage'

describe('Beckett Login Test - Page Object Model', () => {

  const loginPage = new LoginPage()

  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.fixture('users').as('users')
  })

  it('login successfully with valid credentials', function () {

    loginPage.visit()

    loginPage.login(
      this.users.validUser.email,
      this.users.validUser.password
    )

    loginPage.verifyLoginSuccess()
  })

  it('stay logged in with Remember Me checked', function () {

    loginPage.visit()

    loginPage.enterEmail(this.users.validUser.email)
    loginPage.enterPassword(this.users.validUser.password)
    loginPage.clickRememberMe()
    loginPage.clickLogin()

    loginPage.elements.logoutText().should('be.visible')

    cy.reload()
    loginPage.elements.logoutText().should('be.visible')
  })

  it('display error for incorrect email or password', function () {

    loginPage.visit()

    loginPage.login(
      this.users.invalidUser.email,
      this.users.invalidUser.password
    )

    loginPage.verifyErrorMessage()
  })

  it('show error when fields are empty', () => {

    loginPage.visit()
    loginPage.verifyLoginButtonDisabled()
  })
})
