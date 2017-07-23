const knex = require('../db/schedules_connection');
// seperate the schedule tags from the schedule users. 

function Tags() {
  return knex('tag');
}

function getAllTags() {
  return Tags().select();
}

function getSingleTag(tag_id) {
  return Tags().where('tag_id', tag_id).first();
}

function getSingleTagUrl(schedule_url) {
  return Tags().where('schedule_url', schedule_url).first();
}

function getTagsOfUser(username) {
  return Tags().where('username', username);
}

function addTag(tag) {
  return Tags().insert(tag, 'tag_id');
}

function updateTag(tag_id, updates) {
  return Tags().where('tag_id', tag_id).update(updates);
}

function updateTagUsername(username, updates) {
  return Tags().where('username', username).update(updates);
}


function deleteTag(tag_id) {
  return Tags().where('tag_id', tag_id).del();
}

function deleteAllTagsOfUser(username) {
  return Tags().where('username', username).del();
}

function changeUsernameAllTagsOfUser(username) {
  return Tags().update('username', username);
}



module.exports = {
  getAllTags: getAllTags,
  getSingleTag: getSingleTag,
  getSingleTagUrl: getSingleTagUrl,
  getTagsOfUser: getTagsOfUser,
  addTag: addTag,
  deleteTag: deleteTag,
  deleteAllTagsOfUser: deleteAllTagsOfUser,
  updateTag: updateTag,
  changeUsernameAllTagsOfUser: changeUsernameAllTagsOfUser
};
