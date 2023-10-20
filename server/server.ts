import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { config as dotenvConfig } from 'dotenv';
import routes from './routes/index.js';
dotenvConfig();

const app = express();

const uri = `mongodb+srv://redkor:${process.env.MONGODB_PASSWORD}@cluster0.h7ajwxb.mongodb.net/onlineShop?retryWrites=true&w=majority`;

async function main() {
  try {
    await mongoose.connect(uri);
    if (mongoose.connection.readyState) console.log('Connected to database.');
  } catch (error) {
    console.log(error);
  }
}
main().catch(console.dir);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  })
);

app.use('/api', routes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
