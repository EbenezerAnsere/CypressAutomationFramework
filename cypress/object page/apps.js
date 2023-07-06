/// <reference types="Cypress" />

class TestCreation{

    testlogin = {
        email : () => cy.get('input[id="email"]'),
        password : () => cy.get('input[id="password"]'),
        enter : () => cy.get('#custom-button')
    }
     
    clicklogin(){
        this.testlogin.email().should('be.visible').type('adminn@example.com')
        this.testlogin.password().should('be.visible').type('User@123')
        this.testlogin.enter().click()
    }

            
    element = {
        clickapp : () => cy.contains('Apps'),
        addtest : () => cy.contains('Add test')
    }

    apptest(){
        this.element.clickapp().click().should('be.visible');
        this.element.addtest().should('be.visible').click();
    }
}

module.exports = new TestCreation();