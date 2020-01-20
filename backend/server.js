const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()


const app = express()

// heroku wont always use port 5000
const PORT = process.env.PORT || 5000

const DB_URL = 'mongodb://localhost:27017/udou-furniture-db'

mongoose.connect(DB_URL, (err) => {
    if(err) {
        console.log('error')
    } else {
        console.log('Connected to MongoDB')
    }
})


// Listening Port
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))