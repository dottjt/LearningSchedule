const express = require('express');
const router = express.Router();

const authHelpers = require('../auth/_helpers');
const passport = require('../auth/local');
const user_queries = require('../queries/user_queries');
const crypto = require('crypto');

const fourohfour = require('../views/utility/404');
const fiveohfive = require('../views/utility/500');
const login = require('../views/auth/login');
const forgot = require('../views/auth/forgot');



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
              
              if (err) { 
                // handleResponse(res, 500, 'error'); 
                res.marko(fiveohfive, {
                    message: 'Your email or password was incorrect'
                }); 

              }


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
  .catch((err) => { 
    // handleResponse(res, 500, 'error'); 
    res.marko(fiveohfive, {
        message: 'Your email or password was incorrect'
    });   
  });
});




// authHelpers.loginRedirect
router.post('/login', (req, res, next) => {

  req.logout();
  // first logout if person is already logged in. 
  res.clearCookie('yolo');

  passport.authenticate('local-signup', (err, user, info) => {
    if (err) { 
      // handleResponse(res, 500, 'error'); 
        res.marko(fiveohfive, {
            message: 'Your email or password was incorrect'
        }); 
    }

    if (!user) {
        res.marko(login, {
            message: 'Your email or password was incorrect'
        }); 
      }

    if (user) {

      req.logIn(user, function (err) {

      if (err) { 
      //  handleResponse(res, 500, 'error'); 
        res.marko(fiveohfive, {
            message: 'Your email or password was incorrect'
        }); 

      }
      
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
        
        res.marko(fiveohfive, {
            message: 'Your email or password was incorrect'
        }); 

        // return res.redirect('/forgot');

      } else { // if user found. 

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
        res.marko(forgot, {
            message: 'Your email or password was incorrect'
        }); 
      //res.redirect('/forgot');
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
