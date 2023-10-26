import { Router } from 'express';
import Product from '../../models/Products.js';
import { MongooseError } from 'mongoose';

import { createFilters } from '../../lib/filters.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const data = await Product.find().populate('category');
    res.status(200).json(data);
  } catch (error) {
    if (error instanceof MongooseError) {
      res.status(500).json(error);
    }
  }
});

router.get('/:sex/:category?', async (req, res) => {
  const pathParams = req.params;
  const searchParams = req.query;

  try {
    const filters = await createFilters(pathParams, searchParams);
    const data = await Product.find(filters).populate('category');

    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ status: 404, message: 'Category not found.' });
  }
});

export default router;
