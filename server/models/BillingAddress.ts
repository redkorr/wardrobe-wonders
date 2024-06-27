import { Schema, model } from 'mongoose';
import { BillingAddress } from './Order.js';

interface UserBillingAddress extends BillingAddress {
  user_id: string;
}

const userBillingAddressSchema = new Schema<UserBillingAddress>({
  user_id: { type: Schema.Types.String, required: true },
  first_name: { type: Schema.Types.String },
  last_name: { type: Schema.Types.String },
  address: { type: Schema.Types.String },
  postal_code: { type: Schema.Types.String },
  city: { type: Schema.Types.String },
  phone_number: { type: Schema.Types.String },
  email: { type: Schema.Types.String },
});

export default model<UserBillingAddress>(
  'UserBillingAddress',
  userBillingAddressSchema,
  'userBillingAddress'
);
