#!/bin/zsh

knex --knexfile ./knexfile_users.js migrate:rollback

knex --knexfile ./knexfile_users.js migrate:latest

knex --knexfile ./knexfile_users.js seed:run

# knex --knexfile ./knexfile_users.js migrate:rollback --env test

# knex --knexfile ./knexfile_users.js migrate:latest --env test

# knex --knexfile ./knexfile_users.js seed:run --env test
