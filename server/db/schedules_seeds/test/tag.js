exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('tag').del()

  .then(() => {
      return knex('tag').insert({
        schedule_id: '223456789',
        schedule_url: 'when-react-redux-finally-makes-sense',
        username: 'juliusreade',
        tag_id: '111',
        tags_id: '22345',
	      tag_text: '#react',
        tag_index: 0,
        update_tag: false
      });
    }).then(() => {
        return knex('tag').insert({
        schedule_id: '223456789',
        schedule_url: 'when-react-redux-finally-makes-sense',
        username: 'juliusreade',
        tag_id: '112',
        tags_id: '22345',
	      tag_text: '#redux',
        tag_index: 1,
        update_tag: false
      });
    }).then(() => {
        return knex('tag').insert({
        schedule_id: '223456789',
        schedule_url: 'when-react-redux-finally-makes-sense',
        username: 'juliusreade',
        tag_id: '113',
        tags_id: '22345',
	      tag_text: '#csharp',
        tag_index: 2,
        update_tag: false
      });
    });
}