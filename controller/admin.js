const Product = require('../models/product');

exports.getAddProducts = (req, res, next) => {
  res.render('admin/add-products', {
    formsCSS: true,
    productCSS: true,
  }); // Remove the leading slash
}

exports.postAddProducts = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = Product(null,title,imageUrl,description,price);
  product
  .save()
  .then(()=>{
    res.redirect('/shop/index')
  })
  .catch();
}


exports.getProducts = (req, res, next) => {
  res.render('admin/edit-products'); // Remove the leading slash
}

exports.getEditProducts = (req, res, next) => {
  res.render('admin/edit-products'); // Remove the leading slash
}