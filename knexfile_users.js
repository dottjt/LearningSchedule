const databaseName = 'users';

module.exports = {
  test: {
    client: 'pg',
    connection: `postgres://localhost:5432/${databaseName}_test`,
    migrations: {
      directory: __dirname + '/server/db/users_migrations'
    },
    seeds: {
      directory: __dirname + '/server/db/users_seeds/test'
    }
  },
  development: {
    client: 'pg',
    connection: `postgres://localhost:5432/${databaseName}`,
    migrations: {
      directory: __dirname + '/server/db/users_migrations'
    },
    seeds: {
      directory: __dirname + '/server/db/users_seeds/development'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/server/db/users_migrations'
    },
    seeds: {
      directory: __dirname + '/server/db/users_seeds/production'
    }
  }
};