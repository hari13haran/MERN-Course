const User = require('../models/userModel')

// login user function
const loginUser = async (req,res) => {
    res.json({mssg: 'login user'})
}

// sign-up user function
const signupUser = async (req,res) => {
    res.json({mssg: 'sign-up user'})
}

module.exports = { signupUser, loginUser }