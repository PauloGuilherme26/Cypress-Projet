import ControlFinance from '../support/pages/transacoes/index';

describe('Transações', () => {

    beforeEach(() => {
        ControlFinance.acessarPagina();
    });

    it('Cadastrar uma entrada', () => {
                
        ControlFinance.criarTransação("Samuel", 460);
        cy.get("tbody tr td.description").should("have.text", "Samuel") 
    });

    it('Cadastrar uma saida', () => {
                
        ControlFinance.criarTransação("Pedro", -851);
        cy.get("tbody tr td.description").should("have.text", "Pedro") 
    });

     it('Excluir transação', () => {
        
        ControlFinance.criarTransação("Felipe", 3653);
        ControlFinance.criarTransação("Samuel", 1500);
        ControlFinance.excluirTransação("Felipe");
        cy.get("tbody tr").should("have.length",1)
    });

})
