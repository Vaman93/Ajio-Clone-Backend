const express = require('express');

const router = express.Router();

const ProductSchema = require('../Schema/project.schema');

//brand filters



//-------------------------Womenjeans-------------------------------------
//brand 1 LEVIS



router.get("/:gender/:type/LEVIS", async (req, res) => {
    console.log(req.params.men);
    try {
        const brand = await ProductSchema.find({ $and: [ { gender: { $eq: req.params.gender } }, { producttype: { $eq: req.params.type } }, { brand: { $eq: "LEVIS" } }] }).sort({price:1});
   
        res.status(200).send(brand);
    } catch (err) { 
        console.log(err.message);
    }
});

//brand 2 Outryt

router.get("/:gender/:type/Outryt", async (req, res) => {
    console.log(req.params.men);
    try {
        const brand = await ProductSchema.find({ $and: [ { gender: { $eq: req.params.gender } }, { producttype: { $eq: req.params.type } }, { brand: { $eq: "Outryt" } }] }).sort({price:1});
   
        res.status(200).send(brand);
    } catch (err) { 
        console.log(err.message);
    }
});

//brand 3 DNMX

router.get("/:gender/:type/DNMX", async (req, res) => {
    console.log(req.params.men);
    try {
        const brand = await ProductSchema.find({ $and: [{ gender: { $eq: req.params.gender } }, { producttype: { $eq: req.params.type } }, { brand: { $eq: "DNMX" } }] }).sort({price:1});
   
        res.status(200).send(brand);
    } catch (err) { 
        console.log(err.message);
    }
});

//brand 4 ORCHID BLUES

router.get("/:gender/:type/ORCHIDBLUES", async (req, res) => {
    console.log(req.params.men);
    try {
        const brand = await ProductSchema.find({ $and: [{ gender: { $eq: req.params.gender } }, { producttype: { $eq: req.params.type } }, { brand: { $eq: "ORCHID BLUES" } }] }).sort({price:1});
   
        res.status(200).send(brand);
    } catch (err) { 
        console.log(err.message);
    }
});
//brand 5 DENIZEN WOMENS

router.get("/:gender/:type/DENIZENWOMENS", async (req, res) => {
    console.log(req.params.men);
    try {
        const brand = await ProductSchema.find({ $and: [ { gender: { $eq: req.params.gender } }, { producttype: { $eq: req.params.type } }, { brand: { $eq: "DENIZEN WOMENS" } }] }).sort({price:1});
   
        res.status(200).send(brand);
    } catch (err) { 
        console.log(err.message);
    }
});
    
//brand 6 Dolce Crudo

router.get("/:gender/:type/DolceCrudo", async (req, res) => {
    console.log(req.params.men);
    try {
        const brand = await ProductSchema.find({ $and: [{ gender: { $eq: req.params.gender } }, { producttype: { $eq: req.params.type } }, { brand: { $eq: "Dolce Crudo" } }] }).sort({price:1});
   
        res.status(200).send(brand);
    } catch (err) { 
        console.log(err.message);
    }
});






//-------------------------Women t-shirt-------------------------------------
//brand 1 Puma

router.get("/:gender/:type/Puma", async (req, res) => {
    console.log(req.params.men);
    try {
        const brand = await ProductSchema.find({ $and: [ { gender: { $eq: req.params.gender } }, { producttype: { $eq: req.params.type } }, { brand: { $eq: "Puma" } }] }).sort({price:1});
   
        res.status(200).send(brand);
    } catch (err) { 
        console.log(err.message);
    }
});

//brand 2 TOMMY HILFIGER

router.get("/:gender/:type/TOMMYHILFIGER", async (req, res) => {
    console.log(req.params.men);
    try {
        const brand = await ProductSchema.find({ $and: [ { gender: { $eq: req.params.gender } }, { producttype: { $eq: req.params.type } }, { brand: { $eq: "TOMMY HILFIGER" } }] }).sort({price:1});
   
        res.status(200).send(brand);
    } catch (err) { 
        console.log(err.message);
    }
});

