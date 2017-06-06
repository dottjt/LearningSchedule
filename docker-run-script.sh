#!/bin/ash

knex --knexfile ./knexfile_schedules.js migrate:rollback

knex --knexfile ./knexfile_schedules.js migrate:latest

knex --knexfile ./knexfile_schedules.js seed:run

knex --knexfile ./knexfile_users.js migrate:rollback

knex --knexfile ./knexfile_users.js migrate:latest

knex --knexfile ./knexfile_users.js seed:run


