/// <reference types="Cypress" />

class ConfirmInformation{

    
    visit = {
        open : () => cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'),
        pointlink : () => cy.url().should('include', '/index.php'),
        title : () => cy.title().should('eq', 'OrangeHRM')
    }

    visitwebsite(){
        this.visit.open();
        this.visit.pointlink();
        this.visit.title();
    }

    elements = {
        username : () => cy.get("input[placeholder='Username']"),
        password : () => cy.get("input[placeholder='Password']"),
        enter : () => cy.get("button[type='submit']")
    }

    loginbtn(){
        this.elements.username().type('Admin')
        this.elements.password().type('admin123')
        this.elements.enter().click()
    }

    //focus on validating admin
    admin = {
        pointadmin : () => cy.get('.oxd-main-menu'),
    }

    adminbtn(){
        this.admin.pointadmin().find('li').eq(0).should('have.text', 'Admin')
    }

}

module.exports = new ConfirmInformation();