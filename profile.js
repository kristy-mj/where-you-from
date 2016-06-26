#!/usr/bin/env node
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: __dirname + '/dev.sqlite3'
  },
  useNullAsDefault: true
})

function addProfile (name, answer1, answer2, answer3) {
  return knex('profile').insert({
     name: name,
     q1: answer1,
     q2: answer2,
     q3: answer3
  })
}

function closeDB() {
  knex.destroy()
}

// this function is used to return the results we've just submitted
function findYourAnswers(table, param, callback){
  return knex(table).where(param).then(function (resp) {
    callback (null, resp)
  })
}

function getAll () {
  return knex.select('*').from('profile')
}

function logError(err) {
  console.log('error mate', err)
}

module.exports = {
  addProfile: addProfile,
  findYourAnswers: findYourAnswers,
  getAll: getAll
}


// var cmd = process.argv[2]
// var name = process.argv[3]
// var answer1 = process.argv[4]
// var animal = process.argv[3]

// switch (cmd) {
//   case 'list':
//     getAll()
//       .then(listProfile)
//       .catch(logError)
//       .finally(closeDB)
//     break

//   case 'add':
//     addProfile(name, answer1)
//       .then(getAll)
//       .then(listProfile)
//       .catch(logError)
//       .finally(closeDB)
//     break


//   case 'search':
//     findSame(animal)
//       .then(listWithoutQ)
//       .catch(logError)
//       .finally(closeDB)
//     break


//    default:
//       console.log('no matched cases')
//       closeDB()
//       break

// }
