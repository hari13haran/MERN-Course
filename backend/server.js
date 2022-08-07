require('dotenv').config()
const express = require('express')

const app = express()

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// API Request Routes

app.get('/', (req,res) => {
    res.json({message: 'Welcome to the app'})
})

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000')
})