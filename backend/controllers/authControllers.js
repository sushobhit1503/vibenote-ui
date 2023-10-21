const User = require('../model/User')
const path = require('path')
const generateToken = require('../config/generateToken')

const home = async (req, res) => {
    return res.json({ message: "This is the home route. Welcome to VibeNote" })
}
const signup = async (req, res) => {

    try {
        const { name, phoneNumber } = req.body
        const userExists = await User.findOne({ phoneNumber });

        if (userExists) {
            return res.status(200).json({ error: "User already exists" })
        }

        const newUser = new User({
            name,
            phoneNumber,
        })

        await newUser.save()
        return res.status(200).json({ user: newUser })

    } catch (error) {
        return res.json({ error: error.message })
    }
}

const login = async (req, res) => {
    try {
        const { phoneNumber } = req.body
        const user = await User.findOne({ phoneNumber })
        if (!user) {
            return res.status(200).json({ error: "User not found" })
        }
        return res.status(200).json({ user: user })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }

}

const token = async (req, res) => {
    const { phoneNumber } = req.body

    const user = await User.findOne({ phoneNumber })

    const authToken = generateToken(user._id)
    const userData = { user, authToken }

    res.cookie('user', JSON.stringify(userData), { httpOnly: true }).status(200).json({message: "Cookie has been stored"})
}

module.exports = { signup, login, home, token }