// Compiled using marko@4.4.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    navbar_toggle_template = marko_loadTemplate(require.resolve("./navbar_toggle.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out) {
  var data = input;

  out.w("<div class=\"container-fluid navbar__container\">");

  include_tag({
      _target: navbar_toggle_template
    }, out);

  out.w("</div>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "./navbar_toggle.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
