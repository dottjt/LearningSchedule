const knex = require('../db/schedules_connection');

function Updates() {
  return knex('update');
}

function getAllUpdates() {
  return Updates().select();
}

function getSingleUpdate(update_id) {
  return Updates().where('update_id', update_id).first();
}

function getSingleUpdateSlug(schedule_url) {
  return Updates().where('schedule_url', schedule_url).first();
}

function getUpdatesOfUser(username) {
  return Updates().where('username', username);
}

function getUpdatesOfScheduleId(schedule_id) {
  return Updates().where('schedule_id', schedule_id).first();
}

function addUpdate(update) {
  return Updates().insert(update, 'update_id');
}

function deleteUpdate(update_id) {
  return Updates().where('update_id', update_id).del();
}

function updateUpdate(update_id, updates) {
  return Updates().where('update_id', update_id).update(updates);
}

function updateUpdateUsername(username, updates) {
  return Updates().where('username', username).update(updates);
}

function deleteAllUpdatesOfUser(username) {
  return Updates().where('username', username).del();
}


function changeUsernameAllUpdatesOfUser(username, updates) {
  return Updates().update('username', username).update(updates);
}



// deleteAllUpdates? 

module.exports = {
  getAllUpdates: getAllUpdates,
  getSingleUpdate: getSingleUpdate,
  getSingleUpdateSlug: getSingleUpdateSlug,
  getUpdatesOfUser: getUpdatesOfUser,
  getUpdatesOfScheduleId: getUpdatesOfScheduleId,
  addUpdate: addUpdate,
  deleteUpdate: deleteUpdate,
  deleteAllUpdatesOfUser: deleteAllUpdatesOfUser,
  updateUpdate: updateUpdate,
  updateUpdateUsername: updateUpdateUsername,
  changeUsernameAllUpdatesOfUser: changeUsernameAllUpdatesOfUser
};
