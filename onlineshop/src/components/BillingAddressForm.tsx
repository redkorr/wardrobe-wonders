import useBillingAddress from '@/hooks/useBillingAddress';
import { useUser } from '@clerk/clerk-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BillingAddressData, BillingAddressFormData } from 'types';
import { ZodType, z } from 'zod';

export const CheckoutSchema: ZodType<BillingAddressFormData> = z.object({
  first_name: z.string(),
  last_name: z.string(),
  address: z.union([
    z
      .string()
      .min(1, { message: 'This field is required.' })
      .min(2, { message: 'This field must contain from 2 to 160 characters.' })
      .max(160, { message: 'This field must contain from 2 to 160 characters.' }),
    z.literal('')
  ]),
  postal_code: z.union([z.string().regex(/^\d{2}-\d{3}$/, { message: 'Wrong format.' }), z.literal('')]),
  city: z.string(),
  phone_number: z.union([
    z.string().refine((val) => isValidPhoneNumber(val), { message: 'Wrong format.' }),
    z.literal('')
  ]),
  email: z.union([z.string().email({ message: 'Wrong format.' }), z.literal('')])
});
const BillingAddressForm = () => {
  const { user } = useUser();
  const { postBillingAddress } = useBillingAddress();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<BillingAddressFormData>({
    resolver: zodResolver(CheckoutSchema)
  });

  const onSubmit: SubmitHandler<BillingAddressFormData> = (data) => {
    const billingAddress: BillingAddressData = {
      user_id: user?.id,
      first_name: data.first_name,
      last_name: data.last_name,
      address: data.address,
      postal_code: data.postal_code,
      city: data.city,
      phone_number: data.phone_number,
      email: data.email
    };
    postBillingAddress(billingAddress);
  };

  return (
    <div>
      <form
        className="flex flex-col"
        id="checkout-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="p-4">
          <p className="text-2xl font-semibold mb-3">Billing Address</p>
          <div className="flex flex-col child:flex child:flex-col gap-3 p-3 border">
            <div>
              <label>First Name</label>
              <input
                className="border p-1"
                defaultValue={user?.firstName ? user?.firstName : ''}
                placeholder="Bob"
                {...register('first_name', { required: true })}
              />
              {errors.first_name && <span>{errors.first_name.message}</span>}
            </div>
            <div>
              <label>Last Name</label>
              <input
                className="border p-1"
                defaultValue={user?.lastName ? user?.lastName : ''}
                placeholder="Kowalsky"
                {...register('last_name', { required: true })}
              />
              {errors.last_name && <span>{errors.last_name.message}</span>}
            </div>
            <div>
              <label>Address</label>
              <input
                className="border p-1"
                placeholder="Krakowska 40"
                {...register('address', { required: true })}
              />
              {errors.address && <span>{errors.address.message}</span>}
            </div>
            <div>
              <label>Postal Code</label>
              <input
                className="border p-1"
                placeholder="12-345"
                {...register('postal_code', { required: true })}
              />
              {errors.postal_code && <span>{errors.postal_code.message}</span>}
            </div>
            <div>
              <label>City</label>
              <input
                className="border p-1"
                placeholder="Katowice"
                {...register('city', { required: true })}
              />
              {errors.city && <span>{errors.city.message}</span>}
            </div>
            <div>
              <label>Phone Number</label>
              <input
                className="border p-1"
                placeholder="+48123456789"
                {...register('phone_number', { required: true })}
              />
              {errors.phone_number && <span>{errors.phone_number.message}</span>}
            </div>
            <div>
              <label>Email</label>
              <input
                className="border p-1"
                defaultValue={user?.primaryEmailAddress?.emailAddress ? user?.primaryEmailAddress.emailAddress : ''}
                placeholder="bob.kowalsky@gmail.com"
                {...register('email', { required: true })}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>
            <input
              type="submit"
              value="Save"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BillingAddressForm;
