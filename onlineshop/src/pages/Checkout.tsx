import { NavBar, CheckoutForm, CheckoutDetails } from '@/components';
import { useRef } from 'react';

const Checkout = () => {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <div>
      <NavBar />
      <div className="flex justify-center gap-32 pt-32">
        <div className="w-1/3">
          <CheckoutForm formRef={formRef} />
        </div>
        <CheckoutDetails
          buttonText="Pay"
          path="summary"
          formRef={formRef}
        />
      </div>
    </div>
  );
};

export default Checkout;
