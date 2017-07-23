const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const path = require('path');

const authHelpers = require('../auth/_helpers');

const user_queries = require('../queries/user_queries');
const summary_queries = require('../queries/summary_queries');
const schedule_queries = require('../queries/schedule_queries');
const update_queries = require('../queries/update_queries');
const tag_queries = require('../queries/tag_queries');



router.get('/user', authHelpers.loginAccessUser, (req, res, next)  => {
  handleResponse(res, 200, 'success');
});


router.get('/admin', authHelpers.adminRequired, (req, res, next)  => {
  handleResponse(res, 200, 'success');
});


function handleResponse(res, code, statusMsg) {
  res.status(code).json({status: statusMsg});
}


// get user details for output


// the url at this stage doesn't mean anything. It's already in application anyway. 
router.get('/users', authHelpers.usernameParamsRequired, (req, res, next)  => {

    user_queries.getSingleUser(req.session.username)
      .then(function(user) { res.status(200).json(user);})
      .catch(function(error) { next(error); });
});



// U
router.put('/users', authHelpers.loginAccessUser, function(req, res, next) {
    // PUT (update) schedules
    
    console.log(req.body)

   user_queries.updateUser(req.session.username, req.body)

    .then(function() {
        return user_queries.getSingleUser(req.session.username);
    })
  .then((schedule) => { res.status(200).json(schedule); })
  .catch((error) => { next(error); });
});


router.put('/users_username', authHelpers.loginAccessUser, function(req, res, next) {
  return schedule_queries.deleteAllSchedulesOfUser(req.session.username)
    .then(() => {
        return res.status(200);
    })
});


// U
router.put('/users_username', authHelpers.loginAccessUser, function(req, res, next) {
    
   return user_queries.updateUser(req.session.username, req.body)

    .then(() => {

        return summary_queries.updateSummaryUsername(req.session.username, req.body) //req.body.username doesn't work either. 
        // basically, these don't work. 
    }).then(() => {

        return schedule_queries.updateScheduleUsername(req.session.username, req.body)
        
    }).then(() => {

        return tag_queries.updateTagUsername(req.session.username, req.body)
        
    }).then(() => {

        return update_queries.updateUpdateUsername(req.session.username, req.body)
        
    }).then(() => {

        req.session.username = req.body.username; 


    }).then(() => {
        return user_queries.getSingleUser(req.session.username);
    })
    .then((schedule) => { res.status(200).json(schedule); })
    .catch((error) => { next(error); });
});



router.put('/users_password', authHelpers.loginAccessUser, function(req, res, next) {
    
    console.log(req.body.data);
    let salt = bcrypt.genSaltSync();
    let hash = bcrypt.hashSync(req.body.data, salt);

    let passwordObject = { password: hash };

   return user_queries.updateUserPassword(req.session.username, passwordObject)

    .then(() => {
        return user_queries.getSingleUser(req.session.username);
    })
    .then((schedule) => { 
        res.status(200).json(schedule); 
    })
    .catch((error) => { next(error); });
});


router.put('/users_email', authHelpers.loginAccessUser, function(req, res, next) {
  console.log(req.session.username)
  console.log(req.body)

  return user_queries.updateUser(req.session.username, req.body)
    .then(() => {
        return res.status(200);
    })
});







router.put('/users_schedules_update', authHelpers.loginAccessUser, function(req, res, next) {
    let updates = {username: req.body.username};

    return schedule_queries.changeUsernameAllSchedulesOfUser(req.body.username, req.body)
        .then(() => {
            return res.status(200);
        })
});


router.put('/users_summaries_update', authHelpers.loginAccessUser, function(req, res, next) {

    return summary_queries.changeUsernameAllSummariesOfUser(req.session.username, req.body)
        .then(() => {
            return res.status(200);
        })
});


router.put('/users_updates_update', authHelpers.loginAccessUser, function(req, res, next) {

    return update_queries.changeUsernameAllUpdatesOfUser(req.session.username, req.body)
        .then(() => {
            return res.status(200);
        })
});

router.put('/users_tags_update', authHelpers.loginAccessUser, function(req, res, next) {

    return tag_queries.changeUsernameAllTagsOfUser(req.session.username, req.body)
        .then(() => {
            return res.status(200);
        })
});

router.put('/users_user_update', authHelpers.loginAccessUser, function(req, res, next) {
        
    return user_queries.changeUsernameAllUserInformation(req.session.username, req.body)
        .then(() => {
            req.session.username = req.body.username; 
        }).then(() => {
            return res.sendFile(path.resolve(__dirname, '..', 'views', 'index.html'));
        })
});







router.delete('/users', authHelpers.loginAccessUser, function(req, res, next) {

        req.logout();
        req.session.destroy();
        res.clearCookie('yolo');
});



router.delete('/users_schedules_delete', authHelpers.loginAccessUser, function(req, res, next) {
  return schedule_queries.deleteAllSchedulesOfUser(req.session.username)
    .then(() => {
        return res.status(200);
    })
});


router.delete('/users_summaries_delete', authHelpers.loginAccessUser, function(req, res, next) {

  return summary_queries.deleteAllSummariesOfUser(req.session.username)
    .then(() => {
        return res.status(200);
    })
});


router.delete('/users_updates_delete', authHelpers.loginAccessUser, function(req, res, next) {

  return update_queries.deleteAllUpdatesOfUser(req.session.username)
    .then(() => {
        return res.status(200);
    })
});

router.delete('/users_tags_delete', authHelpers.loginAccessUser, function(req, res, next) {
  return tag_queries.deleteAllTagsOfUser(req.session.username)
    .then(() => {
        return res.status(200);
    })
});

router.delete('/users_user_delete', authHelpers.loginAccessUser, function(req, res, next) {
  return user_queries.deleteAllUserInformation(req.session.username)
    .then(() => {
        return res.sendFile(path.resolve(__dirname, '..', 'views', 'index.html'));
    })
});



module.exports = router;
