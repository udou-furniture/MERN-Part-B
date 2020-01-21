const express = require('express')
const router = express.Router()

router.get('/', async (req,res) => {
    const reviews = await Review.find()
    res.send(reviews)
})

router.post('/new-review', async (req, res) => {
    
})

module.exports = router