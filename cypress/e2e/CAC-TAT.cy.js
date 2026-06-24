describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  //caso de teste
  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  })

  //preenchendo campos
  it('Preenche os campos obrigatórios', () =>{
    cy.get('#firstName').type('Matheus')
    cy.get('#lastName').type('Miranda')
    cy.get('#email').type('matheusvini754@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()

    //verificações
    cy.get('.success').should('be.visible')
  })

  it('Testeando Delay',() =>{
    cy.get('#firstName').type('Matheus',{delay:100})
    cy.get('#lastName').type('Miranda')
    cy.get('#email').type('matheusvini754@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()

    //verificações
    cy.get('.success').should('be.visible')
  })

  //Enviando dados do formulario e validando mensagem de erro
  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida',() =>{
    cy.get('#firstName').type('Matheus')
    cy.get('#lastName').type('Miranda')
    cy.get('#email').type('matheusvini754l')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()

    //verificações
    cy.get('.error').should('be.visible')
    cy.get('.error').should('contain.text','Valide os campos obrigatórios')
  })

  //Exercicio 02 - Validando dados nos campos
  it('Verificando valor no campo obrigatorio de telefone',()=>{
    cy.get('#phone').as('telefone')
    cy.get('@telefone').type('47997740921')

    //verficando valor
    cy.get('@telefone')
    .invoke('val')
    .should('match',/^\d+$/)
    //cy.get('@telefone').should('have.value','47997740921')

    it('Exibe mensagem de erro quando telefone nao preenchido',() =>{
    cy.get('#firstName').type('Matheus')
    cy.get('#lastName').type('Miranda')
    cy.get('#email').type('matheusvini754l')
    cy.get('#open-text-area').type('Teste')
    cy.get('#phone-checkbox').click()
    cy.get('button[type="submit"]').click()

    cy.get('.error')
    })
  })

  //Pracitando comando clear
      it.only('Preenche e limpa campos',() => {
      cy.get('#firstName')
      .type('Matheus')
      .should('have.value','Matheus')
      .clear()
      .should('have.value','')
    })
})
