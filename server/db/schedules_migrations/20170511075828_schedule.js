



exports.up = (knex, Promise) => {
   return knex.schema.createTableIfNotExists('schedule', (table) => {
    table.increments('id').notNullable();
    table.string('username').notNullable();

    table.string('schedule_url').notNullable();

    table.string('updates_id').notNullable();
    table.string('tags_id').notNullable();
    table.string('schedule_id').notNullable().unique();

    table.string('schedule_title');
    table.text('schedule_summary');
    
    table.date('schedule_start_date').defaultTo(knex.raw('now()'));
  })
}

exports.down = (knex, Promise) => {
      return knex.schema.dropTable('schedule');
}


