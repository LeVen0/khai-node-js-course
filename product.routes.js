const express = require('express');
const products = require('./products');
const { blockSpecialBrand } = require('./middleware');

const router = express.Router();

router.get('/', (request, response) => {
    response.send('response for GET request');
});

router.get('/products', (request, response) => {
    return response.json(products);
});

router.get('/products/id/:id', (request, response) => {
    const id = Number(request.params.id);
    const product = products.find((item) => item.id === id);

    if (!product) {
        return response.status(404).send('Product not found');
    }

    return response.json(product);
});

router.get('/products/:brand', blockSpecialBrand, (request, response) => {
    const { brand } = request.params;
    const filteredProducts = products.filter((product) => product.brand === brand);

    response.json(filteredProducts);
});

router.get('/productswitherror', (request, response) => {
    const err = new Error('processing error');
    err.statusCode = 400;
    throw err;
});

module.exports = router;
