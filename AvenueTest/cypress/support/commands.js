// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

import * as parametros from "../fixtures/parametros";

//
Cypress.Commands.add("login",(email,password)=>{

    cy.visit(parametros.url)
    cy.get(`[id="sign_in"]`).click()
    cy.get(`input[id="user_email"]`).type(email)
    cy.get(`input[id="user_password"]`).type(password)
    cy.get(`input[name="commit"]`).click()
})
Cypress.Commands.add("CadastrarTarefa",(nomeTarefa)=>{
   cy.login(parametros.user,parametros.password)
   cy.get("a[id='my_task']").should('be.visible').click()
   cy.get("input[id='new_task']").should('be.visible').type(nomeTarefa)
   .next().click()

})
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })