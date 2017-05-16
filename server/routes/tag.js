var express = require('express');
var router = express.Router();
var uuid = require('uuid');
var authHelpers = require('../auth/_helpers');
var tag_queries = require('../queries/tag_queries');



// S - GET a single tag from url
router.get('/tag/:schedule_url', function(req, res, next) {

  tag_queries.getSingleTagUrl(req.params.schedule_url)

    .then(function(tag) { res.status(200).json(tag); })
    .catch(function(error) { next(error); });
});



// S - GET a single tag
router.get('/tag/:tag_id', function(req, res, next) {

  tag_queries.getSingleTag(req.params.tag_id)

    .then(function(tag) { res.status(200).json(tag); })
    .catch(function(error) { next(error); });
});



// I - GET all tags 
router.get('/tags', function(req, res, next) {

  tag_queries.getAllTags()

    .then(function(tag) { res.status(200).json(tag); })
    .catch(function(error) { next(error); });
});



// I - GET all tags of user
router.get('/tags', authHelpers.usernameParamsRequired, function(req, res, next) {

  tag_queries.getTagsOfUser(req.session.username)

    .then(function(tag) { res.status(200).json(tag); })
    .catch(function(error) { next(error); });
});




// N
router.post('/tags', authHelpers.loginAccessUser, function(req, res, next) {
  let schedule_id = req.body.schedule_id; 
  let tags_id = req.body.tags_id;
  let tag_text = req.body.tag_text;
  let username = req.session.username;
  let tag_index = 3;    // this needs to change. 
  let tag_id = uuid(); 

   // is there a way to retrieve this via sessions? Probably, yes :) 

  let combined = {
    schedule_id,
    tag_id,
    tags_id,
    username,
    tag_text,
    tag_index
  }

  tag_queries.addTag(combined)  // previously, req.body
  
  .then(function(tag_id_array) {
    return tag_queries.getSingleTag(tag_id_array[0]);
  })
  .then(function(tag) {
    res.status(200).json(tag);
  })
  .catch(function(error) {
    next(error);
  });
});


// U
router.put('/tags/:tag_id', authHelpers.loginAccessUser, function(req, res, next) {
    // PUT (update) tags
  if(req.body.hasOwnProperty('tag_id')) {
    return res.status(422).json({
      error: 'You cannot update the id field'
    });
  }

  tag_queries.updateTag(req.params.tag_id, req.body)

    .then(function() {
        return tag_queries.getSingleTag(req.params.tag_id);
    })
  .then((tag) => { res.status(200).json(tag); })
  .catch((error) => { next(error); });
});


// D

router.delete('/tags/:tag_id', authHelpers.loginAccessUser, function(req, res, next) {
    // GET a single tag
  tag_queries.getSingleTag(req.params.tag_id)

    .then(function(tag) {
          // DELETE a single tag
        tag_queries.deleteTag(req.params.tag_id)

    .then(() => { res.status(200).json(tag); })
    .catch((error) => { next(error); });  
  })
  .catch((error) => { next(error);
  });
});

module.exports = router;











/*


// S
router.get('/tag/:schedule_url', function(req, res, next) {
    // GET a single tag
  tag_queries.getSingleTag(req.params.schedule_url)

    .then(function(tag) { res.status(200).json(tag); })
    .catch(function(error) { next(error); });
});


// I
router.get('/tags', authHelpers.ensureAuthenticated, function(req, res, next) {
    // GET all tags
  tag_queries.getAllTags()

    .then(function(tags) { res.status(200).json(tags);})
    .catch(function(error) { next(error); });
});

*/
/*
  IMPORTANT: S uses /schedule not /tags
             so not to conflict with GetAllUsertags! :) 
                                                         */
/*
// S
router.get('/tag/:tag_id', function(req, res, next) {
    // GET a single tag
  tag_queries.getSingleTag(req.params.tag_id)

    .then(function(tag) { res.status(200).json(tag); })
    .catch(function(error) { next(error); });
});

  var username_var;
  if (req.session.username) {
    username_var = req.session.username;
  } else {
    username_var = req.user.username;
  } 

*/
