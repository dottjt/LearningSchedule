// const environment = process.env.NODE_ENV || 'development';
// const config = require('../../knexfile_users.js')[environment];

// module.exports = require('knex')(config);


const config = require('../../knexfile_users.js');
const env = process.env.NODE_ENV || 'development';
const knex = require("knex")(config[env]);

module.exports = knex;

if(process.env.NODE_ENV != 'test') {
   knex.migrate.latest([config])
}
