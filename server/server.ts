const mongodb = require('mongodb');
const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const uri = `mongodb+srv://redkor:${process.env.MONGODB_PASSWORD}@cluster0.h7ajwxb.mongodb.net/?retryWrites=true&w=majority`;
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
// .then((result) => console.log('connected to db'))
// .catch(error)

async function main() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (mongoose.connection.readyState) console.log('Connected to database.');
  } catch (error) {
    console.log(error);
  }
}
main().catch(console.dir);
