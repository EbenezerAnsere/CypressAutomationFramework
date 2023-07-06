/// <reference types="Cypress" />

import data from '../../fixtures/demoqa.json'

describe('Practice Test Automation', () => {

    //Verify website url
    beforeEach(() => {
        cy.visit('https://demoqa.com/')
        cy.url().should('include', '/demoqa')
        cy.title().should('eq', 'DEMOQA')
    })

    it('Verify locating elements of the features', () => {


        cy.get('.card.mt-4.top-card').should('have.length', 6)
        cy.get('.category-cards').children().first().should('contain', 'Elements').click();
        cy.get('.pr-1').children().first().click();
        cy.contains('Text Box').click();
        cy.get('#userName-wrapper').children().eq(0).should('have.text', 'Full Name').and('be.visible');
        cy.get('#userEmail-wrapper').children().eq(0).should('have.text', 'Email').and('be.visible');
        cy.get('#currentAddress-wrapper').children().eq(0).should('have.text', 'Current Address').and('be.visible');
        cy.get('#permanentAddress-wrapper').children().eq(0).should('have.text', 'Permanent Address').and('be.visible');

        cy.get('#userName').should('be.enabled').and('be.visible').type(data.Fullname);
        cy.get('#userEmail').should('be.enabled').and('be.visible').type(data.Email);
        cy.get('#currentAddress').and('be.visible').type(data.Currentaddress);
        cy.get('#permanentAddress').and('be.visible').type(data.Permanentaddress);

        // cy.get('#submit').click();
        

        cy.eyesOpen({
            appName: 'DEMOQA',
            testName: 'TOOLSQA',
            browser: {width: 900, height: 600}
        });

        cy.eyesCheckWindow('Elements');
        cy.get('button').click();
        cy.eyesCheckWindow('Click!');

        cy.eyesClose();
    })

});