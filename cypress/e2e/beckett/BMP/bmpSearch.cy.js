import BmpHomePage from '../../../pages/BmpHomePage'

describe('BMP search test ', function () {
    

    it('BMP Search', () => {

        BmpHomePage.visit()
        BmpHomePage.verifyLoginVisible()
        BmpHomePage.verifyDefaultRadioChecked()

        BmpHomePage.searchItem('2009 topps')
        BmpHomePage.verifySearchResult('2009 topps')

        BmpHomePage.clickItemTab()

        BmpHomePage.applyPriceFilter('1', '50')
        BmpHomePage.verifyPriceFilterApplied()
    })

})

