const router = require("express").Router()

const User = require("../Schema/User.Schema");
const ProductSchema = require('../Schema/project.schema');
const { model } = require("mongoose");

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



module.exports = router