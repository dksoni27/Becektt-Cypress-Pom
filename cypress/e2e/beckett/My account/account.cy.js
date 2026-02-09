import BeckettHomePage from '../../../pages/BeckettHomePage'
import AccountPage from '../../../pages/account'

describe('My account links', () => {
    const becketthomepage = new BeckettHomePage()
    beforeEach(() => {
        cy.fixture('users').as('users')
        cy.Login()
        becketthomepage.visitAccount()
    })

    it('Account section - email visible', function () {

        AccountPage.verifyAccountSection()
        AccountPage.verifyUserEmail(this.users.validUser.email)
    })

    it('Account section - update profile', function () {

        const profile = this.users.validUser

        AccountPage.openProfile()
        AccountPage.clickEditProfile()

        AccountPage.updateProfile(profile)
        AccountPage.saveProfile()

        AccountPage.verifyUpdatedProfile(profile)
    })

    it('Subscriptions section', () => {

        AccountPage.openSubscriptions()
        AccountPage.verifySubscriptions()
    })



})
