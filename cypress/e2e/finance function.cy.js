
describe('Transações', () => {

    //hooks => executa antes ou depois / de cada ou de todos os testes
    //before (Antes)
    //after  (Depois)
    //beforeEach => antes de cada teste
    //afetEach => depois de cada teste

    beforeEach(() => {
        cy.visit("https://dev-finance.netlify.app/#")
    });

    it('Cadastrar uma entrada', () => {
                
        criarTransação ("Paulo", 460)
        //criarTransação ("Arthur", 540)      
       
        cy.get("tbody tr td.description").should("have.text", "Paulo") 
    });
        
    it('Cadastrar uma saida', () => {
                
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

        
    