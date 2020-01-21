const express = require('express')
const router = express.Router()

const Customer = require('../models/Customer')

router.get('/login', async (req,res) => {
    const customers = await Customer.find()
    res.send(customers)
})

router.post('/register', express.json(), async (req,res) => {
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
})

module.exports = router