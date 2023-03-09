const mongoose = require('mongoose')

let UniSchema = new mongoose.Schema({
    title: String,
    link: String,
    price: String,
    program: String,
    about: String,
    note: String,
    selection: String,
    deadline: String,
    deadline_link: String
}, {
    versionKey: false
})

module.exports = mongoose.model('Uni', UniSchema)