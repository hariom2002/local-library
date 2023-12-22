const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Genres = mongoose.Schema({
    genres: {
        typeof:String,
        require: true,
        enum: ["Fiction", "Drama", "Philosophy", "Biography", "Thriller", "Romance"],
        default: "Book"
    }
});

module.exports = mongoose.model("Genres", Genres);