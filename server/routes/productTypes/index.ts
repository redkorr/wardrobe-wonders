import { Router } from 'express';
import ProductType from '../../models/ProductType.js';
import { MongooseError } from 'mongoose';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const data = await ProductType.find();
    res.status(200).json(data);
  } catch (error) {
    if (error instanceof MongooseError) {
      res.status(500).json(error);
    }
  }
});

export default router;
