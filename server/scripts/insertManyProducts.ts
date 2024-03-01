import Product from '../models/Product.js';
import mongoose from 'mongoose';
import { data } from '../mockdata/data.js';
import { config as configDotEnv } from 'dotenv';

configDotEnv();

mongoose.connect(
  `mongodb+srv://redkor:${process.env.MONGODB_PASSWORD}@cluster0.h7ajwxb.mongodb.net/onlineShop?retryWrites=true&w=majority`
);

try {
  await Product.insertMany(data);
  console.log('Inserted data');
} catch (err) {
  console.error(err);
}
