const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser') 



const User = require('./router/user.router')
const Homepage = require('./router/home.router')
const ProductAddSchema = require('./router/product.add')
const Product = require('./router/product')
const ProductAPI = require('./router/product.api')
const EachProduct = require('./router/each.product')
const BagProduct = require('./router/bag.product')
const Filter = require('./router/product.filter.price');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use("/upload", express.static("./upload"));

app.use(cookieParser());

app.use(cors({
    credentials: true,
}))


app.use("/", Homepage);

app.use("/productadd", ProductAddSchema);

app.use("/productApi", ProductAPI);

app.use("/bagproduct" , BagProduct)


app.use("/yourproduct" , EachProduct)

app.use("/user", User);

app.use("/filterbyprice", Filter);


app.use("/product" , Product)


module.exports = app;