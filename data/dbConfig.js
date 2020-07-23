const knex = require("knex");

const knexfile = require("../knexfile.js");

// change to "production" and update knexfile.js to use postgres.
// const env = process.env.NODE_ENV || 'development';
// const configOptions = knexfile[env]
const database = "development";

module.exports = knex(knexfile[database]);
