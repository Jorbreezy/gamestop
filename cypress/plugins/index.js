/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

const configOptions = require('../../knexfile')['development'];
const knex = require('knex')(configOptions);

module.exports = (on, config) => {
  on('task', {
    'db:rollback': () => {
      return knex.migrate.rollback();
    },
    'db:latest': () => {
      return knex.migrate.latest();
    },
    'db:seed': () => {
      return knex.seed.run();
    }
  })

  return config;
}
