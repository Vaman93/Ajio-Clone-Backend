const express = require('express')
const path = require('path');
const app = express()

app.set('view engine', 'ejs')
app.use( express.static("public"));


app.get("/" , (req, res) => {
  res.render("index")
})

module.exports = app;