// Compiled using marko@4.4.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename);

function render(input, out) {
  var data = input;

  out.w("<section class=\"closing__container\"><h3 class=\"closing__quote\">It takes approximately 10,000 hours to master a skill. </h3><div class=\"header__color__container\"><div class=\"header__color header__color1\"></div><div class=\"header__color header__color2\"></div><div class=\"header__color header__color3\"></div><div class=\"header__color header__color4\"></div><div class=\"header__color header__color5\"></div></div><h4 class=\"closing__quote_secondary\">Be proud of what you've achieved. </h4></section><section class=\"signup__container\"><h3 class=\"signup__header\">Learning Schedule</h3><h5 class=\"signup__header__two\">Give it a whirl.</h5><form class=\"signup__form\" action=\"auth/register\" method=\"post\" accept-charset=\"utf-8\"><div class=\"form-group\"><input class=\"form-control header__form-input\" type=\"email\" name=\"email\" value=\"\" placeholder=\"Email\"></div><div class=\"form-group\"><input class=\"form-control header__form-input\" type=\"password\" name=\"password\" value=\"\" placeholder=\"Password\"></div><div class=\"form-group\"><button class=\"btn btn-default register__form_submit--bottom\" type=\"submit\" action=\"\">Sign Up</button></div></form></section>");
}

marko_template._ = render;

marko_template.meta = {};