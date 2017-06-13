const express = require('express');
const router = express.Router();
const multer = require('multer');

const authHelpers = require('../auth/_helpers');
const localAuth = require('../auth/local');

const users_queries = require('../queries/user_queries');
const uuid = require('uuid');


/*

        FILE UPLOAD SECTION

                                */



// check to see how this works. 
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'server/uploads/avatars')
    },
    filename: function (req, file, cb) {
        cb(null, req.session.username + file.originalname)
  }
})
 
var upload = multer({ storage: storage })
// let upload = multer({ dest: 'server/uploads/avatars/' })
 
router.post('/profile_image_upload', upload.single('avatar'), function(req, res, err) {

    let username = req.session.username;
    console.log(username)
    let newAvatarUrl = { avatar_url: req.file.filename }
    console.log("newAvatarUrl", newAvatarUrl)

    users_queries.updateUser(username, newAvatarUrl)
        .then((na) => {
            console.log(na)
           // users_queries.getSingleUser(username)
        
        })
        
        // .then((user) => {

        //     res.status(200).json({data: na});

        // }).catch(err => console.log(err))

});
 


// get list of images
router.get('/images', (req, res) => {

})

// retrieve image by id
router.get('/images/:id', (req, res) => {


})

// optional: clean all data before start
// cleanFolder(UPLOAD_PATH);

// https://scotch.io/tutorials/express-file-uploads-with-multer 
// file upload taken from the above url. 

module.exports = router;
