const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CustomerSchema = new Schema({
    email: String, 
    password: String,
    address: String,
    city: String,
    state: String,
    postcode: Number,
    phoneNumber: Number,
    order: Array
}, {
    timestamps: true
})

const Customer = mongoose.model('Customer', CustomerSchema)

module.exports = Customer