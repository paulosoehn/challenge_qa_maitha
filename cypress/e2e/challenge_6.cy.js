describe('Validação da navegação de listagem por default', () => {
 
  beforeEach(() => {
  //Acessar o site da loja
    cy.visit('http://localhost/');

  });
  
  it('Deve carregar a listagem de produtos', () => {
    // Verificar se os produtos foram carregados na primeira vez
    cy.get('.product-item') 
      .should('have.length.greaterThan', 0); // Verifica se existe ao menos um produto
  });
  
  it('Atualizar página e verificar o carregamentos dos produtos', () => {
    // Atualiza a página de navegação
    cy.reload(true)
    cy.get('.product-item')
      .should('have.length.greaterThan', 0); // Garantindo que os produtos foram carregados

   });
   it('Deve exibir corretamente o primeiro produto por padrão', () => {
    // Captura o nome do primeiro produto
    cy.get(':nth-child(1) > span') 
      .should('be.visible')
      .then(($firstProduct) => {
        const firstProductName = $firstProduct.text(); // Armazena o nome do primeiro produto

        cy.reload();
        
        //Verifica se o nome do primeiro produto é igual ao armazenado 
        cy.get(':nth-child(1) > span')
          .should('have.text', firstProductName);


      });  
      
      
    });  
});