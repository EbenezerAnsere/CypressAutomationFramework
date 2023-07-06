/// <reference types="Cypress" />

import Login from '../../object page/orangehrm';

describe('OrangeHRM', () => {

    it('Test site', () => {
      Login.validatewebsiteurl();
      Login.validatelogin();
      Login.site();
    })
})