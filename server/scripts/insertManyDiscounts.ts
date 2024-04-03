import mongoose from 'mongoose';
import { discounts } from '../mockdata/discounts.js';
import { config as configDotEnv } from 'dotenv';
import Discount from '../models/Discount.js';

configDotEnv();

mongoose.connect(
  `mongodb+srv://redkor:${process.env.MONGODB_PASSWORD}@cluster0.h7ajwxb.mongodb.net/onlineShop?retryWrites=true&w=majority`
);

try {
  await Discount.insertMany(discounts);
  console.log('Inserted discounts');
} catch (err) {
  console.error(err);
}
