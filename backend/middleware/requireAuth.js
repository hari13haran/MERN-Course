const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {
    // verify authentication token
    const { authorization } = req.headers
    // check if headers are sent
    if(!authorization) {
        return res.status(401).json({error: 'Authorization token required'})
    }
    // split the JWT
    const token = authorization.split(' ')[1]
    // compare the token with SECRET in .env 
    try {
        const {_id} = jwt.verify(token, process.env.SECRET)
        req.user = await User.findOne({ _id }).select('_id')
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({error: 'Request is not authorized'})
    }
    
}

module.exports = requireAuth