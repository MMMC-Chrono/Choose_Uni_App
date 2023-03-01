const mongoose = require('mongoose')

let UniSchema = new mongoose.Schema({
    title: String,
    link: String,
    price: String,
    program: String,
    about: String,
    note: String,
    selection: String
}, {
    versionKey: false
})

module.exports = mongoose.model('Uni', UniSchema)