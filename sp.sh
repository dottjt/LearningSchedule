#!/bin/zsh

knex --knexfile ./knexfile_schedules.js migrate:rollback --env production

knex --knexfile ./knexfile_schedules.js migrate:latest --env production

knex --knexfile ./knexfile_schedules.js seed:run --env production
