exports.seed = function(knex, Promise) {
  return Promise.join(
      knex('birthplace').del(),

      knex('birthplace').insert({id: 1, name: 'Mike', birth_place: 'Lower Hutt'}),
      knex('birthplace').insert({id: 2, name: 'Shayan', birth_place: 'Tehran'}),
      knex('birthplace').insert({id: 3, name: 'Rena', birth_place: 'Ruatoria'}),
      knex('birthplace').insert({id: 4, name: 'Sean', birth_place: 'Palmerston North'}),
      knex('birthplace').insert({id: 5, name: 'Kristy', birth_place: 'Wellington'})
    )
}
