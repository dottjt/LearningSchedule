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




function setVerificationToken(username, updates) {
  return Users().where('username', username).update(updates);
}

function getVerificationToken(username) {
  return Users().where('username', username).select('verification_token');
}



function setResetToken(username, updates) {
  return Users().where('username', username).update(updates);
}

function getResetToken(username) {
  return Users().where('username', username).select('reset_token');
}



// this needs to change.
function setVerificationBoolean(username, updates) {
  return Users().where('username', username).update(updates)
}

function getVerificationBoolean(username) {
  return Users().where('username', username).select('verification_boolean')
}




module.exports = {
    getSingleUser: getSingleUser,
    getSingleUserEmail: getSingleUserEmail,
    updateUser: updateUser,
    updateUserPassword: updateUserPassword,
    deleteAllUserInformation: deleteAllUserInformation,
    
    setVerificationToken: setVerificationToken,
    getVerificationToken: getVerificationToken,

    setResetToken: setResetToken,
    getResetToken: getResetToken,

    setVerificationBoolean: setVerificationBoolean,
    getVerificationBoolean: getVerificationBoolean
};

