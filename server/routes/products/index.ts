import { Router } from 'express';
import Product from '../../models/Product.js';
import { MongooseError } from 'mongoose';

import { createFilters } from '../../lib/filters.js';

const router = Router();

router.get('', async (req, res) => {
  try {
    const data = await Product.find().populate('category');
    res.status(200).json(data);
  } catch (error) {
    if (error instanceof MongooseError) {
      res.status(500).json(error);
    }
  }
});

router.get('/:sex/:category?/:type?', async (req, res) => {
  const pathParams = req.params;
  const searchParams = req.query;
  const { page, limit } = req.query;
  console.log(searchParams);

  try {
    const filters = await createFilters(pathParams, searchParams);
    const data = await Product.find(filters)
      .populate('category')
      .populate('type')
      .skip(
        page
          ? limit
            ? (Number(page) - 1) * Number(limit)
            : (Number(page) - 1) * 10
          : 0
      )
      .limit(limit ? Number(limit) : 10);
    const count = await Product.find(filters)
      .populate('category')
      .populate('type')
      .countDocuments();
    res.status(200).json({ data: data, count: count });
  } catch (error) {
    res.status(404).json({ status: 404, message: error });
  }
});

export default router;
