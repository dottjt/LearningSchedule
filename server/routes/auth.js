const express = require('express');
const router = express.Router();

const authHelpers = require('../auth/_helpers');
const passport = require('../auth/local');
const user_queries = require('../queries/user_queries');


router.post('/register', authHelpers.loginRedirect, (req, res, next)  => {
  return authHelpers.createUser(req, res)
    .then((response) => {
      
      passport.authenticate('local-signup', (err, user, info) => {

          if (user) { 
            req.logIn(user, function (err) {
              if (err) { handleResponse(res, 500, 'error'); }

              return user_queries.getSingleUser(req.user.username)
                  .then((singleUser) => {

                    res.clearCookie('yolo');
                    res.cookie('yolo', singleUser.summaries_id, { maxAge: 604800000000, httpOnly: false });
                    res.redirect('/' + req.user.username)
                  })
            });
          }

      })(req, res, next);
    })
  .catch((err) => { handleResponse(res, 500, 'error'); });
});

router.post('/login', authHelpers.loginRedirect, (req, res, next) => {

  passport.authenticate('local-signup', (err, user, info) => {
    if (err) { handleResponse(res, 500, 'error'); }
    if (!user) { handleResponse(res, 404, 'User not found'); }
    if (user) {
      req.logIn(user, function (err) {

      if (err) { handleResponse(res, 500, 'error'); }
      
      // handleResponse(res, 200, 'success');

      console.log('Login successful :)');

      return user_queries.getSingleUser(req.user.username)
      .then((singleUser) => {

        res.clearCookie('yolo');
        res.cookie('yolo', singleUser.summaries_id, { maxAge: 604800000000, httpOnly: false });
        res.redirect('/' + req.user.username)
      })
      

      });
    }
  })(req, res, next);
});

router.get('/logout', authHelpers.loginRequired, (req, res, next) => {

  // handleResponse(res, 200, 'success');

  // res.clearCookie('yolo', '', { maxAge: new Date() });
  req.logout();
  req.session.destroy();
  res.clearCookie('yolo');
  res.redirect('/login');

});

// *** helpers *** //

function handleLogin(req, user) {
  return new Promise((resolve, reject) => {
    req.login(user, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
}

function handleResponse(res, code, statusMsg) {
  res.status(code).json({status: statusMsg});
}

module.exports = router;
