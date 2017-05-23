const express = require('express');
const path = require('path');
const router = express.Router();
const user_queries = require('../queries/user_queries');
const authHelpers = require('../auth/_helpers');





function userCheck(req, res, next) {

  var url, urlArray, urlUsername; 

    url = req.url;
    console.log(req.url)
    urlArray = url.split('/');
    // [ 'http:', '', 'localhost:3000', 'juliusreade' ]

    urlUsername = urlArray[1];
    console.log(urlUsername);
    req.session.username = urlUsername;

    console.log(req.session.username)
    
    return next(); 

}
// so userCheck return 


router.get('/:username', userCheck, (req, res, next) => {

  if(req.session.username === '/logout') {
    res.redirect('/logout')
  }

  if(req.session.username === '/login') {
    res.redirect('/login');
  } 

  if(req.session.username === '/signup') {
    res.redirect('/signup')
  }

  // if(req.session.username === '/about') {
  //   res.redirect('/about')
  // }

  // if(req.session.username === '/faq') {
  //   res.redirect('/faq')
  // }

  console.log(req.session.username)

  // okay, there is a serious error (I think?) with usernameParamsRequired, where the referer url is actually the prior email. It shouldn't be a huge issue, I don't think. 


  return user_queries.getSingleUser(req.session.username)
    .then((user) => {
      console.log(user)
    
      if (user === undefined) {
        res.sendFile(path.resolve(__dirname, '..', 'views', '404.html'));
      }
      
      res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));

    })

});


module.exports = router;
