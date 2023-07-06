/// <reference types="Cypress" />

class TestCreation {

      testlogin = {
        email: ()=> cy.get('input[type=email]').type('adminn@example.com'),
        password: () => cy.get('input[type=password]').type('User@123'),
        signin: () => cy.get('.primary').click()
      }

      validlogin(){
          this.testlogin.email();
          this.testlogin.password();
          this.testlogin.signin()
      }


    TestApp = {
        teststab: () => cy.contains('Tests').should('be.visible').click(),
        testtab: () => cy.get('.text-white').should('have.class', 'text-white').children().eq(1).contains('Test').click({force:true})
    }

    app() {
        this.TestApp.teststab()
        this.TestApp.testtab()
    }

    TestCreation = {
        createtestbutton: () => cy.get('#custom-button').should('have.id', 'custom-button').and('have.text', 'Create test').and('be.visible').click({force:true})
    }

    ClickTestCreation(){
        this.TestCreation.createtestbutton()
    }

    CreateTest = {
         testcreation_url: () =>cy.visit('https://amap.amalitech-dev.net/dashboard/apps/createTest/basic'),
         valid_url: () => cy.url().should('include', '/createTest', '/basic'),
         test_title: () => cy.get('input[type=text]').type('Java').should('have.value', 'Java'),
         test_duration: () => cy.get('input[type=number]').clear().type('2').should('have.value', 2),
         test_domain: () => cy.get('.form-select').select('Sales').should('have.length', 1)
    } 
dd
    EnterTestCreation(){
        this.CreateTest.testcreation_url()
        this.CreateTest.valid_url()
        this.CreateTest.test_title()
        this.CreateTest.test_duration()
        this.CreateTest.test_domain()
    }





}

module.exports = new TestCreation()