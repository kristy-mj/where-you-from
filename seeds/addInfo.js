exports.seed = function(knex, Promise) {
  return Promise.join(
      knex('profile').del(),

      knex('profile').insert({id: 1, name: 'Mike', q1: 'cats'}),
      knex('profile').insert({id: 2, name: 'Shayan', q1: 'dogs'}),
      knex('profile').insert({id: 3, name: 'Rena', q1: 'dogs'}),
      knex('profile').insert({id: 4, name: 'Sean', q1: 'cats'}),
      knex('profile').insert({id: 5, name: 'Kristy', q1: 'dogs'})
    )
}
