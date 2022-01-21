const express = require('express');

const router = express.Router();

const ProductSchema = require('../Schema/project.schema');

//discount filters

//checkbox 0-20%

router.get("/0to20percent/:gender/:type", async (req, res) => {
    console.log(req.params.men);
    try {
        const discount = await ProductSchema.find({ $and: [{ discount: { $gt: 0 } }, { discount: { $lte: 20 } },{gender:{$eq: req.params.gender } },{producttype:{$eq: req.params.type } }] }).sort({discount:1});
   
        res.status(200).send(discount);
    } catch (err) { 
        console.log(err.message);
    }
});

//checkbox 21-30%

router.get("/21to30percent/:gender/:type", async (req, res) => {
try{
    const discount = await ProductSchema.find({ $and: [{ discount: { $gt: 20 } }, { discount: { $lte: 30 } },{gender:{$eq: req.params.gender } },{producttype:{$eq: req.params.type } }] }).sort({discount:1});
   
    res.status(200).send(discount);
} catch (err) { 
    console.log(err.message);
}
});
//checkbox 31-40%

router.get("/31to40percent/:gender/:type", async (req, res) => {
    try {
    
    const discount = await ProductSchema.find({ $and: [{ discount: { $gt: 30 } }, { discount: { $lte: 40 } },{gender:{$eq: req.params.gender } },{producttype:{$eq: req.params.type } }] }).sort({discount:1});
   
    res.status(200).send(discount);
} catch (err) { 
    console.log(err.message);
}
});


//checkbox 41-50%

router.get("/41to50percent/:gender/:type", async (req, res) => {
try{
    const discount = await ProductSchema.find({ $and: [{ discount: { $gt: 40 } }, { discount: { $lte: 50 } },{gender:{$eq: req.params.gender } },{producttype:{$eq: req.params.type } }] }).sort({discount:1});
   
    res.status(200).send(discount);
} catch (err) { 
    console.log(err.message);
}
});

//checkbox 51-80%

router.get("/51to80percent/:gender/:type", async (req, res) => {
    try{
        const discount = await ProductSchema.find({ $and: [{ discount: { $gt: 50 } }, { discount: { $lte: 80 } },{gender:{$eq: req.params.gender } },{producttype:{$eq: req.params.type } }] }).sort({discount:1});
       
        res.status(200).send(discount);
    } catch (err) { 
        console.log(err.message);
    }
    });
    

module.exports = router;