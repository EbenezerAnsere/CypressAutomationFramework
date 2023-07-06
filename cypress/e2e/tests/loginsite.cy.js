/// <reference types="Cypress" />

import Login from '../../object page/login'

describe('Test Automation Practice', ()=>{

    it('Should validate features', ()=>{
        Login.navigatetowebsite();
        Login.validateelement();
        Login.validatelogin();
    })
})

