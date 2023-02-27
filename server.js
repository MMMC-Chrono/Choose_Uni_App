const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('asserts'))
app.use(express.json())

const { 
    main_page,
    add_page,
    list_page } = require('./controllers/functions')


app.route('/')
   .get(main_page)

app.route('/add')
   .get(add_page)

app.route('/list')
   .get(list_page)

app.use(function(req, res, next) {
    res.status(404)
       .type('text')
       .send('Not Found')
})

const listener = app.listen( process.env.port || 3000, function() {
    console.log("Running on port " + listener.address().port + ".....")
})