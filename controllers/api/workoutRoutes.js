const router = require("express").Router();
const {Workout} = require("../models/exercises.js");

//GET /api/workouts to get the last workout
app.get("/workouts", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//PUT /api/workouts to add exercise
app.put("/workouts", (req, res) => {
    
});

//POST /api/workouts to create workout
app.post("/workouts", (req, res) => {
    body = req.body;
    Exercise.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//GET /api/workouts/range to get workouts in range
app.get("/workouts", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});
