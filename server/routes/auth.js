const express = require('express');
const router = express.Router();

const authHelpers = require('../auth/_helpers');
const passport = require('../auth/local');
const user_queries = require('../queries/user_queries');
const crypto = require('crypto');




// authHelpers.loginRedirect
router.post('/register', (req, res, next)  => {
  
  req.logout();
  // first logout if person is already logged in. 
  res.clearCookie('yolo');
  
  authHelpers.createUser(req, res)

    .then((response) => {
      
      passport.authenticate('local-signup', (err, user, info) => {

          if (user) { 
            
            req.logIn(user, function (err) {
              
              if (err) { handleResponse(res, 500, 'error'); }



              // return user_queries.getSingleUser(user.username)
                  // .then((singleUser) => {
                  //   console.log("singleUser", singleUser)
                  //   // res.redirect('/' + req.user.username)

                  //   res.cookie('yolo', singleUser.summaries_id, { maxAge: 604800000000, httpOnly: false });
                  //   res.redirect('/' + singleUser.username)
                  // })
                  
            });
          }

      })(req, res, next);
    })
  .catch((err) => { handleResponse(res, 500, 'error'); });
});




// authHelpers.loginRedirect
router.post('/login', (req, res, next) => {

  req.logout();
  // first logout if person is already logged in. 
  res.clearCookie('yolo');

  passport.authenticate('local-signup', (err, user, info) => {
    if (err) { handleResponse(res, 500, 'error'); }
    if (!user) { handleResponse(res, 404, 'User not found'); }
    if (user) {
      
      req.logIn(user, function (err) {

      if (err) { handleResponse(res, 500, 'error'); }
      
      return user_queries.getSingleUser(user.username)
        .then((singleUser) => {

          res.cookie('yolo', singleUser.summaries_id, { maxAge: 604800000000, httpOnly: false });
          res.redirect('/' + singleUser.username)
        })
      

      });
    }
  })(req, res, next);
});


router.post('/forgot', function(req, res, next) {

  // req.body.username or email. I assume it will be email. 

  let token = authHelpers.createToken(); 

  return user_queries.getSingleUserEmail(req.body.email)
    .then((user) => {

      if(user === undefined) { // if no user 
        console.log(user);
        req.flash('error', 'No account with that email address exists.');
        
        return res.redirect('/forgot');
      } else { // if user found. 

        // can I just use a session perhaps? 
        return user_queries.setResetToken() 
          .then(() => {

            req.session.resetToken = token;
            authHelpers.forgotPassword(token, user.email);
  
            req.flash('error', 'We have sent you a link to your email address.');

            return res.redirect('/forgot');

          })

        // user.resetPasswordToken = token;
        // user.resetPasswordExpires = Date.now() + 3600000; // 1 hour


      }
    }).catch((err) => {
      console.log(err);
      res.redirect('/forgot');

    })


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
