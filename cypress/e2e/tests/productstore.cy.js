/// <reference types="Cypress" />

import Product from '../../object page/productstore'

describe('Product Store', ()=>{

    before(()=>{
        cy.visit('https://www.demoblaze.com/')
        cy.url().should('include', 'demoblaze.com')
        cy.title().should('eq', 'STORE')
    })

    it('should validate feature of the Prouct Store', ()=>{
        Product.tovalidateallfeature()
    })
})