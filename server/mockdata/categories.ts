import { Types } from 'mongoose';
import { type Category } from '../models/Category.js';

export const categories: Array<Category> = [
  {
    name: 'cloth',
    types: [
      new Types.ObjectId('6762ba88b6b04cd8c6e40012'),
      new Types.ObjectId('6762ba88b6b04cd8c6e40013'),
      new Types.ObjectId('6762ba88b6b04cd8c6e40014'),
      new Types.ObjectId('6762ba88b6b04cd8c6e40015'),
    ],
  },
  {
    name: 'shoes',
    types: [
      new Types.ObjectId('6762ba88b6b04cd8c6e40016'),
      new Types.ObjectId('6762ba88b6b04cd8c6e40017'),
      new Types.ObjectId('6762ba88b6b04cd8c6e4001a'),
    ],
  },
  {
    name: 'accessories',
    types: [
      new Types.ObjectId('6762ba88b6b04cd8c6e40018'),
      new Types.ObjectId('6762ba88b6b04cd8c6e40019'),
    ],
  },
];
