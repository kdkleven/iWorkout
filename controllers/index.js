const router = require('express').Router();
const path = require("path");
const {Exercise} = require("../models/exercises.js");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "./public/index.html"));
});

router.get("/stats", (req, res) => {
    
    res.sendFile(path.join(__dirname, "../public", 'stats.html'));

});

router.get("/exercise", (req, res) => {
    
    res.sendFile(path.join(__dirname, "../public", 'exercise.html'));

});


//GET /api/workouts to get the last workout
router.get("/workouts", (req, res) => {
    Exercise.find({})
    .then(dbExercise => {
        res.json(dbExercise);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//PUT /api/workouts to add exercise
router.put("/workouts", (req, res) => {
    
});

//POST /api/workouts to create workout
router.post("/workouts", (req, res) => {
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
router.get("/workouts", (req, res) => {
    Exercise.find({})
    .then(dbExercise => {
        res.json(dbExercise);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;
