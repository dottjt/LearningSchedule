const express = require('express');
const path = require('path');
const router = express.Router();
const user_queries = require('../queries/user_queries');
const authHelpers = require('../auth/_helpers');


const index = require('../views/homepage/index');
const about = require('../views/other/about');
const blog = require('../views/other/blog');
const login = require('../views/auth/login');
const signup = require('../views/auth/signup');
const forgot = require('../views/auth/forgot');
const fourohfour = require('../views/utility/404');




router.get('/', function(req, res) {
    res.marko(index, {
        name: 'Frank',
        count: 30,
        colors: ['red', 'green', 'blue']
    });
});




router.get('/:username', authHelpers.userCheck, (req, res, next) => {

  if(req.params.username === 'about') {
      res.marko(about, {
          name: 'Frank',
          count: 30,
          colors: ['red', 'green', 'blue']
      });
  }

  if(req.params.username === 'contact') {
      res.marko(contact, {
          name: 'Frank',
          count: 30,
          colors: ['red', 'green', 'blue']
      });
  }

  if(req.params.username === 'blog') {
      res.marko(blog, {
          name: 'Frank',
          count: 30,
          colors: ['red', 'green', 'blue']
      });
  }
  
  if(req.params.username === 'login') {
      res.marko(login, {
          name: 'Frank',
          count: 30,
          colors: ['red', 'green', 'blue']
      });
  } 

  if(req.params.username === 'signup') {
      res.marko(signup, {
          name: 'Frank',
          count: 30,
          colors: ['red', 'green', 'blue']
      });
  }

  if(req.params.username === 'forgot') {
      res.marko(forgot, {
          name: 'Frank',
          count: 30,
          colors: ['red', 'green', 'blue']
      });
  }


  user_queries.getSingleUser(req.session.username)
    .then((user) => {
      console.log("queeer", user)

        if (user === undefined) {
            res.marko(fourohfour, {
                name: 'Frank',
                count: 30,
                colors: ['red', 'green', 'blue']
            });
        } else {

            res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));

        }
    })

});






module.exports = router;
