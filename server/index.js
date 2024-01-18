const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const userRoutes = require('./routes/user')

const app = express()
const PORT = 3000

// Middlewares
app.use(cors())
app.use(express.json())

// MongoConnection
mongoose.connect('mongodb+srv://nikhilgarg26:z0AVr6QhozwszKMG@cluster0.6wcwk7j.mongodb.net/?retryWrites=true&w=majority', { dbName: 'otpverify', }).then(()=>{console.log('Connected to DB')})

// Routes
app.use('/auth', userRoutes)


app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})

// UtilsFunctions
