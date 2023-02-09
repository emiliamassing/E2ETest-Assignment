beforeEach(() => {
  cy.visit("/");
});

describe('Tests for input field', () => {

  it('Should check if input exists', () => {
    cy.get('input').should('exist');
    cy.get('input').should('have.id', 'searchText');
  });

  it('Should be able to type in input', () => {
    cy.get('input#searchText').should('exist');
    cy.get('input#searchText').type('Star Wars').should('have.value', 'Star Wars');
  });

});

describe('Tests for trying to submit empty field', () => {
  
  it('Should show error message when field is empty', () => {
    cy.get('input').should('contain', '');
    cy.get('button').click();

    cy.get('p').contains('Inga sökresultat att visa').should('exist');
  });

});

describe('Tests for submit button', () => {

  it('Should check if button exists', () => {
    cy.get('button').should('exist');
  });

  it('Should have correct id', () => {
    cy.get('button').should('have.id', 'search');
  });

});

describe('Tests for searching for a movie', () => {

  it('Should find movie', () => {
    cy.get('input#searchText').type('Star Wars').should('have.value', 'Star Wars');

    cy.get('button').should('have.id', 'search').and('exist');
    cy.get('button#search').click();
  });

  it('Should not find movie', () => {
    cy.get('input#searchText').type(' ').should('have.value', ' ');

    cy.get('button').click();

    cy.get('p').contains('Inga sökresultat att visa').should('exist');
  });

});

describe('Tests for when movie is found', () => {

  it('Should create correct elements', () => {
    cy.get('input#searchText').type('Star Wars').should('have.value', 'Star Wars');

    cy.get('form').should('have.id', 'searchForm').and('exist');
    cy.get('form#searchForm').submit();

    cy.get('div.movie').should('exist');
    cy.get('div.movie > h3').should('exist');
    cy.get('div.movie > h3').contains('Star Wars').should('exist');
    cy.get('div.movie > img').should('exist');
  });

});