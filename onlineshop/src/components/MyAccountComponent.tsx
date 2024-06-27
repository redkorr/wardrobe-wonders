import { useState } from 'react';
import { ChevronLeft, Pen, Plus } from 'lucide-react';
import { BillingAddresses, BillingAddressForm } from './index';

const MyAccountComponent = () => {
  const [index, setIndex] = useState<number>(0);
  const displayComponent = () => {
    const components = [
      <div className="flex">
        <button
          className="text-lg w-[48%] border m-3 h-32 relative"
          onClick={() => setIndex(1)}
        >
          Add Billing Address
          <Plus className="absolute top-4 right-4" />
        </button>
        <button
          className="text-lg w-[48%] border m-3 relative"
          onClick={() => setIndex(2)}
        >
          Edit Billing Address
          <Pen className="absolute top-4 right-4" />
        </button>
      </div>,
      <div>
        <button onClick={() => setIndex(0)}>
          <ChevronLeft />
        </button>
        <BillingAddressForm />
      </div>,
      <div>
        <BillingAddresses setIndex={setIndex} />
      </div>
    ];
    return components[index];
  };
  return <div className="w-full">{displayComponent()}</div>;
};

export default MyAccountComponent;
