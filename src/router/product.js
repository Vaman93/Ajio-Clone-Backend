const router = require('express').Router()
const ProductSchema = require('../Schema/project.schema')


router.get("/menjackets", (req, res) => {
    res.render("product page/menjackets");
  });
  
router.get("/menjeans", (req, res) => {
    res.render("product page/menjeans");
});
  
router.get("/womenjeans", (req, res) => {
    res.render("product page/womenjeans");
  });

router.get("/womentshirt", (req, res) => {
    res.render("product page/womentshirt");
  });
  
// router.get("/:id" , async (req, res) =>{
//     try{
//         const product = await ProductSchema.find({_id: req.params.id})

//         console.lod(product)
//     }catch(e){
//         console.log(e)
//     }
// }

module.exports = router;