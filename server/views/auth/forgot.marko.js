// Compiled using marko@4.4.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    auth_head_template = marko_loadTemplate(require.resolve("./auth_partials/auth_head.marko")),
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
      _target: auth_head_template
    }, out);

  out.w("<title>Learning Schedule | Login</title></head><body>");

  component_globals_tag({}, out);

  include_tag({
      _target: auth_navbar_template
    }, out);

  out.w("<section class=\"signup__container\"><h3 class=\"signup__header\">Learning Schedule</h3><h5 class=\"signup__header__two\">Forgot your password?</h5><h5 class=\"signup__header__two\">Please input your last known email.</h5><form class=\"signup__form\" action=\"/forgot\" method=\"post\" accept-charset=\"utf-8\"><div class=\"form-group\"><input class=\"form-control header__form-input\" type=\"email\" name=\"email\" value=\"\" placeholder=\"Email\"></div><div class=\"form-group\"><button class=\"btn btn-default register__form_submit--bottom\" type=\"submit\" action=\"\">Login</button></div></form></section>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "./auth_partials/auth_head.marko",
      "../utility/auth_navbar.marko",
      "marko/src/taglibs/core/include-tag",
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
