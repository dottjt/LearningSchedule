const knex = require('../db/users_connection');

function Users() {
  return knex('user');
}

function getSingleUser(username) {
  return Users().where('username', username).first();
}

function updateUser(username, updates) {
  return Users().where('username', username).update(updates);
}


module.exports = {
    getSingleUser: getSingleUser,
    updateUser: updateUser
};
