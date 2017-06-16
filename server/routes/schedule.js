var express = require('express');
var router = express.Router();
var uuid = require('uuid');
var authHelpers = require('../auth/_helpers');
var schedule_queries = require('../queries/schedule_queries');
var tags_queries = require('../queries/tag_queries');

// S - GET a single schedule from url
router.get('/schedule_url/:schedule_url', function(req, res, next) {

  schedule_queries.getSingleScheduleUrl(req.params.schedule_url)

    .then(function(schedule) { res.status(200).json(schedule); })
    .catch(function(error) { next(error); });
});



// S - GET a single schedule 
router.get('/schedule/:schedule_id', function(req, res, next) {
  
  schedule_queries.getSingleSchedule(req.params.schedule_id)

    .then(function(schedule) {  res.status(200).json(schedule); })
    .catch(function(error) { console.log(error); next(error); });
});



// I - GET all schedules 
router.get('/schedulesAll', function(req, res, next) {

  schedule_queries.getAllSchedules()
  
    .then(function(schedules) { res.status(200).json(schedules);})
    .catch(function(error) { next(error); });
});



// I - GET all schedules of user 
router.get('/schedules', authHelpers.usernameParamsRequired, function(req, res, next) {

  console.log(req.session.username);
  schedule_queries.getSchedulesOfUser(req.session.username)

      .then(function(schedule) { res.status(200).json(schedule); })
      .catch(function(error) { next(error); });
});



// N - POST a single schedule 
router.post('/schedules', authHelpers.loginAccessUser, function(req, res, next) {

  // var schedule_url_array = req.body.schedule_url.split('-');
  // // cb36e0dc-9685-46a4-8c3d-5b15c5d8d1f9
  
  // var username = req.session.username; 
  // var schedule_id = schedule_url_array[4]; 
  // var updates_id = schedule_url_array[0];
  // var tags_id = schedule_url_array[1] + schedule_url_array[2];
  // var schedule_title = '';
  // var schedule_url = req.body.schedule_url; 
  // // schedule_start_date already exists. 
  
  // var combined = {
  //   username,
  //   schedule_id,
  //   updates_id,
  //   tags_id,
  //   schedule_title,
  //   schedule_url
  //   // schedule_start_date already exists.
  // }
   

  // // for creation of tags.
  // let schedule_id = req.body.schedule_id;
  // let schedule_url = req.body.schedule_url;
  // let tags_id = req.body.tags_id;
  // let tag_id = uuid();
  // let username = req.body.username;
  // let updateTag = false;
  // let tag_text = "";

  // let tagObject = {
  //   schedule_id,
  //   schedule_url,
  //   tags_id,
  //   tag_id,
  //   tag_text,
  //   updateTag,
  //   username
  // }

  // tags_queries.addTag(tagObject);

  console.log(req.body)

  schedule_queries.addSchedule(req.body.data)

    .then(function(schedule_id_array) {

       schedule_queries.getSingleSchedule(schedule_id_array[0]);
    })
    .then(function(schedule) {
      // console.log(schedule);
      res.status(200).json(schedule);
    })

  .catch(function(error) {
    next(error);
  });

});



// U - PUT a single schedule 
router.put('/schedules', authHelpers.loginAccessUser, function(req, res, next) {
  // req.body = { schedule_title: "blah blah"}

  console.log(req.body)
   schedule_queries.updateSchedule(req.body.schedule_id, req.body)

    .then(function(scheduleArray) {
      console.log(scheduleArray)
        schedule_queries.getSingleSchedule(scheduleArray[0])
    })

    .then(function(schedule) { 
      console.log(schedule);
      // I can't figure out why when it gets sent as a json, it doesn't send. 
        res.status(200).json(schedule); 
    })

    .catch(function(error) { next(error); });
});




// D

router.delete('/schedules/:schedule_id', authHelpers.loginAccessUser, function(req, res, next) {
    // GET a single schedule
  schedule_queries.getSingleSchedule(req.params.schedule_id)
    
    .then(function(schedule) {
          // DELETE a single schedule
        schedule_queries.deleteSchedule(req.params.schedule_id)

    .then(() => { res.status(200).json(schedule); })


    .then(() => { res.status(200).json(schedule); })
    .catch((error) => { next(error); });  
  })
  .catch((error) => { next(error);
  });
});


module.exports = router;








/*


-- this is not necessary, because it already filters this information on an application level. 
// S

*/
