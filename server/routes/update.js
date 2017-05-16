var express = require('express');
var router = express.Router();
var uuid = require('uuid');
var authHelpers = require('../auth/_helpers');
var update_queries = require('../queries/update_queries');



// S - GET single update via update_id
router.get('/update/:update_id', function(req, res, next) {

  update_queries.getSingleUpdate(req.params.update_id)
    .then(function(update) { res.status(200).json(update); })
    .catch(function(error) { next(error); });
});



// I - GET all schedules 
router.get('/updatesAll', function(req, res, next) {

  update_queries.getAllUpdates()
    .then(function(updates) { res.status(200).json(updates);})
    .catch(function(error) { next(error); });
});


                                                        
// I - GET all updates of user
router.get('/updates', authHelpers.usernameParamsRequired, function(req, res, next) {

  update_queries.getUpdatesOfUser(req.session.username)
    .then(function(schedule) { res.status(200).json(schedule); })
    .catch(function(error) { next(error); });
});



// N - POST a single update 

router.post('/updates', authHelpers.loginAccessUser, function(req, res, next) {

  // req.body = { schedule_url: 'blah, blah' }

  console.log(req.body)

  let schedule_id = req.body.schedule_id; 
  let updates_id = req.body.updates_id;
  let schedule_url = req.body.schedule_url;
  let username = req.session.username;
  let update_id = req.body.update_id;
  // from body or middleware 

  let update_title = '';
  let update_text = '';
  // generated on server 

  // update_date not needed

  let combined = {
    schedule_id: schedule_id,
    update_id: update_id,
    updates_id: updates_id,
    schedule_url: schedule_url,
    username: username,
    update_title: update_title,
    update_text: update_text
  }

  update_queries.addUpdate(combined)  // previously, req.body
  
  .then(function(update_id_array) {
    return update_queries.getSingleUpdate(update_id_array[0]);
  })
  .then(function(update) {
    res.status(200).json(update);
  })
  .catch(function(error) {
    next(error);
  });
});


// U - PUT a single update 
router.put('/updates/:update_id', authHelpers.loginAccessUser, function(req, res, next) {

  // if(req.body.hasOwnProperty('update_id')) {
  //   return res.status(422).json({
  //     error: 'You cannot update the id field'
  //   });
  // }

  update_queries.updateUpdate(req.params.update_id, req.body)

    .then(function() {
        return update_queries.getSingleUpdate(req.params.update_id);
    })
  .then((update) => { res.status(200).json(update); })
  .catch((error) => { next(error); });
});


// D

router.delete('/updates/:update_id', authHelpers.loginAccessUser, function(req, res, next) {
    // GET a single update
  update_queries.getSingleUpdate(req.params.update_id)

    .then(function(update) {
          // DELETE a single update
        update_queries.deleteUpdate(req.params.update_id)

    .then(() => { res.status(200).json(update); })
    .catch((error) => { next(error); });  
  })
  .catch((error) => { next(error);
  });
});

module.exports = router;
























