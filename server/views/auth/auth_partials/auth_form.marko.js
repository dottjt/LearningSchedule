// Compiled using marko@4.4.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename);

function render(input, out) {
  var data = input;

  out.w("<div class=\"header__form-input__container\"><input class=\"header__form-input\" type=\"email\" name=\"email\" value=\"\" placeholder=\"Email\"></div> <div class=\"header__form-input__container__bottom\"><input class=\"header__form-input header__form-input__bottom\" type=\"password\" name=\"password\" value=\"\" placeholder=\"Password\"></div>");
}

marko_template._ = render;

marko_template.meta = {};
