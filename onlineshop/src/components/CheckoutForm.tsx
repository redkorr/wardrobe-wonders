import { RefObject } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CheckoutFormData, OrderItem } from 'types';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, ZodType } from 'zod';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { updateDeliveryCost, updatePaymentCost } from '@/features/shoppingCartSlice';
import { useAppSelector } from '@/hooks/useAppSelector';
import useOrder from '@/hooks/useOrder';
import { useUser } from '@clerk/clerk-react';

export const CheckoutSchema: ZodType<CheckoutFormData> = z.object({
  delivery: z.string({ invalid_type_error: 'Delivery method must be selected.' }),
  first_name: z.string().min(1, { message: 'This field is required.' }),
  last_name: z.string().min(1, { message: 'This field is required.' }),
  address: z
    .string()
    .min(1, { message: 'This field is required.' })
    .min(2, { message: 'This field must contain from 2 to 160 characters.' })
    .max(160, { message: 'This field must contain from 2 to 160 characters.' }),
  postal_code: z
    .string()
    .regex(/^\d{2}-\d{3}$/, { message: 'Wrong format.' })
    .min(1, { message: 'This field is required.' }),
  city: z.string().min(1, { message: 'This field is required.' }),
  phone_number: z.string().regex(/^\d{9}$/),
  email: z.string().email({ message: 'Wrong format.' }).min(1, { message: 'This field is required.' }),
  payment: z.string({ invalid_type_error: 'Payment method must be selected.' })
});

interface CheckoutFormProps {
  formRef: RefObject<HTMLFormElement>;
}

const CheckoutForm = ({ formRef }: CheckoutFormProps) => {
  const shoppingCart = useAppSelector((state) => state.shoppingCart);
  const { user } = useUser();
  const fetchData = useOrder();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(CheckoutSchema)
  });
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<CheckoutFormData> = (data) => {
    const orderItems: Array<OrderItem> = [];
    shoppingCart.items.forEach((item) => {
      if (item.color.images && item.color.sizes) {
        const sizeKey = Object.keys(item.color.sizes);
        orderItems.push({
          product_id: item.product_id,
          name: item.color.name,
          image_path: item.color.images[0],
          color_name: item.color.color_name,
          price: item.color.sizes[sizeKey.toString()].price,
          size: sizeKey.toString(),
          quantity: item.quantity
        });
      }
    });
    fetchData({
      user_id: user?.id,
      total: shoppingCart.total_value,
      date: new Date(),
      billing_address: {
        first_name: data.first_name,
        last_name: data.last_name,
        address: data.address,
        postal_code: data.postal_code,
        city: data.city,
        phone_number: data.phone_number,
        email: data.email
      },
      order_items: orderItems,
      order_status: 'ACCEPTED'
    });
  };
  return (
    <div>
      <form
        className="flex flex-col"
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="p-4">
          <p className="text-2xl font-semibold mb-3">Delivery Method</p>
          <div className="p-3 border">
            <div
              className="w-full"
              onClick={() => dispatch(updateDeliveryCost(14.9))}
            >
              <label className="flex w-full p-2">
                <input
                  type="radio"
                  value={'courier'}
                  {...register('delivery')}
                />
                <div className="flex w-full justify-between ml-2">
                  <p className="font-semibold">Courier</p>
                  <p>14,90 PLN</p>
                </div>
              </label>
            </div>
            <div
              className="w-full"
              onClick={() => dispatch(updateDeliveryCost(9.9))}
            >
              <label className="flex w-full p-2">
                <input
                  type="radio"
                  value={'inpost'}
                  {...register('delivery')}
                />
                <div className="flex w-full justify-between ml-2">
                  <p className="font-semibold">InPost Paczkomat</p>
                  <p>9,90 PLN</p>
                </div>
              </label>
            </div>
            <div
              className="w-full"
              onClick={() => dispatch(updateDeliveryCost(0))}
            >
              <label className="flex w-full p-2">
                <input
                  type="radio"
                  value={'self_pickup'}
                  {...register('delivery')}
                />
                <div className="flex w-full justify-between ml-2">
                  <p className="font-semibold">Self Pickup</p>
                  <p>0,00 PLN</p>
                </div>
              </label>
            </div>
          </div>
          {errors.delivery?.message && <span>{errors.delivery.message}</span>}
        </div>
        <div className="p-4">
          <p className="text-2xl font-semibold mb-3">Billing Address</p>
          <div className="flex flex-col child:flex child:flex-col gap-3 p-3 border">
            <div>
              <label>First Name</label>
              <input
                className="border p-1"
                {...register('first_name', { required: true })}
              />
              {errors.first_name && <span>{errors.first_name.message}</span>}
            </div>
            <div>
              <label>Last Name</label>
              <input
                className="border p-1"
                {...register('last_name', { required: true })}
              />
              {errors.last_name && <span>{errors.last_name.message}</span>}
            </div>
            <div>
              <label>Address</label>
              <input
                className="border p-1"
                {...register('address', { required: true })}
              />
              {errors.address && <span>{errors.address.message}</span>}
            </div>
            <div>
              <label>Postal Code</label>
              <input
                className="border p-1"
                {...register('postal_code', { required: true })}
              />
              {errors.postal_code && <span>{errors.postal_code.message}</span>}
            </div>
            <div>
              <label>City</label>
              <input
                className="border p-1"
                {...register('city', { required: true })}
              />
              {errors.city && <span>{errors.city.message}</span>}
            </div>
            <div>
              <label>Phone Number</label>
              <input
                className="border p-1"
                {...register('phone_number', { required: true })}
              />
              {errors.phone_number && <span>{errors.phone_number.message}</span>}
            </div>
            <div>
              <label>Email</label>
              <input
                className="border p-1"
                {...register('email', { required: true })}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>
          </div>
        </div>
        <div className="p-4">
          <p className="text-2xl font-semibold mb-3">Payment Method</p>
          <div className="p-3 border">
            <div
              className="w-full"
              onClick={() => dispatch(updatePaymentCost(0.0))}
            >
              <label className="flex w-full p-2">
                <input
                  type="radio"
                  value={'online_payment'}
                  {...register('payment')}
                />
                <div className="flex w-full justify-between ml-2">
                  <p className="font-semibold">Online payment</p>
                  <p>0,00 PLN</p>
                </div>
              </label>
            </div>
            <div
              className="w-full"
              onClick={() => dispatch(updatePaymentCost(0.0))}
            >
              <label className="flex w-full p-2">
                <input
                  type="radio"
                  value={'visa_card'}
                  {...register('payment')}
                />
                <div className="flex w-full justify-between ml-2">
                  <p className="font-semibold">Visa card</p>
                  <p>0,00 PLN</p>
                </div>
              </label>
            </div>
            <div
              className="w-full"
              onClick={() => dispatch(updatePaymentCost(0.0))}
            >
              <label className="flex w-full p-2">
                <input
                  type="radio"
                  value={'bank_transfer'}
                  {...register('payment')}
                />
                <div className="flex w-full justify-between ml-2">
                  <p className="font-semibold">Bank transfer</p>
                  <p>0,00 PLN</p>
                </div>
              </label>
            </div>
            <div
              className="w-full"
              onClick={() => dispatch(updatePaymentCost(5.0))}
            >
              <label className="flex w-full p-2">
                <input
                  type="radio"
                  value={'cod'}
                  {...register('payment')}
                />
                <div className="flex w-full justify-between ml-2">
                  <p className="font-semibold">Cash on delivery</p>
                  <p>5,00 PLN</p>
                </div>
              </label>
            </div>
          </div>
          {errors.payment?.message && <span>{errors.payment.message}</span>}
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
