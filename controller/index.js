const Product = require('../models/product')

exports.getIndex = (req, res, next) => {

  Product.find()
    .then(products => {
      res.render('pages/index', {
        prods: products,
        pageTitle: "Main Page",
        path: '/'
      })
    })
}