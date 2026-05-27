import express from 'express';
import { db } from '../db/index.js';
import { users } from '../db/schema.js';

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

export default router;
