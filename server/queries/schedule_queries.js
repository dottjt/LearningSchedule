var knex = require('../db/schedules_connection');

function Schedules() {
  return knex('schedule');
}

function getAllSchedules() {
  return Schedules().select();
}

function getSingleSchedule(schedule_id) {
  return Schedules().where('schedule_id', schedule_id).first();
}

function getSingleScheduleUrl(schedule_url) {
  return Schedules().where('schedule_url', schedule_url).first();
}

function getSchedulesOfUser(username) {
  return Schedules().where('username', username);
}

function addSchedule(schedule) {
  return Schedules().insert(schedule, 'schedule_id');
}

function deleteSchedule(schedule_id) {
  return Schedules().where('schedule_id', schedule_id).del();
}

function updateSchedule(schedule_id, updates) {
  return Schedules().where('schedule_id', schedule_id).update(updates, 'schedule_id');
}

function updateScheduleUsername(username, updates) {
  return Schedules().where('username', username).update(updates, 'schedule_id');
}


function deleteAllSchedulesOfUser(username) {
  return Schedules().where('username', username).del();
}
 

module.exports = {
  getAllSchedules: getAllSchedules,
  getSingleSchedule: getSingleSchedule,
  getSingleScheduleUrl: getSingleScheduleUrl,
  getSchedulesOfUser: getSchedulesOfUser,
  addSchedule: addSchedule,
  deleteSchedule: deleteSchedule,
  deleteAllSchedulesOfUser: deleteAllSchedulesOfUser,
  updateSchedule: updateSchedule,
  updateScheduleUsername: updateScheduleUsername
};
