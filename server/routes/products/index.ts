import { Router } from 'express';
import Product from '../../models/Products.js';
import { MongooseError } from 'mongoose';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const data = await Product.find().populate('category');
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    if (error instanceof MongooseError) {
      res.status(500).json(error);
    }
  }
});

export default router;
