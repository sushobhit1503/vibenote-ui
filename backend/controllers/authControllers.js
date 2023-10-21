const User = require('../model/User')
const path = require('path')
const generateToken = require('../config/generateToken')

const home = async (req, res) => {
    console.log("home")
}
const signup = async (req, res) => {

    try {
        const { username, phoneNumber } = req.body
        const userExists = await User.findOne({ phoneNumber });

        if (userExists) {
            res.status(400);
            throw new Error("User already exists");
        }
        
        const newUser = new User({
            username,
            phoneNumber,
        })

        await newUser.save()
        console.log('send OTP to the user')
        return res.json({message: 'hello'})
        
} catch (error) {
    console.error(error)
    return res.json({message: 'Error signing up!!'})
}
}

const login = async (req, res) => {
    try {
        const { phoneNumber } = req.body
        const user = await User.findOne({ phoneNumber })

        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }

    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Error Occured! Try again!' })
    }
    
}

const token = async (req, res) => {
    const { phoneNumber } = req.body

    const user = await User.findOne({ phoneNumber })
    
    const authToken = generateToken(user._id)
    const userData = { user, authToken }

    res.cookie('user', JSON.stringify(userData), { httpOnly: true })
    res.json({message: 'cookie sent'})
}

module.exports = { signup, login, home, token}