import { CheckoutForm, CheckoutDetails } from '@/components';
import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Checkout = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const orderId = uuidv4();

  return (
    <div>
      <div className="flex justify-center gap-32 pt-32">
        <div className="w-1/3">
          <CheckoutForm
            formRef={formRef}
            orderId={orderId}
          />
        </div>
        <CheckoutDetails
          buttonText="Pay"
          orderId={orderId}
        />
      </div>
    </div>
  );
};

export default Checkout;
