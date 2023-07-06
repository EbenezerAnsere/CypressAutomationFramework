/// <reference types="Cypress" />

import TestLoginForm from '../../../../object page/login apam/login'

describe('AMAP LOGIN FORM FUNCTIONALITY', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.url().should('include', 'login')
        cy.title('eq', 'AmapFrontend')
    })

    it('Should validate a login form', () => {
        // Login Form Test Postive
        TestLoginForm.login()

        //Login Form With Invalid Email Test Negative
        // TestLoginForm.TestInvalidEmail()

        //Login Form With Invalid Password Test Negative
        // TestLoginForm.TestInvalidPassword()
    })
})