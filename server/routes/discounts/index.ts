import { Router } from 'express';
import { MongooseError } from 'mongoose';
import Discount from '../../models/Discount.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const data = await Discount.find().populate('discounts');
    res.status(200).json(data);
  } catch (error) {
    if (error instanceof MongooseError) {
      res.status(500).json(error);
    }
  }
});

export default router;
