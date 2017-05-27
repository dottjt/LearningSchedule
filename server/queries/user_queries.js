const knex = require('../db/users_connection');

function Users() {
  return knex('user');
}

function getSingleUser(username) {
  return Users().where('username', username).first();
}

function getSingleUserEmail(email) {
  return Users().where('email', email).first();
}

function updateUser(username, updates) {
  return Users().where('username', username).update(updates);
}

function updateUserPassword(username, updates) {
  return Users().where('username', username).update(updates);
}

function deleteAllUserInformation(username) {
  return Users().where('username', username).del();
}

function setResetToken(username, updates) {
  return Users().where('username', username).update(updates);
}




module.exports = {
    getSingleUser: getSingleUser,
    getSingleUserEmail: getSingleUserEmail,
    updateUser: updateUser,
    updateUserPassword: updateUserPassword,
    deleteAllUserInformation: deleteAllUserInformation,
    setResetToken
};

