beforeEach(() => {
  cy.visit("/");
});

describe('Tests for input field', () => {

  it('Should check if input exists', () => {
    cy.get('input').should('exist');
  });

  it('Should be able to type in input', () => {
    cy.get('input#searchText').should('exist');
    cy.get('input#searchText').type('Star Wars').should('have.value', 'Star Wars');
  });

});

describe('Tests for searching for a movie', () => {

  it('Should find movie', () => {
    cy.get('input#searchText').type('Star Wars').should('have.value', 'Star Wars');

    cy.get('button#search').click();
  });

  it('Should not find movie', () => {
    cy.get('input#searchText').type(' ').should('have.value', ' ');

    cy.get('button#search').click();

    cy.get('p').contains('Inga sökresultat att visa').should('exist');
  });

});

describe('Tests for when movie is found', () => {

  it('Should create correct elements', () => {
    cy.get('input#searchText').type('Star Wars').should('have.value', 'Star Wars');

    cy.get('form#searchForm').submit();

    cy.get('div.movie').should('exist');
    cy.get('div.movie > h3').should('exist');
    cy.get('div.movie > img').should('exist');
  });

});