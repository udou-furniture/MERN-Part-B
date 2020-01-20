const express = require('express')
const router = express.Router()

router.use('/customer', require('./customer-routes'))

// app.use(express.json())

// app.get('/', (req,res) => {
//     res.send("Hello")
// })

// app.get('/login', (req,res) => {
//     res.send("Hello Login Page")
// })

// app.post('/register', (req,res) => {
//     res.send("Hello Sign up Page")
// })

// app.get('/:collection', (req,res) => {
//     res.send("Hello Collection Page")
// })

// app.get('/:collection/:id', (req,res) => {
//     res.send("Hello Individual Furniture Item Page")
// })

// app.post('/:collection/:id/save', (req,res) => {
//     res.status(200)
// })

// app.delete('/:collection/:id/remove', (req,res) => {
//     res.status(200)
// })

// app.get('/reviews', (req,res) => {
//     res.send("Hello Review Page")
// })

module.exports = router