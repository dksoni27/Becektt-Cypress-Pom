/// <reference types="cypress" />
import BcaHomePage from '../../../pages/BcaHome'
import BcaAddPage from '../../../pages/BcaAddPage'
import BcaItemDetailsPage from '../../../pages/BcaItemDetailsPage'
import BcaPaymentPage from '../../../pages/BcaPaymentPage'
import BcaHome from '../../../pages/BcaHome'

describe('Beckett bca order  Test', () => {

    const homePage = new BcaHome()
    const addPage = new BcaAddPage()
    const itemPage = new BcaItemDetailsPage()
    const paymentPage = new BcaPaymentPage()

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

        addPage.searchItem('2009')
        addPage.verifySearchResult('2009')
        addPage.removeFirstItem()



    }),

        it("BCA order place", function () {

            homePage.visit()
            homePage.startBcaOrder()
            homePage.verifyRedirectToAdd()

            addPage.selectServiceTerm('2')

            addPage.clickAddItem()
            addPage.continue()

            itemPage.fillGradedItem({
                company: 'BGS Grade',
                serialStart: '1234',
                serialEnd: '12345',
                serialNum: '12345',
                description: 'it is test order'
            })

            addPage.continue()

            paymentPage.verifyPaymentPage()
            paymentPage.acceptTerms()
            paymentPage.checkout()
        })
})