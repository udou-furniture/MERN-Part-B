const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    orderID: Number,
    purchased: Boolean,
    saved: Boolean,
    review: String,
    customerEmail: String,
    configuration: {
        height: Number, 
        width: Number,
        depth: Number,
        colour: String,
        price: Number,
        furnitureType: String
    }
}, {
    timestamps: true
})

const Order = mongoose.model('Order', OrderSchema)

module.exports = Order