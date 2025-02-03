Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data={
    firstName:'Mary',
    lastName:'Doe',
    email:'maryd@gmail.com',
    text:'test'
}) =>{
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)
    cy.get('button[type="submit"]').click()
})