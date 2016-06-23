var express = require('express');
var router = express.Router();
var dotenv = require('dotenv')
var dummyData = require('../database/db.json')


dotenv.load()

var googleMapsKey = process.env.GOOGLE_MAP_BROWSER_KEY

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Who are you?");
});

module.exports = router;
