import Cloth from './models/Cloth.js';

import mongoose from 'mongoose';

import { data } from './data.js';

import { config as configDotEnv } from 'dotenv';
configDotEnv();

mongoose.connect(
  `mongodb+srv://redkor:${process.env.MONGODB_PASSWORD}@cluster0.h7ajwxb.mongodb.net/onlineShop?retryWrites=true&w=majority`
);

try {
  await Cloth.insertMany(data);
  console.log('Inserted');
} catch (err) {
  console.error(err);
}
