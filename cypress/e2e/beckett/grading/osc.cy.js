import CardGrading from '../../../pages/cardgrading'
import BeckettHomePage from '../../../pages/BeckettHomePage'

describe('Card Grading Submission - Base Service', function () {
    const beckettHome = new BeckettHomePage()

    before(function () {
        cy.fixture('users').then((data) => {
            this.user = data.validUser
        })
    })

    it('User submits a card for grading using base service', function () {

        beckettHome.visitHome()
        CardGrading.clickSubmitButton()
        CardGrading.selectCardGradingService()
        CardGrading.closePopup()
        CardGrading.selectBaseServiceCard()

        CardGrading.searchCard('2009 topps')
        CardGrading.enterDeclaredValue('2')
        CardGrading.selectCheckboxAndContinue()

        CardGrading.fillPersonalDetails(this.user)
        CardGrading.acceptAddressConfirmation()

        CardGrading.acceptTermsAndContinue()
        CardGrading.verifyPaymentPage()
    })
})
