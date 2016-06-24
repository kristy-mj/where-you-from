var express = require('express');
var router = express.Router();
// var dotenv = require('dotenv')
var knex = require('knex')

var profiles = require('../profile')

// dotenv.load()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/home')
})

router.get('/home', function(req, res, next) {
  res.render('index', {title: "Friend Finder"})
})

router.get('/startquiz', function(req, res, next) {
  res.render('quiz', { title: "What you like?"});
});

router.get('/search-results', function(req, res, next) {
  profiles.getAll()
    .then(function (data) {
      res.render('search-results', {data: data})
    })
    .catch(function (err){
      console.log(err)
    })
});

module.exports = router;
