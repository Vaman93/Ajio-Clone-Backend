const express = require('express')
const upload = require('../middleware/upload')
const ProductSchema = require('../Schema/project.schema')
const router = express.Router()

router.post("/" ,upload.single("imgsrc") , async (req, res) => {
    try{
        const product = await ProductSchema.create({
            imgsrc : req.file.path ,
            ... req.body
        })
        return res.status(200).send(product)

    }catch (err) {
        console.log(err)
    }
})


module.exports = router ;