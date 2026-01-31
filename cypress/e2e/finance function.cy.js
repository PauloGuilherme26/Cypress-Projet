
describe('Transações', () => {
    it('Cadastrar uma entrada', () => {
        cy.visit("https://dev-finance.netlify.app/#")
        
        criarTransação ("Paulo", 460)
        //criarTransação ("Arthur", 540)      
       
        cy.get("tbody tr td.description").should("have.text", "Paulo") 
    });
        
    it('Cadastrar uma saida', () => {
        cy.visit("https://dev-finance.netlify.app/#")
        
        criarTransação ("Joaquim", -500)
       
        cy.get("tbody tr td.description").should("have.text", "Joaquim") 
    });
});

function criarTransação (descrição, valor) {
        cy.contains("+ Nova Transação").click()         
        cy.get('#description').type(descrição)            
        cy.get('#amount').type(valor)
        cy.get('#date').type("2025-11-26")              
        
        cy.contains("button", "Salvar").click()          
    };

        
    