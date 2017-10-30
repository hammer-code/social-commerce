var Sequelize = require('sequelize');

var sequelize = new Sequelize('social-commerce', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

var Product = sequelize.define('products', {
  name: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

var User = sequelize.define('users', {
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  email: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

var Post = sequelize.define('posts', {
  content: Sequelize.STRING,
  productId: Sequelize.INTEGER,
  price: Sequelize.INTEGER,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

Post.belongsTo(Product);

module.exports = {
  Product: Product,
  User: User,
  Post: Post,
};
