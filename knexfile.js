// Update with your config settings.
const path = require('path');

const {
  DEVDB,
  CLIENT,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  TESTDB
} = process.env;

module.exports = {
  development: {
    client: CLIENT,
    connection: {
      database: DEVDB,
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
      database: TESTDB,
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
