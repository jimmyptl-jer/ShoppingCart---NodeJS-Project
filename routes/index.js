const express = require('express');
const router = express.Router();

const adminRouter = require('./admin'); // Check the path to admin.js
const shopRouter = require('./shop');   // Check the path to shop.js

module.exports = () => {
  router.get('/', (req, res) => {
    res.render('pages/index'); 
    // return res.send("Hello");
  });

  router.use('/admin', adminRouter); // Check the path to adminRouter
  router.use('/shop', shopRouter);   // Check the path to shopRouter

  return router;
};
