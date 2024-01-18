const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const userRoutes = require('./routes/user')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT

// Middlewares
app.use(cors())
app.use(express.json())

// MongoConnection
mongoose.connect(process.env.MONGOURL, { dbName: 'otpverify', }).then(() => { console.log('Connected to DataBase') })

// Routes
app.use('/auth', userRoutes)


app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})

// UtilsFunctions
