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
        update_tag: false,
        update_tags_id: '1111'
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
        update_tag: false,
        update_tags_id: '1112'
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
        update_tag: false,
        update_tags_id: '1113'        
      });
    }).then(() => {
        return knex('tag').insert({
        schedule_id: '223456789',
        schedule_url: 'when-react-redux-finally-makes-sense',
        username: 'juliusreade',
        tag_id: '114',
        tags_id: '22345',
	      tag_text: '#rubyonrails',
        tag_index: 3,
        update_tag: false,
        update_tags_id: '1114'        
      });
    }).then(() => {
        return knex('tag').insert({
        schedule_id: '223456789',
        schedule_url: 'when-react-redux-finally-makes-sense',
        username: 'juliusreade',
        tag_id: '115',
        tags_id: '22345',
  	    tag_text: '#phoenixframework',
        tag_index: 4,
        update_tag: true,
        update_tags_id: '1115'        
      });
    }).then(() => {
        return knex('tag').insert({
        schedule_id: '223456789',
        schedule_url: 'when-react-redux-finally-makes-sense',
        username: 'juliusreade',
        tag_id: '116',
        tags_id: '22345',
	      tag_text: '#elixir',
        tag_index: 5,
        update_tag: true,
        update_tags_id: '1116'        
      });
    }).then(() => {
        return knex('tag').insert({
        schedule_id: '223456789',
        schedule_url: 'when-react-redux-finally-makes-sense',
        username: 'juliusreade',
        tag_id: '117',
        tags_id: '22345',
	      tag_text: '#relay',
        tag_index: 6,
        update_tag: true,
        update_tags_id: '1112'        
      });
    }).then(() => {
        return knex('tag').insert({
        schedule_id: '223456789',
        schedule_url: 'when-react-redux-finally-makes-sense',
        username: 'juliusreade',
        tag_id: '118',
        tags_id: '22345',
	      tag_text: '#graphql',
        tag_index: 7,
        update_tag: true,
        update_tags_id: '1112'        
      });
    }).then(() => {
        return knex('tag').insert({
        schedule_id: '223456789',
        schedule_url: 'when-react-redux-finally-makes-sense',
        username: 'juliusreade',
        tag_id: '119',
        tags_id: '22345',
	      tag_text: '#TDD',
        tag_index: 8,
        update_tag: true,
        update_tags_id: '1112'        
      });
    });
}