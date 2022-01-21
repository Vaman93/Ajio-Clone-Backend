const router = require("express").Router()

const User = require("../Schema/User.Schema");
const ProductSchema = require('../Schema/project.schema');


// user check page

router.get("/" , (req, res) =>{
    res.render("Closet/index")
})


router.get("/:id/:product" , async (req, res) => {
    try{

   await User.findOneAndUpdate({_id: req.params.id}, {$addToSet: {Closte : {$each:[req.params.product]}}},{
        new: true
    })
    res.send({message : 'Success'})
    }catch(err){
        res.send({message: "product all ready add"})
    }

})


// partiCully user product

router.get("/clsotepro/data/product/:id", async (req, res) => {
  
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