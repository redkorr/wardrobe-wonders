import useBillingAddress from '@/hooks/useBillingAddress';
import { useUser } from '@clerk/clerk-react';
import { ChevronLeft, Pen, Trash2 } from 'lucide-react';
import { Dispatch, useEffect } from 'react';
import { BillingAddressData } from 'types';

interface BillingAddressListProps {
  setIndex: Dispatch<React.SetStateAction<number>>;
  setBillingAddress: Dispatch<React.SetStateAction<BillingAddressData | undefined>>;
}

const BillingAddressList = ({ setIndex, setBillingAddress }: BillingAddressListProps) => {
  const { data, getBillingAddressList, deleteBillingAddress } = useBillingAddress();
  const { user } = useUser();
  useEffect(() => {
    if (user) {
      getBillingAddressList(user.id);
    }
  }, [data]);

  return (
    <div>
      <button onClick={() => setIndex(0)}>
        <ChevronLeft />
      </button>
      <div className="p-5">
        {data?.map((billingAddress) => (
          <div
            className="text-lg w-full border my-3 relative px-4 py-8"
            key={billingAddress._id}
          >
            <div className="w-full text-center">
              {`${billingAddress.first_name}
            ${billingAddress.last_name}`}
              <br />
              {`${billingAddress.address}`}
            </div>
            <button
              onClick={() => {
                setBillingAddress(billingAddress);
                setIndex(3);
              }}
            >
              <Pen className="absolute top-4 right-4 hover:text-slate-600 transition duration-200 ease-in-out" />
            </button>
            <button
              onClick={() => {
                deleteBillingAddress(billingAddress._id);
              }}
            >
              <Trash2 className="absolute top-14 right-4 hover:text-slate-600 transition duration-200 ease-in-out" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillingAddressList;
