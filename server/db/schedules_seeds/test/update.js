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
        update_type: 'text'
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
        update_type: 'text'
      });
    });
  
}
