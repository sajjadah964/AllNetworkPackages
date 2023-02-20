const mongoose = require("mongoose");
const validator = require("validator")
const jazzCallSchema = new mongoose.Schema({
    // callPkg: [{
    //     pkgName: { type: String, require: true },
    //     validity: { type: String, require: true },
    //     price: { type: Number, require: true },
    //     pkgDetails: [{
    //         offnetMint: { type: Number },
    //         onnetMint: { type: Number },
    //         sms: { type: Number },
    //         internet: { type: Number },
    //     }]
    // }]
    pkgName: { type: String, require: true },
    validity: { type: String, require: true },
    price: { type: Number, require: true },
    pkgDetails: [{
        offnetMint: { type: Number },
        onnetMint: { type: Number },
        sms: { type: Number },
        internet: { type: Number },
    }]
})

module.exports = mongoose.model('jazzCall', jazzCallSchema);

