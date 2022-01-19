const router = require('express').Router()
const ProductSchema = require('../Schema/project.schema')

router.get("/:id" , async (req, res) =>{
    try{
        const product = await ProductSchema.find({_id: req.params.id})

        console.lod(product)
    }catch(e){
        console.log(e)
    }
})

module.exports = router