// Compiled using marko@4.4.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    other_head_template = marko_loadTemplate(require.resolve("./other_partials/other_head.marko")),
    auth_navbar_template = marko_loadTemplate(require.resolve("../utility/auth_navbar.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out) {
  var data = input;

  out.w("<html><head>");

  include_tag({
      _target: other_head_template
    }, out);

  out.w("<title>Learning Schedule | Contact</title></head><body>");

  component_globals_tag({}, out);

  include_tag({
      _target: auth_navbar_template
    }, out);

  out.w("<main class=\"other__container\"><h2 class=\"other__title\">Contact</h2><div class=\"other__text__container\"><p>If you would like to contact me, there are a few places you may seek.</p><a href=\"mailto:julius.reade@gmail.com\">julius.reade@gmail.com</a><a href=\"https://twitter.com/juliusreade\">twitter.</a><p>I also have a website that I'm sure you'd be real proud about.</p><a href=\"https://juliusreade.com/\">https://juliusreade.com/</a></div></main>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "./other_partials/other_head.marko",
      "../utility/auth_navbar.marko",
      "marko/src/taglibs/core/include-tag",
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
