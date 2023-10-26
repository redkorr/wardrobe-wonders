import mongoose from 'mongoose';
import { productTypes } from '../mockdata/productTypes.js';
import { config as configDotEnv } from 'dotenv';
import ProductType from '../models/ProductType.js';

configDotEnv();

mongoose.connect(
  `mongodb+srv://redkor:${process.env.MONGODB_PASSWORD}@cluster0.h7ajwxb.mongodb.net/onlineShop?retryWrites=true&w=majority`
);

try {
  await ProductType.insertMany(productTypes);
  console.log('Inserted product types');
} catch (err) {
  console.error(err);
}
