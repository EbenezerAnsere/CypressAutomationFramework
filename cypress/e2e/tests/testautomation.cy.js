/// <reference types="Cypress" />

import data from '../../fixtures/signup.json'

describe('Test automation practice', ()=>{

    beforeEach(()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.url().should('include', 'testautomationpractice')
    })

    it('Validate sign up', ()=>{
        cy.get('##RESULT_TextField-1').type(data.FirstName);
        cy.get('#RESULT_TextField-2').type(data.LastName);
        cy.get('#RESULT_TextField-3').type(data.Phone);
        cy.get('#RESULT_TextField-4').type(data.Country);
        cy.get('#RESULT_TextField-5').type(data.City);
        cy.get('#RESULT_TextField-6').type(data.EmailAddress);
    })
})