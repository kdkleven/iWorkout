const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: {
    type: "object",
  },
  // type: {
  //   type: String,
  // },
  // name: {
  //   type: String,
  // },
  // duration: {
  //   type: Number,
  //   default: 0
  // },
  // weight: {
  //   type: Number,
  //   default: 0
  // },
  // reps: {
  //   type: Number,
  //   default: 0
  // },
  // sets: {
  //   type: Number,
  //   default: 0
  // },
  // distance: {
  //   type: Number,
  //   default: 0
  // },
  day: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
