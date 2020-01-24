const express = require('express')
const router = express.Router()

const Customer = require('../models/Customer')

const {verifyToken, signToken} = require('../auth/tokenMiddleware')
const {hashPassword, comparePassword} = require('../auth/passwordMiddleware')

router.use(express.json())

router.post('/login', async (req,res) => {
    const inputEmail = req.body.email
    const inputPassword = req.body.password

    try {
        let customer = await Customer.findOne({email: inputEmail})
        if(!customer) {
            res.status(401).end()
        } else {
            const correctPassword = await comparePassword(inputPassword, customer.password)

            if (!correctPassword) {
                res.status(403).end()
            } else {
                let token = signToken(inputEmail)
                res.send({access_token: token})
            }
        }
    } catch (err) {
        res.status(403).end()
    }
})

router.get('/check-token', verifyToken, (req, res) => res.end())

router.post('/register', async (req,res) => {
    try {
        const hashedPassword = await hashPassword(req.body.password)
        const newEmail = req.body.email

        const newCustomer = new Customer({
            email: newEmail, 
            password: hashedPassword
        })

        await newCustomer.save()
        let token = signToken(newEmail)

        res.send({access_token: token})
    } catch(err) {
        res.status(500).end()
    }
})

module.exports = router