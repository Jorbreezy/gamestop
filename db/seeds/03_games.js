
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {
          title: 'Dark Souls', price: 40, studio: 1, type: 1,
        },
        {
          title: 'Dark Souls 2', price: 40, studio: 1, type: 1,
        },
        {
          title: 'Black Ops 3', price: 40, studio: 2, type: 2,
        },
        {
          title: 'Cold War', price: 60, studio: 2, type: 2,
        },
        {
          title: 'Spider Man Miles Morales', price: 70, studio: 3, type: 3,
        },
        {
          title: 'Spider Man', price: 60, studio: 3, type: 3,
        },
      ]);
    });
};
