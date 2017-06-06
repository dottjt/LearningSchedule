const databaseName = 'schedules';

module.exports = {
  test: {
    client: 'pg',
    connection: `postgres://juliusrpostgres:juliusrpostgres@localhost:5432/${databaseName}_test`,
    migrations: {
      directory: __dirname + '/server/db/schedules_migrations'
    },
    seeds: {
      directory: __dirname + '/server/db/schedules_seeds/test'
    }
  },
  development: {
    client: 'pg',
    connection: `postgres://juliusrpostgres:juliusrpostgres@localhost:5432/${databaseName}`,
    migrations: {
      directory: __dirname + '/server/db/schedules_migrations'
    },
    seeds: {
      directory: __dirname + '/server/db/schedules_seeds/development'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.SCHEDULE_DATABASE_URL,
    migrations: {
      directory: __dirname + '/server/db/schedules_migrations'
    },
    seeds: {
      directory: __dirname + '/server/db/schedules_seeds/production'
    }
  }
};
