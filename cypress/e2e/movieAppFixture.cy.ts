beforeEach(() => {
    cy.visit("/");
});

describe('Tests for finding movies with fixture', () => {

    it('Should get url correctly', () => {
        cy.intercept('GET', 'http://omdbapi.com/?apikey=145f57ef&s=*', {fixture: "omdb"}).as('omdbFixture');

        cy.get('input#searchText').type('Attack Of The Clones');
        cy.get('button').click();

        cy.wait('@omdbFixture').its('request.url').should('contain', 'Attack', 'Of', 'The', 'Clones');
    });
});