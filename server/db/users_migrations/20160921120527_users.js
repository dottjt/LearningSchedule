exports.up = (knex, Promise) => {
   return knex.schema.createTableIfNotExists('user', (table) => {
    table.increments('id').notNullable();
    table.string('email').unique().notNullable();
    table.string('username').unique().notNullable();
    table.string('password').notNullable();
    table.boolean('admin').notNullable().defaultTo(false);
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    
    table.string('summaries_id').notNullable().unique();

    table.string('display_name').notNullable();
    table.string('avatar_url');
    table.string('website');
    table.string('twitter');
    table.string('facebook');
    table.string('github');

  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('user');
};
