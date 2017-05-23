(function(appConfig) {

  'use strict';


  // *** main dependencies *** //
  const path = require('path');
  const cookieParser = require('cookie-parser');
  const bodyParser = require('body-parser');
  const session = require('express-session');
  const flash = require('connect-flash');
  const morgan = require('morgan');
  const nunjucks = require('nunjucks');
  const passport = require('passport');
  const favicon = require('serve-favicon');
  // set this up at some point. 

  const redis   = require("redis");
  const redisStore = require('connect-redis')(session);
  const client  = redis.createClient();


  // *** view folders *** //
  const viewFolders = [
    path.join(__dirname, '..', 'views'),
    path.join(__dirname, '..', 'build')
  ];

  // *** load environment variables *** //
  require('dotenv').config();

  appConfig.init = function(app, express) {

    // *** view engine *** //
    nunjucks.configure(viewFolders, {
      express: app,
      autoescape: true
    });
    app.set('view engine', 'html');

    // *** app middleware *** //
    if (process.env.NODE_ENV !== 'test') {
      app.use(morgan('dev'));
    }
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    // uncomment if using express-session
    app.use(session({
      secret: process.env.SECRET_KEY,
      store: new redisStore({ host: 'localhost', port: 6379, client: client,ttl :  260}),
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 604800000000 },
      rolling: true // set to one week. 
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());

    app.use('/', express.static(path.join(__dirname, '..', 'views'), {extensions:['html'], index: 'index.html'}));

    app.use('/', express.static(path.join(__dirname, '..', 'build')));
    app.use('/', express.static(path.join(__dirname, '..', 'uploads')));

  };



})(module.exports);