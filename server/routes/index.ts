import { Router } from 'express';
import productsRouter from './products/index.js';

const router = Router();
router.use('/products', productsRouter);

export default router;
