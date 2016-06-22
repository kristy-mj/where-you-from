
exports.up = function(knex, Promise) {
  console.log ('create table')

  return knex.schema.createTableIfNotExists('birthplace', function(table){
    table.increments('id')
    table.string('name')
    table.string('birth_place')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('birthplace').then(function () {
    console.log('birthplace table was dropped')
  })
};
