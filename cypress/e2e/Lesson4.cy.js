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

   it('Seleciona botões do tipo "Feedback" ', () =>{
    cy.get('input[type="radio"][value="feedback"]').check()
    .should('be.checked','have.value="feedback"')
    console.log('Passou')
  })

  it('Seleciona todos os botões',() =>{
    cy.get('input[type="radio"][value="feedback"]').check()
    .should('be.checked','have.value="feedback"')
    console.log('Passou')
  })

  //Função para selecionar varios botões each and wrap
  it('Marca cada tipo de atendimento',() => {
    cy.get('input[type="radio"]')
    .each( typeOfService => {
      cy.wrap(typeOfService)
      .check()
      .should('be.checked')
    })
  })
})

//cy.get('#support-type > :nth-child(3)')