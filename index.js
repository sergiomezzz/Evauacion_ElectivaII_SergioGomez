const express = require('express');
const app = express();
const data = require('./data.json'); // Importa los datos del archivo JSON
const productsRoutes = require('./routes/index');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use('/api', productsRoutes);
app.get('/', (req, res) => {
  res.render('index', { products: data.products });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});



