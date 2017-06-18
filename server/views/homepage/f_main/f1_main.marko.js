// Compiled using marko@4.4.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    f1_content_template = marko_loadTemplate(require.resolve("./f_content/f1_content.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out) {
  var data = input;

  out.w("<section class=\"feature__container\"><div class=\"container\"><div class=\"row feature__hover\"><div class=\"feature__title\">Learning Schedule is your online learning portfolio. </div><p class=\"feature__text\">Learning Schedule is designed to appear in your Google search results. </p>");

  include_tag({
      _target: f1_content_template
    }, out);

  out.w("</div></div></section>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "./f_content/f1_content.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
