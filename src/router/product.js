const router = require('express').Router()
const ProductSchema = require('../Schema/project.schema')


router.get("/productjackets", (req, res) => {
    res.render("product page/productjackets");
  });
  
router.get("/productjeans", (req, res) => {
    res.render("product page/productjeans");
  });
  
router.get("/productwomenjeans", (req, res) => {
    res.render("product page/productwomenjeans");
  });
  
router.get("/productwomentshirt", (req, res) => {
    res.render("product page/productwomentshirt");
  });
  
// router.get("/:id" , async (req, res) =>{
//     try{
//         const product = await ProductSchema.find({_id: req.params.id})

//         console.lod(product)
//     }catch(e){
//         console.log(e)
//     }
// })

module.exports = router