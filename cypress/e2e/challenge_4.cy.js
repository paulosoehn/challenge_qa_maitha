describe('Validar a Listagem com base na seleção do filtro de Categoria', () => {

  beforeEach(() => {
    //Acessar o site da loja
    cy.visit('http://localhost/');

  });

  it('teste2', () => {
    cy.get('footer p').invoke('text').then((footer) => {
      //Acesso ao modo Escuro
      cy.get('#themeToggleBtn').click()//Dará erro no código pelo modo escuro
      //Verifica se o texto do footer ainda é o mesmo
      cy.get('footer p').should('have.text', footer);
    });
  });
});
