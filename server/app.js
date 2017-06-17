(function() {

  'use strict';

  // *** dependencies *** //
  const express = require('express');
  // const sitemap = require('express-sitemap');

  const appConfig = require('./config/main-config.js');
  const routeConfig = require('./config/route-config.js');
  const errorConfig = require('./config/error-config.js');

  // *** express instance *** //
  const app = express();

  // *** config *** //
  appConfig.init(app, express);
  routeConfig.init(app);
  errorConfig.init(app);

// sitemap({
//     sitemap: 'server/views/sitemap.xml', // path for .XMLtoFile
//     robots: 'server/views/robots.txt', // path for .TXTtoFile
//     generate: app, // option or function, is the same
//     sitemapSubmission: 'server/views/sitemap.xml', // path of sitemap into robots
//     route: { // specific option for some route
//       '/': {
//         changefreq: 'always',
//         priority: 1.0,
//       },
//       '/about': {
//         changefreq: 'always',
//         priority: 1.0,
//       },
//       '/login': {
//         changefreq: 'always',
//         priority: 1.0,
//       },
//       '/signup': {
//         changefreq: 'always',
//         priority: 1.0,
//       },
//       '/register': {
//         changefreq: 'always',
//         priority: 1.0,
//       },
//       '/contact': {
//         changefreq: 'always',
//         priority: 1.0,
//       },
//       '/admin': {
//         disallow: true, // write this route to robots.txt
//       },
//       '/nooo': {
//         lastmod: '2014-06-20',
//         changefreq: 'never',
//       }
//     },
//   }).toFile(); // write sitemap.xml and robots.txt

// app.get('/sitemap.xml', function(req, res) { // send XML map

//   map.XMLtoWeb(res);
// }).get('/robots.txt', function(req, res) { // send TXT map

//   map.TXTtoWeb(res);
// });



  module.exports = app;

}());
