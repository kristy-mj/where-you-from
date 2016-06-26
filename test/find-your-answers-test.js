var test = require('tape')
var db = require('../profile')

test('return the last row from the db', function (t) {
    //arrange
    var expectedResult = { id: 5, name: 'Kristy', q1: 'dogs', q2: 'winter', q3: 'Mac' }

    //action
    var actualResult = db.findYourAnswers('profile', {id: 5}, function (err, resp) {
        if (err) {
            console.error(err)
        } else {
            //assert
            t.deepEqual(resp[0], expectedResult, 'we got it')
            t.end()
        }
    })


})

