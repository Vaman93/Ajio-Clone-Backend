const express = require('express');

const client  = require('../config/redius');
const router = express.Router();

const ProductSchema = require('../Schema/project.schema')


//men jacket and jeans 
router.get("/men/productjacket" , async (req, res) => {

    await client.get("product" , async (err, product) => {

        if(err) return res.status(500).json("test" ,{message: err.message})

        if(product) return res.status(201).send(JSON.parse(product))

        try{
            const product = await ProductSchema.find({ producttype: { $eq: "jacket" } });
            client.set("product" , JSON.stringify(product));
            res.status(200).send(product);
    
        }catch (err) {
            console.log(err);
        }
    })
    // const product = await ProductSchema.find({ producttype: { $eq: "jacket" } });
    // client.set("product" , JSON.stringify(product));
    // res.status(200).send(product);
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

router.get("/women/productjeans", async (req, res) => {
    try {
        const product = await ProductSchema.find({ producttype: { $eq: "jeans" }, gender: { $eq: "women" } });
        res.send(product);
    } catch (err) {
        console.log(err);
    }
});



router.get("/test" , async (req, res) => {

    let keyname = "product"
    let product = await ProductSchema.find({ producttype: { $eq: "tshirt" } });

    let getdataredis = await client.get(keyname)
   

    if(!getdataredis) {
        client.set(keyname , JSON.stringify(product))
        res.status(200).send(product)
    } else {
        res.status(201).send(JSON.parse(getdataredis))
    }
    

    // res.status(201).send(JSON.parse(getdataredis))
    // res.status(200).send(product)
    // if(getdataredis){    
    //     res.send(JSON.parse(getdataredis))
    //     console.log("get reids keydata")
    // } else {
    //     console.log(getdataredis)
    //     getdataredis = product
    // }
 
    // res.send(JSON.parse(getdataredis))

})



module.exports = router
