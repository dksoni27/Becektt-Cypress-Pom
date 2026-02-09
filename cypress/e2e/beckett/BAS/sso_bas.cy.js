import BeckettHomePage from '../../../pages/BeckettHomePage'
import AuthLandingPage from '../../../pages/beckettauthntication/authHome'

describe('Beckett Authentication SSO', () => {

  const beckettHome = new BeckettHomePage()
  const authLanding = new AuthLandingPage()

  beforeEach(() => {
    cy.session('Beckett-Login', () => {
      cy.Login()
    })
  })

  it('should open Authentication site with SSO (no re-login)', () => {

    beckettHome.visitLogin()
    beckettHome.verifyAlreadyLoggedIn()

    beckettHome.openAuthSiteViaMenu()
    authLanding.verifySsoLoggedIn()
  })
})
