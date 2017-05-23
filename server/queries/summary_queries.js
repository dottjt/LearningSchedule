const knex = require('../db/users_connection');
// seperate the schedule summaries from the schedule users. 

function Summaries() {
  return knex('summary');
}

function getAllSummaries() {
  return Summaries().select();
}

function getSingleSummary(id) {
  return Summaries().where('id', id).first();
}

function getSummariesOfUser(username) {
  return Summaries().where('username', username);
}

function getSummariesOfScheduleId(schedule_id) {
    return Summaries().where('schedule_id', schedule_id).first();
}

function addSummary(summary) {
  return Summaries().insert(summary, 'summary_id');
}

function deleteSummary(summary_id) {
  return Summaries().where('summary_id', summary_id).del();
}

function updateSummary(id, updates) {
  return Summaries().where('id', id).update(updates);
}

function deleteAllSummariesOfUser(username) {
  return Summaries().where('username', username).del();
}


// deleteAllSummaries? 

module.exports = {
  getAllSummaries: getAllSummaries,
  getSingleSummary: getSingleSummary,
  getSummariesOfUser: getSummariesOfUser,
  getSummariesOfScheduleId: getSummariesOfScheduleId,
  addSummary: addSummary,
  deleteSummary: deleteSummary,
  deleteAllSummariesOfUser: deleteAllSummariesOfUser,
  updateSummary: updateSummary
};