//brand 3 Teamspirit

router.get("/:gender/:type/Teamspirit", async (req, res) => {
    console.log(req.params.men);
    try {
        const brand = await ProductSchema.find({ $and: [{ gender: { $eq: req.params.gender } }, { producttype: { $eq: req.params.type } }, { brand: { $eq: "Teamspirit" } }] }).sort({price:1});
   
        res.status(200).send(brand);
    } catch (err) { 
        console.log(err.message);
    }
});

//brand 4 ARMANI EXCHANGE
                           
router.get("/:gender/:type/ARMANIEXCHANGE", async (req, res) => {
    console.log(req.params.men);
    try {
        const brand = await ProductSchema.find({ $and: [{ gender: { $eq: req.params.gender } }, { producttype: { $eq: req.params.type } }, { brand: { $eq: "ARMANI EXCHANGE" } }] }).sort({price:1});
   
        res.status(200).send(brand);
    } catch (err) { 
        console.log(err.message);
    }
});
//brand 5 FIG

router.get("/:gender/:type/FIG", async (req, res) => {
    console.log(req.params.men);
    try {
        const brand = await ProductSchema.find({ $and: [ { gender: { $eq: req.params.gender } }, { producttype: { $eq: req.params.type } }, { brand: { $eq: "FIG" } }] }).sort({price:1});
   
        res.status(200).send(brand);
    } catch (err) { 
        console.log(err.message);
    }
});
    
//brand 6 LEVIS

router.get("/:gender/:type/LEVIS", async (req, res) => {
    console.log(req.params.men);
    try {
        const brand = await ProductSchema.find({ $and: [{ gender: { $eq: req.params.gender } }, { producttype: { $eq: req.params.type } }, { brand: { $eq: "LEVIS" } }] }).sort({price:1});
   
        res.status(200).send(brand);
    } catch (err) { 
        console.log(err.message);
    }
});







//-------------------------Men jacket-------------------------------------
//brand 1 JOHN PLAYERS

router.get("/:gender/:type/JOHNPLAYERS", async (req, res) => {
    console.log(req.params.men);
    try {
        const brand = await ProductSchema.find({ $and: [ { gender: { $eq: req.params.gender } }, { producttype: { $eq: req.params.type } }, { brand: { $eq: "JOHN PLAYERS" } }] }).sort({price:1});
   
        res.status(200).send(brand);
    } catch (err) { 
        console.log(err.message);
    }
});

//brand 2 Campus Sutra

router.get("/:gender/:type/CampusSutra", async (req, res) => {
    console.log(req.params.men);
    try {
        const brand = await ProductSchema.find({ $and: [ { gender: { $eq: req.params.gender } }, { producttype: { $eq: req.params.type } }, { brand: { $eq: "Campus Sutra" } }] }).sort({price:1});
   
        res.status(200).send(brand);
    } catch (err) { 
        console.log(err.message);
    }
});

//brand 3 U.S. Polo Assn.

router.get("/:gender/:type/U.S.PoloAssn.", async (req, res) => {
    console.log(req.params.men);
    try {
        const brand = await ProductSchema.find({ $and: [{ gender: { $eq: req.params.gender } }, { producttype: { $eq: req.params.type } }, { brand: { $eq: "U.S. Polo Assn." } }] }).sort({price:1});
   
        res.status(200).send(brand);
    } catch (err) { 
        console.log(err.message);
    }
});

//brand 4 T-Base

router.get("/:gender/:type/T-Base", async (req, res) => {
    console.log(req.params.men);
    try {
        const brand = await ProductSchema.find({ $and: [{ gender: { $eq: req.params.gender } }, { producttype: { $eq: req.params.type } }, { brand: { $eq: "T-Base" } }] }).sort({price:1});
   
        res.status(200).send(brand);
    } catch (err) { 
        console.log(err.message);
    }
});

