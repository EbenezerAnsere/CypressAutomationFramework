/// <reference types="Cypress" />

import data from '../../object page/admin'

describe('Visit Admin site', ()=>{

    it('should validate functional or features', () =>{
        data.visitwebsite();
        data.loginbtn();
        // data.adminbtn();
    })
})