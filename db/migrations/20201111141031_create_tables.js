
exports.up = (knex) => knex.schema
.createTable('studios', (table) => {
  table.increments().primary();
  table.string('name', 50).unique().notNullable();
})
.createTable('types', (table) => {
  table.increments().primary();
  table.string('name', 50).unique().notNullable();
})
.createTable('games', (table) => {
  table.increments().primary();
  table.string('title', 164).unique().notNullable();
  table.integer('price').notNullable();

  table
    .integer('type')
    .references('id')
    .inTable('types');

  table
    .integer('studio')
    .references('id')
    .inTable('studios');
});

exports.down = (knex) => knex.schema
  .dropTable('games')
  .dropTable('studios')
  .dropTable('types');