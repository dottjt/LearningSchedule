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




function setVerificationToken(email, updates) {
  return Users().where('email', email).update(updates);
}

function getVerificationToken(email) {
  return Users().where('email', email).select('verification_token');
}



function setResetToken(email, updates) {
  return Users().where('email', email).update(updates);
}

function getResetToken(email) {
  return Users().where('email', email).select('reset_token');
}



// this needs to change.
function setVerificationBoolean(email, updates) {
  return Users().where('email', email).update(updates)
}

function getVerificationBoolean(email) {
  return Users().where('email', email).select('verification_boolean')
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

