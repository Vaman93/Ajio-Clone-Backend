const express = require('express');
const router = express.Router();

const ProductSchema = require('../Schema/project.schema')

router.get("/men/productjacket" , async (req, res) => {
    try{
        const produnct = await ProductSchema.find({producttype: {$eq:"jacket"}})
        res.send(produnct)
    }catch (err) {
        console.log(err)
    }
})

router.get("/men/productjeans" , async (req, res) => {
    try{
        const produnct = await ProductSchema.find({producttype: {$eq:"jeans"} , gender: {$eq:"male"} })
        res.send(produnct)
    }catch (err) {
        console.log(err)
    }
})


module.exports = router
