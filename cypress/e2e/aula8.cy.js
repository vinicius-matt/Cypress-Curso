describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  //caso de teste
  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  })

  //Simulando um dispositivo móvel
  it('Simulando um dimensões de um dispositivo móvel',() =>{
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  })
})