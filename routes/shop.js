const express = require('express');
const router = express.Router();

const shopController = require('../controller/shop');
const { route } = require('./admin');

router.post('/index',shopController.postAddProduct);
router.get('/products-list',shopController.getProductList);
router.get('/cart',shopController.getCart);
router.get('/checkout',shopController.getCheckout);

// Import any necessary modules or models

// // Define routes for the shop section
// router.get('/index', (req, res) => {
//     // Fetch and render the main shop page
//     res.render('shop/index');
// });

// router.get('/products-list', (req, res) => {
//     // Fetch and render a list of products available in the shop
//     res.render('shop/products-list');
// });

// router.get('/cart', (req, res) => {
//     // Fetch and render the shopping cart page
//     res.render('shop/cart');
// });


// router.get('/checkout', (req, res) => {
//   // Fetch and render the shopping cart page
//   res.render('shop/checkout');
// });

// // Add more shop-related routes as needed

module.exports = router;
