// Update with your config settings.
const path = require('path');

const {
  DATABASE,
  CLIENT,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DATABASE2
} = process.env;

module.exports = {
  development: {
    client: CLIENT,
    connection: {
      database: DATABASE,
      user: DB_USER,
      password: DB_PASSWORD,
      host: DB_HOST,
      port: DB_PORT,
    },
    migrations: {
      directory: path.join(__dirname, '/db/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/db/seeds'),
    },
  },
  test: {
    client: CLIENT,
    connection: {
      database: DATABASE2,
      user: DB_USER,
      password: DB_PASSWORD,
      host: DB_HOST,
      port: DB_PORT,
    },
    migrations: {
      directory: path.join(__dirname, '/db/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/db/seeds'),
    },
  },
};
