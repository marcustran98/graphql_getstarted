const Author = require("../models/Author");
const Book = require("../models/Book");

const resolvers = {
    // QUERY
    Query: {
        books: async (parents, args, {bookService}) => {
            return await bookService.getAllBooks();
        },
        book: async (parent, {id}, {bookService}) => {
            return bookService.getBookById(id);
        },
        authors: async (parent, args, {authorService}) => {
            return authorService.getAllAuthors();
        },
        author: async (parent, {id}, {authorService}) => {
            return authorService.getAuthorById(id);
        }
    },
    Book: {
        author: async ({ authorId }, args, {authorService}) => {
            return await authorService.getAuthorById(authorId);
        }
    },
    Author: {
        books: async ({id}, args, {bookService}) => {
            const allBooks = await bookService.getAllBooks({authorId: id});
            return allBooks;
        }
    },

    // MUTATION
    Mutation: {
        createAuthor: async (parent, args) => {
            const author = new Author(args);
            return await author.save();
        },

        createBook: async (parent, args) => {
            const book = new Book(args);
            return await book.save();
        }
    }
}


module.exports = resolvers;