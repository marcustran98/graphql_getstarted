const Author = require("../models/Author");
class AuthorService {
    async getAllAuthors() {
        return await Author.find();
    }

    async getAuthorById(id) {
        return await Author.findById(id)
    }
}

module.exports = new AuthorService();