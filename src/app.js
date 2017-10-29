var express = require('express');
var database = require('./database');

var app = express();

app.set('view engine', 'pug')
app.set('views', __dirname + '/views');

app.get('/', async function (req, res) {
  var products = await database.Product.findAll();

  res.render('product', { title: 'Daftar Produk', products: products });
});

app.get('/create', async function (req, res) {
  res.render('product-create', { title: 'Buat Postingan' });
});

module.exports = app;