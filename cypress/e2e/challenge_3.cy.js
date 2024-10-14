
describe('Realizar a busca de um produto', () => {

  beforeEach(() => {
    //Acessar o site da loja
    cy.visit('http://localhost/');

  });

  it.only('Busca de produtos pelo filtro de Busca', () => {
    // Insere o nome do produto no campo de Busca
    cy.get('#searchInput').type('Luminária do Star Wars');

    // Clica no botão de buscar
    cy.contains('Buscar').click();

    // Verifica se o produto foi buscado
    cy.contains('Luminária do Star Wars').should('be.visible');
  });

})