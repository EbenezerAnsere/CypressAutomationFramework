/// <reference types="Cypress" />

import getlogin from '../fixtures/login.json'


class Login {

    elements = {
           // test logo and navbar link
           logo : () => cy.get('.custom-logo-link'),
           home: () => cy.get('#menu-item-43 > a'),
           practice: () => cy.get('#menu-item-20 > a'),
           course: () => cy.get('#menu-item-21 > a'),
           blog: () => cy.get('#menu-item-19 > a'),
           title : () => cy.contains('Test login'),

           //validate username and password
           myusername : () => cy.get('#username'),
           mypassword : () => cy.get('#password'),

           //log in to the platform
           submit : () => cy.get('#submit'),

           //log out of the platform
           logout : () => cy.contains('Log out')
    }

    Open = {
        // visit website
        visit : () => cy.visit('https://practicetestautomation.com/practice-test-login/')
    }

    navigatetowebsite(){
        this.Open.visit();
        cy.url().should('include', '/practice-test-login')
    }

    validateelement(){
        this.elements.logo().should('be.visible');
        this.elements.home().should('be.visible');
        this.elements.practice().should('be.visible')
        this.elements.course().should('be.visible');
        this.elements.blog().should('be.visible');
        this.elements.title().should('be.visible');
    }

    validatelogin(){
        this.elements.myusername().type('student');
        this.elements.mypassword().type('Password123');
        this.elements.submit().click();
        this.elements.logout().click();
    }

}

module.exports = new Login();