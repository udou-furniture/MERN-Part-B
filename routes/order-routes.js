const express = require('express');
const router = express.Router();

const Order = require('../models/Order')
const {verifyToken} = require('../auth/tokenMiddleware')

// this route is only for debugging

// router.get('/', (req,res) => {
//     Order.find({
//     })
//     .then(allOrders => {
//         return res.json(allOrders)
//     })
//     .catch(err => res.json(err))
// })

router.get('/reviews', (req, res) => {
  Order.find({})
    .then(allOrders => {
      return res.json(allOrders.review);
    })
    .catch(err => res.json(err));
});

router.patch('/new-review/', verifyToken, (req,res) => {
    const {orderID, review} = req.body
    const query = {customerEmail: req.decoded.email, _id: orderID}

    Order.findOneAndUpdate(query, {review: review})
    .then( () => {
        return res.end()
    })
})

router.get('/my-orders', verifyToken, (req,res) => {
    const query = {
        customerEmail: req.decoded.email,
        purchased: true
    }
    Order.find(query)
    .then(allOrders => {
      return res.json(allOrders);
    })
    .catch(err => res.json(err));
});

router.get('/:_id', verifyToken, (req,res) => {
    const {_id} = req.params

  Order.findOne({ customerEmail: req.decoded.email, _id })
    .then(order => {
      return res.json(order);
    })
    .catch(err => res.json(err));
});

router.post('/new-order', verifyToken, (req, res) => {
  const customerEmail = req.decoded.email;
  const {
    configuration: { height, width, depth, colour, price, furnitureType }
  } = req.body;

  Order.create({
    purchased,
    saved,
    review,
    customerEmail,
    configuration: { height, width, depth, colour, price, furnitureType }
  })
    .then(newOrder => {
      res.json(newOrder);
    })
    .catch(err => res.json(err));
});

router.delete('/:_id', (req, res) => {
  const { _id } = req.params;

  Order.findOneAndDelete({ _id })
    .then(order => {
      if (!order) {
        return res.send('No order found with that ID');
      } else {
        res.send('Order deleted from cart');
      }
    })
    .catch(err => res.json(err));
});

module.exports = router;
