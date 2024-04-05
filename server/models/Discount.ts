import { Schema, model } from 'mongoose';

export interface Discount {
  value: number;
  code: string;
}

const discountSchema = new Schema<Discount>({
  value: {
    type: Schema.Types.Number,
    required: true,
  },
  code: {
    type: Schema.Types.String,
    unique: true,
    required: true,
  },
});

export default model<Discount>('Discount', discountSchema, 'discount');
