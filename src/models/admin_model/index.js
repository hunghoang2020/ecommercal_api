const mongoose = require('mongoose')

const Schema = mongoose.Schema
// const ObjectId = Schema.ObjectId

const User = new Schema({
    user_name: String,
    password: String,
    // createdAt: { type: Date, default: Date.now },
    // updateAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('User', User)
