var express = require('express');
var router = express.Router();
var dotenv = require('dotenv')

dotenv.load()

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

module.exports = router;
