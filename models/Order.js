const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    purchased: Boolean,
    saved: Boolean,
    review: String,
    configuration: Object
}, {
    timestamps: true
})

const Order = mongoose.model('Order', OrderSchema)

module.exports = Order