const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const knex = require('../db/users_connection');
const uuid = require('uuid'); 
const sillyname = require('sillyname');


function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

function createUser(req, res) {
  return handleErrors(req)
  .then(() => {

    let salt = bcrypt.genSaltSync();
    let hash = bcrypt.hashSync(req.body.password, salt);
    let username = uuid().substring(0,8);
    let summaries_id = uuid();
    let display_name = sillyname(); 
    let avatar_url = "plant" + Math.ceil(Math.random() * 4) + ".png";

    console.log(avatar_url);

    knex('summary').del()
      .then(() => {
        return knex('summa\ry').insert({
          username: username,
          summaries_id: summaries_id,
          summary_text: ''
        });
      }).then(() => {
          return knex('summary').insert({
          username: username,
          summaries_id: summaries_id,
          summary_text: ''
        });
      }).then(() => {
          return knex('summary').insert({
          username: username,
          summaries_id: summaries_id,
          summary_text: ''
        });
      });


    return knex('user')
      .insert({
        email: req.body.email,
        password: hash,
        username: username,
        display_name: display_name,
        summaries_id: summaries_id,
        avatar_url: avatar_url
      })
      .returning('*');
  })
  .catch((err) => {
    res.status(400).json({status: err.message});
  });
}


function handleErrors(req) {
  return new Promise((resolve, reject) => {
    if (req.body.email.length < 6 && req.body.email.indexOf('hello') > -1) { // this may or may not work.
      reject({
        message: 'Invalid password, bby.'
      });
    }
    else if (req.body.password.length < 6) {
      reject({
        message: 'Password must be longer than 6 characters'
      });
    } else {
      resolve();
    }
  });
}


function forgotPassword(token, user) {

  let smtpTransport = nodemailer.createTransport('SMTP', {
    service: 'SendGrid',
    auth: {
      user: '!!! YOUR SENDGRID USERNAME !!!',
      pass: '!!! YOUR SENDGRID PASSWORD !!!'
    }
  });

  let mailOptions = {
    to: user.email,
    from: 'passwordreset@demo.com',
    subject: 'Learning Schedule Account - Password Reset',
    text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
      'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
      'http://' + req.headers.host + '/reset/' + token + '\n\n' +
      'If you did not request this, please ignore this email and your password will remain unchanged.\n'
  };

  smtpTransport.sendMail(mailOptions, function(err) {
    req.flash('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
  });

}



function confirmAccount(token, user) {

  let smtpTransport = nodemailer.createTransport('SMTP', {
    service: 'SendGrid',
    auth: {
      user: '!!! YOUR SENDGRID USERNAME !!!',
      pass: '!!! YOUR SENDGRID PASSWORD !!!'
    }
  });

  let mailOptions = {
    to: user.email,
    from: 'passwordreset@demo.com',
    subject: 'Confirm your Learning Schedule Account, you bastard.',
    text: 'Click the on the link below. Your mother says it\'s good for you. \n\n' +
      'http://' + req.headers.host + '/confirm/' + token + '\n\n' +
      'If you did not request this, then someone supicious is using your email account and should be shot with a rifle.\n'
  };

  smtpTransport.sendMail(mailOptions, function(err) {
    req.flash('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
  });
  
}


function createToken() {
  crypto.randomBytes(20, function(err, buf) {
    var token = buf.toString('hex');
    return token; 
  });
}




// okay, this is working now and returning juliusreade. 
function usernameParamsRequired(req, res, next) {

  var url, urlArray, urlUsername; 

  if(req.headers.referer !== undefined) {
        url = req.headers.referer;
        urlArray = url.split('/');
        // [ 'http:', '', 'localhost:3000', 'juliusreade' ]

        urlUsername = urlArray[3];
        req.session.username = urlUsername;
    } else {

        url = req._parsedOriginalUrl.pathname;
        urlArray = url.split('/');
        // [ '', 'api', 'v1', 'summaries' ]

        urlUsername = urlArray[1];        
        req.session.username = urlUsername;
  } 

    return next();

}



// for index in routes.

function userCheck(req, res, next) {

  var url, urlArray, urlUsername; 

    url = req.url;
    console.log(req.url)
    urlArray = url.split('/');
    // [ 'http:', '', 'localhost:3000', 'juliusreade' ]

    urlUsername = urlArray[1];
    console.log("urlUsername", urlUsername);
    req.session.username = urlUsername;

    console.log(req.session.username)
    
    return next(); 

}
// so userCheck return 





// original functions 
// function loginRequired(req, res, next) {
//   if (!req.user) return res.status(401).json({status: 'Please log in'});
//   return next();
// }

// function loginRedirect(req, res, next) {
//   if (req.user) return res.status(401).json(
//     {status: 'You are already logged in'});
//   return next();
// }



function adminRequired(req, res, next) {
  if (!req.user) res.status(401).json({status: 'Please log in'});
  return knex('user').where({email: req.user.email}).first()
  .then((user) => {
    if (!user.admin) res.status(401).json({status: 'You are not authorized'});
    return next();
  })
  .catch((err) => {
    res.status(500).json({status: 'Something bad happened'});
  });
}

function loginRequired(req, res, next) {

  if (!req.user) {
      res.redirect('/login');
  } 
  return next();
}

function loginAccessUser(req, res, next) {
  if (req.user) {
    return next();
  } else {
    console.log('user not logged in')
    res.status(400);
  }
}

function loginRedirect(req, res, next) {
  if (req.user) {
    res.redirect('/' + req.session.username)
  }
  return next();
}


module.exports = {
  comparePass,
  createUser,
  usernameParamsRequired,
  userCheck,

  adminRequired,
  loginRequired,
  loginRedirect,
  loginAccessUser,

  forgotPassword,
  createToken,
  confirmAccount

};
