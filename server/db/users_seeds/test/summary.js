exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('summary').del()

    .then(() => {
      return knex('summary').insert({
        username: 'juliusreade',
        summaries_id: '12121212',
        // summary_id: 1,
	      summary_text: 'Delirious code monkey with an amazing face.'
      });
    }).then(() => {
        return knex('summary').insert({
        username: 'juliusreade',
        summaries_id: '12121212',
        // summary_id: 2,
	      summary_text: 'Aspiring developer of approximately two years'
      });
    }).then(() => {
        return knex('summary').insert({
        username: 'juliusreade',
        summaries_id: '12121212',
        // summary_id: 3,
	      summary_text: 'Javascript, Node n\' Co'
      });
    });
}