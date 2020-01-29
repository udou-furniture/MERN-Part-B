const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require("path")
require('dotenv').config()

const app = express()

app.use(express.json())

mongoose.set('useFindAndModify', false);

// heroku wont always use port 5000
const PORT = process.env.PORT || 5000

const dbConfig = {useNewUrlParser: true, useUnifiedTopology: true}

app.use(express.static(path.join(__dirname, "client", "build")))

mongoose.connect(process.env.DB_URL, dbConfig, (err) => {
    if(err) {
        console.log('error')
    } else {
        console.log('Connected to MongoDB')
    }
})

app.use(cors({}))

app.use(require('./routes/index'))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Listening Port
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))