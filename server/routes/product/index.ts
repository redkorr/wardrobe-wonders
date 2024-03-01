import { Router } from 'express';
import Product from '../../models/Product.js';
import { MongooseError } from 'mongoose';

const router = Router();

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Product.findOne({ product_id: id })
      .populate('category')
      .populate('type');
    res.status(200).json(data);
  } catch (error) {
    if (error instanceof MongooseError) {
      res.status(500).json(error);
    }
  }
});

export default router;
