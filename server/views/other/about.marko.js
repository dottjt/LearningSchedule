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

  out.w("<title>Learning Schedule | About</title></head><body>");

  component_globals_tag({}, out);

  include_tag({
      _target: auth_navbar_template
    }, out);

  out.w("<main class=\"other__container\"><h2 class=\"other__title\">About Learning Schedule</h2><div class=\"other__text__container\"><p>Learning Schedule is a specialised online profile that has been designed for self-learners in mind.</p><p>It has been designed to be aesthetic, fast and functional.</p><h3>What is learning Schedule?</h3><p>Learning Schedule makes achieving your learning goals simple and easy.</p><p>Learning Schedule is an online learning portfolio designed especially for self-learners and those passionate about learning.</p><p>It&rsquo;s a place for you to record the things you&rsquo;ve learnt, as well as keep reference of all the important learning resources, videos and articles you may have come across within your learning journey.</p><p>While Learning Schedule was designed with ease-of-use in mind, Learning Schedule&rsquo;s primary function is as an extensive online portfolio for your learning.</p><p>With Learning Schedule we hope to showcase the thought process behind your learning, exhibit all the amazing projects you&rsquo;ve created (that have assisted you with your learning), as well as disclose your learning - sharing all that wonderfulness with the world.</p><p>Learning Schedule has been designed especially for self-learners in mind, and is useful for students, employees and avid learners wanting to showcase their passion and enthusiasm of learning to others. </p><p>Unlike a traditional portfolio that only concerns serious, completed projects, Learning Schedule is a medium for you to explore your ideas, your uncompleted works, as well as all those intricate details that matter most to you!</p><p>The ultimate aim of Learning Schedule is to facilitate in the observation and reflection process that is so crucial in learning, allowing us to improve upon our learning technique and ability to learn. &#160; How is the Learning Schedule application structured?</p><p>There are three basic concepts in Learning Schedule that allow us to easily organise our learning.</p><p>These are Schedules, Updates and Tags.</p><h3>Schedules</h3><p>The beautiful thing about Learning Schedule is that it allows you to organise your learning however you like, based on your individual learning style.</p><p>Schedules are nothing more than containers that ultimately group your Updates into relevant segments.</p><p>How you choose to model your Schedules is entirely up to you, and we can create as many different Schedules and Updates as we require.</p><p>We can model our Schedules based on the specific subjects we are learning, on specific projects we may be working on, or even based on course semesters or specific time periods in which we learn something specific.</p><p>Personally speaking, I tend to create new Schedules based on three week periods, as I usually like to learn something for three weeks at a time, before moving onto something different for another three weeks.</p><p>There is no right or wrong way to use Learning Schedule.</p><h3>Updates</h3><p>Updates are like mini-notifications or posts that we make on our Schedules, that allow us to describe our learning, and describe our learning process to others.</p><p>We create Updates within individual Schedules, and they are designed to take us through our learning journey, describing the highs and lows of our progress.</p><p>What makes Learning Schedule so powerful is that there are many different types of Updates we can create, depending on what we are trying to convey.</p><p>For example, there are Updates which are designed to signify learning milestones, Updates which allow us to post links to relevant learning material, as well as basic text Updates which can say absolutely anything you like. </p><p>They are like tweets for learning.</p><h3>Tags</h3><p>Tags on the other hand are just that. They&rsquo;re simple tags we can use to signify important points, or simply mark our learning.&#160;</p><p>They&rsquo;re nothing special, but they can be helpful.</p><p>Each to their own!</p><h3>The power of Schedules</h3><p>In essence, a schedule is &ldquo;a list of planned activities or things to be done showing the times or dates when they are intended to happen or be done&rdquo;.</p><p>Through a schedule we can plan and record what we hope to achieve, as well as how we expect to achieve it.</p><p>Ultimately, Learning Schedule allows you to track what you&rsquo;ve learnt as well as the time you learnt it &ndash; so you can maintain a personal record of absolutely everything you have learnt.</p><p>While there are many different applications that provide this kind of tracking, very few if any of them are designed to be visibly showcased online. </p><p>Learning Schedule on the other hand has been designed as a platform to be visible to others, in particular, showing up in your Google Search results. How dandy!</p><p>The beautiful thing about Learning Schedule is that it recognises the fact that everyone learns differently. We all have different styles of learning, different ways of thinking, as well as different methods of retaining information that best suit us.</p></div></main>");

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
