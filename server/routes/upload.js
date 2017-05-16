const express = require('express');
const router = express.Router();

const authHelpers = require('../auth/_helpers');
// const passport = require('../auth/local');
const localAuth = require('../auth/local');

const users_queries = require('../queries/user_queries');


/*

        FILE UPLOAD SECTION

                                */


const multer = require('multer');
const Loki = require('lokijs');
const fs = require('fs');
const del = require('del');

const DB_NAME = 'db.json';
const COLLECTION_NAME = 'images';
const UPLOAD_PATH = 'uploads/avators';
// check to see how this works. 




const imageFilter = function (req, file, cb) {
    // accept image only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};


const upload = multer({ dest: `${UPLOAD_PATH}/`, fileFilter: imageFilter }); // multer configuration
const db = new Loki(`${UPLOAD_PATH}/${DB_NAME}`, { persistenceMethod: 'fs' });


const loadCollection = function (colName, db) {
    return new Promise(resolve => {
        db.loadDatabase({}, () => {
            const _collection = db.getCollection(colName) || db.addCollection(colName);
            resolve(_collection);
        })
    });
}

const cleanFolder = function (folderPath) {
    // delete files inside folder but not the folder itself
    del.sync([`${folderPath}/**`, `!${folderPath}`]);
};

router.post('/profile'), function(req, res, next) {
    res.status(200)
};



// upload avatar images
// router.post('/profile', upload.single('avatar'), async (req, res) => {
//     try {
//         const col = await loadCollection(COLLECTION_NAME, db);
//         const data = col.insert(req.file);
//         db.saveDatabase();
//         res.send({ id: data.$loki, fileName: data.filename, originalName: data.originalname });
//     } catch (err) {
//         res.sendStatus(400);
//     }
// })

// get list of images
router.get('/images', async (req, res) => {
    try {
        const col = await loadCollection(COLLECTION_NAME, db);
        res.send(col.data);
    } catch (err) {
        res.sendStatus(400);
    }
})

// retrieve image by id
router.get('/images/:id', async (req, res) => {
    try {
        const col = await loadCollection(COLLECTION_NAME, db);
        const result = col.get(req.params.id);

        if (!result) {
            res.sendStatus(404);
            return;
        };

        res.setHeader('Content-Type', result.mimetype);
        fs.createReadStream(path.join(UPLOAD_PATH, result.filename)).pipe(res);
    } catch (err) {
        res.sendStatus(400);
    }
})


// upload multiple photos...
router.post('/photos/upload', upload.array('photos', 12), async (req, res) => {
    try {
        const col = await loadCollection(COLLECTION_NAME, db)
        let data = [].concat(col.insert(req.files));

        db.saveDatabase();
        res.send(data.map(x => ({ id: x.$loki, fileName: x.filename, originalName: x.originalname })));
    } catch (err) {
        res.sendStatus(400);
    }
})

// optional: clean all data before start
// cleanFolder(UPLOAD_PATH);

// https://scotch.io/tutorials/express-file-uploads-with-multer 
// file upload taken from the above url. 

module.exports = router;
