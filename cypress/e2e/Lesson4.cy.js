describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  //caso de teste
  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  })

  //Selecionando botões do tipo radio
  it('Seleciona botões do tipo radio', () =>{
    cy.get('input[type="radio"]').check()
    console.log('Passou')
  })

   it.only('Seleciona botões do tipo "Feedback" ', () =>{
    cy.get('input[type="radio"][value="feedback"]').check()
    .should('be.checked','have.value="feedback"')
    console.log('Passou')
  })
})

//cy.get('#support-type > :nth-child(3)')