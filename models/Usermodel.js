/// Re-declaring mongoose npm package to initialze the Schema:
const mongoose = require('mongoose')
///The DB save content according to this Schema below:
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