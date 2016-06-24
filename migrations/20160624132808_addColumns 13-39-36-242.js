knex exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('profile', function(table){
      table.string('q2')
      table.string('q3')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('profile', function(table){
      table.string('q2')
      table.string('q3')
    })
  ])
};
