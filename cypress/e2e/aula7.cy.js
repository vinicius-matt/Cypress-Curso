describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  //caso de teste
  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  })

  //Trabalhando com pagina que abrem em outra aba
  it('Trabalhando com pagina que abrem em outra aba', () => {
  cy.contains('a','Política de Privacidade')
   .should('have.attr','href','privacy.html')
   .and('have.attr','target','_blank')
})
  
//Acessa a pagina e remove atributo utilizando invoke
 it('Acessa a pagina e remove atributo',() =>{
    cy.contains('a','Política de Privacidade')
    .invoke('removeAttr','target')
    .click()

    cy.contains('h1','CAC TAT - Política de Privacidade')
    .should('be.visible')
 })

})