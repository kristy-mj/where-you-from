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
}

function listProfile(user) {
  user.forEach(function (pro) {
    console.log((pro.id + ' : ' + pro.name +' ' + pro.q1))
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

function closeDB() {
  knex.destroy()
}
