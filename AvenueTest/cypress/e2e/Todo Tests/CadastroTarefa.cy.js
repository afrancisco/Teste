/// <reference types="cypress" />
import * as parametros from "../../fixtures/parametros.js"
import * as tarefaElement from "../../support/Elements/TaskElements"
const faker = require("faker");
const randomName =faker.random.alphaNumeric()


describe('Story 1: Cadastro de Tarefas', () => {
 

  context("AC1 - O usuário deve sempre ver o link 'My Tasks' na barra de navegação",()=>{
    before("Dado que realizei o login e me encontro na tela inicial",() => {
      cy.login(parametros.user,parametros.password)
    })

    
    it('Quando acessar o menu de tarefas ', () => {
      cy.get(tarefaElement.tarefaMenuLink).should('be.visible').click()
      cy.get(".task_container").should('be.visible')
     
    })

    it('Então deve exibir o link "My Tasks" na tela em modo responsivo', () => {
      cy.viewport('iphone-5')
      cy.get(tarefaElement.tarefaMenuLink).should('be.visible')
    })

 
  })

  context("AC2 - O usuário deve ver uma mensagem na parte superior dizendo que a lista pertence para o usuário logado",()=>{
    before("Dado que realizei o login e me encontro na tela inicial",() => {
      cy.login(parametros.user,parametros.password)
    })
  
    it('Quando acessar o menu de tarefas ', () => {
      cy.get(tarefaElement.tarefaMenuLink).should('be.visible').click()
     
    })
  
    it('Então deve exibir o link "My Tasks" na tela em modo responsivo', () => {
      cy.get(tarefaElement.tarefaMenuLink).should('contain.text',`${parametros.userName} this is your todo list for today:`)
    })
  
  
  })

  context("AC3 - O usuário deve ver uma mensagem na parte superior dizendo que a lista pertence para o usuário logado",()=>{
    before("Dado que realizei o login e me encontro na tela inicial",() => {
      cy.login(parametros.user,parametros.password)
    })
  
    it('Quando acessar o menu de tarefas ', () => {
      cy.get(tarefaElement.tarefaMenuLink).should('be.visible').click()
     
    })
  
    it('Então deve exibir o link "My Tasks" na tela em modo responsivo', () => {
      cy.get("h1").should('contain.text',`${parametros.userName} this is your todo list for today:`)
    })
  
  })
  
  context("AC4 - O usuário deve poder inserir uma nova tarefa pressionando a tecla enter ",()=>{
    before("Dado que realizei o login e me encontro na tela inicial",() => {
      cy.login(parametros.user,parametros.password)
    })
  
    it('Quando acessar o menu de tarefas ', () => {
      cy.get(tarefaElement.tarefaMenuLink).should('be.visible').click()
     
    })
  
    it('Então deve exibir o link "My Tasks" na tela em modo responsivo', () => {
      cy.get(tarefaElement.titulo).should('contain.text',`${parametros.userName} this is your todo list for today:`)
    })
  
  })

  context("AC5 - O usuário deve poder inserir uma nova tarefa pressionando a tecla enter ",()=>{
    before("Dado que realizei o login e me encontro na tela inicial",() => {
      cy.login(parametros.user,parametros.password)
    })
  
    it('E acessar o menu de tarefas ', () => {
      cy.get(tarefaElement.tarefaMenuLink).should('be.visible').click()
     
    })
    
    it('quando eu adicionar uma tarefa pressionando o botão de adicionar', () => {
     
      cy.get(tarefaElement.novaTarefaInput).should('be.visible').type(randomName).next().click()
     
    })
  
    it('Então deve salvar a tarefa na lista de tarefas', () => {
      cy.get(tarefaElement.tarefaListGrid).should('contain.text',`${randomName}`)
    })
  
  
  })

})


