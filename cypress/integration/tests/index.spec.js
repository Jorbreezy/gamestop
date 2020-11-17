context('Index', () => {
  describe('Index page', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('Should have correct title', () => {
      cy.get('.title > h1')
        .contains('Welcome to Gamestop');
    });

    it('Should Contain header', () => {
      cy.get('header')
        .should('not.be.empty')
    }); 

    it('Clicking games navigates to games', () => {
      cy.get('.list').first().click();

      cy.url().should('include', '/games');
    });
  });


});