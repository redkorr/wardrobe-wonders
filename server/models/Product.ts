import mongoose, { Schema, model } from 'mongoose';
import { randomUUID } from 'crypto';

export interface Description {
  body: string;
  fabric_main: string[] | null;
  fabric_other?: string[] | null;
  fabric_inside?: string[] | null;
}

export interface Size {
  stock: number;
  price: number;
}

export interface Product {
  product_id?: string;
  sex: string;
  currency: string;
  category: mongoose.Types.ObjectId;
  type: mongoose.Types.ObjectId;
  colors: Color[] | null;
  description: Description;
}

export interface Color {
  name: string;
  color_name: string;
  color: string;
  sizes: {
    [sizeKey: string]: Size;
  };
  images: string[] | null;
}

const sizeSchema = new Schema<Size>({
  stock: { type: Schema.Types.Number, required: true },
  price: { type: Schema.Types.Number, required: true },
});

const colorSchema = new Schema<Color>({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  color_name: { type: Schema.Types.String, required: true },
  color: { type: Schema.Types.String, required: true },
  sizes: {
    type: Schema.Types.Mixed,
    of: sizeSchema,
  },
  images: {
    type: [Schema.Types.String],
    default: () => null,
    required: true,
  },
});

const productSchema = new Schema<Product>({
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
    type: Schema.Types.ObjectId,
    ref: 'ProductType',
    required: true,
  },

  colors: {
    type: [Schema.Types.Mixed],
    of: colorSchema,
    default: () => null,
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
});

export default model<Product>('Product', productSchema, 'product');
