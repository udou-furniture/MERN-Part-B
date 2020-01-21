const express = require('express')
const router = express.Router()

const Configuration = require('../models/Configuration')

router.get('/configuration', (req,res) => {
    res.send("Hello Configuration Page")
})

router.get('/:configuration/:id', (req,res) => {
    res.send("Hello Individual Furniture Item Page")
})

router.post('/:configuration/:id/save', (req,res) => {
    res.status(200)
})

router.delete('/:configuration/:id/remove', (req,res) => {
    res.status(200)
})

module.exports = router