const express = require('express');
const app = express();
const productsRoutes = require('./routes/productsRoutes');
const data = require('./data.json');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', productsRoutes);

app.get('/', (req, res) => {
  res.render('index', { products: data.products, sale: req.app.locals.sale || [] });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
