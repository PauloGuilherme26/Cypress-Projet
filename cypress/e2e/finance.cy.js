
describe('Transações', () => {
    it('Cadastrar uma entrada', () => {
        cy.visit("https://dev-finance.netlify.app/#")
        cy.contains("+ Nova Transação").click()         //contains(" "): localiza por nomes.    click(): clicar.
        cy.get('#description').type("Samuel")           //get(" "): pegar.                      type(" "): escrever 
        cy.get('#amount').type(250)
        cy.get('#date').type("2025-11-26")              //Data no formato AAAA-MM-DD
        
        cy.contains("button", "Salvar").click()         //palavras iguais as do site. maiusculas são diferentes de minusculas 
        //cy.contains("Salvar").click()
        
        //cy.get('.actions > .button').click()
        //cy.contains("Cancelar").click()

        cy.get("tbody tr td.description").should("have.text", "Samuel") //Seletor a partir do inspecionar(DevTools)
        //cy.get('.description').should("have.text", "Samuel")          //Seletor a partir do Cypress (Butão Alvo)
        
        //cy.get("tbody tr td.income").should("have.text", "R$ 250,00")   //Erro ao localizar o elemento "R$ 250,00"
        //cy.get('.income').should("have.text", "R$&nbsp;250,00")
        
    });

    it('Cadastrar uma saída', () => {                   //it.skip => pausa a execução do teste
        cy.visit("https://dev-finance.netlify.app/#")
        cy.contains("+ Nova Transação").click()         
        cy.get('#description').type("Aluguel")           
        cy.get('#amount').type(-800)
        cy.get('#date').type("2025-11-27")
        cy.contains("button", "Salvar").click()
        cy.get("tbody tr td.description").should("have.text", "Aluguel")
    });
    
   
});