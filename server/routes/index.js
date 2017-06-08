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
const forgot = require('../views/auth/forgot');
const fourohfour = require('../views/utility/404');



// authHelpers.userCheck
router.get('/:username', (req, res, next) => {

  if(req.params.username === 'about') {
      res.marko(about, {
          name: 'Frank',
          count: 30,
          colors: ['red', 'green', 'blue']
      });
  } else if (req.params.username === 'contact') {
      res.marko(contact, {
          name: 'Frank',
          count: 30,
          colors: ['red', 'green', 'blue']
      });
  } else if (req.params.username === 'blog') {
      res.marko(blog, {
          name: 'Frank',
          count: 30,
          colors: ['red', 'green', 'blue']
      });
  } else if (req.params.username === 'login') {
      res.marko(login, {
          name: 'Frank',
          count: 30,
          colors: ['red', 'green', 'blue']
      });
  } else if (req.params.username === 'signup') {
      res.marko(signup, {
          name: 'Frank',
          count: 30,
          colors: ['red', 'green', 'blue']
      });
  } else if (req.params.username === 'forgot') {
      res.marko(forgot, {
          name: 'Frank',
          count: 30,
          colors: ['red', 'green', 'blue']
      });
  } else {
    user_queries.getSingleUser(req.params.username)
        .then((user) => {
            console.log(user);
            if (user === undefined) {

                res.marko(fourohfour, {
                    name: 'Frank',
                    count: 30,
                    colors: ['red', 'green', 'blue']
                });
                
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

                res.marko(fourohfour, {
                    name: 'Frank',
                    count: 30,
                    colors: ['red', 'green', 'blue']
                });
                
            } else {

                res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));

            }
        });
});






module.exports = router;
