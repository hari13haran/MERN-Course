const express = require('express')

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
router.post('/', (req,res) => {
    res.json({message:'POST a new workout route'})
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