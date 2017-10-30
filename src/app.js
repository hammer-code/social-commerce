var express = require('express');
var database = require('./database');

var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
  database.Product.findAll()
    .then(function (products) {
      res.render('product', { title: 'Daftar Produk', products: products });
    })
    .catch(function (error) {
      res.send(error);
    });
});

app.get('/create', function (req, res) {
  res.render('product-create', { title: 'Buat Postingan' });
});

module.exports = app;