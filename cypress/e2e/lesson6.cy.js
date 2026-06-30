describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  //caso de teste
  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  })

  //Trabalhando upload de arquivos com cypress
  it('Upload de arquivos com cypress', () => {
    cy.get('#file-upload')
    .selectFile('cypress/fixtures/example.json')
    .should(input => {
    expect(input[0].files[0].name).to.equal('example.json')// verificação de resultado
    })
  })

    //seleciona o arquivo simulando drag-and-drop como se fosse um usuario
  it('seleciona o arquivo simulando drag-and-drop',() => {
    cy.get('#file-upload')
    .selectFile('cypress/fixtures/example.json',{action : 'drag-drop'})
    .should(input => {
    expect(input[0].files[0].name).to.equal('example.json')// verificação de resultado
    })
 })

  //Trabalhando com alias
 it.only('Selecione um arquivo utilizando uma fixture que possui alias',() =>{
    cy.fixture('example.json').as('sampleFile')
    cy.get('#file-upload')
    .selectFile('@sampleFile')
    .should(input => {
    expect(input[0].files[0].name).to.equal('example.json')// verificação de resultado
  })
 })
})
