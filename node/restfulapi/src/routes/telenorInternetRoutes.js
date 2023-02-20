const express = require("express");
const router = new express.Router();
const Telenor = require("../models/Telenor");
router.post("/packages/telenor", async (req, res) => {
    // console.log(req.body);
    // res.send("hello sajjad ahmad");
    // var telenor = new Telenor(req.body);
    // telenor.save().then(() => {
    //     console.log(res.send(telenor))
    //     return res.status(201).send(telenor);
    // }).catch((e) => {
    //     return res.status(400).send(e);
    // })

    var telenor = new Telenor({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        number: req.body.number,
    });
    console.log(telenor);
    try {
        var saveTelenor = await telenor.save();
        // console.log(res.send(saveTelenor));
        res.status(201).send(saveTelenor);
    } catch (err) {
        res.status(400).send(err);
    }
})
// read the data of the registered package
router.get("/packages/telenor", async (req, res) => {
    try {
        var readTelenor = await Telenor.find();
        res.send(readTelenor);
    } catch (error) {
        res.send(error);
    }
})

router.get("/packages/telenor/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        var packageData = await Telenor.findById(_id)
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
