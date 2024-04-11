import mongoose, { Date, Schema, model } from 'mongoose';

const order_statuses = ['PENDING', 'CANCELED', 'COMPLETED'] as const;

export type OrderStatus = (typeof order_statuses)[number];

export interface Order {
  user_id: mongoose.Types.ObjectId;
  payment_id: mongoose.Types.ObjectId;
  total: number;
  date: Date;
  order_status: OrderStatus;
  order_items: Array<OrderItem> | null;
}

export interface OrderItem {
  product_id: string;
  name: string;
  image_path: string;
  color_name: string;
  size: string;
  quantity: number;
}

const orderItemSchema = new Schema<OrderItem>({
  product_id: { type: Schema.Types.String, required: true },
  name: { type: Schema.Types.String, required: true },
  image_path: { type: Schema.Types.String, required: true },
  color_name: { type: Schema.Types.String, required: true },
  size: { type: Schema.Types.String, required: true },
  quantity: { type: Schema.Types.Number, required: true },
});

const orderSchema = new Schema<Order>({
  user_id: { type: Schema.Types.ObjectId, required: true },
  payment_id: { type: Schema.Types.ObjectId, required: true },
  total: { type: Schema.Types.Number, required: true },
  date: { type: Schema.Types.Date, required: true },
  order_status: { type: Schema.Types.String, required: true },
  order_items: {
    type: [Schema.Types.Mixed],
    of: orderItemSchema,
    default: () => null,
    required: true,
  },
});

export default model<Order>('Order', orderSchema, 'order');
