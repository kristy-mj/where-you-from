var express = require('express');
var router = express.Router();
var dotenv = require('dotenv')


dotenv.load()

var googleMapsKey = process.env.GOOGLE_MAP_BROWSER_KEY

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Where you at?", googleMap: "https://maps.googleapis.com/maps/api/js?key=" + googleMapsKey + "&callback=initMap" });
});

router.get('/', function(req, res, next) {
  var google
});

module.exports = router;
