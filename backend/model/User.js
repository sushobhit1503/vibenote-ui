const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    spotifyId: String,
    username: String,
    phoneNumber: String,
    role: String
})

const User = mongoose.model('User', userSchema)

module.exports = User