const express = require('express');
const products = require('../products.json');
const app = express();
const port = 626;
const getProducts = require('./getProducts');
const getAProduct = require('./getProducts');


app.get('/api/products', getProducts.getProducts);
app.get('/api/products/:id', getAProduct.getAProduct);

app.listen(port, () => {console.log(`Server is listening on ${port}`);
});


