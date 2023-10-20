import { Schema, model } from 'mongoose';
import { randomUUID } from 'crypto';

export interface Description {
  body: string;
  fabric_main: string[];
  fabric_other?: string[];
  fabric_inside?: string[];
}
export interface Cloth {
  item_id?: Schema.Types.UUID;
  product_id?: Schema.Types.UUID;
  sex: string;
  name: string;
  price: string;
  type: string;
  images: string[];
  description: Description;
  color: string;
  size: string;
  stock: number;
}

const clothSchema = new Schema<Cloth>({
  item_id: {
    type: Schema.Types.UUID,
    default: () => randomUUID(),
    required: true,
    unique: true,
  },
  product_id: {
    type: Schema.Types.UUID,
    default: () => randomUUID(),
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
    type: Schema.Types.String,
    required: true,
  },
  type: {
    type: Schema.Types.String,
    required: true,
  },
  images: {
    type: [Schema.Types.String],
    required: true,
  },
  description: {
    body: {
      type: Schema.Types.String,
      required: true,
    },
    fabric_main: {
      type: [Schema.Types.String],
      required: true,
    },
    fabric_other: {
      type: [Schema.Types.String],
      required: true,
    },
    fabric_inside: {
      type: [Schema.Types.String],
      required: true,
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

export default model<Cloth>('Cloth', clothSchema, 'cloth');
