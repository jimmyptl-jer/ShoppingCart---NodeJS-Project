const express = require('express');
const router = express.Router();

const adminRoutes = require('./admin.js');
const shopRoutes = require('./shop.js')

const adminController = require('../controller/admin.js')


router.get('/add-product', adminController.getAddProduct)

router.get('/products', adminController.getProducts)

router.post('/add-product', adminController.postAddProducts)

module.exports = router;