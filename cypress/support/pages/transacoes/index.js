
//Ações de interação com a página.

const elem = require('./elements').campos;

class ControlFinance {
    acessarPagina () {
        cy.visit("https://dev-finance.netlify.app/#")  
    }
        
    criarTransação (descrição, valor) {
        cy.contains(elem.buttonNovTrans).click()         
        cy.get(elem.descriçãoImput).type(descrição)            
        cy.get(elem.valorImput).type(valor)
        cy.get(elem.dataImput).type("2025-11-26")              
        cy.get(elem.buttonSalvar).click()          
    }

    excluirTransação (descrição) {
        cy.contains(elem.descriçãolist, descrição).parent().find("img").click()
    }
  }
  export default new ControlFinance();