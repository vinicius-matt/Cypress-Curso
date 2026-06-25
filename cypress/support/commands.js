Cypress.Commands.add('fillMandatoryFieldsAndSubmit',() => {
    cy.get('#firstName').type('Matheus',{delay:100})
    cy.get('#lastName').type('Miranda')
    cy.get('#email').type('matheusvini754@gmail.com')
    cy.get('#open-text-area').type('Teste.')
    cy.get('button[type="submit"]').click()
})