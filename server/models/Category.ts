import mongoose, { Schema, model } from 'mongoose';

export interface Category {
  name: string;
}

const categorySchema = new Schema<Category>({
  name: {
    type: Schema.Types.String,
    unique: true,
    required: true,
  },
});

export default model<Category>('Category', categorySchema, 'category');
