const express = require('express');
const router = express.Router();
const path = require('path');
const authHelpers = require('../auth/_helpers');
const user_queries = require('../queries/user_queries');


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
    
    console.log('users update shoot')
    console.log(req.body)

   user_queries.updateUser(req.session.username, req.body)

    .then(function() {
        return user_queries.getSingleUser(req.session.username);
    })
  .then((schedule) => { res.status(200).json(schedule); })
  .catch((error) => { next(error); });
});



module.exports = router;
