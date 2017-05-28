// Compiled using marko@4.4.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    homepage_head_template = marko_loadTemplate(require.resolve("./homepage_partials/homepage_head.marko")),
    homepage_nav_template = marko_loadTemplate(require.resolve("./homepage_partials/homepage_nav.marko")),
    homepage_header_template = marko_loadTemplate(require.resolve("./homepage_partials/homepage_header.marko")),
    f1_main_template = marko_loadTemplate(require.resolve("./f_main/f1_main.marko")),
    f2_main_template = marko_loadTemplate(require.resolve("./f_main/f2_main.marko")),
    f3_main_template = marko_loadTemplate(require.resolve("./f_main/f3_main.marko")),
    f4_main_template = marko_loadTemplate(require.resolve("./f_main/f4_main.marko")),
    homepage_closing_template = marko_loadTemplate(require.resolve("./homepage_partials/homepage_closing.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    browser_refresh_tag = marko_loadTag(require("browser-refresh-taglib/refresh-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head>");

  include_tag({
      _target: homepage_head_template
    }, out);

  out.w("</head><body>");

  component_globals_tag({}, out);

  include_tag({
      _target: homepage_nav_template
    }, out);

  include_tag({
      _target: homepage_header_template
    }, out);

  out.w("<main class=\"main__container container-fluid\">");

  include_tag({
      _target: f1_main_template
    }, out);

  include_tag({
      _target: f2_main_template
    }, out);

  include_tag({
      _target: f3_main_template
    }, out);

  include_tag({
      _target: f4_main_template
    }, out);

  include_tag({
      _target: homepage_closing_template
    }, out);

  out.w("</main>");

  browser_refresh_tag({
      enabled: "true"
    }, out);

  init_components_tag({}, out);

  await_reorderer_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "./homepage_partials/homepage_head.marko",
      "./homepage_partials/homepage_nav.marko",
      "./homepage_partials/homepage_header.marko",
      "./f_main/f1_main.marko",
      "./f_main/f2_main.marko",
      "./f_main/f3_main.marko",
      "./f_main/f4_main.marko",
      "./homepage_partials/homepage_closing.marko",
      "marko/src/taglibs/core/include-tag",
      "marko/src/components/taglib/component-globals-tag",
      "browser-refresh-taglib/refresh-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
