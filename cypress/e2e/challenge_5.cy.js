describe('Realizar a validação da ordenação por menor preço', () => {

  beforeEach(() => {
    //Acessar o site da loja
    cy.visit('http://localhost/');

  });

  const precosDosProdutos = [];
  it('Deve carregar a listagem de produtos', () => {
    let precos = [];
    cy.get('#sortOrder').select('Preço (Menor para Maior)')
    cy.get('#productsContainer').find('div.product').each(($product) => {
      cy.wrap($product).find('p').last().invoke('text').then((text) => {
        const precoNumerico = parseFloat(text.replace('Preço: R$', '').replace(',', '.'));
        precos.push(precoNumerico); // 
      });
    }).then(() => {
      // Verificar se os preços estão em ordem crescente
      const isSorted = precos.every((preco, i) => i === 0 || precos[i] >= precos[i - 1]);

      // Exibir o resultado 
      cy.log('Preços em ordem crescente: ${isSorted}');

      // Teste para verificar se os preços estão em ordem crescente
      expect(isSorted).to.be.true;
    });
  });
});






