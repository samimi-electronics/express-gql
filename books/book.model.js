const mongoose = require('mongoose')
const { authorSchema } = require('../authors/author.model')


const bookSchema = new mongoose.Schema({
    // children: [authorSchema],
    id: String,
    name: String,
    author: String
})

const Book = mongoose.model('Book', bookSchema)

module.exports = {
    Book
}
