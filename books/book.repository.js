const shortid = require('shortid')
const { Book } = require('./book.model')

module.exports.create = (bookName) => {
    const book = Book({
        id: shortid.generate(),
        name: bookName,
        author: ''
    })
    book.save()
    return book
}

module.exports.getBooks = async () => {
    return Book.find()
}

module.exports.getBookById = async (id) => {
    return Book.find({ id })
}
