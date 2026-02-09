import { MailSlurp } from 'mailslurp-client'
import NewsForgotPasswordPage from '../../../pages/News/NewsForgotPass'
import NewsPage from "../../../pages/News/NewsPage"
import NewsloginPage from '../../../pages/News/NewsloginPage'
import BeckettHomePage from "../../../pages/BeckettHomePage"


describe('News Login - Forgot Password with OTP via MailSlurp', () => {

  const mailslurp = new MailSlurp({
    apiKey: Cypress.env('MAILSLURP_API_KEY'),
  })

  const inboxId = Cypress.env('MAILSLURP_INBOX_ID')
  const emailAddress = Cypress.env('MAILSLURP_EMAIL')

  beforeEach(() => {
    cy.fixture('users').as('user')
    NewsPage.visit()
    BeckettHomePage.acceptCookies()
  })

  it('Reset password using OTP from MailSlurp', function () {

    NewsForgotPasswordPage.openForgotPassword()
    NewsForgotPasswordPage.submitEmail(emailAddress)

    // 🔐 Fetch OTP from MailSlurp
    cy.getOtpFromMailSlurp(inboxId).then((otp) => {
      cy.log(`OTP received: ${otp}`)
      NewsForgotPasswordPage.submitOtp(otp)
    })

    NewsForgotPasswordPage.setNewPassword(this.user.password.r_pass)
    NewsForgotPasswordPage.verifySuccess()

  })

})
