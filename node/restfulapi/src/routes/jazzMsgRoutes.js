const express = require("express");
const Jazz = require("../models/Jazz");
const router = new express.Router();
const jazz = require("../models/Jazz");
router.post("/packages/jazz", async (req, res) => {
    // console.log(req.body);
    // res.send("hello sajjad ahmad");
    // var telenor = new Telenor(req.body);
    // telenor.save().then(() => {
    //     console.log(res.send(telenor))
    //     return res.status(201).send(telenor);
    // }).catch((e) => {
    //     return res.status(400).send(e);
    // })

    var jazz = new Jazz({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        number: req.body.number,
    });
    console.log(jazz);
    try {
        var saveJazz = await jazz.save();
        // console.log(res.send(saveTelenor));
        res.status(201).send(saveJazz);
    } catch (err) {
        res.status(400).send(err);
    }
})
// read the data of the registered package
router.get("/packages/jazz", async (req, res) => {
    try {
        var readJazz = await Jazz.find();
        res.send(readJazz);
    } catch (error) {
        res.send(error);
    }
})

router.get("/packages/jazz/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        var packageData = await Jazz.findById(_id)
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
