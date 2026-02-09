import BcaHome from '../../../pages/BcaHome'
import BcaAddPage from '../../../pages/BcaAddPage'


describe('Beckett bca order  Test', () => {
    const homePage = new BcaHome()
    const addPage = new BcaAddPage()

    beforeEach(() => {
        cy.session('Beckett-Login', () => {
            cy.Login()
        })
    })

    it("BCA search", function () {

        homePage.visit()
        homePage.startBcaOrder()
        homePage.verifyRedirectToAdd()

        addPage.selectServiceTerm('2')

        addPage.applyFilter()
        addPage.removeFirstItem()

        // addPage.searchItem('2009')
        // addPage.verifySearchResult('2009')
        // addPage.removeFirstItem()



    })
})