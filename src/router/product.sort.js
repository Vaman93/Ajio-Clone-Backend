const express = require('express');

const router = express.Router();

const ProductSchema = require('../Schema/project.schema');

//sorting apis

//  sort by latest 
router.get("/:gender/:type/latest", async (req, res) => {
    try{
        const discount = await ProductSchema.find({ $and: [{gender:{$eq: req.params.gender } },{producttype:{$eq: req.params.type } }] }).sort({bbsprice:1});
       
        res.status(200).send(discount);
    } catch (err) { 
        console.log(err.message);
    }
    });
    
// sort by alphabetical
router.get("/:gender/:type/alphabeticalbybrand", async (req, res) => {
    try{
        const discount = await ProductSchema.find({ $and: [{gender:{$eq: req.params.gender } },{producttype:{$eq: req.params.type } }] }).sort({brand:1});
       
        res.status(200).send(discount);
    } catch (err) { 
        console.log(err.message);
    }
    });


//sort by discount

router.get("/:gender/:type/discount", async (req, res) => {
    try{
        const discount = await ProductSchema.find({ $and: [{gender:{$eq: req.params.gender } },{producttype:{$eq: req.params.type } }] }).sort({discount:-1});
       
        res.status(200).send(discount);
    } catch (err) { 
        console.log(err.message);
    }
});



// sort by price high to low

router.get("/:gender/:type/pricehightolow", async (req, res) => {
    try{
        const discount = await ProductSchema.find({ $and: [{gender:{$eq: req.params.gender } },{producttype:{$eq: req.params.type } }] }).sort({price:-1});
       
        res.status(200).send(discount);
    } catch (err) { 
        console.log(err.message);
    }
});


// sort by price low to high

router.get("/:gender/:type/pricelowtohigh", async (req, res) => {
    try{
        const discount = await ProductSchema.find({ $and: [{gender:{$eq: req.params.gender } },{producttype:{$eq: req.params.type } }] }).sort({price:1});
       
        res.status(200).send(discount);
    } catch (err) { 
        console.log(err.message);
    }
});


module.exports = router;