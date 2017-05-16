const bcrypt = require('bcryptjs');
const knex = require('../db/users_connection');
const uuid = require('uuid'); 
const sillyname = require('sillyname');

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

function createUser(req, res) {
  return handleErrors(req)
  .then(() => {

    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);
    const username = uuid().substring(0,8);
    let summaries_id = uuid();
    let display_name = sillyname(); 

    return knex('user')
    .insert({
      email: req.body.email,
      password: hash,
      username: username,
      display_name: display_name,
      summaries_id: summaries_id,
    })
    .returning('*');
  })
  .catch((err) => {
    res.status(400).json({status: err.message});
  });
}


function handleErrors(req) {
  return new Promise((resolve, reject) => {
    if (req.body.email.length < 6) {
      reject({
        message: 'Email must be longer than 6 characters'
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

  adminRequired,
  loginRequired,
  loginRedirect,
  loginAccessUser,

};
