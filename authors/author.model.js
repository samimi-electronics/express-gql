const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    id: String,
    firstname: String,
    lastname: String
})

const Author = mongoose.model('Author', authorSchema)

module.exports = {
    Author
}