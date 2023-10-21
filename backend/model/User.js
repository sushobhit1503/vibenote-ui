const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    spotifyId: String,
    name: String,
    phoneNumber: String,
    role: String
})

const User = mongoose.model('User', userSchema)

module.exports = User