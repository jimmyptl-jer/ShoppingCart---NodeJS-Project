const Products = require('../models/product');

exports.getCart = (req, res, next) => {
  res.render('shop/cart');
}

exports.getCheckout = (req, res,next) => {
  res.render('shop/checkout'); 
}

exports.getProductDetails = (req, res,next) => {
  res.render('shop/product-details')
}

exports.getProductList = (req, res,next) => {
  const products = Products.fetchAll()
  .then(([rows,filedData])=>{
    res.render('shop/index',{
      prods :rows,
    })
  })
  .catch((err)=>{
    console.log(err)
  });
}

exports.postAddProduct = (req, res) => {
      // Fetch and render the main shop page
      const products = Products.fetchAll()
      .then(([rows,filedData])=>{
        res.render('shop/index',{
          prods :rows,
        })
      })
      .catch((err)=>{
        console.log(err)
      });
      // res.render('shop/index',{
      //   prods:products
      // });
  };