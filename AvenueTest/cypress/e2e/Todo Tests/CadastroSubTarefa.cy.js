/// <reference types="cypress" />
import * as parametros from "../../fixtures/parametros.js"
import * as tarefaElement from "../../support/Elements/TaskElements"

const faker = require("faker");
const randomName =faker.random.alphaNumeric(30)



describe('Story 2: Cadastro de Sub Tarefas', () => {
 

  context("AC1 - O usuário deve ver um botão rotulado como 'Gerenciar subtarefas'",()=>{
    before("Dado que realizei o login e me encontro nas lista de minhas tarefas",() => {
      cy.CadastrarTarefa(randomName)
    })

    it('Então deve exibir o botão de gerenciar tarefas', () => {
      cy.get(tarefaElement.botaoGerenciarTarefa).contains("Manage Subtasks").should('be.visible')
    });
  })

  context("AC2 - Sistema deve cadastrar subtarefa para a tarefa selecionada",()=>{
    before("Dado que realizei o login e me encontro nas lista de minhas tarefas",() => {
      cy.CadastrarTarefa(randomName)
    })

    it('Quando acessar a modal de gerenciamento de tarefa', () => {
      cy.get(tarefaElement.botaoGerenciarTarefa).contains("Manage Subtasks").should('be.visible').click()

    });
    it('E cadastrar a subtarefa', () => {
      cy.get(tarefaElement.tituloInputSubtask).type(randomName)
      cy.get(tarefaElement.dataInputSubtask).clear().type("01/01/2022")
      cy.get(tarefaElement.adicionarSubtask).click()
    });
    it('Então deve adiconar a subtarefa a tarefa selecionada', () => {
      cy.get(tarefaElement.modalListGrid).should('contain.text',randomName)
    });
  })

})


