const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const GenreSchema = new Schema({
    genre: {
        type: String,
        require: true,
        enum: ["Fiction", "Drama", "Philosophy", "Biography", "Thriller", "Romance"],
        default: "Fiction"
    }
});

module.exports = mongoose.model("Genre", GenreSchema);