const express = require('express')
const app = express()
require('dotenv').config()

app.use(express.json())
app.use('/users',require('./api/users') )

const connectToDB = require('./config/db')
connectToDB()

const port = process.env.PORT || 5000

app.listen(port, () => console.log('sever is up and running', port))