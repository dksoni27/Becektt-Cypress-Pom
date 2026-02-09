import AuthHomePage from '../../../pages/beckettauthntication/authHome'
import SignatureReview from '../../../pages/beckettauthntication/signatureReview'
import signatrueregviewCheckout from '../../../pages/beckettauthntication/signatrueregviewCheckout'

describe('Beckett Authentication SSO - Signature Review Order', () => {

  const homePage = new AuthHomePage()
  const reviewPage = new SignatureReview()
  const checkoutPage = new signatrueregviewCheckout()

  beforeEach(() => {
    cy.session('Beckett-Login', () => {
      cy.Login()
    })
  })

  it('signature review order', () => {

    homePage.visit()
    homePage.openSignatureReview()

    reviewPage.startOrder()
    reviewPage.fillOrderDetails(
      'my first order',
      'download.jpg',
      'it is test order'
    )
    reviewPage.proceedToAddress()

    checkoutPage.selectAddressAndContinue()
    checkoutPage.verifyPayNowVisible()
  })
})
