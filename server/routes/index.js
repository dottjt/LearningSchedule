const express = require('express');
const path = require('path');
const router = express.Router();
const user_queries = require('../queries/user_queries');
const authHelpers = require('../auth/_helpers');

const yolo = require('../views/other/yolo');
const about = require('../views/other/about');
const contact = require('../views/other/contact');
const blog = require('../views/other/blog');
const login = require('../views/auth/login');
const signup = require('../views/auth/signup');
const verify = require('../views/auth/verify');
const forgot = require('../views/auth/forgot');
const fourohfour = require('../views/utility/404');

router.get('/:username', (req, res, next) => {
    
    switch(req.params.username) {
        case 'about':
            return res.marko(about);
        case 'contact':
            return res.marko(contact);
        case 'yolo':
            return res.marko(yolo);
        case 'blog':
            return res.marko(blog);
        case 'login':
            return res.marko(login);
        case 'youalreadyhavearegisteredaccountsillysopleaselogin':
            return res.marko(login, {
                message: 'It appear you already have an account!',
                show: "showMessage"
            });
        case 'signup':
            return res.marko(signup);
        case 'register':
            return res.marko(signup);
        case 'forgot':
            return res.marko(forgot);
        case 'verify':
            return res.marko(verify);
        default:
            return user_queries.getSingleUser(req.params.username)
                .then((user) => {
                    if (user === undefined) {
                        res.marko(fourohfour);
                    } else {
                        res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
                    }
                });

    }

});


router.get('/:username/schedule/:schedule_title', (req, res, next) => {
    
    user_queries.getSingleUser(req.params.username)
        .then((user) => {
            if (user === undefined) {
                res.marko(fourohfour);
            } else {
                res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
            }
        });
});


module.exports = router;
