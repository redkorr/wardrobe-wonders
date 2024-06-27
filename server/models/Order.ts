import mongoose, { Date, Schema, model } from 'mongoose';
import { randomUUID } from 'crypto';

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
  order_id: string;
  user_id: string;
  items_price: number;
  total: number;
  date: Date;
  delivery: Delivery;
  payment: Payment;
  order_status: OrderStatus;
  order_items: Array<OrderItem> | null;
  billing_address: BillingAddress;
}

export interface Delivery {
  type: string;
  cost: number;
}

export interface Payment {
  type: string;
  cost: number;
}

export interface OrderItem {
  product_id: string;
  category: string;
  type: string;
  currency: string;
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
  phone_number: string;
  email: string;
}

const orderItemSchema = new Schema<OrderItem>({
  product_id: { type: Schema.Types.String, required: true },
  category: { type: Schema.Types.String, required: true },
  type: { type: Schema.Types.String, required: true },
  currency: { type: Schema.Types.String, required: true },
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
  phone_number: { type: Schema.Types.String, required: true },
  email: { type: Schema.Types.String, required: true },
});

const deliverySchema = new Schema<Delivery>({
  type: { type: Schema.Types.String, required: true },
  cost: { type: Schema.Types.Number, required: true },
});

const paymentSchema = new Schema<Payment>({
  type: { type: Schema.Types.String, required: true },
  cost: { type: Schema.Types.Number, required: true },
});

const orderSchema = new Schema<Order>({
  order_id: { type: Schema.Types.String, required: true, unique: true },
  user_id: { type: Schema.Types.String },
  items_price: { type: Schema.Types.Number, required: true },
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
    type: Schema.Types.Mixed,
    of: billingAddressSchema,
    required: true,
  },
  delivery: {
    type: Schema.Types.Mixed,
    of: deliverySchema,
    required: true,
  },
  payment: {
    type: Schema.Types.Mixed,
    of: paymentSchema,
    required: true,
  },
});

export default model<Order>('Order', orderSchema, 'order');
