import { Types } from 'mongoose';
import { type Category } from '../models/Category.js';

export const categories: Array<Category> = [
  {
    name: 'cloth',
    types: [
      new Types.ObjectId('653a64ff0de8e3dc995d7691'),
      new Types.ObjectId('653a64ff0de8e3dc995d7692'),
      new Types.ObjectId('653a64ff0de8e3dc995d7693'),
      new Types.ObjectId('653a64ff0de8e3dc995d7694'),
    ],
  },
  {
    name: 'shoes',
    types: [
      new Types.ObjectId('653a64ff0de8e3dc995d7695'),
      new Types.ObjectId('653a64ff0de8e3dc995d7696'),
    ],
  },
  {
    name: 'accessories',
    types: [
      new Types.ObjectId('653a64ff0de8e3dc995d7697'),
      new Types.ObjectId('653a64ff0de8e3dc995d7698'),
    ],
  },
];
