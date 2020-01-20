const express = require('express')
const router = express.Router()

const {index, create} = require('../controllers/customer-controller')

router.get('/', index)
router.post('/create', express.json(), create)

module.exports = router