#!/bin/zsh

knex --knexfile ./knexfile_users.js migrate:rollback --env production

knex --knexfile ./knexfile_users.js migrate:latest --env production

knex --knexfile ./knexfile_users.js seed:run --env production

# knex --knexfile ./knexfile_users.js migrate:rollback --env test

# knex --knexfile ./knexfile_users.js migrate:latest --env test

# knex --knexfile ./knexfile_users.js seed:run --env test
