const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const Workouts =  new Schema({
    day: {
        type: Date,
        date: Date.now()
    },
    exercises:{
        type: Array
    }
})


const Workout = mongoose.model("Workout", Workouts)


module.exports = Workout;