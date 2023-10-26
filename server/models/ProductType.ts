import { Schema, model } from 'mongoose';

export interface ProductType {
  name: string;
  display_name?: string;
}

const productTypeSchema = new Schema<ProductType>({
  name: {
    type: Schema.Types.String,
    unique: true,
    required: true,
  },
  display_name: {
    type: Schema.Types.String,
  },
});

export default model<ProductType>(
  'ProductType',
  productTypeSchema,
  'productType'
);
