// Compiled using marko@4.4.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename);

function render(input, out) {
  var data = input;

  out.w("<div class=\"header__main\"><h1 class=\"header__title\">Learning Schedule <div class=\"header__color__container\"><div class=\"header__color header__color1\"></div><div class=\"header__color header__color2\"></div><div class=\"header__color header__color3\"></div><div class=\"header__color header__color4\"></div><div class=\"header__color header__color5\"></div></div></h1><h2 class=\"header__title_secondary\">Your Online Learning Portfolio. (v early alpha)</h2><h3 class=\"header__title_third\">Let the whole world know how hard you've worked<span class=\"animation_dot3\">.</span><span class=\"animation_dot2\">.</span><span class=\"animation_dot\">.</span></h3><form class=\"header__form\" action=\"auth/register\" method=\"post\" accept-charset=\"utf-8\"><div class=\"header__form-group\"><input class=\"form-control header__form-input\" type=\"text\" name=\"email\" value=\"\" placeholder=\"Email\"></div><div class=\"header__form-group\"><input class=\"form-control header__form-input\" type=\"password\" name=\"password\" value=\"\" placeholder=\"Password\"></div><div class=\"header__form-auth\"><button class=\"btn btn-default register__form_submit\" type=\"submit\"><span class=\"header__form_line_height\">Sign up</span></button></div></form></div>");
}

marko_template._ = render;

marko_template.meta = {};
