const mongoose = require("mongoose");
const validator = require("validator");

const companyPackageSchema = new mongoose.Schema({
    pkgName: { type: String, require: true },
    validity: { type: String, require: true },
    price: { type: Number, require: true },
    activationCode: { type: Number, require: true },
    pkgDetails: {
        offnetMint: { type: String },
        onnetMint: { type: String },
        sms: { type: Number },
        internet: { type: Number },
    }
})

module.exports = mongoose.model('CompanyPackage', companyPackageSchema);

    