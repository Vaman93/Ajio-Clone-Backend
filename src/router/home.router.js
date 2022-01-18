const express = require('express')
const router = express.Router()
// const redis = require('../config/redius')

  router.get("/", async (req, res) => {
      res.render("index")
  })

module.exports = router