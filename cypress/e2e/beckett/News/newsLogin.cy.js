import NewsLoginPage from "../../../pages/News/NewsloginPage"
import NewsPage from "../../../pages/News/NewsPage"
import BeckettHomePage from "../../../pages/BeckettHomePage"

describe('News Login', () => {
   
    
    beforeEach(() => {
        cy.fixture('users').as('user')
        NewsPage.visit()
        //BeckettHomePage.acceptCookies()
    })

    it('News Login with valid details', function () {
        NewsLoginPage.openLoginPopup()
        NewsLoginPage.login(
            this.user.validUser.email,
            this.user.validUser.password
        )
        NewsLoginPage.loginShouldSucceed()
    })

    it('News Login with invalid details', function () {
        NewsLoginPage.openLoginPopup()
        NewsLoginPage.login(
            this.user.invalidUser.email,
            this.user.invalidUser.password
        )
        NewsLoginPage.loginShouldFail()
    })

})
