// const { GraphQLID, GraphQLObjectType, GraphQLString } = require('graphql')
const {buildSchema} = require('graphql')
const bookRepository = require('./books/book.repository')

const schema = buildSchema(`

    type Author {
        id: ID!
        firstname: String!
        lastname: String!
    }
    
    type Book {
        id: ID!
        name: String!
        author: Author
    }
    
    type Query {
        books: [Book!]
        authors: [Author!]
        book(id: ID!): [Book!]
    }
`)

const root = {
    books: async () => {
        const books = await bookRepository.getBooks()
        console.log(books)
        return books
    },
    book: async ({ id }) => {
        // return bookRepository.getBookById(id)
        const book = await bookRepository.getBookById(id)
        console.log(book)
        return book
    }
}


// const AuthorType = new GraphQLObjectType({
//     name: 'Author',
//     fields: () => ({
//         id: { type: GraphQLID },
//         firstname: { type: GraphQLString },
//         lastname: { type: GraphQLString }
//     })
// })
//
// const BookType = new GraphQLObjectType({
//     name: 'Book',
//     fields: () => ({
//         id: { type: GraphQLID },
//         name: { type: GraphQLString },
//         author: { type: AuthorType }
//     })
// })
//
// const RootQuery = new GraphQLObjectType({
//     name: 'RootQueryType',
//     fields: {
//         books: {
//             type: new GraphQLList(BookType),
//             resolve(parent, args) {
//
//             }
//         }
//     }
// })

module.exports = {
    schema,
    root
}
