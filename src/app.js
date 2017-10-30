var express = require('express');
var bodyParser = require('body-parser');
var database = require('./database');

var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Routing
 */

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
app.get('/products/create', function (req, res) {
  res.render('product-create');
});

/**
 * Lihat halaman buat produk
 */
app.post('/products/create', function (req, res) {
  var name = req.body.name;

  database.Product.create({
    name: name,
  })
    .then(function (product) {
      res.redirect('/products/' + product.id);
    })
    .catch(function (error) {
      res.send(error);
    });
});

/**
 * Lihat detail produk
 */
app.get('/products/:id', function (req, res) {
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

/**
 * Lihat form posting
 */
app.get('/posts/create', function (req, res) {
  database.Product.findAll()
    .then(function (products) {
      res.render('post-create', { products: products });
    })
    .catch(function (error) {
      res.send(error);
    });
});

/**
 * Lihat detail posting
 */
app.get('/posts/:id', function (req, res) {
  database.Post.findById(req.params.id, {
    include: [{ model: database.Product }],
  })
    .then(function (post) {
      res.render('post-show', { post: post });
    })
    .catch(function (error) {
      res.send(error);
    });
});

/**
 * Lihat semua posting
 */
app.get('/posts', function (req, res) {
  database.Post.findAll({
    include: [{ model: database.Product }],
  })
    .then(function (posts) {
      res.render('post-list', { posts: posts });
    })
    .catch(function (error) {
      res.send(error);
    });
});

/**
 * Lihat form posting
 */
app.post('/posts/create', function (req, res) {
  var productId = req.body.product_id;
  var content = req.body.content;
  var price = parseInt(req.body.price);

  database.Post.create({
    productId: productId,
    content: content,
    price: price,
  })
    .then(function (product) {
      res.redirect('/posts/' + product.id);
    })
    .catch(function (error) {
      res.send(error);
    });
});

module.exports = app;