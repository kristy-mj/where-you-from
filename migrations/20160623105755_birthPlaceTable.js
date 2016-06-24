exports.up = function(knex, Promise) {
  console.log ('create table')

  return knex.schema.createTableIfNotExists('profile', function(table){
    table.increments('id')
    table.string('name')
    table.string('q1')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('profile').then(function () {
    console.log('profile table was dropped')
  })
};
