
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('summary', (table) => {
    table.increments('id').notNullable();
    table.string('username').notNullable();
    table.string('summaries_id').notNullable();    
    table.text('summary_text');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('summary');
};
