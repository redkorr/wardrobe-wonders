import { useState } from 'react';
import { AlignJustify, ChevronLeft, Plus } from 'lucide-react';
import { BillingAddressList, BillingAddressForm } from './index';
import BillingAddressEditForm from './BillingAddressEditForm';
import { BillingAddressData } from 'types';

const MyAccountComponent = () => {
  const [index, setIndex] = useState<number>(0);
  const [billingAddress, setBillingAddress] = useState<BillingAddressData>();
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
          className="text-lg w-[48%] border h-32 m-3 relative"
          onClick={() => setIndex(2)}
        >
          Edit Billing Address
          <AlignJustify className="absolute top-4 right-4" />
        </button>
      </div>,
      <div>
        <button onClick={() => setIndex(0)}></button>
        <BillingAddressForm />
      </div>,
      <div>
        <BillingAddressList
          setIndex={setIndex}
          setBillingAddress={setBillingAddress}
        />
      </div>,
      <div>
        <button onClick={() => setIndex(2)}>
          <ChevronLeft />
        </button>
        <BillingAddressEditForm billingAddress={billingAddress} />
      </div>
    ];
    return components[index];
  };
  return <div className="w-full">{displayComponent()}</div>;
};

export default MyAccountComponent;
