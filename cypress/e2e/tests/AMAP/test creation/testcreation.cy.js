/// <reference types="Cypress" />

import TestTestCreation from '../../../../object page/test creation amap/createtest'

describe('Test Creation Functionality', () => {

    beforeEach(() => {
        cy.visit('https://amap.amalitech-dev.net/login')
    })

    it('login', ()=>{
        TestTestCreation.validlogin()
        TestTestCreation.app()
        TestTestCreation.ClickTestCreation()
        TestTestCreation.EnterTestCreation()
    })

  
})