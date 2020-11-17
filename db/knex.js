const env = process.env.NODE_ENV || 'test';
const configOptions = require('../knexfile')[env];
module.exports = require('knex')(configOptions);
