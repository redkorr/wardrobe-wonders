import mongoose from 'mongoose';
import { categories } from '../mockdata/categories.js';
import { config as configDotEnv } from 'dotenv';
import Category from '../models/Category.js';

configDotEnv();

mongoose.connect(
  `mongodb+srv://redkor:${process.env.MONGODB_PASSWORD}@cluster0.h7ajwxb.mongodb.net/onlineShop?retryWrites=true&w=majority`
);

try {
  await Category.insertMany(categories);
  console.log('Inserted categories');
} catch (err) {
  console.error(err);
}
