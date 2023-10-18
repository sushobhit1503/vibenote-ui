const User = require('../model/User')
const path = require('path')
const generateToken = require('../config/generateToken')
const auth = require("firebase/auth");


const signup = async (req, res) => {

    try {
        const { username, phoneNumber, spotifyId } = req.body
        const userExists = await User.findOne({ phoneNumber });

        if (userExists) {
            res.status(400);
            throw new Error("User already exists");
        }
        
        const newUser = new User({
            spotifyId,
            username,
            phoneNumber,
        })

        await newUser.save()
        console.log('send OTP to the user')
        return res.json({message: 'hello'})
        
} catch (error) {
    console.error(error)
    return res.render('signup', { error: 'Registration failed' })
}
}

const login = async (req, res) => {
    try {
        const { phoneNumber } = req.body
        const user = await User.findOne({ phoneNumber })

        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }

        const authToken = generateToken(user._id)
        return res.json({ authToken })

    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Error Occured! Try again!' })
    }
    
}

module.exports = { signup, login}