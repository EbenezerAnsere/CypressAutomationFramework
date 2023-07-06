/// <reference types="Cypress" />

class Product {

    elements = {
        logo: () => cy.get('#nava').should('be.visible'),
        navlink: () => cy.get('ul.navbar-nav li').should('have.length', 8),
        home : () => cy.get('.navbar-nav.ml-auto').find('li').eq(0).should('contain', 'Home').and('be.visible'),
        contact : () => cy.get('.navbar-nav.ml-auto').find('li').eq(1).should('contain', 'Contact').and('be.visible'),
        About : () => cy.get('.navbar-nav.ml-auto').find('li').eq(2).should('contain', 'About us').and('be.visible'),
        // category: () => cy.get('#cat').should('be.visible'),
        category : () => cy.get('.list-group').find('a').should('have.length', 4),
        productlagout : () => cy.get('.card.h-100').each(($el, index, list)=>{
                expect('')
        })
    }

    tovalidateallfeature() {
        this.elements.logo()
        this.elements.navlink()
        this.elements.home()
        this.elements.contact()
        this.elements.About()
        this.elements.category()
        // this.elements.productlagout()
    }

}

module.exports = new Product();