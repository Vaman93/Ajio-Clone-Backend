const express = require('express')
const app = express()

const Homepage = require('./router/home.router')
const ProductAddSchema = require('./router/product.add')
app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use("/upload", express.static("./upload"))
console.log(app.use(express.static("./upload")))
app.use(express.json())

app.use("/" , Homepage)

app.use("/productadd" , ProductAddSchema)

app.get("/productjackets" , (req, res) => {
  res.render("product page/productjackets");
})

module.exports = app;