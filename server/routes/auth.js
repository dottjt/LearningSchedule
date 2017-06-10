const express = require('express');
const router = express.Router();

const authHelpers = require('../auth/_helpers');
const passport = require('../auth/local');
const user_queries = require('../queries/user_queries');
const crypto = require('crypto');
const uuid = require('uuid');

const fourohfour = require('../views/utility/404');
const fiveohfive = require('../views/utility/500');
const login = require('../views/auth/login');
const forgot = require('../views/auth/forgot');
const verify = require('../views/auth/verify');


// register user 
router.post('/register', (req, res, next)  => {
  
  req.logout();
  res.clearCookie('yolo');
  
  authHelpers.createUser(req, res)

    .then((response) => {
      
      passport.authenticate('local-signup', (err, user, info) => {

          if (user) { 
            
            req.logIn(user, function (err) {
              
              // if login error 
              if (err) { 
                res.marko(fiveohfive); 
              }

              // create verificationToken
              let token = authHelpers.createToken(); 
              let tokenObject = { verification_token: token }
              let username = user.username; 
              let email = user.email;
              // set verification token in the database
              return user_queries.setVerificationToken(username, tokenObject)

                .then(() => {
                    // send verify account email to user 
                    authHelpers.verifyAccount(token, email);

                    res.marko(login, {
                      message: 'We have sent a verification link to your email.'
                    })
                })

              // verification page. 
              // return user_queries.getSingleUser(user.username)
              //     .then((singleUser) => {
              //       console.log("singleUser", singleUser)
              //       // res.redirect('/' + req.user.username)

              //       res.cookie('yolo', singleUser.summaries_id, { maxAge: 604800000000, httpOnly: false });
              //       res.redirect('/' + singleUser.username)
              //     })
                  
            });

          } else { // if there is no user object 
            res.marko(fourohfour, {
                message: 'Unfortunately your email or password is incorrect'
            }); 
          }


      })(req, res, next);
    })
  .catch((err) => { 
    res.marko(fiveohfive, {
        na: ''
    });   
  });
});



// authHelpers.loginRedirect
// login user via login details. 
router.post('/login', (req, res, next) => {

  req.logout();
  // first logout if person is already logged in. 
  res.clearCookie('yolo');

  passport.authenticate('local-signup', (err, user, info) => {
    if (err) { 
      // handleResponse(res, 500, 'error'); 
        res.marko(fiveohfive, {
            message: ''
        }); 
    } // end of if 

    if (!user) {
        res.marko(login, {
            message: 'Unfortunately your email or password is incorrect'
        }); 
    } // end of if 

    if (user) {

      let verificationBoolean = user_queries.getVerificationBoolean(user.username);
      
      if (verificationBoolean === false) {

        // send verification email
        authHelpers.verifyAccount();

        res.marko(login, {
          message: 'Your account is not verified. We have sent a link to your email!'
        })
      }

      req.logIn(user, function (err) {

      if (err) { 
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
    } else {
        res.marko(fiveohfive, {
          na: ''
        });   
    }
  })(req, res, next);
});



// login user via verification token 
router.get('/verify/:username/:token', (req, res, next)  => {
  
  let emailToken = req.params.token;
  let username = req.params.username;

  let verificationToken = user_queries.getVerificationToken(username);
  let resetToken = user_queries.getResetToken(username);

  // this is if user wants to reset password 
  if (resetToken === emailToken) {
    
    // generate password
    let password = uuid().substring(0,8);

    // send temporary password to user 
    authHelpers.temporaryPassword(password); 

    // redirect to login, and tell user password will arive. 
    res.marko(login, {
        message: 'Your new, temporary password should arrive in your mailbox shortly.'
    }); 

  // if user verifying account. 
  } else if (verificationToken === emailToken) {
    
    // payload to setVerificationToken
    let updateVerificationBoolean = { verification_boolean: true };

    // set verification boolean
    user_queries.setVerificationToken(username, updateVerificationBoolean);

    // send them to the login 
    res.marko(login, {
        message: 'You\'re all setup and ready to go!'
    });

  } else {
    res.marko(fiveohfive, {
        message: ''
    }); 
  }
});


router.put('/reset', function(req, res, next) {
    
    let salt = bcrypt.genSaltSync();
    let hash = bcrypt.hashSync(req.body.password, salt);

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



// send verification token to email 
router.post('/forgot', function(req, res, next) {


  let email = req.body.email;
  let token = authHelpers.createToken(); 

  return user_queries.getSingleUserEmail(email)
    .then((user) => {
        return user_queries.setResetToken() 
          .then(() => {
            req.session.resetToken = token;

            authHelpers.forgotPassword(token, user.email);
  
        }).then(() => {
            res.marko(verify, {
                message: 'No account with that email address exists'
            }); 

        })

        // user.resetPasswordToken = token;
        // user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

      }).catch((err) => {
        res.marko(forgot, {
            message: 'It seems that email doesn\'t exist'
        }); 
    })


});


// logout user
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
