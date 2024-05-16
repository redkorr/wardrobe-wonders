import { Summary, NavBar } from '@/components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CheckoutFormData } from 'types';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, ZodType } from 'zod';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { updateDeliveryCost } from '@/features/shoppingCartSlice';

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
  email: z.string().email({ message: 'Wrong format.' }).min(1, { message: 'This field is required.' })
});

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(CheckoutSchema)
  });
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<CheckoutFormData> = (data) => console.log(data);

  return (
    <div>
      <NavBar />
      <div className="flex justify-center gap-32 pt-32">
        <div className="w-1/3">
          <form
            className="flex flex-col"
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
          </form>
        </div>
        <Summary
          buttonText="Buy"
          path="payment"
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Checkout;
