/// <reference types="Cypress" />

class TestLoginForm {


    // Must test a login form with a valid email and password below -  Postive Test
    validateslogin = {

        logo: () => cy.get('.logo-container').should('have.class', 'logo-container'),
        testsignin: () =>cy.contains('Sign in').and('have.text', ' Sign in '),
        email: ()=> cy.get('input[type=email]').should('be.enabled').and('be.visible').type('adminn@example.com'),
        password: () => cy.get('input[type=password]').should('be.enabled').and('be.visible').type('User@123'),
        signin: () => cy.get('.primary').should('have.class', 'primary').contains('Sign in').click({force: true})
    }

    login(){ 
        this.validateslogin.logo()
        this.validateslogin.testsignin()
        this.validateslogin.email()
        this.validateslogin.password()
        this.validateslogin.signin()
    }

    // EmailTestNegative = {

    //     // Must test a login form with an invalid email and a valid password - Negative Test
    //     email: () => cy.get('input[type=email]').type('adm24inn@example.com'),
    //     password: () => cy.get('input[type=password]').type('User@123'),
    //     signin: () => cy.get('.primary').should('have.class', 'primary').contains('Sign in').click({ force: true })
    // }

    // TestInvalidEmail() {
    //     this.EmailTestNegative.email()
    //     this.EmailTestNegative.password()
    //     this.EmailTestNegative.signin()
    // }

    // PasswordTestNegative = {
           
    //     //Must test a login form with a valid email and invalid password - Negative Test
    //     email: () => cy.get('input[type=email]').type('adminn@example.com'),
    //     password: () => cy.get('input[type=password]').type('Userd@s123'),
    //     signin: () => cy.get('.primary').should('have.class', 'primary').contains('Sign in').click({ force: true })
    // }

    // TestInvalidPassword(){
    //      this.PasswordTestNegative.email()
    //      this.PasswordTestNegative.password()
    //      this.PasswordTestNegative.signin()
    // }

}

module.exports = new TestLoginForm()