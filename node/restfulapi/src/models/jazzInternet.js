const mongoose = require("mongoose");
const validator = require("validator")
const jazzInternetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('jazzInternet', jazzInternetSchema);

