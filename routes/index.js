const express = require('express');
const router = express.Router();

const adminRoutes = require('./admin.js');
const shopRoutes = require('./shop.js')

const indexController = require('../controller/index.js')

router.get('/', indexController.getIndex)

router.use('/admin', adminRoutes);
// router.use('/shop',shopRoutes);

module.exports = router;
