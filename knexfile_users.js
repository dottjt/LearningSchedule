const databaseName = 'users';

module.exports = {
  test: {
    client: 'pg',
    connection: process.env.USER_DATABASE_URL + '_test',
    migrations: {
      directory: __dirname + '/server/db/users_migrations'
    },
    seeds: {
      directory: __dirname + '/server/db/users_seeds/test'
    }
  },
  development: {
    client: 'pg',
    connection: process.env.USER_DATABASE_URL,
    migrations: {
      directory: __dirname + '/server/db/users_migrations'
    },
    seeds: {
      directory: __dirname + '/server/db/users_seeds/development'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.USER_DATABASE_URL,
    migrations: {
      directory: __dirname + '/server/db/users_migrations'
    },
    seeds: {
      directory: __dirname + '/server/db/users_seeds/development'
    }
  }
};