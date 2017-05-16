#!/bin/zsh

knex --knexfile ./knexfile_schedules.js migrate:rollback

knex --knexfile ./knexfile_schedules.js migrate:latest

knex --knexfile ./knexfile_schedules.js seed:run


knex --knexfile ./knexfile_schedules.js migrate:rollback --env test

knex --knexfile ./knexfile_schedules.js migrate:latest --env test

knex --knexfile ./knexfile_schedules.js seed:run --env test
