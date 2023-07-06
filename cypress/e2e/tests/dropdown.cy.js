describe('Test automation', ()=>{

    cy.get("input[name='q']").type('cypress automation');

    cy.get('.list').each(($el, index, $list)=>{
        if($el.text()=='cypress automation tool'){
            cy.wrap($el).click();
        }
    })
})