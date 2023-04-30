require('dotenv').config();
const pg = require('pg');
// pg.defaults.ssl = true;

module.exports = {
  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE
    },
    migrations: {
      directory: './database/migrations',
      stub: './database/migration.stub'
    },
    seeds: {
      directory: './database/seeds'
    }
  }
};
