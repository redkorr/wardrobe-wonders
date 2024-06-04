import mongoose, { Date, Schema, model } from 'mongoose';

const order_statuses = [
  'ACCEPTED',
  'PENDING',
  'CANCELED',
  'RETURNING',
  'RETURNED',
  'COMPLETED',
] as const;

export type OrderStatus = (typeof order_statuses)[number];

export interface Order {
  user_id: string;
  total: number;
  date: Date;
  order_status: OrderStatus;
  order_items: Array<OrderItem> | null;
  billing_address: BillingAddress;
}

export interface OrderItem {
  product_id: string;
  name: string;
  image_path: string;
  color_name: string;
  price: number;
  size: string;
  quantity: number;
}

export interface BillingAddress {
  first_name: string;
  last_name: string;
  address: string;
  postal_code: string;
  city: string;
  phone_number: number;
  email: string;
}

const orderItemSchema = new Schema<OrderItem>({
  product_id: { type: Schema.Types.String, required: true },
  name: { type: Schema.Types.String, required: true },
  image_path: { type: Schema.Types.String, required: true },
  color_name: { type: Schema.Types.String, required: true },
  price: { type: Schema.Types.Number, required: true },
  size: { type: Schema.Types.String, required: true },
  quantity: { type: Schema.Types.Number, required: true },
});

const billingAddressSchema = new Schema<BillingAddress>({
  first_name: { type: Schema.Types.String, required: true },
  last_name: { type: Schema.Types.String, required: true },
  address: { type: Schema.Types.String, required: true },
  postal_code: { type: Schema.Types.String, required: true },
  city: { type: Schema.Types.String, required: true },
  phone_number: { type: Schema.Types.Number, required: true },
  email: { type: Schema.Types.String, required: true },
});

const orderSchema = new Schema<Order>({
  user_id: { type: Schema.Types.String },
  total: { type: Schema.Types.Number, required: true },
  date: { type: Schema.Types.Date, required: true },
  order_status: { type: Schema.Types.String, required: true },
  order_items: {
    type: [Schema.Types.Mixed],
    of: orderItemSchema,
    default: () => null,
    required: true,
  },
  billing_address: {
    type: [Schema.Types.Mixed],
    of: billingAddressSchema,
    required: true,
  },
});

export default model<Order>('Order', orderSchema, 'order');
