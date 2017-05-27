// Compiled using marko@4.4.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename);

function render(input, out) {
  var data = input;

  out.w("<nav role=\"navigation\"><div id=\"menuToggle\"><input type=\"checkbox\"><span></span><span></span><span></span><ul id=\"menu\"><a href=\"/login\"><li>Login</li></a><a href=\"/signup\"><li>Sign up</li></a><a href=\"/about\"><li>About</li></a><a href=\"/contact\"><li>Contact</li></a></ul></div></nav>");
}

marko_template._ = render;

marko_template.meta = {};
