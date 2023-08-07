const express = require('express')
const cors = require('cors')
const app = express()
const morgan = require('morgan')
const bodyparser = require('body-parser')
require('dotenv').config()

const userData = require('./router/route')


app.use(cors())

app.use(morgan('dev'))

app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

app.use(userData)

module.exports = app