const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()

const { main_page } = require('./controllers/functions')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.route('/')
    .get(main_page)

app.use(function(req, res, next) {
    res.status(404)
       .type('text')
       .send('Not Found')
})

const listener = app.listen( process.env.port || 3000, function() {
    console.log("Running on port " + listener.address().port + ".....")
})