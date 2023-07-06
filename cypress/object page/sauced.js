/// <reference types="Cypress" />

class ValidateSite{
     
    elements = {

        // validate each element of the login page
        username : () => cy.get('#user-name'),
        password : () => cy.get('#password'),
        submit : () => cy.get('#login-button'),

        //validate the numbers of the items sections
        itemSection : () => cy.get('.inventory_item'),
        //validate names of items
        correctName : () => cy.get('.inventory_item_name'),
        //validate prices of items
        price : () => cy.get('.inventory_item_price'),
        //validate descriptions
        description : () => cy.get('.inventory_item_desc'),

        //validate add to cart functionality
        addtocart : () => cy.get('#add-to-cart-sauce-labs-backpack'),

        //validate cart icon
        carticon : () => cy.get('.shopping_cart_link')
    }

    validatelogin(){

        // validate logging in with valid credentials
        this.elements.username().type('standard_user');
        this.elements.password().type('secret_sauce');
        this.elements.submit().click();

        //count the numbers of the items
        this.elements.itemSection().should('have.length', 6);
        this.elements.correctName().should('have.length', 6).and('be.visible');
        this.elements.price().should('have.length', 6).and('be.visible');
        this.elements.description().should('have.length', 6).and('be.visible');

        //add to cart functionality
        this.elements.addtocart().click();

        //validate cart icon functionality
        this.elements.carticon().click();
    }

    visitWebsite = {
        //validate link to the website
        visit : () => cy.visit('https://www.saucedemo.com/'),
        confirmLink : () => cy.url().should('include', 'saucedemo.com')
    }

    Open(){
        //navigate to the website
        this.visitWebsite.visit()
        this.visitWebsite.confirmLink()
    }
}

module.exports = new ValidateSite();