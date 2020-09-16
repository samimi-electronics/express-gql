const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const {schema, root} = require('./schema')
const app = express()
const { connect }  = require('mongoose')

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        rootValue: root,
        graphiql: true
    })
)

connect('mongodb://localhost:27017/books')
    .then(() => {
        console.log('connected to database')
        app.listen(5001, () => console.log('Server started on http://localhost:5000'))
    })
    .catch(err => console.log(err))

