import mongoose, { Schema, model } from 'mongoose';
import { randomUUID } from 'crypto';

export interface Description {
  body: string;
  fabric_main: string[] | null;
  fabric_other?: string[] | null;
  fabric_inside?: string[] | null;
}

export interface Product {
  item_id?: string;
  product_id?: string;
  sex: string;
  name: string;
  price: number;
  currency: string;
  category: mongoose.Types.ObjectId;
  type: string;
  images: string[] | null;
  description: Description;
  color: string;
  size: string;
  stock: number;
}

const productSchema = new Schema<Product>({
  item_id: {
    type: Schema.Types.String,
    default: () => randomUUID().toString(),
    required: true,
    unique: true,
  },
  product_id: {
    type: Schema.Types.String,
    default: () => randomUUID().toString(),
    required: true,
    unique: true,
  },
  sex: {
    type: Schema.Types.String,
    required: true,
  },
  name: {
    type: Schema.Types.String,
    required: true,
  },
  price: {
    type: Schema.Types.Number,
    required: true,
  },
  currency: {
    type: Schema.Types.String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  type: {
    type: Schema.Types.String,
    required: true,
  },
  images: {
    type: [Schema.Types.String],
    default: () => null,
    required: true,
  },
  description: {
    body: {
      type: Schema.Types.String,
      required: true,
    },
    fabric_main: {
      type: [Schema.Types.String],
      default: () => null,
      required: true,
    },
    fabric_other: {
      type: [Schema.Types.String],
      default: () => null,
    },
    fabric_inside: {
      type: [Schema.Types.String],
      default: () => null,
    },
  },
  color: {
    type: String,
    require: true,
  },
  size: {
    type: Schema.Types.String,
    require: true,
  },
  stock: {
    type: Schema.Types.Number,
    require: true,
  },
});

export default model<Product>('Product', productSchema, 'product');
