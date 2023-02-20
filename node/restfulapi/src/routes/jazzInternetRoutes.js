const express = require("express");
const jazzInternet = require("../models/jazzInternet");
const router = new express.Router();


router.post("/packages/jazz/internet", async (req, res) => {

    var jazzI = new jazzInternet({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        number: req.body.number,
    });
    // console.log(jazzCall);
    try {
        var saveJazzInternet = await jazzI.save();
        // console.log(res.send(saveTelenor));
        res.status(201).send(saveJazzInternet);
    } catch (err) {
        res.status(400).send(err);
    }
})
// read the data of the registered package
router.get("/packages/jazz/internet", async (req, res) => {
    try {
        var readJazzInternet = await jazzInternet.find();
        res.send(readJazzInternet);
    } catch (error) {
        res.send(error);
    }
})

router.get("/packages/jazz/internet/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        var packageData = await jazzInternet.findById(_id)
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
