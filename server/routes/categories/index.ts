import { Router } from 'express';
import Category from '../../models/Category.js';
import { MongooseError } from 'mongoose';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const data = await Category.find().populate('types');
    res.status(200).json(data);
  } catch (error) {
    if (error instanceof MongooseError) {
      res.status(500).json(error);
    }
  }
});

export default router;
