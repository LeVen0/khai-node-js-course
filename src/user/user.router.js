import express from 'express';
import { eq } from 'drizzle-orm';
import { db } from '../db/index.js';
import { products, users } from '../db/schema.js';

const router = express.Router();

router.post('/users', async (request, response) => {
    const { body } = request;
    console.log(body);

    const createdUsers = await db.insert(users).values(body).returning();

    return response.status(201).json(createdUsers[0]);
});

router.get('/users', async (request, response) => {
    const allUsers = await db.query.users.findMany();

    return response.json(allUsers);
});

router.get('/users/:id/products', async (request, response) => {
    const { id } = request.params;
    const userProducts = await db.query.products.findMany({
        where: eq(products.userId, Number(id)),
    });

    return response.json(userProducts);
});

export default router;
