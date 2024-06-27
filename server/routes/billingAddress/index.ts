import { Router } from 'express';
import UserBillingAddress from '../../models/BillingAddress.js';
import { MongooseError } from 'mongoose';

const router = Router();

router.post('/', async (req, res) => {
  try {
    console.log(req.body);

    await UserBillingAddress.create(req.body);
    res.status(200).json();
  } catch (error) {
    if (error instanceof MongooseError) {
      res.status(500);
    }
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    if (id.includes('user')) {
      const data = await UserBillingAddress.findOne({ user_id: id });
      res.status(200).json(data);
    }
  } catch (error) {
    if (error instanceof MongooseError) {
      res.status(500).json(error);
    }
  }
});

export default router;
