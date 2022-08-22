const Workout = require('../models/workoutModel.js')
const mongoose = require('mongoose')

// Get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

// Get a single workout
const getWorkout = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({err: 'No such workout found!'})
    }

    const workout = await Workout.findById(id)
    
    if(!workout) {
        return res.status(404).json({err: 'No such workout found!'})
    }
    res.status(200).json(workout)
}

// Create a new workout
const createWorkout =  async (req, res) => {
    
    // request body payload
    const {title, load, reps} = req.body
    
    // add data to DB
    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (err) {
        res.status(400).json({error: error.message})
    }
}

// Delete a workout
const deleteWorkout = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({err: 'No such workout found!'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if(!workout) {
        return res.status(400).json({err: 'No such workout found!'})
    }
    res.status(200).json(workout)
}

// Update a workout
const updateWorkout = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({err: 'No such workout found!'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!workout) {
        return res.status(400).json({err: 'No such workout found!'})
    }
    res.status(200).json(workout)
}

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}
