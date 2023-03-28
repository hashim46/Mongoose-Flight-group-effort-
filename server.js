require('dotenv').config()

const express = require('express')

const app = express()

const PORT = 8080

const connectDB = require('./config/db')
connectDB()

const { createEngine } = require('jsx-view-engine')

const methodOverride = require('method-override')

const routes = require('./routes/flightRoutes')

app.set('view engine', 'jsx')

app.engine('jsx', createEngine())

app.use(express.urlencoded({ extended: true }))

app.use(methodOverride('_method'))

app.use(express.static('public'))

app.use('/flights', routes)

app.listen(PORT, ()=> {
    console.log('Listening on port ' + PORT)
})