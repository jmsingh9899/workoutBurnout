const router = require('express').Router();
const db = require('../../model');

router.get('/', (req, res) => {
    db.Workout.find({}).then(data => {
        res.json(data)
    }).catch((err) => {
            console.log(err)
            res.json(err)
        })
})

module.exports = router