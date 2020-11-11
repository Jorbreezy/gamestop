
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('studios').del()
    .then(function () {
      // Inserts seed entries
      return knex('studios').insert([
        { name: 'FromSoft' },
        { name: 'Treyarch' },
        { name: 'Insomniac Games' },
      ]);
    });
};
