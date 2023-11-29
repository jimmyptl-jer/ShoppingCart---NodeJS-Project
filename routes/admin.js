const express = require('express');
const router = express.Router();

const adminController = require('../controller/admin')

router.post('/add-product', adminController.postAddProducts);
router.get('/add-products',adminController.getAddProducts);
router.get('/product',adminController.getProducts);
router.get('/edit-product',adminController.getEditProducts);

module.exports = router;

// router.get('/add-products', (req, res) => {
//   res.render('admin/add-products'); // Render the "Add Product" EJS template
// });

// router.get('/products', (req, res) => {
//   res.render('admin/products'); // Render the "Add Product" EJS template
// });

// router.get('/edit-products', (req, res) => {
//   res.render('admin/edit-products'); // Render the "Add Product" EJS template
// });
// module.exports = router;

