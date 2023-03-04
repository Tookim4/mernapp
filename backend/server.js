const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config({path:__dirname+'/.env'})
const port = process.env.PORT || 3000
const {errorHandler} = require('./middleware/middleWare')
const connectDB = require('./config/db')

connectDB()
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals', require('./routes/goalsRoutes.js'))
// app.get('/api/goals', (req, res) => res.send('Hello World!'))

app.use(errorHandler)

app.listen(port, () => console.log(`Kim Too's App is listening on ${port}!`))