exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('tag', (table) => {
      table.increments('id').notNullable();
      table.string('username').notNullable();

      table.string('schedule_url').notNullable(); 
      
      table.string('schedule_id').notNullable();
      table.string('tags_id'); // only necessary for normal tags. 
      table.string('tag_id').notNullable().unique();
      
      table.boolean('update_tag').notNullable(); 
      table.string('update_tags_id'); //.notNullable(); only necessary for update tags. 
      
      
      table.string('tag_text'); //.notNullable();
      table.string('tag_index');
    })
};	


exports.down = function(knex, Promise) {
    return knex.schema.dropTable('tag')
};
