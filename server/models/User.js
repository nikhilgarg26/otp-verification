const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    otp: {
        type: Number,
    }
})

const User = mongoose.model('user', userSchema)

module.exports = User