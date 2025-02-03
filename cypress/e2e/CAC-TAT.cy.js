
describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => { 
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia o fomulário', () => {
    cy.get('#firstName').type('Debora')
    cy.get('#lastName').type('Santos')
    cy.get('#email').type('deborasantos@gmail.com')
    cy.get('#open-text-area').type('Obrigado!')
    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () =>{
    cy.get('#firstName').type('Debora')
    cy.get('#lastName').type('Santos')
    cy.get('#email').type('deborasantos@gmail,co')
    cy.get('#open-text-area').type('Obrigado!')
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')

  })

  it('campo telefone continuará vazio se um valor não-numérico for digitado', () => {
    cy.get('#phone')
    .type('abcdeefg')
    .should('have.value', '')
    
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#firstName').type('Debora')
    cy.get('#lastName').type('Santos')
    cy.get('#email').type('deborasantos@gmail.com')
    cy.get('#open-text-area').type('Obrigado!')    
    cy.get('#phone-checkbox').check()
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })


  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName')
      .type('Debora')
      .should('have.value', 'Debora')
      .clear()
      .should('have.value', '')

    cy.get('#lastName')
      .type('Santos')
      .should('have.value', 'Santos')
      .clear()
      .should('have.value', '')
    
      cy.get('#phone')
      .type('123456789')
      .should('have.value', '123456789')
      .clear()
      .should('have.value', '')

    cy.get('#email')
      .type('deborasantos@gmail.com')
      .should('have.value', 'deborasantos@gmail.com')
      .clear()
      .should('have.value', '')
      
    cy.get('#open-text-area')
      .type('Obrigado!')   
      .should('have.value', 'Obrigado!')
      .clear()
      .should('have.value', '')

  })

it('envia o formuário com sucesso usando um comando customizado', () => {
  const data =  {
    firstName:'Debora',
    lastName:'Ssntos',
    email:'deboras@gmail.com',
    text:'obrigado'
}

  cy.fillMandatoryFieldsAndSubmit()

  cy.get('.success').should('be.visible')
})
it('seleciona um produto (YouTube) por seu texto', () => {
  cy.get('#product')
    .select('Youtube')
    .should('have.value','youtube')
})

it('seleciona um produto (Mentoria) por seu valor (value)', () =>{
  cy.get('#product')
    .select('Mentoria')
    .should('have.value','mentoria')

})
it('seleciona um produto (Blog) por seu valor indice)', () =>{
  cy.get('#product')
    .select(1)
    .should('have.value','blog')
})
it('marca o tipo de atendimento "Feedback"', () => {
  cy.get('input[type="radio"][value="feedback"]')
    .check()
    .should('be,checked')
})
it('marca cada tipo de atendimento',() => {
  cy.get('input[type="radio"]')
    .each(typeOfService => {
      cy.wrap(typeOfService)
        .check()
        .should('be.checked')

    })
})
it('marca ambos checkboxes, depois desmarca o ultimo', () => {
  cy.get('input[type="checkbox"]')
    .check()
    .should('be.checked')
    .last()
    .uncheck()
    .should('not.be.checked')
})
})
