import BeckettHomePage from '../../../pages/BeckettHomePage'
import popReprot from '../../../pages/popreport'

describe('grading pop report', function () {

    const becketthomepage = new BeckettHomePage()

    beforeEach(() => {
        cy.session('Beckett-Login', () => {
            cy.Login()
        })
    })
    it('pop report with sports , set name and player name ', function () {
        cy.viewport(1920, 1080);
        becketthomepage.visitHome();

        popReprot.openPopReport()

        popReprot.selectSport('Baseball')
        popReprot.enterSetName('2009 topps')
        popReprot.enterPlayerName('Jordan')
        popReprot.clickSearch()

        popReprot.verifyFirstResult('2009 Topps 206 Autographs')
        popReprot.verifySpecificCard('2009 Topps 206 Mini Framed Autograph')

        popReprot.clickViewAllGrades()

    })



})




