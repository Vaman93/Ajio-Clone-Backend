const router = require('express').Router();
const ProductSchema = require('../Schema/project.schema')

router.get('/:id', async (req, res) =>{
    try {
        const product = await ProductSchema.find({_id: req.params.id})

        res.render('EachProduct/one_Product' , {
            p:product
        })
    }catch(e){
        console.error(e);
    }
})

module.exports = router