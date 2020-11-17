context('Games', () => {
  before(() => {
    cy.task('db:rollback');
    cy.task('db:latest');
    cy.task('db:seed');
  });

  describe('Games Data', () => {
    beforeEach(() => {
      cy.visit('/games');
    });

    it('Should have title games', () => {
      cy.get('.title')
        .contains('Games');
    });

    it('Should contain 6 a tags', () => {
      cy.get('.content')
        .find('a')
        .should('have.length', 6)
    });
  });

  describe('Clicking on a Game navigates to more details', () => {
    it('Should navigate to game at id', () => {
      cy.get('.content').find('a').first().click();

      cy.url().should('include', '/games/1');
    });

    it('Should Contain a form', () => {
      cy.get('form');
    });

    it('Should contain data in form input', () => {
      cy.get('form').within(($form) => {
        cy.get('input[name="title"]').should('have.value', 'Dark Souls');
        cy.get('input[name="price"]').should('have.value', 40);
        cy.get('input[name="studio"]').should('have.value', 'FromSoft');
        cy.get('input[name="type"]').should('have.value', 'RPG');
        cy.get('input[name="img"]').should('have.value', 'https://upload.wikimedia.org/wikipedia/en/8/8d/Dark_Souls_Cover_Art.jpg')
      });
    });

    it('Should edit game data', () => {
      cy.get('form').within(($form) => {
        cy.get('input[name="title"]').invoke('val', 'Dark Souls 3');
        cy.get('input[name="price"]').invoke('val', 60);
        cy.get('input[name="studio"]').invoke('val', 1);
        cy.get('input[name="type"]').invoke('val', 1);
        cy.get('input[name="img"]').invoke('val', 'https://upload.wikimedia.org/wikipedia/en/b/bb/Dark_souls_3_cover_art.jpg');
        cy.get('input[value="Edit"]').click();
      });
    });

  });

  describe('New game', () => {
    it('Should navigate to new game', () => {
      cy.visit('/games');
      cy.get('.createNew').find('a').first().click();

      cy.url().should('include', '/games/new');
    });

    it('Should contain a form', () => {
      cy.get('form');
    });

    it('Should pass in correct data', () => {
      cy.get('form').within(($form) => {
        cy.get('input[name="title"]').type('Demon Souls Remake');
        cy.get('input[name="price"]').type(70);
        cy.get('input[name="studio"]').type(1);
        cy.get('input[name="type"]').type(1);
        cy.get('input[name="img"]').type('https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-06-18-11-08/PS5_1.jpg')
      });
    });

    it('Should Submit data', () => {
      cy.get('input[type="submit"]').click();
    });
  });

  describe('Delete game', () => {
    it('Should delete a game', () => {
      cy.visit('/games/7');
      
      cy.get('input[value="Delete"]').click();
    });
  });

});