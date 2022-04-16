const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    authorId: {
        type: String
    }
})

module.exports = mongoose.model('book', BookSchema);