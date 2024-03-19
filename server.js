require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const Item = require('./models/Item')
const port = process.env.PORT || 3001
const itemRoutes = require('./routes/itemRoutes')

// connect database
mongoose.connect(`${process.env.DB_URI}`)
  .then(() => console.log(`MongoDB connected`))
  .catch(err => console.log(`MongoDB connection error: ${err}`))
  
// middleware
app.set('view engine', 'ejs')
app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

// routes 
app.use('/', itemRoutes)

app.listen(port, () => console.log(`Server connection on port: ${port}`))