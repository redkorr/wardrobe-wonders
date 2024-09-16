import { Router } from 'express';
import Stripe from 'stripe';
import { config as dotenvConfig } from 'dotenv';

const router = Router();

dotenvConfig();

interface ShoppingCart {
  shopping_cart_id?: string;
  product_id?: string;
  currency: string;
  quantity: number;
  color: Partial<Color>;
}
interface Color {
  name: string;
  item_id?: string;
  color_name: string;
  color: string;
  images: string[];
  sizes: {
    [sizeKey: string]: Size;
  };
}

interface Size {
  stock: number;
  price: number;
}

router.post('/payment', async (req, res) => {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('Missing Secret Key');
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  try {
    const { shoppingCartItems, discountValue, orderId } = req.body;
    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
    shoppingCartItems.map((item: ShoppingCart) => {
      if (item.color.name && item.color.sizes) {
        const sizeKey = Object.keys(item.color.sizes);
        line_items.push({
          price_data: {
            currency: item.currency.toLowerCase(),
            product_data: {
              name: item.color.name,
            },
            unit_amount: item.color.sizes[sizeKey.toString()].price * 100,
          },
          quantity: item.quantity,
        });
      }
    });
    let coupon = null;
    if (discountValue) {
      coupon = await stripe.coupons.create({
        percent_off: discountValue,
        duration: 'once',
      });
    }

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      ...(coupon && { discounts: [{ coupon: coupon.id }] }),
      mode: 'payment',
      success_url: `http://localhost:5173/summary/${orderId}`,
      cancel_url: 'http://localhost:5173/shopping-cart',
    });

    return res.status(200).json({ session });
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
