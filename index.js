const express = require('express');
const app = express();
const data = require('./data.json');

const productsArray = Object.values(data.products);

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index', { products: productsArray });
});

app.post('/api/sale', (req, res) => {
  const productId = req.body.productId;
  const quantity = req.body.quantity;
  
  
  //venta del producto

  console.log(`Producto ${productId} agregado a la venta con cantidad ${quantity}`);

  res.send('Product added to sale');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
