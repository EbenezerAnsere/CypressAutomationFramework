/// <reference types="Cypress" />

class Login {

    validatesite = {
             //validate dashboard option tab
             dashboard : () => cy.get('.oxd-main-menu-item.active'),
             logo : () => cy.get("img[alt='client brand banner']"),
             search : () => cy.get("input[placeholder='Search']"),
             admin : () => cy.get('.oxd-main-menu'),
             pim : () => cy.get('.oxd-main-menu'),
             //time : () => cy.get('.oxd-main-menu')

    }

    elements = {
             //validate username and password
             username : () => cy.get('input[placeholder=Username]'),
             password : () => cy.get('input[placeholder=Password]'),

             //submit data
             submit : () => cy.get('button[type=submit]'),
    }

    openwebsite = {
        //validate website's URL
        visitWebsite: () => cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'),
        validatelink: () => cy.url().should('include', '/index.php')
    }

    validatewebsiteurl() {
        this.openwebsite.visitWebsite();
    }

    validatelogin(){
        this.elements.username().type('Admin');
        this.elements.password().type('admin123');
        this.elements.submit().click();
    }

    site(){
        this.validatesite.dashboard().should('be.visible').click()
        this.validatesite.logo().should('be.visible');
        this.validatesite.search().type('Recruitment').clear()
        this.validatesite.admin().find('li').eq(0).should('have.text', 'Admin').and('be.visible').click();
        // this.validatesite.pim().find('li').eq(1).should('have.text', 'PIM').and('be.visible')
        //this.validatesite.time().find('li').eq(1).should('have.text', 'Time').and('be.visible')
    }

}

module.exports = new Login();