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
    })
}

/*

.then(() => {
        return knex('schedule').insert({
          schedule_id: '887654321',
          updates_id: '88765432',
          subjects_id: '8876543',
          topics_id: '887654',
          tags_id: '88765',
          schedule_title: 'My Low-Level C/Assembly Rompa-Stompa',
          schedule_summary: '',
          username: 'juliusreade',
          schedule_start_date: '2017-01-09',
          schedule_end_date: '2017-01-27'
      });
    }).then(() => {
        return knex('schedule').insert({
          schedule_id: '787654321',
          updates_id: '78765432',
          subjects_id: '7876543',
          topics_id: '787654',
          tags_id: '78765',
          schedule_title: 'Web Security And Networking Fundamentals',
          schedule_summary: '',
          username: 'juliusreade',
          schedule_start_date: '2017-01-09',
          schedule_end_date: '2016-12-22'
      });
    }).then(() => {
        return knex('schedule').insert({
          schedule_id: '687654321',
          updates_id: '68765432',
          subjects_id: '6876543',
          topics_id: '687654',
          tags_id: '68765',
          schedule_title: 'Let\'s Fail At The Whole React/Redux Thing. Again.',
          schedule_summary: '',
          username: 'juliusreade',
          schedule_start_date: '2016-11-30',
          schedule_end_date: '2016-12-22'
      });
    }).then(() => {
        return knex('schedule').insert({
          schedule_id: '587654321',
          updates_id: '58765432',
          subjects_id: '5876543',
          topics_id: '587654',
          tags_id: '58765',
          schedule_title: 'Clojure & Ruby: 21st Century Diet',
          schedule_summary: '',
          username: 'juliusreade',
          schedule_start_date: '2016-11-11',
          schedule_end_date: '2016-11-30'
      });
    }).then(() => {
        return knex('schedule').insert({
          schedule_id: '487654321',
          updates_id: '48765432',
          subjects_id: '4876543',
          topics_id: '487654',
          tags_id: '48765',
          schedule_title: 'C C C C C++ AAAAND ASSEMBLY BABY!',
          schedule_summary: '',
          username: 'juliusreade',
          schedule_start_date: '2016-10-24',
          schedule_end_date: '2016-11-11'
      });
    }).then(() => {
        return knex('schedule').insert({
          schedule_id: '387654321',
          updates_id: '38765432',
          subjects_id: '3876543',
          topics_id: '387654',
          tags_id: '38765',
          schedule_title: 'Mathematics, Physics & Web Development.',
          schedule_summary: '',
          username: 'juliusreade',
          schedule_start_date: '2016-09-13',
          schedule_end_date: '2016-10-24'
      });
    }).then(() => {
        return knex('schedule').insert({
          schedule_id: '287654321',
          updates_id: '28765432',
          subjects_id: '2876543',
          topics_id: '287654',
          tags_id: '28765',
          schedule_title: 'Vim, Unix and Javascript Framework Galore!',
          schedule_summary: '',
          username: 'juliusreade',
          schedule_start_date: null,
          schedule_end_date: '2016-09-13'
      });
    });

*/
