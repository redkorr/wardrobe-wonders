import { Router } from 'express';
import productsRouter from './products/index.js';
import categoriesRouter from './categories/index.js';
import productTypeRouter from './productTypes/index.js';
import filtersRouter from './filters/index.js';
import productRouter from './product/index.js';
import discountRouter from './discounts/index.js';
import orderRouter from './orders/index.js';
import billingAddressRouter from './billingAddress/index.js';
import stripePayment from './stripe/index.js';

const router = Router();
router.use('/products', productsRouter);
router.use('/categories', categoriesRouter);
router.use('/types', productTypeRouter);
router.use('/filters', filtersRouter);
router.use('/product', productRouter);
router.use('/discount', discountRouter);
router.use('/order', orderRouter);
router.use('/billing-address', billingAddressRouter);
router.use('/stripe', stripePayment);

export default router;
