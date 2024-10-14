describe('Validar a Listagem com base na seleção do filtro de Categoria', () => {

  beforeEach(() => {
    //Acessar o site da loja
    cy.visit('http://localhost/');

  });

  it('Fazer filtro por Categoria e validar', () => {
    //Irá fazer uma seleção no Filtro de Categorias
    cy.get('#categoryFilter').select('clothing')
    //Validará se o produto possui descrição com a Categoria selecionada(através de uma função)
    validarProdutos('.product-list', '.product-item', ["camisa", "camiseta"])
    cy.get('#categoryFilter').select('decor')
    validarProdutos('.product-list', '.product-item', ['Luminária'])//No teste irá falhar, pois há Produtos que não pertencem a essa Categoria
    cy.get('#categoryFilter').select('posters')
    validarProdutos('.product-list', '.product-item', ['Posters'])
    cy.get('#categoryFilter').select('toys')
    validarProdutos('.product-list', '.product-item', ["Action Figure", "Figurine", "Funko"])
    cy.get('#categoryFilter').select('bags')
    validarProdutos('.product-list', '.product-item', ["Bolsa"])
    cy.get('#categoryFilter').select('puzzles')
    validarProdutos('.product-list', '.product-item', ["Quebra-Cabeça"])
    cy.get('#categoryFilter').select('mugs')
    validarProdutos('.product-list', '.product-item', ["Caneca"])
    cy.get('#categoryFilter').select('accessories')
    validarProdutos('.product-list', '.product-item', ["Mouse", "Adesivos"])
    cy.get('#categoryFilter').select('books')
    validarProdutos('.product-list', '.product-item', ["Livro"])
  });
});

//Função para pesquisar os produtos que estão na listagem conforme a Categoria
function validarProdutos(seletorLista, seletorProduto, palavrasChave) {
  cy.get('.product-list')
    .find('.product-item')
    .each(($el) => {
      //Feito uma validação quando não encontrado Descrição com base na categoria
      const nomeProduto = $el.text().trim().toLowerCase();
      let encontrou = false;
      palavrasChave.some(palavra => {
        if (nomeProduto.includes(palavra.toLowerCase())) {
          encontrou = true;
          return true; // Interrompe a interação se encontrar a palavra
        }
        return false;
      });

      expect(encontrou).to.be.true;
    });
}  