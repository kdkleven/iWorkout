
//   * Add exercises to the most recent workout plan.

//   * Add new exercises to a new workout plan.

// * View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

// * View the total duration of each workout from the past seven workouts on the `stats` page.


const router = require('express').Router();
const path = require("path");
const { Workout } = require("../models/workout.js");

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
router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//PUT /api/workouts to add exercise
router.put("/api/workouts", (req, res) => {
    
});

//POST /api/workouts to create workout
router.post("/api/workouts", (req, res) => {
    body = req.body;
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});


//GET /api/workouts/range to get workouts in range
router.get("/workouts/range", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;