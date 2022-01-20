const express = require('express');

// const client  = require('../config/redius');
const router = express.Router();

const ProductSchema = require('../Schema/project.schema')


//men jacket and jeans 
router.get("/men/productjacket", async (req, res) => {
    try {
        const product = await ProductSchema.find({ producttype: { $eq: "jacket" } });
   
        res.status(200).send(product);
    } catch (err) { 
        console.log(err.message);
    }
});

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

router.get("/women/productjeans", async (req, res) => {
    try {
        const product = await ProductSchema.find({ producttype: { $eq: "jeans" }, gender: { $eq: "women" } });
        res.send(product);
    } catch (err) {
        console.log(err);
    }
});


module.exports = router
