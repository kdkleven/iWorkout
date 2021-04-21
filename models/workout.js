const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Select the exercise type"
  },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for exercise"
  },
  duration: {
    type: Number,
    default: 0
  },
  weight: {
    type: Number,
    default: 0
  },
  reps: {
    type: Number,
    default: 0
  },
  sets: {
    type: Number,
    default: 0
  },
  distance: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
