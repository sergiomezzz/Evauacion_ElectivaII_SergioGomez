const express = require('express');
const router = express.Router();
const data = require('../data.json');

router.get('/products', (req, res) => {
  res.json(data.products);
});

router.post('/sale', (req, res) => {
  const productId = req.body.productId;
  const quantity = req.body.quantity;
 
  res.send('Product added to sale');
});

module.exports = router;