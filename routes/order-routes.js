const express = require('express')
const router = express.Router()

const Order = require('../models/Order')
const authMiddleware = require('../auth/tokenMiddleware')

// this route is only for debugging

router.get('/', (req,res) => {
    Order.find({
    })
    .then(allOrders => {
        return res.json(allOrders)
    })
    .catch(err => res.json(err))
})

// router.get('/', authMiddleware.checkToken, (req,res) => {
//     Order.find({customerEmail: req.decoded.email
//     })
//     .then(allOrders => {
//         return res.json(allOrders)
//     })
//     .catch(err => res.json(err))
// })

router.get('/:_id', authMiddleware.checkToken, (req,res) => {
    const {_id} = req.params

    Order.findOne( { customerEmail: req.decoded.email, _id} )
    .then( order => {
        return res.json(order)
    })
    .catch( err => res.json(err))
})

router.post('/new-order', authMiddleware.checkToken, (req,res) => {
    const customerEmail = req.decoded.email
    // const orderID = Order.count() + 1
    const {purchased, saved, review, configuration: {height, width, depth, colour, price, furnitureType}} = req.body

    Order.create( {purchased, saved, review, customerEmail, configuration: {height, width, depth, colour, price, furnitureType}} )
    .then( newOrder =>
    {
        res.json(newOrder);
    } )
    .catch( err => res.json( err ) )
})

router.delete('/:_id', (req,res) => {
    const {_id} = req.params
    
    Order.findOneAndDelete({_id})
    .then(order =>{
        if(!order) {
            return res.send("No order found with that ID")
        } else {
            res.send("Order deleted from cart")
        }
    })
   .catch(err => res.json(err))
})



module.exports = router