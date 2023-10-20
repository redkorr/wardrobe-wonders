import { Router } from 'express';
import Cloth from '../../models/Cloth.js';

const router = Router();

router.get('/', async (req, res) => {
  const data = await Cloth.find({});
  console.log(data);
  res.send(data);
});

export default router;
