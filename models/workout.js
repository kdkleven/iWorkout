const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        required: "Select an exercise type"
      },
      name: {
        type: String,
        required: "Provide the name of the exercise"
      },
      duration: {
        type: Number,
        require: "Enter a duration"
      },
      weight: {
        type: Number,
        require: "Enter a weight"
      },
      reps: {
        type: Number,
        require: "Enter the number of reps"
      },
      sets: {
        type: Number,
        require: "Enter the number of sets"
      },
      distance: {
        type: Number,
        require: "Enter the distance"
      },
    }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
