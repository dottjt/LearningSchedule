// Compiled using marko@4.4.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    f4_content_template = marko_loadTemplate(require.resolve("./f_content/f4_content.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out) {
  var data = input;

  out.w("<section class=\"feature__container\"><div class=\"container\"><div class=\"row feature__hover\"><h2 class=\"feature__title margin-top-heaps\">YOU ARE SO REALLY INCREDIBLE AT LEARNING! </h2><div class=\"feature__main\"><p class=\"feature__text\">Learning Schedule allows you to showcase your learning habits, insights and achievements.</p></div>");

  include_tag({
      _target: f4_content_template
    }, out);

  out.w("</div></div></section>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "./f_content/f4_content.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
