const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser') 


const User = require('./router/user.router');
const Homepage = require('./router/home.router');
const ProductAddSchema = require('./router/product.add');
const Product = require('./router/product');
const ProductAPI = require('./router/product.api');
const EachProduct = require('./router/each.product');
const FilterAPI = require('./router/product.filter.price');
app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use("/upload", express.static("./upload"))

app.use(cookieParser());

app.use(cors({
    credentials: true,
    original: ["http://localhost:2222"]
}))
app.use(express.json());

app.use("/", Homepage);

app.use("/productadd", ProductAddSchema);

app.use("/productApi", ProductAPI);

app.use("/filters", FilterAPI);

app.use("/yourproduct" , EachProduct)

app.use("/user", User);


app.use("/product" , Product)


module.exports = app;