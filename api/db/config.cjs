// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const ENV = process.env.CI ? 'ci' : process.env.NODE_ENV || 'development';
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, DB_URL } = process.env;

const config = {
  development: {
    dialect: 'postgres',
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
  },

  test: {
    dialect: 'postgres',
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_test`,
    host: DB_HOST,
    port: DB_PORT,
  },

  ci: {
    url: `postgres:postgres@${DB_HOST}:${DB_PORT}/postgres`,
  },

  production: {},
}[ENV];

config.url =
  DB_URL ||
  config.url ||
  `${config.dialect}://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`;

module.exports = config;
