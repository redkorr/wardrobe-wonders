import { Router } from 'express';
import productsRouter from './products/index.js';
import categoriesRouter from './categories/index.js';
import productTypeRouter from './productTypes/index.js';
import filtersRouter from './filters/index.js';

const router = Router();
router.use('/products', productsRouter);
router.use('/categories', categoriesRouter);
router.use('/types', productTypeRouter);
router.use('/filters', filtersRouter);

export default router;
