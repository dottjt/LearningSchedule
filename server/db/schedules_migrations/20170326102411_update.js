exports.up = (knex, Promise) => {
   return knex.schema.createTableIfNotExists('update', (table) => {
      table.increments('id').notNullable();
      table.string('username').notNullable();
      
      table.string('schedule_url').notNullable(); 

      table.string('schedule_id').notNullable();
      table.string('updates_id').notNullable(); 
      table.string('update_id').notNullable().unique();

      table.string('update_type').notNullable();
      table.string('update_title');
      table.text('update_text');
      table.text('update_summary');

      table.string('update_tags_id').notNullable();


      table.date('update_date').defaultTo(knex.raw('now()'));
  })
}

exports.down = (knex, Promise) => {
      return knex.schema.dropTable('update');
}
