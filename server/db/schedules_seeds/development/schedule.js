exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('schedule').del()

    .then(() => {
      return knex('schedule').insert({
        username: 'juliusreade',
        schedule_id: '223456789',
        updates_id: '22345678',
        tags_id: '22345',
        schedule_title: 'When React/Redux Finally Makes Sense!',
        schedule_summary: 'My fourth attempt at my application and by-far my longest. Still so much to learn!',
        schedule_url: 'when-react-redux-finally-makes-sense',
        schedule_start_date: '2017-03-17' // year - month - day.
      });
    }).then(() => {
      return knex('schedule').insert({
        username: 'juliusreade',
        schedule_id: '123456789',
        updates_id: '12345678',
        tags_id: '98765',
        schedule_title: 'Learning Schedule V3 begins',
        schedule_summary: 'My third attempt at building learning schedule. Learnt a heap of stuff, or so they tell me',
        schedule_url: 'learning-schedule-v3-begins',
        schedule_start_date: '2017-02-16',
      });
    }).then(() => {
      return knex('schedule').insert({
        schedule_id: '987654321',
        updates_id: '98765432',
        tags_id: '98765',
        schedule_title: 'Functional Reactive Programming. Mah Bestie <3',
        schedule_summary: 'Spent a heap of time learning Clojure, Clojurescript, Haskell n\' all that good stuff',
        schedule_url: 'functional-reactive-programming-mah-bestie',
        username: 'juliusreade',
        schedule_start_date: '2017-01-27'
      });
    }).then(() => {
        return knex('schedule').insert({
          schedule_id: '887654321',
          updates_id: '88765432',
          tags_id: '88765',
          schedule_title: 'My Low-Level C/Assembly Rompa-Stompa',
          schedule_summary: 'Decided to learn a lot of C, C++ and assembly language, to better understand low-level languages.',
          schedule_url: 'my-low-level-c-assembly-rompa-stompa',
          username: 'juliusreade',
          schedule_start_date: '2017-01-09'
          // schedule_end_date: '2017-01-27'
      });
    }).then(() => {
        return knex('schedule').insert({
          schedule_id: '787654321',
          updates_id: '78765432',
          tags_id: '78765',
          schedule_title: 'Web Security And Networking Fundamentals',
          schedule_summary: 'I wanted to brush up on my browser networking, and so I read a number of books including blah blah blah.',
          schedule_url: 'web-security-and-networking-fundamentals',
          username: 'juliusreade',
          schedule_start_date: '2016-12-22'
          // schedule_end_date: '2017-01-09'
      });
    }).then(() => {
        return knex('schedule').insert({
          schedule_id: '687654321',
          updates_id: '68765432',
          tags_id: '68765',
          schedule_title: 'Let\'s Fail At The Whole React/Redux Thing. Again.',
          schedule_summary: 'My first attempt at building Learning Schedule. It inevitably ends in failure as I realise that I lack the required FRP and React/Redux knowledge to do anything meaningful.',
          schedule_url: 'lets-fail-at-the-whole-react-redux-thing-again',
          username: 'juliusreade',
          schedule_start_date: '2016-11-30'
          // schedule_end_date: '2016-12-22'
      });
    }).then(() => {
        return knex('schedule').insert({
          schedule_id: '587654321',
          updates_id: '58765432',
          tags_id: '58765',
          schedule_title: 'Clojure & Ruby: 21st Century Diet',
          schedule_summary: 'Wanted to learn more Clojure and immerse myself with Ruby on Rails for the first time. I also played around with C#, blah, blah, blah.',
          schedule_url: 'clojure-and-ruby-21st-century-diet',
          username: 'juliusreade',
          schedule_start_date: '2016-11-11'
          // schedule_end_date: '2016-11-30'
      });
    }).then(() => {
        return knex('schedule').insert({
          schedule_id: '487654321',
          updates_id: '48765432',
          tags_id: '48765',
          schedule_title: 'C C C C C++ AAAAND ASSEMBLY BABY!',
          schedule_summary: 'C, C++ and Assembly. This is some good shit.',
          schedule_url: 'c-c-c-c-c-aaaand-assemby-baby',
          username: 'juliusreade',
          schedule_start_date: '2016-10-24'
          // schedule_end_date: '2016-11-11'
      });
    }).then(() => {
        return knex('schedule').insert({
          schedule_id: '387654321',
          updates_id: '38765432',
          tags_id: '38765',
          schedule_title: 'Mathematics, Physics & A Dead Child.',
          schedule_summary: '.',
          schedule_url: 'mathematics-physics-and-a-dead-child',
          username: 'juliusreade',
          schedule_start_date: '2016-09-13'
          // schedule_end_date: '2016-10-24'
      });
    }).then(() => {
        return knex('schedule').insert({
          schedule_id: '287654321',
          updates_id: '28765432',
          tags_id: '28765',
          schedule_title: 'Vim, Unix and Javascript Framework Galore!',
          schedule_summary: 'Learnt a hella\' lot about UNIX, can proficiently VIM now and I played around with a heap of Javascript frameworks including vue.js, cycle.js, react.js, redux.js n\' all that jazz',
          schedule_url: 'vim-unix-and-javascript-framework-galore',
          username: 'juliusreade',
          schedule_start_date: null
         // schedule_end_date: '2016-09-13'
      });
    });

};
