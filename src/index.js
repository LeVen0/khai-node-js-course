import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './product.routes.js';
import userRouter from './user/user.router.js';
import { logRequest } from './middleware.js';
import { errorResponder } from './error.middleware.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(logRequest);
app.use(productRoutes);
app.use(userRouter);
app.use(errorResponder);

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
