import users from '../../../fixtures/users.json'

describe('Beckett Website – Smoke Test without login', () => {


  /* ============================= */
  /*  Homepage Load */
  /* ============================= */
  it('Verify Homepage loads successfully', () => {
    cy.visit('https://www.beckett.com')
    cy.contains('Marketplace').should('be.visible')
    cy.contains('Online Price Guide').should('be.visible')
    cy.contains('Login').should('be.visible')
    cy.contains('Submit').should('be.visible')
    cy.get('.d-grid').should('be.visible')
    cy.get('[data-type="News"] > .Container_v2__Gryo6').should('be.visible')
    cy.get('.VideoSlide_video__6__Df > .content').should('be.visible')

  })


  /* ============================= */
  /*  Main Navigation */
  /* ============================= */
  it('Verify main navigation links', () => {
    cy.visit('/')
    // Marketplace
    cy.contains('Marketplace')
      .should('be.visible')
      .and('have.attr', 'href')
      .and('include', 'marketplace.beckett.com')



    // Authentication (opens in new tab, different domain)
    cy.contains('Authenticate')
      .should('be.visible')
      .and('have.attr', 'href')
      .and('include', 'beckett-authentication.com')

    // Grading 
    cy.contains('Grading').should('be.visible').click()
    cy.get('.dropdown-menu > [href="/grading"]').should('be.visible').click()
    cy.url().should('include', '/grading')
    cy.get('a[href="/"]').should('be.visible').click()

    //News 
    cy.contains('News').should('be.visible').click()

    //Pop Report 
    cy.contains('Pop Report').should('be.visible').click()
    

  })

  /* ============================= */
  /* Search Functionality */
  /* ============================= */
  it('Verify opg search functionality without login', () => {
    cy.visit('/')
    cy.get('.rounded-0').type('Pokemon{enter}')
    cy.contains('Please login to search the Beckett Online Price Guide')

  })


  /* ============================= */
  /*  Marketplace Product search */
  /* ============================= */
  it('Verify marketplace search page ', () => {
    cy.visit('/')
    cy.get(':nth-child(2) > [name="type"]').click()
    cy.get('.rounded-0').type('Pokemon{enter}')
    cy.url().should('include', 'search')

  })


  /* ============================= */
  /*  Checkout Reachability */
  /* ============================= */
  it('Verify Checkout page reachable', () => {
    cy.visit('/')
    cy.get('.ms-xxl-4 > .dropdown > .Layout_navbarToggler__IIAtC').should('be.visible').click()
    cy.get('[href="/subscriptions/buy"] > .d-inline-block').should('be.visible').click()
    cy.url().should('include', '/subscriptions/buy')
    cy.go('back')
    cy.get('.ms-xxl-4 > .dropdown > .Layout_navbarToggler__IIAtC').should('be.visible').click()
    cy.get('[href="https://marketplace.beckett.com/cart"]')
      .should('be.visible')
      .and('have.attr', 'href')
      .and('include', 'marketplace.beckett.com/cart')


  })

})

describe('Beckett Website – Smoke Test with login ', () => {

  beforeEach(() => {
    cy.session('Beckett-Login', () => {
      cy.Login()
    })
  })

  /* ============================= */
  /* Login */
  /* ============================= */
  it('login successfully', () => {
    cy.visit('/')
    cy.url({ timeout: 10000 }).should('not.include', '/login')
    cy.contains('Logout', { timeout: 10000 }).should('be.visible')
  })

  /* ============================= */
  /*  Search Functionality */
  /* ============================= */

  it('Verify opg search functionality with login', () => {
    cy.visit('/')
    cy.get('.rounded-0').type('Pokemon{enter}')
    cy.url().should('include', 'search')

  })

  /* ============================= */
  /*  Marketplace Product search with login*/
  /* ============================= */
  it('Verify marketplace search page ', () => {
    cy.visit('/')
    cy.get(':nth-child(2) > [name="type"]').click()
    cy.get('.rounded-0').type('Pokemon{enter}')
    cy.url().should('include', 'search')

  })

  /* ============================= */
  /*  Add to Cart */
  /* ============================= */
  it('Verify Add to Cart functionality for opg', () => {
    cy.visit('/opg')
    cy.get('#myTab > :nth-child(2) > .nav-link').should('be.visible').click()
    cy.get('#subscribe_total_now').should('be.visible').click()
    cy.contains('Total Access Web and Mobile App').should('be.visible')
  })


  /* ============================= */
  /*  User Account */
  /* ============================= */
  it('Verify user account page', () => {
    cy.visit('/')
    cy.get('.navbar-toggler-icon').should('be.visible').click()
    cy.get('[href="/account"]').should('be.visible').click()
    cy.url().should('include', 'account')
    cy.contains('Profile').should('be.visible')
    cy.contains(users.validUser.email).should('be.visible')
  })

  /* ============================= */
  /* Logout */
  /* ============================= */
  it('Verify Logout works', () => {
    cy.visit('/')
    cy.contains('Logout').should('be.visible')
    cy.get('.btn-outline-primary-new-color').click({ force: true })
    cy.contains('Login')
  })

})