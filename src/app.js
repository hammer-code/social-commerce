var express = require('express');
var database = require('./database');

var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Routing

/**
 * Lihat daftar produk
 */
app.get('/', function (req, res) {
  database.Product.findAll()
    .then(function (products) {
      res.render('product-list', { products: products });
    })
    .catch(function (error) {
      res.send(error);
    });
});

/**
 * Lihat halaman buat produk
 */
app.get('/create', function (req, res) {
  res.render('product-create');
});

/**
 * Lihat detail produk
 */
app.get('/:id', function (req, res) {
  database.Product.findById(req.params.id)
    .then(function (product) {
      if (!product) {
        res.render('not-found');

        return;
      }

      res.render('product-detail', { product: product });
    })
    .catch(function (error) {
      res.send(error);
    });
});

module.exports = app;