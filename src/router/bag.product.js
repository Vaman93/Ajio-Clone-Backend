const router = require('express').Router()

const User = require('../Schema/User.Schema')

router.get("/:id/:product" , async (req, res) => {
    try{
    const user = await User.findOneAndUpdate({_id: req.params.id}, {$addToSet: {CheckOut : {$each:[req.params.product]}}},{
        new: true
    })
    res.send(user.CheckOut)
    }catch(err){
        res.send({message: "product all ready add"})
    }

})

module.exports = router