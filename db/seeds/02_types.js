
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('types').del()
    .then(function () {
      // Inserts seed entries
      return knex('types').insert([
        { name: 'RPG' },
        { name: 'FPS' },
        { name: 'Action' },
        { name: 'Adventure' },
        { name: 'Sports' },
        { name: 'Strategy' },
        { name: 'Indie' },
        { name: 'Racing' },
        { name: 'Simulation' },
      ]);
    });
};
