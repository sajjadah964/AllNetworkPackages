const mongoose = require("mongoose");
const validator = require("validator")
const ufoneInternetSchema = new mongoose.Schema({
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
// const Telenor= new mongoose.model('Telenor', telenorSchema);
// module.exports =Telenor;
module.exports = mongoose.model('UfoneInternet', ufoneInternetSchema);

