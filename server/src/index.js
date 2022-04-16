require('dotenv').config()
const express = require('express');
const {ApolloServer} = require('apollo-server-express');

const typeDefs= require('./schemas/schema');
const resolvers = require('./resolvers/resolver');

const myDb = require("./configs/db.connect");
const PORT = 4000;

const bookService = require("./services/book.service");
const authorService = require("./services/author.service");

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => {
        return {
            bookService,
            authorService
        }
    }
});

const app = express();

async function main() {
    await server.start();
    
    server.applyMiddleware({app});

    myDb.connectDB();
    
    app.listen(PORT, () => {
        console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
    });
}

main().catch(err => {
    console.log("err", err);
});