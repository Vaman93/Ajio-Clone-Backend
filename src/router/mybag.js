const router = require("express").Router()

const User = require("../Schema/User.Schema");
const ProductSchema = require('../Schema/project.schema');


// user check page

router.get("/checkout" , (req, res) =>{
    res.render("mybag/cart1")
})

// partiCully user product

router.get("/product/:id", async (req, res) => {
  
  if(req.params.id === undefined){
   return res.send("user is not logged in")
  }

  try{
    const user = await User.findOne({_id: req.params.id});

    const allproduct = await ProductSchema.find({ '_id': { $in:  user.CheckOut } });

    res.send(allproduct)
    
  }catch(err){
    console.log(err)
  }

})


router.delete("/productdelete/:id/:productid" , async(req, res) =>{

  try{
    await User.updateOne({_id: req.params.id } , {'$pull' : {"CheckOut" : req.params.productid}} ,{ new : true})
    
    res.send({ error : false , message : "product delete"})
  }catch(err){
    console.log(err)
  }

})


module.exports = router