#!/usr/bin/env node
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: __dirname + '/dev.sqlite3'
  },
  useNullAsDefault: true
})

var cmd = process.argv[2]
var name = process.argv[3]
var answer1 = process.argv[4]
var animal = process.argv[3]

switch (cmd) {
  case 'list':
    getAll()
      .then(listProfile)
      .catch(logError)
      .finally(closeDB)
    break

  case 'add':
    addProfile(name, answer1)
      .then(getAll)
      .then(listProfile)
      .catch(logError)
      .finally(closeDB)
    break


  case 'search':
    findSame(animal)      
      .then(listWithoutQ)
      .catch(logError)
      .finally(closeDB)
    break


   default:
      console.log('no matched cases')
      closeDB()
      break
  
}


function listProfile(user) {
  user.forEach(function (pro) {
    console.log((pro.id + ' : ' + pro.name +' ' + pro.q1))
  })
}

function listWithoutQ(user) {
  user.forEach(function (pro) {
    console.log((pro.id + ' : ' + pro.name))
  })
}

function logError(err) {
  console.log('error mate', err)
}

function getAll() {
  return knex.raw('select * from "profile"')
}

function addProfile (name, answer1) {
  return knex('profile').insert({
    name: name,
    q1: answer1
  })
}

function findSame(animal){
  var array = animal.split(' ')
  for(var i=0; i<array.length; i++){
    var word = array[i]    
  }
  return (knex.raw('select * from "profile" where "q1" like "%' + word + '%"'))
}

function closeDB() {
  knex.destroy()
}
