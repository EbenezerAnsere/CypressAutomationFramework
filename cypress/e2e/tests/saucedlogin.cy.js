/// <reference types="Cypress" />

import Data from '../../object page/sauced'

describe('Test automation practice', ()=>{

    it('validate features of the sauced', ()=>{
        Data.Open();
        Data.validatelogin();
    })
})