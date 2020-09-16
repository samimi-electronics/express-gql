const shortid = require('shortid')
const { Author } = require('./author.model')

module.exports.create = (AuthorName) => {
    const Author = new Author({
        id: shortid.generate(),
        name: AuthorName,
        author: ''
    })
    Author.save()
    return Author
}

module.exports.getAuthors = async () => {
    return Author.find()
}

module.exports.getAuthorById = async (id) => {
    return Author.findById(id)
}
