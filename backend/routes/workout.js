const express = require('express')
const Workout = require('../models/workoutModel.js')

const router = express.Router()

// GET all workouts
router.get('/', (req, res) => {
    res.json({message:'GET all workouts route'})
})

// GET a single workout
router.get('/:id', (req, res) => {
    res.json({message:'GET a single workout route'})
})

// POST a new workout
router.post('/', async (req,res) => {
    const {title, load, reps} = req.body
    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (err) {
        res.status(400).json({error: error.message})
    }
})

// DELETE a workout
router.delete('/:id', (req,res) => {
    res.json({message:'DELETE a workout route'})
})

// UPDATE a workout
router.patch('/:id', (req,res) => {
    res.json({message:'UPDATE a workout route'})
})

module.exports = router