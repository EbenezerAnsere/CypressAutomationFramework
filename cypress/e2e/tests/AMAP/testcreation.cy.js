/// <reference types="Cypress" />

import validation from '../../../object page/apps'

describe('TEST CREATION ON AMAP', ()=>{

    beforeEach(()=>{
        cy.visit('https://amap.amalitech-dev.net/login')
        cy.url().should('include', '/login')
        cy.title().should('eq', 'AmapFrontend')
    })

    it('Should validate basic information', ()=>{
        validation.clicklogin();
        validation.apptest();
    })
})