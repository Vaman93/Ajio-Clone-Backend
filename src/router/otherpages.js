const router = require('express').Router()

router.get("/" , (req, res)=>{
    res.render('About Us/we')
})

router.get("/privacy" , (req, res)=>{
    res.render('privacy/privacy')
})

module.exports = router