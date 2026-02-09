import { MailSlurp } from 'mailslurp-client'

import NewsLoginPage from "../../../pages/News/NewsloginPage"
import NewsPage from "../../../pages/News/NewsPage"
import BeckettHomePage from "../../../pages/BeckettHomePage"
import NewsRegistration from "../../../pages/News/NewsRegistration"

describe('News Registration', () => {

    const mailslurp = new MailSlurp({
        apiKey: Cypress.env('MAILSLURP_API_KEY')
    })

    let inboxID
    let emailAddress
    before(() => {
        return mailslurp.createInbox().then(inbox => {
            inboxID = inbox.id
            emailAddress = inbox.emailAddress
        })
    })

    beforeEach(() => {
        cy.fixture('users').as('user')
        NewsPage.visit()
        BeckettHomePage.acceptCookies()
    })

    it('News Registration', function () {
        NewsLoginPage.openLoginPopup()
        NewsRegistration.openSignup()

        const uniqueUser = `testuser_${Date.now()}`
        const password = 'Strong@qwe123'

        NewsRegistration.fillRegistrationForm(emailAddress, uniqueUser, password)

        //captcha can not be automated

        cy.wait(30000)

        NewsRegistration.submitSignup()

        // ✅ Verify email received
        mailslurp.waitForLatestEmail(inboxID, 60000).then(email => {
            expect(email.subject).to.exist
            cy.log(email.subject)
        })


    });


})
