const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');
const knex = require('../db/users_connection');
const authHelpers = require('./_helpers');

const options = {};

init();

passport.use('local-signup', new LocalStrategy({
    // by default, local strategy uses username and password, we will override with email
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true // allows us to pass back the entire request to the callback
},
function(req, email, password, done) {

  
    // asynchronous
    // User.findOne wont fire unless data is sent back
    // find a user whose email is the same as the forms email
    // we are checking to see if the user trying to login already exists
    return knex('user').where({ email }).first()
      .then((user) => {
      if (!user) return done(null, false);

      if (!authHelpers.comparePass(password, user.password)) {
        return done(null, false);
      } else {
        return done(null, user);
      }
    })
    .catch((err) => { return done(err); });
}));


/*
passport.use(new LocalStrategy(options, (username, password, done) => { // this doesn't work, no idea why. 
  // check to see if the email exists
  console.log(username);
  console.log(password);
  console.log('here we get')
  knex('user').where({ username }).first()
  .then((user) => {
    if (!user) return done(null, false);
    if (!authHelpers.comparePass(password, user.password)) {
      return done(null, false);
    } else {
      return done(null, user);
    }
  })
  .catch((err) => { return done(err); });
}));
*/
module.exports = passport;
