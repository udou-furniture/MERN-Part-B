const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const app = express()

// heroku wont always use port 5000
const PORT = process.env.PORT || 5000

const dbConfig = {useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect(process.env.DB_URL, dbConfig, (err) => {
    if(err) {
        console.log('error')
    } else {
        console.log('Connected to MongoDB')
    }
})

app.use(cors({}))

app.use(require('./routes/index'))

// Listening Port
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))