const mongoose = require("mongoose");
const validator = require("validator")
const companyPackageSchema = new mongoose.Schema({
    pkgName: { type: String, require: true },
    validity: { type: String, require: true },
    price: { type: Number, require: true },
    pkgDetails: {
        offnetMint: { type: Number },
        onnetMint: { type: Number },
        sms: { type: Number },
        internet: { type: Number },
    }
})

module.exports = mongoose.model('CompanyPackage', companyPackageSchema);

