const router = require('express').Router()


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

module.exports = router