const express = require("express");
const JazzMsg = require("../models/companyPackage");
const router = new express.Router();

router.post("/packages/jazz/Msg", async (req, res) => {

    var jazzM = new JazzMsg({
        pkgName: req.body.pkgName,
        validity: req.body.validity,
        price: req.body.price,
        activationCode:req.body.activationCode,
        pkgDetails: req.body.pkgDetails,
    });
    console.log(jazzM);
    try {
        var saveJazzMsg = await jazzM.save();
        // console.log(res.send(saveTelenor));
        res.status(201).send(saveJazzMsg);
    } catch (err) {
        res.status(400).send(err);
    }
})
// read the data of the registered package
router.get("/packages/jazz/Msg", async (req, res) => {
    try {
        var readJazzMsg = await JazzMsg.find();
        res.send(readJazzMsg);
    } catch (error) {
        res.send(error);
    }
})

router.get("/packages/jazz/Msg/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        var packageData = await JazzMsg.findById(_id)
        console.log(packageData);
        if (!packageData) {
            return res.status(404).send();
        } else {
            res.send(packageData)
        }
    } catch (error) {
        res.send(error);
    }
});
module.exports = router;
