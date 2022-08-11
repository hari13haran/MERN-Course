require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workout')

const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// API Request Routes
app.use('/api/workouts', workoutRoutes)

// DB connection
mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            // listen for requests
            app.listen(process.env.PORT, () => {
                console.log('connected to DB & listening on port 4000')
            })
        })
        .catch((err) => {
            console.log(err)
        })