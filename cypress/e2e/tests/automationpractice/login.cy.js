/// <reference types="Cypress" />

describe('automation testing', ()=>{

    beforeEach(()=>{
        cy.visit('/')
    })

    it('/login form', ()=>{
      cy.get('.form_table').should('be.visible');
    })
})