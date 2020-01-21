const express = require('express')
const router = express.Router()

router.use('/api/customers', require('./customer-routes'))
router.use('/api/configurations', require('./configuration-routes'))
router.use('/api/reviews', require('./review-routes'))

module.exports = router