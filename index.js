const express = require('express');

const app = express();
const port = 3000;

const products = [
    { id: 1, name: 'Product 1', brand: 'Brand A' },
    { id: 2, name: 'Product 2', brand: 'Brand B' },
    { id: 3, name: 'Product 3', brand: 'Brand A' },
];

app.get('/', (request, response) => {
    response.send('response for GET request');
});

app.get('/products/:brand', (request, response) => {
    const { brand } = request.params;
    const filteredProducts = products.filter((product) => product.brand === brand);

    response.json(filteredProducts);
});

app.listen(port, () => {
    console.log(`server start at http://localhost:${port}/`);
});