//brand 5 Columbia

router.get("/:gender/:type/Columbia", async (req, res) => {
    console.log(req.params.men);
    try {
        const brand = await ProductSchema.find({ $and: [ { gender: { $eq: req.params.gender } }, { producttype: { $eq: req.params.type } }, { brand: { $eq: "Columbia" } }] }).sort({price:1});
   
        res.status(200).send(brand);
    } catch (err) { 
        console.log(err.message);
    }
});
    
//brand 6 NIKE

router.get("/:gender/:type/NIKE", async (req, res) => {
    console.log(req.params.men);
    try {
        const brand = await ProductSchema.find({ $and: [{ gender: { $eq: req.params.gender } }, { producttype: { $eq: req.params.type } }, { brand: { $eq: "NIKE" } }] }).sort({price:1});
   
        res.status(200).send(brand);
    } catch (err) { 
        console.log(err.message);
    }
});







//-------------------------Men jeans-------------------------------------
//brand 1 JOHN PLAYERS JEANS

router.get("/:gender/:type/JOHNPLAYERSJEANS", async (req, res) => {
    console.log(req.params.men);
    try {
        const brand = await ProductSchema.find({ $and: [ { gender: { $eq: req.params.gender } }, { producttype: { $eq: req.params.type } }, { brand: { $eq: "JOHN PLAYERS JEANS" } }] }).sort({price:1});
   
        res.status(200).send(brand);
    } catch (err) { 
        console.log(err.message);
    }
});

//brand 2 Campus Sutra

router.get("/:gender/:type/CampusSutra", async (req, res) => {
    console.log(req.params.men);
    try {
        const brand = await ProductSchema.find({ $and: [ { gender: { $eq: req.params.gender } }, { producttype: { $eq: req.params.type } }, { brand: { $eq: "Campus Sutra" } }] }).sort({price:1});
   
        res.status(200).send(brand);
    } catch (err) { 
        console.log(err.message);
    }
});

//brand 3 U.S. Polo Assn.

router.get("/:gender/:type/U.S.PoloAssn.", async (req, res) => {
    console.log(req.params.men);
    try {
        const brand = await ProductSchema.find({ $and: [{ gender: { $eq: req.params.gender } }, { producttype: { $eq: req.params.type } }, { brand: { $eq: "U.S. Polo Assn." } }] }).sort({price:1});
   
        res.status(200).send(brand);
    } catch (err) { 
        console.log(err.message);
    }
});

//brand 4 LEVIS

router.get("/:gender/:type/LEVIS", async (req, res) => {
    console.log(req.params.men);
    try {
        const brand = await ProductSchema.find({ $and: [{ gender: { $eq: req.params.gender } }, { producttype: { $eq: req.params.type } }, { brand: { $eq: "LEVIS" } }] }).sort({price:1});
   
        res.status(200).send(brand);
    } catch (err) { 
        console.log(err.message);
    }
});
//brand 5 DNMX

router.get("/:gender/:type/DNMX", async (req, res) => {
    console.log(req.params.men);
    try {
        const brand = await ProductSchema.find({ $and: [ { gender: { $eq: req.params.gender } }, { producttype: { $eq: req.params.type } }, { brand: { $eq: "DNMX" } }] }).sort({price:1});
   
        res.status(200).send(brand);
    } catch (err) { 
        console.log(err.message);
    }
});
    
//brand 6 The Indian Garage Co

router.get("/:gender/:type/TheIndianGarageCo", async (req, res) => {
    console.log(req.params.men);
    try {
        const brand = await ProductSchema.find({ $and: [{ gender: { $eq: req.params.gender } }, { producttype: { $eq: req.params.type } }, { brand: { $eq: "The Indian Garage Co" } }] }).sort({price:1});
   
        res.status(200).send(brand);
    } catch (err) { 
        console.log(err.message);
    }
});




module.exports = router;