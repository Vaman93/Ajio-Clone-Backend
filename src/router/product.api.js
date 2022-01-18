const express = require('express');
const router = express.Router();

const ProductSchema = require('../Schema/project.schema')


//men jacket and jeans 
router.get("/men/productjacket" , async (req, res) => {
    try{
        const product = await ProductSchema.find({ producttype: { $eq: "jacket" } });
        res.send(product);

    }catch (err) {
        console.log(err);
    }
})

router.get("/men/productjeans", async (req, res) => {
    try {
        const product = await ProductSchema.find({ producttype: { $eq: "jeans" }, gender: { $eq: "male" } });
        res.send(product);
    } catch (err) {
        console.log(err);
    }
});

// women jeans and tshirt

router.get("/women/producttshirt" , async (req, res) => {
    try{
        const product = await ProductSchema.find({ producttype: { $eq: "tshirt" } });
        res.send(product);

    }catch (err) {
        console.log(err);
    }
})

router.get("/men/productjeans", async (req, res) => {
    try {
        const product = await ProductSchema.find({ producttype: { $eq: "jeans" }, gender: { $eq: "male" } });
        res.send(product);
    } catch (err) {
        console.log(err);
    }
});


module.exports = router
