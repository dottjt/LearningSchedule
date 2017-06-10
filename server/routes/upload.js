const express = require('express');
const router = express.Router();
const multer = require('multer');

const authHelpers = require('../auth/_helpers');
const localAuth = require('../auth/local');

const users_queries = require('../queries/user_queries');



/*

        FILE UPLOAD SECTION

                                */



// check to see how this works. 
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'server/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
  }
})
 
var upload = multer({ storage: storage })
//var upload = multer({ dest: 'server/uploads/avatars' })
 
router.post('/profile_image_upload', upload.single('avatar'), function(req, res) {
//    upload(req, res, function(err) {
//        console.log(req) // here i see other fields from request like req.body.description
//        if (err) {return next(err)}
//        res.json(201)
//    })

    console.log(req.file)
    console.log(req.body)

    console.log("log this worked.")
});
 

//router.post('/profile_image_upload', multer({ dest: 'server/uploads/avatars/' }).any(), upload.fileupload);





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
