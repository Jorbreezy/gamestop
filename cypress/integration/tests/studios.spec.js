context('Studios', () => {
  before(() => {
    cy.task('db:rollback');
    cy.task('db:latest');
    cy.task('db:seed');
  });

  describe('Studio Data', () => {
    beforeEach(() => {
      cy.visit('/studios');
    });

    it('Should have title studios', () => {
      cy.get('.title')
        .contains('Studios');
    });

    it('Should contain 3 divs', () => {
      cy.get('.content')
        .find('.tile')
        .should('have.length', 3);
    });
  });

  describe('New Studio', () => {
    it('Should navigate to new studio', () => {
      cy.visit('/studios/new');

      cy.url().should('include', '/studios/new');
    });

    it('Should contain a form', () => {
      cy.get('form');
    });

    it('Should pass in correct data', () => {
      cy.get('form').within(($form) => {
        cy.get('input[name="name"]').type('BluePoint Games');
      });
    });

    it('Should Submit data', () => {
      cy.get('input[type="submit"]').click();
    });
  });

  describe('Delete Studio', () => {
    it('Should delete a Studio', () => {
      cy.get('.menu > form')
        .eq(3)
        .click();
    });
  });

});