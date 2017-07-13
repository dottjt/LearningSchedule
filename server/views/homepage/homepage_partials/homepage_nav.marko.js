// Compiled using marko@4.4.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename);

function render(input, out) {
  var data = input;

  out.w("<nav class=\"container-fluid navbar__container\"><ul class=\"st__navbar__ul\"><li class=\"st__navbar__li\"><a href=\"/about\">About</a></li><li class=\"st__navbar__li\"><a href=\"/contact\">Contact</a></li><li class=\"st__navbar__li\"><a href=\"/signup\">Sign up</a></li><li class=\"st__navbar__li\"><a href=\"/login\">Login</a></li></ul></nav>");
}

marko_template._ = render;

marko_template.meta = {};
