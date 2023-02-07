beforeEach(() => {
  cy.visit("/");
});

describe('Tests for input type text', () => {

  it('Should check if input exists', () => {
    cy.get('input#searchText').should("exist");
  });

});