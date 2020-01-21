const express = require('express')
const router = express.Router()
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const Customer = require('../models/Customer')
const tokenMiddleware = require('../auth/tokenMiddleware')
const {hashPassword, comparePassword} = require('../auth/passwordMiddleware')

router.post('/login', express.json(), async (req,res) => {
    const inputEmail = req.body.email
    const inputPassword = req.body.password
    // const {email, password} = req.body

    try {
        let customer = await Customer.findOne({email: inputEmail})
        // console.log(inputEmail, customer)
        if(!customer) {
            res.status(401).end()
        } else {
            const correctPassword = await comparePassword(inputPassword, customer.password)

            if (!correctPassword) {
                res.status(403).end()
            } else {
                let token = jwt.sign({
                                email: inputEmail},
                                process.env.SECRET_KEY,
                                {expiresIn: '1hr'})
                
                    res.status(200).send("Logged In with token")
                    console.log(token)
            }
        }
    } catch (err) {
        console.log(err)
    }
})

router.post('/register', express.json(), async (req,res) => {
    try {
        const hashedPassword = await hashPassword(req.body.password)
        const newEmail = req.body.email
        const newCustomer = new Customer({
            email: newEmail, 
            password: hashedPassword
        })

        const savedCustomer  = await newCustomer.save()
        res.send(savedCustomer)
    } catch(err) {
        res.status(500).send(err.message)
    }
})

module.exports = router