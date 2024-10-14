describe('Realizar a inclusão de um ou mais produtos no carrinho', () => {

  beforeEach(() => {
    //Acessar o site da loja
    cy.visit('http://localhost/');

  });

  it('Adicionar produtos ao Carrinho', () => {
    //Foi adicionado para realizar uma busca com o início da palavra e buscar depois o produto com a palavra completa
    //Função Adicionarcarrinho ('Pesquisa', 'Produto a ser adicionado ao carrinho')
    Adicionarcarrinho("Luminária", "Luminária do Star Wars");
    Adicionarcarrinho("Livro", "Livro de RPG D&D");
  });
})

function Adicionarcarrinho(pesquisa, descricao) {
  //Função para adicionar mais de um produto no carrinho
  // Insere o nome do produto no campo de Busca
  cy.get('#searchInput').type(pesquisa);
  // Clica no botão de buscar
  cy.contains('Buscar').click();
  // Adiciona o produto no carrinho
  cy.contains(descricao)
    .siblings()
    .click()
  //Limpar o campo de busca
  cy.get('#clearSearchBtn').click()
}