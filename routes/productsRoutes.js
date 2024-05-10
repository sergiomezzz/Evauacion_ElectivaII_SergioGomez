const express = require('express');
const router = express.Router();
const data = require('../data.json');

router.get('/products', (req, res) => {
  res.json(data.products);
});

router.post('/sale', (req, res) => {
  const productId = req.body.productId;
  const quantity = req.body.quantity;

  // Buscar el producto en los datos
  const product = data.products[productId];

  if (!product) {
    return res.status(404).send('Product not found');
  }

  // Agregar el producto a la venta
  let sale = req.app.locals.sale || [];
  const saleItem = { product, quantity };
  sale.push(saleItem);
  req.app.locals.sale = sale;

  res.json(saleItem);
});

module.exports = router;
