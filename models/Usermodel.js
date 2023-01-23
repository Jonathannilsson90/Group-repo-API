const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.Now
    }
})

module.exports = mongoose.model('Usermodel', userSchema)