import express from 'express';
import productRoutes from './product.routes.js';
import { logRequest } from './middleware.js';
import { errorResponder } from './error.middleware.js';

const app = express();
const PORT = 3000;

app.use(logRequest);
app.use(productRoutes);
app.use(errorResponder);

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
