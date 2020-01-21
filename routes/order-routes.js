const express = require('express')
const router = express.Router()

const Order = require('../models/Order')

router.get('/', (req,res) => {
    Order.find({ 
        // here need to put logic about finding orders where they are associated to a logged in user
    })
    .then(allOrders => {
        return res.json(allOrders)
    })
    .catch(err => res.json(err))
})

router.get('/:orderID', (req,res) => {
    const {orderID} = req.params

    Order.findOne( {orderID} )
    .then( order => {
        return res.json(order)
    })
    .catch( err => res.json(err))
})

router.post('/new-order', (req,res) => {
    const {orderID, purchased, saved, review, customerEmail, configuration: {height, width, depth, colour, price, furnitureType}} = req.body

    Order.create( {orderID, purchased, saved, review, customerEmail, configuration: {height, width, depth, colour, price, furnitureType}} )
    .then( newOrder =>
    {
        res.json(newOrder);
    } )
    .catch( err => res.json( err ) )
})

router.delete('/:orderID', (req,res) => {
    const {orderID} = req.params
    
    Order.findOneAndDelete({orderID})
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