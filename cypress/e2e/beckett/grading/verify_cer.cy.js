import BeckettHomePage from '../../../pages/BeckettHomePage'
import certificationVerify from '../../../pages/certificationVerify'
const becketthomepage = new BeckettHomePage()

describe('Verify Grading Certificate', () => {

    // Reusable function to verify a certificate
    const verifyCertificate = (certType, certNumber) => {
        becketthomepage.visitHome();
        certificationVerify.openVerificationPage()
        certificationVerify.clickVerifyButton()

        certificationVerify.enterCertificateNumber(certNumber)
        certificationVerify.selectCertificateType(certType)
        certificationVerify.submitVerification()

        certificationVerify.verifyResultPage(certNumber)
    }

    it('Verify certificate for BGS using valid certification number', () => {
        verifyCertificate('BGS', '3432341')
    })

    it('Verify certificate for BVG using valid certification number', () => {
        verifyCertificate('BVG', '3432341')
    })

    it('Verify certificate for BCCG using valid certification number', () => {
        verifyCertificate('BCCG', '3432341')
    })

})