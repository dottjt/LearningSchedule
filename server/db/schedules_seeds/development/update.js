exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('update').del()

    .then(() => {
      return knex('update').insert({
        username: 'juliusreade',
        update_id: '111',
        schedule_id: '223456789',
        updates_id: '22345678',
        schedule_url: 'when-react-redux-finally-makes-sense',
	      update_title: 'Final Update',
        update_text: 'I feel like I finally understand react/redux, even though I’ve done it so many times before. Oh, and it’s the first time I managed to successfully build a functioning backend! I can also do async, though I know it’s not well enough. I also learnt SO MUCH vanilla javascript and how to work with objects and arrays, as well as all the nitty gritty details of Javascript. I’m not sure what I want to do anymore, maybe C#? I couldn’t do anymore functional FRP for a while now.',
        update_date: '2017-03-03',
        update_type: 'text',
        update_tags_id: '1112'
      });
    }).then(() => {
      return knex('update').insert({
        username: 'juliusreade',
        update_id: '222',
        schedule_id: '223456789',
        updates_id: '22345678',
        schedule_url: 'when-react-redux-finally-makes-sense',
	      update_title: 'Final Update',
        update_text: 'https://learninupdate_tags_idgmaterial.com.au',
        update_date: '2017-03-30',
        update_type: 'link',
        update_summary: 'Explains how to do this thing really well',
        update_tags_id: '1113'
      });
    }).then(() => {
      return knex('update').insert({
        username: 'juliusreade',
        update_id: '221',
        schedule_id: '223456789',
        updates_id: '22345678',
        schedule_url: 'when-react-redux-finally-makes-sense',
	      update_title: 'Final Update',
        update_text: 'Finished reading C# Advanced techniques!',
        update_date: '2017-03-02',
        update_type: 'milestone',
        update_tags_id: '1114'
      });
    }).then(() => {
        return knex('update').insert({
        username: 'juliusreade',
        update_id: '112',
        schedule_id: '223456789',
        updates_id: '22345678',
        schedule_url: 'when-react-redux-finally-makes-sense',
	      update_title: 'I cannot believe I did it.',
        update_text: 'Holy Cow. My application officially works! The backend is perfectly connected with the front-end !!!!!! It’s like, the happiest day of my life. Still need to get user authentication to work though...',
        update_date: '2017-04-01',
        update_type: 'text',
        update_tags_id: '1115'
      });
    }).then(() => {
        return knex('update').insert({
        username: 'juliusreade',
        update_id: '113',
        schedule_id: '223456789',
        updates_id: '22345678',
        schedule_url: 'when-react-redux-finally-makes-sense',
	      update_title: 'Testing is beginning to make sense!',
        update_text: 'Really getting the hang of writing tests and learning about dev dependencies and making mocha, babel and webpack working together. Will be goooood :)',
        update_date: '2017-03-30',
        update_type: 'text',
        update_tags_id: '1116'
      });
    }).then(() => {
        return knex('update').insert({
        username: 'juliusreade',
        update_id: '114',
        schedule_id: '223456789',
        updates_id: '22345678',
        schedule_url: 'when-react-redux-finally-makes-sense',
	      update_title: 'Debug update.',
        update_text: 'OMFG I finally managed to debug my app! It turns out post data wasn’t working, and it was because of the order of dependencies in my app!',
        update_date: '2017-03-26',
        update_type: 'text',
        update_tags_id: '1117'
      });
    }).then(() => {
        return knex('update').insert({
        username: 'juliusreade',
        update_id: '115',
        schedule_id: '223456789',
        updates_id: '22345678',
        schedule_url: 'when-react-redux-finally-makes-sense',
	      update_title: 'Truly Frustrating',
        update_text: 'Okay, my app is an absolute mess. Functionality doesn’t work. Parts don’t work. Instead, I need to refactor and start from scratch with basic functionality in mind. Keep it really simple. Don’t implement TOO much, otherwise it’ll simple break again. Make sure the basics work, then we can discuss making it better :)',
        update_date: '2017-03-23',
        update_type: 'text',
        update_tags_id: '1118'
      });
    }).then(() => {
        return knex('update').insert({
        username: 'juliusreade',
        update_id: '116',
        schedule_id: '223456789',
        updates_id: '22345678',
        schedule_url: 'when-react-redux-finally-makes-sense',
	      update_title: 'Rails docs are amazing',
        update_text: 'I cannot believe how easy and simple #rubyonrails is. I’m loving the #eilxir and #phoneixframework experience however I don’t think I’ll be using it in my app. I will eventually port it to phoenix once I’ve completed my application, but not until then.',
        update_date: '2017-03-16',
        update_type: 'text',
        update_tags_id: '1112'
      });
    }).then(() => {
        return knex('update').insert({
        username: 'juliusreade',
        update_id: '117',
        schedule_id: '223456789',
        updates_id: '22345678',
        schedule_url: 'when-react-redux-finally-makes-sense',
	      update_title: 'Phoenix is a blast',
        update_text: 'Oh wow, the Phoenix docs are so pleasantly wonderful to work with! It’s like the exactly opposite to working with react :p',
        update_date: '2017-03-09',
        update_type: 'text',
        update_tags_id: '1112'
      });
    });
  
}
