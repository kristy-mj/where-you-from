var express = require('express');
var router = express.Router();
var profiles = require('../profile')


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


router.post('/search-results/', function(req, res, next) {

  var inputName = req.body.name
  var inputq1 = req.body.q1
  var inputq2 = req.body.q2
  var inputq3 = req.body.q3

  profiles.addProfile(inputName, inputq1, inputq2, inputq3)
    .then(profiles.getAll)
    .then(function (rows) {
      var row = rows.find(function (profile) {
        //returns row as an array
        return profile.name === inputName
      })
      // returns an object
      return row
    })
    .then(function (profile) {
      // uncomment below to see what profile is
      // console.log(profile, 'profile row')

      var id = profile.id
      // console.log(typeof id) / number
      res.redirect('/search-results/'+id)
    })
    .catch(function (err){
      console.error(err)
    })
});

router.get('/search-results/:id/', function(req, res, next) {
  // console.log(req.params, 'params')
  profiles.findYourAnswers('profile', {id: req.params.id}, function (err, resp) {
    if (err) {
      console.error(err)
    }
    else{
      res.render('search-results', resp[0])
    }
  })
  .catch(function (err){
      console.log(err)
  })
});

module.exports = router;
