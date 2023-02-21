const express = require("express");
const jazzCall = require("../models/companyPackage");
const router = new express.Router();
router.post("/packages/jazz/call", async (req, res) => {

    var jazzC = new jazzCall({
        pkgName: req.body.pkgName,
        validity: req.body.validity,
        price: req.body.price,
        activationCode: req.body.activationCode,
        pkgDetails: req.body.pkgDetails,
    });
    console.log(jazzC);
    try {
        var saveJazzCall = await jazzC.save();
        // console.log(res.send(saveTelenor));
        res.status(201).send(saveJazzCall);
    } catch (err) {
        res.status(400).send(err);
    }
})
// read the data of the registered package
router.get("/packages/jazz/call", async (req, res) => {
    try {
        var readJazzCall = await jazzCall.find();
        res.send(readJazzCall);
    } catch (error) {
        res.send(error);
    }
})

// router.get("/packages/jazz/call/:id", async (req, res) => {
//     try {
//         const _id = req.params.id;
//         var packageData = await jazzCall.findById(_id)
//         console.log(packageData);
//         if (!packageData) {
//             return res.status(404).send();
//         } else {
//             res.send(packageData)
//         }
//     } catch (error) {
//         res.send(error);
//     }
// });
module.exports = router;
