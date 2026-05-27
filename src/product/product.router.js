import express from 'express';
import { db } from '../db/index.js';
import { products } from '../db/schema.js';

const router = express.Router();

router.post('/products', async (request, response) => {
    const { body } = request;

    await db.insert(products).values(body);

    return response.sendStatus(201);
});

router.get('/products', async (request, response) => {
    const allProducts = await db.query.products.findMany();

    return response.json(allProducts);
});

export default router;
