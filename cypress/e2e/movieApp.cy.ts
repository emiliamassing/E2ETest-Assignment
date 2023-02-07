beforeEach(() => {
  cy.visit("/");
});

describe('Tests for input type text', () => {

  it('Should check if input exists', () => {
    cy.get('input').should('exist');
  });

  it('Should be able to type in input', () => {
    cy.get('input').should('exist');
    cy.get('input').type('Star Wars').should('have.value', 'Star Wars');
  });

});