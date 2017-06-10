const express = require('express');
const path = require('path');
const router = express.Router();
const user_queries = require('../queries/user_queries');
const authHelpers = require('../auth/_helpers');


const about = require('../views/other/about');
const contact = require('../views/other/contact');
const blog = require('../views/other/blog');
const login = require('../views/auth/login');
const signup = require('../views/auth/signup');
const verify = require('../views/auth/verify');
const forgot = require('../views/auth/forgot');
const fourohfour = require('../views/utility/404');



// authHelpers.userCheck
router.get('/:username', (req, res, next) => {
    
  if(req.params.username === 'about') {
      res.marko(about);
  } else if (req.params.username === 'contact') {
      res.marko(contact);
  } else if (req.params.username === 'blog') {
      res.marko(blog);
  } else if (req.params.username === 'login') {
      res.marko(login);
  } else if (req.params.username === 'signup') {
      res.marko(signup);
  } else if (req.params.username === 'forgot') {
      res.marko(forgot);
  } else if (req.params.username === 'verify') {
      res.marko(verify);
  } else {

    user_queries.getSingleUser(req.params.username)
        .then((user) => {

            if (user === undefined) {

                res.marko(fourohfour);
                
            } else {

                res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));

            }
        });
    };
});


router.get('/:username/schedule/:schedule_title', (req, res, next) => {


    user_queries.getSingleUser(req.params.username)
        .then((user) => {
            console.log(user);
            if (user === undefined) {

                res.marko(fourohfour);
                
            } else {

                res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));

            }
        });
});






module.exports = router;
