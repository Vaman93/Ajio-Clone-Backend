const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static("public"))

app.get("/" , (req, res) => {
  res.render("index")
})

app.get("/productjackets" , (req, res) => {
  res.render("product page/productjackets");
})

module.exports = app;