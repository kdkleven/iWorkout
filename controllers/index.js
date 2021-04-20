const router = require('express').Router();
const path = require("path");
const {Exercise} = require("../models/exercises.js");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "./public/index.html"));
});

router.get("/stats", (req, res) => {
    
    res.sendFile(path.join(__dirname, "../public", 'stats.html'));

});

//GET /api/workouts to get the last workout
router.get("/exercise", (req, res) => {
    Exercise.find({})
    .then(dbExercise => {
        res.json(dbExercise);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//PUT /api/workouts to add exercise
router.put("/exercise", (req, res) => {
    
});

//POST /api/workouts to create workout
router.post("/exercise", (req, res) => {
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
router.get("/exercise", (req, res) => {
    Exercise.find({})
    .then(dbExercise => {
        res.json(dbExercise);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;
