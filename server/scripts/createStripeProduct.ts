import Stripe from 'stripe';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing Secret Key');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const paymentIntent = stripe.paymentIntents.create({
  amount: 1099,
  currency: 'pln',
});

paymentIntent
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
