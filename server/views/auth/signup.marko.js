// Compiled using marko@4.4.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    auth_head_template = marko_loadTemplate(require.resolve("./auth_partials/auth_head.marko")),
    auth_navbar_template = marko_loadTemplate(require.resolve("../utility/auth_navbar.marko")),
    auth_form_template = marko_loadTemplate(require.resolve("./auth_partials/auth_form.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out) {
  var data = input;

  out.w("<html><head>");

  include_tag({
      _target: auth_head_template
    }, out);

  out.w("<title>Learning Schedule | Sign Up</title></head><body>");

  component_globals_tag({}, out);

  include_tag({
      _target: auth_navbar_template
    }, out);

  out.w("<section class=\"signup__container\"><h3 class=\"signup__header\">Account Registration</h3><h5 class=\"signup__header__two\">All you need is an email and a password, and you're good to go!</h5><h3 class=\"signup__header__three " +
    marko_escapeXmlAttr(data.show) +
    "\">" +
    marko_escapeXml(data.message) +
    "</h3><form class=\"signup__form\" action=\"/register\" method=\"post\" accept-charset=\"utf-8\">");

  include_tag({
      _target: auth_form_template
    }, out);

  out.w("<div class=\"form-group\"><button class=\"btn btn-default register__form_submit--bottom\" type=\"submit\" action=\"\">Register</button></div></form></section>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "./auth_partials/auth_head.marko",
      "../utility/auth_navbar.marko",
      "./auth_partials/auth_form.marko",
      "marko/src/taglibs/core/include-tag",
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
