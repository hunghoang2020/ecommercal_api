const mongoose = require('mongoose')

const Schema = mongoose.Schema
// const ObjectId = Schema.ObjectId

const admins = new Schema({
    admin_email: String,
    admin_password: String,
    // createdAt: { type: Date, default: Date.now },
    // updateAt: { type: Date, default: Date.now },
})

// module.exports = mongoose.model('User', User)
module.exports = mongoose.model('admins', admins)
