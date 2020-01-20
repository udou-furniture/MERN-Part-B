const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CustomerSchema = new Schema({
    username: String, 
    password: String
}, {
    timestamps: true
})

const Customer = mongoose.model('Customer', CustomerSchema)

module.exports = Customer