class NewsForgotPasswordPage {


  // ===== Login / Forgot Password =====
  loginIcon() {
    return cy.get('li > .login_user')
  }

  forgotPasswordLink() {
    return cy.get('.forgot_pass')
  }

  // ===== Step 1 =====
  resetPasswordHeading() {
    return cy.contains('Reset Your Password')
  }

  emailInput() {
    return cy.get('[name="password_email"]')
  }

  submitEmailButton() {
    return cy.get('#modelForgotPassword .loginBtn')
  }

  // ===== Step 2 =====
  step2Heading() {
    return cy.contains('Reset Your Password: Step 2')
  }

  otpInput() {
    return cy.get('[name="verification_code"]')
  }

  validateOtpButton() {
    return cy.get('.validateVerificationCode')
  }

  // ===== Step 3 =====
  step3Heading() {
    return cy.contains('Reset Your Password: Step 3')
  }

  newPasswordInput() {
    return cy.get('[name="new_pass"]')
  }

  confirmPasswordInput() {
    return cy.get('[name="confirm_pass"]')
  }

  changePasswordButton() {
    return cy.get('.change-pass')
  }

  // ===== Success =====
  successMessage() {
    return cy.contains('Request Password Reset: Successful')
  }

  // ===== Actions =====
  openForgotPassword() {
    this.forgotPasswordLink().should('be.visible').click()
    this.resetPasswordHeading().should('be.visible')
  }

  submitEmail(email) {
    this.emailInput().should('be.visible').clear().type(email)
    this.submitEmailButton().click()
    this.step2Heading().should('be.visible')
  }

  submitOtp(otp) {
    this.otpInput().should('be.visible').type(otp)
    this.validateOtpButton().click()
    this.step3Heading().should('be.visible')
  }

  setNewPassword(password) {
    this.newPasswordInput().type(password)
    this.confirmPasswordInput().type(password)
    this.changePasswordButton().click()
  }

  verifySuccess() {
    this.successMessage({ timeout: 10000 }).should('be.visible')
  }

}

export default new NewsForgotPasswordPage()
