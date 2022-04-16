const Book = require("../models/Book");

class BookService {
    async getAllBooks(condition = null) {
        return condition === null ? await Book.find() : await Book.find(condition);
    }

    async getBookById(id) {
        return  await Book.findById(id);
    }

    async createBook(args) {
		const newBook = new Book(args);
		return await newBook.save();
	}
}

module.exports = new BookService();