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

describe('Tests for searching for a movie', () => {

  it('Should find movie', () => {
    cy.get('input').type('Star Wars').should('have.value', 'Star Wars');
    cy.get('button').click();
  });

  it('Should not find movie', () => {
    cy.get('input').type(' ').should('have.value', ' ');
    cy.get('button').click();

    cy.get('p').contains('Inga sökresultat att visa').should('exist');
  });

});