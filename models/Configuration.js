const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ConfigurationSchema = new Schema({
    height: Number, 
    width: Number,
    depth: Number,
    colour: String,
    price: Number,
    furnitureType: String,
    defaultStyle: Boolean
}, {
    timestamps: true
})

const Configuration = mongoose.model('Configuration', ConfigurationSchema)

module.exports = Configuration