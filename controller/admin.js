const Product = require('../models/product');

exports.getAddProduct = (req,res,next) =>{
  res.render('admin/edit-products',{
    pageTitle:'Add Products',
    path:"/admin/add-product",
    editing:false
  })
}

exports.postAddProducts = (req,res,next) =>{
  const title = req.body.title;
  const price = req.body.price;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;

  const product = new Product({
    title:title,
    price : price ,
    imageURL:imageUrl,
    description:description
  })

  product.save()
  .then(results =>{
    console.log("Product data added successfully");
    res.redirect('/admin/products')
  })
  .catch(err =>{
    console.log("Error while creating a product",err)
  })
}

exports.getProducts = (req,res,next) =>{
  Product.find()
  .then(products =>{
    res.render('admin/products',{
      path:'/admin/products',
      pageTitle : 'Admin | All products',
      prods: products
    })
  })
  .catch(err =>{
    console.log("Error while fetching the products from database",err)
  })
}