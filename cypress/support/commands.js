// Cypress.Commands.add('fillMandatoryFieldsAndSubmit',() => {
//     cy.get('#firstName').type('Matheus',{delay:100})
//     cy.get('#lastName').type('Miranda')
//     cy.get('#email').type('matheusvini754@gmail.com')
//     cy.get('#open-text-area').type('Teste.')
//     cy.get('button[type="submit"]').click()
// })

//Comando personalizado recebendo uma variavel com os vaçpres
// Cypress.Commands.add('fillMandatoryFieldsAndSubmit',data => {
//     cy.get('#firstName').type(data.firstName,{delay:100})
//     cy.get('#lastName').type(data.lastName)
//     cy.get('#email').type(data.email)
//     cy.get('#open-text-area').type(data.text)
//     cy.get('button[type="submit"]').click()
// })

//Comando personalizado com valores default
Cypress.Commands.add('fillMandatoryFieldsAndSubmit',(data = {
    firstName: 'Miranda',
    lastName:'Matheus',
    email:'matheusmiranda@email.com',
    text:'teste'
}) => {
    cy.get('#firstName').type(data.firstName,{delay:100})
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)
    cy.get('button[type="submit"]').click()
})