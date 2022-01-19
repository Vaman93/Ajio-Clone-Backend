const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser') 


const User = require('./router/user.router')
const Homepage = require('./router/home.router')
const ProductAddSchema = require('./router/product.add')
const ProductAPI = require('./router/product.api')


app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use("/upload", express.static("./upload"))

app.use(cookieParser())

app.use(cors({
    credentials: true,
    original: ["http://localhost:2222"]
}))
app.use(express.json())

app.use("/" , Homepage)

app.use("/productadd" , ProductAddSchema)

app.use("/productApi" , ProductAPI)

app.use("/user" , User)


// app.use("/product" , )

// app.get("/productjackets", (req, res) => {
//   res.render("product page/productjackets");
// });

// app.get("/productjeans", (req, res) => {
//   res.render("product page/productjeans");
// });

// app.get("/productwomenjeans", (req, res) => {
//   res.render("product page/productwomenjeans");
// });

// app.get("/productwomentshirt", (req, res) => {
//   res.render("product page/productwomentshirt");
// });


module.exports = app;