(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const scheduleRoute = require('../routes/schedule');
    const summaryRoute = require('../routes/summary');
    const updateRoute = require('../routes/update');
    const tagRoute = require('../routes/tag');
    const uploadRoute = require('../routes/upload');

    const indexRoute = require('../routes/index');
    const authRoute = require('../routes/auth');
    const userRoute = require('../routes/user');


    // *** register routes *** //
    app.use('/:username/schedule/api/v1', scheduleRoute);
    app.use('/:username/schedule/api/v1', summaryRoute);
    app.use('/:username/schedule/api/v1', updateRoute);
    app.use('/:username/schedule/api/v1', tagRoute);
    app.use('/:username/schedule/api/v1', uploadRoute);

    app.use('/:username/schedule/api/v1', userRoute);
    app.use('/:username/schedule/auth', authRoute);
    // app.use('/:username/schedule/', applicationRoute);


    app.use('/:username/api/v1', scheduleRoute);
    app.use('/:username/api/v1', summaryRoute);
    app.use('/:username/api/v1', updateRoute);
    app.use('/:username/api/v1', tagRoute);
    app.use('/:username/api/v1', uploadRoute);

    app.use('/:username/api/v1', userRoute);
    app.use('/:username/auth', authRoute);
    // app.use('/:username/', applicationRoute);


    app.use('/api/v1', scheduleRoute);
    app.use('/api/v1', summaryRoute);
    app.use('/api/v1', updateRoute);
    app.use('/api/v1', tagRoute);
    app.use('/api/v1', uploadRoute);

    app.use('/api/v1', userRoute);
    app.use('/auth', authRoute);
    app.use('/', indexRoute); // unique. 

  };

})(module.exports);
