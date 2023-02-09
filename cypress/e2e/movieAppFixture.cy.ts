beforeEach(() => {
    cy.visit("/");
});

/*describe('Tests for url', () => {

    it('Should get url correctly', () => {
        cy.intercept('GET', 'http://omdbapi.com/?apikey=145f57ef&s=*', {fixture: "omdb"}).as('omdbFixture');

        cy.get('input#searchText').type('Attack Of The Clones');
        cy.get('button').click();

        cy.wait('@omdbFixture').its('request.url').should('contain', 'Attack%20Of%20The%20Clones');
    });

});*/

describe('Tests for searching for a movie', () => {

    it('Should find movie', () => {
        cy.intercept('GET', 'http://omdbapi.com/?apikey=145f57ef&s=*', {fixture: "omdb"}).as('omdbFixture');

        cy.get('input#searchText').type('The Phantom Menace').should('have.value', 'The Phantom Menace');
        cy.get('button').should('have.id', 'search').and('exist');
    
        cy.get('button#search').click();
    });

    it('Should not find movie', () => {
        cy.intercept('GET', 'http://omdbapi.com/?apikey=145f57ef&s=*', {fixture: "emptyOmdb"}).as('emptyOmdb');

        cy.get('input#searchText').type(' ').should('have.value', ' ');
        cy.get('button#search').click();
    
        cy.get('p').contains('Inga sökresultat att visa').should('exist');
    });
});

/*describe('Tests for when movie is found', () => {

    it('Should create correct elements', () => {
        cy.intercept('GET', 'http://omdbapi.com/?apikey=145f57ef&s=*', {fixture: "omdb"}).as('omdbFixture');

        cy.get('button').click();

        cy.get('div.movie').should('exist');
        cy.get('div.movie > h3').contains('Attack Of The Clones').should('exist');
        cy.get('div.movie > img').should('exist');

    });
});*/