const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CustomerSchema = new Schema({
    email: String, 
    password: String,
    name: String,
    address: String,
    city: String,
    state: String,
    postcode: Number,
    phoneNumber: Number
}, {
    timestamps: true
})

const Customer = mongoose.model('Customer', CustomerSchema)

module.exports = Customer