var express = require('express');
var router = express.Router();
var uuid = require('uuid');
var authHelpers = require('../auth/_helpers');
var summary_queries = require('../queries/summary_queries');


                                                        
// I 
router.get('/summaries', authHelpers.usernameParamsRequired, function(req, res, next) {
    // GET all summaries of a user

  summary_queries.getSummariesOfUser(req.session.username)
    .then(function(schedule_id) { res.status(200).json(schedule_id); })
    .catch(function(error) { next(error); });

});


// GetSummariesOfScheduleId

router.get('/summaries_schedule_id/:schedule_id', function(req, res, next) {
    // GET all summaries of a user
  summary_queries.getSummariesOfScheduleId(req.params.schedule_id)

    .then(function(schedule_id) { res.status(200).json(schedule_id); })
    .catch(function(error) { next(error); });
});

// // N
// router.post('/summaries', authHelpers.loginAccessUser, function(req, res, next) {

//   let username = req.session.username;
//   let summary_id = req.body.summary_id; 
//   let summary_text = req.body.summary_text;

//    // is there a way to retrieve this via sessions? Probably, yes :) 

//   let combined = {
//     summary_id,
//     username,
//     summary_text
//   }

//   summary_queries.addSummary(combined)  // previously, req.body
  
//   .then(function(summary_id_array) {
//     return summary_queries.getSingleSummary(summary_id_array[0]);
//   })
//   .then(function(summary) {
//     res.status(200).json(summary);
//   })
//   .catch(function(error) {
//     next(error);
//   });
// });


// U
router.put('/summaries/:id', authHelpers.loginAccessUser, function(req, res, next) {
    // PUT (update) summaries
  
  // if(req.body.hasOwnProperty('summary_id')) {
  //   return res.status(422).json({
  //     error: 'You cannot update the id field'
  //   });
  // } because it is in the body now :) 

  
  summary_queries.updateSummary(req.params.id, req.body)

    .then(function() {
        return summary_queries.getSingleSummary(req.params.id);
    })
  .then((summary) => { res.status(200).json(summary); })
  .catch((error) => { next(error); });
});


// D

router.delete('/summaries/:summary_id', authHelpers.loginAccessUser, function(req, res, next) {
    // GET a single summary
  summary_queries.getSingleSummary(req.params.summary_id)

    .then(function(summary) {
          // DELETE a single summary
        summary_queries.deleteSummary(req.params.summary_id)

    .then(() => { res.status(200).json(summary); })
    .catch((error) => { next(error); });  
  })
  .catch((error) => { next(error);
  });
});

module.exports = router;










/*
// I
router.get('/summaries', authHelpers.ensureAuthenticated, function(req, res, next) {
    // GET all summaries
  summary_queries.getAllSummaries()

    .then(function(summaries) { res.status(200).json(summaries);})
    .catch(function(error) { next(error); });
});


// S
router.get('/summary/:summary_id', function(req, res, next) {
    // GET a single summary
  summary_queries.getSingleSummary(req.params.summary_id)

    .then(function(summary) { res.status(200).json(summary); })
    .catch(function(error) { next(error); });
});
*/
