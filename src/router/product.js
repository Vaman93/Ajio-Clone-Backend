const router = require('express').Router()


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
module.exports = router;