describe('Conferência do Conteúdo do Footer - Modo Claro e Escuro', () => {

  beforeEach(() => {
    //Acessar o site da loja
    cy.visit('http://localhost/');

  });

  it('Verificar o Footer da página', () => {
    cy.get('footer p').invoke('text').then((footer) => {
      //Acesso ao modo Escuro
      cy.get('#themeToggleBtn').click()//Dará erro no código pelo modo escuro
      //Verifica se o texto do footer ainda é o mesmo
      cy.get('footer p').should('have.text', footer);
    });
  });
});
