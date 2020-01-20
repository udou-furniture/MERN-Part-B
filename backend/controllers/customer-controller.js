const Customer = require('../models/Customer')

const index = async (req,res) => {
    const customers = await Customer.find()
    res.send(customers)
}

const create = async (req,res) => {
    try {
        const {username, password} = req.body
        const newCustomer = new Customer({
            username, 
            password
        })
        const savedCustomer  = await newCustomer.save()
        res.send(savedCustomer)
    } catch(err) {
        res.status(500).send(err.message)
    }
}

module.exports = {index, create}