import mongoose, { Schema, model } from 'mongoose';

export interface Category {
  name: string;
  types: mongoose.Types.ObjectId[];
}

const categorySchema = new Schema<Category>({
  name: {
    type: Schema.Types.String,
    unique: true,
    required: true,
  },
  types: {
    type: [Schema.Types.ObjectId],
    ref: 'ProductType',
    required: true,
  },
});

export default model<Category>('Category', categorySchema, 'category');
